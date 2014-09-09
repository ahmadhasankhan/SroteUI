import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
  	popupclose:function(){
  		Ember.$('#model2').hide();
  		Ember.$('#model1').attr('style', 'display:none !important');
  		
  	}
  }
});
