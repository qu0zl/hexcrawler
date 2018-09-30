import DS from 'ember-data';

export default DS.Model.extend({
    count: DS.attr('number'),
    type: DS.attr('number'),
    tables: DS.hasMany('table', { async: false }),
    roll() {
        console.log(`rolling ${this.count}d${this.type}`);
        var result = 0;
        for (var i=0; i<this.count; i++) {
            var die_roll = Math.floor(Math.random() * this.type)+1;
            console.log(`roll ${i+1} is ${die_roll}`);
            result += die_roll;
        }
        console.log(`result is ${result}`);
        return result;
    }
});
