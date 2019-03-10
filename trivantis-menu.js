/**************************************************
Trivantis (http://www.trivantis.com)
**************************************************/

// Menu Object
function ObjMenu(n,a,i,x,y,w,h,v,z,c,hc,bc,bhc,brdc,sepc,sepc2,hz,b3,p,dummy,align,fb,cl) {
  this.name = n
  this.altName = a
  this.x = x
  this.origX = x
  this.bgImg = i
  this.y = y
  this.w = w
  this.h = h
  this.oh = h;
  this.ow = w;
  this.v = v
  this.z = z
  this.txtColor = c
  this.hlColor = hc
  this.bgColor = bc
  this.bgHlColor = bhc
  this.brdClr=brdc
  this.sepClr=sepc
  this.sepClr2=sepc2
  this.bHorz=hz
  this.b3d=b3
  this.parentMenu=p
  this.obj = this.name+"Object"
  this.mnArray = new Array
  this.subMenuArray = new Array
  this.numMenus = 0
  this.hrefPrompt = 'javascript:void(null);'
  this.alreadyActioned = false;
  this.activeChild=0
  this.mouseIn=0
  this.txtAlign=align
  eval(this.obj+"=this")
  this.addClasses = cl;
  this.bBottom = fb?true:false;
  this.opacity = 100;
  this.bFixedPosition = false;
  this.bInherited = false;
  this.compInd = null;
  this.ipInd = null;
  this.nsInd = null;
}

function ObjMenuActionGoTo( destURL, destFrame ) {
  this.objLyr.actionGoTo( destURL, destFrame );
}

function ObjMenuActionGoToNewWindow( destURL, name, props ) {
  this.objLyr.actionGoToNewWindow( destURL, name, props );
}

function ObjMenuActionPlay( ) {
    this.objLyr.actionPlay();
}

function ObjMenuActionStop( ) {
    this.objLyr.actionStop();
}

function ObjMenuActionShow( ) {
  if( !this.isVisible() )
    this.onShow();
}

function ObjMenuActionHide( ) {
  if( this.isVisible() )
    this.onHide();
}

function ObjMenuActionLaunch( ) {
  this.objLyr.actionLaunch();
}

function ObjMenuActionExit( ) {
  this.objLyr.actionExit();
}

function ObjMenuActionChangeContents( value, align, fntId ) {
    this.objLyr.actionChangeContents( value, align, fntId );
}

function ObjMenuActionTogglePlay( ) {
    this.objLyr.actionTogglePlay();
}

function ObjMenuActionToggleShow( ) {
  if(this.objLyr.isVisible() && !this.objLyr.bInTrans) this.actionHide();
  else this.actionShow();
}

{ // Setup prototypes
var p=ObjMenu.prototype
p.build = ObjMenuBuild
p.init = ObjMenuInit
p.activate = ObjMenuActivate
p.up = ObjMenuUp
p.down = ObjMenuDown
p.over = ObjMenuOver
p.out = ObjMenuOut
p.capture = 0
p.onOver = new Function()
p.onOut = new Function()
p.onSelect = new Function()
p.onDown = new Function()
p.onUp = new Function()
p.actionGoTo = ObjMenuActionGoTo
p.actionGoToNewWindow = ObjMenuActionGoToNewWindow
p.actionPlay = ObjMenuActionPlay
p.actionStop = ObjMenuActionStop
p.actionShow = ObjMenuActionShow
p.actionHide = ObjMenuActionHide
p.actionLaunch = ObjMenuActionLaunch
p.actionExit = ObjMenuActionExit
p.actionChangeContents = ObjMenuActionChangeContents
p.actionTogglePlay = ObjMenuActionTogglePlay
p.actionToggleShow = ObjMenuActionToggleShow
p.writeLayer = ObjMenuWriteLayer
p.onShow = ObjMenuOnShow
p.onHide = ObjMenuOnHide
p.menuTimeout = ObjMenuTimeout
p.menuRemove = ObjMenuRemove
p.menuOver = ObjMenuOver
p.menuOut = ObjMenuOut
p.addMenu = ObjMenuAddMenu
p.isVisible = ObjMenuIsVisible
p.sizeTo = ObjMenuSizeTo
p.onMoved = ObjMenuOnMoved
p.onSelChg = new Function()
p.setIndicators = ObjMenuSetIndicators
p.updateIndicators = ObjMenuUpdateIndicators
p.loadProps = ObjLoadProps
p.respChanges = ObjRespChanges
p.refresh = ObjMenuRefresh
p.setupObjLayer = ObjMenuSetupObjLayer
p.getPreloadString = ObjMenuGetPreloadString
p.getCSS = ObjMenuGetCSS
p.rv = ObjMenuRV
}

