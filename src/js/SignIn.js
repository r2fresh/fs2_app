define([
   'module',
   'text!tpl/SignIn.html',
   'Handlebars',
   'backbone'
   ],
   function(module, SignIn, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        el: '#sign_in',
        render:function(){
            if(this.$el.children().length === 0){
                this.el.innerHTML = SignIn;
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
