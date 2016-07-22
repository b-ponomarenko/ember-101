import Ember from 'ember';

export default Ember.Component.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.email'),
  hasLastName: Ember.computed.notEmpty('model.email'),
  hasTwitter: Ember.computed.notEmpty('model.email'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save() {
      console.log('+- save action in edit-form component');
      if ( this.get('isValid') ) {
        this.get('model').save()
          .then(friend=>this.save(friend))
          .catch(() => {
            this.set('errorMessage', 'there was something wrong saving the model');
          });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel(this.get('model'));
    }
  }
});
