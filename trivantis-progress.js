/**************************************************
Trivantis (http://www.trivantis.com)
**************************************************/

var ocmOrig = document.oncontextmenu
var ocmNone = new Function( "return false" )

// Progress Object
function ObjProgress(n,a,x,y,w,h,bsz,bh,v,z,brc,bri,bkc,bki,s,r,vert,rev,auto,uv,vv,d,fb,cl) {
  this.name = n
  this.altName = a
  this.x = x
  this.origX = x
  this.y = y
  this.w = w
  this.h = h
  this.oh = h;
  this.ow = w;
  this.bsz = bsz 
  this.bh = bh
  this.v = v
  this.z = z
  this.isGrp = false
  this.hasOnUp = false
  this.hasOnRUp = false
  this.barColor = brc
  this.barImage = bri
  this.bgColor = bkc
  this.bgImage = bki
  this.step = s
  this.range = r
  if ( uv )
	this.currPos = (parseInt(vv))
  else
	this.currPos = 0
  this.vert = vert
  this.reverse = rev
  this.bAutoStart = auto
  this.barObj = null
  this.obj = this.name+"Object"
  this.alreadyActioned = false;
  this.startTime = 0
  this.currTime = 0;
  this.pausedTime = 0;
  this.bPaused = false;
  if ( d!=null && d!="undefined" )
    this.divTag = d
  else  
    this.divTag = "div"
  eval(this.obj+"=this")
  this.addClasses = cl;
  this.bBottom = fb?true:false;
  this.bFixedPosition = false;
  this.bInherited = false;
}

function ObjProgressActionGoTo( destURL, destFrame ) {
  this.objLyr.actionGoTo( destURL, destFrame );
}

function ObjProgressActionGoToNewWindow( destURL, name, props ) {
  this.objLyr.actionGoToNewWindow( destURL, name, props );
}

function ObjProgressActionPlay( ) {
  this.objLyr.actionPlay();
}

function ObjProgressActionStop( ) {
  this.objLyr.actionStop();
}

function ObjProgressActionShow( ) {
  if( this.isGrp || !this.isVisible() )
    this.onShow();
}

function ObjProgressActionHide( ) {
  if( this.isGrp || this.isVisible() )
    this.onHide();
}

function ObjProgressActionLaunch( ) {
  this.objLyr.actionLaunch();
}

function ObjProgressActionExit( ) {
  this.objLyr.actionExit();
}

function ObjProgressActionChangeContents( newImage ) {
  this.objLyr.actionChangeContents( newImage );
}

function ObjProgressActionTogglePlay( ) {
  this.objLyr.actionTogglePlay();
}

function ObjProgressActionToggleShow( ) {
  if(this.objLyr.isVisible() && !this.objLyr.bInTrans) this.actionHide();
  else this.actionShow();
}

function ObjProgressActionLaunch( ) {
  this.objLyr.actionLaunch();
}

function ObjProgressActionExit( ) {
  this.objLyr.actionExit();
}

function ObjProgressSizeTo( w, h ) { 
    this.w = w
    this.h = h
    this.build()
    this.activate()
    if( this.objLyr )
    	this.objLyr.clipTo( 0, w, h, 0  )
}

