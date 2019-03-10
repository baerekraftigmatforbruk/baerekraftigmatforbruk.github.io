/**************************************************
Trivantis (http://www.trivantis.com)
**************************************************/

var ocmOrig = document.oncontextmenu
var ocmNone = new Function( "return false" )

//Result Object
function ObjResult(n,tn,a,ba,x,y,w,h,v,z,d,fb,cl) {
  this.name = n
  this.altName = a
  this.testName = tn
  this.bAllow = ba
  this.x = x
  this.y = y
  this.w = w
  this.ow = w;
  this.h = h
  this.oh = h;
  this.v = v
  this.z = z
  this.bFixedPosition = false;
  this.obj = this.name+"Object"
  this.alreadyActioned = false;
  this.testName;
  eval(this.obj+"=this")
  if ( d!=null && d!="undefined" )
    this.divTag = d;
  else  
    this.divTag = "div";
  this.addClasses = cl;
  this.bBottom = fb?true:false;
  this.m_testResProp = [];
  this.m_corrResProp = [];
  this.m_incorrResProp = [];
  this.m_unansResProp = [];
  this.bInherited = false;
}

function ObjResultActionGoTo( destURL, destFrame ) {
  this.objLyr.actionGoTo( destURL, destFrame );
}

function ObjResultActionGoToNewWindow( destURL, name, props ) {
  this.objLyr.actionGoToNewWindow( destURL, name, props );
}

function ObjResultActionPlay( ) {
  this.objLyr.actionPlay();
}

function ObjResultActionStop( ) {
  this.objLyr.actionStop();
}

function ObjResultActionShow( ) {
  if( !this.isVisible() )
    this.onShow();
}

function ObjResultActionHide( ) {
  if( this.isVisible() )
    this.onHide();
}

function ObjResultActionLaunch( ) {
  this.objLyr.actionLaunch();
}

function ObjResultActionExit( ) {
  this.objLyr.actionExit();
}

function ObjResultActionChangeContents(bResp) {
  
  if(typeof(bResp) == "undefined")
	  this.changeContFired = true;
  
}

function ObjResultActionTogglePlay( ) {
  this.objLyr.actionTogglePlay();
}

function ObjResultActionToggleShow( ) {
  if(this.objLyr.isVisible()) this.actionHide();
  else this.actionShow();
}

function ObjResultSizeTo( w, h, bResp ){
	var tempObj = {xOffset:0, yOffset:0, width: w, height: h, xOuterOffset:0, yOuterOffset:0};
					
	if(this.objLyr)
	{
		if(typeof(bResp) == "undefined")
			this.objLyr.clipTo(((tempObj.yOffset<0)?tempObj.yOffset:0), tempObj.width, tempObj.height, ((tempObj.xOffset<0)?tempObj.xOffset:0));
	}
}


{ // Setup prototypes
var p=ObjResult.prototype
p.build = ObjResultBuild
p.init = ObjResultInit
p.activate = ObjResultActivate
p.actionGoTo = ObjResultActionGoTo
p.actionGoToNewWindow = ObjResultActionGoToNewWindow
p.actionPlay = ObjResultActionPlay
p.actionStop = ObjResultActionStop
p.actionShow = ObjResultActionShow
p.actionHide = ObjResultActionHide
p.actionLaunch = ObjResultActionLaunch
p.actionExit = ObjResultActionExit
p.actionChangeContents = ObjResultActionChangeContents
p.actionTogglePlay = ObjResultActionTogglePlay
p.actionToggleShow = ObjResultActionToggleShow
p.writeLayer = ObjResultWriteLayer
p.onShow = ObjResultOnShow
p.onHide = ObjResultOnHide
p.isVisible = ObjResultIsVisible
p.sizeTo = ObjResultSizeTo
p.setCustomImage = ObjResultCustomImage
p.setCustomText = ObjResultCustomText
p.loadProps = ObjLoadProps
p.respChanges = ObjRespChanges
p.buildResHeader = ObjBuildResultsHeader
p.buildResQuest = ObjBuildResultsQuestion
p.setTestResProps = ObjSetTestResProps
p.setCorrResProps = ObjSetCorrResProps
p.setInCorrResProps = ObjSetInCorrResProps
p.setUnansResProps = ObjSetUnansResProps
p.setHorzLine = ObjSetHorizontalLine
p.getTotalNumberOfQuestion = ObjResultGetTotalNumberOfQuestions
p.getQuestLayout = ObjGetQuestionLayout
p.getMultiRespLayout = ObjGetMultiResponseQuestionLayout
p.goToQuestion = ObjGoToQuestionPage
p.getQuestionPage = ObjGetQuestionPage
p.setTestVal	=  ObjResultSetTestVal
p.getChoiceStr = ObjResultGetChoiceString
p.buildQuestionMaster = ObjResultBuildQuestionMaster
p.growPage = ObjResultsGrowPage
p.getMasterProps = ObjResultGetMasterProperties
p.stopTestTimer = ObjResultStopTestTimer
p.setVerticalScroll = ObjResultsVerticalScroll
p.refresh = ObjResultsRefresh
p.getCSS = ObjResultsGetCSS
p.rv = ObjResultsRV
}

