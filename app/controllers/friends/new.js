import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      console.info('---save model---');
      this.transitionToRoute('friends.show', model);
    },
    cancel() {
      console.log('+--- cancel action called in friends new controller');
    }
  }
});
