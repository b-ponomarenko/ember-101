import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting) {
    if ( isExiting ) {
      let model = controller.get('model');
      console.log(model);
      model.rollbackAttributes();
    }
  }
});
