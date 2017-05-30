define([
 	'module',
 	'text!tpl/PartyCreate.html',
    'Handlebars',
    'backbone'
 	],
 	function(module, PartyCreate, Handlebars, Backbone){

        'use strict'

 		module.exports = new (Backbone.View.extend({
            className : '',
            callback : null,
            events :{
                'click .close,.party-create-submit,.party-create-cancel' : 'onClose'
            },
            render:function(obj){
                this.className = 'gis-loading';

                this.setElement(R2.Dialog.render(this.className, PartyCreate));

                this.setMessage(obj.msg);

                this.$el.find('.close, .r2-dialog-backdrop, #confirm').bind('click',(evt)=>{
                    R2.Dialog.destroy();
                })
            },
            onClose(){
                R2.Dialog.destroy();
            },
            setMessage(msg){
                this.$el.find('.message').html(msg)
            },
            destroy:function(){
                R2.Dialog.destroy();
            }
        }))
 	}
)
