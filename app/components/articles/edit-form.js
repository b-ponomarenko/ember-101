import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed.notEmpty('model.name'),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then(friend=>this.save(friend));
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