function ObjMenuBuild() {
	
	this.loadProps();
	
	this.css = this.getCSS();

	this.bInherited = checkObjectInheritance(this);

	if(this.bInherited)
		return;

	var divStart
	var divEnd
	divStart = '<div id="'+this.name+'"'
	if( this.addClasses ) divStart += ' class="'+this.addClasses+'"'
	if( this.altName ) divStart += ' alt="'+this.altName+'"'
	else { if( this.altName != null ) divStart += ' alt=""' }
	divStart += '><a name="'+this.name+'anc">'
	divEnd   = '</a></div>'
	this.div = divStart + '\n'
	for (var i=0; i < this.numMenus; i++) this.div = this.div + this.mnArray[i]
	this.div = this.div + divEnd + '\n'

	this.div = CreateHTMLElementFromString(this.div);
}

function ObjMenuInit() {
  this.objLyr = new ObjLayer(this.name, null, null, this.div)
  if(!isSinglePagePlayerAvail() && !window.bTrivResponsive) adjustForFixedPositon(this);
}

function ObjMenuActivate() {
	if( this.objLyr && this.objLyr.styObj && !this.alreadyActioned ) {
		if( this.v ) 
			this.actionShow()
		else 
			this.actionHide()
	}
	if(!this.bInherited)
		this.setupObjLayer();
  
	this.objLyr.theObj = this;
}

function ObjMenuDown() {
  if( is.ie && event.button != 1 ) return
  this.onSelect()
  this.onDown()
}

function ObjMenuUp() {
  if (is.ie && event.button!=1) return
  this.onUp()
}

function ObjMenuOver() {
  this.onOver()
}

function ObjMenuOut() {
  this.onOut()
}

function ObjMenuWriteLayer( newContents ) {
  if (this.objLyr) this.objLyr.write( newContents )
}

function ObjMenuOnShow() {
  this.alreadyActioned = true;
  this.objLyr.actionShow();
  if (this.indSz && Number(this.indSz)!=NaN )
	this.updateIndicators();
}

function ObjMenuOnHide() {
  this.alreadyActioned = true;
  this.objLyr.actionHide();
  if( this.parentMenu && this.parentMenu.parentMenu ) this.parentMenu.menuTimeout();
}

function ObjMenuTimeout() {
  if( this.objLyr && this.objLyr.styObj.visibility.indexOf("inherit") != 0 ) return;
  var mouseIn = this.mouseIn;
  if( !mouseIn ) {
    var check = this.parentMenu;
    mouseIn = check.mouseIn;
    while( !mouseIn && check.parentMenu ) {
      check = check.parentMenu;
      mouseIn = check.mouseIn;
    }
  }
  if( !mouseIn && this.activeChild ) {
    var check = this.activeChild;
    mouseIn = check.mouseIn;
    while( !mouseIn && check.activeChild ) {
      check = check.activeChild;
      mouseIn = check.mouseIn;
    }
  }

  if( !mouseIn ) { 
    this.actionHide();
    if( this.parentMenu.activeChild == this ) this.parentMenu.activeChild=0;
    if( this.activeChild ) this.activeChild.menuTimeout();
  }
}

