/**************************************************
Trivantis (http://www.trivantis.com)
**************************************************/


//Polyfill for map IE8 support
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

var jTitleManager = getDisplayWindow().getTitleMgrHandle() ? getDisplayWindow().getTitleMgrHandle() : new JSTitleMgr();

var TINCAN = 2013;

function JSTitleMgr()
{
	this.arVars = new Array();
	this.arTests = new Array();
	this.bPerUpd = false;
	this.bIntActs = false;
	this.bCM = false;
	this.bIntTxt = false;
	this.bForceTF = true;
	this.bSCORM = false;
	this.bTinCan = false;
	this.bAICC = false;
	this.intCID = -1;
	this.intLID = -1;
	this.intSID = -1;
	this.intTIdx = -1;
	this.intQIdx = -1;
	this.cmVers = 0;
	this.scVers = 0;
	this.bAddTimeStamp = true;

	this.strAiccST = new String( "" );
	this.strAiccEM = new String( "" );
	this.strAiccSN = new String( "" );
	this.strAiccCR = new String( "" );
	this.strAiccCO = new String( "" );
	this.strCmBase = new String( "" );
	this.strRedir  = new String( "" );

	this.arFormNameVals = [];

	//Question types
	this.UNK = -1;
	this.TF = 1;
	this.MC = 2;
	this.SA = 3;
	this.ES = 4;
	this.FB = 5;
	this.MT = 6;
	this.DD = 7;
	this.IN = 8;
	this.HS = 9;
	this.OLK = 10;
	this.OR = 11;
	this.NE = 13;
	this.MR = 14;
	//var RS = 15;
	this.LK = 16;

	this.TRN = 0;
	this.TRE = 1;
	this.TRS = 2;

	this.EQU = 1;
	this.BT_INC = 2;
	this.BT_EXC = 3;
	this.GRT = 4;
	this.GTE = 5;
	this.LST = 6;
	this.LSTE = 7;
	this.NEQU = 8;
}

var TMPr=JSTitleMgr.prototype

TMPr.setCoursemillParms = function( li, us, co, bs )
{
  this.strAiccST = new String( li );
  this.strAiccSN = new String( us );
  this.strAiccCO = new String( co );
  this.strCmBase = new String( bs );

  if( this.bCM && this.cmVers >= 2 )
    this.persistCMVars( false, us );
}

TMPr.persistCMVars = function( put, vn ) 
{ 
  var bSuccess = true;

  if( this.bCM && (this.bPerUpd || !put))
  {
    var urlDest = null;
    var locIdx = this.findVariable( "AICC_Lesson_Location" );

    if( locIdx < 0 )
    {
      if( put || this.cmVers < 2 )
      return false;
    }

    if( this.cmVers >= 2 )
      urlDest = this.strCmBase + "/persistvars.jsp";
    else
    {
      if( vn == "AICC_Lesson_Location" )
        urlDest = this.strCmBase + "/bookmark.jsp?currpage=" + this.arVars[locIdx].vv;
    }

    if( urlDest != null )
    {
      var props = new TrivStr("");
      var i;
      var varB  = new TrivStr("");

      if( put )
      {
        if( this.cmVers >= 2 )
        {
          props.addparm( "put", "yes" );

          for( i = 0; i < this.arVars.length; i++ )
          {
            if( this.arVars[i].bP )
              varB.add( this.arVars[i].vn + '=' + this.arVars[i].vv + '\r\n' );
          }

          if( locIdx >= 0 )
            props.addparm( "loc", this.arVars[locIdx].vv, true );

          props.addparm( "vars", varB.str, true );
        }
      }
      else
        props.addparm( "get", "yes" );

      props.str = props.str.replace(/\+/g, '%2B');
      var httpReq = getHTTP( urlDest, this.cmVers >= 2 ? 'POST' : 'GET', props.str );
      
      if(httpReq.status == 200)
      {
        var strRet = httpReq.responseText;

        while( strRet.length > 2 && strRet.indexOf( '\r\n' ) == 0 )
        {
          var temp = strRet.substring( 2 );
          strRet = temp;
        }
 
        var strErr;
        if( strRet.length > 3 )
          strErr = strRet.substring( 0, 3 );
        else
          strErr = strRet;

        if( strErr == "200" )
        {
          var loc = strRet.indexOf( '\r\n' );
          strErr = strRet.substring( loc + 2 );
          if( !put )
          {
            for( ; loc != -1 && loc < strRet.length; loc = end )
            {
              loc += 2;
              var end = strRet.indexOf( '\r\n', loc );
              var equalsPos = strRet.indexOf( '=', loc );
              if( equalsPos >= 0 )
              {
                name    = strRet.substring( loc, equalsPos );
                value   = strRet.substring( equalsPos+1, end );
                this.setVariable( name, value, "365" );
              }
            }
          }
        }
        else if( strErr == "550" || (strErr == "500" && this.cmVers < 2))
        {
          bSuccess = false;
          trivAlert( 'CM_SUBVARSERR', 'CourseMill', trivstrCMTO );
          parent.document.location.href=readCookie('TrivantisBase', '/');
        }
      }
    }
    if( put && bSuccess )
      this.bPerUpd = false;
  }

  return bSuccess;
}

var hlf = CJ.AES.dct;
var utf8 = CJ.enc.Utf8;
TMPr.setUserInfo = function( us, em )
{
  this.strAiccSN = new String( us );
  this.strAiccEM = new String( em );
}

TMPr.findVariable = function( vn )
{
  var i;
  var vnl = vn.toLowerCase();
   
  for( i = 0; i < this.arVars.length; i++ )
  {
    var tsl = this.arVars[i].vn.toLowerCase();
    if( tsl == vnl ) return i;
  }
  return -1;
}

TMPr.getVariable = function( vn, dv, nd )
{
  var val = dv;
  var i = this.findVariable( vn );
  if( i >= 0 )
    return this.arVars[i].vv;
    
  return this.addVariable( vn, dv, nd );
}

TMPr.setVariable = function( vn, dv, nd )
{
  var i = this.findVariable( vn );
  
  if( this.intTIdx != -1 )
    this.arTests[this.intTIdx].SetInteraction( vn, this.intQIdx );
  
  if( i >= 0 )
  {
    if( this.arVars[i].bP && this.arVars[i].vv != dv )
      this.bPerUpd = true;

    this.arVars[i].vv = dv;
    if( vn == 'cmi.core.student_name' ) this.strAiccSN = new String( dv );

    if( this.bCM )
      this.persistCMVars( true, vn );

    return;
  }

  this.addVariable( vn, dv, nd );
}

TMPr.addVariable = function( vn, dv, nd ) 
{
  if( dv == null )
      dv = "";

  var nVar = new TrivVar();
  nVar.vn = vn;
  nVar.vv = dv;
  if( nd )
  {
    nVar.bP = true;
    this.bPerUpd = true;
  }
  this.arVars.push(nVar);

  if( vn == 'cmi.core.student_name' ) this.strAiccSN = new String( dv );

  if( this.bCM )
    this.persistCMVars( true, vn );

  return dv;
}

function decryptString(strEncrypted)
{
	var strUCEncr = strEncrypted;
	strUCEncr = strUCEncr.replace(/Z/g,"\\u");
	strUCEncr = strUCEncr.replace(/z/g,"\\u0");
	strUCEncr = strUCEncr.replace(/y/g,"\\u00");
	strUCEncr = strUCEncr.replace(/x/g,"\\u000");
	strUCEncr = strUCEncr.replace(/w/g,"\\u001");
	strUCEncr = strUCEncr.replace(/v/g,"\\u002");
	strUCEncr = strUCEncr.replace(/t/g,"\\u003");
	strUCEncr = strUCEncr.replace(/s/g,"\\u004");
	strUCEncr = strUCEncr.replace(/r/g,"\\u005");
	strUCEncr = strUCEncr.replace(/q/g,"\\u006");
	strUCEncr = strUCEncr.replace(/p/g,"\\u007");
	strUCEncr = strUCEncr.replace(/o/g,"\\u008");
	strUCEncr = strUCEncr.replace(/n/g,"\\u009");
	strUCEncr = strUCEncr.replace(/m/g,"\\u00A");
	strUCEncr = strUCEncr.replace(/l/g,"\\u00B");
	strUCEncr = strUCEncr.replace(/k/g,"\\u00C");
	strUCEncr = strUCEncr.replace(/j/g,"\\u00D");
	strUCEncr = strUCEncr.replace(/i/g,"\\u00E");
	strUCEncr = strUCEncr.replace(/h/g,"\\u00F");

	var strClear = "";	
	
	var arUCEncr = strUCEncr.split("\\u");
	for ( idx=0; idx<arUCEncr.length; idx++ )
	{
		var curUChar = arUCEncr[idx];
		if ( curUChar && curUChar.length>0 ) 
		{
			if ( curUChar.length==4 && Number(curUChar) != NaN )
			{
				var curUVal = Number('0x'+curUChar);
				var newChar =  String.fromCharCode(curUVal);
				strClear += newChar;
			}
			else
				strClear += curUChar;
		}
	}

	
	return strClear;
	
}


TMPr.b64DecodeUnicode = function(str)  {
	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	return Base64.decode(str);
}

//LD-5993
TMPr.bDc = function(str) {
  var rur  = hlf(str, (function(){var c=Array.prototype.slice.call(arguments),O=c.shift();return c.reverse().map(function(s,a){return String.fromCharCode(s-O-0-a)}).join('')})(63,153,157,159,190,119)+(920).toString(36).toLowerCase().split('').map(function(b){return String.fromCharCode(b.charCodeAt()+(-71))}).join('')+(16).toString(36).toLowerCase()+(14).toString(36).toLowerCase().split('').map(function(A){return String.fromCharCode(A.charCodeAt()+(-13))}).join('')+(5).toString(36).toLowerCase()+(function(){var J=Array.prototype.slice.call(arguments),e=J.shift();return J.reverse().map(function(B,n){return String.fromCharCode(B-e-61-n)}).join('')})(28,161,154)+(14).toString(36).toLowerCase()+(22).toString(36).toLowerCase().split('').map(function(w){return String.fromCharCode(w.charCodeAt()+(-39))}).join('')+(14).toString(36).toLowerCase()+(function(){var I=Array.prototype.slice.call(arguments),y=I.shift();return I.reverse().map(function(J,c){return String.fromCharCode(J-y-0-c)}).join('')})(44,127,125,77)+(25).toString(36).toLowerCase()+(function(){var Q=Array.prototype.slice.call(arguments),Y=Q.shift();return Q.reverse().map(function(i,v){return String.fromCharCode(i-Y-7-v)}).join('')})(0,126));
  var ret = rur.toString(utf8);
  return ret;
}

