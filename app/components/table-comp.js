import Component from '@ember/component';

export default Component.extend({
  actions: {
    rollTable(table) {
        var rendered_text = table.roll();
        $('.output').html(rendered_text);
    }
  }
});
