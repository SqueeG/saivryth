// ==UserScript==
// @name       Saivryth.org global fixes
// @author		codeGlaze
// @namespace  http://use.i.E.your.homepage/
// @version    0.1.2
// @description  Script specifically for helping migrate Saivryth to better underlying structure
// @match      http://*.saivryth.org/*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @copyright  2014+, codeGlaze
// ==/UserScript==

var saivryth = {
    noStyle : function() {
       $( "span" ).css( "background-color", "");
       $( "th" ).css( "background-color", "");
       $( "a" ).css( "background-color", "");
       $( "td" ).removeAttr("width", "").removeAttr("align", "").addClass("foo").css( "background-color", "");
       $( "table" ).removeAttr("width", "").width( "8in").removeAttr("align", "").addClass("foo");
	},
    go : function(){
		saivryth.noStyle();
//        alert( "go!" );
    }
    
};

saivryth.go();