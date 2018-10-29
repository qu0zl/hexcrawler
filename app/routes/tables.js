import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('table', { include: 'diceroll, tableItems, tableItems.encounters, tableItems.encounters.npcs' });
    }
});
