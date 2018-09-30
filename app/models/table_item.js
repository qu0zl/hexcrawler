import DS from 'ember-data';

export default DS.Model.extend({
    from: DS.attr('number'),
    to: DS.attr('number'),
    encounters: DS.hasMany('encounter', {async: false}),
    tables: DS.hasMany('table', {async: false}),
    match(value_to_compare) {
        return value_to_compare >= this.from && value_to_compare <= this.to;
    },
    child() {
        if (this.encounters.firstObject) {
            return this.encounters
        }
        return this.tables;
    },
});
