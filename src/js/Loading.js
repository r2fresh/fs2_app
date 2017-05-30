define([
 	'module',
 	'text!tpl/Loading.html',
    'Handlebars',
    'backbone'
 	],
 	function(module, Loading, Handlebars, Backbone){

        'use strict'

 		module.exports = new (Backbone.View.extend({
            className : '',
            callback : null,
            render:function(obj){
                this.className = 'gis-loading';

                this.setElement(R2.Dialog.render(this.className, Loading));

                this.setMessage(obj.msg);
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
