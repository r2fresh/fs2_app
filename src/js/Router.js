define([
   'module',
   'Main',
   'Rp',
   'Log',
   'backbone'
   ],
   function(module, Main, Rp, Log, Backbone){

	'use strict'

 	module.exports = {
        routers:null,
        prevView:null,
        init : function(){
            this.routeStart();
    		this.startRouter();

            // TopMenu.render();
            // TopMenu.show();
        },

        routeStart : function(){
            window.router = this.routers = new (Backbone.Router.extend());

            this.routers.route('','defaultGuide', this.changeHash);
            this.routers.route('*guideType', 'changeGuide', this.changeHash);

            Backbone.history.start({pushstate:true})
        },

        /*
         * 처음 라우터 설정
         */
        startRouter : function(){
            var hash = APORIA.util.parseHash();

            if(hash) {
                this.routers.navigate(hash.join('/'), { trigger: false, replace: true });
            } else {
                this.routers.navigate('', { trigger: true, replace: true });
            }
        },

        changeHash( guideType ){

            if(this.prevView != null){
                this.prevView.hide();
            }

            var mainMenu = guideType;

            switch(mainMenu){
                case 'signin' :
    			break;
                case 'signup' :
    			break;
                    Main.render();
                    this.prevView = Main;
                    Main.show();
    			break;
            }
        }
    }

})