{ // Setup prototypes
var p=ObjProgress.prototype
p.build = ObjProgressBuild
p.init = ObjProgressInit
p.activate = ObjProgressActivate
p.up = ObjProgressUp
p.down = ObjProgressDown
p.over = ObjProgressOver
p.out = ObjProgressOut
p.capture = 0
p.onOver = new Function()
p.onOut = new Function()
p.onSelect = new Function()
p.onDown = new Function()
p.onUp = new Function()
p.onRUp = new Function()
p.onDone = new Function()
p.actionStep = ObjProgressStep
p.actionStepBack = ObjProgressStepBack
p.actionSetPos = ObjProgressSetPos
p.actionGoTo = ObjProgressActionGoTo
p.actionGoToNewWindow = ObjProgressActionGoToNewWindow
p.actionPlay = ObjProgressActionPlay
p.actionPause = ObjProgressActionPause
p.actionStop = ObjProgressActionStop
p.actionShow = ObjProgressActionShow
p.actionHide = ObjProgressActionHide
p.actionLaunch = ObjProgressActionLaunch
p.actionExit = ObjProgressActionExit
p.actionChangeContents = ObjProgressActionChangeContents
p.actionTogglePlay = ObjProgressActionTogglePlay
p.actionToggleShow = ObjProgressActionToggleShow
p.writeLayer = ObjProgressWriteLayer
p.onShow = ObjProgressOnShow
p.onHide = ObjProgressOnHide
p.onTimer = ObjProgressOnTimer
p.isVisible = ObjProgressIsVisible
p.isPlaying = ObjProgressIsPlaying
p.onSelChg = new Function()
p.sizeTo  = ObjProgressSizeTo
p.moveTo  = ObjProgressMoveTo
p.loadProps = ObjLoadProps
p.respChanges = ObjRespChanges
p.adjustBar	= ObjAdjustBar
p.refresh = ObjProgressRefresh
p.setupObjLayer = ObjProgressSetupObjLayer
p.getPreloadString = ObjProgressGetPreloadString
p.getCSS = ObjProgressGetCSS
p.rv = ObjProgressRV
}

function ObjProgressBuild() {  
  this.loadProps();
  
  this.css = this.getCSS();
  
  this.bInherited = checkObjectInheritance(this);
  
  if(this.bInherited)
	  return;
  
  this.div = '<' + this.divTag + ' id="'+this.name + '"'
  if( this.hasOnUp || this.isChoice ) this.div += ' style="cursor:pointer;"'
  if( this.addClasses ) this.div += ' class="'+this.addClasses+'"'
  this.div += '>'
  
  this.divInt = '<a name="'+this.name+'anc"'
  this.divInt += '>'
    
  this.divInt += '<div id="'+this.name+'bar"'
  this.divInt += ' style="z-index:' +this.z +';visibility:inherit;position:relative;left:'+ this.bsz +'px;'

  if( this.hasOnUp || this.isChoice ) this.divInt += 'cursor:pointer;'
  
  if ( this.vert == 1 )
 {
     var barHeight = (((this.h-2)*this.currPos)/this.range)
     if (this.reverse)
        barHeight = (this.h-2)-barHeight;
     this.divInt += 'width:' + this.bh +'px;'
     this.divInt += 'top:'+(this.h-barHeight-this.bsz) +'px;'
     this.divInt += 'height:' + barHeight + 'px;'
     this.divInt += 'clip:rect(0px '+(this.w-2)+'px '+barHeight+'px 0px);'
  }
  else
  {
     this.divInt += 'top:'+ this.bsz + 'px;'
     var barWidth = (((this.w-2)*this.currPos)/this.range)
     if (this.reverse)
        barWidth = (this.w-2)-barWidth;
     this.divInt += 'width:' + barWidth + 'px;'
     this.divInt += 'height:' + this.h +'px;'
     this.divInt += 'clip:rect(0px '+(this.w-2)+'px '+ barWidth+'px 0px);'
  }
  if ( this.barImage == null )
  {
     this.divInt += 'background-color:' + this.barColor +';">&nbsp;</div>'
  }
  else
  {
     this.divInt += "background-image:URL('"+this.barImage+"');background-repeat:no-repeat;"
     this.divInt += '">&nbsp;</div>'
  }
  this.divInt += '</a>'
  this.div += '</' + this.divTag +'>\n'
  
  this.div = CreateHTMLElementFromString(this.div);
}

function ObjProgressInit() {
  this.objLyr = new ObjLayer(this.name, null, null, this.div);
  if(!isSinglePagePlayerAvail() && !window.bTrivResponsive) adjustForFixedPositon(this);
}

function ObjProgressActivate() {
	if( this.objLyr && this.objLyr.styObj && !this.alreadyActioned )
		if( this.v ) 
			this.actionShow()
  
	if(!this.bInherited)
	{
		if( is.ns5 ) 
			this.objLyr.ele.innerHTML = this.divInt
		else 
			this.objLyr.write( this.divInt );
	
		this.setupObjLayer();

		if (this.bAutoStart==1)
			this.actionPlay()
	}

	this.objLyr.theObj = this;
}

