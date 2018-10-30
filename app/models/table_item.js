import DS from 'ember-data';

export default DS.Model.extend({
    from: DS.attr('number'),
    to: DS.attr('number'),
    encounters: DS.hasMany('encounter', {async: false, inverse:null}),
    tables: DS.hasMany('table', {async: false, inverse: null}),
    match(value_to_compare) {
        return value_to_compare >= this.from && value_to_compare <= this.to;
    },
    render() {
        if (this.encounters.firstObject) {
            return this.encounters.firstObject.render();
        }
        return this.tables.firstObject.roll();
    },
});
