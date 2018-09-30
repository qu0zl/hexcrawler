import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    items: DS.hasMany('table-items', {async: false}),
    roll() {
        var result = this.diceroll.roll();
        console.log(`table result is ${result}`);
    }
});
