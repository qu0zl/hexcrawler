import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    tableItems: DS.hasMany('table-item', {async: false, inverse: null}),
    roll() {
        var result = this.diceroll.roll();
        console.log(`table result for ${this.title} is ${result}`);
        var matched_item = this.tableItems.filter( function(item, index, enumerable) {
            if (item.match(this)) {
                console.log(`match for ${this}`);
            }
            return item.match(this);
        }, result).firstObject;
        
        if (!matched_item)
            debugger;
        console.log(`matched item text is ${matched_item.render()}`);
    }
});
