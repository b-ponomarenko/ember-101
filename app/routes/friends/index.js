import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * model hook
   * @returns {*|Promise}
     */
  model() {
    return this.store.findAll('friend');
  }
});
