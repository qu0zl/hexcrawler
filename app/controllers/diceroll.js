import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    roll() {
      alert('rolling');
      //this.toggleProperty('isExpanded');
    }
  }
});