function ObjMenuRemove( item ) {
    this.mouseIn = 0;
    if( this.objLyr.styObj.visibility.indexOf("inherit") != 0 )  return;
    if( item ) { 
      item.style.color='#' + this.txtColor;
      if(this.bgImg||!this.bgColor) item.style.backgroundColor='transparent';
	  else item.style.backgroundColor='#' + this.bgColor;
      if(  getDisplayDocument().images[ item.id + 'arrow' ] )  getDisplayDocument().images[ item.id + 'arrow' ].src = 'images/triv_menar' + this.txtColor + '.gif';
    }
	this.actionHide();
	if( this.parentMenu.activeChild == this ) this.parentMenu.activeChild=0;
	if( this.activeChild ) this.activeChild.menuTimeout();
}

function ObjMenuOver( item, child ) {
    this.mouseIn = 1;
	if( item ) { 
	  if( !this.bgHlColor ) item.style.backgroundColor='transparent';
	  else item.style.backgroundColor='#' + this.bgHlColor; 
      getDisplayDocument().getElementById(item.id+"span").style.color='#' + this.hlColor;
	  if(  getDisplayDocument().images[ item.id + 'arrow' ] )  getDisplayDocument().images[ item.id + 'arrow' ].src = 'images/triv_menar' + this.hlColor + '.gif';
	}
	if( child ) {
	  if( this.activeChild ) {
	    if( this.activeChild == child ) return;
		this.activeChild.actionHide();	  
	  }  
	  this.activeChild=child
	  child.actionShow()
	} else if( this.activeChild ) { this.activeChild.actionHide(); this.activeChild=0; }
}

function ObjMenuOut( item, child ) {
    this.mouseIn = 0;
	if( item ) { 
      if(this.bgImg||!this.bgColor) item.style.backgroundColor='transparent';
      else item.style.backgroundColor='#' + this.bgColor;
       getDisplayDocument().getElementById(item.id+"span").style.color='#' + this.txtColor;
	  if(  getDisplayDocument().images[ item.id + 'arrow' ] )  getDisplayDocument().images[ item.id + 'arrow' ].src = 'images/triv_menar' + this.txtColor + '.gif';
	}
	if( child ) setTimeout( child.obj + '.menuTimeout()', 1000 )
	if( this.parentMenu ) setTimeout( this.obj + '.menuTimeout()', 1000 )
}

function ObjMenuSetIndicators(compInd,ipInd,nsInd,indSz) {
	this.compInd = compInd;
	this.ipInd = ipInd?ipInd:null;
	this.nsInd = nsInd?nsInd:null;
	this.indSz = (compInd&&indSz&&Number(indSz)!=NaN)?indSz:16;
}

function ObjMenuUpdateIndicators() {
  try {
    if( trivPageTracking && this.objLyr.ele.getElementsByTagName )
    {
      var imgElems = this.objLyr.ele.getElementsByTagName("IMG");
	  for ( var idx=0; imgElems && idx<imgElems.length; idx++ )
	  {
		if (imgElems[idx] && imgElems[idx].attributes['itemid'] )
		{
			var pageId = imgElems[idx].attributes['itemid'].value;
			var status = trivPageTracking.GetRangeStatus( pageId );
			if( status == 'notstarted' )
				imgElems[idx].src = this.nsInd;
			else if( status == 'inprogress' )
				imgElems[idx].src = this.ipInd;
			else 
				imgElems[idx].src = this.compInd;
		}
	  }	
    }
  } catch(err) {}
}