TMPr.loadTest = function( fn, tn, pn )
{
  var tIdx = this.getTIdx( tn, 1 );
  
  if( tIdx < 0 )
    return false;

  if( !this.arTests[tIdx].bLoaded )
  {
    var xfn = fn + '.txt';
    var httpReq = getHTTP( xfn, 'GET', null );
    if( httpReq.status != 200 && httpReq.status != 0 ) 
    {
      trivAlert( 'LOADTESTERR', tn, 'You must run this content from a web-based server ' + httpReq.statusText );
      return;
    }
	
    var nl = null;
	var responseXML = null;
	if ( httpReq.responseText && httpReq.responseText.indexOf("<?xml") >= 0 ) 
		responseXML = httpReq.responseText;
	else
		responseXML = this.bDc(httpReq.responseText);
	
	if(responseXML != null)	{
		if ( window.DOMParser) {
			var parser = new DOMParser();  
			var xmlDoc = parser.parseFromString(responseXML, "application/xml");
			nl = xmlDoc.documentElement;
		}
		else if (window.ActiveXObject) {
            xmlDoc = new ActiveXObject ("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML (responseXML);
			nl = xmlDoc.documentElement;
        }
	}
 
    if (nl) {
        nl.normalize();
    } else if (!nl && is.supportActiveX) {
        nl = new ActiveXObject("Microsoft.XMLDOM")
        nl.async = "false"
        nl.load(xfn)
    } else {
        trivAlert('LOADTESTERR', tn, 'You must run this content from a web-based server');
        return;
    }
      
    this.arTests[tIdx].strLoadedName = tn;
    this.arTests[tIdx].loadTestFile( nl );
  }
  this.intTIdx = -1;
  if( this.arTests[tIdx].bLoaded && this.bIntActs )
  {
    this.intQIdx = this.arTests[tIdx].StartInteractions( pn );
    if( this.intQIdx != -1 )
      this.intTIdx = tIdx;
  }
  return true;
}

TMPr.ResetTest = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, true );

  if( tIdx < 0 )
    return false;

  this.arTests[tIdx].ResetTest();
  return true;
}

TMPr.getTIdx = function( tn, add ) 
{
  var i;

  for( i = 0; i < this.arTests.length; i++ )
  {
    if( this.arTests[i].strLoadedName == tn ) return i;
  }

  if( !add ) return -1;
  
  var test = new TrivTest();
  this.arTests.push( test );
  return this.arTests.length - 1;
}

TMPr.startTestTimer = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return;

  if( this.arTests[tIdx].lStartTime == 0 )
    this.arTests[tIdx].lStartTime = new Date().getTime();
}

TMPr.stopTestTimer = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return; 

  if( this.arTests[tIdx].lStartTime > 0 )
  {
    var now = new Date();
    this.arTests[tIdx].lElapsedTime += now.getTime() - this.arTests[tIdx].lStartTime;
    this.arTests[tIdx].lStartTime    = 0;
  }
}

TMPr.getRandomPageNumber = function( tn, pn )
{
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return "";

  return this.arTests[tIdx].getRandomPageNumber( pn );
}

TMPr.getRandomSectPageNumber = function( tn, sect, pg ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return "";

  return this.arTests[tIdx].getRandomSectPageNumber( sect, pg );
}

TMPr.getPrevTestPage = function( tn, pg )
{
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  var pp = this.arTests[tIdx].getPrevTestPage( pg );
  if( pp != null )
  {
    if( pp.indexOf( '#' ) == 0 )
    {
      var test = pp.substring( 1 );
      tIdx = this.getTIdx( test, false );
      if( tIdx >= 0 && this.arTests[tIdx].bLoaded )
      {
        var pn = this.arTests[tIdx].iNumPages-1;
        pp = this.arTests[tIdx].arRTPages[pageNum].name;
      }
    }
    return pp;
  }
  else
    return this.processTest( tn );
}

TMPr.getNextTestPage = function( tn, pg ) 
{
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  var np = this.arTests[tIdx].getNextTestPage( pg );
  if( np != null )
  {
    if( np.indexOf( '#' ) == 0 )
    {
      var test = np.substring( 1 );
      np = this.getNextTestPage( test, "" );
    }
    return np;
  }
  else
    return null;
}

TMPr.getRandomPage = function( tn, sn ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  return this.arTests[tIdx].getRandomPage( sn );
}

TMPr.cancelTest = function( tn )
{
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  var dest = this.arTests[tIdx].strFailPage;
  if( dest.indexOf( '#' ) == 0 )
  {
    var test = dest.substring( 1 );
    dest = this.getNextTestPage( test, "" );
  }
  return dest;
}

TMPr.processTest = function( tn, bSubmit) 
{
  bSubmit = (typeof(bSubmit) == 'undefined') ? true : bSubmit;
  
  var tIdx = this.getTIdx( tn, false );
  var dest;

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  // hack: set this global here because I want to use it in xAPI where we handle interaction data
  strTestName = this.arTests[tIdx].strTestName;

  this.stopTestTimer( tn );
  this.arTests[tIdx].GradeTest( this.arVars );
  this.arTests[tIdx].strTestResult = this.arTests[tIdx].ProcessTest( this.bCM, this.strCmBase, this.strAiccSN, this.strAiccST, this.strAiccEM, this.strAiccCO, this.arVars, bSubmit );

  if( this.arTests[tIdx].strTestResult.indexOf( '#' ) == 0 )
  {
    var test = this.arTests[tIdx].strTestResult.substring( 1 );
    this.arTests[tIdx].strTestResult = this.getNextTestPage( test, "" );
  }

  if( this.bIntActs )
  {
    var CID;
    var LID;
    var SID;

    if( this.bSCORM )
    {
      if( this.intCID == -1 )
        this.intCID = this.findVariable( "cmi.core.course_id" );
      if( this.intLID == -1 )
        this.intLID = this.findVariable( "cmi.core.lesson_id" );
      if( this.intSID == -1 )
        this.intSID = this.findVariable( "cmi.core.student_id" );
    }
    else
    {
      if( this.intCID == -1 )
        this.intCID = this.findVariable( "COURSE_ID" );
      if( this.intLID == -1 )
        this.intLID = this.findVariable( "LESSON_ID" );
      if( this.intSID == -1 )
        this.intSID = this.findVariable( "STUDENT_ID" );
    }

    if( this.intCID != -1 )
      CID = this.arVars[this.intCID].vv;
    else
      CID = this.strAiccCO;

    if( this.intLID != -1 )
      LID = this.arVars[this.intLID].vv;
    else
      LID = "";

    if( this.intSID != -1 )
      SID = this.arVars[this.intSID].vv;
    else
      SID = "";

    var intStr = new TrivStr("");
	if( bSubmit )
		this.arTests[tIdx].HandleInteractions( intStr, CID, SID, LID, this.scVers, this.bIntTxt, this.bAddTimeStamp, this.bForceTF );
    if( this.bAICC )
      this.PutInteractions( intStr.str );
  }
  return this.arTests[tIdx].strTestResult;
}

TMPr.getStudentResults = function( tn ) 
{
  var tIdx = this.getTIdx( tn, false );
  var dest;

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;
  else
    return this.arTests[tIdx].strStudentRes;
}

TMPr.getTestName = function( tn ) 
{
  var tIdx = this.getTIdx( tn, false );
  var dest;

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;
  else
    return this.arTests[tIdx].strTestName;
}

TMPr.getProcessTestResult = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, false );
  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  return this.arTests[tIdx].strTestResult;
}

TMPr.getProcessTestResponse = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return null;

  return this.arTests[tIdx].strTestSubmit;
}

TMPr.GetTestScore = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return "0";

  var score = this.arTests[tIdx].GradeTest( this.arVars );
  if( !this.arTests[tIdx].bAutoG || score >= this.arTests[tIdx].iPassGrade || score == -1 )
    this.arTests[tIdx].strTestResult = this.arTests[tIdx].strPassPage;
  else
    this.arTests[tIdx].strTestResult = this.arTests[tIdx].strFailPage;
  return score;
}

TMPr.GetIfTestPassed = function( tn ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return false;

  var score = this.arTests[tIdx].GradeTest( this.arVars );
  if( !this.arTests[tIdx].bAutoG || score >= this.arTests[tIdx].iPassGrade || score == -1 )
    return true;
  else
    return false;
}

TMPr.GetQuestionList = function( tn )
{
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return "0";

  return this.arTests[tIdx].getQuestionList();  
}

TMPr.GetTestSectionScore = function( tn, sect ) 
{ 
  var tIdx = this.getTIdx( tn, false );

  if( tIdx < 0 || !this.arTests[tIdx].bLoaded )
    return "0";

  return this.arTests[tIdx].GradeTestSection( this.arVars, sect );
}

TMPr.getVariableNameAt = function( atVal )
{
	if( atVal >= 0 && atVal < this.arVars.length )
		return this.arVars[atVal].vn;

	return "";
}

TMPr.getVariableValueAt = function ( atVal )
{
	if(atVal >= 0 && atVal < this.arVars.length)
		return this.arVars[atVal].vv;

	return "";
}

TMPr.getNumVariables = function(){
	return this.arVars.length;
}

TMPr.isWeb20Enabled = function()
{
  return trivWeb20Popups;
}

function TrivVar()
{
  this.bP = false;
  this.vn = "";
  this.vv = "";
}

function TrivStr(a)
{
  this.str = a;
  this.count=0;
}

TrivStr.prototype.add = function( a )
{
  this.str += a;
}

TrivStr.prototype.addparm = function( parm, val, noEnc )
{
  if( this.str.length > 0 )
    this.str += "&"
  if( noEnc )
    this.str += parm + "=" + val;
  else
    this.str += encodeURI(parm) + "=" + encodeURI(val);
  this.count++;
}

function getNVStr( nl, tag, dv )
{
  var nv = nl.getElementsByTagName(tag)[0];
  
  if( nv && nv.textContent ) return unJUN(nv.textContent);
  else return dv;
}

function getNVInt( nl, tag, dv )
{
  return parseInt(getNVStr( nl, tag, dv ), 10);
}

function get_random( lim )
{
  return Math.round(Math.random()*lim);
}

function TrivTest()
{
  this.bLoaded = false;
  this.strLoadedName = "";
  this.strTestName = "";
  this.strResults = "";
  this.bAutoG = 0;
  this.iShowRes = 0;
  this.bShowScOnly = 0;
  this.iTestTime = 0;
  this.iNumberRandom = 0;
  this.iPassGrade = 0;
  this.bModeGet = 0;
  this.bIncVar = 0;
  this.bPromptSuc = 0;
  this.bPersist = 0;
  this.iStudScore = 0;
  this.lStartTime = 0;
  this.lElapsedTime = 0;
  this.strFailPage = "";
  this.strPassPage = "";
  this.strPrevPage = "";
  this.bGDocs = 0;
  this.bEmail = 0;
  this.strSubject = "";
  this.strAllowedTM = "";
  this.strElapsedTM = "";
  this.strTestSubmit = "";
  this.bSurvey = 0;
  this.arWork = new Array();
  this.arPicked = new Array();
  this.arLoadedPages = new Array();
  this.arSections = new Array();
  this.arRTPages = new Array();
  this.arGDocs = new Array();
  this.strStudentRes = "";
  this.bIsNewGDocURL = false;
}

