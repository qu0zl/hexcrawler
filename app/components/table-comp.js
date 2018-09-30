import Component from '@ember/component';

export default Component.extend({
  actions: {
    rollTable(table) {
        table.roll();
    }
  }
});
