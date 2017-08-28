



jQuery(document).ready(function($) {

"use strict";


/*-----------------------------------------------------------------------------------*/
/* Flex Slider
/*===================================================================================*/
/*
 * $ FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0}),
 a.slides.eq(b).css({opacity:1}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===
 a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};
 a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=
 setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=
 function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;
 case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+
 c.animationSpeed/1E3+"s ease"}).eq(a.currentSlide).css({opacity:1}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==
 b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*
 (a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,
 a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<
 a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==
 e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults=
 {namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",
 itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;
 case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})($);

/*-----------------------------------------------------------------------------------*/
/* Portfolio Filter
/*===================================================================================*/
/*
* MIXITUP - A CSS3 and $ Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/

(function(e){function q(c,b,g,d,a){function k(){l.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");b&&w(b,g,d,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];r.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||r.css({display:"none",opacity:"0"});l.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+
(a.resizeContainer?"height":""));"list"==a.layoutMode?(n.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(n.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){r.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;a.filter=c;if("function"==typeof a.onMixStart){var f=a.onMixStart.call(this,
a);a=f?f:a}for(var h=a.transitionSpeed,f=0;2>f;f++){var j=0==f?j=a.prefix:"";a.transition[j+"transition"]="all "+h+"ms linear";a.transition[j+"transform"]=j+"translate3d(0,0,0)";a.perspective[j+"perspective"]=a.perspectiveDistance+"px";a.perspective[j+"perspective-origin"]=a.perspectiveOrigin}var s=a.targetSelector,r=d.find(s);r.each(function(){this.data={}});var l=r.parent();l.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");
"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");f="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<f.indexOf("fade")?"0":"",a.scale=-1<f.indexOf("scale")?"scale(.01)":"",a.rotateZ=
-1<f.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<f.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<f.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<f.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<f.indexOf("grayscale")?"grayscale(100%)":"");var n=e(),t=e(),u=[],q=!1;"string"===typeof c?u=y(c):(q=!0,e.each(c,function(a){u[a]=y(this)}));"or"==a.filterLogic?(""==u[0]&&u.shift(),1>u.length?t=t.add(d.find(s+":visible")):r.each(function(){var a=e(this);if(q){var b=0;e.each(u,function(){this.length?
a.is("."+this.join(", ."))&&b++:0<b&&b++});b==u.length?n=n.add(a):t=t.add(a)}else a.is("."+u.join(", ."))?n=n.add(a):t=t.add(a)})):(n=n.add(l.find(s+"."+u.join("."))),t=t.add(l.find(s+":not(."+u.join(".")+"):visible")));c=n.length;var v=e(),p=e(),m=e();t.each(function(){var a=e(this);"none"!=a.css("display")&&(v=v.add(a),m=m.add(a))});if(n.filter(":visible").length==c&&!v.length&&!b){if(a.origLayout==a.layoutMode)return k(),!1;if(1==n.length)return"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),
m.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),m.css("display",a.targetDisplayGrid)),k(),!1}a.origHeight=l.height();if(n.length){d.removeClass(a.failClass);n.each(function(){var a=e(this);"none"==a.css("display")?p=p.add(a):m=m.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),m.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),
m.css("display",a.targetDisplayGrid)),k(),!1;if(!window.atob)return k(),!1;r.css(a.clean);m.each(function(){this.data.origPos=e(this).offset()});"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass),p.css("display",a.targetDisplayList)):(d.addClass(a.gridClass),d.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));p.each(function(){this.data.showInterPos=e(this).offset()});v.each(function(){this.data.hideInterPos=e(this).offset()});m.each(function(){this.data.preInterPos=
e(this).offset()});"list"==a.layoutMode?m.css("display",a.targetDisplayList):m.css("display",a.targetDisplayGrid);b&&w(b,g,d,a);if(c=b)a:if(c=a.origSort,f=a.checkSort,c.length!=f.length)c=!1;else{for(j=0;j<f.length;j++)if(c[j].compare&&!c[j].compare(f[j])||c[j]!==f[j]){c=!1;break a}c=!0}if(c)return k(),!1;v.hide();p.each(function(){this.data.finalPos=e(this).offset()});m.each(function(){this.data.finalPrePos=e(this).offset()});a.newHeight=l.height();b&&w("reset",null,d,a);p.hide();m.css("display",
a.origDisplay);"block"==a.origDisplay?(d.addClass(a.listClass),p.css("display",a.targetDisplayList)):(d.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));a.resizeContainer&&l.css("height",a.origHeight+"px");c={};for(f=0;2>f;f++)j=0==f?j=a.prefix:"",c[j+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,c[j+"filter"]=a.blur+" "+a.grayscale;p.css(c);m.each(function(){var b=this.data,c=e(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-
b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var d={},f=0;2>f;f++){var j=0==f?j=a.prefix:"";d[j+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(d)});"list"==a.layoutMode?(d.addClass(a.listClass),d.removeClass(a.gridClass)):(d.addClass(a.gridClass),d.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var d=0==c?d=a.prefix:"";b[d+"transition"]="all "+h+"ms ease-in-out";b.height=a.newHeight+
"px"}l.css(b)}v.css("opacity",a.fade);p.css("opacity",1);p.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition-property"]=f+"transform, "+f+"filter, opacity";c[f+"transition-timing-function"]=a.easing+", linear, linear";c[f+"transition-duration"]=h+"ms";c[f+"transition-delay"]="0";c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[f+"filter"]="none"}e(this).css("-webkit-transition",
"all "+h+"ms "+a.easingFallback).css(c)});m.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition"]="all "+h+"ms "+a.easing;c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}e(this).css("-webkit-transition","all "+h+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)d=0==c?d=a.prefix:"",b[d+"transition"]="all "+h+"ms "+
a.easing+", "+d+"filter "+h+"ms linear, opacity "+h+"ms linear",b[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[d+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;v.css(b);l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))-1<s.indexOf(".")?e(b.target).hasClass(s.replace(".",""))&&k():e(b.target).is(s)&&k()})},10);a.failsafe=setTimeout(function(){a.mixing&&
k()},h+400)}else{a.resizeContainer&&l.css("height",a.origHeight+"px");if(!window.atob)return k(),!1;v=t;setTimeout(function(){l.css(a.perspective);if(a.resizeContainer){for(var b={},c=0;2>c;c++){var e=0==c?e=a.prefix:"";b[e+"transition"]="height "+h+"ms ease-in-out";b.height=a.minHeight+"px"}l.css(b)}r.css(a.transition);if(t.length){b={};for(c=0;2>c;c++)e=0==c?e=a.prefix:"",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;v.css(b);
l.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))d.addClass(a.failClass),k()})}else a.mixing=!1},10)}}function w(c,b,g,d){function a(b,a){var d=isNaN(1*b.attr(c))?b.attr(c).toLowerCase():1*b.attr(c),e=isNaN(1*a.attr(c))?a.attr(c).toLowerCase():1*a.attr(c);return d<e?-1:d>e?1:0}function k(a){"asc"==b?f.prepend(a).prepend(" "):f.append(a).append(" ")}g.find(d.targetSelector).wrapAll('<div class="mix_sorter"/>');
var f=g.find(".mix_sorter");d.origSort.length||f.find(d.targetSelector+":visible").each(function(){e(this).wrap("<s/>");d.origSort.push(e(this).parent().html().replace(/\s+/g,""));e(this).unwrap()});f.empty();if("reset"==c)e.each(d.startOrder,function(){f.append(this).append(" ")});else if("default"==c)e.each(d.origOrder,function(){k(this)});else if("random"==c){if(!d.newOrder.length){for(var h=d.startOrder.slice(),j=h.length,s=j;s--;){var r=parseInt(Math.random()*j),l=h[s];h[s]=h[r];h[r]=l}d.newOrder=
h}e.each(d.newOrder,function(){f.append(this).append(" ")})}else if("custom"==c)e.each(b,function(){k(this)});else{if("undefined"===typeof d.origOrder[0].attr(c))return console.log("No such attribute found. Terminating"),!1;d.newOrder.length||(e.each(d.origOrder,function(){d.newOrder.push(e(this))}),d.newOrder.sort(a));e.each(d.newOrder,function(){k(this)})}d.checkSort=[];f.find(d.targetSelector+":visible").each(function(b){var a=e(this);0==b&&a.attr("data-checksum","1");a.wrap("<s/>");d.checkSort.push(a.parent().html().replace(/\s+/g,
""));a.unwrap()});g.find(d.targetSelector).unwrap()}function y(c){c=c.replace(/\s{2,}/g," ");var b=c.split(" ");e.each(b,function(c){"all"==this&&(b[c]="mix_all")});""==b[0]&&b.shift();return b}var x={init:function(c){return this.each(function(){var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",
transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},
clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};c&&e.extend(b,c);this.config=b;e.support.touch="ontouchend"in document;e.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=e(this);var g=b.container,d;a:{d=g[0];for(var a=["Webkit","Moz","O","ms"],k=0;k<a.length;k++)if(a[k]+"Transition"in d.style){d=a[k];break a}d="transition"in d.style?"":!1}b.prefix=d;b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";g.find(b.targetSelector).each(function(){b.origOrder.push(e(this))});
if(b.sortOnLoad){var f;e.isArray(b.sortOnLoad)?(d=b.sortOnLoad[0],f=b.sortOnLoad[1],e(b.sortSelector+"[data-sort="+b.sortOnLoad[0]+"][data-order="+b.sortOnLoad[1]+"]").addClass("active")):(e(b.sortSelector+"[data-sort="+b.sortOnLoad+"]").addClass("active"),d=b.sortOnLoad,b.sortOnLoad="desc");w(d,f,g,b)}for(f=0;2>f;f++)d=0==f?d=b.prefix:"",b.transition[d+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[d+"perspective"]=b.perspectiveDistance+"px",b.perspective[d+"perspective-origin"]=
b.perspectiveOrigin;for(f=0;2>f;f++)d=0==f?d=b.prefix:"",b.clean[d+"transition"]="none";"list"==b.layoutMode?(g.addClass(b.listClass),b.origDisplay=b.targetDisplayList):(g.addClass(b.gridClass),b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;f=b.showOnLoad.split(" ");e.each(f,function(){e(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});g.find(b.targetSelector).addClass("mix_all");"all"==f[0]&&(f[0]="mix_all",b.showOnLoad="mix_all");var h=e();e.each(f,function(){h=h.add(e("."+
this))});h.each(function(){var a=e(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);a.css(b.transition)});setTimeout(function(){b.mixing=!0;h.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?h.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):h.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,
b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;e(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this),c=a.attr("data-sort"),d=a.attr("data-order");if(a.hasClass("active")){if("random"!=c)return!1}else e(b.sortSelector).removeClass("active"),a.addClass("active");g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});q(b.filter,c,d,g,b)}});e(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this);if(!1==b.multiFilter)e(b.filterSelector).removeClass("active"),
a.addClass("active"),b.filter=a.attr("data-filter"),e(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active");else{var c=a.attr("data-filter");a.hasClass("active")?(a.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+c),"")):(a.addClass("active"),b.filter=b.filter+" "+c)}q(b.filter,null,null,g,b)}})})},toGrid:function(){return this.each(function(){var c=this.config;"grid"!=c.layoutMode&&(c.layoutMode="grid",q(c.filter,null,null,e(this),c))})},toList:function(){return this.each(function(){var c=
this.config;"list"!=c.layoutMode&&(c.layoutMode="list",q(c.filter,null,null,e(this),c))})},filter:function(c){return this.each(function(){var b=this.config;b.mixing||(e(b.filterSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+c+'"]').addClass("active"),q(c,null,null,e(this),b))})},sort:function(c){return this.each(function(){var b=this.config,g=e(this);if(!b.mixing){e(b.sortSelector).removeClass("active");if(e.isArray(c)){var d=c[0],a=c[1];e(b.sortSelector+'[data-sort="'+c[0]+'"][data-order="'+
c[1]+'"]').addClass("active")}else e(b.sortSelector+'[data-sort="'+c+'"]').addClass("active"),d=c,a="desc";g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});q(b.filter,d,a,g,b)}})},multimix:function(c){return this.each(function(){var b=this.config,g=e(this);multiOut={filter:b.filter,sort:null,order:"desc",layoutMode:b.layoutMode};e.extend(multiOut,c);b.mixing||(e(b.filterSelector).add(b.sortSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),
"undefined"!==typeof multiOut.sort&&(e(b.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),g.find(b.targetSelector).each(function(){b.startOrder.push(e(this))})),b.layoutMode=multiOut.layoutMode,q(multiOut.filter,multiOut.sort,multiOut.order,g,b))})},remix:function(c){return this.each(function(){var b=this.config,g=e(this);b.origOrder=[];g.find(b.targetSelector).each(function(){var c=e(this);c.addClass("mix_all");b.origOrder.push(c)});!b.mixing&&"undefined"!==
typeof c&&(e(b.filterSelector).removeClass("active"),e(b.filterSelector+'[data-filter="'+c+'"]').addClass("active"),q(c,null,null,g,b))})}};e.fn.mixitup=function(c,b){if(x[c])return x[c].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof c||!c)return x.init.apply(this,arguments)};e.fn.removeStyle=function(c){return this.each(function(){var b=e(this);c=c.replace(/\s+/g,"");var g=c.split(",");e.each(g,function(){var c=RegExp(this.toString()+"[^;]+;?","g");b.attr("style",function(a,
b){if(b)return b.replace(c,"")})})})}})($);



});


/*-----------------------------------------------------------------------------------*/
/* Counter
/*===================================================================================*/

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);


/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/*-----------------------------------------------------------------------------------*/
/* Owl Slider
/*===================================================================================*/
if(typeof Object.create!=="function"){Object.create=function(e){function t(){}t.prototype=e;return new t}}(function(e,t,n){var r={init:function(t,n){var r=this;r.$elem=e(n);r.options=e.extend({},e.fn.owlCarousel.options,r.$elem.data(),t);r.userOptions=t;r.loadContent()},loadContent:function(){function r(e){var n,r="";if(typeof t.options.jsonSuccess==="function"){t.options.jsonSuccess.apply(this,[e])}else{for(n in e.owl){if(e.owl.hasOwnProperty(n)){r+=e.owl[n].item}}t.$elem.html(r)}t.logIn()}var t=this,n;if(typeof t.options.beforeInit==="function"){t.options.beforeInit.apply(this,[t.$elem])}if(typeof t.options.jsonPath==="string"){n=t.options.jsonPath;e.getJSON(n,r)}else{t.logIn()}},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style"));e.$elem.data("owl-originalClasses",e.$elem.attr("class"));e.$elem.css({opacity:0});e.orignalItems=e.options.items;e.checkBrowser();e.wrapperWidth=0;e.checkVisible=null;e.setVars()},setVars:function(){var e=this;if(e.$elem.children().length===0){return false}e.baseClass();e.eventTypes();e.$userItems=e.$elem.children();e.itemsAmount=e.$userItems.length;e.wrapItems();e.$owlItems=e.$elem.find(".owl-item");e.$owlWrapper=e.$elem.find(".owl-wrapper");e.playDirection="next";e.prevItem=0;e.prevArr=[0];e.currentItem=0;e.customEvents();e.onStartup()},onStartup:function(){var e=this;e.updateItems();e.calculateAll();e.buildControls();e.updateControls();e.response();e.moveEvents();e.stopOnHover();e.owlStatus();if(e.options.transitionStyle!==false){e.transitionTypes(e.options.transitionStyle)}if(e.options.autoPlay===true){e.options.autoPlay=5e3}e.play();e.$elem.find(".owl-wrapper").css("display","block");if(!e.$elem.is(":visible")){e.watchVisibility()}else{e.$elem.css("opacity",1)}e.onstartup=false;e.eachMoveUpdate();if(typeof e.options.afterInit==="function"){e.options.afterInit.apply(this,[e.$elem])}},eachMoveUpdate:function(){var e=this;if(e.options.lazyLoad===true){e.lazyLoad()}if(e.options.autoHeight===true){e.autoHeight()}e.onVisibleItems();if(typeof e.options.afterAction==="function"){e.options.afterAction.apply(this,[e.$elem])}},updateVars:function(){var e=this;if(typeof e.options.beforeUpdate==="function"){e.options.beforeUpdate.apply(this,[e.$elem])}e.watchVisibility();e.updateItems();e.calculateAll();e.updatePosition();e.updateControls();e.eachMoveUpdate();if(typeof e.options.afterUpdate==="function"){e.options.afterUpdate.apply(this,[e.$elem])}},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(e.$elem.is(":visible")===false){e.$elem.css({opacity:0});t.clearInterval(e.autoPlayInterval);t.clearInterval(e.checkVisible)}else{return false}e.checkVisible=t.setInterval(function(){if(e.$elem.is(":visible")){e.reload();e.$elem.animate({opacity:1},200);t.clearInterval(e.checkVisible)}},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');e.wrapperOuter=e.$elem.find(".owl-wrapper-outer");e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);if(!t){e.$elem.addClass(e.options.baseClass)}if(!n){e.$elem.addClass(e.options.theme)}},updateItems:function(){var t=this,n,r;if(t.options.responsive===false){return false}if(t.options.singleItem===true){t.options.items=t.orignalItems=1;t.options.itemsCustom=false;t.options.itemsDesktop=false;t.options.itemsDesktopSmall=false;t.options.itemsTablet=false;t.options.itemsTabletSmall=false;t.options.itemsMobile=false;return false}n=e(t.options.responsiveBaseWidth).width();if(n>(t.options.itemsDesktop[0]||t.orignalItems)){t.options.items=t.orignalItems}if(t.options.itemsCustom!==false){t.options.itemsCustom.sort(function(e,t){return e[0]-t[0]});for(r=0;r<t.options.itemsCustom.length;r+=1){if(t.options.itemsCustom[r][0]<=n){t.options.items=t.options.itemsCustom[r][1]}}}else{if(n<=t.options.itemsDesktop[0]&&t.options.itemsDesktop!==false){t.options.items=t.options.itemsDesktop[1]}if(n<=t.options.itemsDesktopSmall[0]&&t.options.itemsDesktopSmall!==false){t.options.items=t.options.itemsDesktopSmall[1]}if(n<=t.options.itemsTablet[0]&&t.options.itemsTablet!==false){t.options.items=t.options.itemsTablet[1]}if(n<=t.options.itemsTabletSmall[0]&&t.options.itemsTabletSmall!==false){t.options.items=t.options.itemsTabletSmall[1]}if(n<=t.options.itemsMobile[0]&&t.options.itemsMobile!==false){t.options.items=t.options.itemsMobile[1]}}if(t.options.items>t.itemsAmount&&t.options.itemsScaleUp===true){t.options.items=t.itemsAmount}},response:function(){var n=this,r,i;if(n.options.responsive!==true){return false}i=e(t).width();n.resizer=function(){if(e(t).width()!==i){if(n.options.autoPlay!==false){t.clearInterval(n.autoPlayInterval)}t.clearTimeout(r);r=t.setTimeout(function(){i=e(t).width();n.updateVars()},n.options.responsiveRefreshRate)}};e(t).resize(n.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem);if(e.options.autoPlay!==false){e.checkAp()}},appendItemsSizes:function(){var t=this,n=0,r=t.itemsAmount-t.options.items;t.$owlItems.each(function(i){var s=e(this);s.css({width:t.itemWidth}).data("owl-item",Number(i));if(i%t.options.items===0||i===r){if(!(i>r)){n+=1}}s.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:t*2,left:0});e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth();e.appendWrapperSizes();e.loops();e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth)*-1;if(e.options.items>e.itemsAmount){e.maximumItem=0;t=0;e.maximumPixels=0}else{e.maximumItem=e.itemsAmount-e.options.items;e.maximumPixels=t}return t},min:function(){return 0},loops:function(){var t=this,n=0,r=0,i,s,o;t.positionsInArray=[0];t.pagesInArray=[];for(i=0;i<t.itemsAmount;i+=1){r+=t.itemWidth;t.positionsInArray.push(-r);if(t.options.scrollPerPage===true){s=e(t.$owlItems[i]);o=s.data("owl-roundPages");if(o!==n){t.pagesInArray[n]=t.positionsInArray[i];n=o}}}},buildControls:function(){var t=this;if(t.options.navigation===true||t.options.pagination===true){t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)}if(t.options.pagination===true){t.buildPagination()}if(t.options.navigation===true){t.buildButtons()}},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n);t.buttonPrev=e("<div/>",{"class":"owl-prev",html:t.options.navigationText[0]||""});t.buttonNext=e("<div/>",{"class":"owl-next",html:t.options.navigationText[1]||""});n.append(t.buttonPrev).append(t.buttonNext);n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()});n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault();if(e(this).hasClass("owl-next")){t.next()}else{t.prev()}})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>');t.owlControls.append(t.paginationWrapper);t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault();if(Number(e(this).data("owl-page"))!==t.currentItem){t.goTo(Number(e(this).data("owl-page")),true)}})},updatePagination:function(){var t=this,n,r,i,s,o,u;if(t.options.pagination===false){return false}t.paginationWrapper.html("");n=0;r=t.itemsAmount-t.itemsAmount%t.options.items;for(s=0;s<t.itemsAmount;s+=1){if(s%t.options.items===0){n+=1;if(r===s){i=t.itemsAmount-t.options.items}o=e("<div/>",{"class":"owl-page"});u=e("<span></span>",{text:t.options.paginationNumbers===true?n:"","class":t.options.paginationNumbers===true?"owl-numbers":""});o.append(u);o.data("owl-page",r===s?i:s);o.data("owl-roundPages",n);t.paginationWrapper.append(o)}}t.checkPagination()},checkPagination:function(){var t=this;if(t.options.pagination===false){return false}t.paginationWrapper.find(".owl-page").each(function(){if(e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")){t.paginationWrapper.find(".owl-page").removeClass("active");e(this).addClass("active")}})},checkNavigation:function(){var e=this;if(e.options.navigation===false){return false}if(e.options.rewindNav===false){if(e.currentItem===0&&e.maximumItem===0){e.buttonPrev.addClass("disabled");e.buttonNext.addClass("disabled")}else if(e.currentItem===0&&e.maximumItem!==0){e.buttonPrev.addClass("disabled");e.buttonNext.removeClass("disabled")}else if(e.currentItem===e.maximumItem){e.buttonPrev.removeClass("disabled");e.buttonNext.addClass("disabled")}else if(e.currentItem!==0&&e.currentItem!==e.maximumItem){e.buttonPrev.removeClass("disabled");e.buttonNext.removeClass("disabled")}}},updateControls:function(){var e=this;e.updatePagination();e.checkNavigation();if(e.owlControls){if(e.options.items>=e.itemsAmount){e.owlControls.hide()}else{e.owlControls.show()}}},destroyControls:function(){var e=this;if(e.owlControls){e.owlControls.remove()}},next:function(e){var t=this;if(t.isTransition){return false}t.currentItem+=t.options.scrollPerPage===true?t.options.items:1;if(t.currentItem>t.maximumItem+(t.options.scrollPerPage===true?t.options.items-1:0)){if(t.options.rewindNav===true){t.currentItem=0;e="rewind"}else{t.currentItem=t.maximumItem;return false}}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition){return false}if(t.options.scrollPerPage===true&&t.currentItem>0&&t.currentItem<t.options.items){t.currentItem=0}else{t.currentItem-=t.options.scrollPerPage===true?t.options.items:1}if(t.currentItem<0){if(t.options.rewindNav===true){t.currentItem=t.maximumItem;e="rewind"}else{t.currentItem=0;return false}}t.goTo(t.currentItem,e)},goTo:function(e,n,r){var i=this,s;if(i.isTransition){return false}if(typeof i.options.beforeMove==="function"){i.options.beforeMove.apply(this,[i.$elem])}if(e>=i.maximumItem){e=i.maximumItem}else if(e<=0){e=0}i.currentItem=i.owl.currentItem=e;if(i.options.transitionStyle!==false&&r!=="drag"&&i.options.items===1&&i.browser.support3d===true){i.swapSpeed(0);if(i.browser.support3d===true){i.transition3d(i.positionsInArray[e])}else{i.css2slide(i.positionsInArray[e],1)}i.afterGo();i.singleItemTransition();return false}s=i.positionsInArray[e];if(i.browser.support3d===true){i.isCss3Finish=false;if(n===true){i.swapSpeed("paginationSpeed");t.setTimeout(function(){i.isCss3Finish=true},i.options.paginationSpeed)}else if(n==="rewind"){i.swapSpeed(i.options.rewindSpeed);t.setTimeout(function(){i.isCss3Finish=true},i.options.rewindSpeed)}else{i.swapSpeed("slideSpeed");t.setTimeout(function(){i.isCss3Finish=true},i.options.slideSpeed)}i.transition3d(s)}else{if(n===true){i.css2slide(s,i.options.paginationSpeed)}else if(n==="rewind"){i.css2slide(s,i.options.rewindSpeed)}else{i.css2slide(s,i.options.slideSpeed)}}i.afterGo()},jumpTo:function(e){var t=this;if(typeof t.options.beforeMove==="function"){t.options.beforeMove.apply(this,[t.$elem])}if(e>=t.maximumItem||e===-1){e=t.maximumItem}else if(e<=0){e=0}t.swapSpeed(0);if(t.browser.support3d===true){t.transition3d(t.positionsInArray[e])}else{t.css2slide(t.positionsInArray[e],1)}t.currentItem=t.owl.currentItem=e;t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem);e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2];e.prevArr.shift(0);if(e.prevItem!==e.currentItem){e.checkPagination();e.checkNavigation();e.eachMoveUpdate();if(e.options.autoPlay!==false){e.checkAp()}}if(typeof e.options.afterMove==="function"&&e.prevItem!==e.currentItem){e.options.afterMove.apply(this,[e.$elem])}},stop:function(){var e=this;e.apStatus="stop";t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;if(e.apStatus!=="stop"){e.play()}},play:function(){var e=this;e.apStatus="play";if(e.options.autoPlay===false){return false}t.clearInterval(e.autoPlayInterval);e.autoPlayInterval=t.setInterval(function(){e.next(true)},e.options.autoPlay)},swapSpeed:function(e){var t=this;if(e==="slideSpeed"){t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed))}else if(e==="paginationSpeed"){t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed))}else if(typeof e!=="string"){t.$owlWrapper.css(t.addCssSpeed(e))}},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){var t=this;t.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=false;n.$owlWrapper.stop(true,true).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=true}})},checkBrowser:function(){var e=this,r="translate3d(0px, 0px, 0px)",i=n.createElement("div"),s,o,u,a;i.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r;s=/translate3d\(0px, 0px, 0px\)/g;o=i.style.cssText.match(s);u=o!==null&&o.length===1;a="ontouchstart"in t||t.navigator.msMaxTouchPoints;e.browser={support3d:u,isTouch:a}},moveEvents:function(){var e=this;if(e.options.mouseDrag!==false||e.options.touchDrag!==false){e.gestures();e.disabledEvents()}},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={};if(e.options.mouseDrag===true&&e.options.touchDrag===true){t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]}else if(e.options.mouseDrag===false&&e.options.touchDrag===true){t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]}else if(e.options.mouseDrag===true&&e.options.touchDrag===false){t=["mousedown.owl","mousemove.owl","mouseup.owl"]}e.ev_types.start=t[0];e.ev_types.move=t[1];e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()});t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function s(e){if(e.touches!==undefined){return{x:e.touches[0].pageX,y:e.touches[0].pageY}}if(e.touches===undefined){if(e.pageX!==undefined){return{x:e.pageX,y:e.pageY}}if(e.pageX===undefined){return{x:e.clientX,y:e.clientY}}}}function o(t){if(t==="on"){e(n).on(r.ev_types.move,a);e(n).on(r.ev_types.end,f)}else if(t==="off"){e(n).off(r.ev_types.move);e(n).off(r.ev_types.end)}}function u(n){var u=n.originalEvent||n||t.event,a;if(u.which===3){return false}if(r.itemsAmount<=r.options.items){return}if(r.isCssFinish===false&&!r.options.dragBeforeAnimFinish){return false}if(r.isCss3Finish===false&&!r.options.dragBeforeAnimFinish){return false}if(r.options.autoPlay!==false){t.clearInterval(r.autoPlayInterval)}if(r.browser.isTouch!==true&&!r.$owlWrapper.hasClass("grabbing")){r.$owlWrapper.addClass("grabbing")}r.newPosX=0;r.newRelativeX=0;e(this).css(r.removeTransition());a=e(this).position();i.relativePos=a.left;i.offsetX=s(u).x-a.left;i.offsetY=s(u).y-a.top;o("on");i.sliding=false;i.targetElement=u.target||u.srcElement}function a(o){var u=o.originalEvent||o||t.event,a,f;r.newPosX=s(u).x-i.offsetX;r.newPosY=s(u).y-i.offsetY;r.newRelativeX=r.newPosX-i.relativePos;if(typeof r.options.startDragging==="function"&&i.dragging!==true&&r.newRelativeX!==0){i.dragging=true;r.options.startDragging.apply(r,[r.$elem])}if((r.newRelativeX>8||r.newRelativeX<-8)&&r.browser.isTouch===true){if(u.preventDefault!==undefined){u.preventDefault()}else{u.returnValue=false}i.sliding=true}if((r.newPosY>10||r.newPosY<-10)&&i.sliding===false){e(n).off("touchmove.owl")}a=function(){return r.newRelativeX/5};f=function(){return r.maximumPixels+r.newRelativeX/5};r.newPosX=Math.max(Math.min(r.newPosX,a()),f());if(r.browser.support3d===true){r.transition3d(r.newPosX)}else{r.css2move(r.newPosX)}}function f(n){var s=n.originalEvent||n||t.event,u,a,f;s.target=s.target||s.srcElement;i.dragging=false;if(r.browser.isTouch!==true){r.$owlWrapper.removeClass("grabbing")}if(r.newRelativeX<0){r.dragDirection=r.owl.dragDirection="left"}else{r.dragDirection=r.owl.dragDirection="right"}if(r.newRelativeX!==0){u=r.getNewPosition();r.goTo(u,false,"drag");if(i.targetElement===s.target&&r.browser.isTouch!==true){e(s.target).on("click.disable",function(t){t.stopImmediatePropagation();t.stopPropagation();t.preventDefault();e(t.target).off("click.disable")});a=e._data(s.target,"events").click;f=a.pop();a.splice(0,0,f)}}o("off")}var r=this,i={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};r.isCssFinish=true;r.$elem.on(r.ev_types.start,".owl-wrapper",u)},getNewPosition:function(){var e=this,t=e.closestItem();if(t>e.maximumItem){e.currentItem=e.maximumItem;t=e.maximumItem}else if(e.newPosX>=0){t=0;e.currentItem=0}return t},closestItem:function(){var t=this,n=t.options.scrollPerPage===true?t.pagesInArray:t.positionsInArray,r=t.newPosX,i=null;e.each(n,function(s,o){if(r-t.itemWidth/20>n[s+1]&&r-t.itemWidth/20<o&&t.moveDirection()==="left"){i=o;if(t.options.scrollPerPage===true){t.currentItem=e.inArray(i,t.positionsInArray)}else{t.currentItem=s}}else if(r+t.itemWidth/20<o&&r+t.itemWidth/20>(n[s+1]||n[s]-t.itemWidth)&&t.moveDirection()==="right"){if(t.options.scrollPerPage===true){i=n[s+1]||n[n.length-1];t.currentItem=e.inArray(i,t.positionsInArray)}else{i=n[s+1];t.currentItem=s+1}}});return t.currentItem},moveDirection:function(){var e=this,t;if(e.newRelativeX<0){t="right";e.playDirection="next"}else{t="left";e.playDirection="prev"}return t},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()});e.$elem.on("owl.prev",function(){e.prev()});e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n;e.play();e.hoverStatus="play"});e.$elem.on("owl.stop",function(){e.stop();e.hoverStatus="stop"});e.$elem.on("owl.goTo",function(t,n){e.goTo(n)});e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;if(e.options.stopOnHover===true&&e.browser.isTouch!==true&&e.options.autoPlay!==false){e.$elem.on("mouseover",function(){e.stop()});e.$elem.on("mouseout",function(){if(e.hoverStatus!=="stop"){e.play()}})}},lazyLoad:function(){var t=this,n,r,i,s,o;if(t.options.lazyLoad===false){return false}for(n=0;n<t.itemsAmount;n+=1){r=e(t.$owlItems[n]);if(r.data("owl-loaded")==="loaded"){continue}i=r.data("owl-item");s=r.find(".lazyOwl");if(typeof s.data("src")!=="string"){r.data("owl-loaded","loaded");continue}if(r.data("owl-loaded")===undefined){s.hide();r.addClass("loading").data("owl-loaded","checked")}if(t.options.lazyFollow===true){o=i>=t.currentItem}else{o=true}if(o&&i<t.currentItem+t.options.items&&s.length){t.lazyPreload(r,s)}}},lazyPreload:function(e,n){function o(){e.data("owl-loaded","loaded").removeClass("loading");n.removeAttr("data-src");if(r.options.lazyEffect==="fade"){n.fadeIn(400)}else{n.show()}if(typeof r.options.afterLazyLoad==="function"){r.options.afterLazyLoad.apply(this,[r.$elem])}}function u(){i+=1;if(r.completeImg(n.get(0))||s===true){o()}else if(i<=100){t.setTimeout(u,100)}else{o()}}var r=this,i=0,s;if(n.prop("tagName")==="DIV"){n.css("background-image","url("+n.data("src")+")");s=true}else{n[0].src=n.data("src")}u()},autoHeight:function(){function s(){var r=e(n.$owlItems[n.currentItem]).height();n.wrapperOuter.css("height",r+"px");if(!n.wrapperOuter.hasClass("autoHeight")){t.setTimeout(function(){n.wrapperOuter.addClass("autoHeight")},0)}}function o(){i+=1;if(n.completeImg(r.get(0))){s()}else if(i<=100){t.setTimeout(o,100)}else{n.wrapperOuter.css("height","")}}var n=this,r=e(n.$owlItems[n.currentItem]).find("img"),i;if(r.get(0)!==undefined){i=0;o()}else{s()}},completeImg:function(e){var t;if(!e.complete){return false}t=typeof e.naturalWidth;if(t!=="undefined"&&e.naturalWidth===0){return false}return true},onVisibleItems:function(){var t=this,n;if(t.options.addClassActive===true){t.$owlItems.removeClass("active")}t.visibleItems=[];for(n=t.currentItem;n<t.currentItem+t.options.items;n+=1){t.visibleItems.push(n);if(t.options.addClassActive===true){e(t.$owlItems[n]).addClass("active")}}t.owl.visibleItems=t.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out";t.inClass="owl-"+e+"-in"},singleItemTransition:function(){function a(e){return{position:"relative",left:e+"px"}}var e=this,t=e.outClass,n=e.inClass,r=e.$owlItems.eq(e.currentItem),i=e.$owlItems.eq(e.prevItem),s=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],o=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,u="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=true;e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":o+"px","-moz-perspective-origin":o+"px","perspective-origin":o+"px"});i.css(a(s,10)).addClass(t).on(u,function(){e.endPrev=true;i.off(u);e.clearTransStyle(i,t)});r.addClass(n).on(u,function(){e.endCurrent=true;r.off(u);e.clearTransStyle(r,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t);if(n.endPrev&&n.endCurrent){n.$owlWrapper.removeClass("owl-origin");n.endPrev=false;n.endCurrent=false;n.isTransition=false}},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var r=this;r.$elem.off(".owl owl mousedown.disableTextSelect");e(n).off(".owl owl");e(t).off("resize",r.resizer)},unWrap:function(){var e=this;if(e.$elem.children().length!==0){e.$owlWrapper.unwrap();e.$userItems.unwrap().unwrap();if(e.owlControls){e.owlControls.remove()}}e.clearEvents();e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop();t.clearInterval(e.checkVisible);e.unWrap();e.$elem.removeData()},reinit:function(t){var n=this,r=e.extend({},n.userOptions,t);n.unWrap();n.init(r,n.$elem)},addItem:function(e,t){var n=this,r;if(!e){return false}if(n.$elem.children().length===0){n.$elem.append(e);n.setVars();return false}n.unWrap();if(t===undefined||t===-1){r=-1}else{r=t}if(r>=n.$userItems.length||r===-1){n.$userItems.eq(-1).after(e)}else{n.$userItems.eq(r).before(e)}n.setVars()},removeItem:function(e){var t=this,n;if(t.$elem.children().length===0){return false}if(e===undefined||e===-1){n=-1}else{n=e}t.unWrap();t.$userItems.eq(n).remove();t.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(e(this).data("owl-init")===true){return false}e(this).data("owl-init",true);var n=Object.create(r);n.init(t,this);e.data(this,"owlCarousel",n)})};e.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}})(jQuery,window,document)


/*-----------------------------------------------------------------------------------*/
/* Load Background Images In Portfolio PopUp
/*===================================================================================*/
/*! waitForImages jQuery Plugin 2013-07-20 */
!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);

