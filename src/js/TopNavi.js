define([
   'module',
   'text!tpl/TopNavi.html',
   'Handlebars',
   'backbone'
   ],
   function(module, TopNavi, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        render:function(Sub){
            this.setElement('#top_navi');
            if(this.$el.children().length === 0){
                this.el.innerHTML = TopNavi;
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