function ObjMenuAddMenu(nm,l,t,w,h,lb,tb,rb,bb,c,s,m,itemId) {
  var index = this.name.indexOf( '_' );
  var jsObj = this.name+"Object"
  var fontName = index >= 0?String(this.name.substr( 0, index )+"Font2"):String(this.name+"Font1");
  var divstr='<div id="' + nm + '" style="box-sizing:'; 
  divstr+=  (is.chrome?'content-box;':'border-box;');
  divstr+=  ' cursor:pointer; position:absolute; left:';
  var tableW = w;
  var tableH = h;
  var ptrMarg = m-4;
  if ( ptrMarg<0 )
    ptrMarg=0;
  if( is.ie && !is.ieMac && !is.op ){
    w += (lb + rb);
    h += (tb + bb);
  }
  divstr += l + 'px; top:' + t + 'px; width:' + w + 'px; height:' + h + 'px;';
  
  if( lb ) divstr += ' border-left:' + lb + 'px #' + (this.b3d ? this.sepClr2 : this.brdClr) + ' solid;'; 
  if( tb ) divstr += ' border-top:' + tb + 'px #' + (this.b3d ? this.sepClr2 : this.brdClr) + ' solid;'; 
  if( rb ) divstr += ' border-right:' + rb + 'px #' + (this.b3d ? this.sepClr : this.brdClr) + ' solid;'; 
  if( bb ) divstr += ' border-bottom:' + bb + 'px #' + (this.b3d ? this.sepClr : this.brdClr) + ' solid;'; 
  if( this.bgImg ) divstr += ' background-color: transparent;';
  else if( this.bgColor ) divstr += ' background-color: #' + this.bgColor + ';';
  divstr += '" onmouseover=' + jsObj + '.menuOver('
  if( s != '' ) divstr += 'this';
  if( c != '' ) divstr +=  ',' + c + 'Object';
  divstr += '); onmouseout=' + jsObj + '.menuOut(';
  if( s != '' ) divstr += 'this';
  if( c != '' ) divstr +=  ',' + c + 'Object';
  divstr += ');'
  var isInd = (this.indSz && Number(this.indSz)!=NaN );
  var strRemoveMenu = ''
  if( this.parentMenu ) strRemoveMenu = this.name + 'Object.menuRemove(this); '
  if( c == '' && s != '' ) divstr += ' onclick="' + strRemoveMenu + 'triv' + nm + 'Click();"';
  divstr += '>';
  if( s == '' ){
    divstr += '<div style="background:#' + this.sepClr + '; position:absolute; left:' + (this.bHorz ? w/2 - 1 : 3) + 'px; top:' + (this.bHorz ? 3 : h/2 - 1) + 'px; width:' + (this.bHorz ? 1 : w - 8) + 'px; height:' +  (this.bHorz ? h - 8 : 1) + 'px; clip:rect(0px ' + (this.bHorz ? 1 : w - 8) + 'px ' + (this.bHorz ? h - 8 : 1) + 'px 0px);"></div>';
    if( this.b3d ) divstr += '<div style="background:#' + this.sepClr2 + '; position:absolute; left:' + (this.bHorz ? w/2 : 3) + 'px; top:' + (this.bHorz ? 3 : h/2) + 'px; width:' + (this.bHorz ? 1 : w - 8) + 'px; height:' +  (this.bHorz ? h - 8 : 1) + 'px; clip:rect(0px ' + (this.bHorz ? 1 : w - 8) + 'px ' + (this.bHorz ? h - 8 : 1) + 'px 0px);"></div>';
  }
  else if( c != '' && !this.bHorz ) 
  {
    // add the table and row to all menu items
    divstr += '<table cellpadding=0 cellspacing=0 class="' + fontName + '" border=0 height=' + tableH + 'px width=' + tableW + '><tr align=' + this.txtAlign + '  valign=middle height=' + tableH + 'px>';
    
	// add left padding for vertical menus and first item on left of horizontal menu
	if ( this.txtAlign == 'left' )
		divstr += '<td width=' + parseInt(isInd?(m/2-1):m)+ 'px height=' + tableH + 'px >&nbsp;</td>';
	else
		divstr += '<td width=' + (isInd?m/2:m)+ 'px height=' + tableH + 'px >&nbsp;</td>';
		
	// if indicator menu, add left padding indicator
	if ( isInd )
	{
		// add right padding for vertical menus and last item on right of horizontal menu
		if ( this.txtAlign == 'left' )
			divstr += '<td width=' + parseInt(this.indSz+4) + 'px height=' + tableH + 'px align=left>';
		else
			divstr += '<td width=' + this.indSz + 'px height=' + tableH + 'px align=left>';
		
		divstr += '<div align="right" style="cursor:pointer; width:' + this.indSz + 'px;"><img itemId="' + itemId + '" id="' + nm + 'ind" name="' + nm + 'ind" src="' + this.compInd + '" height="' + this.indSz  + '" width="' + this.indSz  + '"></div>';
		
		divstr += '</td>';
	}
	
    // add the text contents
    divstr += '<td width=* height=' + tableH + 'px><span id="' + nm + 'span" class="' + fontName + '">' + s + '</span></td>';

    // add right padding for vertical menus and last item on right of horizontal menu
    divstr += '<td width=' + m + 'px height=' + tableH + 'px align=left>';

    divstr += '<div align="right" style="cursor:pointer; width:' + ptrMarg + 'px;"><img id="' + nm + 'arrow" name="' + nm + 'arrow" src="images/triv_menar' + this.txtColor + '.gif"></div>';
    
    divstr += '</td>';
    
    divstr += '</tr></table>';
      
  }
  else
  {
    // add the table and row to all menu items
    divstr += '<table cellpadding=0 cellspacing=0 class="' + fontName + '" border=0 height=' + tableH + 'px width=' + tableW + '><tr align=' + this.txtAlign + '  valign=middle height=' + tableH + 'px>';
    
    // add left padding for vertical menus and first item on left of horizontal menu
    if ( this.txtAlign == 'left' )
        divstr += '<td width=' + parseInt(isInd?(m/2-1):m)+ 'px height=' + tableH + 'px >&nbsp;</td>';
    else
	divstr += '<td width=' + (isInd?m/2:m)+ 'px height=' + tableH + 'px >&nbsp;</td>';
        
	// if indicator menu, add left padding indicator
	if ( isInd )
	{
		// add right padding for vertical menus and last item on right of horizontal menu
		if ( this.txtAlign == 'left' )
			divstr += '<td width=' + parseInt(this.indSz+4) + 'px height=' + tableH + 'px align=left>';
		else
			divstr += '<td width=' + this.indSz + 'px height=' + tableH + 'px align=left>';

		divstr += '<div align="right" style="cursor:pointer; width:' + this.indSz + 'px;"><img itemId="' + itemId + '" id="' + nm + 'ind" name="' + nm + 'ind" src="' + this.compInd + '" height="' + this.indSz  + '" width="' + this.indSz  + '"></div>';
		
		divstr += '</td>';
	}
		
    // add the text contents
    divstr += '<td width=* height=' + tableH + 'px><span id="' + nm + 'span" class="' + fontName + '">' + s + '</span></td>';

    // add right padding for vertical menus and last item on right of horizontal menu
    divstr += '<td width=' + m + 'px height=' + tableH + 'px>&nbsp;</td>';
    
    divstr += '</tr></table>';
  }
  
  divstr += '</div>\n';
  this.mnArray[this.numMenus++] = divstr;
  if( c != '' ) this.subMenuArray.push(c);
}

 
function ObjMenuIsVisible() {
  if( this.objLyr.isVisible() )
    return true;
  else
    return false;
}