/*-----------------------------------------------------------------------------------*/
/* Portfolio Popup
/*===================================================================================*/
/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);

/*-----------------------------------------------------------------------------------*/
/* Responsive Video
/*===================================================================================*/
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );


if( jQuery('.vimeoplayer').length ){
	var Froogaloop=function(){function e(a){return new e.fn.init(a)}function h(a,c,b){if(!b.contentWindow.postMessage)return!1;var f=b.getAttribute("src").split("?")[0],a=JSON.stringify({method:a,value:c});"//"===f.substr(0,2)&&(f=window.location.protocol+f);b.contentWindow.postMessage(a,f)}function j(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(f){}"ready"==b&&!i&&(i=!0);if(a.origin!=k)return!1;var a=c.value,e=c.data,g=""===g?null:c.player_id;c=g?d[g][b]:d[b];b=[];if(!c)return!1;void 0!==
	a&&b.push(a);e&&b.push(e);g&&b.push(g);return 0<b.length?c.apply(null,b):c.call()}function l(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},i=!1,k="";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);for(var a=a.split("/"),c="",b=0,f=a.length;b<f;b++){if(3>b)c+=a[b];else break;2>b&&(c+="/")}k=c;return this},api:function(a,c){if(!this.element||
	!a)return!1;var b=this.element,f=""!==b.id?b.id:null,d=!c||!c.constructor||!c.call||!c.apply?c:null,e=c&&c.constructor&&c.call&&c.apply?c:null;e&&l(a,e,f);h(a,d,b);return this},addEvent:function(a,c){if(!this.element)return!1;var b=this.element,d=""!==b.id?b.id:null;l(a,c,d);"ready"!=a?h("addEventListener",a,b):"ready"==a&&i&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b;a:{if((b=""!==c.id?c.id:null)&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=
	!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&h("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent("onmessage",j);return window.Froogaloop=window.$f=e}();
}
/*! jQuery TubePlayer - v1.1.7 - 2013-09-24
* https://github.com/nirvanatikku/jQuery-TubePlayer-Plugin
* Copyright (c) 2013 Nirvana Tikku; Licensed MIT */
if( jQuery('.youtubeplayer').length ){
	!function(a){"use strict";function b(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)})}var c=".tubeplayer",d="jquery-youtube-tubeplayer",e="opts"+c,f={inited:!1,ytplayers:{},inits:[],iframeScriptInited:!1,State:{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},Error:{BAD_INIT:0,INVALID_PARAM:2,NOT_FOUND:100,NOT_EMBEDDABLE:101,CANT_PLAY:150}};a.tubeplayer={events:{},TubePlayer:f},a.tubeplayer.defaults={afterReady:function(){},stateChange:function(b){var c=this.onPlayer;return function(d){var e=a("#"+b).parent();switch("object"==typeof d&&(d=d.data),d){case f.State.UNSTARTED:return c.unstarted[b].call(e);case f.State.ENDED:return c.ended[b].call(e);case f.State.PLAYING:return c.playing[b].call(e);case f.State.PAUSED:return c.paused[b].call(e);case f.State.BUFFERING:return c.buffering[b].call(e);case f.State.CUED:return c.cued[b].call(e);default:return null}}},onError:function(b){var c=this.onErr;return function(d){var e=a("#"+b).parent();switch("object"==typeof d&&(d=d.data),d){case f.Error.BAD_INIT:case f.Error.INVALID_PARAM:return c.invalidParameter[b].call(e);case f.Error.NOT_FOUND:return c.notFound[b].call(e);case f.Error.NOT_EMBEDDABLE:case f.Error.CANT_PLAY:return c.notEmbeddable[b].call(e);default:return c.defaultError[b].call(e)}}},qualityChange:function(b){var c=this;return function(d){var e=a("#"+b).parent();return"object"==typeof d&&(d=d.data),c.onQualityChange[b].call(e,d)}},onQualityChange:{},onPlayer:{unstarted:{},ended:{},playing:{},paused:{},buffering:{},cued:{}},onErr:{defaultError:{},notFound:{},notEmbeddable:{},invalidParameter:{}}};var g={width:425,height:355,allowFullScreen:"true",initialVideo:"DkoeNLuMbcI",start:0,preferredQuality:"auto",showControls:!0,showRelated:!1,playsinline:!1,annotations:!0,autoPlay:!1,autoHide:!0,loop:0,theme:"dark",color:"red",showinfo:!1,modestbranding:!0,protocol:"http",wmode:"transparent",swfobjectURL:"ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",loadSWFObject:!1,allowScriptAccess:"always",playerID:"tubeplayer-player-container",iframed:!0,onPlay:function(){},onPause:function(){},onStop:function(){},onSeek:function(){},onMute:function(){},onUnMute:function(){},onPlayerUnstarted:function(){},onPlayerEnded:function(){},onPlayerPlaying:function(){},onPlayerPaused:function(){},onPlayerBuffering:function(){},onPlayerCued:function(){},onQualityChange:function(){},onError:function(){},onErrorNotFound:function(){},onErrorNotEmbeddable:function(){},onErrorInvalidParameter:function(){}};a.fn.tubeplayer=function(b,d){var e=a(this),g=typeof b;return 0===arguments.length||"object"===g?e.each(function(){f.init(a(this),b)}):"string"===g?e.triggerHandler(b+c,"undefined"!=typeof d?d:null):void 0};var h=function(a){return function(b,c){var d=f.getPkg(b);if(d.ytplayer){var e=a(b,c,d);return"undefined"==typeof e&&(e=d.$player),e}return d.$player}};a.tubeplayer.getPlayers=function(){return f.ytplayers},f.init=function(h,j){if(h.hasClass(d))return h;var k=a.extend({},g,j);k.playerID+="-"+b(),h.addClass(d).data(e,k);for(var l in i)h.bind(l+c,h,i[l]);return f.initDefaults(a.tubeplayer.defaults,k),a("<div></div>").attr("id",k.playerID).appendTo(h),f.initPlayer(h,k),h},f.getPkg=function(a){var b=a.data,c=b.data(e),d=f.ytplayers[c.playerID];return{$player:b,opts:c,ytplayer:d}},f.iframeReady=function(b){return f.inits.push(function(){new YT.Player(b.playerID,{videoId:b.initialVideo,width:b.width,height:b.height,playerVars:{autoplay:b.autoPlay?1:0,autohide:b.autoHide?1:0,controls:b.showControls?1:0,loop:b.loop?1:0,playlist:b.loop?b.initialVideo:"",rel:b.showRelated?1:0,fs:b.allowFullScreen?1:0,wmode:b.wmode,showinfo:b.showinfo?1:0,modestbranding:b.modestbranding?1:0,iv_load_policy:b.annotations?1:3,start:b.start,theme:b.theme,color:b.color,playsinline:b.playsinline},events:{onReady:function(c){f.ytplayers[b.playerID]=c.target;var e=a(c.target.getIframe()).parents("."+d);a.tubeplayer.defaults.afterReady(e)},onPlaybackQualityChange:a.tubeplayer.defaults.qualityChange(b.playerID),onStateChange:a.tubeplayer.defaults.stateChange(b.playerID),onError:a.tubeplayer.defaults.onError(b.playerID)}})}),f.inits.length>=1&&!f.inited?function(){for(var a=0;a<f.inits.length;a++)f.inits[a]();f.inited=!0}:(f.inited&&f.inits.pop()(),window.onYouTubePlayerAPIReady)},f.initDefaults=function(a,b){var c=b.playerID,d=a.onPlayer;d.unstarted[c]=b.onPlayerUnstarted,d.ended[c]=b.onPlayerEnded,d.playing[c]=b.onPlayerPlaying,d.paused[c]=b.onPlayerPaused,d.buffering[c]=b.onPlayerBuffering,d.cued[c]=b.onPlayerCued,a.onQualityChange[c]=b.onQualityChange;var e=a.onErr;e.defaultError[c]=b.onError,e.notFound[c]=b.onErrorNotFound,e.notEmbeddable[c]=b.onErrorNotEmbeddable,e.invalidParameter[c]=b.onErrorInvalidParameter},f.initPlayer=function(a,b){b.iframed?f.initIframePlayer(a,b):f.initFlashPlayer(a,b)},f.initIframePlayer=function(a,b){if(!f.iframeScriptInited){var c=document.createElement("script");c.src=b.protocol+"://www.youtube.com/iframe_api";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d),f.iframeScriptInited=!0}window.onYouTubePlayerAPIReady=f.iframeReady(b)},f.initFlashPlayer=function(b,c){c.loadSWFObject?(c.swfobjectURL=c.swfobjectURL.replace("http://",""),c.swfobjectURL=c.swfobjectURL.replace("https://",""),c.swfobjectURL=c.protocol+"://"+c.swfobjectURL,a.getScript(c.swfobjectURL,f.init_flash_player(c))):f.init_flash_player(c)()},f.init_flash_player=function(b){return function(){if(!window.swfobject)return alert("YouTube Player couldn't be initialized. Please include swfobject."),void 0;var c=["//www.youtube.com/v/"];c.push(b.initialVideo),c.push("?&enablejsapi=1&version=3"),c.push("&playerapiid="+b.playerID),c.push("&rel="+(b.showRelated?1:0)),c.push("&autoplay="+(b.autoPlay?1:0)),c.push("&autohide="+(b.autoHide?1:0)),c.push("&loop="+(b.loop?1:0)),c.push("&playlist="+(b.loop?b.initialVideo:"")),c.push("&controls="+(b.showControls?1:0)),c.push("&showinfo="+(b.showinfo?1:0)),c.push("&modestbranding="+(b.modestbranding?1:0)),c.push("&iv_load_policy="+(b.annotations?1:3)),c.push("&start="+b.start),c.push("&theme="+b.theme),c.push("&color="+b.color),c.push("&playsinline="+b.playsinline),c.push("&fs="+(b.allowFullScreen?1:0)),window.swfobject.embedSWF(c.join(""),b.playerID,b.width,b.height,"8",null,null,{allowScriptAccess:b.allowScriptAccess,wmode:b.wmode,allowFullScreen:b.allowFullScreen},{id:b.playerID}),window.onYouTubePlayerReady=function(b){var c=document.getElementById(b),e=b.replace(/-/g,""),g=a.tubeplayer.defaults;a.tubeplayer.events[e]={stateChange:g.stateChange(b),error:g.onError(b),qualityChange:g.qualityChange(b)},c.addEventListener("onStateChange","$.tubeplayer.events."+e+".stateChange"),c.addEventListener("onError","$.tubeplayer.events."+e+".error"),c.addEventListener("onPlaybackQualityChange","$.tubeplayer.events."+e+".qualityChange"),f.ytplayers[b]=c;var h=a(c).parents("."+d);a.tubeplayer.defaults.afterReady(h)}}},f.getVideoIDFromURL=function(a){a=a||"";var b=a.indexOf("?"),c=a.substring(b,a.length),d=c.indexOf("v=");if(d>-1){var e=c.indexOf("&",d);return-1===e&&(e=c.length),c.substring(d+"v=".length,e)}return""};var i={opts:h(function(a,b,c){return c.opts}),cue:h(function(a,b,c){c.ytplayer.cueVideoById(b,0,c.opts.preferredQuality)}),play:h(function(a,b,c){"object"==typeof b?c.ytplayer.loadVideoById({videoId:b.id,startSeconds:b.time,suggestedQuality:c.opts.preferredQuality}):"undefined"!=typeof b?c.ytplayer.loadVideoById({videoId:b,startSeconds:0,suggestedQuality:c.opts.preferredQuality}):c.ytplayer.playVideo(),c.opts.onPlay(b)}),pause:h(function(a,b,c){c.ytplayer.pauseVideo(),c.opts.onPause(c)}),stop:h(function(a,b,c){c.ytplayer.stopVideo(),c.opts.onStop(c)}),seek:h(function(a,b,c){if(/:/.test(b)){var d=b.split(":").reverse();b=0;for(var e=0;e<d.length;e++)b+=Math.pow(60,e)*(0|d[e])}c.ytplayer.seekTo(b,!0),c.opts.onSeek(b)}),mute:h(function(a,b,c){c.$player.attr("data-prev-mute-volume",c.ytplayer.getVolume()),c.ytplayer.mute(),c.opts.onMute(c)}),unmute:h(function(a,b,c){c.ytplayer.unMute(),c.ytplayer.setVolume(c.$player.attr("data-prev-mute-volume")||50),c.opts.onUnMute()}),isMuted:h(function(a,b,c){return c.ytplayer.isMuted()}),volume:h(function(a,b,c){return"undefined"==typeof b?c.ytplayer.getVolume()||0:(c.ytplayer.setVolume(b),c.$player.attr("data-prev-mute-volume",c.ytplayer.getVolume()),void 0)}),quality:h(function(a,b,c){return"undefined"==typeof b?c.ytplayer.getPlaybackQuality():(c.ytplayer.setPlaybackQuality(b),void 0)}),playbackRate:h(function(a,b,c){return"undefined"==typeof b?c.ytplayer.getPlaybackRate():(c.ytplayer.setPlaybackRate(b),void 0)}),data:h(function(a,b,c){var d={},e=c.ytplayer;return d.videoLoadedFraction=e.getVideoLoadedFraction(),d.bytesLoaded=e.getVideoBytesLoaded(),d.bytesTotal=e.getVideoBytesTotal(),d.startBytes=e.getVideoStartBytes(),d.state=e.getPlayerState(),d.currentTime=e.getCurrentTime(),d.duration=e.getDuration(),d.videoURL=e.getVideoUrl(),d.videoEmbedCode=e.getVideoEmbedCode(),d.videoID=f.getVideoIDFromURL(d.videoURL),d.availableQualityLevels=e.getAvailableQualityLevels(),d.availablePlaybackRates=e.getAvailablePlaybackRates(),d}),videoId:h(function(a,b,c){return f.getVideoIDFromURL(c.ytplayer.getVideoUrl())}),size:h(function(b,c,d){"undefined"!=typeof c&&c.width&&c.height&&(d.ytplayer.setSize(c.width,c.height),a(d.ytplayer).css(c))}),destroy:h(function(b,g,h){h.$player.removeClass(d).data(e,null).unbind(c).html(""),delete f.ytplayers[h.opts.playerID];var i=a.tubeplayer.defaults,j=["unstarted","ended","playing","paused","buffering","cued"];return a.each(j,function(a,b){delete i.onPlayer[b][h.opts.playerID]}),j=["defaultError","notFound","notEmbeddable","invalidParameter"],a.each(j,function(a,b){delete i.onErr[b][h.opts.playerID]}),delete i.onQualityChange[h.opts.playerID],delete a.tubeplayer.events[h.opts.playerID],"destroy"in h.ytplayer&&h.ytplayer.destroy(),a(h.ytplayer).remove(),null}),player:h(function(a,b,c){return c.ytplayer})}}(jQuery);
}


