import DS from 'ember-data';

export default DS.Model.extend({
    count: DS.attr('number'),
    type: DS.attr('number'),
    table: DS.belongsTo('table', { async: false }),
});