var TTPr=TrivTest.prototype

TTPr.loadTestFile = function( nl )
{
  this.bSurvey = getNVInt( nl, 'survey', this.bSurvey );
  this.bAutoG = getNVInt( nl, 'grade', this.bAutoG );
  this.iShowRes = getNVInt( nl, 'showresults', this.iShowRes );
  this.bShowScOnly = getNVInt( nl, 'scoreonly', this.bShowScOnly );
  this.bModeGet = getNVInt( nl, 'get', this.bModeGet );
  this.bIncVar = getNVInt( nl, 'incvar', this.bIncVar );
  this.bPromptSuc = getNVInt( nl, 'promptsuccess', this.bPromptSuc );
  this.bPersist = getNVInt( nl, 'persist', this.bPersist );
  this.strTestName = getNVStr( nl, 'name', this.strTestName );
  this.strResults = getNVStr( nl, 'submitto', this.strResults );
  this.iTestTime = getNVInt( nl, 'testtime', this.iTestTime );
  this.iNumberRandom = getNVInt( nl, 'numrandom', this.iNumberRandom );
  this.iPassGrade = getNVInt( nl, 'passinggrade', this.iPassGrade );
  this.strFailPage = getNVStr( nl, 'cancelfail', this.strFailPage );
  this.strPassPage = getNVStr( nl, 'passdone', this.strPassPage );
  this.strPrevPage = getNVStr( nl, 'prevpage', this.strPrevPage );
  this.bGDocs = getNVInt( nl, 'gdocs', this.bGDocs );
  this.arGDocs = getNVArray(nl,'argdocentries', 'entry');
  this.bEmail = getNVInt( nl, 'email', this.bEmail );
  this.strSubject = getNVStr( nl, 'subject', this.strSubject );
  
  var arEle = nl.getElementsByTagName('section');
  var i, j, k;
  
  for( i = 0; arEle && i < arEle.length; i++ )
  {
    var sect = new TrivTestSection();
    sect.load( arEle[i] );
    this.arSections.push( sect );
  }
  arEle = nl.getElementsByTagName('page');
  for( i = 0; arEle && i < arEle.length; i++ )
  {
    var page = new TrivTestPage();
    var bAdd = true
    page.load( jTitleManager.UNK, arEle[i] );
    for( j = 0; j < this.arSections.length; j++ )
    {
      for( k = 0; k < this.arSections[j].arPages.length; k++ )
      {
        if( page.name == this.arSections[j].arPages[k].name )
        {
          bAdd = false;
          break;
        }
      }      
    }
    if( bAdd )
      this.arLoadedPages.push( page );
  }
  this.LoadPages();
  this.bLoaded = true;
}

TTPr.LoadPages = function()
{
  var i;
  var j;
  
  if( this.iNumberRandom > 0 )
  {
    if( this.arWork.length == 0 )
    {
      for( i = 0; i < this.arSections.length; i++ )
        this.arSections[i].LoadPages( this.arWork, false );

      for( i = 0; i < this.arLoadedPages.length; i++ )
	  {
	    if(!this.arLoadedPages[i].bHasResults)
			this.arWork[i] = this.arLoadedPages[i];
      }
	
      if( this.iNumberRandom > this.arWork.length ) this.iNumberRandom = this.arWork.length;
    }    
    
    for( i = 0; i < this.arWork.length; i++ )
    {
      if( this.arPicked.length < i + 1)
        this.arPicked.push( 0 );
      else
        this.arPicked[i] = 0;
    }
    
    for( i = 0; i < this.iNumberRandom; i++ )
    {
      var sel = get_random( this.arWork.length - i - 1);
      for( j = 0; j <= sel; j++ )
        if( this.arPicked[j] ) sel++;
      
      this.arPicked[sel] = 1;
      this.arRTPages.push( this.arWork[sel] );
    }
  }
  else
  {
    var tmpArr = new Array();
    
    if( this.arLoadedPages.length >= 1 && !this.arLoadedPages[0].bHasResults )
    {
      for( i = 0; i < this.arLoadedPages.length; i++ )
        this.arRTPages[this.arLoadedPages[i].index] = this.arLoadedPages[i];
    }
    
    for( i = 0; i < this.arSections.length; i++ )
      this.arSections[i].LoadPages( this.arRTPages, true );
    
    for( i = 0; i < this.arRTPages.length; i++ )
    {
      if( this.arRTPages[i] != null )
        tmpArr.push( this.arRTPages[i] );
    }
    this.arRTPages = tmpArr;
  }
}

TTPr.ResetTest = function() 
{ 
  this.arRTPages.length = 0;
  this.LoadPages();
  this.lElapsedTime = 0;
}

TTPr.GetTestScore = function( arVars ) 
{ 
  var maxScore = 0;
  var testScore = 0;
  var mScore = 0;
  var tScore = 0;
  var bCanScore = true;

  for( var idx = 0; idx < this.arRTPages.length; idx++ )
  {
    this.arRTPages[idx].gradeQs( arVars );

    if( !this.arRTPages[idx].isScoreable() )
      bCanScore = false;

    mScore = this.arRTPages[idx].getMaxScore();
    tScore = this.arRTPages[idx].getScore();

    maxScore += mScore;
    testScore += tScore;
  }

  if( bCanScore )
  {
    if( maxScore > 0 )
      this.iStudScore = parseInt(testScore * 100.0 / maxScore + 0.5, 10);
    else
      this.iStudScore = 100;
  }
  else
    this.iStudScore = -1;

  return this.iStudScore;
}

TTPr.getQuestionList = function()
{
  var ql = '';
  for( var idx = 0; idx < this.arRTPages.length; idx++ )
  {
    var ques = this.arRTPages[idx].getQuestionList();
    if( ques.length != 0 )
      ql += ques;
  }
  
  return ql;
}

TTPr.GradeTest = function( arVars ) { return this.GetTestScore( arVars ); }

TTPr.GradeTestSection = function( arVars, sect ) 
{ 
  var maxScore = 0;
  var testScore = 0;
  var mScore = 0;
  var tScore = 0;
  var sectScore = 0;
  var bCanScore = true;

  for( var idx = 0; idx < this.arRTPages.length; idx++ )
  {
    if( this.arRTPages[idx].iSectionId == sect )
    {
      this.arRTPages[idx].gradeQs( arVars );

      if( !this.arRTPages[idx].isScoreable() )
        bCanScore = false;

      mScore = this.arRTPages[idx].getMaxScore();
      tScore = this.arRTPages[idx].getScore();

      maxScore += mScore;
      testScore += tScore;
    }
  }

  if( bCanScore )
  {
    if( maxScore > 0 )
      sectScore = parseInt(testScore * 100 / maxScore + 0.5, 10);
    else
      sectScore = 100;
  }
  else
    sectScore = -1;

  return sectScore;
}

TMPr.addFormElement = function( nm, vl )
{
	this.arFormNameVals.push( [nm,vl] );
};


TMPr.emailForm = function( us, subj, inc, xml )
{
	strRes = ""
	if( xml ) strRes += "<lectoravariables>\r\n";
	
	for( var i=0; i<this.arFormNameVals.length; i++ )
	{
		if( xml )
		{
			strRes += "  <variable>\r\n";
			strRes += "    <variablename>" + this.arFormNameVals[i][0]  + "</variablename>\r\n";
			strRes += "    <variablevalue>" + this.arFormNameVals[i][1]  + "</variablevalue>\r\n";
			strRes += "  </variable>\r\n";
		}
		else
		{
			strRes += this.arFormNameVals[i][0] + ' = ' + this.arFormNameVals[i][1] + '\r\n';
		}
	}
	if( xml ) strRes += "</lectoravariables>";
	
	var resEmail = "mailto:" + us + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(strRes);
	try{app.openFile(resEmail);}catch(e){};
};

