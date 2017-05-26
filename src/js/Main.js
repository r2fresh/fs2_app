define([
   'module',
   'text!tpl/Main.html',
   'Handlebars',
   'backbone',
   'slideout'
   ],
   function(module, Main, Handlebars, Backbone, Slideout){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        el: '#main',
        events: {
            "keydown" : "keyAction",
        },
        render:function(mainMenu){
            if(this.$el.children().length === 0){
                this.el.innerHTML = Main;

                this.setSlideout();
            }
        },
        setSlideout(){
            var slideout = new Slideout({
            'panel': document.getElementById('main'),
            'menu': document.getElementById('nav-side'),
            'padding': 256,
            'tolerance': 70
            });

            // Default Open
            //slideout.open();

            this.el.querySelector('.side-toggle-btn').addEventListener('click', function(){
                slideout.toggle();
            })

            // Toggle button
            // document.querySelector('.toggle-button').addEventListener('click', function() {
            //     slideout.toggle();
            //     if(slideout.isOpen()){
            //         //alert("You Opened!");
            //     }else{
            //         //alert("You Closed!");
            //     }
            // });
        },
        hide : function(){
            //TopNavi.hide();
            this.$el.addClass('displayNone');
        },
        show : function(){
            this.$el.removeClass('displayNone');
        }
 	}))

})
