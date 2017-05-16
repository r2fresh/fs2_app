define([
   'module',
   'text!tpl/Party.html',
   'Handlebars',
   'backbone'
   ],
   function(module, Party, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        render:function(Sub){
            this.setElement('#party');
            if(this.$el.children().length === 0){
                this.el.innerHTML = Party;
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
