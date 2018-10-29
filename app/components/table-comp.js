import Component from '@ember/component';

export default Component.extend({
  actions: {
    rollTable(table) {
        var result = table.roll();
        $('.output').html(result["text"]);
        $('.npcs').html(result["stats"]);
    }
  }
});