function ObjMenuSizeTo( w, h ) {
  this.w = w
  this.h = h
  this.build()
  if(this.objLyr)
  {
	  this.activate()
	  this.objLyr.clipTo( 0, w, h, 0  )
  }
}

function ObjMenuOnMoved( ) {
  var adjX = this.objLyr.newX - this.x;
  var adjY = this.objLyr.newY - this.y;
  for ( var i=0; i<this.subMenuArray.length; i++ )
  {
	var subMenu = eval(this.subMenuArray[i]);
	if ( subMenu )
	{
		subMenu.objLyr.ele.style.left = subMenu.x+adjX+"px";
		subMenu.objLyr.ele.style.top = subMenu.y+adjY+"px";
		subMenu.objLyr.hasMoved = true; 
		subMenu.objLyr.newX = parseInt(subMenu.objLyr.ele.style.left); 
		subMenu.objLyr.newY = parseInt(subMenu.objLyr.ele.style.top); 
		subMenu.onMoved()		
	}
  }
}

function ObjLoadProps()
{
	if(is.jsonData != null)
	{
		var respValues = is.jsonData[is.clientProp.device];
		var newValues;
		newValues = respValues[is.clientProp.width];
		var obj = newValues[this.name];
		if(obj)
		{
			this.x = typeof(obj.x)!="undefined"?obj.x:this.x;
			this.origX = typeof(obj.x)!="undefined"?obj.x:this.x;
			this.y = typeof(obj.y)!="undefined"?obj.y:this.y;
			this.w = typeof(obj.w)!="undefined"?obj.w:this.w;
			this.h = typeof(obj.h)!="undefined"?obj.h:this.h;
			this.bBottom = (typeof(obj.bOffBottom)!="undefined"?obj.bOffBottom:this.bBottom);
		}
	}
}

