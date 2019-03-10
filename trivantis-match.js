/**************************************************
Trivantis (http://www.trivantis.com)
**************************************************/

var _N_Line = 0;
var _nav4 = (document.layers) ? 1 : 0;
var lineColor = null

var createLineElement = function(x, y, length, angle) {
    var line = document.createElement("div");
    line.id = this.matchLine.ID; //x
    var styles =  'width: ' + length + 'px; '
        + 'z-index:' + getDisplayWindow().getComputedStyle(this.matchObj.div).zIndex + ";"
        + 'height: ' + this.matchLine.Size + 'px; '
        + '-moz-transform: rotate(' + angle + 'rad); '
        + '-webkit-transform: rotate(' + angle + 'rad); '
        + '-o-transform: rotate(' + angle + 'rad); '
        + '-ms-transform: rotate(' + angle + 'rad); '
        + 'position: absolute; '
        + 'top: ' + y + 'px; '
        + 'left: ' + x + 'px; '
        + 'background-color: #' + this.matchLine.Color +';';
    line.setAttribute('style', styles);
    return line;
};

var createLine = function(x1, y1, x2, y2, width) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return this.createLineElement(x, y, c, alpha);
};

function MatchLine(theX0, theY0, theX1, theY1, theZord, theColor, theSize) {
    this.ID = "Line" + _N_Line; _N_Line++;
    this.X0 = theX0;
    this.Y0 = theY0;
    this.X1 = theX1;
    this.Y1 = theY1;
    this.Color = theColor;
    if (!this.Color) this.Color = '0000ff';
    if (!lineColor) lineColor = '#'+this.Color
    this.Size = theSize;
    if (!this.Size) this.Size = 3;
    this.ResizeTo = _LineResizeTo;
	this.dis = false;

    var xx0, yy0, xx1, yy1, ll, rr, tt, bb, ww, hh, ccl, ccr, cct, ccb;
    var ss2 = Math.floor(this.Size / 2);
    if (theX0 <= theX1) { ll = theX0; rr = theX1; }
    else { ll = theX1; rr = theX0; }
    if (theY0 <= theY1) { tt = theY0; bb = theY1; }
    else { tt = theY1; bb = theY0; }
    ww = rr - ll; hh = bb - tt;
    if (_nav4)
        getDisplayWindow().document.writeln("<layer left=" + eval(ll - ss2) + "px top=" + eval(tt - ss2) + "px id='" + this.ID + "' z-Index=" + theZord + "></layer>");
    else{
		this.dv = getDisplayDocument().createElement('div');
		this.dv.id = this.ID;
		this.dv.style.position = 'absolute';
		this.dv.style.left = eval(ll - ss2) + 'px';
		this.dv.style.top = eval(tt - ss2) + 'px';
		this.dv.style.width = eval(ww + this.Size) + 'px';
		this.dv.style.height = eval(hh + this.Size) + 'px';
		this.dv.style.zIndex = theZord;
	}
    return (this);
}
function _LineResizeTo(theX0, theY0, theX1, theY1) {
    if( this.dis ) return;
    var xx0, yy0, xx1, yy1, ll, rr, tt, bb, ww, hh, ccl, ccr, cct, ccb, id = this.ID, lay = 0, divtext = "";
    var ss2 = Math.floor(this.Size / 2);
    if (theX0 != "") this.X0 = theX0;
    if (theY0 != "") this.Y0 = theY0;
    if (theX1 != "") this.X1 = theX1;
    if (theY1 != "") this.Y1 = theY1;
    if (this.X0 <= this.X1) { ll = this.X0; rr = this.X1; }
    else { ll = this.X1; rr = this.X0; }
    if (this.Y0 <= this.Y1) { tt = this.Y0; bb = this.Y1; }
    else { tt = this.Y1; bb = this.Y0; }
    ww = rr - ll; hh = bb - tt;
    if (_nav4) {
        with (getDisplayWindow().document.layers[id]) {
            top = tt - ss2 + 'px';
            left = ll - ss2 + 'px';
            getDisplayDocument().open();
            if ((ww == 0) || (hh == 0))
                getDisplayDocument().writeln("<layer left=2px top=2px><img src='images/o_" + this.Color + ".gif' width=" + eval(ww + this.Size) + "px height=" + eval(hh + this.Size) + "px border=0 align=top valign=left></layer>");
            else {
                if (ww > hh) {
                    ccr = 0;
                    cct = 0;
                    while (ccr < ww) {
                        ccl = ccr;
                        while ((Math.round(ccr * hh / ww) == cct) && (ccr <= ww)) ccr++;
                        if (this.Y1 > this.Y0)
                            getDisplayDocument().writeln("<layer left=" + eval(ccl + 2) + "px top=" + eval(cct + 2) + "px'>");
                        else
                            getDisplayDocument().writeln("<layer left=" + eval(ww - ccr + 2) + "px top=" + eval(cct + 2) + "px'>");
                        getDisplayDocument().writeln("<img src='" + "images/o_" + this.Color + ".gif" + "' width=" + eval(ccr - ccl + this.Size) + "px height=" + this.Size + "px border=0 align=top valign=left></layer>");
                        cct++;
                    }
                }
                else {
                    ccb = 0;
                    ccl = 0;
                    while (ccb < hh) {
                        cct = ccb;
                        while ((Math.round(ccb * ww / hh) == ccl) && (ccb < hh)) ccb++;
                        if (this.Y1 > this.Y0)
                            getDisplayDocument().writeln("<layer left=" + eval(ccl + 2) + "px top=" + eval(cct + 2) + "px'>");
                        else
                            getDisplayDocument().writeln("<layer left=" + eval(ww - ccl + 2) + "px top=" + eval(cct + 2) + "px'>");
                        getDisplayDocument().writeln("<img src='" + "images/o_" + this.Color + ".gif" + "' width=" + this.Size + "px height=" + eval(ccb - cct + this.Size) + "px border=0 align=top valign=left></layer>");
                        ccl++;
                    }
                }
            }
            getDisplayDocument().close();
        }
    }
    else {
        if(this.dv){
			GetCurrentPageDiv().appendChild( this.dv );
			this.dv = null;
		}
        if (getDisplayDocument().all) selObj = eval("getDisplayDocument().all." + id);
        else selObj = getDisplayDocument().getElementById(id);
        with (selObj.style) {
            left = ll - ss2 + 'px';
            top = tt - ss2 + 'px';
            width = ww + this.Size;
            height = hh + this.Size;
        }
        if ((ww == 0) || (hh == 0))
            divtext += "<div style='position:absolute;left:0px;top:0px'><img src='images/o_" + this.Color + ".gif' width=" + eval(ww + this.Size) + "px height=" + eval(hh + this.Size) + "px></div>";
        else {
            if (ww > hh) {
                ccr = 0;
                cct = 0;
                while (ccr < ww) {
                    ccl = ccr;
                    while ((Math.round(ccr * hh / ww) == cct) && (ccr <= ww)) ccr++;
                    if (this.Y1 > this.Y0)
                        divtext += "<div style='position:absolute;left:" + ccl + "px;top:" + cct + "px'>";
                    else
                        divtext += "<div style='position:absolute;left:" + eval(ww - ccr) + "px;top:" + cct + "px'>";
                    divtext += "<img src='" + "images/o_" + this.Color + ".gif" + "' width=" + eval(ccr - ccl + this.Size) + "px height=" + this.Size + "px></div>";
                    cct++;
                }
            }
            else {
                ccb = 0;
                ccl = 0;
                while (ccb < hh) {
                    cct = ccb;
                    while ((Math.round(ccb * ww / hh) == ccl) && (ccb < hh)) ccb++;
                    if (this.Y1 > this.Y0)
                        divtext += "<div style='position:absolute;left:" + ccl + "px;top:" + cct + "px'>";
                    else
                        divtext += "<div style='position:absolute;left:" + eval(ww - ccl) + "px;top:" + cct + "px'>";
                    divtext += "<img src='" + "images/o_" + this.Color + ".gif" + "' width=" + this.Size + "px height=" + eval(ccb - cct + this.Size) + "px></div>";
                    ccl++;
                }
            }
        }
        selObj.innerHTML = divtext;
    }
}

