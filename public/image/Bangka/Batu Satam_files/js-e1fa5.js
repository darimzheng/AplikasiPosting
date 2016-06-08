

/*===============================
/modules/mod_noo_login/assets/script.js
================================================================================*/;
var nooboxes=[];var noooverlay=null;function nooShowBox(element){if(!noooverlay){jQuery(element).before('<div id="noologin-overlay"></div>');noooverlay=jQuery('#noologin-overlay');noooverlay.css({opacity:0.01}).fadeIn();noooverlay.click(function(){nooboxes.each(function(box){if(box.css('display')=='block'){box.hide();}});noooverlay.hide();});}
var box=jQuery(element);if(!box)
return;if(!nooboxes.contains(box)){nooboxes.push(box);}
nooboxes.each(function(el){el.hide();});noooverlay.show();box.show();}


/*===============================
/modules/mod_jvbingtranslator/assets/js/default.js
================================================================================*/;
function getBingWidget(defaultlang){var s=new Element('script',{src:((location&&location.href&&location.href.indexOf('https')==0)?"https://ssl.microsofttranslator.com":"http://www.microsofttranslator.com")+"/ajax/v2/widget.aspx?mode=manual&from="+defaultlang+"&layout=ts"});s.type="text/javascript";s.charset="UTF-8";s.onreadyStatechanged=function(){if(s.readystate==='loaded'||s.readystate==='complete'){s.onload();}}
s.onload=function(){s.onload=null;s.onreadyStatechanged=null;var
el,loop=setInterval(function(){el=$('MicrosoftTranslatorToolbar');if(el){el.setStyle('display','none');$('MSTTSpacer').setStyle('display','none');clearInterval(loop);}},100);}
var p=$$('head')[0]||document.documentElement;p.appendChild(s);}
window.addEvent('domready',function(){$$('.jvbingtransflags').each(function(el){el.addEvent('click',function(){var
defaultlang=$('jvbingdefaultlang').value,flaglang=el.getProperty('alt');if(flaglang!=defaultlang){$('MSTWMenu').value=flaglang;$('MSTWMenu').onchange();}
$('MSTWGoButton').onclick();if($('MicrosoftTranslatorToolbar')){var loop=setInterval(function(){el=$('MicrosoftTranslatorToolbar');if(el){el.setStyle('display','none');$('MSTTSpacer').setStyle('display','none');clearInterval(loop);}},100)}
$$('.jvbingtransflags').removeClass('active');el.addClass('active');});});})