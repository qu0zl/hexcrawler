import Component from '@ember/component';

export default Component.extend({
  actions: {
    rollTable(table) {
      console.log(table.dicerolls.firstObject.type);
        table.dicerolls.firstObject.roll();
    }
  }
});