function ObjResultBuild() {
	this.loadProps();
	
	this.css = this.getCSS();
	
	this.div = ''
	this.div += '<' + this.divTag + ' id="'+this.name+'" ';
	
	//Used for preparing the multiple response question layout
	this.MRQuest = {};
  	
	if( this.altName ) 
		this.div += 'title="'+this.altName+'" alt="'+this.altName+'" ';
	else 
		this.div += 'title="" alt="" ';
	
	this.div += '></' + this.divTag + '>\n'
	
	this.m_totalCorr = 0;
	var titleMgr = getTitleMgrHandle();
	this.divInt = '';
	if(titleMgr && this.bAllow)		
	{
		//Test Is not yet loaded
		if(titleMgr.arTests.length == 0)
			titleMgr.loadTest(this.tsVal, this.testName);
			
		
		var testObj = titleMgr.arTests[titleMgr.getTIdx(this.testName)];
		
		if(testObj)
		{
			this.divInt += this.buildResHeader(testObj, titleMgr);
			var questLayouts = '';
			var questNum = 1;
			for (var index = 0; index < testObj.arRTPages.length; index++)
			{
				for (var i = 0; i< testObj.arRTPages[index].arQues.length; i++)
				{
					var thisLayout = this.buildResQuest(testObj.arRTPages[index].arQues[i], questNum, titleMgr);
					if ( thisLayout && thisLayout != "" )
					{
						if(this.m_bBetweenQuest)
							questLayouts+='<hr class="'+this.name+'HR">';
						questLayouts+= thisLayout;
					}
					questNum++;
				}
				if(this.m_bBetweenQuest && index == (testObj.arRTPages.length-1))
					questLayouts+='<hr class="'+this.name+'HR">';
			}
			var holder = '~~QuestPlaceHolder~~';
			var holderIdx = this.divInt.indexOf(holder);
			if(holderIdx >-1)
				this.divInt = [this.divInt.slice(0, holderIdx), questLayouts, this.divInt.slice(holderIdx+holder.length)].join('');

			holder = '~~TotalCorrect~~';
			holderIdx = this.divInt.indexOf(holder);
			if(holderIdx > -1)
				this.divInt = [this.divInt.slice(0, holderIdx), this.m_totalCorr, this.divInt.slice(holderIdx+holder.length)].join('');

		}
		else
			this.divInt = '<p style="color:rgb(255,0,0);font-size:150%;">'+trivstrERRLOAD+'</p>';
		
	}
	else
		this.divInt = '<p style="color:rgb(255,0,0);font-size:150%;">'+trivstrERRLOAD+'</p>';
	
	this.div = CreateHTMLElementFromString(this.div);
}

function ObjResultInit() {
  this.objLyr = new ObjLayer(this.name, null, null, this.div);
  if(!isSinglePagePlayerAvail() && !window.bTrivResponsive) adjustForFixedPositon(this);
}

function ObjResultActivate() {
	this.stopTestTimer();
	if( is.ns5 ) 
	{
		if(!this.objLyr.ele)
			this.objLyr.ele = getHTMLEleByID(this.name);
		
		this.objLyr.ele.innerHTML = this.divInt;	
	}
	else 
		this.objLyr.write( this.divInt );

	if(this.objLyr.ele == null)
		this.objLyr.ele = this.objLyr.event = getHTMLEleByID(this.name);

	this.objLyr.theObjTag = this.objLyr.ele;

	this.objLyr.objDiv = this.objLyr.ele;

	this.objLyr.theObj = this;
		
	if( this.objLyr && this.objLyr.styObj && !this.alreadyActioned )
		if( this.v ) 
			this.actionShow()

}

function ObjResultWriteLayer( newContents ) {
  if (this.objLyr) this.objLyr.write( newContents )
}

function ObjResultOnShow() {
  this.alreadyActioned = true;
  this.objLyr.actionShow();
}

function ObjResultOnHide() {
  this.alreadyActioned = true;
  this.objLyr.actionHide();
}

function ObjResultIsVisible() {
  return this.objLyr.isVisible()
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
			this.y = typeof(obj.y)!="undefined"?obj.y:this.y;
			this.w = typeof(obj.w)!="undefined"?obj.w:this.w;
			this.h = typeof(obj.h)!="undefined"?obj.h:this.h;
			this.stylemods = typeof(obj.stylemods)!="undefined"?obj.stylemods:null;
			this.bBottom = (typeof(obj.bOffBottom)!="undefined"?obj.bOffBottom:this.bBottom);
		}
	}
}

function ObjRespChanges()
{
	//Adjust the CSS
	FindAndModifyObjCSSBulk(this, this.stylemods);	
}

