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
textbutton36.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 73 61\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36.5 30.5)\" style=\"\">\n	<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_21_839_1663\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_21_839_1663&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36.5 30.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 910px; top: 27.00000000000002px; width: 73px; height: 61px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj36",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnHjem",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnHjem] fired!', 4 )
    trivExitPage('hovedside.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[910,27.00000000000002,73,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":910,"y":27,"width":73,"height":61},"imgDataNormal":"images/desktop_shape36.png","imgDataOver":"images/desktop_shape36.png","imgDataDown":"images/desktop_shape36.png","imgDataDisabled":"images/desktop_shape36_disabled.png","svgDataNormal":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_21_839_1663\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_21_839_1663&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_21_839_1665\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_21_839_1665&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_21_839_1667\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_21_839_1667&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_21_839_1669\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_21_839_1669&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnHjem","titleValue":"BtnHjem","fallbackImg":"<img alt=\"BtnHjem\" title=\"BtnHjem\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton28.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 123 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(61.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(61.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 857.5px; top: 598.5px; width: 123px; height: 43px; z-index: 5; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj28",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on Button 1] fired!', 4 )
    trivExitPage('teori_innledning.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[857.5,598.5,123,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":859,"y":600,"width":123,"height":43},"imgDataNormal":"images/desktop_shape2579.png","imgDataOver":"images/desktop_shape2579_over.png","imgDataDown":"images/desktop_shape2579_down.png","imgDataDisabled":"images/desktop_shape2579_disabled.png","svgDataNormal":"<g transform=\"translate(61.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(61.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(61.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(61.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(61.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(61.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(61.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 110 0 A 10 10 0 0 1 120 10 L 120 30 A 10 10 0 0 1 110 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-60, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(61.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Til teoridel","titleValue":"Til teoridel","fallbackImg":"<img alt=\"Button 1\" title=\"Button 1\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape25.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 791 431\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(395.5 215.5)\" style=\"\">\n	<path d=\"M 0 0 L 790 0 L 790 430 L 0 430 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-395, -215) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(395.5 215.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"7.56\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 44.49999999999994px; top: 149.50000000000009px; width: 791px; height: 431px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj25",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[44.49999999999994,149.50000000000009,791,431]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":45,"y":150,"width":791,"height":431},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape25.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text24.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 546px; min-height: 66px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 536px; min-height: 56px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:36pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Mål for undervisningen​</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 50px; width: 546px; height: 66px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj24",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[40,50,546,66]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":40,"y":50,"width":546,"height":66},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text26.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 757px; min-height: 252px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 747px; min-height: 242px;\"><p style=\"text-align: justify; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Læreplanen til mat og helse inneholder tre hovedområder:</span></p>\n\n<p style=\"text-align: justify; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">​</span></p>\n\n<ul style=\"padding-left: 17px; padding-inline-start: 17px;\">\n	<li style=\"text-align: justify; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Mat og livsstil</span></li>\n	<li style=\"text-align: justify; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Mat og forbruk</span></li>\n	<li style=\"text-align: justify; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Mat og kultur&nbsp;</span></li>\n</ul>\n\n<p style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Cambria, sans-serif;\">&nbsp;</span></p>\n\n<p style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">På denne nettsiden vil du lære fra&nbsp;hovedområdet \"Mat og forbruk\",&nbsp;der det er et kompetansemål som sier at:</span></p>\n\n<p style=\"margin-bottom: 0px; margin-top: 0px; line-height: 1.25; text-align: center;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Cambria, sans-serif;\">&nbsp;</span><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">eleven skal vurdere og velge varer ut fra etiske og bærekraftige kriterium.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 55px; top: 160px; width: 757px; height: 252px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj26",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[55,160,757,252]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":160,"width":757,"height":252},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text27.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 745px; min-height: 195px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 735px; min-height: 185px;\"><p style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><strong><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Læringsmål:</span></strong></p>\n\n<p style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; line-height: 1.25;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">​</span></p>\n\n<p style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; line-height: 1.5;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Eleven skal:</span></p>\n\n<ul style=\"padding-left: 17px; padding-inline-start: 17px;\">\n	<li style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.5;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">kunne forklare hva man legger i begrepet bærekraftig utvikling</span></li>\n	<li style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.5;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">kunne reflektere over hvorfor det er mer bærekraftig å spise vegetabilske matvarer enn animalske</span></li>\n	<li style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.5;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">kunne gi eksempler på hvordan man kan ha et bærekraftig matforbruk, og kunne forklare hvorfor</span></li>\n	<li style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.5;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">kunne gi eksempler på hvordan man kan kaste mindre mat</span></li>\n	<li style=\"text-align: start; margin-bottom: 0px; margin-top: 0px; font-size:12pt; line-height: 1.5;\"><span style=\"font-size:12pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">vite om de ulike merkeordningene på matvarer som kan si noe om produktet er bærekraftig</span></li>\n</ul></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 55px; top: 370px; width: 745px; height: 195px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj27",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 3"
	},
	objData:	{"a":[0,32,0,[55,370,745,195]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":370,"width":745,"height":195},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":1,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	3
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Bakgrunn%2C%201009x662.jpg","images/BtnHjem.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/Bakgrunn%2C%201009x662.jpg"); background-size: auto; visibility: hidden; background-repeat: no-repeat;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Bakgrunn%2C%201009x662.jpg)",1009,662,1];
