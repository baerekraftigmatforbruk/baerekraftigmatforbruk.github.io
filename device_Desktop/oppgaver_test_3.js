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
textbutton48.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1160_40_211\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_40_211&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 899.9999999999999px; top: 600.0000000000001px; width: 60px; height: 45px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnPilH",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnPilH] fired!', 4 )
    trivExitPage('oppgaver_test_4.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[899.9999999999999,600.0000000000001,60,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":600,"width":60,"height":45},"imgDataNormal":"images/desktop_shape48.png","imgDataOver":"images/desktop_shape48.png","imgDataDown":"images/desktop_shape48.png","imgDataDisabled":"images/desktop_shape48_disabled.png","svgDataNormal":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_40_211\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_40_211&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_40_213\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_40_213&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_40_215\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_40_215&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_40_217\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_40_217&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnPilH","titleValue":"BtnPilH","fallbackImg":"<img alt=\"BtnPilH\" title=\"BtnPilH\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton36.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 73 61\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36.5 30.5)\" style=\"\">\n	<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1160_839_195\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_839_195&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36.5 30.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 909.9999999999999px; top: 27.000000000000234px; width: 73px; height: 61px; z-index: 24; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33120,0,[909.9999999999999,27.000000000000234,73,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":910,"y":27,"width":73,"height":61},"imgDataNormal":"images/desktop_shape36.png","imgDataOver":"images/desktop_shape36.png","imgDataDown":"images/desktop_shape36.png","imgDataDisabled":"images/desktop_shape36_disabled.png","svgDataNormal":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_839_195\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_839_195&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_839_197\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_839_197&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_839_199\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_839_199&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1160_839_201\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1160_839_201&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnHjem","titleValue":"BtnHjem","fallbackImg":"<img alt=\"BtnHjem\" title=\"BtnHjem\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1697.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 164 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(82 50)\" style=\"\">\n	<path d=\"M 18 0 L 91.08 0 L 127.18 -26 L 133.92 0 L 144 0 A 18 18 0 0 1 162 18 L 162 54 A 18 18 0 0 1 144 72 L 18 72 A 18 18 0 0 1 0 54 L 0 18 A 18 18 0 0 1 18 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81, -23) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(82 63)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-66.54\" y=\"5.88\" fill=\"#333333\">Her ble noe feil!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 233.99999999999994px; top: 535.0000000000001px; width: 164px; height: 100px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1697",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ13Wr"
	},
	objData:	{"a":[0,64,0,[233.99999999999994,535.0000000000001,164,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":235,"y":562,"width":164,"height":74},"btnState":"disabled","altValue":"Her ble noe feil!","titleValue":"Her ble noe feil!","fallbackImg":"<img src=\"images/desktop_shape1697.png\" alt=\"MsgQ13Wr\" title=\"MsgQ13Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1696.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 164 100\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(82 50)\" style=\"\">\n	<path d=\"M 18 0 L 91.08 0 L 127.18 -26 L 133.92 0 L 144 0 A 18 18 0 0 1 162 18 L 162 54 A 18 18 0 0 1 144 72 L 18 72 A 18 18 0 0 1 0 54 L 0 18 A 18 18 0 0 1 18 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-81, -23) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(82 63)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-45.42\" y=\"5.88\" fill=\"#333333\">Veldig bra!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 232.99999999999994px; top: 534.0000000000001px; width: 164px; height: 100px; z-index: 26; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1696",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ13Cor"
	},
	objData:	{"a":[0,64,0,[232.99999999999994,534.0000000000001,164,100]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":234,"y":561,"width":164,"height":74},"btnState":"disabled","altValue":"Veldig bra!","titleValue":"Veldig bra!","fallbackImg":"<img src=\"images/desktop_shape1696.png\" alt=\"MsgQ13Cor\" title=\"MsgQ13Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1688.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 153 103\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(76.5 51.63)\" style=\"\">\n	<path d=\"M 20 0 L 131 0 A 20 20 0 0 1 151 20 L 151 61 A 20 20 0 0 1 131 81 L 66.62 81 L 66.62 81 L 15.1 101.25 L 28.88 81 L 20 81 A 20 20 0 0 1 0 61 L 0 20 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75.5, -50.625) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(76.5 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-39.07\" y=\"-6.35\" fill=\"#333333\">Flott, helt</tspan>\n			<tspan x=\"-31.67\" y=\"18.11\" fill=\"#333333\">korrekt!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 674.9999999999999px; top: 316.0000000000001px; width: 153px; height: 103px; z-index: 27; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1688",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ12Cor"
	},
	objData:	{"a":[0,64,0,[674.9999999999999,316.0000000000001,153,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":676,"y":317,"width":153,"height":83},"btnState":"disabled","altValue":"Flott, helt korrekt!","titleValue":"Flott, helt korrekt!","fallbackImg":"<img src=\"images/desktop_shape1688.png\" alt=\"MsgQ12Cor\" title=\"MsgQ12Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1692.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 153 103\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(76.5 51.63)\" style=\"\">\n	<path d=\"M 20 0 L 131 0 A 20 20 0 0 1 151 20 L 151 61 A 20 20 0 0 1 131 81 L 66.62 81 L 66.62 81 L 15.1 101.25 L 28.88 81 L 20 81 A 20 20 0 0 1 0 61 L 0 20 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75.5, -50.625) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(76.5 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-57.56\" y=\"-6.35\" fill=\"#333333\">Dette ble ikke</tspan>\n			<tspan x=\"-34.32\" y=\"18.11\" fill=\"#333333\">helt rett!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 673.9999999999999px; top: 317.0000000000001px; width: 153px; height: 103px; z-index: 28; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1692",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ12Wr"
	},
	objData:	{"a":[0,64,0,[673.9999999999999,317.0000000000001,153,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":675,"y":318,"width":153,"height":83},"btnState":"disabled","altValue":"Dette ble ikke helt rett!","titleValue":"Dette ble ikke helt rett!","fallbackImg":"<img src=\"images/desktop_shape1692.png\" alt=\"MsgQ12Wr\" title=\"MsgQ12Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1684.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 181 120\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(90.5 59.75)\" style=\"\">\n	<path d=\"M 24 0 L 155 0 A 24 24 0 0 1 179 24 L 179 70 A 24 24 0 0 1 155 94 L 79.02 94 L 79.02 94 L 17.9 117.5 L 34.48 94 L 24 94 A 24 24 0 0 1 0 70 L 0 24 A 24 24 0 0 1 24 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-89.5, -58.75) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(90.5 48)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-40.66\" y=\"-6.35\" fill=\"#333333\">Nei, dette</tspan>\n			<tspan x=\"-59.12\" y=\"18.11\" fill=\"#333333\">stemmer ikke!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 619.9999999999999px; top: 147.0000000000001px; width: 181px; height: 120px; z-index: 29; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1684",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ11Wr"
	},
	objData:	{"a":[0,64,0,[619.9999999999999,147.0000000000001,181,120]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":621,"y":148,"width":181,"height":96},"btnState":"disabled","altValue":"Nei, dette stemmer ikke!","titleValue":"Nei, dette stemmer ikke!","fallbackImg":"<img src=\"images/desktop_shape1684.png\" alt=\"MsgQ11Wr\" title=\"MsgQ11Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1683.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 181 120\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(90.5 59.75)\" style=\"\">\n	<path d=\"M 24 0 L 155 0 A 24 24 0 0 1 179 24 L 179 70 A 24 24 0 0 1 155 94 L 79.02 94 L 79.02 94 L 17.9 117.5 L 34.48 94 L 24 94 A 24 24 0 0 1 0 70 L 0 24 A 24 24 0 0 1 24 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-89.5, -58.75) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(90.5 48)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-49.64\" y=\"-18.59\" fill=\"#333333\">Ja, dette blr</tspan>\n			<tspan x=\"-58.09\" y=\"5.88\" fill=\"#333333\">omtrent 42 kg</tspan>\n			<tspan x=\"-42.24\" y=\"30.35\" fill=\"#333333\">mat i året!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 616.9999999999999px; top: 146.0000000000001px; width: 181px; height: 120px; z-index: 30; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1683",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ11Cor"
	},
	objData:	{"a":[0,64,0,[616.9999999999999,146.0000000000001,181,120]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":618,"y":147,"width":181,"height":96},"btnState":"disabled","altValue":"Ja, dette blr omtrent 42 kg mat i året!","titleValue":"Ja, dette blr omtrent 42 kg mat i året!","fallbackImg":"<img src=\"images/desktop_shape1683.png\" alt=\"MsgQ11Cor\" title=\"MsgQ11Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1667.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 326 106\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(163 53.02)\" style=\"\">\n	<path d=\"M 22 0 L 44.4 0 L 21.76 -16.97 L 139.6 0 L 302 0 A 22 22 0 0 1 324 22 L 324 65 A 22 22 0 0 1 302 87 L 22 87 A 22 22 0 0 1 0 65 L 0 22 A 22 22 0 0 1 22 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-162, -35.015) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(163 61.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-139.91\" y=\"-18.59\" fill=\"#333333\">Dette ble feil. Grønnsaker som er</tspan>\n			<tspan x=\"-144.68\" y=\"5.88\" fill=\"#333333\">produsert i oppvarmede drivhus er</tspan>\n			<tspan x=\"-89.22\" y=\"30.35\" fill=\"#333333\">ikke mer bærekraftig.</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 537px; top: 431.0000000000002px; width: 326px; height: 106px; z-index: 31; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1667",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ10Wr"
	},
	objData:	{"a":[0,64,0,[537,431.0000000000002,326,106]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":538,"y":449,"width":326,"height":89},"btnState":"disabled","altValue":"Dette ble feil. Grønnsaker som er produsert i oppvarmede drivhus er ikke mer bærekraftig.","titleValue":"Dette ble feil. Grønnsaker som er produsert i oppvarmede drivhus er ikke mer bærekraftig.","fallbackImg":"<img src=\"images/desktop_shape1667.png\" alt=\"MsgQ10Wr\" title=\"MsgQ10Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1666.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 326 103\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(163 51.52)\" style=\"\">\n	<path d=\"M 22 0 L 44.4 0 L 23.76 -13.97 L 139.6 0 L 302 0 A 22 22 0 0 1 324 22 L 324 65 A 22 22 0 0 1 302 87 L 22 87 A 22 22 0 0 1 0 65 L 0 22 A 22 22 0 0 1 22 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-162, -36.515) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(163 58.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-120.36\" y=\"-18.59\" fill=\"#333333\">Helt rett. Grønnsaker som er</tspan>\n			<tspan x=\"-144.68\" y=\"5.88\" fill=\"#333333\">produsert i oppvarmede drivhus er</tspan>\n			<tspan x=\"-89.22\" y=\"30.35\" fill=\"#333333\">ikke mer bærekraftig.</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 536px; top: 434.0000000000002px; width: 326px; height: 103px; z-index: 32; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1666",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ10Cor"
	},
	objData:	{"a":[0,64,0,[536,434.0000000000002,326,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":537,"y":449,"width":326,"height":89},"btnState":"disabled","altValue":"Helt rett. Grønnsaker som er produsert i oppvarmede drivhus er ikke mer bærekraftig.","titleValue":"Helt rett. Grønnsaker som er produsert i oppvarmede drivhus er ikke mer bærekraftig.","fallbackImg":"<img src=\"images/desktop_shape1666.png\" alt=\"MsgQ10Cor\" title=\"MsgQ10Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1661.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 178 116\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(89 57.87)\" style=\"\">\n	<path d=\"M 23 0 L 153 0 A 23 23 0 0 1 176 23 L 176 68 A 23 23 0 0 1 153 91 L 77.6 91 L 77.6 91 L 17.6 113.75 L 33.4 91 L 23 91 A 23 23 0 0 1 0 68 L 0 23 A 23 23 0 0 1 23 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88, -56.875) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(89 46.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-53.87\" y=\"-18.59\" fill=\"#333333\">Ja, all denne</tspan>\n			<tspan x=\"-50.15\" y=\"5.88\" fill=\"#333333\">sjømaten er</tspan>\n			<tspan x=\"-50.69\" y=\"30.35\" fill=\"#333333\">bærekraftig.</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 260.99999999999994px; top: 175.0000000000001px; width: 178px; height: 116px; z-index: 33; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1661",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ9Cor"
	},
	objData:	{"a":[0,64,0,[260.99999999999994,175.0000000000001,178,116]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":262,"y":176,"width":178,"height":93},"btnState":"disabled","altValue":"Ja, all denne sjømaten er bærekraftig.","titleValue":"Ja, all denne sjømaten er bærekraftig.","fallbackImg":"<img src=\"images/desktop_shape1661.png\" alt=\"MsgQ9Cor\" title=\"MsgQ9Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1662.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 140 116\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(70 57.88)\" style=\"\">\n	<path d=\"M 23 0 L 115 0 A 23 23 0 0 1 138 23 L 138 68 A 23 23 0 0 1 115 91 L 61.64 91 L 61.64 91 L 13.8 113.75 L 30.36 91 L 23 91 A 23 23 0 0 1 0 68 L 0 23 A 23 23 0 0 1 23 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-69, -56.875) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(70 46.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-46.47\" y=\"-6.35\" fill=\"#333333\">Her ble det</tspan>\n			<tspan x=\"-33.27\" y=\"18.11\" fill=\"#333333\">noe feil!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 293.99999999999994px; top: 175.00000000000006px; width: 140px; height: 116px; z-index: 34; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1662",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ9Wr"
	},
	objData:	{"a":[0,64,0,[293.99999999999994,175.00000000000006,140,116]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":295,"y":176,"width":140,"height":93},"btnState":"disabled","altValue":"Her ble det noe feil!","titleValue":"Her ble det noe feil!","fallbackImg":"<img src=\"images/desktop_shape1662.png\" alt=\"MsgQ9Wr\" title=\"MsgQ9Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1647.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 182 82\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(90.95 41)\" style=\"\">\n	<path d=\"M 20 0 L 112 0 A 20 20 0 0 1 132 20 L 132 60 A 20 20 0 0 1 112 80 L 20 80 A 20 20 0 0 1 0 60 L 0 36 L -48.09 37.35 L 2.68 10 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-41.955, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(115 41)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-44.88\" y=\"-6.35\" fill=\"#333333\">Her har du</tspan>\n			<tspan x=\"-44.36\" y=\"18.11\" fill=\"#333333\">glemt noe!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 675.9999999999999px; top: 97.00000000000011px; width: 182px; height: 82px; z-index: 35; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1647",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ8Wr"
	},
	objData:	{"a":[0,64,0,[675.9999999999999,97.00000000000011,182,82]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":725,"y":98,"width":134,"height":82},"btnState":"disabled","altValue":"Her har du glemt noe!","titleValue":"Her har du glemt noe!","fallbackImg":"<img src=\"images/desktop_shape1647.png\" alt=\"MsgQ8Wr\" title=\"MsgQ8Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1646.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 180 82\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(89.95 41)\" style=\"\">\n	<path d=\"M 20 0 L 112 0 A 20 20 0 0 1 132 20 L 132 60 A 20 20 0 0 1 112 80 L 20 80 A 20 20 0 0 1 0 60 L 0 36 L -46.09 27.35 L 2.68 10 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-42.955, -40) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(113 41)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-38.54\" y=\"-6.35\" fill=\"#333333\">Dette var</tspan>\n			<tspan x=\"-49.1\" y=\"18.11\" fill=\"#333333\">bra. Alt rett!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 677.9999999999999px; top: 96.00000000000011px; width: 180px; height: 82px; z-index: 36; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1646",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ8Cor"
	},
	objData:	{"a":[0,64,0,[677.9999999999999,96.00000000000011,180,82]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":725,"y":97,"width":134,"height":82},"btnState":"disabled","altValue":"Dette var bra. Alt rett!","titleValue":"Dette var bra. Alt rett!","fallbackImg":"<img src=\"images/desktop_shape1646.png\" alt=\"MsgQ8Cor\" title=\"MsgQ8Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1627.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 203 83\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(101.55 41.5)\" style=\"\">\n	<path d=\"M 20 0 L 131 0 A 20 20 0 0 1 151 20 L 151 61 A 20 20 0 0 1 131 81 L 20 81 A 20 20 0 0 1 2.68 71 L -49.9 66.25 L 0 44.55 L 0 20 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-50.550000000000004, -40.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(126.5 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-39.07\" y=\"-6.35\" fill=\"#333333\">Flott, helt</tspan>\n			<tspan x=\"-31.67\" y=\"18.11\" fill=\"#333333\">korrekt!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 470.99999999999994px; top: 298.0000000000001px; width: 203px; height: 83px; z-index: 37; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1627",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ7Cor"
	},
	objData:	{"a":[0,64,0,[470.99999999999994,298.0000000000001,203,83]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":522,"y":299,"width":153,"height":83},"btnState":"disabled","altValue":"Flott, helt korrekt!","titleValue":"Flott, helt korrekt!","fallbackImg":"<img src=\"images/desktop_shape1627.png\" alt=\"MsgQ7Cor\" title=\"MsgQ7Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1626.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 234 140\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(117.05 70)\" style=\"\">\n	<path d=\"M 35 0 L 156 0 A 35 35 0 0 1 191 35 L 191 103 A 35 35 0 0 1 156 138 L 35 138 A 35 35 0 0 1 4.69 120.5 L -40.9 108.5 L 0 75.9 L 0 35 A 35 35 0 0 1 35 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75.05000000000001, -69) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(137.5 70)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-75.51\" y=\"-43.06\" fill=\"#333333\">Dette ble ikke helt</tspan>\n			<tspan x=\"-60.19\" y=\"-18.59\" fill=\"#333333\">rett. Den store</tspan>\n			<tspan x=\"-72.34\" y=\"5.88\" fill=\"#333333\">importen av soya</tspan>\n			<tspan x=\"-59.67\" y=\"30.35\" fill=\"#333333\">kan resultere i</tspan>\n			<tspan x=\"-39.08\" y=\"54.82\" fill=\"#333333\">flere ting!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 448px; top: 271.0000000000001px; width: 234px; height: 140px; z-index: 38; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1626",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ7Wr"
	},
	objData:	{"a":[0,64,0,[448,271.0000000000001,234,140]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":490,"y":272,"width":193,"height":140},"btnState":"disabled","altValue":"Dette ble ikke helt rett. Den store importen av soya kan resultere i flere ting!","titleValue":"Dette ble ikke helt rett. Den store importen av soya kan resultere i flere ting!","fallbackImg":"<img src=\"images/desktop_shape1626.png\" alt=\"MsgQ7Wr\" title=\"MsgQ7Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1622.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 209 75\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(104.5 37.74)\" style=\"\">\n	<path d=\"M 12 0 L 195 0 A 12 12 0 0 1 207 12 L 207 35 A 12 12 0 0 1 195 47 L 88.86 47 L 88.86 47 L 21.7 73.49 L 26.64 47 L 12 47 A 12 12 0 0 1 0 35 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-103.5, -36.745) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(104.5 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-75.51\" y=\"5.88\" fill=\"#333333\">Bra, dette ble rett!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 565.9999999999999px; top: 106.00000000000014px; width: 209px; height: 75px; z-index: 39; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1622",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ6Cor"
	},
	objData:	{"a":[0,64,0,[565.9999999999999,106.00000000000014,209,75]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":567,"y":107,"width":209,"height":49},"btnState":"disabled","altValue":"Bra, dette ble rett!","titleValue":"Bra, dette ble rett!","fallbackImg":"<img src=\"images/desktop_shape1622.png\" alt=\"MsgQ6Cor\" title=\"MsgQ6Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1618.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 209 75\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(104.5 37.74)\" style=\"\">\n	<path d=\"M 12 0 L 195 0 A 12 12 0 0 1 207 12 L 207 35 A 12 12 0 0 1 195 47 L 88.86 47 L 88.86 47 L 19.7 73.49 L 26.64 47 L 12 47 A 12 12 0 0 1 0 35 L 0 12 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-103.5, -36.745) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(104.5 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.45\" y=\"5.88\" fill=\"#333333\">Dette ble feil!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 565.9999999999999px; top: 107.00000000000014px; width: 209px; height: 75px; z-index: 40; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1618",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ6Wr"
	},
	objData:	{"a":[0,64,0,[565.9999999999999,107.00000000000014,209,75]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":567,"y":108,"width":209,"height":49},"btnState":"disabled","altValue":"Dette ble feil!","titleValue":"Dette ble feil!","fallbackImg":"<img src=\"images/desktop_shape1618.png\" alt=\"MsgQ6Wr\" title=\"MsgQ6Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1595.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 218 140\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(109 69.75)\" style=\"\">\n	<path d=\"M 28 0 L 188 0 A 28 28 0 0 1 216 28 L 216 82 A 28 28 0 0 1 188 110 L 95.2 110 L 95.2 110 L 21.6 137.5 L 40.8 110 L 28 110 A 28 28 0 0 1 0 82 L 0 28 A 28 28 0 0 1 28 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -68.75) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(109 56)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-63.36\" y=\"-30.82\" fill=\"#333333\">Nei, det er ikke</tspan>\n			<tspan x=\"-80.28\" y=\"-6.35\" fill=\"#333333\">denne gassen som</tspan>\n			<tspan x=\"-81.31\" y=\"18.11\" fill=\"#333333\">drøvtyggere slipper</tspan>\n			<tspan x=\"-10.56\" y=\"42.58\" fill=\"#333333\">ut!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 452.99999999999994px; top: 392.0000000000001px; width: 218px; height: 140px; z-index: 41; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1595",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ5Wr"
	},
	objData:	{"a":[0,64,0,[452.99999999999994,392.0000000000001,218,140]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":454,"y":393,"width":218,"height":112},"btnState":"disabled","altValue":"Nei, det er ikke denne gassen som drøvtyggere slipper ut!","titleValue":"Nei, det er ikke denne gassen som drøvtyggere slipper ut!","fallbackImg":"<img src=\"images/desktop_shape1595.png\" alt=\"MsgQ5Wr\" title=\"MsgQ5Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1596.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 218 140\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(109 69.75)\" style=\"\">\n	<path d=\"M 28 0 L 188 0 A 28 28 0 0 1 216 28 L 216 82 A 28 28 0 0 1 188 110 L 95.2 110 L 95.2 110 L 21.6 137.5 L 40.8 110 L 28 110 A 28 28 0 0 1 0 82 L 0 28 A 28 28 0 0 1 28 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-108, -68.75) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(109 56)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-66.01\" y=\"-18.59\" fill=\"#333333\">Ja, metan er 25</tspan>\n			<tspan x=\"-53.86\" y=\"5.88\" fill=\"#333333\">ganger verre</tspan>\n			<tspan x=\"-79.75\" y=\"30.35\" fill=\"#333333\">enn&nbsp;karbondioksid.</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 450.99999999999994px; top: 393.0000000000001px; width: 218px; height: 140px; z-index: 42; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1596",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ5Cor"
	},
	objData:	{"a":[0,64,0,[450.99999999999994,393.0000000000001,218,140]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":452,"y":394,"width":218,"height":112},"btnState":"disabled","altValue":"Ja, metan er 25 ganger verre enn karbondioksid.","titleValue":"Ja, metan er 25 ganger verre enn karbondioksid.","fallbackImg":"<img src=\"images/desktop_shape1596.png\" alt=\"MsgQ5Cor\" title=\"MsgQ5Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1581.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 194 144\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(97 71.88)\" style=\"\">\n	<path d=\"M 29 0 L 39.72 0 L 34.2 -27.25 L 85.28 0 L 163 0 A 29 29 0 0 1 192 29 L 192 86 A 29 29 0 0 1 163 115 L 29 115 A 29 29 0 0 1 0 86 L 0 29 A 29 29 0 0 1 29 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-96, -43.875) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(97 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-73.4\" y=\"-30.82\" fill=\"#333333\">Ja, skal alle ha et</tspan>\n			<tspan x=\"-54.9\" y=\"-6.35\" fill=\"#333333\">forbruk som i</tspan>\n			<tspan x=\"-76.56\" y=\"18.11\" fill=\"#333333\">Norge vil vi trenge</tspan>\n			<tspan x=\"-60.2\" y=\"42.58\" fill=\"#333333\">3,6 jordkloder!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 379.99999999999994px; top: 175.00000000000014px; width: 194px; height: 144px; z-index: 43; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1581",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ4Cor"
	},
	objData:	{"a":[0,64,0,[379.99999999999994,175.00000000000014,194,144]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":381,"y":203,"width":194,"height":117},"btnState":"disabled","altValue":"Ja, skal alle ha et forbruk som i Norge vil vi trenge 3,6 jordkloder!","titleValue":"Ja, skal alle ha et forbruk som i Norge vil vi trenge 3,6 jordkloder!","fallbackImg":"<img src=\"images/desktop_shape1581.png\" alt=\"MsgQ4Cor\" title=\"MsgQ4Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1600.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 194 144\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(97 71.88)\" style=\"\">\n	<path d=\"M 29 0 L 39.72 0 L 34.2 -27.25 L 85.28 0 L 163 0 A 29 29 0 0 1 192 29 L 192 86 A 29 29 0 0 1 163 115 L 29 115 A 29 29 0 0 1 0 86 L 0 29 A 29 29 0 0 1 29 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-96, -43.875) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(97 85.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-45.41\" y=\"-6.35\" fill=\"#333333\">Dette tallet</tspan>\n			<tspan x=\"-61.76\" y=\"18.11\" fill=\"#333333\">stemmer ikke!&nbsp;</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 379.99999999999994px; top: 175.00000000000014px; width: 194px; height: 144px; z-index: 44; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1600",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ4Wr"
	},
	objData:	{"a":[0,64,0,[379.99999999999994,175.00000000000014,194,144]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":381,"y":203,"width":194,"height":117},"btnState":"disabled","altValue":"Dette tallet stemmer ikke! ","titleValue":"Dette tallet stemmer ikke! ","fallbackImg":"<img src=\"images/desktop_shape1600.png\" alt=\"MsgQ4Wr\" title=\"MsgQ4Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1549.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 153 103\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(76.5 51.63)\" style=\"\">\n	<path d=\"M 20 0 L 131 0 A 20 20 0 0 1 151 20 L 151 61 A 20 20 0 0 1 131 81 L 66.62 81 L 66.62 81 L 15.1 101.25 L 28.88 81 L 20 81 A 20 20 0 0 1 0 61 L 0 20 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75.5, -50.625) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(76.5 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-39.07\" y=\"-6.35\" fill=\"#333333\">Flott, helt</tspan>\n			<tspan x=\"-31.67\" y=\"18.11\" fill=\"#333333\">korrekt!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 654.9999999999999px; top: 161.0000000000001px; width: 153px; height: 103px; z-index: 45; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1549",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ2Cor"
	},
	objData:	{"a":[0,64,0,[654.9999999999999,161.0000000000001,153,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":656,"y":162,"width":153,"height":83},"btnState":"disabled","altValue":"Flott, helt korrekt!","titleValue":"Flott, helt korrekt!","fallbackImg":"<img src=\"images/desktop_shape1549.png\" alt=\"MsgQ2Cor\" title=\"MsgQ2Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1548.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 153 103\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(76.5 51.63)\" style=\"\">\n	<path d=\"M 20 0 L 131 0 A 20 20 0 0 1 151 20 L 151 61 A 20 20 0 0 1 131 81 L 66.62 81 L 66.62 81 L 15.1 101.25 L 28.88 81 L 20 81 A 20 20 0 0 1 0 61 L 0 20 A 20 20 0 0 1 20 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75.5, -50.625) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(76.5 41.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-57.56\" y=\"-6.35\" fill=\"#333333\">Dette ble ikke</tspan>\n			<tspan x=\"-34.32\" y=\"18.11\" fill=\"#333333\">helt rett!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 655.9999999999999px; top: 163.0000000000001px; width: 153px; height: 103px; z-index: 46; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1548",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ2Wr"
	},
	objData:	{"a":[0,64,0,[655.9999999999999,163.0000000000001,153,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":164,"width":153,"height":83},"btnState":"disabled","altValue":"Dette ble ikke helt rett!","titleValue":"Dette ble ikke helt rett!","fallbackImg":"<img src=\"images/desktop_shape1548.png\" alt=\"MsgQ2Wr\" title=\"MsgQ2Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1106.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 232 49\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(115.85 24.5)\" style=\"\">\n	<path d=\"M 12 0 L 195 0 A 12 12 0 0 1 207 12 L 207 35 A 12 12 0 0 1 195 47 L 12 47 A 12 12 0 0 1 0 35 L 0 21.15 L -23.3 14.49 L 1.61 6 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-91.85000000000001, -23.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(127.5 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-55.45\" y=\"5.88\" fill=\"#333333\">Dette ble feil!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 575px; top: 475.0000000000001px; width: 232px; height: 49px; z-index: 47; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1106",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ1Wr"
	},
	objData:	{"a":[0,64,0,[575,475.0000000000001,232,49]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":599,"y":476,"width":209,"height":49},"btnState":"disabled","altValue":"Dette ble feil!","titleValue":"Dette ble feil!","fallbackImg":"<img src=\"images/desktop_shape1106.png\" alt=\"MsgQ1Wr\" title=\"MsgQ1Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1105.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 236 49\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(117.85 24.5)\" style=\"\">\n	<path d=\"M 12 0 L 195 0 A 12 12 0 0 1 207 12 L 207 35 A 12 12 0 0 1 195 47 L 12 47 A 12 12 0 0 1 0 35 L 0 21.15 L -27.3 14.49 L 1.61 6 A 12 12 0 0 1 12 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-89.85000000000001, -23.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(131.5 24.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-75.51\" y=\"5.88\" fill=\"#333333\">Bra, dette ble rett!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 570px; top: 475.0000000000001px; width: 236px; height: 49px; z-index: 48; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1105",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ1Cor"
	},
	objData:	{"a":[0,64,0,[570,475.0000000000001,236,49]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":598,"y":476,"width":209,"height":49},"btnState":"disabled","altValue":"Bra, dette ble rett!","titleValue":"Bra, dette ble rett!","fallbackImg":"<img src=\"images/desktop_shape1105.png\" alt=\"MsgQ1Cor\" title=\"MsgQ1Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1530.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 137 88\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(68.5 44.13)\" style=\"\">\n	<path d=\"M 17 0 L 118 0 A 17 17 0 0 1 135 17 L 135 52 A 17 17 0 0 1 118 69 L 59.42 69 L 59.42 69 L 13.5 86.25 L 25.08 69 L 17 69 A 17 17 0 0 1 0 52 L 0 17 A 17 17 0 0 1 17 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-67.5, -43.125) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(68.5 35.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-46.47\" y=\"-6.35\" fill=\"#333333\">Her ble det</tspan>\n			<tspan x=\"-38.56\" y=\"18.11\" fill=\"#333333\">noen feil!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 428.99999999999994px; top: 411.00000000000006px; width: 137px; height: 88px; z-index: 49; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1530",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ3Wr"
	},
	objData:	{"a":[0,64,0,[428.99999999999994,411.00000000000006,137,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":430,"y":412,"width":137,"height":71},"btnState":"disabled","altValue":"Her ble det noen feil!","titleValue":"Her ble det noen feil!","fallbackImg":"<img src=\"images/desktop_shape1530.png\" alt=\"MsgQ3Wr\" title=\"MsgQ3Wr\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1529.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 163 118\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(81.5 59.12)\" style=\"\">\n	<path d=\"M 23 0 L 138 0 A 23 23 0 0 1 161 23 L 161 70 A 23 23 0 0 1 138 93 L 71.3 93 L 71.3 93 L 16.1 116.25 L 32.2 93 L 23 93 A 23 23 0 0 1 0 70 L 0 23 A 23 23 0 0 1 23 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 2px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-80.5, -58.125) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(81.5 47.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-63.37\" y=\"-18.59\" fill=\"#333333\">Ja, korn er noe</tspan>\n			<tspan x=\"-64.96\" y=\"5.88\" fill=\"#333333\">av det beste du</tspan>\n			<tspan x=\"-42.77\" y=\"30.35\" fill=\"#333333\">kan spise!</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 416.99999999999994px; top: 397.0000000000001px; width: 163px; height: 118px; z-index: 50; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1529",
	bInsAnc:	0,
	cwObj:		{
		"name":	"MsgQ3Cor"
	},
	objData:	{"a":[0,64,0,[416.99999999999994,397.0000000000001,163,118]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":418,"y":398,"width":163,"height":95},"btnState":"disabled","altValue":"Ja, korn er noe av det beste du kan spise!","titleValue":"Ja, korn er noe av det beste du kan spise!","fallbackImg":"<img src=\"images/desktop_shape1529.png\" alt=\"MsgQ3Cor\" title=\"MsgQ3Cor\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og1055.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1055",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape1041.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 366 173\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(183 86.5)\" style=\"\">\n	<path d=\"M 0 0 L 363 0 L 363 170 L 0 170 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-181.5, -85) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(183 86.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"7.56\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 336.4999999999999px; top: 199.50000000000023px; width: 366px; height: 173px; z-index: 51; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1041",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,0,0,[336.4999999999999,199.50000000000023,366,173]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":338,"y":201,"width":366,"height":173},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape1041.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text1038.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 292px; min-height: 38px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 282px; min-height: 28px;\"><p style=\"text-align:left\"><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Er du sikker på at du vil avslutte?​</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 373px; top: 242px; width: 292px; height: 38px; z-index: 52;",
	cssClasses:	"",
	htmlId:		"tobj1038",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,0,0,[373,242,292,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":373,"y":242,"width":292,"height":38},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
textbutton1050.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 77 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(38.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(38.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-12\" y=\"5.04\" fill=\"#333333\">Nei</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 601.5px; top: 310.50000000000006px; width: 77px; height: 43px; z-index: 53; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1050",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnNo",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnNo] fired!', 4 )
    og1055.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[601.5,310.50000000000006,77,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":603,"y":312,"width":77,"height":43},"imgDataNormal":"images/desktop_shape1050.png","imgDataOver":"images/desktop_shape1050_over.png","imgDataDown":"images/desktop_shape1050_down.png","imgDataDisabled":"images/desktop_shape1050_disabled.png","svgDataNormal":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-12\" y=\"5.04\" fill=\"#333333\">Nei</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-12\" y=\"5.04\" fill=\"#333333\">Nei</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-12\" y=\"5.04\" fill=\"#333333\">Nei</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-12\" y=\"5.04\" fill=\"#333333\">Nei</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Nei","titleValue":"Nei","fallbackImg":"<img alt=\"BtnNo\" title=\"BtnNo\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1045.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 77 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(38.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(38.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.45\" y=\"5.04\" fill=\"#333333\">Ja</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 357.49999999999994px; top: 310.50000000000006px; width: 77px; height: 43px; z-index: 54; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1045",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnYes",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnYes] fired!', 4 )
    trivExitPage('hovedside.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[357.49999999999994,310.50000000000006,77,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":359,"y":312,"width":77,"height":43},"imgDataNormal":"images/desktop_shape1045.png","imgDataOver":"images/desktop_shape1045_over.png","imgDataDown":"images/desktop_shape1045_down.png","imgDataDisabled":"images/desktop_shape1045_disabled.png","svgDataNormal":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.45\" y=\"5.04\" fill=\"#333333\">Ja</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.45\" y=\"5.04\" fill=\"#333333\">Ja</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.45\" y=\"5.04\" fill=\"#333333\">Ja</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(38.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 64 0 A 10 10 0 0 1 74 10 L 74 30 A 10 10 0 0 1 64 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-37, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(38.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.45\" y=\"5.04\" fill=\"#333333\">Ja</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Ja","titleValue":"Ja","fallbackImg":"<img alt=\"BtnYes\" title=\"BtnYes\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1039.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 143 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(71.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 130 0 A 10 10 0 0 1 140 10 L 140 30 A 10 10 0 0 1 130 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-70, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(71.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-58.25\" y=\"5.04\" fill=\"#333333\">Start test på nytt</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 447.5px; top: 310.5000000000001px; width: 143px; height: 43px; z-index: 55; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1039",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnOmstart",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkResetTestSurv',actItem:function(){ trivLogMsg( 'Action [OnMClkResetTestSurv on BtnOmstart] fired!', 4 )
    ResetTest_test982(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnOmstart] fired!', 4 )
    og1055.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnOmstart] fired!', 4 )
    trivExitPage('oppgaver_test_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[447.5,310.5000000000001,143,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":449,"y":312,"width":143,"height":43},"imgDataNormal":"images/desktop_shape1039.png","imgDataOver":"images/desktop_shape1039_over.png","imgDataDown":"images/desktop_shape1039_down.png","imgDataDisabled":"images/desktop_shape1039_disabled.png","svgDataNormal":"<g transform=\"translate(71.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 130 0 A 10 10 0 0 1 140 10 L 140 30 A 10 10 0 0 1 130 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-70, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(71.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-58.25\" y=\"5.04\" fill=\"#333333\">Start test på nytt</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(71.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 130 0 A 10 10 0 0 1 140 10 L 140 30 A 10 10 0 0 1 130 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-70, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(71.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-58.25\" y=\"5.04\" fill=\"#333333\">Start test på nytt</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(71.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 130 0 A 10 10 0 0 1 140 10 L 140 30 A 10 10 0 0 1 130 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-70, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(71.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-58.25\" y=\"5.04\" fill=\"#333333\">Start test på nytt</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(71.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 130 0 A 10 10 0 0 1 140 10 L 140 30 A 10 10 0 0 1 130 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-70, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(71.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-58.25\" y=\"5.04\" fill=\"#333333\">Start test på nytt</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Start test på nytt","titleValue":"Start test på nytt","fallbackImg":"<img alt=\"BtnOmstart\" title=\"BtnOmstart\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1032.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-24.01\" y=\"5.04\" fill=\"#333333\">Avslutt</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 786.5px; top: 598.5px; width: 101px; height: 43px; z-index: 56; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1032",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnAvslutt",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnAvslutt] fired!', 4 )
    og1055.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[786.5,598.5,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":788,"y":600,"width":101,"height":43},"imgDataNormal":"images/desktop_shape1032.png","imgDataOver":"images/desktop_shape1032_over.png","imgDataDown":"images/desktop_shape1032_down.png","imgDataDisabled":"images/desktop_shape1032_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-24.01\" y=\"5.04\" fill=\"#333333\">Avslutt</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-24.01\" y=\"5.04\" fill=\"#333333\">Avslutt</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-24.01\" y=\"5.04\" fill=\"#333333\">Avslutt</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-24.01\" y=\"5.04\" fill=\"#333333\">Avslutt</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Avslutt","titleValue":"Avslutt","fallbackImg":"<img alt=\"BtnAvslutt\" title=\"BtnAvslutt\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text3232.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 104px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 94px; min-height: 20px;\"><p style=\"text-align:left\"><strong><span style=\"font-family: Arial, sans-serif; font-size:12pt; color: rgb(51, 51, 51);\">Side 3 av 8​</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 19px; top: 616px; width: 104px; height: 30px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj3232",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TxtSide"
	},
	objData:	{"a":[0,32,0,[19,616,104,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":19,"y":616,"width":104,"height":30},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
shape1161.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 838 477\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(419 238.5)\" style=\"\">\n	<path d=\"M 0 0 L 837 0 L 837 476 L 0 476 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-418.5, -238) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(419 238.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"23.9999994\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"7.56\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 44.49999999999994px; top: 77.50000000000011px; width: 838px; height: 477px; z-index: 1; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1161",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[44.49999999999994,77.50000000000011,838,477]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":45,"y":78,"width":838,"height":477},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape1120.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu1169.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu1169",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	557066,
				"doImmFeedback":	32768,
				"maxAllowedAttempts":	1,
				"arrAns":	["\\u0033\\u002C\\u0036\\u0020\\u006A\\u006F\\u0072\\u0064\\u006B\\u006C\\u006F\\u0064\\u0065\\u0072"],
				"correctFeedbackFunc":	"action1169_1",
				"incorrectFeedbackFunc":	"action1169_2",
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_4,
				"varAttempts":	VarTriQA_1169
	},
	objData:	{"a":[0,32,0,[]]}
};
text1175.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 456px; min-height: 59px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 456px; min-height: 59px;\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Hvor mange jordkloder ville vi trengt hvis hele verden hadde et like stort forbruk som Norge?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 123px; width: 456px; height: 59px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj1175",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[60,123,456,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":123,"width":456,"height":59},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1176.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 120px; min-height: 26px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 120px; min-height: 26px;\"><label for=\"rad1177\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">1,5 jordkloder</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 191px; width: 120px; height: 26px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj1176",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[89,191,120,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":191,"width":120,"height":26},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1177.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1177\" name=\"rad1169\" value=\"1,5 jordkloder\" onclick=\"VarQuestion_4.set(this.value);qu1169.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 191px; width: 19px; height: 19px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj1177",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[60,191,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":60,"y":191,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1178.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 120px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 120px; min-height: 25px;\"><label for=\"rad1179\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">2,8 jordkloder</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 221px; width: 120px; height: 25px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj1178",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[89,221,120,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":221,"width":120,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1179.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1179\" name=\"rad1169\" value=\"2,8 jordkloder\" onclick=\"VarQuestion_4.set(this.value);qu1169.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 221px; width: 19px; height: 19px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj1179",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[60,221,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":60,"y":221,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1180.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 120px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 120px; min-height: 25px;\"><label for=\"rad1181\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">3,6 jordkloder</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 251px; width: 120px; height: 25px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj1180",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[89,251,120,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":251,"width":120,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1181.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1181\" name=\"rad1169\" value=\"3,6 jordkloder\" onclick=\"VarQuestion_4.set(this.value);qu1169.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 251px; width: 19px; height: 19px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj1181",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[60,251,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":60,"y":251,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1182.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 120px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 120px; min-height: 25px;\"><label for=\"rad1183\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">4,5 jordkloder</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 89px; top: 281px; width: 120px; height: 25px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj1182",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[89,281,120,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":89,"y":281,"width":120,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1183.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1183\" name=\"rad1169\" value=\"4,5 jordkloder\" onclick=\"VarQuestion_4.set(this.value);qu1169.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 281px; width: 19px; height: 19px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj1183",
	bInsAnc:	0,
	fieldsetId:	'fset1169',
	cwObj:		{
		"name":	"Choice 4 button"
	},
	objData:	{"a":[0,32,0,[60,281,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":60,"y":281,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1165.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Oppgave 4</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 55px; top: 89px; width: 200px; height: 33px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj1165",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[55,89,200,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":55,"y":89,"width":200,"height":33},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
qu1205.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu1205",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"",
				"questType":	2,
				"dwQuestFlags":	557066,
				"doImmFeedback":	32768,
				"maxAllowedAttempts":	1,
				"arrAns":	["\\u004D\\u0065\\u0074\\u0061\\u006E"],
				"correctFeedbackFunc":	"action1205_1",
				"incorrectFeedbackFunc":	"action1205_2",
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion5,
				"varAttempts":	VarTriQA_1205
	},
	objData:	{"a":[0,32,0,[]]}
};
text1210.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 416px; min-height: 30px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 416px; min-height: 30px;\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Hvilken klimagass er det drøvtyggere slipper ut?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 354px; width: 416px; height: 30px; z-index: 12;",
	cssClasses:	"",
	htmlId:		"tobj1210",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[200,354,416,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":200,"y":354,"width":416,"height":30},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1211.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 127px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 127px; min-height: 25px;\"><label for=\"rad1212\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Karbondioksid</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 229px; top: 391px; width: 127px; height: 25px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj1211",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[229,391,127,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":229,"y":391,"width":127,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1212.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1212\" name=\"rad1205\" value=\"Karbondioksid\" onclick=\"VarQuestion5.set(this.value);qu1205.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 391px; width: 19px; height: 19px; z-index: 14;",
	cssClasses:	"",
	htmlId:		"tobj1212",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 1 button"
	},
	objData:	{"a":[0,32,0,[200,391,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":200,"y":391,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1213.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 84px; min-height: 24px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 84px; min-height: 24px;\"><label for=\"rad1214\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Lystgass</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 229px; top: 421px; width: 84px; height: 24px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj1213",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[229,421,84,24]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":229,"y":421,"width":84,"height":24},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1214.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1214\" name=\"rad1205\" value=\"Lystgass\" onclick=\"VarQuestion5.set(this.value);qu1205.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 421px; width: 19px; height: 19px; z-index: 16;",
	cssClasses:	"",
	htmlId:		"tobj1214",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 2 button"
	},
	objData:	{"a":[0,32,0,[200,421,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":200,"y":421,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1215.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 61px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 61px; min-height: 25px;\"><label for=\"rad1216\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Metan</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 229px; top: 451px; width: 61px; height: 25px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj1215",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[229,451,61,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":229,"y":451,"width":61,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1216.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1216\" name=\"rad1205\" value=\"Metan\" onclick=\"VarQuestion5.set(this.value);qu1205.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 451px; width: 19px; height: 19px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj1216",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 3 button"
	},
	objData:	{"a":[0,32,0,[200,451,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":200,"y":451,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1217.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 81px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 81px; min-height: 25px;\"><label for=\"rad1218\" style=\"cursor:\"><p align=\"left\" style=\"line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family:\'Arial\',sans-serif;color:#000000;font-size:12pt;\">Nitrogen</span></p></label></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 229px; top: 481px; width: 81px; height: 25px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj1217",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[229,481,81,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":229,"y":481,"width":81,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
radio1218.rcdData.att_Desktop = 
{
	innerHtml:	"<div style=\"white-space: nowrap; position: absolute; left: 0px; top: 0px; width: 19px; height: 19px;\"><input type=\"radio\" id=\"rad1218\" name=\"rad1205\" value=\"Nitrogen\" onclick=\"VarQuestion5.set(this.value);qu1205.questionUpdated();\" style=\"cursor: pointer; background-image: url(&quot;https://eu.lectoraonline.com/app/BN00425/images/trivantis-blank.gif&quot;);\"></div>",
	cssText:	"visibility: inherit; position: absolute; left: 200px; top: 481px; width: 19px; height: 19px; z-index: 20;",
	cssClasses:	"",
	htmlId:		"tobj1218",
	bInsAnc:	0,
	fieldsetId:	'fset1205',
	cwObj:		{
		"name":	"Choice 4 button"
	},
	objData:	{"a":[0,32,0,[200,481,19,19]],"rcdOvr":{"res":0},"desktopRect":{"x":200,"y":481,"width":19,"height":19},"formType":1,"dwFormFlags":0}
};
text1196.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 33px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 23px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:14pt; color: rgb(0, 0, 0); font-family: Arial, sans-serif;\">Oppgave 5</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 195px; top: 322px; width: 200px; height: 33px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj1196",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 2"
	},
	objData:	{"a":[0,32,0,[195,322,200,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":195,"y":322,"width":200,"height":33},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
anim2702.rcdData.att_Desktop = 
{
	innerHtml:	"<img src=\"images/Jordklode%2C%20snurre.gif\" alt=\"Jordklode, snurre\" title=\"Jordklode, snurre\" style=\"position: absolute; left: 0px; top: 0px; width: 267px; height: 159px; border-style: none;\">",
	cssText:	"visibility: inherit; position: absolute; left: 568px; top: 120px; width: 267px; height: 159px; z-index: 22;",
	cssClasses:	"",
	htmlId:		"tobj2702",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Jordklode, snurre"
	},
	objData:	{"a":[0,131104,0,[568,120,267,159]],"rcdOvr":{"res":0},"desktopRect":{"x":568,"y":120,"width":267,"height":159},"__pubName":0,"isFlash":false}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":1,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	23
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Bakgrunn%2C%201009x662.jpg","images/BtnHjem.png","images/PilH.png","images/Jordklode%2C%20snurre.gif"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/Bakgrunn%2C%201009x662.jpg"); background-size: auto; visibility: hidden; background-repeat: no-repeat;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Bakgrunn%2C%201009x662.jpg)",1009,662,1];
