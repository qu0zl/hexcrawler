import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('collection', { include: 'tables, tables.diceroll, tables.tableItems, tables.tableItems.encounters, tables.tableItems.encounters.npcs' });
    }
});