TTPr.ProcessTest = function( bCM, strCMBase, us, id, em, cid, arVars, bSubmit ) 
{ 
  bSubmit = (typeof(bSubmit) == 'undefined') ? true : bSubmit;	

  var strDest = null;
  var bSuccess = true;
  var secs;
  var test;
  var eT;

  if( this.iTestTime > 0 )
  {
    secs = this.iTestTime * 60;
    test = parseInt(secs/3600, 10);
    secs -= (test * 3600);
    
    this.strAllowedTM = "";
    
    if( test < 10 )
      this.strAllowedTM += "0";
    this.strAllowedTM += test + ":";
    test  = parseInt(secs/60, 10);
    secs -= (test * 60);
    
    if( test < 10 )
      this.strAllowedTM += "0";
    this.strAllowedTM += test + ":";

    if( secs < 10 )
      this.strAllowedTM += "0";
    this.strAllowedTM += secs;

    eT = parseInt(this.lElapsedTime / 1000, 10);

    if( eT > this.iTestTime * 60 || eT < 0)
      eT = this.iTestTime * 60;

    test = parseInt(eT/3600, 10);
    eT = eT - (test * 3600);
    this.strElapsedTM = "";
    if( test < 10 )
      this.strElapsedTM += "0";
    
    this.strElapsedTM += test + ":";

    test  = parseInt(eT/60, 10);
    eT -= (test * 60);
    if( test < 10 )
      this.strElapsedTM += "0";
    this.strElapsedTM += test + ":";

    if( eT < 10 )
      this.strElapsedTM += "0";
    this.strElapsedTM += eT;
  }

  window.resWind = null
  if( this.iShowRes )
  {
    this.strStudentRes = this.CreateTextResults( us, arVars );
  }
  
  if( bCM )
  {
    var urlDest = strCMBase + "/testresults.jsp";

    pl = new TrivStr("")
    if( us ) pl.addparm( "user", us );
    if( cid ) pl.addparm( "course", cid );

    this.CreateCGIResults( pl, arVars, true, false );
    pl.str = pl.str.replace(/\+/g, '%2B');

    var httpReq = getHTTP( urlDest, 'POST', pl.str );
      
    if(httpReq.status == 200)
    {
      var strRet = httpReq.responseText;

      while( strRet.length > 2 && strRet.indexOf( '\r\n' ) == 0 )
      {
        var temp = strRet.substring( 2 );
        strRet = temp;
      }

      var strErr;
      if( strRet.length > 3 )
        strErr = strRet.substring( 0, 3 );
      else
        strErr = strRet;

      var strMsg = "";
        
      if( strErr == "520" )
      {
        bSuccess = false;
        strMsg = trivstrERRNQ;
      }
      else if( strErr == "530" )
      {
        bSuccess = false;
        strMsg = trivstrERRAS;
      }
      else if( strErr == "430" )
      {
        bSuccess = false;
        strMsg = trivstrERRLI;
      }
      else if( strErr != "200" )
      {
        bSuccess = false;
        strMsg = trivstrERRST;
      }
 
      if( !bSuccess ) 
      {
        trivAlert( 'CM_HTTPERR', this.strLoadedName, strMsg );
      }
    }
  }
  
  // Determine if a variable macro
  strDest = this.getVariableMacroValue( this.strResults, arVars );
  this.bIsNewGDocURL = this.bGDocs && parseKeyFromGDocURL( strDest ) == null;

  if( bSuccess && strDest != null && bSubmit )
  {
    if ( strDest != null && strDest.length > 0 )
    {
      var pl = new TrivStr("")
      if( this.bGDocs )
	  {
	    if( us )
		{
		  if( this.bIsNewGDocURL ) {
		    if ( this.arGDocs && pl.count < this.arGDocs.length )
		        pl.addparm( 'entry_'+this.arGDocs[pl.count], us );
		    else 
		        pl.addparm( 'entry_1'+padDigits(pl.count,6), us );
		  } else {
		    var i=strDest.indexOf("key=");
		    if(i>=0){
			  var str=strDest.substr(i+4);
			  i=str.indexOf('#');
			  if(i>=0)
			    str=str.substr(0,i);
			  pl.addparm( "key", str );
		    }else{
			  i=strDest.indexOf("formKey=");
			  if(i>=0){
				var str=strDest.substr(i+8);
				i=str.indexOf('#');
				if(i>=0)
				  str=str.substr(0,i);
				pl.addparm( "formKey", str );
			  }
			}
		  }
		} 
	  }
	  else pl.addparm( "name", us );
      this.CreateCGIResults( pl, arVars, false, this.bGDocs, this.arGDocs );
      pl.str = pl.str.replace(/\+/g, '%2B');

	  if( this.bGDocs ){
	    strDest = this.bIsNewGDocURL?strDest:"https://spreadsheets.google.com/formResponse";
	    if( !this.bIsNewGDocURL && is.ie ){
			var request = strDest + '?' + pl.str;
			var head = document.getElementsByTagName("head").item(0);
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", request);
			head.appendChild(script);
		    bSuccess = true;
		}else {
			var httpReq = getHTTP( strDest, (this.bIsNewGDocURL?'POST':'GET'), pl.str, is.ie ? DOMException.NETWORK_ERR : null );
            bSuccess = (httpReq.status == 200 || httpReq.status == 0);
        }
		this.strTestSubmit = '';
	  }
	  else if( this.bEmail )
	  {
		var strVariablesRes = "";
		if( this.bIncVar )
		{
			strVariablesRes += "\r\n\r\n";
			strVariablesRes += "Vars:\r\n\r\n";
			var submitValue = "";
			var submitName = "";
			for( idx = 0; idx < arVars.length; idx++ ) {
				if ((submitValue = this.getVariableSubmitValue( idx, arVars )) == "~~~null~~~") 
					submitValue = trivstrNA;
				submitName = this.getVariableSubmitName( idx, arVars );
				strVariablesRes += submitName + " = " + submitValue + "\r\n";
			}
		}
		var resEmail = "mailto:" + strDest + "?subject=" + encodeURIComponent(this.strSubject) + "&body=" + encodeURIComponent(this.CreateTextResults(us, arVars, true) ) + encodeURIComponent(strVariablesRes);
		try{app.openFile(resEmail);}catch(e){}
	  }
	  else{
	    var httpReq = getHTTP( strDest, ((this.bModeGet)?'GET':'POST'), pl.str );
        bSuccess = (httpReq.status == 200);
        this.strTestSubmit = httpReq.responseText;
	  }
      if( bSuccess && this.bPromptSuc )
      {
        var subTxt;
        if( !this.bSurvey )
            subTxt = trivstrTRSUB;
        else
            subTxt = trivstrSUSUB;
            
        if( !trivWeb20Popups )
        {
          if( window.resWind != null )
            window.resWind.alert( subTxt );
          else
            alert( subTxt );
        }
        else
        {
          var fn = null;
          if ( window.trivActFBCnt != 'undefined' && window.trivActFBCnt != null )
          { 
            window.trivActFBCnt++;
            fn =(function(){ window.trivActFBCnt--;});
          }
          trivAlert( 'SUBERR', this.strLoadedName, subTxt, fn );
        }
      }
    }
  }

  if( !this.bAutoG || this.iStudScore >= this.iPassGrade || this.iStudScore == -1 )
    return this.strPassPage;
  else
    return this.strFailPage;
}

TTPr.CreateTextResults = function( us, arVars, bEm ) 
{ 
  var idx;
  var qNum = 0;
  var txtRes = new TrivStr("")
  
  var lineBreak = "<br />";
	
  if( typeof(bEm) != "undefined" && bEm )
	lineBreak = "\r\n";
  
  txtRes.add( this.strTestName + lineBreak + lineBreak);

  if( us != null && us.length > 0 )
    txtRes.add( trivstrSTUD + us + lineBreak + lineBreak );

  if( this.iStudScore != -1 && this.bAutoG )
  {
    txtRes.add( trivstrSCORE + this.iStudScore + "%" + lineBreak);
    if( this.iStudScore >= this.iPassGrade )
      txtRes.add( trivstrPASS );
    else
      txtRes.add( trivstrFAIL );
    txtRes.add( lineBreak + lineBreak );
  }

  if( this.bShowScOnly == 0 )
  {
    for( idx = 0; idx < this.arRTPages.length; idx++ )
      qNum = this.arRTPages[idx].createTextResults( txtRes, qNum, this.bAutoG, bEm );
  }
  
  return txtRes.str;
}


TTPr.CreateCGIResults = function( pl, arVars, bCM, bGD, arGDocs ) 
{ 
  var idx;
  var qNum = 0;
  var svSID = -1;
  var numTFTot = 0;
  var numTFSect = 0;
  var numTFOnP = 0;
  var numMCTot = 0;
  var numMCSect = 0;
  var numMCOnP = 0;
  var corrTFTot = 0;
  var corrTFSect = 0;
  var corrTFOnP = 0;
  var corrMCTot = 0;
  var corrMCSect = 0;
  var corrMCOnP = 0;

  if( !bGD )
  {
	if( this.bSurvey )  
		pl.addparm( "SurveyName", this.strTestName);
	else
		pl.addparm( "TestName", this.strTestName);
  }
  for( idx = 0; idx < this.arRTPages.length; idx++ )
  {
    qNum = this.arRTPages[idx].createCGIResults( pl, qNum, bGD, this.bIsNewGDocURL, arGDocs );

    if( svSID != this.arRTPages[idx].iSectionId )
    {
      if( svSID > 0 && this.bAutoG )
      {
        var strSSN = "TrueFalseSection" + svSID;
        var strSSV = corrTFSect + "/" + numTFSect;

        if( !bGD ) pl.addparm( strSSN, strSSV );

        strSSN  = "MultipleChoiceSection" + svSID;
        strSSV = corrMCSect + "/" + numMCSect;

        if( !bGD ) pl.addparm( strSSN, strSSV );
      }

      corrTFSect = 0;
      corrMCSect = 0;
      numTFSect = 0;
      numMCSect = 0;
      svSID = this.arRTPages[idx].iSectionId;
    }

    numTFOnP = this.arRTPages[idx].getNumTFQs();
    corrTFOnP = this.arRTPages[idx].getNumCorrectTFQs();
    numMCOnP = this.arRTPages[idx].getNumMCQs();
    corrMCOnP = this.arRTPages[idx].getNumCorrectMCQs();

    numTFTot += numTFOnP;
    numTFSect += numTFOnP;
    corrTFTot += corrTFOnP;
    corrTFSect += corrTFOnP;

    numMCTot += numMCOnP;
    numMCSect += numMCOnP;
    corrMCTot += corrMCOnP;
    corrMCSect += corrMCOnP;
  }

  if( !this.bShowScOnly && svSID > 0 && this.bAutoG )
  {
    var strSSN  = "TrueFalseSection" + svSID;
    var strSSV = corrTFSect + "/" + numTFSect;

    if( !bGD ) pl.addparm( strSSN, strSSV );

    strSSN = "MultipleChoiceSection" + svSID;
    strSSV = corrMCSect + "/" + numMCSect;

    if( !bGD ) pl.addparm( strSSN, strSSV );
  }

  if( this.iStudScore != -1 && this.bAutoG )
  {
    if( bGD ){
      if ( this.bIsNewGDocURL ) {
        if ( arGDocs && pl.count < arGDocs.length )
          pl.addparm( 'entry_'+arGDocs[pl.count], this.iStudScore  );
        else 
          pl.addparm( 'entry_1'+padDigits(pl.count,6), this.iStudScore  );
      }
      else pl.addparm( 'entry.'+(pl.count-1)+'.single', this.iStudScore );
    }
    else pl.addparm( "Score", this.iStudScore );
  }
  else if( bCM )
    pl.addparm( "Score", "-1" );

  if( this.bAutoG || bCM )
  {
    if( !bGD ) pl.addparm( "PassingGrade", this.iPassGrade );
    if( !bGD ) pl.addparm( "TrueFalse", corrTFTot + "/" + numTFTot );
    if( !bGD ) pl.addparm( "MultipleChoice", corrMCTot + "/" + numMCTot );
  }

  if( !bGD ) pl.addparm( "NumQuestions", qNum );

  if( this.strAllowedTM != "" )
  {
    if( !bGD ) pl.addparm( "AllowedTime", this.strAllowedTM );
    if( !bGD ) pl.addparm( "ElapsedTestTime", this.strElapsedTM );
  }

  if( this.bIncVar && !bGD )
  {
    for( idx = 0; idx < arVars.length; idx++ ) {
      if ((submitValue = this.getVariableSubmitValue( idx, arVars )) == "~~~null~~~") submitValue = trivstrNA
      pl.addparm( this.getVariableSubmitName( idx, arVars ), submitValue, true );
    }
  }
  return true;
}

TTPr.getRandomPageNumber = function( pg ) 
{ 
  var i;
  for( i = 0; i < this.arRTPages.length; i++ )
    if( this.arRTPages[i] && this.arRTPages[i].name == pg ) 
      return String(i + 1);
  
  return "";
}

TTPr.getRandomSectPageNumber = function( section, pg ) 
{ 
  var i;
  var pn = 0;
  
  for( i = 0; i < this.arRTPages.length; i++ )
  {
    if( this.arRTPages[i].iSectionId == section ) 
      pn++;
    if( this.arRTPages[i].name == pg ) 
      return String(pn);
  }
  
  return "";
}

TTPr.findTestPage = function( pg )
{
  var i;

  for( i = 0; i < this.arRTPages.length; i++ )
    if( this.arRTPages[i].name == pg ) 
      return i;

  return -1;
}

TTPr.getPrevTestPage = function( pg ) 
{
  var cp = this.findTestPage( pg );
  if( cp > 0 )
    cp--;
  else if( cp == 0 )
    return this.strPrevPage;
  else
    cp = this.arRTPages.length-1;

  if( cp >= 0 && cp < this.arRTPages.length )
    return this.arRTPages[cp].name;

  return null;
}