/*-----------------------------------------------------------------------------------*/
/* Superslides - Home Page Slider
/*===================================================================================*/
/*! Superslides - v0.6.3-wip - 2013-08-01
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function(window, $) {

var Superslides, plugin = 'superslides';
Superslides = function(el, options) {
  this.options = $.extend({
    play: false,
    animation_speed: 600,
    animation_easing: 'swing',
    animation: 'slide',
    inherit_width_from: window,
    inherit_height_from: window,
    pagination: true,
    hashchange: false,
    scrollable: true,
    elements: {
      preserve: '.preserve',
      nav: '.slides-navigation',
      container: '.slides-container',
      pagination: '.slides-pagination'
    }
  }, options);

  var that = this,
      $control = $('<div>', { "class": 'slides-control' }),
      multiplier = 1;

  this.$el = $(el);
  this.$container = this.$el.find(this.options.elements.container);

  // Private Methods
  var initialize = function() {
    multiplier = that._findMultiplier();

    that.$el.on('click', that.options.elements.nav + " a", function(e) {
      e.preventDefault();

      that.stop();
      if ($(this).hasClass('next')) {
        that.animate('next', function() {
          that.start();
        });
      } else {
        that.animate('prev', function() {
          that.start();
        });
      }
    });

    $(document).on('keyup', function(e) {
      if (e.keyCode === 37 && !$('body > div').hasClass("mfp-wrap") && $('.slides-container').children().length > 1) {
        that.animate('prev');
      }
      if (e.keyCode === 39 && !$('body > div').hasClass("mfp-wrap") && $('.slides-container').children().length > 1) {
        that.animate('next');
      }
    });

    $(window).on('resize', function() {
      setTimeout(function() {
        var $children = that.$container.children();

        that.width = that._findWidth();
        that.height = that._findHeight();
          /*if ($(window).width() > 568 && $(window).height() < 768) {
		   	that.height = 768;
		  }

		  else*/ if ($(window).height() < 480) {
		   	that.height = 480;
		  }

        $children.css({
          width: that.width,
          left: that.width
        });

        that.css.containers();
        that.css.images();
      }, 10);
    });

    $(window).on('hashchange', function() {
      var hash = that._parseHash(), index;

      index = that._upcomingSlide(hash);

      if (index >= 0 && index !== that.current) {
        that.animate(index);
      }
    });

    that.pagination._events();

    that.start();
    return that;
  };

