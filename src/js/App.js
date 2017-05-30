/*
 * kt-membership-statistics-service 1.0.0
 * 방문자, 메뉴, 서비스 별로 다양한 통계 데이터와 차트
 * https://cms.membership.kt.com
 * Copyright ©2011 - 2017 KT corp. All rights reserved.
*/
requirejs.config({
	baseUrl: '/js',
	packages: [
		{
			name: 'moment',
			location: '../lib/moment/',
			main: 'moment'
		}
	],
	paths: {
		'text':'../lib/text/text',
		'jquery':'../lib/jquery/dist/jquery',
		'bootstrap':'../lib/bootstrap/dist/js/bootstrap',
		'Handlebars':'../lib/handlebars/handlebars',
		'underscore':'../lib/underscore/underscore',
		'backbone':'../lib/backbone/backbone',
		'slideout':'../lib/slideout.js/dist/slideout',
        'tpl':'../template',
		'common':'Common',
		'R2':'utils/r2'
	},
	shim:{
		'backbone':{
			deps:['underscore'],
			exports:'Backbone'
		},
		'bootstrap':{
			deps:['jquery'],
			exports:'bootstrap'
		}
    }
});

requirejs([
	'Handlebars',
	'backbone',
    'Router',
	'slideout',
	'bootstrap',
    'moment/locale/ko',
    'common',
	'R2'
],
function(Handlebars, Backbone, Router){

    var prevView = null, routers = null;

	/*
	 * 초기 실행함수
	 */
	function init(){
		setHandlebars();
		Router.init();
	}

	function setHandlebars(){
	}

	init();
})