function ObjBuildResultsHeader(objTest, titleMgr)
{
	var tempStr = '';
	for(var index = 0; index < this.m_testResProp.length; index++)
	{
		switch(this.m_testResProp[index])
		{
			case "lmsstudentname":
				if(titleMgr.strAiccSN.length == 0)
					AICC_Student_Name.getValue();
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+Decode(titleMgr.strAiccSN)+'</span></p>';
			break;
			case "testname":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+objTest.strTestName+'</span></p>';
			break;
			case "sectionname":
				//Future
			break;
			case "pass":
				if((objTest.iStudScore >= objTest.iPassGrade))
					tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+trivstrPASS+'</span></p>';
			break;
			case "fail":
				if((objTest.iStudScore < objTest.iPassGrade))
					tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+trivstrFAIL+'</span></p>';
			break;
			case "testscore":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+(trivstrSCORE+objTest.iStudScore)+'%</span></p>';
			break;
			case "lowestpassscore":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+trivstrLPS+' '+objTest.iPassGrade+'</span></p>';
			break;
			case "timeintest":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+objTest.strElapsedTM+'</span></p>';
			break;
			case "datetime":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+(new Date()).toLocaleString()+'</span></p>';
			break;
			case "customtxt":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+this.m_testPropCustText+'</span></p>';
			break;
			case "questionplacement":
				tempStr += '~~QuestPlaceHolder~~';
			break;
			case "correctovrtotal":
				tempStr += '<p class="'+this.name+'generalsetting"><span class="'+this.name+this.m_testResProp[index]+'generalsetting">'+trivstrCOT+' ~~TotalCorrect~~/'+this.getTotalNumberOfQuestion(objTest)+'</span></p>';
			break;
			case "customimg":
				tempStr += '<img src="'+this.m_testPropImgSrc+'" alt="'+this.m_testPropImgAlt+'" style="width:'+this.m_testPropImgW+'px;height:'+this.m_testPropImgH+'px;">';
			break;
		}
	}
	
	return tempStr;
}

function ObjBuildResultsQuestion(objQuestion, qNum, titleMgr)
{
	var questLayout = '';
	if(objQuestion.bGradeInd)
	{
		questLayout = this.getMultiRespLayout(objQuestion, qNum, titleMgr);
	}
	else
	{
		if(objQuestion.strOurAns && objQuestion.strOurAns != '~~~null~~~' )
		{
			if(objQuestion.isCorrect() || objQuestion.weight == 0)
			{
				questLayout = this.getQuestLayout(objQuestion, qNum, "correctsetting",this.m_corrResProp, this.m_corrPropCustText, this.m_corrPropImgSrc, this.m_corrPropImgAlt, titleMgr, this.m_corrPropImgH, this.m_corrPropImgW);
				if(objQuestion.weight > 0)
					this.m_totalCorr+=1;
			}
			else
				questLayout = this.getQuestLayout(objQuestion, qNum, "incorrectsetting",this.m_incorrResProp, this.m_incorrPropCustText, this.m_incorrPropImgSrc, this.m_incorrPropImgAlt, titleMgr, this.m_incorrPropImgH, this.m_incorrPropImgW);
			
		}
		else
			questLayout = this.getQuestLayout(objQuestion, qNum, "unansweredsetting",this.m_unansResProp, this.m_unansPropCustText, this.m_unansPropImgSrc, this.m_unansPropImgAlt, titleMgr, this.m_unansPropImgH, this.m_unansPropImgW);
	}
	
	return questLayout;
}

