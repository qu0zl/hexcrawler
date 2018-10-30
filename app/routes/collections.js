import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('collection');
    },

    afterModel() {
        return Ember.RSVP.hash({
            tables: this.store.findAll('table'),
            tableItems: this.store.findAll('tableItem'),
            encounters: this.store.findAll('encounter'),
            npcs: this.store.findAll('npc'),
            dicerolls: this.store.findAll('diceroll')
        });
    }
});
