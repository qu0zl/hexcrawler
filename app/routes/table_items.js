import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('tableItem', {include:'encounters, tables, tables.diceroll, tables.tableItems, tables.tableItems.encounters'});
    }
});