function ObjRespChanges()
{
	if(this.objLyr)
	  this.sizeTo(this.w, this.h);
	else
	  this.build();
	
	//Adjust the CSS
	FindAndModifyObjCSSBulk(this);	
}

function ObjMenuRefresh(){
	if(this.bInherited)
	{
		//If it is an inherited object the DIV might not reflect the correct dom element
		if(!this.div.parentElement)
			this.div = getHTMLEleByID(this.name);
		
		this.setupObjLayer();
	}
}

function ObjMenuGetPreloadString()
{
	var strPreloads = "";

	if ( this.bgImg && this.bgImg.length )
		strPreloads = "'" + this.bgImg + "'";
	if ( this.compInd && this.compInd.length )
		strPreloads += ",'" + this.compInd + "'";
	if ( this.ipInd && this.ipInd.length )
		strPreloads += ",'" + this.ipInd + "'";
	if ( this.nsInd && this.nsInd.length )
		strPreloads += ",'" + this.nsInd + "'";
  
  //LD-6749 Cleanup if preload string if menu did not have background image   
  if(strPreloads.indexOf(',')==0)
    strPreloads = strPreloads.substring(1, strPreloads.length);

	return strPreloads;
}

function ObjMenuSetupObjLayer(){
	if( this.capture & 4 ) {
		this.objLyr.ele.onmousedown = new Function(this.obj+".down(); return false;")
		this.objLyr.ele.onmouseup = new Function(this.obj+".up(); return false;")
	}

	if( this.capture & 1 ) 
		this.objLyr.ele.onmouseover = new Function(this.obj+".over(); return false;")
	if( this.capture & 2 ) 
		this.objLyr.ele.onmouseout = new Function(this.obj+".out(); return false;")
}

function ObjMenuGetCSS(){
	var css = '';
	var other = 'align:center; text-align:' + this.txtAlign + '; vertical-align:center; color:#' + this.txtColor + ';';
	var tmpColor = '#' + this.bgColor;

	if( this.bgImg ) 
	{
		other += ' background-image:URL('+this.bgImg+');  repeat:yes;';
		if (tmpColor)
			other += 'background-color:'+tmpColor+';'
		tmpColor = null;
	}
	if ( is.ie && is.v=='7' )
		other += ' clipright:'+(this.w+2)+'px; clipbottom:'+(this.h+2)+'px;';
	if(!this.bgHlColor)
		tmpColor = null;

	css = buildCSS(this.name,this.bFixedPosition,this.x,this.y,this.w,this.h,this.v,this.z, tmpColor,other)
	
	return css;
}

function ObjMenuRV(){
	this.loadProps();
	if(!window.bTrivResponsive)
	{
		this.h = this.oh;
		this.w = this.ow;
	}
	this.css = this.getCSS();
	this.refresh();
	if(this.objLyr && this.objLyr.ele)
	{
		for(var index = 0; index < this.objLyr.ele.style.length;index++)
		{
			var styleName = this.objLyr.ele.style[index];
			this.objLyr.ele.style[styleName]="";
		}
		if(!this.v)
			this.objLyr.ele.style.visibility = 'hidden';
	}
}