import Component from '@ember/component';

export default Component.extend({
  actions: {
    rollTable(table) {
        var rendered_text = table.roll();
        console.log(`Rendered text is ${rendered_text}`);
    }
  }
});