function ObjProgressDown(e) {
  if( is.ie ) e = event
  if( is.ie && !is.ieMac && e.button!=1 && e.button!=2 ) return
  if( is.ieMac && e.button != 0 ) return
  if( is.ns && e.button!=0 && e.button!=2 ) return
  this.onSelect()
  this.onDown()
}

function ObjProgressUp(e) {
  if( is.ie ) e = event
  if( is.ie && !is.ieMac && e.button!=1 && e.button!=2 ) return
  if( is.ieMac && e.button!=0 ) return
  if( is.ns && e.button!=0 && e.button!=2 ) return
  if( e.button==2 )
  {
    if( this.hasOnRUp )
    {
      document.oncontextmenu = ocmNone
      this.onRUp()
      setTimeout( "document.oncontextmenu = ocmOrig", 100)
    }
  }
  else
    this.onUp()
}

function ObjProgressActionPause(){
	this.bPaused = true;
	this.pausedTime = new Date().getTime();
}

function ObjProgressActionStop( ) {
    this.startTime = 0
	this.actionSetPos(0)
	this.bPaused = false;
}

function ObjProgressIsPlaying( ) {
    if ( this.startTime == 0 || this.bPaused)
        return false
    else
        return true
}

function ObjProgressActionPlay( ) {
	if ( this.startTime == 0 )
    {
        this.startTime = new Date().getTime()
        this.actionSetPos(0)
        setTimeout( this.name + ".onTimer()", this.step/4 )
		this.bPaused = false;
    }
	if(this.bPaused){
		this.startTime = this.startTime + (new Date().getTime() - this.pausedTime);
		this.bPaused = false;
	}
}

function ObjProgressOnTimer( ) {
    if ( this.startTime != 0 )
    {
		if(!this.bPaused)
			this.currTime = new Date().getTime()
			
        var elapsedSteps = (this.currTime - this.startTime)/(this.step)
        var elapsedTime = (elapsedSteps - (elapsedSteps%1))*this.step
        if ( elapsedTime)
        {
            if ( elapsedTime >= this.range )
            {
                this.actionSetPos(this.range)
                this.startTime = 0
                this.onDone()
            }
            else
            {
                this.actionSetPos(elapsedTime)
                setTimeout( this.name + ".onTimer()", this.step/4 )
            }
        }
        else
              setTimeout( this.name + ".onTimer()", this.step/4 )
    }
}

function ObjProgressActionTogglePlay( ) {
  if ( this.isPlaying() )
    this.actionPause()  
  else
    this.actionPlay()  
}

function ObjProgressStep() {
  this.actionSetPos(this.currPos + this.step)
}

function ObjProgressStepBack() {
  this.actionSetPos(this.currPos - this.step)
}

function ObjProgressSetPos( newPos ) {
  this.currPos = parseInt(newPos)
  if ( this.currPos > this.range ) 
	  this.currPos = this.range
  else if ( this.currPos < 0 )
	  this.currPos = 0
  if ( this.barObj != null )
  {
     this.adjustBar();
  }
}

//Moved bar adjustments to its own function so it can be used for responsive
function ObjAdjustBar()
{
	if ( this.vert == 1 )
    {
         var barHeight = (((this.h-2)*this.currPos)/this.range)
         if (this.reverse)
            barHeight = (this.h-2)-barHeight;
         this.barObj.style.clip = 'rect(0px '+(this.w-2)+'px '+barHeight+'px 0px)'
         this.barObj.style.top = this.h-barHeight-1+'px'
         this.barObj.style.height = barHeight+'px'
    }
    else
    {
         var barWidth = ((this.w-2)*this.currPos)/this.range
         if (this.reverse)
            barWidth = (this.w-2)-barWidth;
         this.barObj.style.clip = 'rect(0px '+(this.w-2)+'px '+ barWidth+'px 0px)'
         this.barObj.style.width = barWidth+'px'
    }
}