var css = {
  containers: function() {
    if (that.init) {
      that.$el.css({
        height: that.height
      });

      that.$control.css({
        width: that.width * multiplier,
        left: -that.width
      });

      that.$container.css({

      });
    } else {
      $('body').css({
        margin: 0
      });

      that.$el.css({
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: that.height
      });

      that.$control.css({
        position: 'relative',
        transform: 'translate3d(0)',
        height: '100%',
        width: that.width * multiplier,
        left: -that.width
      });

      that.$container.css({
       	visibility:'hidden',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        position: 'relative',
        height: '100%'
      });
    }

    if (that.size() === 1) {
      that.$el.find(that.options.elements.nav).hide();
    }
  },
  images: function() {
    var $images = that.$container.find('img')
                                 .not(that.options.elements.preserve)

    $images.removeAttr('width').removeAttr('height')
      .css({
        "-webkit-backface-visibility": 'hidden',
        "-ms-interpolation-mode": 'bicubic',
        "position": 'absolute',
        "left": '0',
        "top": '0',
        "z-index": '-9999',
        "max-width": 'none'
      });

    $images.each(function() {
      var image_aspect_ratio = that.image._aspectRatio(this),
          image = this;

      if (!$.data(this, 'processed')) {
        var img = new Image();
        img.onload = function() {
          that.image._scale(image, image_aspect_ratio);
          that.image._center(image, image_aspect_ratio);
          $.data(image, 'processed', true);
        };
        img.src = this.src;

      } else {
        that.image._scale(image, image_aspect_ratio);
        that.image._center(image, image_aspect_ratio);
      }
    });
  },
  children: function() {
    var $children = that.$container.children();

    if ($children.is('img')) {
      $children.each(function() {
        if ($(this).is('img')) {
          $(this).wrap('<div>');

          // move id attribute
          var id = $(this).attr('id');
          $(this).removeAttr('id');
          $(this).parent().attr('id', id);
        }
      });

      $children = that.$container.children();
    }

    if (!that.init) {
      $children.css({
      	visibility: 'hidden',
        left: that.width * 2
      });
    }

    $children.css({
      position: 'absolute',
      overflow: 'hidden',
      height: '100%',
      width: that.width,
      top: 0,
      zIndex: 0
    });

  }
}

