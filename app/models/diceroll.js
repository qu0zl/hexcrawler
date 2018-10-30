import DS from 'ember-data';

export default DS.Model.extend({
    count: DS.attr('number'),
    type: DS.attr('number'),
    roll() {
        var result = 0;
        for (var i=0; i<this.count; i++) {
            var die_roll = Math.floor(Math.random() * this.type)+1;
            result += die_roll;
        }
        return result;
    }
});