function ObjProgressOver() {
  this.onOver()
}

function ObjProgressOut() {
  this.onOut()
}

function ObjProgressWriteLayer( newContents ) {
  if (this.objLyr) this.objLyr.write( newContents )
}

function ObjProgressOnShow() {
  this.alreadyActioned = true;
  this.objLyr.actionShow();
}

function ObjProgressOnHide() {
  this.alreadyActioned = true;
  this.objLyr.actionHide();
}

function ObjProgressIsVisible() {
  return this.objLyr.isVisible()
}

function ObjProgressMoveTo(x,y) {
  
  // ** move the outter Div
  this.x = x
  this.y = y
  this.build()
  this.activate()
  if( this.objLyr )
  	this.objLyr.moveTo(x,y)
    
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
			this.x = obj.x?obj.x:this.x;
			this.origX = this.x;
			this.y = obj.y?obj.y:this.y;
			this.w = obj.w?obj.w:this.w;
			this.h = obj.h?obj.h:this.h;
			this.bBottom = (typeof(obj.bOffBottom)!="undefined"?obj.bOffBottom:this.bBottom);
			this.barImage = obj.barImage?obj.barImage:this.barImage;
			this.bgImage = obj.bgImage?obj.bgImage:this.bgImage;
			this.vert = obj.vert;
			//this.v = obj.v;
		}
	}
}

function ObjRespChanges()
{
	if(this.objLyr)
	{
		if(this.barObj)
		{
		  this.barObj.style.width = this.w+"px";
		  this.barObj.style.height = this.h+"px";
		  //Reset top and left and let the adjustbar correct it
		  this.barObj.style.left = this.bsz+"px";
		  this.barObj.style.top = this.bsz+"px";
		  if(this.barImage)
			this.barObj.style.backgroundImage = 'url('+this.barImage+')';
		  this.adjustBar();
		}
	}
	
	FindAndModifyObjCSSBulk(this,this.stylemods);
}

function ObjProgressRefresh(){
	if(this.bInherited)
	{
		//If it is an inherited object the DIV might not reflect the correct dom element
		if(!this.div.parentElement)
			this.div = getHTMLEleByID(this.name);
		
		this.setupObjLayer();
	}
}

function ObjProgressSetupObjLayer(){
	if( this.capture & 4 ) {
		this.objLyr.ele.onmousedown = new Function("event", this.obj+".down(event); return false;")
		this.objLyr.ele.onmouseup = new Function("event", this.obj+".up(event); return false;")
	}
	if( this.capture & 1 ) 
		this.objLyr.ele.onmouseover = new Function(this.obj+".over(); return false;")
	if( this.capture & 2 ) 
		this.objLyr.ele.onmouseout = new Function(this.obj+".out(); return false;")

	this.barObj = getChildNodeByID(this.objLyr.ele, this.name + "bar" );  
}

function ObjProgressGetPreloadString()
{
	var strPreloads = "";
	
	if ( this.barImage && this.barImage.length )
		strPreloads = "'" + this.barImage + "'";
	if ( this.bgImage && this.bgImage.length )
	{
		if (strPreloads.length ) strPreloads += ",";
		strPreloads += "'" + this.bgImage + "'";
	}
	return strPreloads;
}

function ObjProgressGetCSS(){
	var css = '';
	var otherCSS = '';
	
	if ( this.bgImage == null )
	{
		otherCSS += "border-style:solid;border-width:1px;border-color:#000000;clip:rect(0px " + this.w + "px " + this.h + "px 0px);"
		css = buildCSS(this.name,this.bFixedPosition,this.x,this.y,this.w-2,this.h-2,this.v,this.z,this.bgColor, otherCSS)
	}
	else
	{
		otherCSS += "background-image:URL('"+this.bgImage+"'); layer-background-image:URL('"+this.bgImage+"'); repeat:no;"
		css = buildCSS(this.name,this.bFixedPosition,this.x,this.y,this.w,this.h,this.v,this.z,null, otherCSS)
	}
	
	return css;
}

function ObjProgressRV(){
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
