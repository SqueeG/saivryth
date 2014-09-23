// ==UserScript==
// @name       Saivryth.org global fixes
// @author		codeGlaze
// @namespace  http://use.i.E.your.homepage/
// @version    0.1.5
// @description  Script specifically for helping migrate Saivryth to better underlying structure
// @match      http://*.saivryth.org/*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @copyright  2014+, codeGlaze
// ==/UserScript==

var saivryth = {
    noStyle : function() {
       $( "a, b, i, th, span" ).css({ "background-color" : "", "color" : ""});
       $( "td" ).removeAttr("width", "").removeAttr("align", "").addClass("foo").css( "background-color", "");
       $( "table" ).removeAttr("width", "").removeAttr("align border", "").addClass("foo");
	   $( "body > table" ).width( "8in");
	},
	fixStyle : function() {
//		$( "i b font[size=5]" ).replaceWith( function(){
		$( "i b font[size=5], b i font[size=5]" ).each(function() {
			$( this ).replaceWith( "<h3>" + $( this ).text() + "</h3>" );
		//	console.log( $(this).text() );
		});
	//alert( $( "i b font[size=5]" ).text() );
    },
	url : function(){	//urls with special rules
		var loc = window.location.href;
		loc = loc.substring(loc.indexOf('saivryth'));

		if( saivryth.pages[loc] ){
//			alert( loc );
			saivryth.pages[loc].rules();
		}
	},
	pages : {
		"saivryth.org/xixoghk.htm" : {
			"rules" : function(){
			//name the tables
				function tnames() {
					var ct = 0;
					$("body > table").each( function(){		//only runs through the direct descendants of body
						var cls = [ "tone", "ttwo", "tthree" ];
						$(this).addClass( cls[ct] );
						ct++;
					});
				}
				tnames();
				
			//	reorganizes the character sheet to flow and print better
				var td1 = "table:first > tbody > tr:first > td:first";
				var td2 = "table:first > tbody > tr:first > td:last";
				var htm1 = $(td1).html();	//save info from row1, 1st TD
				var htm2 = $(td2).html();	//save info from row1, 3rd TD

				$( "tr:first > td:eq(1)").attr( "colspan", "3" );
				$(td1).remove();
				$(td2).remove();
				$('<tr><td colspan="3" class="tab3">'+htm2+'</td></tr>').insertAfter('table:first > tbody > tr:first');
				$('<tr><td colspan="3" class="pics">'+htm1+'</td></tr>').insertBefore('table:first > tbody > tr:first');
				
			//move the pictures out of their various parent elements
				$(".pics").append( $("img").removeAttr("width", "" ).removeAttr("height", "" ).width( "33%") );
				$(".pics p, .pics font").remove();
				
			//do the same movements to "table two (ttwo)"
				td1 = ".ttwo > tbody > tr:first > td:first";
				td2 = ".ttwo > tbody > tr:first > td:last";
				htm1 = $(td1).html();	//save info from row1, 1st TD
				htm2 = $(td2).html();	//save info from row1, 3rd TD
				
				$( ".ttwo tr:first > td:eq(1)").attr( "colspan", "3" );
				$(td1).remove();
				$(td2).remove();
				$('<tr><td colspan="3" class="tab3">'+htm2+'</td></tr>').insertAfter('.ttwo > tbody > tr:first');
				$('<tr><td colspan="3" class="pics">'+htm1+'</td></tr>').insertBefore('.ttwo > tbody > tr:first');

			}
		}
	},
    go : function(){
		saivryth.noStyle();
		saivryth.fixStyle();
		saivryth.url();
//        alert( "go!" );
    }
    
};

saivryth.go();