TTPr.getNextTestPage = function( pg ) 
{
  var cp = this.findTestPage( pg );
  if( cp > -1 && cp < this.arRTPages.length )
    cp++;
  else
    cp = 0;
    
  if( cp >= 0 && cp < this.arRTPages.length )
    return this.arRTPages[cp].name;

  return null;
}

TTPr.getRandomPage = function( pre ) 
{ 
  var i;
  var len = 0;
  
  if( pre ) len = pre.length;
  
  for( i = 0; i < this.arRTPages.length; i++ )
  {
    var tmp = this.arRTPages[i].name.substr( 0, len );
    if( tmp == pre ) 
      return this.arRTPages[i].name;
  }

  return null;

}

TTPr.getVariableSubmitName = function( idx, arVars ) 
{ 
  var vn = arVars[idx].vn;
  if( vn == null )
    vn = "";
    
  if( vn.length > 3 )
  {
    var pN  = vn.substring(0, 3 ).toLowerCase();
    if( pN == "var" )
      return vn.substring( 3 );
  }
  return vn;
}

TTPr.getVariableSubmitValue = function( idx, arVars ) 
{ 
  var vv = arVars[idx].vv;
  if( vv == null )
    vv = "";
    
  if( vv.length > 7 ) 
  {
    var pV = vv.substring(0, 7 );
    if( pV == "~~f=1~~" ||
        pV == "~~f=2~~" ||
        pV == "~~f=4~~" )
    {
      var slashPos = vv.indexOf( '|' );
      return vv.substring( slashPos + 1 );
    }
  }
  else if ( vv == "~~~null~~~" )
    return "";

  return vv;
}

TTPr.getVariableMacroValue = function( val, arVars ) 
{ 
  var strResult = val;
  var length    = val.length;

  if( length > 6 )
  {
    var strStart;
    var strMid;
    var strEnd;

    strStart = val.substring( 0, 4 ).toLowerCase();
    strMid   = val.substring( 4, length - 1 );
    strEnd   = val.substring( length-1 );

    if( strStart == "var(" &&
        strEnd == ")" )
    {
      var idx;

      for( idx = 0; idx < arVars.length; idx++ )
      {
        if( arVars[idx].vn == strMid )
          return this.getVariableSubmitValue( idx, arVars );
      }
    }
  }

  return strResult;
}

function TrivTestSection()
{
  this.iNumberRandom = 0;
  this.iSectionId = jTitleManager.UNK;
  this.index = jTitleManager.UNK;
  this.arPages = new Array();
  this.arPicked = new Array();
}

var TSPr=TrivTestSection.prototype

TSPr.load = function( nl )
{
  this.iSectionId = getNVInt( nl, 'id', this.iSectionId );
  this.iNumberRandom = getNVInt( nl, 'numrandom', this.iNumberRandom );
  this.index = getNVInt( nl, 'index', this.index );
  var arEle = nl.getElementsByTagName('page');
  for( var i=0; arEle && i < arEle.length; i++ )
  {
    var page = new TrivTestPage();
    page.load( this.iSectionId, arEle[i] );
    this.arPages.push( page );
  }
}

TSPr.LoadPages = function( arr, rand )
{
  var i;
  var j;
  var sIdx = this.index;
    
  if( this.iNumberRandom > 0 && rand )
  {
    if( this.iNumberRandom > this.arPages.length ) this.iNumberRandom = this.arPages.length;

    for( i = 0; i < this.arPages.length; i++ )
    {
      if( this.arPicked.length < i + 1)
        this.arPicked.push( 0 );
      else
        this.arPicked[i] = 0;
    }
    
    for( i = 0; i < this.iNumberRandom; i++ )
    {
      var sel = get_random( this.arPages.length - i - 1);
      for( j = 0; j <= sel; j++ )
        if( this.arPicked[j] ) sel++;
      
      this.arPicked[sel] = 1;
      arr[sIdx++] = this.arPages[sel];
    }
    
    for( i = 0; i < ( this.arPages.length - this.iNumberRandom ); i++ )
      arr[sIdx++] = null;
  }
  else
  {
    for( i = 0; i < this.arPages.length; i++ )
      arr[this.arPages[i].index] = this.arPages[i];
  }
}

function TrivTestPage()
{
  this.index = jTitleManager.UNK;
  this.name = "";
  this.iSectionId = jTitleManager.UNK;
  this.arQues = new Array();
  this.bHasResults = false;
}

var TPPr=TrivTestPage.prototype
TPPr.load = function( sid, nl )
{
  //Check if the page contains a results object
  var attr = nl.getAttribute("hasResults");
  if(attr == "true")
       this.bHasResults = true;

  this.iSectionId = sid;
  this.index = getNVInt( nl, 'index', this.index );
  this.name = getNVStr( nl, 'name', this.name );
  var arEle = nl.getElementsByTagName('question');
  for( var i=0; arEle && i < arEle.length; i++ )
  {
    var quest = new TrivQuestion();
    quest.load( this.iSectionId, arEle[i] );
    this.arQues.push( quest );
  }
}

TPPr.gradeQs = function( arVars )
{
  for( var idx = 0; idx < this.arQues.length; idx++ )
    this.arQues[idx].gradeQs( arVars );
}

TPPr.getQuestionList = function()
{
  var ql = '';
  
  for( var idx = 0; idx < this.arQues.length; idx++ )
  {
    if( (this.arQues[idx].type == jTitleManager.DD || this.arQues[idx].type == jTitleManager.MT) && this.arQues[idx].bGradeInd )
    {
      var subidx;
      for( subidx = 0; subidx < this.arQues[idx].arCorrAns.length; subidx++ )
        ql += this.arQues[idx].id + '-' + (subidx+1) + ';';
    }
    else if( (this.arQues[idx].type == jTitleManager.MC || this.arQues[idx].type == jTitleManager.MR || this.arQues[idx].type == jTitleManager.HS) && this.arQues[idx].bGradeInd )
    {
      var subidx;
      for( subidx = 0; subidx < this.arQues[idx].arChoices.length; subidx++ )
        ql += this.arQues[idx].id + '-' + (subidx+1) + ';';
    }
    else
      ql += this.arQues[idx].id + ';';
  }  
  return ql;
}

TPPr.getNumTFQs = function()
{
  var numQ = 0;
  
  for( var idx = 0; idx < this.arQues.length; idx++ )
    numQ += this.arQues[idx].getNumTFQs();

  return numQ;
}

TPPr.getNumCorrectTFQs = function()
{
  var idx;
  var numC = 0;

  for( idx = 0; idx < this.arQues.length; idx++ )
    numC += this.arQues[idx].getNumCorrectTFQs();

  return numC;
}

TPPr.getNumMCQs = function()
{
  var idx;
  var numQ = 0;

  for( idx = 0; idx < this.arQues.length; idx++ )
    numQ += this.arQues[idx].getNumMCQs();

  return numQ;
}

TPPr.getNumCorrectMCQs = function()
{
  var idx;
  var numC = 0;

  for( idx = 0; idx < this.arQues.length; idx++ )
    numC += this.arQues[idx].getNumCorrectMCQs();

  return numC;
}

TPPr.createTextResults = function( txtRes, bQN, bAG, bEm )
{
  for( var idx = 0; idx < this.arQues.length; idx++ )
    bQN = this.arQues[idx].createTextResults( txtRes, bQN, bAG, bEm );
    
  return bQN;
}

TPPr.getMaxScore = function()
{
  var ourMax = 0;

  for( var idx = 0; idx < this.arQues.length; idx++ )
    ourMax += this.arQues[idx].getMaxScore();
    
  return ourMax;
}

TPPr.getScore = function()
{
  var ourScore = 0;

  for( var idx = 0; idx < this.arQues.length; idx++ )
    ourScore += this.arQues[idx].getScore();
    
  return ourScore;
}

TPPr.isScoreable = function()
{
  for( var idx = 0; idx < this.arQues.length; idx++ )
    if( !this.arQues[idx].isScoreable())
      return false;
  return true;
}

TPPr.createCGIResults = function( pl, bQN, bGD, bIsNewGDocURL, arGDocs )
{
  var idx;
  var subidx;
  var loc;
  var strTemp;

  for( idx = 0; idx < this.arQues.length; idx++ )
    bQN = this.arQues[idx].createCGIResults( pl, bQN, bGD, bIsNewGDocURL, arGDocs );
  
  return bQN;
}
  
function TrivQuestion()
{
  this.id = 0;
  this.iSectionId = jTitleManager.UNK;
  this.type = 0;
  this.weight = 1;
  this.name = "";
  this.varName = "";
  this.text = "";
  this.arCorrAns = new Array();
  this.arChoices = new Array();
  this.arStmts = new Array();
  this.arStmtNms = new Array();
  this.arAddedInfo = new Array();
  this.arRel = new Array();
  this.bAllowMult = 0;
  this.bPersist = 0;
  this.bGradeInd = 0;
  this.bSurvey = 0;
  this.strOurAns = "";
  this.iOurScore = 0;
  this.bAnyAnswer = 0;
  this.bCaseSensitive = 0;
  this.separator = "";
}

var TQPr=TrivQuestion.prototype
TQPr.load = function (sid, nl) {
    this.iSectionId = sid;
    this.id = getNVInt(nl, 'id', this.id);
    this.type = getNVInt(nl, 'type', this.type);
    this.weight = getNVInt(nl, 'weight', this.weight);
    this.name = getNVStr(nl, 'name', this.name);
    this.varName = getNVStr(nl, 'var', this.varName);
    this.text = getNVStr(nl, 'text', this.text);
    this.bAnyAnswer = getNVInt(nl, 'anyanswer', this.bAnyAnswer);
    this.bCaseSensitive = getNVInt(nl, 'casesensitive', this.bCaseSensitive);
    this.separator = getNVStr(nl, 'separator', this.separator);
    this.corrFeedback = getNVStr(nl, 'correctfeedback', this.corrFeedback);
    this.incorrFeedback = getNVStr(nl, 'incorrectfeedback', this.incorrFeedback);
    this.arCorrAns = getNVArray(nl,'arcorrectans', 'answer', 'item');
    this.arRel = getNVArray(nl,'arrel', 'relationship');

	this.arChoices = getNVArray(nl,'archoices', 'choice');
    if (this.type == jTitleManager.LK) 
    {
		this.arStmts = getNVArray(nl,'arstatements', 'statement');
		this.arStmtNms = getNVArray(nl,'arstatementnames', 'statementname');
		
    }
	this.arAddedInfo = getNVArray(nl,'araddedinfo', 'infoitem');
    this.bAllowMult = getNVInt(nl, 'allowmult', this.bllowMult);
    this.bPersist = getNVInt(nl, 'persist', this.bPersist);
    this.bGradeInd = getNVInt(nl, 'gradeindividual', this.bGradeInd);
    this.bSurvey = getNVInt(nl, 'surveyquestion', this.bSurvey);
}

