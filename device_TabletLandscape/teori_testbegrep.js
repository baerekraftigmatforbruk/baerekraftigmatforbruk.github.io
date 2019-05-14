if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton50.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2434_40_2379\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2379&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 715px; top: 600px; width: 60px; height: 45px; z-index: 19; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj50",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnPilV",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnPilV] fired!', 4 )
    trivExitPage('teori_begreper.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[715,600,60,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":715,"y":600,"width":60,"height":45},"imgDataNormal":"images/desktop_shape50.png","imgDataOver":"images/desktop_shape50.png","imgDataDown":"images/desktop_shape50.png","imgDataDisabled":"images/desktop_shape50_disabled.png","svgDataNormal":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2379\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2379&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2381\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2381&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2383\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2383&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2385\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilV.png\" preserveAspectRatio=\"none\" href=\"images/PilV.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2385&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnPilV","titleValue":"BtnPilV","fallbackImg":"<img alt=\"BtnPilV\" title=\"BtnPilV\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton48.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 60 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(30 22.5)\" style=\"\">\n	<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2434_40_2387\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2387&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 900px; top: 600px; width: 60px; height: 45px; z-index: 20; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj48",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnPilH",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnPilH] fired!', 4 )
    trivExitPage('teori_butvikling.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[900,600,60,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":900,"y":600,"width":60,"height":45},"imgDataNormal":"images/desktop_shape48.png","imgDataOver":"images/desktop_shape48.png","imgDataDown":"images/desktop_shape48.png","imgDataDisabled":"images/desktop_shape48_disabled.png","svgDataNormal":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2387\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2387&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2389\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2389&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2391\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2391&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(30 22.5)\" style=\"\">\n\t<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_40_2393\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"60\" height=\"45\" xlink:href=\"images/PilH.png\" preserveAspectRatio=\"none\" href=\"images/PilH.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 60 0 L 60 45 L 0 45 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_40_2393&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -22.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnPilH","titleValue":"BtnPilH","fallbackImg":"<img alt=\"BtnPilH\" title=\"BtnPilH\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton36.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 73 61\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(36.5 30.5)\" style=\"\">\n	<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2434_839_2371\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_839_2371&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(36.5 30.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 910px; top: 27.000000000000053px; width: 73px; height: 61px; z-index: 21; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,33120,0,[910,27.000000000000053,73,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":910,"y":27,"width":73,"height":61},"imgDataNormal":"images/desktop_shape36.png","imgDataOver":"images/desktop_shape36.png","imgDataDown":"images/desktop_shape36.png","imgDataDisabled":"images/desktop_shape36_disabled.png","svgDataNormal":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_839_2371\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_839_2371&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_839_2373\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_839_2373&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_839_2375\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_839_2375&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(36.5 30.5)\" style=\"\">\n\t<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2434_839_2377\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"73\" height=\"61\" xlink:href=\"images/BtnHjem.png\" preserveAspectRatio=\"none\" href=\"images/BtnHjem.png\"></image>\n</pattern>\n<path d=\"M 0 0 L 73 0 L 73 61 L 0 61 L 0 0\" style=\"stroke: rgb(39, 78, 19); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2434_839_2377&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-36.5, -30.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(36.5 30.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"BtnHjem","titleValue":"BtnHjem","fallbackImg":"<img alt=\"BtnHjem\" title=\"BtnHjem\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton384.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-39.13\" y=\"5.19\" fill=\"#333333\">Skjul meny</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 786.5px; top: 598.5px; width: 101px; height: 43px; z-index: 22; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj384",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnHideMeny",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnHideMeny] fired!', 4 )
    menu175.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnHideMeny] fired!', 4 )
    textbutton384.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnHideMeny] fired!', 4 )
    textbutton182.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[786.5,598.5,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":788,"y":600,"width":101,"height":43},"imgDataNormal":"images/desktop_shape384.png","imgDataOver":"images/desktop_shape384_over.png","imgDataDown":"images/desktop_shape384_down.png","imgDataDisabled":"images/desktop_shape384_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.19\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.19\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.19\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-39.13\" y=\"5.19\" fill=\"#333333\">Skjul meny</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Skjul meny","titleValue":"Skjul meny","fallbackImg":"<img alt=\"BtnHideMeny\" title=\"BtnHideMeny\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton182.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 101 43\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(50.5 21.5)\" style=\"\">\n	<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(50.5 21.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-32.9\" y=\"5.19\" fill=\"#333333\">Vis meny</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 786.5px; top: 598.5px; width: 101px; height: 43px; z-index: 23; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj182",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnShowMeny",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnShowMeny] fired!', 4 )
    menu175.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnShowMeny] fired!', 4 )
    textbutton182.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnShowMeny] fired!', 4 )
    textbutton384.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[786.5,598.5,101,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":788,"y":600,"width":101,"height":43},"imgDataNormal":"images/desktop_shape182.png","imgDataOver":"images/desktop_shape182_over.png","imgDataDown":"images/desktop_shape182_down.png","imgDataDisabled":"images/desktop_shape182_disabled.png","svgDataNormal":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.19\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.19\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.19\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(50.5 21.5)\" style=\"\">\n\t<path d=\"M 10 0 L 88 0 A 10 10 0 0 1 98 10 L 98 30 A 10 10 0 0 1 88 40 L 10 40 A 10 10 0 0 1 0 30 L 0 10 A 10 10 0 0 1 10 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-49, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(50.5 21.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.489795506122448\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-32.9\" y=\"5.19\" fill=\"#333333\">Vis meny</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Vis meny","titleValue":"Vis meny","fallbackImg":"<img alt=\"BtnShowMeny\" title=\"BtnShowMeny\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
menu175.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div style=\"position: absolute; left: 0px; top: 0px; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(255, 229, 153); width: 760px; height: 22px;\"><div id=\"item175_0\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 86px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Innledning</p></div><div id=\"item175_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_dyreriket.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 87px; top: 0px; height: 20px; width: 119px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Mat fra dyreriket</p></div><div id=\"item175_2\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_sjomat.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 207px; top: 0px; height: 20px; width: 135px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Bærekraftig sjømat</p></div><div id=\"item175_3\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_kortreist.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 343px; top: 0px; height: 20px; width: 99px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Kortreist mat</p></div><div id=\"item175_4\" style=\"position: absolute; cursor: pointer; left: 443px; top: 0px; height: 20px; width: 78px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Matsvinn</p></div><div id=\"item175_5\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_okologisk.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 522px; top: 0px; height: 20px; width: 108px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Økologisk mat</p></div><div id=\"item175_6\" style=\"position: absolute; cursor: pointer; left: 631px; top: 0px; height: 20px; width: 127px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 10px; text-align: left;\">Spise bærekraftig</p></div></div>",
	additionalHtml:	"<div id=\"tmenu175_0\" style=\"z-index: 9999; position: absolute; left: 40px; top: 41px; visibility: hidden; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(131, 153, 27); width: 206px; height: 85px;\"><div id=\"item175_0_0\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_innledning.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Innledning</p></div><div id=\"item175_0_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_begreper.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 21px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Viktige begreper</p></div><div id=\"item175_0_2\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    ObjLayerActionGoTo(\'#top\');\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 42px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Test deg selv om begreper</p></div><div id=\"item175_0_3\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_butvikling.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 63px; height: 20px; width: 204px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Hva er bærekraftig utvikling</p></div></div><div id=\"tmenu175_4\" style=\"z-index: 9999; position: absolute; left: 483px; top: 41px; visibility: hidden; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(131, 153, 27); width: 200px; height: 43px;\"><div id=\"item175_4_0\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_matsvinn.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 198px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Matsvinn</p></div><div id=\"item175_4_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_kastemat.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 21px; height: 20px; width: 198px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Hvordan kaste mindre mat</p></div></div><div id=\"tmenu175_6\" style=\"z-index: 9999; position: absolute; left: 671px; top: 41px; visibility: hidden; font-size: 10pt; font-family: Arial, sans-serif; color: rgb(51, 51, 51); background-color: rgb(131, 153, 27); width: 207px; height: 43px;\"><div id=\"item175_6_0\" style=\"position: absolute; cursor: pointer; left: 0px; top: 0px; height: 20px; width: 205px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Merkeordninger</p></div><div id=\"item175_6_1\" onclick=\"trivLogMsg( \'Action [ on Menu 1] fired!\', 4 )\n    trivExitPage(\'teori_hvordanspise.html\',true,false);\n    if(typeof pF == \'function\') pF();\" style=\"position: absolute; cursor: pointer; left: 0px; top: 21px; height: 20px; width: 205px; overflow: hidden; border: 1px solid rgb(39, 78, 19);\"><p style=\"margin: 3px 20px; text-align: center;\">Hvordan spise bærekraftig?</p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 40px; top: 21px; width: 760px; height: 22px; z-index: 24; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj175",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Menu 1"
	},
	objData:	{"a":[0,64,0,[40,21,760,22]],"rcdOvr":{"res":0},"desktopRect":{"x":40,"y":21,"width":760,"height":22},"bgHLColor":"#83991b","textHLColor":"#333333","textColor":"#333333","bgColor":"#ffe599","resBgImg":0,"subBgHLColor":"#ffe599","subTextHLColor":"#333333","subTextColor":"#333333","subBgColor":"#83991b","subResBgImg":0}
};
og2504.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2504",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2491.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 844 440\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(422 220)\" style=\"\">\n	<path d=\"M 0 0 L 843 0 L 843 439 L 0 439 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-421.5, -219.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(422 220)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"24.028469150177937\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"7.57\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 44.49999999999994px; top: 149.5000000000001px; width: 844px; height: 440px; z-index: 25; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2491",
	bInsAnc:	0,
	cwObj:		{
		"name":	"RectFeil",
		"arChld":
	[
		{type:6,on:5,delay:0,name:'OnShowHide',actItem:function(){ trivLogMsg( 'Action [OnShowHide on RectFeil] fired!', 4 )
    text2439.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[32,0,0,[44.49999999999994,149.5000000000001,844,440]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":45,"y":150,"width":823,"height":435},"btnState":"disabled","altValue":"RectFeil","titleValue":"RectFeil","fallbackImg":"<img src=\"images/desktop_shape2435.png\" alt=\"RectFeil\" title=\"RectFeil\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2492.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 699px; min-height: 183px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 689px; min-height: 173px;\"><p style=\"text-align: center;\"><strong><span style=\"font-size:48pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Her ble det noen feil!</span></strong></p>\n\n<p style=\"text-align: center;\"><span style=\"font-size:48pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">​</span><strong style=\"null\"><span style=\"color: rgb(39, 78, 19); font-family: Arial, sans-serif; font-size:48pt;\">Vil du prøve igjen?</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 117px; top: 222px; width: 699px; height: 183px; z-index: 26;",
	cssClasses:	"",
	htmlId:		"tobj2492",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TxtFeil"
	},
	objData:	{"a":[0,0,0,[117,222,699,183]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":117,"y":222,"width":678,"height":183},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
textbutton2499.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 180 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(90 28)\" style=\"\">\n	<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(90 28)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-72.04\" y=\"5.13\" fill=\"#333333\">Nei, gå til neste side</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 488.5px; top: 498.5px; width: 180px; height: 56px; z-index: 27; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2499",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnNei",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivLogMsg( 'Action [OnMClkGoTo on BtnNei] fired!', 4 )
    trivExitPage('teori_butvikling.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[488.5,498.5,180,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":490,"y":500,"width":180,"height":56},"imgDataNormal":"images/desktop_shape2499.png","imgDataOver":"images/desktop_shape2499_over.png","imgDataDown":"images/desktop_shape2499_down.png","imgDataDisabled":"images/desktop_shape2499_disabled.png","svgDataNormal":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-72.04\" y=\"5.13\" fill=\"#333333\">Nei, gå til neste side</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-72.04\" y=\"5.13\" fill=\"#333333\">Nei, gå til neste side</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-72.04\" y=\"5.13\" fill=\"#333333\">Nei, gå til neste side</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-72.04\" y=\"5.13\" fill=\"#333333\">Nei, gå til neste side</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Nei, gå til neste side","titleValue":"Nei, gå til neste side","fallbackImg":"<img alt=\"BtnNei\" title=\"BtnNei\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2497.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 180 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(90 28)\" style=\"\">\n	<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(90 28)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-48.02\" y=\"5.13\" fill=\"#333333\">Ja, prøv igjen</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 241.5px; top: 498.5px; width: 180px; height: 56px; z-index: 28; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2497",
	bInsAnc:	1,
	cwObj:		{
		"name":	"BtnJa",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ trivLogMsg( 'Action [OnMClkHide on BtnJa] fired!', 4 )
    og2504.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkResetQ',actItem:function(){ trivLogMsg( 'Action [OnMClkResetQ on BtnJa] fired!', 4 )
    qu2443.resetQuestion();

    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ trivLogMsg( 'Action [OnMClkShow on BtnJa] fired!', 4 )
    text2439.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32832,0,[241.5,498.5,180,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":243,"y":500,"width":180,"height":56},"imgDataNormal":"images/desktop_shape2497.png","imgDataOver":"images/desktop_shape2497_over.png","imgDataDown":"images/desktop_shape2497_down.png","imgDataDisabled":"images/desktop_shape2497_disabled.png","svgDataNormal":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-48.02\" y=\"5.13\" fill=\"#333333\">Ja, prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(167, 198, 17); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-48.02\" y=\"5.13\" fill=\"#333333\">Ja, prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(98, 112, 31); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-48.02\" y=\"5.13\" fill=\"#333333\">Ja, prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(90 28)\" style=\"\">\n\t<path d=\"M 13.25 0 L 163.75 0 A 13.25 13.25 0 0 1 177 13.25 L 177 39.75 A 13.25 13.25 0 0 1 163.75 53 L 13.25 53 A 13.25 13.25 0 0 1 0 39.75 L 0 13.25 A 13.25 13.25 0 0 1 13.25 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 3px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(131, 153, 27); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-88.5, -26.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(90 28)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.271186033898307\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-48.02\" y=\"5.13\" fill=\"#333333\">Ja, prøv igjen</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Ja, prøv igjen","titleValue":"Ja, prøv igjen","fallbackImg":"<img alt=\"BtnJa\" title=\"BtnJa\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og2484.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2484",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2477.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 843 438\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(421.5 219)\" style=\"\">\n	<path d=\"M 0 0 L 842 0 L 842 437 L 0 437 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-421, -218.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(421.5 219)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"24.02850296223278\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"7.57\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 45.49999999999994px; top: 150.5000000000001px; width: 843px; height: 438px; z-index: 29; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2477",
	bInsAnc:	0,
	cwObj:		{
		"name":	"RectRett",
		"arChld":
	[
		{type:6,on:5,delay:0,name:'OnShowHide',actItem:function(){ trivLogMsg( 'Action [OnShowHide on RectRett] fired!', 4 )
    text2439.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[32,0,0,[45.49999999999994,150.5000000000001,843,438]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":45,"y":150,"width":823,"height":435},"btnState":"disabled","altValue":"RectRett","titleValue":"RectRett","fallbackImg":"<img src=\"images/desktop_shape2435.png\" alt=\"RectRett\" title=\"RectRett\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2481.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 637px; min-height: 315px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 627px; min-height: 305px;\"><p style=\"text-align: center;\"><strong><span style=\"font-size:48pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Dette klarte du strålende!</span></strong></p>\n\n<p style=\"text-align: center;\"><span style=\"font-size:48pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">​</span></p>\n\n<p style=\"text-align: center;\"><strong><span style=\"font-size:48pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Alt rett.​</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 148px; top: 204px; width: 637px; height: 315px; z-index: 30;",
	cssClasses:	"",
	htmlId:		"tobj2481",
	bInsAnc:	0,
	cwObj:		{
		"name":	"TxtRett"
	},
	objData:	{"a":[0,0,0,[148,204,637,315]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":152,"y":203,"width":609,"height":301},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image2482.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2482Img\" src=\"images/Pokal.png\" alt=\"Pokal\" title=\"Pokal\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 110px; height: 182px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 703px; top: 366px; width: 110px; height: 182px; z-index: 31;",
	cssClasses:	"",
	htmlId:		"tobj2482",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Pokal"
	},
	objData:	{"a":[0,256,0,[703,366,110,182]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":702,"y":365,"width":110,"height":182}}
};
shape2435.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<svg viewBox=\"0 0 843 439\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(421.5 219.5)\" style=\"\">\n	<path d=\"M 0 0 L 842 0 L 842 438 L 0 438 L 0 0 Z\" style=\"stroke: rgb(39, 78, 19); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(244, 228, 150); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-421, -219) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(421.5 219.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"24.02850296223278\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"7.57\" fill=\"#000000\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 44.49999999999994px; top: 149.5000000000001px; width: 843px; height: 439px; z-index: 0; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2435",
	bInsAnc:	0,
	cwObj:		{
		"name":	"RectangleH"
	},
	objData:	{"a":[0,32,0,[44.49999999999994,149.5000000000001,843,439]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":45,"y":150,"width":823,"height":435},"btnState":"disabled","altValue":"RectangleH","titleValue":"RectangleH","fallbackImg":"<img src=\"images/desktop_shape2435.png\" alt=\"RectangleH\" title=\"RectangleH\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
qu2443.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"qu2443",
	bInsAnc:	undefined,
	cwObj:		{
				"crLineColor":	"#274e13",
				"questType":	6,
				"dwQuestFlags":	32770,
				"doImmFeedback":	32768,
				"maxAllowedAttempts":	0,
				"arrAns":	["\\u0031\\u004C\\u002D\\u0031\\u0052","\\u0032\\u004C\\u002D\\u0032\\u0052","\\u0033\\u004C\\u002D\\u0033\\u0052","\\u0034\\u004C\\u002D\\u0034\\u0052","\\u0035\\u004C\\u002D\\u0035\\u0052","\\u0036\\u004C\\u002D\\u0036\\u0052","\\u0037\\u004C\\u002D\\u0037\\u0052","\\u0038\\u004C\\u002D\\u0038\\u0052"],
				"correctFeedbackFunc":	"action2443_1",
				"incorrectFeedbackFunc":	"action2443_2",
				"attemptsFeedbackFunc":	0,
				"varQuest":	VarQuestion_2443
	},
	objData:	{"a":[0,32,0,[]]}
};
text2449.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 392px; min-height: 36px;\"><legend><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 392px; min-height: 36px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size:18pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Hvilket begrep hører til forklaringen?</span></p></div></legend></div>",
	cssText:	"visibility: inherit; position: absolute; left: 54px; top: 161px; width: 392px; height: 36px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj2449",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Question Text"
	},
	objData:	{"a":[0,32,0,[54,161,392,36]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":52,"y":178,"width":392,"height":36},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2450.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 151px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 151px; min-height: 28px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Fossilt brensel</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 241px; width: 151px; height: 28px; z-index: 2; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2450",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 1 text"
	},
	objData:	{"a":[0,32,0,[60,241,151,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":241,"width":151,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2451.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 370px; min-height: 50px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 370px; min-height: 50px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(39, 78, 19); font-size:12pt;\">Er en type pattedyr som er planteeter,&nbsp;og som har en mage som er delt inn i fire deler.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 502px; top: 526px; width: 370px; height: 50px; z-index: 3; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2451",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[502,526,370,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":531,"width":370,"height":50},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2452.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 107px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 107px; min-height: 28px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Klimagass</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 281px; width: 107px; height: 28px; z-index: 4; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2452",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 2 text"
	},
	objData:	{"a":[0,32,0,[60,281,107,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":281,"width":107,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2453.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 321px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 321px; min-height: 39px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">Er&nbsp;alle de ulike levende organismene&nbsp;som lever på jorda.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 501px; top: 379px; width: 321px; height: 39px; z-index: 5; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2453",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[501,379,321,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":385,"width":321,"height":39},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2454.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 185px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 185px; min-height: 29px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Global oppvarming</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 321px; width: 185px; height: 29px; z-index: 6; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2454",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 3 text"
	},
	objData:	{"a":[0,32,0,[60,321,185,29]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":321,"width":185,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2455.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 325px; min-height: 22px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 325px; min-height: 22px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">Er det som husdyr spiser eller drikker.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 502px; top: 489px; width: 325px; height: 22px; z-index: 7; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2455",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[502,489,325,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":492,"width":308,"height":27},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2456.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 202px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 202px; min-height: 30px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Animalske produkter</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 400px; width: 202px; height: 30px; z-index: 8; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2456",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 4 text"
	},
	objData:	{"a":[0,32,0,[60,400,202,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":400,"width":202,"height":30},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2457.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 378px; min-height: 40px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 40px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">Med dette snakker vi om den stadig økende temperaturen vi har på jorda.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 502px; top: 280px; width: 378px; height: 40px; z-index: 9; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2457",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[502,280,378,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":280,"width":378,"height":40},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2458.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 221px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 221px; min-height: 29px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Vegetabilske produkter</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 441px; width: 221px; height: 29px; z-index: 10; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2458",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 5 text"
	},
	objData:	{"a":[0,32,0,[60,441,221,29]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":441,"width":221,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2459.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 388px; min-height: 25px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 388px; min-height: 25px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(51, 51, 51); font-size:12pt;\">Er produkter som inneholder råvarer dra dyreriket.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 502px; top: 179px; width: 388px; height: 25px; z-index: 11; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2459",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[502,179,388,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":189,"width":388,"height":25},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2460.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 50px; min-height: 28px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 50px; min-height: 28px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Fôr</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 521px; width: 50px; height: 28px; z-index: 12; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2460",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 6 text"
	},
	objData:	{"a":[0,32,0,[60,521,50,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":521,"width":50,"height":28},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2461.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 378px; min-height: 31px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 378px; min-height: 31px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(39, 78, 19); font-size:12pt;\">Er produkter som inneholder råvarer fra planteriket.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 501px; top: 330px; width: 378px; height: 31px; z-index: 13; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2461",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[501,330,378,31]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":335,"width":378,"height":31},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2462.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 192px; min-height: 29px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 192px; min-height: 29px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Biologisk mangfold</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 361px; width: 192px; height: 29px; z-index: 14; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2462",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 7 text"
	},
	objData:	{"a":[0,32,0,[60,361,192,29]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":361,"width":192,"height":29},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2463.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 313px; min-height: 43px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 313px; min-height: 43px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(39, 78, 19); font-size:12pt;\">Utslipp av dette har ført til en høyere temperatur i luft og hav.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 501px; top: 429px; width: 313px; height: 43px; z-index: 15; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2463",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[501,429,313,43]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":435,"width":313,"height":49},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2464.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 125px; min-height: 30px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 125px; min-height: 30px;\"><p align=\"left\" style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-size:14pt; color: rgb(51, 51, 51); font-family: Arial, sans-serif;\">Drøvtyggere</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 60px; top: 479px; width: 125px; height: 30px; z-index: 16; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2464",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Choice 8 text"
	},
	objData:	{"a":[0,32,0,[60,479,125,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":60,"y":479,"width":125,"height":30},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2465.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 347px; min-height: 39px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 347px; min-height: 39px;\"><p style=\"line-height: 1.15; margin-top: 0px; margin-bottom: 0px;\"><strong><span style=\"font-family: Arial, sans-serif; color: rgb(39, 78, 19); font-size:12pt;\">Gir energi til blant annet biler, båter og fly. Dette bidrar til økt utslipp av karbondioksid.</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 501px; top: 229px; width: 347px; height: 39px; z-index: 17; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2465",
	bInsAnc:	0,
	fieldsetId:	'fset2443',
	cwObj:		{
		"name":	"Right choice text"
	},
	objData:	{"a":[0,32,0,[501,229,347,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":475,"y":228,"width":347,"height":39},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2439.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 677px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 667px; min-height: 69px;\"><p style=\"text-align:left\"><span><b><span style=\"font-size:36pt; color: rgb(39, 78, 19); font-family: Arial, sans-serif;\">Test deg selv om begreper</span></b></span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 40px; top: 70px; width: 677px; height: 79px; z-index: 18;",
	cssClasses:	"",
	htmlId:		"tobj2439",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[40,70,677,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":40,"y":70,"width":677,"height":79},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":1,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	30
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/Bakgrunn%2C%201009x662.jpg","images/BtnHjem.png","images/PilH.png","images/PilV.png","images/Pokal.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-image: url("images/Bakgrunn%2C%201009x662.jpg"); background-size: auto; visibility: hidden; background-repeat: no-repeat;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","url(images/Bakgrunn%2C%201009x662.jpg)",1009,662,1];
