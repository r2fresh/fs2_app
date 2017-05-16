define([
   'module',
   'text!tpl/SignUp.html',
   'Handlebars',
   'backbone'
   ],
   function(module, SignUp, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        el: '#sign_up',
        render:function(){
            if(this.$el.children().length === 0){
                this.el.innerHTML = SignUp;
            }
        },
        hide : function(){
            this.$el.addClass('displayNone');
        },
        show : function(){
            this.$el.removeClass('displayNone');
        }
 	}))

})