var fx = {
  slide: function(orientation, complete) {
    var $children = that.$container.children(),
        $target = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: orientation.upcoming_position,
      visibility: 'visible'
    });

    that.$control.animate({
      left: orientation.offset
    },
    that.options.animation_speed,
    that.options.animation_easing,
    function() {
      if (that.size() > 1) {
        that.$control.css({
          left: -that.width
        });

        $children.eq(orientation.upcoming_slide).css({
          left: that.width,
          zIndex: 2
        });

        if (orientation.outgoing_slide >= 0) {
          $children.eq(orientation.outgoing_slide).css({
            left: that.width,
            visibility: 'hidden',
            zIndex: 0
          });
        }
      }

      complete();
    });
  },
  fade: function(orientation, complete) {
    var that = this,
        $children = that.$container.children(),
        $outgoing = $children.eq(orientation.outgoing_slide),
        $target = $children.eq(orientation.upcoming_slide);

    $target.css({
      left: this.width,
      opacity: 1,
      visibility: 'visible'
    });

    if (orientation.outgoing_slide >= 0) {
      $outgoing.animate({
        opacity: 0
      },
      that.options.animation_speed,
      that.options.animation_easing,
      function() {
        if (that.size() > 1) {
          $children.eq(orientation.upcoming_slide).css({
            zIndex: 2
          });

          if (orientation.outgoing_slide >= 0) {
            $children.eq(orientation.outgoing_slide).css({
              opacity: 1,
              visibility: 'hidden',
              zIndex: 0
            });
          }
        }

        complete();
      });
    } else {
      $target.css({
        zIndex: 2
      });
      complete();
    }
  }
};

