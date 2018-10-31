import DS from 'ember-data';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function table_roll(store, tableID) {
    var table = store.peekRecord('table', tableID);
    var table_data = table.roll();
    return table_data["text"]+table_data["stats"];
}

function roll(amount, type) {
    var count = 0;
    for (var i=0; i<amount; i++) {
        count += getRandomInt(1, type);
    }
    return count;
}

function replace_markers(store, text) {
    var matches = text.match(/!d\[.*?]/gi);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var split = matches[i].split('[')[1].split(/d/i);
            var dice_type = split[1];
            var minus = dice_type.indexOf('-');
            var plus = dice_type.indexOf('+');
            if (minus != -1)
                minus = parseInt(dice_type.substring(minus+1));
            else
                minus = 0;
            if (plus != -1) {
                plus = parseInt(dice_type.substring(plus+1));
            }
            else
                plus = 0;

            var count = roll(split[0], parseInt(dice_type));
            count += plus;
            count -= minus;
            text = text.replace(matches[i], count);
        }
    }
    matches = text.match(/!t\[.*?]/g);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var tableID = matches[i].split('[')[1].split(']')[0];
            text = text.replace(matches[i], table_roll(store, tableID));
        }
    }
    return text;
}

export default DS.Model.extend({
    title: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    tableItems: DS.hasMany('table-item', {async: false, inverse: null}),
    subTables: DS.hasMany('table', {async: false, inverse: null}),
    roll() {
        var return_data = {};
        var subtable_data = [];
        var result = this.diceroll.roll();
        var values = this.tableItems;
        var matched_item = values.filter( function(item, index, enumerable) {
            return item.match(this);
        }, result).firstObject;
    
        return_data = matched_item.render();
        subtable_data = this.subTables.invoke("roll");

        for (var i = 0; i < subtable_data.length; i++) {
            return_data["text"] = `${return_data["text"]}<br>${subtable_data[i]["text"]}`;
            return_data["stats"] = return_data["stats"] + subtable_data[i]["stats"]; 
        }

        if (return_data["text"]) {
            return_data["text"] = replace_markers(this.store, return_data["text"]);
        }
        if (return_data["stats"].length) {
            return_data["stats"] = replace_markers(this.store, return_data["stats"]+"");
        }

        return return_data;
    },
});