function ObjGetQuestionLayout(objQuestion, qNum, settingName, propArray, propStr, propImg, propImgStr, titleMgr, propImageH, propImageW)
{
	var tempStr = '';
	for(var index = 0; index < propArray.length; index++)
	{
		switch(propArray[index])
		{
			case "questionnumber":
				tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrQ+qNum)+'</span></p>';
			break;
			case "questionname":
				tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+objQuestion.name+'</span></p>';
			break;
			case "questionstatus":
				if(objQuestion.weight > 0 || objQuestion.strOurAns == null || objQuestion.strOurAns.length == 0)
				{
					if(objQuestion.strOurAns && objQuestion.strOurAns != '~~~null~~~')
						tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(objQuestion.isCorrect()?trivstrCORR:trivstrINCORR)+'</span></p>';
					else
						tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+trivstrNA+'</span></p>';
				}
			break;
			case "questiontext":
				tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+objQuestion.text.replace( /\\r/g, '<br />')+'</span></p>';
			break;
			case "correctanswer":
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrCA+objQuestion.getCorrectAnswer())+'</span></p>';
			break;
			case "answerchoices":
				if(objQuestion.type == titleMgr.TF || objQuestion.type == titleMgr.MC || objQuestion.type == titleMgr.MR)
					tempStr += this.getChoiceStr(objQuestion,this.name+propArray[index]+settingName);
			break;
			case "studentanswer":
				if(objQuestion.strOurAns && objQuestion.strOurAns != '~~~null~~~')
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrYA+objQuestion.strOurAns)+'</span></p>';
				else
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrYA+trivstrNA)+'</span></p>';
			break;
			case "textfeedback":
				if(objQuestion.strOurAns && objQuestion.strOurAns != '~~~null~~~')
					if((objQuestion.isCorrect()?objQuestion.corrFeedback:objQuestion.incorrFeedback))
						tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+trivstrFDB+' '+(objQuestion.isCorrect()?objQuestion.corrFeedback: objQuestion.incorrFeedback)+'</span></p>';
			break;
			case "numberofattempts":
				if(titleMgr.findVariable('VarTriQA'+objQuestion.id) >-1)
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrYA+objQuestion.strOurAns)+'</span></p>';
			break;
			case "customtxt":
				tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+propStr+'</span></p>';
			break;
			case "maxattepts":
				//Future
			break;
			case "linktoquestion":
				var linktoQuestStr = this.name+'Object.goToQuestion('+objQuestion.id+');';
				tempStr += '<p class="'+this.name+settingName+'"><a href="javascript:'+linktoQuestStr+'"><span class="'+this.name+propArray[index]+settingName+'">'+trivstrGoToQ+'</span></a></p>';
			break;
			case "linktofirstpage":
				var linktoPageStr = this.name+'Object.goToQuestion(-1);';
				tempStr += '<p class="'+this.name+settingName+'"><a href="javascript:'+linktoPageStr+'"><span class="'+this.name+propArray[index]+settingName+'">'+trivstrLTP+'</span></a></p>';
			break;
			case "customimg":
				tempStr += '<img src="'+propImg+'" alt="'+propImgStr+'" style="width:'+propImageW+'px;height:'+propImageH+'px;">';
			break;
		}
	}
	
	return tempStr;
}

function MultRespCorrStatus(objQuestion, titleMgr)
{
	var stuAns = objQuestion.strOurAns?objQuestion.strOurAns.split(','):[];
	var corrCount = 0;
	
	if(objQuestion.type == titleMgr.HS || objQuestion.type == titleMgr.MR)	// Hot Spot && Multiple Response 
	{
		for(var corIndex = 0; corIndex < objQuestion.arCorrAns.length; corIndex++)
		{
			for(var stuIndex = 0; stuIndex < stuAns.length; stuIndex++)
			{
				if(objQuestion.arCorrAns[corIndex] == stuAns[stuIndex])
					corrCount++;
			}
		}
	}
	else if(objQuestion.type == titleMgr.DD)	// Drag and Drop
	{
	    corrCount = objQuestion.isCorrect(); // LD-5041 
	}
	else	//Rank / Sequence (Ordinal)
	{
		for(var index = 0; index < objQuestion.arCorrAns.length; index++)
		{
			if(objQuestion.arCorrAns[index] == stuAns[index])
					corrCount++;
		}
	}
	
	if(corrCount == 0)
		return 0;	//All Wrong
	else if( (objQuestion.type == titleMgr.DD &&
               corrCount == objQuestion.arChoices.length) || // LD-5041 
 	         (objQuestion.type != titleMgr.DD && 
               corrCount == objQuestion.arCorrAns.length) )
 		return 1;	//All Correct		  		
	else
		return 2;	//Some Wrong Some Right
}