TQPr.getCorrectAnswer = function()
{
  var strCorrAns = "";
  
  if (this.type == jTitleManager.NE)
  {
	  for ( var idx=0; idx<this.arCorrAns.length && idx<this.arRel.length; idx++ )
	  {
		  var curAns = this.arCorrAns[idx];
		  var corAns1 = ((typeof curAns == 'string')?curAns:(curAns.length>0?curAns[0]:''));
		  var corAns2 = ((typeof curAns != 'string'&&curAns.length>1)?curAns[1]:'');
		  var curRel = this.arRel[idx];
		  var curStr = "";
		  
		  if ( curRel == jTitleManager.EQU )
			  curStr = "x == " + corAns1;
		  else if ( curRel == jTitleManager.NEQU )
			  curStr = "x != " + corAns1;
		  else if ( curRel == jTitleManager.GRT )
			  curStr = "x > " + corAns1;
		  else if ( curRel == jTitleManager.GTE )
			  curStr = "x >= " + corAns1;
		  else if ( curRel == jTitleManager.LST )
			  curStr = "x < " + corAns1;
		  else if ( curRel == jTitleManager.LSTE )
			  curStr = "x <= " + corAns1;
		  else if ( curRel == jTitleManager.BT_EXC )
			  curStr = "x > " + corAns1 + " and x < " + corAns2;
		  else if ( curRel == jTitleManager.BT_INC )
			  curStr = "x >= " + corAns1 + " and x <= " + corAns2;

		  if ( idx == 0 )
			strCorrAns = curStr;
		  else 
		  {
			if ( idx == 1 )
			  strCorrAns = (" ( " + strCorrAns + " ) ");
		    strCorrAns += ( this.separator + " ( " + curStr + " ) ");
		  }
	  }
  }
  else if (this.type == jTitleManager.MT || this.type == jTitleManager.DD)
  {
	  for ( var idx=0; idx<this.arCorrAns.length; idx++ )
	  {
		  if (idx>0)
			  strCorrAns += ",";
		  strCorrAns += (this.arCorrAns[idx][0] + "-" + this.arCorrAns[idx][1]);
	  }
  }
  else 
	  strCorrAns = this.arCorrAns.join(",");

  //arCorrAns
  
  return strCorrAns;
}

TQPr.getMaxScore = function()
{
  var ourMax = 0;
  
  if( !this.bSurvey )
  {
    if( this.bGradeInd )
    {
      if (this.type == jTitleManager.MR || this.type == jTitleManager.HS || this.type == jTitleManager.MC || this.type == jTitleManager.DD ) //LD-5041
        ourMax = this.arChoices.length;
      else if( this.arCorrAns.length > 0 )
        ourMax = this.arCorrAns.length;
      else
        ourMax = 1;

      ourMax *= this.weight;
    }
    else if( this.type != jTitleManager.UNK )
      ourMax = this.weight;
  }

  return ourMax;
}

TQPr.getScore = function()
{
  var ourScore = 0;
  
  if( !this.bSurvey )
  {
    if( this.type != jTitleManager.UNK )
      ourScore = this.iOurScore;
  }

  return ourScore;
}

TQPr.isScoreable = function()
{
  if( !this.bSurvey )
  {
    if( this.type == jTitleManager.SA || this.type == jTitleManager.ES || this.type == jTitleManager.LK )
    {
      if( this.weight > 0 )
        return false;
    }
  }
  return true;
}

