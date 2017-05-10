define([
   'module',
   'text!tpl/Main.html',
   'TopNavi',
   'Party',
   'Handlebars',
   'backbone'
   ],
   function(module, Main, TopNavi, Party, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        el: '#main',
        render:function(mainMenu){
            if(this.$el.children().length === 0){
                this.el.innerHTML = Main;

                TopNavi.render();
                TopNavi.show();

                Party.render();
                Party.show();
            }
        },
        hide : function(){
            TopNavi.hide();
            this.$el.addClass('displayNone');
        },
        show : function(){
            this.$el.removeClass('displayNone');
        }
 	}))

})
