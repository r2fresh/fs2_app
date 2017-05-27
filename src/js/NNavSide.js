define([
   'module',
   'text!tpl/NNavSide.html',
   'Handlebars',
   'backbone'
   ],
   function(module, NavSide, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        el: '#nav-side',
        render:function(mainMenu){
            if(this.$el.children().length === 0){
                this.el.innerHTML = NavSide;
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