TQPr.isCorrect = function()
{
  var idx;

  if( !this.bSurvey )
  {
    if( this.strOurAns == null || this.strOurAns.length == 0 )
    	return 0;

    switch( this.type )
    {
        case jTitleManager.TF:
        if( this.strOurAns == this.arCorrAns[0] )
          return 1;
        break;

      case jTitleManager.MC:
      case jTitleManager.HS:
      case jTitleManager.MR:
      case jTitleManager.OR:
        if( this.bGradeInd )
        {
          var bSel, bCorr;
          var iNumCorr = 0;
          
          for( var i=0; i<this.arChoices.length; i++ )
          {            
            var strChoice = this.arChoices[i].replace(/,/g,"&#44");
            if( this.type == jTitleManager.OR ){
              var indObj = {i:-1};
              bSel = IsChoiceSelected( strChoice, this.strOurAns, indObj );
              if( this.isCorrectSub(strChoice,indObj) > 0)
                bCorr = true;
              else 
                bCorr = false;
              if( ( bCorr && bSel ) )
                iNumCorr++;
            }
            else{
              bSel = IsChoiceSelected( strChoice, this.strOurAns );
              if( this.isCorrectSub(strChoice) > 0)
                bCorr = true;
              else 
                bCorr = false;
              if( ( bCorr && bSel ) || ( !bCorr && !bSel ) )
                iNumCorr++;
            }
          }
          return iNumCorr;
        }
        else if( this.strOurAns == this.arCorrAns.join(",") )
          return 1;
        break;

      case jTitleManager.SA:
      case jTitleManager.ES:
        return 0;

    case jTitleManager.FB:
        var strTemp;
        var oAns;
        var brc = 0;
        if (!this.bCaseSensitive) oAns = this.strOurAns.toString().toLowerCase().trim();
        else oAns = this.strOurAns.toString().trim();

        for (var i = 0; i < this.arCorrAns.length; i++) {
            if (!this.bCaseSensitive) strTemp = this.arCorrAns[i].toLowerCase().trim();
            else strTemp = this.arCorrAns[i].trim();
            if (this.bAnyAnswer) { if (oAns == strTemp) return 1; }
            else { if (oAns.indexOf(strTemp) == -1) return 0; else brc = 1; }
        }
        return brc;
        break;
    case jTitleManager.NE:
        var oAns = parseFloat(this.strOurAns.replace(/,/g,""));
        var brc = 0;
        for (var i = 0; i < this.arRel.length; i++) {
            switch (parseInt(this.arRel[i])) {
                case jTitleManager.EQU: if (oAns == parseFloat(this.arCorrAns[i][0])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.BT_INC: if (oAns >= parseFloat(this.arCorrAns[i][0]) && i <= this.arRel.length-1 && oAns <= parseFloat(this.arCorrAns[i][1])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.BT_EXC: if (oAns > parseFloat(this.arCorrAns[i][0]) && i <= this.arRel.length-1 && oAns < parseFloat(this.arCorrAns[i][1])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.GRT: if (oAns > parseFloat(this.arCorrAns[i][0])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.GTE: if (oAns >= parseFloat(this.arCorrAns[i][0])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.LST: if (oAns < parseFloat(this.arCorrAns[i][0])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.LSTE: if (oAns <= parseFloat(this.arCorrAns[i][0])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
                case jTitleManager.NEQU: if (oAns != parseFloat(this.arCorrAns[i][0])) { if (this.bAnyAnswer) return 1; else brc = 1; } else { brc = 0; } break;
            }
            if( this.separator == 'and' && !brc )
              break;
        }
        return brc;
        break;

      case jTitleManager.MT:
        var tmpOurAns = this.strOurAns + ',';
        var iNumCorr = 0;
        var arCorrPairs = new Array();
        for( var i=0; i<this.arCorrAns.length; i++ )
        {
          var thisCorrAns = this.arCorrAns[i];
          if ( (typeof thisCorrAns == "object") && thisCorrAns.length > 1 )
            thisCorrAns = thisCorrAns.join("-");
          thisCorrAns += ",";
          arCorrPairs.push(thisCorrAns);
        }
        for( var i=0; i<arCorrPairs.length; i++ )
        {
          if( tmpOurAns.indexOf(arCorrPairs[i]) != -1 )
            iNumCorr += 1;
          else
          {
            if( !this.bGradeInd )
              return 0;
          }
        }
        if( this.bGradeInd )
          return iNumCorr;
        else
          return 1;
        break;

      case jTitleManager.DD: //LD-5041 - Update the grading of DD questions
        var tmpOurAns =  ',' + this.strOurAns + ',';
		var iNumCorr = 0;
		var tempStrCorrAns = ',' + this.getCorrectAnswer() + ',';
        for( var i=0; i<this.arChoices.length; i++ )
        {
		  var thisChoice = ',' + this.arChoices[i] + '-';
		  if( tempStrCorrAns.indexOf( thisChoice ) >= 0 )	
		  {
			  var bMatched = false;
			  for ( var j=0; !bMatched && j<this.arCorrAns.length; j++ )
			  {
				var thisCorrAns = this.arCorrAns[j];
				if ( thisCorrAns[0] == this.arChoices[i] )
				{
					thisCorrAns = ','+thisCorrAns.join("-")+',';
					if( tmpOurAns.indexOf( thisCorrAns ) != -1 )			
						bMatched = true;
				}
			  }
			  if ( bMatched ) 
				  iNumCorr++
			  else if( !this.bGradeInd )
				  return 0;
		  }
		  else // if( tempStrCorrAns.indexOf( thisChoice ) == -1 )	
		  {
			if( tmpOurAns.indexOf( thisChoice ) == -1 ||
			    tmpOurAns.indexOf( thisChoice + '(na)') != -1 )			
				iNumCorr++;
			else if( !this.bGradeInd )
				return 0;
		  }		
		}

        if( this.bGradeInd )
          return iNumCorr;
        else
          return 1;
        break;

      case jTitleManager.IN:
        return 1;
    }
  }

  return 0;
}

function GetMatchingPairStr( strQNum, inp )
{
  var strFormat = ",";
  var strTemp   = ",";
  var strPair   = "";
  var loc;
  var next;

  strTemp += inp + ",";

  strFormat += strQNum + "-";

  loc = strTemp.indexOf( strFormat );
  if( loc < 0 )
    return strPair;

  next = strTemp.indexOf( ",", loc+1);
  strPair = strTemp.substring( loc+1, next );
  return strPair;
}

function IsChoiceSelected( strCho, inp, indObj )
{
  var spl = inp.split(',');
  var i;
  for( i=0; i<spl.length; i++ )
  {
	if( spl[i]==strCho )
	  break;	
  }
  
  if( indObj )
  {
	if( i<spl.length )
		indObj.i = i;
	else
		indObj.i = -1;
  }
	
  if( i >= spl.length )
    return false;

  return true;
}

TQPr.isCorrectSub = function( oc, indObj )
{
  if( !this.bSurvey )
  {
    if( oc != null && oc.length > 0 )
    {
       for( var i=0; i<this.arCorrAns.length; i++ )
       {
         if( oc == this.arCorrAns[i] )
         {
           if( indObj )
           {
			 indObj.correcti=i;
             if( indObj.i == i )
               return 1;
             else
               return 0;
           }
           else
             return 1;
         }
       }
    }
  }
  return 0;
}

TQPr.getNumTFQs = function()
{
  if( !this.bSurvey )
  {
    if( this.type == jTitleManager.TF ) 
      return this.weight;
  }
  return 0;
}

TQPr.getNumCorrectTFQs = function()
{
  if( !this.bSurvey )
  {
    if( this.type == jTitleManager.TF )
      return this.isCorrect() * this.weight;
  }
  return 0;
}

TQPr.getNumMCQs = function()
{
  var numQ = 0;

  if( !this.bSurvey )
  {
    switch( this.type )
    {
      case jTitleManager.MC:
      case jTitleManager.FB:
      case jTitleManager.HS:
      case jTitleManager.NE:
      case jTitleManager.MR:
      case jTitleManager.DD:
      case jTitleManager.MT:
        numQ = 1;
        if( this.bGradeInd )
          numQ = this.arChoices.length;
        break;
    }
    numQ *= this.weight;
  }
  return numQ;
}

TQPr.getNumCorrectMCQs = function()
{
  var numC = 0;

  if( !this.bSurvey )
  {
    switch( this.type )
    {
      case jTitleManager.MC:
      case jTitleManager.FB:
      case jTitleManager.HS:
      case jTitleManager.DD:
      case jTitleManager.MT:
      case jTitleManager.NE:
      case jTitleManager.MR:
        numC = this.isCorrect();
        break;
    }

    numC *= this.weight;
  }

  return numC;
}

TQPr.gradeQs = function( arVars )
{
  var idx;

  this.strOurAns = "";
  this.iOurScore = 0;

  if( this.type != jTitleManager.UNK )
  {
    for( idx = 0; idx < arVars.length; idx++ )
    {
      if( arVars[idx].vn == this.varName )
      {
        this.strOurAns = arVars[idx].vv;
        break;
      }
    }
  
    if( !this.bSurvey )
    {
      this.iOurScore = this.isCorrect();
      this.iOurScore *= this.weight;
    }
  }
}


TQPr.createTextResults = function (txtRes, bQN, bAG, bEm) {
    var subidx;
    var strTemp;
    var lineBreak = "<br />";
	
    if( typeof(bEm) != "undefined" && bEm )
        lineBreak = "\r\n";

    if (this.type != jTitleManager.UNK) {
        bQN++;

        txtRes.add(trivstrQ + bQN + lineBreak + this.text + lineBreak);
        switch (this.type) {
            case jTitleManager.TF:
            case jTitleManager.MC:
            case jTitleManager.HS:
            case jTitleManager.LK:
            case jTitleManager.OR:
            case jTitleManager.MR:
                if (bAG && !this.bSurvey) {
                    if (this.bGradeInd) {
                        var bSel;
                        var strChoice;
                        for (subidx = 0; subidx < this.arChoices.length; subidx++) {
                            strChoice = this.arChoices[subidx];
                            if( this.type==jTitleManager.OR )
							{
								var indObj = { i:-1, correcti:-1};
								bSel = IsChoiceSelected(strChoice.replace(/,/g,"&#44"), this.strOurAns, indObj);
								if ( this.isCorrectSub(strChoice.replace(/,/g,"&#44"),indObj) > 0) {
									txtRes.add(trivstrYAC + strChoice + "=" + (indObj.i+1).toString() + lineBreak);
								}
								else {
									txtRes.add(trivstrYA);
									if (!bSel)
										txtRes.add(trivstrNA);
									else
										txtRes.add(strChoice + "=" + (indObj.i+1).toString() );

									txtRes.add(lineBreak + trivstrCA + (indObj.correcti+1).toString() + lineBreak);
								}
							}
							else
							{
								bSel = IsChoiceSelected(strChoice.replace(/,/g,"&#44"), this.strOurAns);
								if ( this.isCorrectSub(strChoice.replace(/,/g,"&#44")) > 0 ) {
									if (bSel)
										txtRes.add(trivstrYACS + strChoice + lineBreak);
									else
										txtRes.add(trivstrYAINS + strChoice + lineBreak);
								}
								else {
									if (bSel)
										txtRes.add(trivstrYAIS + strChoice + lineBreak);
									else
										txtRes.add(trivstrYACNS + strChoice + lineBreak);
								}
							}
                            if (subidx < this.arChoices.length - 1) {
                                bQN++;
                                txtRes.add(lineBreak + trivstrQ + bQN + lineBreak + this.text + lineBreak);
                            }
                        }
                    }
                    else {
                        if (this.isCorrect() > 0)
                            txtRes.add(trivstrYAC + this.strOurAns + lineBreak);
                        else {
                            txtRes.add(trivstrYA);
                            if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                                txtRes.add(trivstrNA);
                            else
                                txtRes.add(this.strOurAns);

                            txtRes.add(lineBreak + trivstrCA + this.arCorrAns.join(",") + lineBreak);
                        }
                    }
                }
                else {
                    txtRes.add(trivstrYA);
                    if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                        txtRes.add(trivstrNA);
                    else
                        txtRes.add(this.strOurAns);
                    txtRes.add(lineBreak);
                }
                break;

            case jTitleManager.FB:
                if (bAG && !this.bSurvey) {
                    if (this.isCorrect() > 0)
                        txtRes.add(trivstrYAC + this.strOurAns + lineBreak);
                    else 
                    {
                        var sepRep;
                        if( this.bAnyAnswer )
                            sepRep = " " + trivstrOr + " ";
                        else
                            sepRep = " " + trivstrAnd + " ";
                        
                        strTemp = this.arCorrAns.join(sepRep);
                        txtRes.add(trivstrYA);
                        if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                            txtRes.add(trivstrNA);
                        else
                            txtRes.add(this.strOurAns);
                        txtRes.add(lineBreak + trivstrCA + strTemp + lineBreak);
                    }
                }
                else {
                    txtRes.add(trivstrYA);
                    if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                        txtRes.add(trivstrNA);
                    else
                        txtRes.add(this.strOurAns);
                    txtRes.add(lineBreak);
                }
                break;
            case jTitleManager.NE:
                if (bAG && !this.bSurvey) {
                    if (this.isCorrect() > 0)
                        txtRes.add(trivstrYAC + this.strOurAns + lineBreak);
                    else {
                        strTemp = this.getNEResult();

                        txtRes.add(trivstrYA);
                        if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                            txtRes.add(trivstrNA);
                        else
                            txtRes.add(this.strOurAns);
                        txtRes.add(lineBreak + trivstrCA + strTemp + lineBreak);
                    }
                }
                else {
                    txtRes.add(trivstrYA);
                    if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                        txtRes.add(trivstrNA);
                    else
                        txtRes.add(this.strOurAns);
                    txtRes.add(lineBreak);
                }
                break;

            case jTitleManager.ES:
            case jTitleManager.SA:
                txtRes.add(trivstrYA);
                if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                    txtRes.add(trivstrNA);
                else
                    txtRes.add(this.strOurAns);
                txtRes.add(lineBreak);
                break;

            case jTitleManager.DD:
            case jTitleManager.MT:
                {
                    if (bAG) {
                        var strQNum;
                        if (this.bGradeInd) {
                            for (subidx = 0; subidx < this.arCorrAns.length; subidx++) {
								 if ( typeof this.arCorrAns[subidx] == 'string' )
									strQNum = this.arCorrAns[subidx].substring( 0, this.arCorrAns[subidx].indexOf( '-' ) );
								 else 
									strQNum = this.arCorrAns[subidx][0];
                                strTemp = GetMatchingPairStr(strQNum, this.strOurAns);

                                if (this.isCorrectSub(strTemp) > 0)
                                    txtRes.add(trivstrYAC + strTemp + lineBreak);
                                else {
                                    txtRes.add(trivstrYA);
                                    if (strTemp == null || strTemp.length == 0)
                                        txtRes.add(trivstrNA);
                                    else
                                        txtRes.add(strTemp);

                                    txtRes.add(lineBreak + trivstrCA + this.arCorrAns[subidx] + lineBreak);
                                }

                                if (subidx < this.arCorrAns.length - 1) {
                                    bQN++;
                                    txtRes.add(lineBreak + trivstrQ + bQN + lineBreak + this.text + lineBreak);
                                }
                            }
                        }
                        else {
                            if (this.isCorrect() > 0)
                                txtRes.add(trivstrYAC + this.arCorrAns.join(",") + lineBreak);
                            else {
                                txtRes.add(trivstrYA);
                                if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                                    txtRes.add(trivstrNA);
                                else {
                                    for (subidx = 0; subidx < this.arCorrAns.length; subidx+=2) {
                                        strQNum = this.arCorrAns[subidx];
                                        strTemp = GetMatchingPairStr(strQNum, this.strOurAns);

                                        if (strTemp == null || strTemp.length == 0)
                                            txtRes.add(trivstrNA);
                                        else
                                            txtRes.add(strTemp);

                                        if (subidx < this.arCorrAns.length - 1)
                                            txtRes.add(",");
                                    }
                                }

                                txtRes.add(lineBreak + trivstrCA + this.arCorrAns.join(",") + lineBreak);
                            }
                        }
                    }
                    else {
                        if (this.bGradeInd) {
                            for (subidx = 0; subidx < this.arCorrAns.length; subidx++) {
                                strQNum = this.arCorrAns[subidx][0];
                                strTemp = GetMatchingPairStr(strQNum, this.strOurAns);

                                txtRes.add(trivstrYA);
                                if (strTemp == null || strTemp.length == 0)
                                    txtRes.add(trivstrNA);
                                else
                                    txtRes.add(strTemp);
                                txtRes.add(lineBreak);

                                if (subidx < this.arCorrAns.length - 1) {
                                    bQN++;
                                    txtRes.add(lineBreak + trivstrQ + bQN + lineBreak + this.text + lineBreak);
                                }
                            }
                        }
                        else {
                            txtRes.add(trivstrYA);
                            if (this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~")
                                txtRes.add(trivstrNA);
                            else {
                                for (subidx = 0; subidx < this.arCorrAns.length; subidx++) {
                                    strQNum = this.arCorrAns[subidx][0];
                                    strTemp = GetMatchingPairStr(strQNum, this.strOurAns);

                                    if (strTemp == null || strTemp.length == 0)
                                        txtRes.add(trivstrNA);
                                    else
                                        txtRes.add(strTemp);

                                    if (subidx < this.arCorrAns.length - 1)
                                        txtRes.add(",");
                                }
                            }

                            txtRes.add(lineBreak + trivstrCA + this.arCorrAns.join(",") + lineBreak);
                        }
                    }
                    break;
                }
        }

        txtRes.add(lineBreak);
    }

    return bQN;
}

TQPr.createCGIResults = function( pl, bQN, bGD, bIsNewGDocURL, arGDocs )
{
  var subidx;
  var loc;
  var strTemp;

  var sQText = "";
  var sAnswer = "";
  var sCAnswer = "";
  var sQType = "";
  var sQID = "";
  var sSection = "";
  var sCurr;

  if(bGD == undefined) bGD = false;
  if(bIsNewGDocURL == undefined) bIsNewGDocURL = false;
  bQN++;

  sCurr = bQN;

  sQText = "Question" + sCurr;
  sAnswer = "Answer" + sCurr;
  sCAnswer = "CorrectAnswer" + sCurr;
  sQType = "QuestionType" + sCurr;
  sQID = "QuestionID" + sCurr;
  sSection = "Section" + sCurr;

  if( !bGD ) pl.addparm( sQText, this.text );
  if( !bGD ) pl.addparm( sQType, this.type );
  if( !bGD ) pl.addparm( sQID, this.id );
  if( this.iSectionId > 0 && !bGD )
    pl.addparm( sSection, this.iSectionId );

  switch( this.type )
  {
    case jTitleManager.TF:
    case jTitleManager.MC:
    case jTitleManager.HS:
    case jTitleManager.OR:
    case jTitleManager.MR:
      if( this.bGradeInd )
      {
        for( subidx = 0; subidx < this.arChoices.length; subidx++ )
        {
          if( this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~" )
            strTemp = trivstrNA;
          else
          {
            if( IsChoiceSelected( this.arChoices[subidx], this.strOurAns ) )
              strTemp = this.arChoices[subidx];
            else
              strTemp = trivstrNA + ', ' + this.arChoices[subidx];
          }

          if( bGD ) {
            if ( bIsNewGDocURL ) {
              if ( arGDocs && pl.count < arGDocs.length )
                pl.addparm( 'entry_'+ arGDocs[pl.count], strTemp );
              else 
                pl.addparm( 'entry_1'+padDigits(pl.count,6), strTemp );
            }
            else pl.addparm( 'entry.'+(pl.count-1)+'.single', strTemp );
          }
          else pl.addparm( sAnswer, strTemp );

          if( !bGD ) pl.addparm( sCAnswer, this.arCorrAns.join(',') );

          if( subidx < this.arChoices.length - 1 )
          {
            bQN++;

            sCurr = bQN;

            sQText = "Q" + sCurr;
            sAnswer = "Answer" + sCurr;
            sCAnswer = "CorrectAnswer" + sCurr;
            sQType = "QuestionType" + sCurr;
            sQID = "QuestionID" + sCurr;
            sSection = "Section" + sCurr;

            if( !bGD ) pl.addparm( sQText, this.text );
            if( !bGD ) pl.addparm( sQType, this.type );
            if( !bGD ) pl.addparm( sQID,  this.id );
            if( this.iSectionId > 0 && !bGD )
              pl.addparm( sSection, this.iSectionId );
          }
        }
      }
      else
      {
        if( this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~" )
          strTemp = trivstrNA;
        else
          strTemp = this.strOurAns;
  
        if( bGD ) {
          if( bIsNewGDocURL ) {
            if ( arGDocs && pl.count < arGDocs.length )
              pl.addparm( 'entry_'+ arGDocs[pl.count], strTemp );
            else 
              pl.addparm( 'entry_1'+padDigits(pl.count,6), strTemp );
          }
          else pl.addparm( 'entry.'+(pl.count-1)+'.single', strTemp );
        }
        else pl.addparm( sAnswer, strTemp );
        if( !this.bSurvey && !bGD )
          pl.addparm( sCAnswer, this.arCorrAns.join(',') );
      }
      break;

    case jTitleManager.FB:
    case jTitleManager.NE:
      if( this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~" )
        strTemp = trivstrNA;
      else
        strTemp = this.strOurAns;

      if( bGD ) {
        if( bIsNewGDocURL ) {
          if ( arGDocs && pl.count < arGDocs.length )
            pl.addparm( 'entry_'+arGDocs[pl.count], strTemp );
          else 
            pl.addparm( 'entry_1'+padDigits(pl.count,6), strTemp );
        }
        else pl.addparm( 'entry.'+(pl.count-1)+'.single', strTemp );
      }
      else pl.addparm( sAnswer, strTemp );
      if( !this.bSurvey && !bGD )
      {
        strTemp = this.arCorrAns.length?this.arCorrAns[0]:'';

        pl.addparm( sCAnswer, strTemp );
      }
      break;

    case jTitleManager.ES:
    case jTitleManager.SA:
      if( this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~" )
        strTemp = trivstrNA;
      else
        strTemp = this.strOurAns;

    if( bGD ){
      if ( bIsNewGDocURL ) {
        if ( arGDocs && pl.count < arGDocs.length )
          pl.addparm( 'entry_'+arGDocs[pl.count], strTemp );
        else 
          pl.addparm( 'entry_1'+padDigits(pl.count,6), strTemp );
      }
      else pl.addparm( 'entry.'+(pl.count-1)+'.single', strTemp );
    }
    else pl.addparm( sAnswer, strTemp );

      break;

    case jTitleManager.DD:
    case jTitleManager.MT:
      var strQNum;

      if( this.bGradeInd )
      {
        for( subidx = 0; subidx < this.arCorrAns.length; subidx++ )
        {
		  if ( typeof this.arCorrAns[subidx] == 'string' )
		    strQNum = this.arCorrAns[subidx].substring( 0, this.arCorrAns[subidx].indexOf( '-' ) );
		  else 
		    strQNum = this.arCorrAns[subidx][0];
          strTemp = GetMatchingPairStr( strQNum, this.strOurAns );

          if( strTemp == null || strTemp.length == 0 )
            strTemp = trivstrNA;

          pl.addparm( sAnswer, strTemp );

          if( !bGD ) pl.addparm( sCAnswer, this.arCorrAns[subidx] );

          if( subidx < this.arCorrAns.length - 1 )
          {
            bQN++;

            sCurr = bQN;

            sQText = "Q" + sCurr;
            sAnswer = "Answer" + sCurr;
            sCAnswer = "CorrectAnswer" + sCurr;
            sQType = "QuestionType" + sCurr;
            sQID = "QuestionID" + sCurr;
            sSection = "Section" + sCurr;

            if( !bGD ) pl.addparm( sQText, this.text );
            if( !bGD ) pl.addparm( sQType, this.type );
            if( !bGD ) pl.addparm( sQID,  this.id );
            if( this.iSectionId > 0 && !bGD )
              pl.addparm( sSection, this.iSectionId );
          }
        }
      }
      else
      {
        if( this.strOurAns == null || this.strOurAns.length == 0 || this.strOurAns == "~~~null~~~" )
          strTemp = trivstrNA;
        else
        {
          var strTemp2;
          strTemp = "";
          for( subidx = 0; subidx < this.arCorrAns.length; subidx++ )
          {
		    if ( typeof this.arCorrAns[subidx] == 'string' )
  		      strQNum = this.arCorrAns[subidx].substring( 0, this.arCorrAns[subidx].indexOf( '-' ) );
		    else 
		      strQNum = this.arCorrAns[subidx][0];
            strTemp2 = GetMatchingPairStr( strQNum, this.strOurAns );

            if( strTemp2 == null || strTemp2.length == 0 )
              strTemp += trivstrNA;
            else
              strTemp += strTemp2;

            if( subidx < this.arCorrAns.length - 1 )
              strTemp += ",";
          }
        }
        if( bGD ) {
          if ( bIsNewGDocURL ) {
            if ( arGDocs && pl.count < arGDocs.length )
              pl.addparm( 'entry_'+arGDocs[pl.count], strTemp );
            else 
              pl.addparm( 'entry_1'+padDigits(pl.count,6), strTemp );
          }
          else pl.addparm( 'entry.'+(pl.count-1)+'.single', strTemp );
        }
        else pl.addparm( sAnswer, strTemp );

        if( !bGD ) pl.addparm( sCAnswer, this.arCorrAns.join(',') );
      }
      break;
    case jTitleManager.LK:
      var strQNum;
	  
        for( subidx = 0; subidx < this.arStmtNms.length; subidx++ )
        {
          strQNum = this.arStmtNms[subidx];
          strTemp = GetMatchingPairStr( strQNum, this.strOurAns );
		  if ( strTemp.length > strQNum.length )
			   strTemp = strTemp.substring(strQNum.length+1);

          if( bGD ) {
            if ( bIsNewGDocURL ) {
              if ( arGDocs && pl.count < arGDocs.length )
                pl.addparm( 'entry_'+arGDocs[pl.count], strTemp );
              else 
                pl.addparm( 'entry_1'+padDigits(pl.count,6), strTemp );
            }
	    else pl.addparm( 'entry.'+(pl.count-1)+'.single', strTemp );
          }
          else pl.addparm( sAnswer, strTemp );


          if( !bGD ) pl.addparm( sCAnswer, this.arCorrAns.join(',') );

          if( subidx < this.arStmtNms.length - 1 )
          {
            bQN++;

            sCurr = bQN;

            sQText = "Q" + sCurr;
            sAnswer = "Answer" + sCurr;
            sCAnswer = "CorrectAnswer" + sCurr;
            sQType = "QuestionType" + sCurr;
            sQID = "QuestionID" + sCurr;
            sSection = "Section" + sCurr;

            if( !bGD ) pl.addparm( sQText, this.text );
            if( !bGD ) pl.addparm( sQType, this.type );
            if( !bGD ) pl.addparm( sQID,  this.id );
            if( this.iSectionId > 0 && !bGD )
              pl.addparm( sSection, this.iSectionId );
          }
        }
      break;
  }

  return bQN;
}

TQPr.getNEResult = function () {
    var strTemp = "";
    var y = 0;
    for (var i = 0; i < this.arRel.length; i++) {
        var rel;
        var sep = " " + this.separator + " ";
        if (i == 0) sep = "";

        switch (parseInt(this.arRel[i])) {
            case jTitleManager.EQU: strTemp += sep + "= " + this.arCorrAns[y]; break;
            case jTitleManager.BT_INC: 
              strTemp += sep;
              if( this.separator != trivstrAnd )
                strTemp += "( ";
              strTemp += ">= " + this.arCorrAns[y] + " " + trivstrAnd + " <= " + this.arCorrAns[y + 1]; 
              if( this.separator != trivstrAnd )
                strTemp += " )";
              y++; 
              break;
            case jTitleManager.BT_EXC: 
              strTemp += sep;
              if( this.separator != trivstrAnd )
                strTemp += "( ";
              strTemp += "> " + this.arCorrAns[y] + " " + trivstrAnd + " < " + this.arCorrAns[y + 1]; 
              if( this.separator != trivstrAnd )
                strTemp += " )";
              y++; 
              break;
            case jTitleManager.GRT: strTemp += sep + "> " + this.arCorrAns[y]; break;
            case jTitleManager.GTE: strTemp += sep + ">= " + this.arCorrAns[y]; break;
            case jTitleManager.LST: strTemp += sep + "< " + this.arCorrAns[y]; break;
            case jTitleManager.LSTE: strTemp += sep + "<= " + this.arCorrAns[y]; break;
            case jTitleManager.NEQU: strTemp += sep + "!= " + this.arCorrAns[y]; break;
        }
        y++;
    }
    return strTemp;
}