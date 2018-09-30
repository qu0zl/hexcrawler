import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    diceroll: DS.belongsTo('diceroll', {async: false}),
    speak() {
        alert('wtf');
    }
});
