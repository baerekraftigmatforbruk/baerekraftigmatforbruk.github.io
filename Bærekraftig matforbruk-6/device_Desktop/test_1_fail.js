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
	innerHtml:	"<svg viewBox=\"0 0 73 61\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36.5 30.5)\" style=\"\">\n	<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1009_839_26233\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1009_839_26233&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36.5 30.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 909.9999999999998px; top: 27.000000000000288px; width: 73px; height: 61px; z-index: 7; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj36",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnHjem",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('hovedside.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[909.9999999999998,27.000000000000288,73,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":910,"y":27,"width":73,"height":61},"imgDataNormal":"images/desktop_shape36.png","imgDataOver":"images/desktop_shape36.png","imgDataDown":"images/desktop_shape36.png","imgDataDisabled":"images/desktop_shape36_disabled.png","svgDataNormal":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1009_839_26233\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1009_839_26233&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1009_839_26235\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1009_839_26235&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1009_839_26237\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1009_839_26237&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1009_839_26239\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1009_839_26239&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnHjem","titleValue":"BtnHjem","fallbackImg":"<img alt=\"BtnHjem\" title=\"BtnHjem\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape1494.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 823 485\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(411.5 242.5)\" style=\"\">\n	<path d=\"M 0 0 L 822 0 L 822 484 L 0 484 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-411, -242) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(411.5 242.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"18.6666662\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#333333\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 44.49999999999994px; top: 78.50000000000011px; width: 823px; height: 485px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1494",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rectangle"
	},
	objData:	{"a":[0,32,0,[44.49999999999994,78.50000000000011,823,485]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":45,"y":79,"width":823,"height":485},"btnState":"disabled","altValue":"Rectangle","titleValue":"Rectangle","fallbackImg":"<img src=\"images/desktop_shape1471.png\" alt=\"Rectangle\" title=\"Rectangle\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image1528.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1528Img\" src=\"images/Ku%203.png\" alt=\"Ku 3\" title=\"Ku 3\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 256px; height: 197px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 561px; top: 352px; width: 256px; height: 197px; z-index: 1; transform: scaleX(-1);; behavior:url(-ms-transform.htc); -moz-transform: ScaleX(-1); -webkit-transform: ScaleX(-1); -o-transform: ScaleX(-1); -ms-transform: ScaleX(-1); filter: fliph; -ms-filter: fliph",
	cssClasses:	"",
	htmlId:		"tobj1528",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Ku 3"
	},
	objData:	{"a":[0,288,0,[561,352,256,197]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":561,"y":352,"width":256,"height":197}}
};
textbutton1523.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-36.01\" y=\"5.04\" fill=\"#333333\">Prøv igjen</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 777.5px; top: 593.5px; width: 101px; height: 43px; z-index: 8; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1523",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnIgjen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkResetVars',actItem:function(){ ResetVars(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkResetTestSurv',actItem:function(){ ResetTest_test982(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('oppgaver_page_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[777.5,593.5,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":779,"y":595,"width":101,"height":43},"imgDataNormal":"images/desktop_shape1489.png","imgDataOver":"images/desktop_shape1489_over.png","imgDataDown":"images/desktop_shape1489_down.png","imgDataDisabled":"images/desktop_shape1489_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.01\" y=\"5.04\" fill=\"#333333\">Prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.01\" y=\"5.04\" fill=\"#333333\">Prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.01\" y=\"5.04\" fill=\"#333333\">Prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-36.01\" y=\"5.04\" fill=\"#333333\">Prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Prøv igjen","titleValue":"Prøv igjen","fallbackImg":"<img alt=\"BtnIgjen\" title=\"BtnIgjen\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1518.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 888.5px; top: 593.5px; width: 101px; height: 43px; z-index: 9; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1518",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnTeori",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('teori_innledning.html',true,false);
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkResetVars',actItem:function(){ ResetVars(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkResetTestSurv',actItem:function(){ ResetTest_test982(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[888.5,593.5,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":890,"y":595,"width":101,"height":43},"imgDataNormal":"images/desktop_shape1484.png","imgDataOver":"images/desktop_shape1484_over.png","imgDataDown":"images/desktop_shape1484_down.png","imgDataDisabled":"images/desktop_shape1484_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-36.9\" y=\"5.04\" fill=\"#333333\">Til teoridel</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Til teoridel","titleValue":"Til teoridel","fallbackImg":"<img alt=\"BtnTeori\" title=\"BtnTeori\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text1514.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 644px; min-height: 141px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 634px; min-height: 131px;\"><p style=\"text-align: center;\"><span style=\"color: rgb(51, 51, 51); font-size:28pt; font-family: Arial, sans-serif;\">Det ble noen feil.&nbsp;</span></p>\n\n<p style=\"text-align: center;\"><span style=\"color: rgb(51, 51, 51); font-size:28pt; font-family: Arial, sans-serif;\">Prøv igjen eller gå tilbake til teoridelen</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 134px; top: 242px; width: 644px; height: 141px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj1514",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 5"
	},
	objData:	{"a":[0,32,0,[134,242,644,141]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":134,"y":242,"width":644,"height":141},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text1510.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 47px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 37px; min-height: 37px;\"><p style=\"text-align: right;\"><strong><span style=\"font-size:24pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">00</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 433px; top: 159px; width: 47px; height: 47px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj1510",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TxtResultat"
	},
	objData:	{"a":[0,32,0,[433,159,47,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":433,"y":159,"width":47,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text1506.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 46px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 36px; min-height: 25px;\"><p style=\"text-align:left\"><span><strong><span style=\"font-size:16pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">rett​</span></strong></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 505px; top: 165px; width: 46px; height: 35px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj1506",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 3"
	},
	objData:	{"a":[0,32,0,[505,165,46,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":505,"y":165,"width":46,"height":35},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text1502.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 82px; min-height: 35px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 72px; min-height: 25px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:16pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Du fikk</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 360px; top: 165px; width: 82px; height: 35px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj1502",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 4"
	},
	objData:	{"a":[0,32,0,[360,165,82,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":360,"y":165,"width":82,"height":35},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
text1498.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 38px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 28px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size:24pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">% </span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 472px; top: 159px; width: 38px; height: 47px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj1498",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 6"
	},
	objData:	{"a":[0,32,0,[472,159,38,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":472,"y":159,"width":38,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":1,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	28
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Bakgrunn%2C%201009x662.jpg","images/BtnHjem.png","images/Ku%203.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/Bakgrunn%2C%201009x662.jpg"); background-size: auto; visibility: hidden; background-repeat: no-repeat;'
rcdObj.backgrd_Desktop = ["#FFFFFF","url(images/Bakgrunn%2C%201009x662.jpg)",1009,662,1];
