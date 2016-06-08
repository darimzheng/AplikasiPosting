

/*===============================
http://belitunginfo.com//plugins/system/k2multirate/K2Multirate/js/k2multirate.js
================================================================================*/;
$K2(document).ready(function(){function getUrlParams(targetScript,varName){var scripts=document.getElementsByTagName('script');var scriptCount=scripts.length;for(var a=0;a<scriptCount;a++){var scriptSrc=scripts[a].src;if(scriptSrc.indexOf(targetScript)>=0){varName=varName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var re=new RegExp("[\\?&]"+varName+"=([^&#]*)");var parsedVariables=re.exec(scriptSrc);if(parsedVariables!==null){return parsedVariables[1];}}}}
$K2('.itemRatingForm-multi a').click(function(event){console.log("huwala humba");event.preventDefault();var ratename=$K2(this).parents(".itemRatingForm-multi").find('.itemRatingTitle').attr("rel");var itemID=$K2(this).attr('rel');var log=$K2(this).parents(".itemRatingForm-multi").find('.itemRatingLog-multi').empty().addClass('formLogLoading-multi');var current=$K2(this).parents(".itemRatingForm-multi").find('.itemRatingList-multi li:eq(0)');var rating=$K2(this).html();var averageRating=$K2(this).parents("#avg-rate-cus").find("li.ratingAverage");if(typeof K2SitePath=='undefined'){var K2SitePath=getUrlParams('k2.js','sitepath');}
var url1=K2SitePath+"index.php?option=com_k2&view=item&task=vote&format=raw&user_rating="+rating+"&itemID="+itemID+"&rating="+ratename;var url2=K2SitePath+"index.php?option=com_k2&view=item&task=getVotesPercentage&format=raw&itemID="+itemID+"&rating="+ratename;var url3=K2SitePath+"index.php?option=com_k2&view=item&task=getVotesNum&format=raw&itemID="+itemID+"&rating="+ratename;var url4=K2SitePath+"index.php?option=com_k2&view=item&task=getRatingsAverage&format=raw&itemID="+itemID;$K2.ajax({url:url1,type:'get',success:function(response){log.removeClass('formLogLoading-multi');log.html(response);$K2.ajax({url:url2,type:'get',success:function(percentage){current.css('width',percentage+"%");$K2.ajax({url:url3,type:'get',success:function(response){log.html("");setTimeout(function(){$K2.ajax({url:url4,type:'get',success:function(response){averageRating.css("width",response+"%");}});},1000);}});}});}});});});


/*===============================
/plugins/content/jw_sig/jw_sig/includes/js/jquery_fancybox/fancybox/lib/jquery.mousewheel-3.0.6.pack.js
================================================================================*/;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);