function ObjGetMultiResponseQuestionLayout(objQuestion, qNum, titleMgr)
{
	var str = '';
	
	if(this.MRQuest[objQuestion.id])
		return str;
	else
		this.MRQuest[objQuestion.id] = true;
	
	var subQuestNum = 1;
	var masterLevelProperties = this.buildQuestionMaster(objQuestion.type, titleMgr);
	var masterPropArr = this.getMasterProps(objQuestion.type, titleMgr);
	
	
	if( (MultRespCorrStatus(objQuestion, titleMgr) == 1 && this.m_corrResProp.length == 0)
		|| (MultRespCorrStatus(objQuestion, titleMgr) == 0 && this.m_incorrResProp.length == 0))
		return;
		
	for(var index = 0; index < masterPropArr.length; index++)
	{
		//Only go throught the switch if there is a property
		if(masterLevelProperties[masterPropArr[index]])
		{
			switch(masterPropArr[index])
			{
				case "questionnumber":
					str += '<p class="'+this.name+'generalsetting"><span class="'+masterLevelProperties[masterPropArr[index]]+'">'+(trivstrQ+qNum)+'</span></p>';
				break;
				case "questionname":
					str += '<p class="'+this.name+'generalsetting"><span class="'+masterLevelProperties[masterPropArr[index]]+'">'+objQuestion.name+'</span></p>';
				break;
				case "questiontext":
					str += '<p class="'+this.name+'generalsetting"><span class="'+masterLevelProperties[masterPropArr[index]]+'">'+objQuestion.text.replace( /\\r/g, '<br />')+'</span></p>';
				break;
				case "answerchoices":
					str += this.getChoiceStr(objQuestion,masterLevelProperties[masterPropArr[index]]);
				break;
				case "linktoquestion":
					var linktoQuestStr = this.name+'Object.goToQuestion('+objQuestion.id+');';
					str += '<p class="'+this.name+'generalsetting"><a href="javascript:'+linktoQuestStr+'"><span class="'+masterLevelProperties[masterPropArr[index]]+'">'+trivstrGoToQ+'</span></a></p>';
				break;
				case "linktofirstpage":
					var linktoPageStr = this.name+'Object.goToQuestion(-1);';
					str += '<p class="'+this.name+'generalsetting"><a href="javascript:'+linktoPageStr+'"><span class="'+masterLevelProperties[masterPropArr[index]]+'">'+trivstrLTP+'</span></a></p>';
				break;
			}
		}
	}

	
	var tempStr = '';
	var settingName = '';
	var bIsCorrect = false;
	var bNotAnswered = false;
	var propImage = '';
	var propImageStr = '';
	var propImageW = 0;
	var propImageH = 0;
	var propArray = [];
	
	var stuAns = objQuestion.strOurAns?objQuestion.strOurAns.split(','):[];
	var corrChoices = objQuestion.arCorrAns;
	
	var stuChoiceArr = new Array(objQuestion.arChoices.length);
	var corrChoiceArr = new Array(objQuestion.arChoices.length);
	var isCorrectArr = new Array(objQuestion.arChoices.length);
	//Make all the Arrays the same size
	if(objQuestion.type == titleMgr.MR)//MR method is different from others
	{
		for(var numChoices = 0; numChoices < objQuestion.arChoices.length; numChoices++)
		{
			var curChoice = objQuestion.arChoices[numChoices].replace(/,/g,"&#44");
			for(var subIndex = 0; subIndex < corrChoices.length; subIndex++)
			{
				if(curChoice == corrChoices[subIndex])
				{
					corrChoiceArr[numChoices] = corrChoices[subIndex];
					break;
				}
				else
					if(typeof corrChoiceArr[numChoices] == 'undefined')
						corrChoiceArr[numChoices] = '';
			}
			if(stuAns.length >0)
			{
				for(var subIndex = 0; subIndex < stuAns.length; subIndex++)
				{
					if(curChoice == stuAns[subIndex])
					{
						stuChoiceArr[numChoices] = stuAns[subIndex];
						break;
					}
					else
						if(typeof stuChoiceArr[numChoices] == 'undefined')
							stuChoiceArr[numChoices] = '';
				}
			}
			else
				stuChoiceArr[numChoices] = '';
			isCorrectArr[numChoices] = (stuChoiceArr[numChoices] == corrChoiceArr[numChoices]);
		}
	}
	else if(objQuestion.type == titleMgr.OR)//Ord method is different from others
	{
		for(var numChoices = 0; numChoices < objQuestion.arChoices.length; numChoices++)
		{
			var curChoice = objQuestion.arChoices[numChoices].replace(/,/g,"&#44");
			for(var subIndex = 0; subIndex < corrChoices.length; subIndex++)
			{
				if(curChoice == corrChoices[subIndex])
				{
					corrChoiceArr[numChoices] = corrChoices[subIndex];
					break;
				}
				else
					if(typeof corrChoiceArr[numChoices] == 'undefined')
						corrChoiceArr[numChoices] = '';
			}
			if(stuAns.length > numChoices)
			{
				if(typeof stuAns[numChoices] == 'undefined')
					stuChoiceArr[numChoices] = '';
				else 
					stuChoiceArr[numChoices] = stuAns[numChoices];
			}
			else
				stuChoiceArr[numChoices] = '';
			isCorrectArr[numChoices] = (stuChoiceArr[numChoices] == corrChoiceArr[numChoices]);
		}
    }
 	if(objQuestion.type == titleMgr.DD)// 5041 - Drag Drop method is different from others
  	{
        for( var numChoices=0; numChoices<objQuestion.arChoices.length; numChoices++ )
        {
			var thisChoice = objQuestion.arChoices[numChoices]+"-";
			isCorrectArr[numChoices] = false; // default to not correct

			// Get what the student did with that choice
			stuChoiceArr[numChoices] = "";
			for ( var i=0; i<stuAns.length; i++ )
			{
				if ( stuAns[i].indexOf(thisChoice) == 0 )
				{
					stuChoiceArr[numChoices] = stuAns[i];  
					break;
				}
			}
			if ( !stuChoiceArr[numChoices].length  ) 
				stuChoiceArr[numChoices] = thisChoice + "(na)"; // if not found, set to not dropped

			// Get all correct answers for that choice
			// Mark correct if student made one of the correct choices
			corrChoiceArr[numChoices] = "";
			for ( var i=0; i<corrChoices.length; i++ )
			{
				var thisCorrChoice = corrChoices[i].join("-");
				if ( thisCorrChoice.indexOf(thisChoice) == 0 )
				{
					if ( thisCorrChoice == stuChoiceArr[numChoices] )
						isCorrectArr[numChoices] = true; // flag correct if matche's student choice
					if ( corrChoiceArr[numChoices].length )
						corrChoiceArr[numChoices] += (" " + trivstrOr +" ");  
					corrChoiceArr[numChoices] += thisCorrChoice;  
				}
			}
			if ( !corrChoiceArr[numChoices].length  ) 
				corrChoiceArr[numChoices] = thisChoice + "(na)";  // if not found, set to not dropped

			if ( stuChoiceArr[numChoices] == corrChoiceArr[numChoices] ) 
				isCorrectArr[numChoices] = true; // Mark correct the ones not dropped that should not be
 		}
 	}
	else //All others
	{
		for(var numChoices = 0; numChoices < objQuestion.arChoices.length; numChoices++)
		{
			corrChoiceArr[numChoices] = '';
			for(var subIndex = 0; subIndex < corrChoices.length; subIndex++)
			{
				var corrChoice = "";
				if ( corrChoices.length > subIndex && (typeof corrChoices[subIndex] == "object") && corrChoices[subIndex].length>1 )
					corrChoice = corrChoices[subIndex].join("-");
				else
					corrChoice = corrChoices[subIndex];				
				if(corrChoice.indexOf(objQuestion.arChoices[numChoices]) >-1)
				{
					corrChoiceArr[numChoices] = corrChoice;
					break;
				}
			}
			stuChoiceArr[numChoices] = '';
			if(stuAns.length >0)
			{
				for(var subIndex = 0; subIndex < stuAns.length; subIndex++)
				{
					if(stuAns[subIndex].indexOf(objQuestion.arChoices[numChoices]) >-1)
					{
						stuChoiceArr[numChoices] = stuAns[subIndex];
						break;
					}
				}
			}
			isCorrectArr[numChoices] = (stuChoiceArr[numChoices] == corrChoiceArr[numChoices]);
		}
	}
	
	for (var numChoices = 0; numChoices < objQuestion.arChoices.length; numChoices++)
	{
		tempStr ='';
		settingName = '';
		propImage = '';
		propImageStr='';
		bIsCorrect = false;
		bNotAnswered = false;
		propArray = [];
		if(isCorrectArr[numChoices])
		{
			bIsCorrect = true;
			settingName = "correctsetting";
			propArray = this.m_corrResProp;
			propImage = this.m_corrPropImgSrc;
			propImageStr = this.m_corrPropImgAlt;
			propImageH = this.m_corrPropImgH;
			propImageW = this.m_corrPropImgW;
			this.m_totalCorr+=1;
		}
		else
		{
			settingName = "incorrectsetting";
			propArray = this.m_incorrResProp;
			propImage = this.m_incorrPropImgSrc;
			propImageStr = this.m_incorrPropImgAlt;
			propImageH = this.m_incorrPropImgH;
			propImageW = this.m_incorrPropImgW;
			
		}
		
	
		for(var index = 0; index < propArray.length; index++)
		{
			switch(propArray[index])
			{
				case "questionnumber":
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrQ+qNum)+'.'+subQuestNum+'</span></p>';
				break;
				case "questionstatus":
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(bIsCorrect?trivstrCORR:trivstrINCORR)+'</span></p>';
				break;
				case "correctanswer":
					var caStr = corrChoiceArr[numChoices];
					if ( caStr.length ==0 && (objQuestion.type == titleMgr.MR||objQuestion.type == titleMgr.HS))  
						caStr = trivstrNSEL;
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrCA+caStr)+'</span></p>';
				break;
				case "studentanswer":
					var yaStr = stuChoiceArr[numChoices];
					if ( yaStr.length ==0 )
						yaStr = ((objQuestion.type == titleMgr.MR||objQuestion.type == titleMgr.HS)?trivstrNSEL:trivstrNA);
					else if (objQuestion.type == titleMgr.MR||objQuestion.type == titleMgr.HS)
						yaStr = (trivstrSEL+' '+yaStr);
					tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrYA+yaStr)+'</span></p>';

				break;
				case "textfeedback":
						if((bIsCorrect?objQuestion.corrFeedback:objQuestion.incorrFeedback))
							tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(bIsCorrect?objQuestion.corrFeedback: objQuestion.incorrFeedback)+'</span></p>';
				break;
				case "numberofattempts":
					if(titleMgr.findVariable('VarTriQA'+objQuestion.id) >-1)
						tempStr += '<p class="'+this.name+settingName+'"><span class="'+this.name+propArray[index]+settingName+'">'+(trivstrYA+stuChoiceArr[numChoices])+'</span></p>';
				break;
				case "customtxt":
					//Future?
				break;
				case "customimg":
					tempStr += '<img src="'+propImage+'" alt="'+propImageStr+'" style="width:'+propImageW+'px;height:'+propImageH+'px;">';
				break;
			}
		}
		if(tempStr.length)
		{
			if(this.m_bBetweenQuest && numChoices+1 != objQuestion.arChoices.length)
				tempStr+='<hr class="'+this.name+'HR" style="border-style:dotted;border-width:1px;">';
			
			str += tempStr;
		}
		subQuestNum++;
		
	}

	return str;
}

