import Component from '@ember/component';

export default Component.extend({
  actions: {
    rollTable(table) {
      console.log(table.diceroll.type);
        table.diceroll.roll();
    }
  }
});
