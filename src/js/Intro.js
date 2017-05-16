define([
   'module',
   'text!tpl/Intro.html',
   'Handlebars',
   'backbone'
   ],
   function(module, Intro, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        el: '#intro',
        render:function(Sub){
            if(this.$el.children().length === 0){
                this.el.innerHTML = Intro;
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
