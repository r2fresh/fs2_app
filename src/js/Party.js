define([
   'module',
   'text!tpl/Party.html',
   'PartyCreate',
   'Handlebars',
   'backbone'
   ],
   function(module, Party, PartyCreate, Handlebars, Backbone){
	'use strict'
 	module.exports = new (Backbone.View.extend({
        events:{
            'click #party-create-btn':'onClickPartyCreateHandler'
        },
        render:function(){
            this.setElement('#party');
            if(this.$el.children().length === 0){
                this.el.innerHTML = Party;
            }
        },
        onClickPartyCreateHandler(evt){
            PartyCreate.render({'msg':`에 해당하는 Route 목록을 가지고 오는 중입니다.`});
        },
        hide : function(){
            this.$el.addClass('displayNone');
        },
        show : function(){
            this.$el.removeClass('displayNone');
        }
 	}))

})