fx = $.extend(fx, $.fn.superslides.fx);

var image = {
  _centerY: function(image) {
    var $img = $(image);

    $img.css({
      top: (that.height - $img.height()) / 2
    });
  },
  _centerX: function(image) {
    var $img = $(image);

    $img.css({
      left: (that.width - $img.width()) / 2
    });
  },
  _center: function(image) {
    that.image._centerX(image);
    that.image._centerY(image);
  },
  _aspectRatio: function(image) {
    if (!image.naturalHeight && !image.naturalWidth) {
      var img = new Image();
      img.src = image.src;
      image.naturalHeight = img.height;
      image.naturalWidth = img.width;
    }

    return image.naturalHeight / image.naturalWidth;
  },
  _scale: function(image, image_aspect_ratio) {
    image_aspect_ratio = image_aspect_ratio || that.image._aspectRatio(image);

    var container_aspect_ratio = that.height / that.width,
        $img = $(image);

    if (container_aspect_ratio > image_aspect_ratio) {
      $img.css({
        height: that.height,
        width: that.height / image_aspect_ratio
      });

    } else {
      $img.css({
        height: that.width * image_aspect_ratio,
        width: that.width
      });
    }
  }
};

var pagination = {
  _setCurrent: function(i) {
    if (!that.$pagination) { return; }

    var $pagination_children = that.$pagination.children();

    $pagination_children.removeClass('current');
    $pagination_children.eq(i)
      .addClass('current');
  },
  _addItem: function(i) {
    var slide_number = i + 1,
        href = slide_number,
        $slide = that.$container.children().eq(i),
        slide_id = $slide.attr('id');

    if (slide_id) {
      href = slide_id;
    }

    var $item = $("<a>", {
      'href': "#" + href,
      'text': href
    });

    $item.appendTo(that.$pagination);
  },
  _setup: function() {
    if (!that.options.pagination || that.size() === 1) { return; }

    var $pagination = $("<nav>", {
      'class': that.options.elements.pagination.replace(/^\./, '')
    });

    that.$pagination = $pagination.appendTo(that.$el);

    for (var i = 0; i < that.size(); i++) {
      that.pagination._addItem(i);
    }
  },
  _events: function() {
    that.$el.on('click', that.options.elements.pagination + ' a', function(e) {
      e.preventDefault();

      var hash = that._parseHash(this.hash), index;
      index = that._upcomingSlide(hash, true);

      if (index !== that.current) {
        that.animate(index, function() {
          that.start();
        });
      }
    });
  }
};

  this.css = css;
  this.image = image;
  this.pagination = pagination;
  this.fx = fx;
  this.animation = this.fx[this.options.animation];

  this.$control = this.$container.wrap($control).parent('.slides-control');

  that._findPositions();
  that.width = that._findWidth();
  that.height = that._findHeight();
   /*if ($(window).width() > 568 && $(window).height() < 768) {
   	that.height = 768;
  }

  else*/ if ($(window).height() < 480) {
   	that.height = 480;
  }

  this.css.children();
  this.css.containers();
  this.css.images();
  this.pagination._setup();

  return initialize();
};

