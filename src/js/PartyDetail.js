define([
   'module',
   'text!tpl/PartyDetail.html',
   'Handlebars',
   'backbone'
   ],
   function(module, PartyDetail, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        events:{

        },
        render:function(){
            this.setElement('#party_detail');
            if(this.$el.children().length === 0){
                this.el.innerHTML = PartyDetail;
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
