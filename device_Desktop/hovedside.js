if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
video3218.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 437px; height: 291px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 8; cursor: pointer; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj3218",
	bInsAnc:	1,
	stdHtml:	'<video id="swftobj3218" name="swftobj3218" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Animasjon%20oppstart3.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Animasjon oppstart3.mp4',
	cwObj:		{
		"name":	"Animasjon oppstart3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkTogglePlay',actItem:function(){ trivLogMsg( 'Action [OnMClkTogglePlay on Animasjon oppstart3] fired!', 4 )
    video3218.togglePlay();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:6,delay:0,name:'OnDoneHide',actItem:function(){ trivLogMsg( 'Action [OnDoneHide on Animasjon oppstart3] fired!', 4 )
    video3218.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[68,320,0,[285,199,437,291]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":285,"y":199,"width":437,"height":291},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":true,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":true,"skinHeight":0}
};
shape2564.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 207 97\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(103.5 48.5)\" style=\"\">\n	<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_66_1507\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"204\" height=\"94\" xlink:href=\"images/Btn.forside.jpg\" preserveAspectRatio=\"none\" href=\"images/Btn.forside.jpg\"></image>\n</pattern>\n<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_66_1507&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(103.5 48.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-82.68\" y=\"7.56\" fill=\"#000000\">REFERANSER</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 744.5px; top: 532.5px; width: 207px; height: 97px; z-index: 0; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2564",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnOppgaver",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnOppgaver] fired!', 4 )
    trivExitPage('referanser_referanser.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[744.5,532.5,207,97]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.6","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":746,"y":534,"width":207,"height":97},"btnState":"disabled","altValue":"REFERANSER","titleValue":"REFERANSER","fallbackImg":"<img src=\"images/desktop_shape2564.png\" alt=\"BtnOppgaver\" title=\"BtnOppgaver\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape64.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 222 120\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(111.22 60)\" style=\"\">\n	<path d=\"M 25 0 L 112 0 A 25 25 0 0 1 133.65 12.5 L 219.45 -17 L 137 45 L 137 75 A 25 25 0 0 1 112 100 L 25 100 A 25 25 0 0 1 0 75 L 0 25 A 25 25 0 0 1 25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-109.725, -41.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(70 68.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-42.02\" y=\"-8.17\" fill=\"#000000\">Klikk på</tspan>\n			<tspan x=\"-26.02\" y=\"23.29\" fill=\"#000000\">bien!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 327.5px; top: 331.5px; width: 222px; height: 120px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj64",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Callout Rounded Rectangle"
	},
	objData:	{"a":[0,32,0,[327.5,331.5,222,120]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":329,"y":350,"width":140,"height":103},"btnState":"disabled","altValue":"Klikk på bien!","titleValue":"Klikk på bien!","fallbackImg":"<img src=\"images/desktop_shape64.png\" alt=\"Callout Rounded Rectangle\" title=\"Callout Rounded Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape16.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 207 97\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(103.5 48.5)\" style=\"\">\n	<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_66_1509\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"204\" height=\"94\" xlink:href=\"images/Btn.forside.jpg\" preserveAspectRatio=\"none\" href=\"images/Btn.forside.jpg\"></image>\n</pattern>\n<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_66_1509&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(103.5 48.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-60.01\" y=\"-8.17\" fill=\"#000000\">TEST DEG</tspan>\n			<tspan x=\"-31.34\" y=\"23.29\" fill=\"#000000\">SELV</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 515.5px; top: 532.5px; width: 207px; height: 97px; z-index: 2; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj16",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnOppgaver",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnOppgaver] fired!', 4 )
    trivExitPage('oppgaver_test_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[515.5,532.5,207,97]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.6","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":517,"y":534,"width":207,"height":97},"btnState":"disabled","altValue":"TEST DEG SELV","titleValue":"TEST DEG SELV","fallbackImg":"<img src=\"images/desktop_shape16.png\" alt=\"BtnOppgaver\" title=\"BtnOppgaver\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image332.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj332Img\" src=\"images/Bie.png\" alt=\"Bie\" title=\"Bie\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 192px; height: 141px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 505px; top: 190px; width: 192px; height: 141px; z-index: 3; cursor: pointer; transform: rotate(16deg);; behavior:url(-ms-transform.htc); -moz-transform:rotate(16deg) ; -webkit-transform:rotate(16deg) ; -o-transform:rotate(16deg) ; -ms-transform:rotate(16deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9612616959383189, M12=-0.27563735581699916, M21=0.27563735581699916, M22=0.9612616959383189) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9612616959383189, M12=-0.27563735581699916, M21=0.27563735581699916, M22=0.9612616959383189) ",
	cssClasses:	"",
	htmlId:		"tobj332",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Bie",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on Bie] fired!', 4 )
    video3218.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkPlay',actItem:function(){ trivLogMsg( 'Action [OnMClkPlay on Bie] fired!', 4 )
    video3218.play();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[505,190,192,141]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":16,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":190,"width":192,"height":141}}
};
shape12.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 207 97\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(103.5 48.5)\" style=\"\">\n	<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_66_1511\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"204\" height=\"94\" xlink:href=\"images/Btn.forside.jpg\" preserveAspectRatio=\"none\" href=\"images/Btn.forside.jpg\"></image>\n</pattern>\n<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_66_1511&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(103.5 48.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-36.67\" y=\"7.56\" fill=\"#000000\">TEORI</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 287.5px; top: 532.5px; width: 207px; height: 97px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj12",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnTeori",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnTeori] fired!', 4 )
    trivExitPage('teori_innledning.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[287.5,532.5,207,97]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.6","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":289,"y":534,"width":207,"height":97},"btnState":"disabled","altValue":"TEORI","titleValue":"TEORI","fallbackImg":"<img src=\"images/desktop_shape12.png\" alt=\"BtnTeori\" title=\"BtnTeori\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text11.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 726px; min-height: 92px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 716px; min-height: 82px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:48pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Bærekraftig matforbruk​</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 141px; top: 87px; width: 726px; height: 92px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj11",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[141,87,726,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":141,"y":87,"width":726,"height":92},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape9.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 207 97\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(103.5 48.5)\" style=\"\">\n	<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_66_1513\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"204\" height=\"94\" xlink:href=\"images/Btn.forside.jpg\" preserveAspectRatio=\"none\" href=\"images/Btn.forside.jpg\"></image>\n</pattern>\n<path d=\"M 23.5 0 L 180.5 0 A 23.5 23.5 0 0 1 204 23.5 L 204 70.5 A 23.5 23.5 0 0 1 180.5 94 L 23.5 94 A 23.5 23.5 0 0 1 0 70.5 L 0 23.5 A 23.5 23.5 0 0 1 23.5 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_66_1513&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-102, -47) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(103.5 48.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-83.33\" y=\"7.56\" fill=\"#000000\">LÆRINGSMÅL</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 58.499999999999986px; top: 532.5px; width: 207px; height: 97px; z-index: 6; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj9",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnMal",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnMal] fired!', 4 )
    trivExitPage('mal_page_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32,0,[58.499999999999986,532.5,207,97]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.6","depth":8,"color":"#000000","blurradius":5,"shadowtype":2,"bHasShadow":true,"dir":315},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":534,"width":207,"height":97},"btnState":"disabled","altValue":"LÆRINGSMÅL","titleValue":"LÆRINGSMÅL","fallbackImg":"<img src=\"images/desktop_shape9.png\" alt=\"BtnMal\" title=\"BtnMal\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text10.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 387px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 377px; min-height: 30px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:18pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Mat og helse for ungdomsskolen​</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 310px; top: 33px; width: 387px; height: 40px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj10",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[310,33,387,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":310,"y":33,"width":387,"height":40},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":1,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	1
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Btn.forside.jpg","images/Bakgrunn%20hovedside%20lo%2C%201009x662.jpg","images/Bie.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/Bakgrunn%20hovedside%20lo%2C%201009x662.jpg"); background-size: auto; visibility: hidden; background-repeat: no-repeat;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Bakgrunn%20hovedside%20lo%2C%201009x662.jpg)",1009,662,1];