Superslides.prototype = {
  _findWidth: function() {
    return $(this.options.inherit_width_from).width();
  },
  _findHeight: function() {
    return $(this.options.inherit_height_from).height();
  },

  _findMultiplier: function() {
    return this.size() === 1 ? 1 : 3;
  },

  _upcomingSlide: function(direction, from_hash_change) {
    if (from_hash_change && !isNaN(direction)) {
      direction = direction - 1;
    }

    if ((/next/).test(direction)) {
      return this._nextInDom();

    } else if ((/prev/).test(direction)) {
      return this._prevInDom();

    } else if ((/\d/).test(direction)) {
      return +direction;

    } else if (direction && (/\w/).test(direction)) {
      var index = this._findSlideById(direction);
      if (index >= 0) {
        return index;
      } else {
        return 0;
      }

    } else {
      return 0;
    }
  },

  _findSlideById: function(id) {
    return this.$container.find('#' + id).index();
  },

  _findPositions: function(current, thisRef) {
    thisRef = thisRef || this;

    if (current === undefined) {
      current = -1;
    }

    thisRef.current = current;
    thisRef.next = thisRef._nextInDom();
    thisRef.prev = thisRef._prevInDom();
  },

  _nextInDom: function() {
    var index = this.current + 1;

    if (index === this.size()) {
      index = 0;
    }

    return index;
  },

  _prevInDom: function() {
    var index = this.current - 1;

    if (index < 0) {
      index = this.size() - 1;
    }

    return index;
  },

  _parseHash: function(hash) {
    hash = hash || window.location.hash;
    hash = hash.replace(/^#/, '');

    if (hash && !isNaN(+hash)) {
      hash = +hash;
    }

    return hash;
  },

  size: function() {
    return this.$container.children().length;
  },

  destroy: function() {
    return this.$el.removeData();
  },

  update: function() {
    this.css.children();
    this.css.containers();
    this.css.images();

    this.pagination._addItem(this.size())

    this._findPositions(this.current);
    this.$el.trigger('updated.slides');
  },

  stop: function() {
    clearInterval(this.play_id);
    delete this.play_id;

    this.$el.trigger('stopped.slides');
  },

  start: function() {
    var that = this;

    if (that.options.hashchange) {
      $(window).trigger('hashchange');
    } else {
      this.animate();
    }

    if (this.options.play) {
      if (this.play_id) {
        this.stop();
      }

      this.play_id = setInterval(function() {
        that.animate();
      }, this.options.play);
    }

    this.$el.trigger('started.slides');
  },

  animate: function(direction, userCallback) {
    var that = this,
        orientation = {};

    if (this.animating) {
      return;
    }

    this.animating = true;

    if (direction === undefined) {
      direction = 'next';
    }

    orientation.upcoming_slide = this._upcomingSlide(direction);

    if (orientation.upcoming_slide >= this.size()) {
      return;
    }

    orientation.outgoing_slide = this.current;
    orientation.upcoming_position = this.width * 2;
    orientation.offset = -orientation.upcoming_position;

    if (direction === 'prev' || direction < orientation.outgoing_slide) {
      orientation.upcoming_position = 0;
      orientation.offset = 0;
    }

    if (that.size() > 1) {
      that.pagination._setCurrent(orientation.upcoming_slide);
    }

    if (that.options.hashchange) {
      var hash = orientation.upcoming_slide + 1,
          id = that.$container.children(':eq(' + orientation.upcoming_slide + ')').attr('id');

      if (id) {
        window.location.hash = id;
      } else {
        window.location.hash = hash;
      }
    }

    that.$el.trigger('animating.slides', [orientation]);

    that.animation(orientation, function() {
      that._findPositions(orientation.upcoming_slide, that);

      if (typeof userCallback === 'function') {
        userCallback();
      }

      that.animating = false;
      that.$el.trigger('animated.slides');

      if (!that.init) {
        that.$el.trigger('init.slides');
        that.init = true;
        that.$container.fadeIn('fast');
      }
    });
  }
};

// jQuery plugin definition

$.fn[plugin] = function(option, args) {
  var result = [];

  this.each(function() {
    var $this, data, options;

    $this = $(this);
    data = $this.data(plugin);
    options = typeof option === 'object' && option;

    if (!data) {
      result = $this.data(plugin, (data = new Superslides(this, options)));
    }

    if (typeof option === "string") {
      result = data[option];
      if (typeof result === 'function') {
        return result = result.call(data, args);
      }
    }
  });

  return result;
};

$.fn[plugin].fx = {};

})(this, jQuery);



