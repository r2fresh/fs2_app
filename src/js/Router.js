define([
   'module',
   'Intro',
   'SignIn',
   'SignUp',
   'Main',
   'backbone'
   ],
   function(module, Intro, SignIn, SignUp, Main, Backbone){

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

            this.routers.route('*main', 'changeGuide', this.changeHash);
            this.routers.route('*main/:sub', 'changeGuide', this.changeHash);

            Backbone.history.start({pushstate:true})
        },

        /*
         * 처음 라우터 설정
         */
        startRouter : function(){

            var hash = FS2.util.parseHash();

            if(hash) {
                this.routers.navigate(hash.join('/'), { trigger: false, replace: true });
            } else {
                this.routers.navigate('', { trigger: true, replace: true });
            }
        },

        changeHash( MainPath, SubPath ){

            if(this.prevView != null){
                this.prevView.hide();
            }

            var mainMenu = MainPath;

            switch(mainMenu){
                case 'signin' :
                    SignIn.show();
                    SignIn.render(SubPath);
                    this.prevView = SignIn;
    			break;
                case 'signup' :
                    SignUp.show();
                    SignUp.render(SubPath);
                    this.prevView = SignUp;
    			break;
                case 'party' :
    			case 'story' :
    			case 'now' :
                case 'search' :
                case 'setting' :
                    Main.show();
                    Main.render(mainMenu);
                    this.prevView = Main;
    			break;
                case 'intro' :
                case null :
                    console.log('111')
                    Intro.show();
                    Intro.render();
                    this.prevView = Intro;
                break;
    			default :
                    window.location.href="#"
    			break;
            }
        }
    }

})