var LML = null
var LMR = null

function ObjMatchUp() {
    if (this.dis) return;
    if (is.ie && event && event.button != 1) return
    if (this.leftSel) {
        if (LML == this) {
            if (LML.matchObj != null) {
                LML.matchObj.matchObj = null
                LML.matchObj = null
                LML.matchLine.ResizeTo(-10, -10, -10, -10)
                if (LML.updateVarFunc) LML.updateVarFunc()
            }
            LML = null
        }
        else {
            if (LML) LML.showBorder(false)
            LML = this
        }

        this.showBorder(LML)
    }
    else if (this.rightSel) {
        if (LMR == this) {
            if (LMR.matchObj != null) {
                var tmpLML = LMR.matchObj
                LMR.matchObj.matchObj = null
                LMR.matchObj = null

                if(is.ie8)
                    tmpLML.matchLine.ResizeTo(-10, -10, -10, -10)
                else {
                    if(tmpLML.matchLine.dv && tmpLML.matchLine.dv.parentNode)
                        tmpLML.matchLine.dv.parentNode.removeChild(tmpLML.matchLine.dv);
                }
                if (tmpLML.updateVarFunc) tmpLML.updateVarFunc()
            }
            LMR = null
        }
        else {
            if (LMR) LMR.showBorder(false)
            LMR = this
        }
        this.showBorder(LMR)
    }

    if (LML && LMR && LML.updateVarFunc == LMR.updateVarFunc) {
        if (LML.matchObj == null || (LML.matchObj != LMR && LMR.matchObj != LML)) {
            if (LML.matchObj != null)
                LML.matchObj.matchObj = null
            LML.matchObj = LMR
            if (LMR.matchObj != null) {
                LMR.matchObj.matchObj = null
                if(is.ie8)
                    LMR.matchObj.matchLine.ResizeTo(-10, -10, -10, -10)
                else {
                    if(LMR.matchObj.matchLine.dv && LMR.matchObj.matchLine.dv.parentNode)
                        LMR.matchObj.matchLine.dv.parentNode.removeChild(LMR.matchObj.matchLine.dv);
                }
            }
            LMR.matchObj = LML

            LML.drawLine()
            if (LML.updateVarFunc) LML.updateVarFunc()
        }
        else {
            if (LML.matchObj != null) {
                if (this.bBorder) setTimeout(this.obj + ".showBorder()", 1000)
                if (this.matchObj.bBorder) setTimeout(this.matchObj.obj + ".showBorder()", 1000)
            }
        }

        LML = null
        LMR = null
    }

    this.onSelect();
    this.onDown();
	this.onUp();
}