/*-----------------------------------------------------------------------------------*/
/* Scrolling/Parallax Animations
/*===================================================================================*/
/*! skrollr 0.6.15 (2013-10-03) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,G(),at=this,r=r||{},ft=r.constants||{},r.easing)for(var n in r.easing)j[n]=r.easing[n];ht=r.edgeStrategy||"set",st={beforerender:r.beforerender,render:r.render},ct=r.forceHeight!==!1,ct&&(Vt=r.scale||1),ut=r.mobileDeceleration||E,mt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||A,dt={targetTop:at.getScrollTop()},Nt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Nt?(lt=t.getElementById("skrollr-body"),lt&&ot(),W(),xt(o,[y,S],[T])):xt(o,[y,b],[T]),at.refresh(),bt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Lt||e!==It)&&(Lt=t,It=e,Bt=!0)});var i=R();return function l(){Z(),Tt=i(l)}(),at}var o,a,i=e.skrollr={get:function(){return at},init:function(e){return at||new n(e)},VERSION:"0.6.15"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,A=200,x="start",F="end",C="center",D="bottom",H="___skrollable_id",P=/^\s+|\s+$/g,V=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,B=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,N=/[a-z\-]+-gradient/g,$="",_="",G=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if($=n.match(e)||+n==n&&t[n].match(e))break;if(!$)return $=_="",r;$=$[0],"-"===$.slice(0,1)?(_=$,$={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[$]):_="-"+$.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[$.toLowerCase()+"RequestAnimationFrame"],r=Dt();return(Nt||!t)&&(t=function(t){var n=Dt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Dt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[$.toLowerCase()+"CancelAnimationFrame"];return(Nt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,it=[],Mt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=mt,f=ht;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(V);if(null!==d){var v={props:m.value,element:i};s.push(v);var h=d[1];h=h&&ft[h.substr(1)]||0;var y=d[2];/p$/.test(y)?(v.isPercentage=!0,v.offset=((0|y.slice(0,-1))+h)/100):v.offset=(0|y)+h;var T=d[3],b=d[4]||T;T&&T!==x&&T!==F?(v.mode="relative",v.anchors=[T,b]):(v.mode="absolute",T===F?v.isEnd=!0:v.isPercentage||(v.frame=v.offset*Vt,delete v.offset))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=it[k].styleAttr,w=it[k].classAttr):(k=i[H]=Mt++,S=i.style.cssText,w=At(i)),it[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},xt(i,[g],[])}}}for(kt(),n=0,o=e.length;o>n;n++){var E=it[e[n][H]];E!==r&&(J(E),Q(E))}return at},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=at.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Dt(),o=at.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:j[t.easing||w],done:t.done},pt.topDiff||(pt.done&&pt.done.call(at,!1),pt=r),at},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(at,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.setScrollTop=function(t,r){return vt=r===!0,Nt?$t=s.min(s.max(t,0),Pt):e.scrollTo(0,t),at},n.prototype.getScrollTop=function(){return Nt?$t:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Pt},n.prototype.on=function(e,t){return st[e]=t,at},n.prototype.off=function(e){return delete st[e],at},n.prototype.destroy=function(){var e=U();e(Tt),wt(),xt(o,[T],[y,b,S]);for(var t=0,n=it.length;n>t;t++)nt(it[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",lt&&i.setStyle(lt,"transform","none"),at=r,lt=r,st=r,ct=r,Pt=0,Vt=1,ft=r,ut=r,zt="down",Ot=-1,It=0,Lt=0,Bt=!1,pt=r,mt=r,gt=r,dt=r,vt=r,Mt=0,ht=r,Nt=!1,$t=0,yt=r};var W=function(){var n,i,l,c,g,d,v,h,y,T,b;bt(o,[f,u,p,m].join(" "),function(e){e.preventDefault();var o=e.changedTouches[0];switch(c=o.clientY,g=o.clientX,y=e.timeStamp,e.type){case f:for(n&&n.blur(),at.stopAnimateTo(),n=e.target;3===n.nodeType;)n=n.parentNode;i=d=c,l=g,h=y;break;case u:v=c-d,b=y-T,at.setScrollTop($t-v,!0),d=c,T=y;break;default:case p:case m:var a=i-c,S=l-g,w=S*S+a*a;if(49>w){n.focus();var k=t.createEvent("MouseEvent");return k.initEvent("click",!0,!0),n.dispatchEvent(k),r}n=r;var E=v/b;E=s.max(s.min(E,3),-3);var A=s.abs(E/ut),x=E*A+.5*ut*A*A,F=at.getScrollTop()-x,C=0;F>Pt?(C=(Pt-F)/x,F=Pt):0>F&&(C=-F/x,F=0),A*=1-C,at.animateTo(0|F+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},Y=function(){var e,t,r,n,a,i,l,c,f;for(c=0,f=it.length;f>c;c++)for(e=it[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++){l=n[a];var u=l.offset;l.isPercentage&&(u*=o.clientHeight,l.frame=u),"relative"===l.mode&&(nt(t),l.frame=at.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,nt(t,!0)),ct&&!l.isEnd&&l.frame>Pt&&(Pt=l.frame)}for(Pt=s.max(Pt,Et()),c=0,f=it.length;f>c;c++){for(e=it[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],l.isEnd&&(l.frame=Pt-l.offset);e.keyFrames.sort(Ht)}},X=function(e,t){for(var r=0,n=it.length;n>r;r++){var o,a,s=it[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(xt(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":nt(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=rt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(xt(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],A=u[w+1];for(o in E.props)if(l.call(E.props,o)){var x=(f-E.frame)/(A.frame-E.frame);x=E.props[o].easing(x),a=tt(E.props[o].value,A.props[o].value,x),a=rt(a),i.setStyle(c,o,a)}break}}},Z=function(){Bt&&(Bt=!1,kt());var e,t,n=at.getScrollTop(),o=Dt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),at.setScrollTop(n,!0);else if(!vt){var a=dt.targetTop-n;a&&(dt={startTop:Ot,topDiff:n-Ot,targetTop:n,startTime:qt,endTime:qt+gt}),dt.endTime>=o&&(t=j.sqrt((o-dt.startTime)/gt),n=0|dt.startTop+t*dt.topDiff)}if(Nt&&lt&&i.setStyle(lt,"transform","translate(0, "+-$t+"px) "+yt),vt||Ot!==n){zt=n>Ot?"down":Ot>n?"up":zt,vt=!1;var l={curTop:n,lastTop:Ot,maxTop:Pt,direction:zt},s=st.beforerender&&st.beforerender.call(at,l);s!==!1&&(X(n,at.getScrollTop()),Ot=n,st.render&&st.render.call(at,l)),e&&e.call(at,!1)}qt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=z.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?K(o):[o.slice(1)],s[a]={value:o,easing:j[n]};l.props=s}},K=function(e){var t=[];return M.lastIndex=0,e=e.replace(M,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),_&&(N.lastIndex=0,e=e.replace(N,function(e){return _+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},Q=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)et(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)et(e.keyFrames[t],n)},et=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},tt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},rt=function(e){var t=1;return B.lastIndex=0,e[0].replace(B,function(){return e[t++]})},nt=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=it[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,xt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=At(n),n.style.cssText=r.styleAttr,xt(n,r.classAttr)))},ot=function(){yt="translateZ(0)",i.setStyle(lt,"transform",yt);var e=c(lt),t=e.getPropertyValue("transform"),r=e.getPropertyValue(_+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(yt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{$&&(n[$+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var at,it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),_t.push({element:t,name:a,listener:n})},St=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=_t.length;r>t;t++)e=_t[t],St(e.element,e.name,e.listener);_t=[]},kt=function(){var e=at.getScrollTop();Pt=0,ct&&!Nt&&(a.style.height="auto"),Y(),ct&&!Nt&&(a.style.height=Pt+o.clientHeight+"px"),Nt?at.setScrollTop(s.min(at.getScrollTop(),Pt)):at.setScrollTop(e,!0),vt=!0},Et=function(){var e=lt&&lt.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},At=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},xt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ct(i).replace(Ct(o[l])," ");i=Ft(i);for(var c=0,f=n.length;f>c;c++)-1===Ct(i).indexOf(Ct(n[c]))&&(i+=" "+n[c]);t[a]=Ft(i)},Ft=function(e){return e.replace(P,"")},Ct=function(e){return" "+e+" "},Dt=Date.now||function(){return+new Date},Ht=function(e,t){return e.frame-t.frame},Pt=0,Vt=1,zt="down",Ot=-1,qt=Dt(),It=0,Lt=0,Bt=!1,Mt=0,Nt=!1,$t=0,_t=[]})(window,document);

/*! skrollr-ie 1.0.0 (2013-05-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-ie | Free to use under terms of MIT license */
(function(e,t){"use strict";var r=/hsla?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)%\s*,\s*(-?[\d.]+)%.*?\)/g,s=/rgba?\(\s*(-?[\d.]+%?)\s*,\s*(-?[\d.]+%?)\s*,\s*(-?[\d.]+%?).*?\)/g,o=/^#[^\s]+$/,l=t.setStyle;t.setStyle=function(e,t,o){l.apply(this,arguments);var a,i=e.style;if("opacity"===t)return i.zoom=1,o>=1&&i.removeAttribute?i.removeAttribute("filter"):i.filter="alpha(opacity="+100*o+")",void 0;if(o.indexOf("hsl")>-1&&(a=!1,o=o.replace(r,function(e,t,r,s){return a=!0,n.hsl(parseFloat(t),parseFloat(r),parseFloat(s))}),a))try{i[t]=o}catch(u){}else if(o.indexOf("rgb")>-1&&(a=!1,o=o.replace(s,function(e,t,r,s){return a=!0,t=parseFloat(t,10),r=parseFloat(r,10),s=parseFloat(s,10),e.indexOf("%")>-1&&(t=255*(t/100),r=255*(r/100),s=255*(s/100)),n.rgb(0|t,0|r,0|s)}),a))try{i[t]=o}catch(u){}else;};var n={hsl:function(e,t,r,s){return e%=360,e/=60,r/=100,t=[r+=t*=(.5>r?r:1-r)/100,r-2*e%1*t,r-=t*=2,r,r+e%1*t,r+t],s=[t[~~e%6],t[(16|e)%6],t[(8|e)%6]],n.rgb(parseInt(255*s[0],10),parseInt(255*s[1],10),parseInt(255*s[2],10))},rgb:function(e,t,r){return"#"+((256+e<<8|t)<<8|r).toString(16).slice(1)}};e.querySelector=e.querySelector||function(t){if(!o.test(t))throw'Unsupported selector "'+t+'". The querySelector polyfill only works for IDs.';return e.getElementById(t.substr(1))}})(document,window.skrollr);




/*-----------------------------------------------------------------------------------*/
/* Touch Swipe
/*===================================================================================*/
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));



