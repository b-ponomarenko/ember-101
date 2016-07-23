import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {


  this.route('friends', function() {
    this.route('new');

    this.route('show', {
      path: ':friend_id'
    }, function () {
      this.route('loans', { resetNamespace: true }, function () {
      	//TODO: Почему при использовании интерфейса все круто,
				//TODO: а если вставить просто ссылку в адресную строку, то вылезают ошибки? http://localhost:4200/friends/10/loans
        this.route('new');
      });
    });
    this.route('edit', {
      path: ':friend_id/edit'
    });
  });


  this.route('articles', function() {
    this.route('new');

    this.route('show', {
      path: ':article_id'
    });

    this.route('edit', {
      path: ':article_id/edit'
    });
  });
});

export default Router;