//Primarily to be used for MR questions with grade each enabled, can be expanded for more
function ObjResultBuildQuestionMaster(qType, titleMgr)
{
	var masterOptions = this.getMasterProps(qType, titleMgr);
	var questionMasterTemp = {};
	
	for(var index = 0; index < masterOptions.length; index++)
	{
		questionMasterTemp[masterOptions[index]] = '';
	}
	
	var questionMaster = {};
	for(var index = 0; index < masterOptions.length; index++)
	{
		//Go through the correct props
		for(var subindex = 0; subindex < this.m_corrResProp.length; subindex++)
		{
			if(masterOptions[index] == this.m_corrResProp[subindex])
			{
				questionMasterTemp[masterOptions[index]] = this.name+this.m_corrResProp[subindex]+'correctsetting';
				break;
			}
				
		}
		
		//If we already found a setting for this prop the don't check incorrect, also save it to the master
		if(questionMasterTemp[masterOptions[index]].length)
		{
			questionMaster[masterOptions[index]] = questionMasterTemp[masterOptions[index]];
			continue;
		}
		
		//Go through the incorrect props
		for(var subindex = 0; subindex < this.m_incorrResProp.length; subindex++)
		{
			if(masterOptions[index] == this.m_incorrResProp[subindex])
			{
				questionMasterTemp[masterOptions[index]] = this.name+this.m_incorrResProp[subindex]+'incorrectsetting';
				break;
			}
				
		}
		
		//If we found a setting then save it to the master
		if(questionMasterTemp[masterOptions[index]].length)
			questionMaster[masterOptions[index]] = questionMasterTemp[masterOptions[index]];
	}
	
	return questionMaster;
}

