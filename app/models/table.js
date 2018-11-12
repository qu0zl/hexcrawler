import DS from 'ember-data';

function merge_data_arrays(a, b, use_comma=false) {
    if (b["text"]) {
        if(a["text"]) {
            if (use_comma)
                a["text"] = a["text"]+", "+b["text"]
            else
                a["text"] = a["text"]+b["text"]
        }
        else
            a["text"] = b["text"]
    }
    if (b["stats"]) {
        if(a["stats"])
            a["stats"] = a["stats"]+b["stats"]
        else
            a["stats"] = b["stats"]
    }
    return a;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function table_roll(store, tableID) {
    var table = store.peekRecord('table', tableID);
    var table_data = table.roll(false);
    return `${table_data["text"] ? table_data["text"] : ""}${table_data["stats"] ? table_data["stats"] : ""}`;
}

function roll(amount, type) {
    var count = 0;
    for (var i=0; i<amount; i++) {
        count += getRandomInt(1, type);
    }
    return count;
}

function replace_dice(text) {
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
    return text;
}

function replace_markers(store, text) {
    text = replace_dice(text);

    var matches = text.match(/!t\[.*?]/g);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var tableID = matches[i].split('[')[1].split(']')[0];
            text = text.replace(matches[i], table_roll(store, tableID));
        }
    }
    matches = text.match(/!ts\[.*?]/g);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var contents = matches[i].split('[')[1].split(']')[0];
            var components = contents.split('|');
            var tableID = components[0];
            var should_run = true;
            if (components.length > 1) {
               var parts = components[1].split('_in_');
               should_run = getRandomInt(1,parseInt(parts[1])) <= parseInt(parts[0]);
            }
            if (should_run)
                text = text.replace(matches[i], `<p class='table_small'>${table_roll(store, tableID)}</p>`);
            else
                text = text.replace(matches[i], "");
        }
    }
    return text;
}

export default DS.Model.extend({
    title: DS.attr(),
    text: DS.attr(),
    hide: DS.attr('boolean', { defaultValue: false }),
    options: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    timesToRoll: DS.attr( { defaultValue: 1} ),
    tableItems: DS.hasMany('table-item', {async: false, inverse: null}),
    subTables: DS.hasMany('table', {async: false, inverse: null}),
    roll(use_div=true){
        var return_data = {}
        var count = this.timesToRoll;
        if (typeof(count) == "string") {
            count = parseInt(replace_dice(this.timesToRoll));
        }
        for (var i=0; i<count; i++) {
            var use_comma = this.options == 'inline';
            merge_data_arrays(return_data, this.roll_inner(use_div, this.options), use_comma );
        }
        return return_data;
    },
    roll_inner(use_div=true, options="") {
        var classes = `table_inner ${options=='inline' ? 'table_inline':''}`;
        var return_data = { "text": use_div ? `<div class='${classes}'>` : "", "stats":""};
        var subtable_data = [];

        if (this.diceroll) { // some tables can have no dicerolls, just text
            var result = this.diceroll.roll();
            var values = this.tableItems;
            var matched_item = values.filter( function(item, index, enumerable) {
                return item.match(this);
            }, result).firstObject;

            return_data = merge_data_arrays(return_data, matched_item.render());
        }

        if (this.text)
            return_data["text"] = `<span class='table_text'>${this.text}</span>` + return_data["text"];

        subtable_data = this.subTables.invoke("roll");

        for (var i = 0; i < subtable_data.length; i++) {
            return_data["text"] = `${return_data["text"]} ${subtable_data[i]["text"]}`;
            if (subtable_data[i]["stats"])
                return_data["stats"] = return_data["stats"] + subtable_data[i]["stats"]; 
        }

        if (return_data["text"]) {
            return_data["text"] = replace_markers(this.store, return_data["text"]);
            if (use_div)
                return_data["text"] = return_data["text"] + "</div>";
        }
        if (return_data["stats"].length) {
            return_data["stats"] = replace_markers(this.store, return_data["stats"]+"");
        }

        return return_data;
    },
});
