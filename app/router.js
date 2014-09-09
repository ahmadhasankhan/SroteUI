import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NewThemeENV.locationType
});

Router.map(function() {
	this.resource('index',{path:'/'});
});

export default Router;