function ObjResultGetChoiceString(objQuestion, propSetting)
{
	var str = '<ul style="list-style-type:disc; list-style-position:inside;">';
	
	for(var index = 0; index < objQuestion.arChoices.length; index++)
	{
		str += '<li><span class="'+propSetting+'">'+objQuestion.arChoices[index]+'</span></li>';
	}
	
	str+= '</ul>';
	
	return str;
}

function ObjResultCustomImage(testProp, customImg, imgW, imgH, altTag)
{
	switch(testProp)
	{
		case "generalsetting":
			this.m_testPropImgSrc = customImg;
			this.m_testPropImgAlt = altTag;
			this.m_testPropImgW = imgW;
			this.m_testPropImgH = imgH;	
		break;
		case "correctsetting":
			this.m_corrPropImgSrc = customImg;
			this.m_corrPropImgAlt = altTag;
			this.m_corrPropImgW = imgW;
			this.m_corrPropImgH = imgH;
		break;
		case "incorrectsetting":
			this.m_incorrPropImgSrc = customImg;	
			this.m_incorrPropImgAlt = altTag;
			this.m_incorrPropImgW = imgW;	
			this.m_incorrPropImgH = imgH;
		break;
		case "unansweredsetting":
			this.m_unansPropImgSrc = customImg;
			this.m_unansPropImgAlt = altTag;
			this.m_unansPropImgW = imgW;
			this.m_unansPropImgH = imgH;	
		break;
	}
}

function ObjResultCustomText(testProp, customText)
{
	switch(testProp)
	{
		case "generalsetting":
			this.m_testPropCustText = customText;	
		break;
		case "correctsetting":
			this.m_corrPropCustText = customText;	
		break;
		case "incorrectsetting":
			this.m_incorrPropCustText = customText;	
		break;
		case "unansweredsetting":
			this.m_unansPropCustText = customText;	
		break;
	}
}

function ObjSetTestResProps(testResArray)
{
	this.m_testResProp = testResArray;
}

function ObjSetCorrResProps(corrResArray)
{
	this.m_corrResProp = corrResArray;
}

function ObjSetInCorrResProps(incorrResArray)
{
	this.m_incorrResProp = incorrResArray;
}

function ObjSetUnansResProps(unansResArray)
{
	this.m_unansResProp = unansResArray;
}

function ObjSetHorizontalLine(bHorzLine, bBetweenQuest, bBetweenSect)
{
	if(bHorzLine)
	{
		this.m_bHorzLine = bHorzLine;
		this.m_bBetweenQuest = bBetweenQuest;
		this.m_bBetweenSect = bBetweenSect;
	}
	else
	{
		this.m_bHorzLine = bHorzLine;
		this.m_bBetweenQuest = 0;
		this.m_bBetweenSect = 0;
	}
}

function ObjGoToQuestionPage(questID)
{
	var titleMgr = getTitleMgrHandle();
	if( titleMgr ) 
	{
		var testObj = titleMgr.arTests[titleMgr.getTIdx(this.testName)];
		var pageToLoad = ''
		if(questID == -1)
			pageToLoad = testObj.arRTPages[0].name;
		else
			pageToLoad = this.getQuestionPage(testObj, questID);
 
		saveVariable( 'TrivantisEPS', 'T')
		ObjLayerActionGoTo( pageToLoad ); 
	}
}