function ObjMatchDrawLine() {
    if (!this.matchLine) return;
    if( this.dis ) return;

    //LD-6224 This method does not work on IE8, so use the older method if it is IE8
    if(!is.ie8){
        if(this.matchLine.dv && this.matchLine.dv.parentNode)
            this.matchLine.dv.parentNode.removeChild(this.matchLine.dv);
        var fdX = (this.getAcualWidth?this.getAcualWidth():this.w);
        var fdY = this.h / 2
        var fromX = this.x + fdX + this.offX
        var fromY = this.y + fdY + this.offY
        var tdX = (this.matchObj.getAcualWidth?this.matchObj.getAcualWidth():this.matchObj.w) / 2
        var tdY = this.matchObj.h / 2
        var toX = this.matchObj.x + this.matchObj.offX
        var toY = this.matchObj.y + tdY + this.matchObj.offY

        this.matchLine.dv = this.createLine( toX, toY, fromX, fromY); //LO-5306
        GetCurrentPageDiv().appendChild(this.matchLine.dv);
    } else {
        var fdX = (this.getAcualWidth?this.getAcualWidth():this.w) / 2
        var fdY = this.h / 2
        var fromX = this.x + fdX + this.offX
        var fromY = this.y + fdY + this.offY
        var tdX = (this.matchObj.getAcualWidth?this.matchObj.getAcualWidth():this.matchObj.w) / 2
        var tdY = this.matchObj.h / 2
        var toX = this.matchObj.x + tdX + this.matchObj.offX
        var toY = this.matchObj.y + tdY + this.matchObj.offY

        if (fromX + fdX < toX - tdX) {
            fromX += fdX + 5
            toX -= tdX + 5
            fromY -= 6
            toY -= 6
            
            if( fdY < 20 )
            fromY -= fdY/2
            if( tdY < 20 )
            toY -= tdY/2
        }
        else if (fromX - fdX > toX + tdX) {
            fromX -= fdX + 5
            toX += tdX + 5
            fromY -= 6
            toY -= 6
            
            if( fdY < 20 )
            fromY -= fdY/2
            if( tdY < 20 )
            toY -= tdY/2
        }
        else if (fromY + fdY < toY - tdY) {
            fromY += fdY
            toY -= tdY + 5
        }
        else if (fromY - fdY > toY + tdY) {
            fromY -= fdY + 5
            toY += tdY + 5
        }

        if (fromX < toX)
            this.matchLine.ResizeTo(fromX, fromY, toX, toY)
        else
            this.matchLine.ResizeTo(toX, toY, fromX, fromY)
    }
    

    if (this.bBorder) setTimeout(this.obj + ".showBorder()", 1000)
    if (this.matchObj.bBorder) setTimeout(this.matchObj.obj + ".showBorder()", 1000)
}

