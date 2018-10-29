import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    tableItems: DS.hasMany('table-item', {async: false, inverse: null}),
    subTables: DS.hasMany('table', {async: false, inverse: null}),
    roll() {
        var return_data = [];
        var result = this.diceroll.roll();
        var matched_item = this.tableItems.filter( function(item, index, enumerable) {
            return item.match(this);
        }, result).firstObject;
     
        return_data = this.subTables.invoke("roll");
        return matched_item.render() + return_data;
    }
});
