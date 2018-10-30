import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    tables: DS.hasMany('table', {async: false, inverse:null}),
});
