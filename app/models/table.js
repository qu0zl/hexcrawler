import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    tableItems: DS.hasMany('table-item', {async: false}),
    roll() {
        var result = this.diceroll.roll();
        console.log(`table result is ${result}`);
        //debugger;
        var matched_item = this.tableItems.filter( function(item, index, enumerable) {
            console.log(`attempting match for ${this} against ${item.from}-${item.to}`);
            if (item.match(this)) {
                console.log(`match for ${this}`);
            }
            return item.match(this);
        }, result).firstObject;

    }
});
