import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('collection', { include: 'tables, tables.subTables, tables.subTables.diceroll, tables.subTables.tableItems, tables.subTables.tableItems.encounters, tables.subTables.tableItems.encounters.npcs, tables.diceroll, tables.tableItems, tables.tableItems.encounters, tables.tableItems.encounters.npcs' });
    }
});
