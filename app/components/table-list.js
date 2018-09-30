import Component from '@ember/component';

export default Component.extend({
  actions: {
    showTable(table) {
      alert(table.title);
    }
  }
});
