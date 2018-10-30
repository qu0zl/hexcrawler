import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('table', { include: 'subTables, subTables.diceroll, subTables.tableItems, subTables.tableItems.encounters, subTables.tableItems.encounters.npcs, diceroll, tableItems, tableItems.encounters, tableItems.encounters.npcs' });
    }
});
