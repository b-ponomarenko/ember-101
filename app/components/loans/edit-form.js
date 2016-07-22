import Ember from 'ember';

const {
  inject: {service}
} = Ember;

export default Ember.Component.extend({
  store: service(),
  articles: Ember.computed({
    get() {
      return this.get('store').findAll('article');
    }
  }).readOnly(),
  save() {
    this.get('model').save()
      .then(model => this.back(model.get('friend')))
      .catch(() => this.set('errorMessage', 'there was something wrong saving the loan'));
  },
  cancel() {
    this.back(this.get('model.friend'));
  }
});