function ObjGetQuestionPage(testObj, questID)
{
	var bFoundPage = false;
	var pgLoc = '';
	for(var pIndex = 0; pIndex < testObj.arRTPages.length; pIndex++)
	{
		for(var qIndex = 0; qIndex < testObj.arRTPages[pIndex].arQues.length; qIndex++)
		{
			var quest = testObj.arRTPages[pIndex].arQues[qIndex];
			if(quest.id == questID)
			{
				bFoundPage = true;
				break;
			}	
		}
		
		if(bFoundPage)
		{
			pgLoc = testObj.arRTPages[pIndex].name;
			break;
		}	
	}
	return pgLoc;
}

function ObjResultSetTestVal(testVal)
{
	this.tsVal = testVal;
}

function ObjResultGetTotalNumberOfQuestions(testObj)
{
	var tNumQuest = 0;
	for(var index = 0; index < testObj.arRTPages.length; index++)
	{
		for (var i = 0; i< testObj.arRTPages[index].arQues.length; i++)
		{
			var quest = testObj.arRTPages[index].arQues[i];
			if(quest.weight > 0)
			{
				if(quest.bGradeInd)
				{
					if(quest.arChoices && quest.arChoices.length)
						tNumQuest += quest.arChoices.length;
					else
						tNumQuest++;
				}
				else
					tNumQuest++;
			}
		}
	}
	return tNumQuest.toString();
}

function ObjResultsGrowPage()
{
	if((isSinglePagePlayerAvail() && window.trivPlayer.activePage.div.style.display != "none") ||
	   (!isSinglePagePlayerAvail()))
	{
		var div = getDisplayDocument().getElementById(this.name);
		var newHeight = -1;
		if(div)
			newHeight = parseInt(div.scrollHeight);
		
		//LD-4723 --- There is no need to grow the page if we are using the scrollbars
		if(this.m_useVert)
			return;
		
		if(newHeight >0)
		{
			var currHeightDiff = newHeight - this.h;
			var gap = 5;
			
			var oldHeight = -1;
			if(pageLayer)
			{
				oldHeight = parseInt(pageLayer.ele.offsetHeight);
				newHeight = this.h + currHeightDiff + div.offsetTop + GetHighestOffsetFromBottomValue(this) + gap;
				
				if( newHeight > oldHeight )
				{
					var width =  parseInt(pageLayer.ele.offsetWidth);
					if(oldHeight < newHeight)
					{
						CorrectForOffsetFromBottom(oldHeight, newHeight, this);
						adjustPage(width, newHeight);
					}
				}
			}
		}

	}		
	else
	{
		var THIS = this;
		setTimeout(function(){THIS.growPage();}, 100);
	}
}

function ObjResultGetMasterProperties(qType, titleMgr)
{
	//Array of master level options, add more options here if needed. Order matters
	if(qType == titleMgr.MR)
		return ["questionnumber", "questionname", "questiontext", "answerchoices", "linktoquestion", "linktofirstpage"];
	else
		return ["questionnumber", "questionname", "questiontext", "linktoquestion", "linktofirstpage"];
}

function GetHighestOffsetFromBottomValue(ObjNotToCheck)
{
	var pageHeight = 0;
	var offsetFromBottom = 0;
	
	if(pageLayer)
	{
		pageHeight = parseInt(pageLayer.ele.offsetHeight);
		
		for (var index = 0; index < arObjs.length; index++)
		{
			if(arObjs[index] != ObjNotToCheck && arObjs[index].bBottom)
			{
				arObjs[index].respChanges();
				
				if( pageHeight - arObjs[index].y > offsetFromBottom )
					offsetFromBottom = pageHeight - arObjs[index].y;
			}
		}
	}
	
	return offsetFromBottom;
}

//LHD - LD-3258 Results Object should be incharge of stopping the test timer
function ObjResultStopTestTimer()
{
	for (var index = 0; index < arObjs.length; index++)
	{
		if(arObjs[index].altName && arObjs[index].altName.indexOf('Test timer') > -1)
		{
			arObjs[index].actionStop();
			arObjs[index].actionHide();
		}	
	}
}

function ObjResultsVerticalScroll(bVert)
{
	this.m_useVert = bVert;
}

function ObjResultsRefresh(){
	
}

function ObjResultsGetCSS(){
	var css = '';
	var mobileChrome = ((is.isMobile.anyPhone()||is.isMobile.Android())&&is.chrome);
	var IEScroll = ((is.ieAny || is.edge) && this.m_useVert);
	
	css = buildCSS(this.name,this.bFixedPosition,this.x,this.y,this.w,this.m_useVert?this.h:null,this.v,this.z,null,this.m_useVert?'overflow-y:auto;':'',null,(mobileChrome||IEScroll)?false:true);
	
	return css;
}

function ObjResultsRV(){
	this.loadProps();
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