function ObjMatchImageBorder(on) {
    if( this.dis ) return;
    if (on) {
        this.objLyr.moveBy(-2, -2)
        this.objLyr.styObj.borderWidth = 2
        this.objLyr.styObj.borderStyle = 'solid'
        this.objLyr.styObj.borderColor = lineColor
        this.objLyr.clipTo(0, this.objLyr.w + 4, this.objLyr.h + 4, 0)
    }
    else {
        this.objLyr.styObj.backgroundColor = ''
        this.objLyr.moveBy(2, 2)
		this.objLyr.styObj.left = null; //LD-1359
		this.objLyr.styObj.top = null; //LD-1359
        this.objLyr.styObj.borderStyle = is.ie ? '' : 'inherit'
        this.objLyr.clipTo(0, this.objLyr.w, this.objLyr.h, 0)
    }
    this.bBorder = on
}

function ObjMatchInlineBorder(on) {
    if( this.dis ) return;
    if (on) {
        this.objLyr.moveBy(-2, -2)
        this.objLyr.styObj.borderWidth = '2px'
        this.objLyr.styObj.borderStyle = 'solid'
        this.objLyr.styObj.borderColor = lineColor
    }
    else {
        this.objLyr.moveBy(2, 2)
		this.objLyr.styObj.left = null; //LD-1359
		this.objLyr.styObj.top = null; //LD-1359
        this.objLyr.styObj.borderStyle = is.ie ? '' : 'inherit'
    }
    this.bBorder = on
}

function ObjMatchSetup(bLeft, id, updVarFunc, zLow, Color, nSize) {
    this.hasOnUp = true;
	this.capture = 4
    this.updateVarFunc = updVarFunc
    if (bLeft) {
        this.leftSel = id
        this.matchLine = new MatchLine(-10, -10, -10, -10, zLow - 1, Color, nSize)
    }
    else this.rightSel = id
}

function ObjMatchOffset(left, top, bDevRotate) {
    var orgDis = this.dis;
    if ( bDevRotate )  this.dis = false;
    else if (this.dis) return;
    this.offX = 0;
    this.offY = 0;
    if (this.matchObj) {
        this.drawLine()
    }
    if ( orgDis != this.dis )
        this.dis = orgDis;
}

function ObjMatchReset() {
    if (this.dis) return;
    if (this.matchLine) {
        this.matchLine.ResizeTo(-10, -10, -10, -10);

        if (this.rightSel) {
            this.rightSel.leftSel = 0;
            this.rightSel = 0;
        }
    }

    if (this.matchObj) {
        this.matchObj.matchObj = null;
        this.matchObj = null;
    }

    if (this.bBorder) this.showBorder();
    if (this.matchObj) {
        if (this.matchObj.bBorder) this.matchObj.showBorder();
    }

    if (LML) LML = null;
    if (LMR) LMR = null;
}

{ // Extend prototypes
    var inl = ObjInline.prototype
    inl.leftSel = 0
    inl.rightSel = 0
    inl.offX = 0
    inl.offY = 0
    inl.up = ObjMatchUp
    inl.drawLine = ObjMatchDrawLine
    inl.matchLine = null
    inl.matchObj = null
    inl.updateVarFunc = null
    inl.showBorder = ObjMatchInlineBorder
    inl.setupMatch = ObjMatchSetup
    inl.offsetMatch = ObjMatchOffset
    inl.bBorder = false
    inl.reset = ObjMatchReset
    inl.createLineElement = createLineElement;
    inl.createLine = createLine;

    var img = ObjImage.prototype
    img.leftSel = 0
    img.rightSel = null
    img.offX = 0
    img.offY = 0
    img.up = ObjMatchUp
    img.drawLine = ObjMatchDrawLine
    img.matchLine = null
    img.matchObj = null
    img.updateVarFunc = null
    img.showBorder = ObjMatchImageBorder
    img.setupMatch = ObjMatchSetup
    img.offsetMatch = ObjMatchOffset
    img.bBorder = false
    img.reset = ObjMatchReset
    img.createLineElement = createLineElement;
    img.createLine = createLine;
}