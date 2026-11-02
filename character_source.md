link-
https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=12050017&UUID=74c7c612-8723-4df5-9041-d0393d2a24b4&directService=true&tempId=4236&grievDefined=0&serviceLinkRequired=No&userLoggedIn=N&source=CTZN&OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA











<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
		
		 	<title>ServicePlus- Issuance of Character Certificate</title>
		
		
	
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="icon" href="view-resources/image/serviceplus-logo.png" type="image/x-icon" />
 <link rel="stylesheet" href="/view-resources/components/bootstrap-4.0.0/dist/css/bootstrap.min.css">
 <link rel="stylesheet" href="/view-resources/components/bootstrap/css/bootstrapValidator.min.css">
 <link rel="stylesheet" href="/view-resources/components/bootstrap/css/bootstrap-datetimepicker.min.css">
 <link rel="stylesheet" href="/view-resources/components/select2/select2.min.css">
 <link rel="stylesheet" href="/view-resources/components/datatables/dataTables.bootstrap.css">
 <link rel="stylesheet" href="/view-resources/components/font-awesome-4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" href="/view-resources/themes/skins/_all-skins.min.css">
 <link rel="stylesheet" href="/resources/Menu/common/css/dashboard.min.css"></link>
 
 <link rel="stylesheet" href="/view-resources/css/mainStyle.css">
 <link rel="stylesheet" href="/view-resources/css/iconStyle.css">
<script  type="text/javascript" src="/view-resources/components/jQuery/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="/view-resources/components/jQuery/jquery.validate.min.js"></script>
<script type="text/javascript" language="javascript" src="/view-resources/components/jQueryUI/jquery.blockUI.js"></script>
<script type="text/javascript" src="/view-resources/js/md5.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<!-- <script>$.widget.bridge('uibutton', $.ui.button);</script> -->
<script type="text/javascript" src="/view-resources/components/bootstrap-4.0.0/dist/js/bootstrap.min.js"></script>
<script  type="text/javascript" src="/view-resources/components/jQueryUI/jquery-ui.min.js"></script>
<script type="text/javascript" src="/view-resources/components/bootstrap/js/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="/view-resources/themes/js/app.min.js"></script>
 <script type="text/javascript" src="/view-resources/themes/js/adminlte.min.js"></script> 
 
<script type="text/javascript" src="/view-resources/js/bootstrap-notify.min.js"></script>
<script type="text/javascript" src="/view-resources/js/jquery.slimscroll.min.js"></script>

<script type="text/javascript" src="/view-resources/js/bootbox.min.js"></script>
<script type="text/javascript" src="/view-resources/components/select2/select2.full.min.js"></script>
<script type="text/javascript" src="/view-resources/components/iCheck/icheck.min.js"></script>

<script type="text/javascript" charset="utf-8">
function formPost(completeURL){
	formPostCommon('N','','',completeURL)
}

function formPostPopup(type, widthHeight, trgt,completeURL){
	formPostCommon(type, widthHeight, trgt,completeURL)
}

function formPostIframe(type, trgt,completeURL){
	formPostCommon(type, '', trgt,completeURL)
}

// type(N=normal, P=popup, I=Iframe) with page title in-case of popup and iframe | sample:  P~Citizen Registration, I~Citizen Registration
// widthHeight: in-case of popup: sample 960~600 or blank ''
// trgt: not implemented: send blank ''
// completeURL: sample: applySerivce.do?serviceId=4444&locId=5555
function formPostCommon(type, widthHeight, trgt,completeURL){
	if(completeURL!='' && completeURL!=undefined && type!=undefined && widthHeight!=undefined && trgt!=undefined) {
		var formOpenType = "N";//
		var pageTitle = "Service Plus";
		var width  = 960;
		var height = 600;
		
		var iframeId = "iframeId";
	
		var fromTrgt = "_self";
		
		if(trgt!='' && trgt!=undefined) {
			fromTrgt = trgt.trim();
		}
	    
		if(type!='' && type!=undefined) {
			var typeSplit = type.split("~");
			formOpenType = typeSplit[0].trim();
			if(typeSplit.length>1) {
				pageTitle = typeSplit[1].trim();
			}
			if(typeSplit.length>2) {
				iframeId = typeSplit[2].trim();
			}
		}
		
		if(widthHeight!='' && widthHeight!=undefined) {
			var widthHeightSplit = widthHeight.split("~");
			width = parseInt(widthHeightSplit[0].trim());
			if(widthHeightSplit.length>1) {
				height = parseInt(widthHeightSplit[1].trim());
			}
		}
		
		var left = (window.screen.width / 2) - ((width / 2) + 10);
	    var top = (window.screen.height / 2) - ((height / 2) + 50);
		var pageName = pageTitle.replace(/ /g,'');
		
		var completeURLSplit = completeURL.split("?");
		var formURL = completeURLSplit[0];
		
		if(formOpenType=='N' || formOpenType=='n' || formOpenType=='P' || formOpenType=='p') {
			
			var formTag=document.createElement("form");
			formTag.method="POST";
			formTag.action=formURL;
			formTag.name=pageName;
			formTag.id=pageName;
			formTag.target = fromTrgt;
			
			if(completeURLSplit.length>1) {
				var params = completeURLSplit[1].split("&");
				for(var i=0; i<params.length; i++) {
					
						var paramSplit = params[i].split("=");
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						input.setAttribute("name", paramSplit[0].trim());
						input.setAttribute("value", paramSplit[1].trim());
						formTag.appendChild(input);
						  
				}
				if(completeURL.indexOf("OWASP_CSRFTOKEN")==-1) {
				var input = document.createElement("input");
			    input.setAttribute("type", "hidden");
			    input.setAttribute("name", "OWASP_CSRFTOKEN");
			    input.setAttribute("value", "GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA");
			    formTag.appendChild(input);
				}
			}
			
		  
		    
		 	if(formOpenType=='P' || formOpenType=='p') {
		 		formTag.target = pageName;
		 		window.open('',pageName,
			    	    "status=no,height=" + height + ",width=" + width + ",resizable=yes,left="
			    	    + left + ",top=" + top + ",screenX=" + left + ",screenY="
			    	    + top + ",toolbar=no,menubar=no,scrollbars=yes,location=no,directories=no");
		 	}
		 	
		 	if(fromTrgt.indexOf("parent")>-1) {
		 		window.opener.document.body.appendChild(formTag);
		 	} else {
		 		document.body.appendChild(formTag);
		 	}
		 	
			formTag.submit();
			$("#"+pageName).remove();
		} else if(formOpenType=='I' || formOpenType=='i') {
			var postParam = {};
			if(completeURLSplit.length>1) {
				var params = completeURLSplit[1].split("&");
				for(var i=0; i<params.length; i++) {
					var paramSplit = params[i].split("=");
					postParam [paramSplit[0].trim()] = paramSplit[1].trim();
				}
			}

			$.post(formURL, postParam, function(data){
				   var frame = document.getElementById(iframeId);
		           frame.contentWindow.document.open();
		           frame.contentWindow.document.write(data);
		           frame.contentWindow.document.close();
			});
		} else {
			alert('Invalid Request Type!');
		}
	} else {
		alert('Invalid Request!');
	}
}
</script>
</head>
<body>
			






<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<title>ServicePlus metadata based service delivery framework - Goverment of India</title>

<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<title>ServicePlus metadata based service delivery framework - Goverment of India</title>
<meta http-equiv="Cache-control" content="no-cache">
<link href="resources/css/tabs.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="resources/css/table_format.css"
type="text/css" />
<link rel="stylesheet" href="resources/css/jquery-ui-1.10.4.css">
<link rel="stylesheet" href="resources/css/jquery.datetimepicker.css">
<script type="text/javascript"
src="/resources/js/jquery.blockUI.js"></script>
<script type="text/javascript"
src="/resources/js/jquery.datetimepicker.js"></script>
<script type="text/javascript"
src="/resources/js/multiselect-min.js"></script>
<script type="text/javascript"
src="/resources/js/jquery.webcam.js"></script>
<script type="text/javascript"
src="/resources/js/jquery.validate.js"></script>
<script type="text/javascript"
src="/resources/js/xregxp/xregexp.js"></script>
<script type="text/javascript"
src="/resources/js/xregxp/unicode/unicode-base.js"></script>
<script type="text/javascript"
src="/resources/js/xregxp/unicode/unicode-scripts.js"></script>
<script type="text/javascript"
src="/resources/js/applicationForm.js"></script>
<script type="text/javascript"
src="/resources/js/applicationFormXML.js"></script>
<script type="text/javascript"
src="/resources/js/Offline_handler.js"></script>
<script type="text/javascript"
src="/resources/js/jquery.xml2json.js"></script>
<script type='text/javascript'
src='/dwr/engine.js'></script>
<script type='text/javascript'
src='/dwr/util.js'></script>
<script type='text/javascript'
src='/dwr/interface/LGDDataService.js'></script>
<script type='text/javascript'
src='/dwr/interface/CommonService.js'></script>
<script type='text/javascript'
src='/dwr/interface/NotificationService.js'></script>
<script type='text/javascript'
src='/dwr/interface/UidVerificationService.js'></script>
<script type='text/javascript'
src='/dwr/interface/SpeServiceGrievancePolicyService.js'></script>
<script type='text/javascript'
src='/dwr/interface/ApplicationDetailPagesService.js'></script>
<script type='text/javascript'
src='/dwr/interface/ApplicationFormService.js'></script>
<script type="text/javascript" language="javascript"
src="resources/js/applicationFormHTML.js"></script>
<link rel="stylesheet" type="text/css" href="/view-resources/components/bootstrap/css/bootstrap-multiselect.css">
<script type="text/javascript" src="/view-resources/components/bootstrap/js/bootstrap-multiselect.js"></script>
<script type="text/javascript" src="/resources/js/google_jsapi.js" autocomplete="off"></script>
<script autocomplete="off">
 google.load("elements", "1", {
     packages: "transliteration"
   });
var control;
</script>
<style>
#ApplicationFormLayout .click.not-active {
pointer-events: none;
cursor: default;
}
#ApplicationFormLayout li.click {
width: 3em;
height: 3em;
text-align: center;
line-height: 3em;
border-radius: 2em;
background: lightgreen;
margin: 0 2em;
display: inline-block;
float: left;
position: relative;
}
#ApplicationFormLayout li.click::before {
content: '';
position: absolute;
top: .9em;
left: -4em;
width: 4em;
height: .2em;
background: white;
}
#ApplicationFormLayout
li.click ~ li::before {
background: lightgreen;
}
#ApplicationFormLayout
.click.active {
background: skyblue;
}
#ApplicationFormLayout
.click.active ~ li {
background: grey;
}
#ApplicationFormLayout
.click.active ~ li::before {
background: grey;
}
#ApplicationFormLayout
li.click ~ .active::before {
background: skyblue;
}
</style>
<script type="text/javascript">
function loadPage(pages){
var csrfTokeID=$('#csrfTokeID').val();
var source=$("input[name=source]").val();
var uuid=$("input[name=UUID]").val();
var applicationRefNo=$("input[name=applicationRefNo]").val();
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=12050017&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
 var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=12050017&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
  formPost(url);
}
</script>
<style>
@media only screen and (max-width: 400px) {
.dommsg {
font-size: 12px !important;
}
}
</style>
</head>
<body>





<style>
#iframeId, #iframeIdLogin {
	padding:5px;
	border:none;
}
</style>
<script>
function openLoginPopup() {
		var urlStr = "loginWindow.do?servApply=N<csrf:token uri='loginWindow.do'/>";
	    $("#iframeIdLogin").attr("src", urlStr);
}

function getPopupWindow(urlText) {
		var url = urlText.split('~')[1];
		var titleText = urlText.split('~')[0];
		var urlStr = "";
		$('#titleText').text(titleText);
		//alert(url);
		if(url=="citizenRegistration.html"){
			$("#iframeId").css("min-height","325px");
			//$("#customPopup .modal-dialog").css({"max-width":"500px","margin":"10px auto"});
		}
		else if(url=="forgotPassword.html") {
			$("#iframeId").css("min-height","280px");
		}
		else {
			$("#iframeId").css("min-height","400px");
		} 
		if (url.search("serviceId") > 0) { //alert(1);

			var splitUrl = url.split('?')[0];
			
			urlStr = url + "&<csrf:token uri='"+splitUrl+"'/>";
		} else {
			urlStr = url + "?<csrf:token uri='"+url+"'/>";
		}
		$("#customPopup .modal-header").empty();
		$("#customPopup .modal-header").append("<h4 class='modal-title text-center'>"+ titleText + "</h4> <button type='button' class='close' data-dismiss='modal' aria-label='Close'>	<span aria-hidden='true'>×</span></button>");
		
		
		if (urlStr.indexOf("citizenRegistration.html")>-1){
			$.post(urlStr, 'param', 
				    function(data){
    			    var frame = document.getElementById("iframeId");
		           frame.contentWindow.document.open();
		           frame.contentWindow.document.write(data);
		           frame.contentWindow.document.close();
				    }); 
		} else if (urlStr.indexOf("citizenApplication.html")>-1){
			$.post(urlStr, 'param', 
				    function(data){
				   var frame = document.getElementById("iframeId");
		           frame.contentWindow.document.open();
		           frame.contentWindow.document.write(data);
		           frame.contentWindow.document.close();
				    }); 
		} else if (urlStr.indexOf("forgotPassword.html")>-1){
			$.post(urlStr, 'param', 
				    function(data){
				   var frame = document.getElementById("iframeId");
		           frame.contentWindow.document.open();
		           frame.contentWindow.document.write(data);
		           frame.contentWindow.document.close();
				    }); 
		}else{
			 $("#iframeId").attr("src", urlStr); 
		}
	}
</script>
<div class="content">
<div id="frmcontent">
<form id="ApplicationFormLayout" name="ApplicationFormLayout" class="application_form" accept-charset="UTF-8" action="applyPageForm.do" method="post" enctype="multipart/form-data">








<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->

<input type="hidden" id="coverageLocationId" name="coverageLocationId" value=''/> 
<input type="hidden" id="applicationId" name="applicationId" value=''/> 
<input type="hidden" id="csrfTokeID" name="OWASP_CSRFTOKEN" value="GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA"/>
<input type="hidden" id="currentDateID" name="currentDate" value="02/11/2026"/>
<input type="hidden" name ="UUID" value="12bf8bd6-8146-411e-9fed-ebf816a98fda"/>
<input type="hidden" name ="applStatus" id="applStatus" value="S"/>
<input type="hidden" name ="grievanceRefNo" id="grievanceRefNo" value=""/>
<input type="hidden" name="seq_no"  value="omclo"/>
<input type="hidden" name="applyId"  value=""/>
<input type="hidden" name ="serviceId" id="serviceId" value="12050017"/>
<input type="hidden" name="source"  value="M"/>
<input type="hidden" name="kycRequired"  value=""/>
<input type="hidden" name="applicationRefNo"  value=""/>
<input type="hidden" name="aadhaar_txn"  value="" id="aadhaar_txn"/>
<input type="hidden" name="extDft" id="extDft" value="" />
<input type="hidden" name="externalInfo" id="externalInfo"  value=""/>
<input type="hidden" name="digilockerId" id="digilockerId"  value=""/>
<input type="hidden" name="digilockerRefKey" id="digilockerRefKey"  value=""/>





<input type="hidden" id="controllerName" value="applyPageForm.do" />
             <!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<title>ServicePlus metadata based service delivery framework - Goverment of India</title> 
<script type="text/javascript">
function previousPage(page){
var csrfTokeID=$('#csrfTokeID').val();	
var source=$("input[name=source]").val();
var uuid=$("input[name=UUID]").val();
var applicationRefNo=$("input[name=applicationRefNo]").val();
var prevPage=page-1;
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&source="+source+"&page="+prevPage+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&source="+source+"&page="+prevPage+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
formPost(url);
}
function submitPage(){
var bool = $("#ApplicationFormLayout").validate().form();
if(bool) {
if (typeof  window['checkOnSubmit'] == 'function'   ) { 
bool =	window['checkOnSubmit'](); 
}
if(bool) {
CreateXmlHidden();
var csrfTokeID=$('#csrfTokeID').val();	
var uuid=$("input[name=UUID]").val();
var form = document.getElementById("ApplicationFormLayout");
form.method = "post";
form.action = "applyPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=12050017&UUID="+uuid ;
form.submit();
}
}  
}
</script>
<html>
<body>
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont header_new" style="border: none">
<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
<tbody>
<tr>
<td style="text-align:center">
<div>&nbsp;
<div><strong><span style="font-size:16px">आचरण प्रमाण-पत्र हेतु आवेदन पत्र<br />
Application Form for issuance of Character Certificate</span></strong></div>
</div>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p></div>
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x2f; Details of Applicant&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92641"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923; &#x92a;&#x924;&#x94d;&#x930; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x93e;&#x930;&#x942;&#x92a; &#x28;&#x92d;&#x93e;&#x937;&#x93e;&#x29; &#x91a;&#x941;&#x928;&#x947;&#x902; &#x2f; Select Certificate Format
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="92641" name="92641" class="searchDrop" tabindex="1" style="width:83%;" data-datatype="dropDown" data-groupno="94"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x939;&#x93f;&#x902;&#x926;&#x940; &#x2f; Hindi</option>
<option value="2" >&#x905;&#x902;&#x917;&#x94d;&#x930;&#x947;&#x91c;&#x940; &#x2f; English</option>
</select>
<label class="error" style="display: none;" for="92641"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x2a; &#x915;&#x947; &#x935;&#x93f;&#x915;&#x932;&#x94d;&#x92a; &#x2f; &#x938;&#x942;&#x91a;&#x928;&#x93e; &#x905;&#x928;&#x93f;&#x935;&#x93e;&#x930;&#x94d;&#x92f; &#x930;&#x942;&#x92a; &#x938;&#x947; &#x92d;&#x930;&#x947; &#x91c;&#x93e;&#x928;&#x947; &#x939;&#x948;&#x902;&#x7c;
</label>				
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90875"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x932;&#x93f;&#x902;&#x917; &#x2f; Gender
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="90875_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="1" name="90875" id="90875_1"  required="true"   />&nbsp; &#x92a;&#x941;&#x930;&#x941;&#x937; &#x2f; Male</label>
</div>
<div class="tdata">
<label class="lbl" for="90875_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="2" name="90875" id="90875_2"  required="true"   />&nbsp; &#x938;&#x94d;&#x924;&#x94d;&#x930;&#x940; &#x2f; Female</label>
</div>
<div class="tdata">
<label class="lbl" for="90875_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="3" name="90875" id="90875_3"  required="true"   />&nbsp; &#x924;&#x943;&#x924;&#x940;&#x92f; &#x932;&#x93f;&#x902;&#x917; &#x2f; Third Gender</label>
</div>
<label class="error" for="90875" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="90880"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x2f; Salutation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90880" name="90880" class="searchDrop" tabindex="4" style="width:83%;" data-datatype="dropDown" data-groupno="4"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x936;&#x94d;&#x930;&#x940;</option>
<option value="2" >&#x936;&#x94d;&#x930;&#x940;&#x92e;&#x924;&#x940;</option>
<option value="3" >&#x938;&#x941;&#x936;&#x94d;&#x930;&#x940;</option>
<option value="4" >&#x915;&#x94b;&#x908; &#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x928;&#x939;&#x940;&#x902;</option>
</select>
<label class="error" style="display: none;" for="90880"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90876"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Applicant
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="5" placeholder="" name="90876" data-type="fullName" data-groupno="5" id="90876"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="90876" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90881"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x2f; &#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="6" placeholder="" name="90881" data-type="text" data-groupno="9" id="90881"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90881" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90877"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Father
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="7" placeholder="" name="90877" data-type="fullName" data-groupno="6" id="90877"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="90877" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90882"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="8" placeholder="" name="90882" data-type="text" data-groupno="10" id="90882"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90882" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90878"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Mother
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="9" placeholder="" name="90878" data-type="fullName" data-groupno="7" id="90878"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="90878" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90883"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="10" placeholder="" name="90883" data-type="text" data-groupno="11" id="90883"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90883" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90879"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Husband
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="11" placeholder="" name="90879" data-type="fullName" data-groupno="8" id="90879"  applicantname="true" maxlength="99"  />																
<label class="error" for="90879" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="90884"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="12" placeholder="" name="90884" data-type="text" data-groupno="12" id="90884"  minlength="0" maxlength="99"  />																
<label class="error" for="90884" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90937"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant &#x28;Required for delivery of Certificate through Download Link in SMS&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="12050017" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="13"  placeholder="" name="90937" data-datatype="mobileNo" data-groupno="43" id="90937"  minlength="10" digits="true" maxlength="10" minlength="10"  required="true"  />
<label class="error" for="90937"  style="display: none;"></label>
<input type="hidden" id="90937_txn" name="90937_txn" value=""/>
<input type="hidden" id="90937_val" name="90937_val" value=""/>
<input type="hidden" id="90937_consent" value=""/>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90938"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x908;&#x92e;&#x947;&#x932; &#x2f; Email of Applicant &#x28;Required for delivery of Certificate as attachment in Email&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="email" serviceId="12050017" resendOtpFlag="false" resendOtpCount="" resendOtpTime=""  verification-flag="false" value="" type="text" tabindex="14"  placeholder="" name="90938" data-datatype="email" data-groupno="44" id="90938"  minlength="6" email="true" maxlength="254" minlength="6"  />
<label class="error" for="90938"  style="display: none;"></label>
<input type="hidden" id="90938_txn" name="90938_txn" value=""/>
<input type="hidden" id="90938_val" name="90938_val" value=""/>
<input type="hidden" id="90938_consent" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:99%;font-family:Arial;font-size:14px; color:#000">&#x906;&#x935;&#x93e;&#x938;&#x940;&#x92f; &#x92a;&#x924;&#x93e; &#x2f; Residential Address
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x938;&#x94d;&#x925;&#x93e;&#x92f;&#x940; &#x92a;&#x924;&#x93e;  &#x2f; Permanent Address&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90895"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90895" name="90895"  tabindex="19" style="width:83%;" data-dispLang="" data-datatype="custLGDHierarchy" data-groupno="15"  required="true" >
<option value=""> 
Please Select</option>	
<option value="35">ANDAMAN AND NICOBAR ISLANDS</option>
<option value="28">ANDHRA PRADESH</option>
<option value="12">ARUNACHAL PRADESH</option>
<option value="18">ASSAM</option>
<option value="10">BIHAR</option>
<option value="4">CHANDIGARH</option>
<option value="22">CHHATTISGARH</option>
<option value="26">DADRA AND NAGAR HAVELI</option>
<option value="25">DAMAN AND DIU</option>
<option value="7">DELHI</option>
<option value="30">GOA</option>
<option value="24">GUJARAT</option>
<option value="6">HARYANA</option>
<option value="2">HIMACHAL PRADESH</option>
<option value="1">JAMMU AND KASHMIR</option>
<option value="20">JHARKHAND</option>
<option value="29">KARNATAKA</option>
<option value="32">KERALA</option>
<option value="31">LAKSHADWEEP</option>
<option value="23">MADHYA PRADESH</option>
<option value="27">MAHARASHTRA</option>
<option value="14">MANIPUR</option>
<option value="17">MEGHALAYA</option>
<option value="15">MIZORAM</option>
<option value="13">NAGALAND</option>
<option value="21">ODISHA</option>
<option value="34">PUDUCHERRY</option>
<option value="3">PUNJAB</option>
<option value="8">RAJASTHAN</option>
<option value="11">SIKKIM</option>
<option value="33">TAMIL NADU</option>
<option value="36">TELANGANA</option>
<option value="16">TRIPURA</option>
<option value="5">UTTARAKHAND</option>
<option value="9">UTTAR PRADESH</option>
<option value="19">WEST BENGAL</option>
</select>
<label class="error" for="90895" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="90897"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90897" name="90897"  tabindex="20" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="16"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90897" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92992"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x941;&#x932;&#x93f;&#x938; &#x91c;&#x93f;&#x932;&#x93e; &#x2f; Police District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="92992" name="92992" class="searchDrop" tabindex="21" style="width:83%;" data-datatype="dropDown" data-groupno="99"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >BHAGALPUR&#x2f;&#x92d;&#x93e;&#x917;&#x932;&#x92a;&#x941;&#x930;</option>
<option value="2" >NAVGACHHIYA&#x2f;&#x928;&#x935;&#x917;&#x91b;&#x93f;&#x92f;&#x93e;</option>
<option value="3" >BAGAHA&#x2f;&#x92c;&#x917;&#x939;&#x93e;</option>
<option value="4" >BETTIAH&#x2f;&#x92c;&#x947;&#x924;&#x94d;&#x924;&#x93f;&#x92f;&#x93e;</option>
</select>
<label class="error" style="display: none;" for="92992"></label>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90898"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90898" name="90898"  tabindex="23" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="17"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90898" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="90904"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90904" name="90904"  tabindex="24" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="18"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90904" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91814"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Village &#x2f; Town
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="25" placeholder="" name="91814" data-type="text" data-groupno="85" id="91814"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91814" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90910"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e;  &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="26" placeholder="" name="90910" data-type="text" data-groupno="30" id="90910"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90910" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91816"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Post Office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="27" placeholder="" name="91816" data-type="text" data-groupno="88" id="91816"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91816" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90913"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="28" placeholder="" name="90913" data-type="text" data-groupno="31" id="90913"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90913" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90912"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="29" placeholder="" name="90912" data-type="text" data-groupno="29" id="90912"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="90912" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="90914"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="30" placeholder="" name="90914" data-type="text" data-groupno="33" id="90914"  minlength="6" maxlength="6" min="000000" max="999999" digits="true"  required="true"  />																
<label class="error" for="90914" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90899"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
</label>
<div class="cont" style="margin-left:%;width:83%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="90899_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="31" value="1" name="90899" id="90899_1"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="90899_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="31" value="2" name="90899" id="90899_2"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="90899_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="31" value="3" name="90899" id="90899_3"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="90899_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="31" value="4" name="90899" id="90899_4"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="90899" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="90911"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90911" name="90911"  tabindex="32" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="32"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90911" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91323"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x939;&#x94b;&#x932;&#x94d;&#x921;&#x93f;&#x902;&#x917; &#x928;. &#x2f; Holding No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="33" placeholder="" name="91323" data-type="text" data-groupno="53" id="91323"  minlength="0" maxlength="99"  />																
<label class="error" for="91323" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91331"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x94d;&#x915;&#x93f;&#x932; &#x928;. &#x2f; Circle No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="34" placeholder="" name="91331" data-type="text" data-groupno="54" id="91331"  minlength="0" maxlength="99"  />																
<label class="error" for="91331" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90900"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="90900" name="90900"  tabindex="35" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="21" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90900" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90901"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="90901" name="90901"  tabindex="37" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="22" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90901" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90902"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="90902" name="90902"  tabindex="39" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="23" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90902" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90903"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="90903" name="90903"  tabindex="41" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="24" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="90903" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91324"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x930;&#x94d;&#x924;&#x92e;&#x93e;&#x928; &#x92a;&#x924;&#x93e; &#x2f; Present Address&#x3a; -
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="91324_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="43" value="1" name="91324" id="91324_1"    />
&#x90a;&#x92a;&#x930; &#x91c;&#x948;&#x938;&#x93e; &#x2f; Same as Above
</label>
</div>									
<label class="error" for="91324_1" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91325"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91325" name="91325"  tabindex="45" style="width:83%;" data-dispLang="" data-datatype="custLGDHierarchy" data-groupno="57" >
<option value=""> 
Please Select</option>	
<option value="35">ANDAMAN AND NICOBAR ISLANDS</option>
<option value="28">ANDHRA PRADESH</option>
<option value="12">ARUNACHAL PRADESH</option>
<option value="18">ASSAM</option>
<option value="10">BIHAR</option>
<option value="4">CHANDIGARH</option>
<option value="22">CHHATTISGARH</option>
<option value="26">DADRA AND NAGAR HAVELI</option>
<option value="25">DAMAN AND DIU</option>
<option value="7">DELHI</option>
<option value="30">GOA</option>
<option value="24">GUJARAT</option>
<option value="6">HARYANA</option>
<option value="2">HIMACHAL PRADESH</option>
<option value="1">JAMMU AND KASHMIR</option>
<option value="20">JHARKHAND</option>
<option value="29">KARNATAKA</option>
<option value="32">KERALA</option>
<option value="31">LAKSHADWEEP</option>
<option value="23">MADHYA PRADESH</option>
<option value="27">MAHARASHTRA</option>
<option value="14">MANIPUR</option>
<option value="17">MEGHALAYA</option>
<option value="15">MIZORAM</option>
<option value="13">NAGALAND</option>
<option value="21">ODISHA</option>
<option value="34">PUDUCHERRY</option>
<option value="3">PUNJAB</option>
<option value="8">RAJASTHAN</option>
<option value="11">SIKKIM</option>
<option value="33">TAMIL NADU</option>
<option value="36">TELANGANA</option>
<option value="16">TRIPURA</option>
<option value="5">UTTARAKHAND</option>
<option value="9">UTTAR PRADESH</option>
<option value="19">WEST BENGAL</option>
</select>
<label class="error" for="91325" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91333"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91333" name="91333"  tabindex="46" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="62" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91333" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91326"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91326" name="91326"  tabindex="47" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="58" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91326" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91334"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91334" name="91334"  tabindex="48" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="63" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91334" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91815"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Village &#x2f; Town
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="49" placeholder="" name="91815" data-type="text" data-groupno="86" id="91815"  minlength="0" maxlength="99"  />																
<label class="error" for="91815" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91327"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="50" placeholder="" name="91327" data-type="text" data-groupno="60" id="91327"  minlength="0" maxlength="99"  />																
<label class="error" for="91327" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91817"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Post Office
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="51" placeholder="" name="91817" data-type="text" data-groupno="87" id="91817"  minlength="0" maxlength="99"  />																
<label class="error" for="91817" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91335"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="52" placeholder="" name="91335" data-type="text" data-groupno="64" id="91335"  minlength="0" maxlength="99"  />																
<label class="error" for="91335" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91343"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="53" placeholder="" name="91343" data-type="text" data-groupno="72" id="91343"  minlength="0" maxlength="3"  />																
<label class="error" for="91343" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91336"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="54" placeholder="" name="91336" data-type="text" data-groupno="66" id="91336"  minlength="6" maxlength="6" min="000000" max="999999" digits="true"  />																
<label class="error" for="91336" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91338"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91338_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="1" name="91338" id="91338_1"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="91338_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="2" name="91338" id="91338_2"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="91338_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="3" name="91338" id="91338_3"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="91338_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="4" name="91338" id="91338_4"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="91338" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91328"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91328" name="91328"  tabindex="56" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="59" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91328" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91329"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x939;&#x94b;&#x932;&#x94d;&#x921;&#x93f;&#x902;&#x917; &#x928;. &#x2f; Holding No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="57" placeholder="" name="91329" data-type="text" data-groupno="61" id="91329"  minlength="0" maxlength="99"  />																
<label class="error" for="91329" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91337"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x94d;&#x915;&#x93f;&#x932; &#x928;. &#x2f; Circle No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="58" placeholder="" name="91337" data-type="text" data-groupno="65" id="91337"  minlength="0" maxlength="99"  />																
<label class="error" for="91337" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91339"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91339" name="91339"  tabindex="59" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="68" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91339" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91340"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91340" name="91340"  tabindex="61" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="69" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91340" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91341"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91341" name="91341"  tabindex="63" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="70" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91341" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91342"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91342" name="91342"  tabindex="65" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="71" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91342" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90915"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92b;&#x94b;&#x91f;&#x94b; &#x2f; Photograph of applicant
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:%;">

<input type="hidden" class="imageData" name="90915_image"  required="true"  id="90915_image" value=""/>
<figure class="thumbnail" style='display:none'>
<a target="_blank" onClick="openLargeStringImage(90915)">
<img class="uploadImage" id="preview" name="preview" src="" attr-id="90915"></img>
</a>
</figure>
<label><a class="removeImage" id="90915_removeLink" style="display:none"><img src="resources/images/delete1.png" width="18" height="19" border="0" /></a></label>
</br> 
<input type="hidden" name="90915_removeFlag" id="90915_removeFlag" value="false"/>
<input type="hidden" name="imageHeight" id="imageHeight" value=""/>
<input type="hidden" name="imageWidth" id="imageWidth" value=""/>
<input type="hidden" name="minImageSize" id="minImageSize" value="20"/>
<input type="hidden" name="maxImageSize" id="maxImageSize" value="300"/>
<input type="hidden" name="90915_croph" id="90915_croph" value=""/>
<input type="hidden" name="90915_cropw" id="90915_cropw" value=""/>
<input type="hidden" name="90915_cropx" id="90915_cropx" value=""/>
<input type="hidden" name="90915_cropy" id="90915_cropy" value=""/>
<input type="file" class="image groupset1"   data-type="image" id="90915" name="90915" imagerequired='true'/>
<image id="90915_openCamra" class="openCamera pointer groupset1"  src="resources/images/camera-icon.png"></image>
<label class="error" for="90915" style="display: none;"></label>							


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90956"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x947;&#x936;&#x93e; &#x2f; Profession
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90956" name="90956" class="searchDrop" tabindex="69" style="width:83%;" data-datatype="dropDown" data-groupno="49"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x91b;&#x93e;&#x924;&#x94d;&#x930; &#x2f; Student</option>
<option value="2" >&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x2f; Govt. Service</option>
<option value="3" >&#x928;&#x93f;&#x91c;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x2f; Private Service</option>
<option value="4" >&#x935;&#x94d;&#x92f;&#x93e;&#x92a;&#x93e;&#x930; &#x2f; Business</option>
<option value="5" >&#x915;&#x93f;&#x938;&#x93e;&#x928; &#x2f; Farmer</option>
<option value="6" >&#x917;&#x943;&#x939;&#x93f;&#x923;&#x940; &#x2f; Housewife</option>
<option value="7" >&#x905;&#x928;&#x94d;&#x92f; &#x2f; Other</option>
</select>
<label class="error" style="display: none;" for="90956"></label>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91993"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Please specify profession if other
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="71" placeholder="" name="91993" data-type="text" data-groupno="91" id="91993"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91993" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90920"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x94d;&#x92f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f; &#x92e;&#x947;&#x902; &#x92a;&#x947;&#x936;&#x93e; &#x909;&#x932;&#x94d;&#x932;&#x93f;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947;&#x902;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="72" placeholder="" name="90920" data-type="text" data-groupno="42" id="90920"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90920" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90957"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x909;&#x926;&#x94d;&#x926;&#x947;&#x936;&#x94d;&#x92f; &#x2f; Purpose of Application
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="90957" name="90957" class="searchDrop" tabindex="73" style="width:83%;" data-datatype="dropDown" data-groupno="48"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x935;&#x93f;&#x92d;&#x93f;&#x928;&#x94d;&#x928; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x935;&#x93f;&#x92d;&#x93e;&#x917;&#x94b;&#x902; &#x2f; &#x928;&#x93f;&#x917;&#x92e;&#x94b;&#x902; &#x2f; &#x928;&#x93f;&#x915;&#x93e;&#x92f;&#x94b;&#x902; &#x92e;&#x947;&#x902; &#x938;&#x902;&#x935;&#x93f;&#x926;&#x93e; &#x2f; &#x920;&#x947;&#x915;&#x93e; &#x92a;&#x930; &#x915;&#x93e;&#x92e;</option>
<option value="2" >&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x92e;&#x947;&#x902; &#x938;&#x94d;&#x925;&#x93e;&#x908; &#x2f; &#x905;&#x928;&#x941;&#x92c;&#x902;&#x927; &#x915;&#x947; &#x906;&#x927;&#x93e;&#x930; &#x92a;&#x930; &#x928;&#x94c;&#x915;&#x930;&#x940;</option>
<option value="3" >&#x936;&#x938;&#x94d;&#x924;&#x94d;&#x930; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938;</option>
<option value="4" >&#x92a;&#x93e;&#x938;&#x92a;&#x94b;&#x930;&#x94d;&#x91f; &#x939;&#x947;&#x924;&#x941; &#x906;&#x935;&#x947;&#x926;&#x928;</option>
<option value="5" >&#x91a;&#x930;&#x93f;&#x924;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923; &#x92a;&#x924;&#x94d;&#x930; &#x928;&#x93f;&#x930;&#x94d;&#x917;&#x924; &#x915;&#x930;&#x928;&#x93e;</option>
<option value="6" >&#x938;&#x93e;&#x930;&#x94d;&#x935;&#x91c;&#x928;&#x93f;&#x915; &#x909;&#x92a;&#x915;&#x94d;&#x930;&#x92e;&#x94b;&#x902; &#x938;&#x947; &#x938;&#x92e;&#x94d;&#x92c;&#x902;&#x927;&#x93f;&#x924; &#x935;&#x93f;&#x92d;&#x93f;&#x928;&#x94d;&#x928; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938;, &#x92a;&#x947;&#x91f;&#x94d;&#x930;&#x94b;&#x932; &#x92a;&#x902;&#x92a;, &#x917;&#x948;&#x938; &#x90f;&#x91c;&#x947;&#x902;&#x938;&#x940; &#x907;&#x924;&#x94d;&#x92f;&#x93e;&#x926;&#x93f; &#x915;&#x947; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938;</option>
<option value="7" >&#x915;&#x93f;&#x938;&#x940; &#x92d;&#x940; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x939;&#x93e;&#x92f;&#x924;&#x93e; &#x92a;&#x94d;&#x930;&#x93e;&#x92a;&#x94d;&#x924; &#x915;&#x930;&#x928;&#x947; &#x935;&#x93e;&#x932;&#x947; &#x90f;&#x928;&#x966;&#x91c;&#x940; &#x966;&#x913;&#x966; &#x2f; &#x938;&#x902;&#x938;&#x94d;&#x925;&#x93e; &#x92e;&#x947;&#x902; &#x910;&#x938;&#x947; &#x935;&#x94d;&#x92f;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x947; &#x92a;&#x926;&#x927;&#x93e;&#x930;&#x915; &#x939;&#x94b;&#x928;&#x947; &#x92a;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x939;&#x93e;&#x92f;&#x924;&#x93e; &#x92f;&#x93e; &#x915;&#x949;&#x928;&#x94d#x94d;&#x91f;&#x94d;&#x930;&#x948;&#x915;&#x94d;&#x91f; &#x926;&#x93f;&#x90f; &#x91c;&#x93e;&#x928;&#x947; &#x92a;&#x930; &#x935;&#x93f;&#x91a;&#x93e;&#x930; &#x915;&#x930;&#x928;&#x93e;</option>
<option value="8" >&#x92c;&#x948;&#x902;&#x915; &#x905;&#x925;&#x935;&#x93e; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x902;&#x938;&#x94d;&#x925;&#x93e;&#x913;&#x902; &#x938;&#x947; &#x90b;&#x923; &#x932;&#x947;&#x924;&#x947; &#x938;&#x92e;&#x92f; &#x907;&#x938; &#x906;&#x936;&#x92f; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x928;&#x93e; &#x926;&#x93f;&#x92f;&#x93e; &#x91c;&#x93e;&#x928;&#x93e;</option>
<option value="9" >&#x905;&#x928;&#x94d;&#x92f; &#x915;&#x94b;&#x908; &#x915;&#x93e;&#x930;&#x94d;&#x92f; &#x91c;&#x93f;&#x938;&#x915;&#x947; &#x932;&#x93f;&#x90f; &#x938;&#x915;&#x94d;&#x937;&#x92e; &#x92a;&#x94d;&#x930;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930; &#x926;&#x94d;&#x935;&#x93e;&#x930;&#x93e; &#x92a;&#x941;&#x932;&#x93f;&#x938; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x928; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x935;&#x947;&#x926;&#x928; &#x915;&#x94b; &#x906;&#x935;&#x936;&#x94d;&#x92f;&#x915; &#x938;&#x92e;&#x91d;&#x93e; &#x91c;&#x93e;&#x90f;</option>
</select>
<label class="error" style="display: none;" for="90957"></label>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90917"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Aadhaar Number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-verificationType="0" data-type="AadhaarNumber" serviceId="12050017" verification-flag="true" value="" type="text" tabindex="75"  placeholder="" name="90917_txt" data-datatype="AadhaarNumber" data-groupno="36" id="90917_txt"  maxlength="16" verhoeff="16"  />
<input type="hidden" id="90917" name="90917" value=""/>
<label class="error" for="90917"  style="display: none;"></label>
<input type="hidden" id="90917_txn" name="90917_txn" value=""/>
<input type="hidden" id="90917_val" name="90917_val" value=""/>
<input type="hidden" id="90917_consent" value="Identification of Applicant by Home Department, Govt. of Bihar."/>
</div>
</div>
<div class="tdata">
<label class="lbl" for="90921"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Role ID
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="76" placeholder="" name="90921" data-type="text" data-groupno="39" id="90921"  minlength="0" maxlength="99"  />																
<label class="error" for="90921" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90918"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Status
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="90918_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="77" value="1" name="90918" id="90918_1"   />&nbsp; Accept</label>
</div>
<div class="tdata">
<label class="lbl" for="90918_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="77" value="2" name="90918" id="90918_2"   />&nbsp; Reject</label>
</div>
<label class="error" for="90918" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="90922"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Aadhaar Authentication
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="90922_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="78" value="1" name="90922" id="90922_1"   />&nbsp; Verified</label>
</div>
<div class="tdata">
<label class="lbl" for="90922_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="78" value="2" name="90922" id="90922_2"   />&nbsp; Not Verified</label>
</div>
<label class="error" for="90922" style="display: none;"></label>
</div>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90919"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Mode
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="90919_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="79" value="1" name="90919" id="90919_1"   />&nbsp; Online</label>
</div>
<div class="tdata">
<label class="lbl" for="90919_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="79" value="2" name="90919" id="90919_2"   />&nbsp; Offline</label>
</div>
<div class="tdata">
<label class="lbl" for="90919_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="79" value="3" name="90919" id="90919_3"   />&nbsp; Kiosk</label>
</div>
<label class="error" for="90919" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="90923"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Reason For Rejection
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="80" placeholder="" name="90923" data-type="text" data-groupno="41" id="90923"  minlength="0" maxlength="99"  />																
<label class="error" for="90923" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90950"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
User Name
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="81" placeholder="" name="90950" data-type="text" data-groupno="45" id="90950"  minlength="0" maxlength="99"  />																
<label class="error" for="90950" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="90951"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Date
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="82" placeholder="" name="90951" data-type="text" data-groupno="46" id="90951"  minlength="0" maxlength="99"  />																
<label class="error" for="90951" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<label class="lbl" for="90916"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x905;&#x927;&#x93f;&#x935;&#x93e;&#x938; &#x915;&#x940; &#x905;&#x935;&#x927;&#x93f; &#x2f; Duration of Domicile
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="83" placeholder="" name="90916" data-type="text" data-groupno="35" id="90916"  minlength="0" maxlength="3" min="00" max="999" digits="true"  />																
<label class="error" for="90916" style="display: none;"></label>
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x909;&#x926;&#x94d;&#x926;&#x947;&#x936;&#x94d;&#x92f; &#x2f; Purpose of Application&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92643"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x909;&#x926;&#x94d;&#x926;&#x947;&#x936;&#x94d;&#x92f; &#x2f; Purpose of Application
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="92643_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="1" name="92643" id="92643_1"    required="true"  />
&#x92a;&#x93e;&#x938;&#x92a;&#x94b;&#x930;&#x94d;&#x91f; &#x939;&#x947;&#x924;&#x941; &#x906;&#x935;&#x947;&#x926;&#x928; &#x2f; Application for passport
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="2" name="92643" id="92643_2"    required="true"  />
&#x936;&#x938;&#x94d;&#x924;&#x94d;&#x930; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938; &#x2f; Arms license
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="3" name="92643" id="92643_3"    required="true"  />
&#x938;&#x93e;&#x930;&#x94d;&#x935;&#x91c;&#x928;&#x93f;&#x915; &#x909;&#x92a;&#x915;&#x94d;&#x930;&#x92e;&#x94b;&#x902; &#x938;&#x947; &#x938;&#x92e;&#x94d;&#x92c;&#x902;&#x927;&#x93f;&#x924; &#x935;&#x93f;&#x92d;&#x93f;&#x928;&#x94d;&#x928; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938;, &#x92a;&#x947;&#x91f;&#x94d;&#x930;&#x94b;&#x932; &#x92a;&#x902;&#x92a;, &#x917;&#x948;&#x938; &#x90f;&#x91c;&#x947;&#x902;&#x938;&#x940; &#x907;&#x924;&#x94d;&#x92f;&#x93e;&#x926;&#x93f; &#x915;&#x947; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938; &#x2f; Various types of licenses related to public sector undertakings, licenses of petrol pump, gas agency, etc.
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_4" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="4" name="92643" id="92643_4"    required="true"  />
&#x935;&#x93f;&#x92d;&#x93f;&#x928;&#x94d;&#x928; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x935;&#x93f;&#x92d;&#x93e;&#x917;&#x94b;&#x902;&#x2f;&#x928;&#x93f;&#x917;&#x92e;&#x94b;&#x902;&#x2f;&#x928;&#x93f;&#x915;&#x93e;&#x92f;&#x94b;&#x902; &#x92e;&#x947;&#x902; &#x938;&#x902;&#x935;&#x93f;&#x926;&#x93e;&#x2f;&#x920;&#x947;&#x915;&#x93e; &#x92a;&#x930; &#x915;&#x93e;&#x92e; &#x2f; Work on bid&#x2f;contract in various government departments&#x2f;corporations&#x2f;bodies
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_5" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="5" name="92643" id="92643_5"    required="true"  />
&#x92c;&#x948;&#x902;&#x915; &#x905;&#x925;&#x935;&#x93e; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x902;&#x938;&#x94d;&#x925;&#x93e;&#x913;&#x902; &#x938;&#x947; &#x90b;&#x923; &#x932;&#x947;&#x924;&#x947; &#x938;&#x92e;&#x92f; &#x907;&#x938; &#x906;&#x936;&#x92f; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x928;&#x93e; &#x926;&#x93f;&#x92f;&#x93e; &#x91c;&#x93e;&#x928;&#x93e; &#x2f; Intimation while taking loan from bank or government institutions.
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_6" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="6" name="92643" id="92643_6"    required="true"  />
&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x92e;&#x947;&#x902; &#x938;&#x94d;&#x925;&#x93e;&#x908;&#x2f;&#x905;&#x928;&#x941;&#x92c;&#x902;&#x927; &#x915;&#x947; &#x906;&#x927;&#x93e;&#x930; &#x92a;&#x930; &#x928;&#x94c;&#x915;&#x930;&#x940; &#x2f; Government service on permanent&#x2f;contract basis
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_7" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="7" name="92643" id="92643_7"    required="true"  />
&#x915;&#x93f;&#x938;&#x940; &#x92d;&#x940; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x939;&#x93e;&#x92f;&#x924;&#x93e; &#x92a;&#x94d;&#x930;&#x93e;&#x92a;&#x94d;&#x924; &#x915;&#x930;&#x928;&#x947; &#x935;&#x93e;&#x932;&#x947; &#x90f;&#x928;&#x966;&#x91c;&#x940; &#x966;&#x913;&#x966;&#x2f;&#x938;&#x902;&#x938;&#x94d;&#x925;&#x93e; &#x92e;&#x947;&#x902; &#x910;&#x938;&#x947; &#x935;&#x94d;&#x92f;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x947; &#x92a;&#x926;&#x927;&#x93e;&#x930;&#x915; &#x939;&#x94b;&#x928;&#x947; &#x92a;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x939;&#x93e;&#x92f;&#x924;&#x93e; &#x92f;&#x93e; &#x915;&#x949;&#x928;&#x94d;&#x91f;&#x94d;&#x930;&#x948;&#x915;&#x94d;&#x91f; &#x926;&#x93f;&#x90f; &#x91c;&#x93e;&#x928;&#x947; &#x92a;&#x930; &#x935;&#x93f;&#x91a;&#x93e;&#x930; &#x915;&#x930;&#x928;&#x93e; &#x2f; Consideration of providing government assistance or contract to person posted in any type of government aided NGO&#x2f;organization
</label>
</div>									
<div class="tdata">
<label class="lbl" for="92643_8" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="84" value="8" name="92643" id="92643_8"    required="true"  />
&#x905;&#x928;&#x94d;&#x92f; &#x915;&#x94b;&#x908; &#x915;&#x93e;&#x930;&#x94d;&#x92f; &#x91c;&#x93f;&#x938;&#x915;&#x947; &#x932;&#x93f;&#x90f; &#x938;&#x915;&#x94d;&#x937;&#x92e; &#x92a;&#x94d;&#x930;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930; &#x926;&#x94d;&#x935;&#x93e;&#x930;&#x93e; &#x92a;&#x941;&#x932;&#x93f;&#x938; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x928; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x935;&#x947;&#x926;&#x928; &#x915;&#x94b; &#x906;&#x935;&#x936;&#x94d;&#x92f;&#x915; &#x938;&#x92e;&#x91d;&#x93e; &#x91c;&#x93e;&#x90f; &#x2f; Any other work for which Police Verification Report may be considered necessary by the competent authority
</label>
</div>									
<label class="error" for="92643_8" style="display: none;"></label>
<!-- </div> -->	
</div> 


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91994"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Please specify purpose of application if other
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<input size="" value="" type="text" tabindex="85" placeholder="" name="91994" data-type="text" data-groupno="92" id="91994"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91994" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90989"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x905;&#x928;&#x94d;&#x92f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f; &#x92e;&#x947;&#x902; &#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x909;&#x926;&#x94d;&#x926;&#x947;&#x936;&#x94d;&#x92f; &#x909;&#x932;&#x94d;&#x932;&#x93f;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947;&#x902;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<input size="" value="" type="text" tabindex="86" placeholder="" name="90989" data-type="text" data-groupno="50" id="90989"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="90989" style="display: none;"></label>


</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x92a;&#x93f;&#x91b;&#x932;&#x947; 2 &#x935;&#x930;&#x94d;&#x937;&#x94b;&#x902; &#x915;&#x93e; &#x905;&#x927;&#x93f;&#x935;&#x93e;&#x938; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x2f; Domicile Details of last 2 years&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<fieldset name="fieldset">	
<legend>
<esapi:encodeForHTMLAttribute> Domicile Details (In Descending Order)</esapi:encodeForHTMLAttribute>
</legend>	
<input type="hidden" name="fieldsetDivTableFlag" id="fieldsetDivTableFlag" value="D"/>
<div class="column_9 fieldSet">
<input type="hidden" id="fieldSetMinNoOfRows" name="fieldSetMinNoOfRows" value="1"/>
<input type="hidden" id="fieldSetMaxNoOfRows" name="fieldSetMaxNoOfRows" value="5"/>
<input type="hidden" id="fieldSetId" name="fieldSetId" data-type="DIV" value="91348"/>
<div class="trow left label_header">  <!-- This will be the default table row -->
<div class="tdata"  style="width:8%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> प्रकार / Type</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:10%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> जिला / District</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:13%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> थाना / Police Station</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:15%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> पता / Address</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:13%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> महीने से / From Month</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:10%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> वर्ष से / From Year</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:13%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> महीने तक / To Month</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata"  style="width:10%;">
<label class="lbl forDesktoponly" style="font-family:Arial;font-size:14px; color:#000000">
<esapi:encodeForHTMLAttribute> वर्ष  तक / To Year</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
</div>				
<div class="tdata" style="width:6%">&nbsp;</div>
</div>
<!-- This will be the default table row -->		
<div class="trow left">
<input type="hidden" id="fieldSetRowNum_91348" name="fieldSetRowNum_91348" value="0" />
<div class="tdata" style="width:8%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>प्रकार / Type</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91599_0" class="searchDrop" webservice="2"  name="91599_0"  tabindex="87" style="width:%;"  required="true"  >
<option value=""> 
Please Select</option>
<option value="1" ><esapi:encodeForHTMLAttribute> वर्तमान</esapi:encodeForHTMLAttribute></option>
<option value="2" ><esapi:encodeForHTMLAttribute> पिछला</esapi:encodeForHTMLAttribute></option>
</select>
<label class="error" for="91599_0" style="display: none;"></label>


</div>								
<div class="tdata" style="width:10%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>जिला / District</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91600_0" name="91600_0"  tabindex="87" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="86"  required="true" >
<option value=""> 
Please Select</option>
<option value="188" data-entity-level=""><esapi:encodeForHTMLAttribute>ARARIA/अररिया</esapi:encodeForHTMLAttribute></option>
<option value="611" data-entity-level=""><esapi:encodeForHTMLAttribute>ARWAL/अरवल</esapi:encodeForHTMLAttribute></option>
<option value="189" data-entity-level=""><esapi:encodeForHTMLAttribute>AURANGABAD/औरंगाबाद</esapi:encodeForHTMLAttribute></option>
<option value="190" data-entity-level=""><esapi:encodeForHTMLAttribute>BANKA/बांका</esapi:encodeForHTMLAttribute></option>
<option value="191" data-entity-level=""><esapi:encodeForHTMLAttribute>BEGUSARAI/बेगूसराय</esapi:encodeForHTMLAttribute></option>
<option value="192" data-entity-level=""><esapi:encodeForHTMLAttribute>BHAGALPUR/भागलपुर</esapi:encodeForHTMLAttribute></option>
<option value="193" data-entity-level=""><esapi:encodeForHTMLAttribute>BHOJPUR/भोजपुर</esapi:encodeForHTMLAttribute></option>
<option value="194" data-entity-level=""><esapi:encodeForHTMLAttribute>BUXAR/बक्सर</esapi:encodeForHTMLAttribute></option>
<option value="195" data-entity-level=""><esapi:encodeForHTMLAttribute>DARBHANGA/दरभंगा</esapi:encodeForHTMLAttribute></option>
<option value="196" data-entity-level=""><esapi:encodeForHTMLAttribute>GAYA/गया</esapi:encodeForHTMLAttribute></option>
<option value="197" data-entity-level=""><esapi:encodeForHTMLAttribute>GOPALGANJ/गोपालगंज</esapi:encodeForHTMLAttribute></option>
<option value="198" data-entity-level=""><esapi:encodeForHTMLAttribute>JAMUI/जमुई</esapi:encodeForHTMLAttribute></option>
<option value="199" data-entity-level=""><esapi:encodeForHTMLAttribute>JEHANABAD/जहानाबाद</esapi:encodeForHTMLAttribute></option>
<option value="200" data-entity-level=""><esapi:encodeForHTMLAttribute>KAIMUR (BHABUA)/कैमूर ( भभुआ )</esapi:encodeForHTMLAttribute></option>
<option value="201" data-entity-level=""><esapi:encodeForHTMLAttribute>KATIHAR/कटिहार</esapi:encodeForHTMLAttribute></option>
<option value="202" data-entity-level=""><esapi:encodeForHTMLAttribute>KHAGARIA/खगड़िया</esapi:encodeForHTMLAttribute></option>
<option value="203" data-entity-level=""><esapi:encodeForHTMLAttribute>KISHANGANJ/किशनगंज</esapi:encodeForHTMLAttribute></option>
<option value="204" data-entity-level=""><esapi:encodeForHTMLAttribute>LAKHISARAI/लखीसराय</esapi:encodeForHTMLAttribute></option>
<option value="205" data-entity-level=""><esapi:encodeForHTMLAttribute>MADHEPURA/मधेपुरा</esapi:encodeForHTMLAttribute></option>
<option value="206" data-entity-level=""><esapi:encodeForHTMLAttribute>MADHUBANI/मधुबनी</esapi:encodeForHTMLAttribute></option>
<option value="207" data-entity-level=""><esapi:encodeForHTMLAttribute>MUNGER/मुंगेर</esapi:encodeForHTMLAttribute></option>
<option value="208" data-entity-level=""><esapi:encodeForHTMLAttribute>MUZAFFARPUR/मुजफ्फरपुर</esapi:encodeForHTMLAttribute></option>
<option value="209" data-entity-level=""><esapi:encodeForHTMLAttribute>NALANDA/नालंदा</esapi:encodeForHTMLAttribute></option>
<option value="210" data-entity-level=""><esapi:encodeForHTMLAttribute>NAWADA/नवादा</esapi:encodeForHTMLAttribute></option>
<option value="211" data-entity-level=""><esapi:encodeForHTMLAttribute>PASHCHIM CHAMPARAN/पश्चिम चम्पारण</esapi:encodeForHTMLAttribute></option>
<option value="212" data-entity-level=""><esapi:encodeForHTMLAttribute>PATNA/पटना</esapi:encodeForHTMLAttribute></option>
<option value="213" data-entity-level=""><esapi:encodeForHTMLAttribute>PURBI CHAMPARAN/पूर्वी चंपारण</esapi:encodeForHTMLAttribute></option>
<option value="214" data-entity-level=""><esapi:encodeForHTMLAttribute>PURNIA/पूर्णिया</esapi:encodeForHTMLAttribute></option>
<option value="215" data-entity-level=""><esapi:encodeForHTMLAttribute>ROHTAS/रोहतास</esapi:encodeForHTMLAttribute></option>
<option value="216" data-entity-level=""><esapi:encodeForHTMLAttribute>SAHARSA/सहरसा</esapi:encodeForHTMLAttribute></option>
<option value="217" data-entity-level=""><esapi:encodeForHTMLAttribute>SAMASTIPUR/समस्तीपुर</esapi:encodeForHTMLAttribute></option>
<option value="218" data-entity-level=""><esapi:encodeForHTMLAttribute>SARAN/सारण</esapi:encodeForHTMLAttribute></option>
<option value="219" data-entity-level=""><esapi:encodeForHTMLAttribute>SHEIKHPURA/शेखपुरा</esapi:encodeForHTMLAttribute></option>
<option value="220" data-entity-level=""><esapi:encodeForHTMLAttribute>SHEOHAR/शिवहर</esapi:encodeForHTMLAttribute></option>
<option value="221" data-entity-level=""><esapi:encodeForHTMLAttribute>SITAMARHI/सीतामढी</esapi:encodeForHTMLAttribute></option>
<option value="222" data-entity-level=""><esapi:encodeForHTMLAttribute>SIWAN/सिवान</esapi:encodeForHTMLAttribute></option>
<option value="223" data-entity-level=""><esapi:encodeForHTMLAttribute>SUPAUL/सुपौल</esapi:encodeForHTMLAttribute></option>
<option value="224" data-entity-level=""><esapi:encodeForHTMLAttribute>VAISHALI/वैशाली</esapi:encodeForHTMLAttribute></option>
</select>
<label class="error" for="91600_0" style="display: none;"></label>	


</div>								
<div class="tdata" style="width:13%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>थाना / Police Station</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91601_0" name="91601_0"  tabindex="87" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="87"  required="true" >
<option value=""> 
Please Select</option>
</select>
<label class="error" for="91601_0" style="display: none;"></label>	


</div>								
<div class="tdata" style="width:15%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>पता / Address</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<input type="text" name="91602_0" value="" tabindex="87" id="91602_0"   minlength="1" maxlength="999"  required="true"  >											
<label class="error" for="91602_0" style="display: none;"></label>


</div>								
<div class="tdata" style="width:13%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>महीने से / From Month</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91603_0" class="searchDrop" webservice="2"  name="91603_0"  tabindex="87" style="width:%;"  required="true"  >
<option value=""> 
Please Select</option>
<option value="1" ><esapi:encodeForHTMLAttribute> जनवरी</esapi:encodeForHTMLAttribute></option>
<option value="2" ><esapi:encodeForHTMLAttribute> फरवरी</esapi:encodeForHTMLAttribute></option>
<option value="3" ><esapi:encodeForHTMLAttribute> मार्च</esapi:encodeForHTMLAttribute></option>
<option value="4" ><esapi:encodeForHTMLAttribute> अप्रैल</esapi:encodeForHTMLAttribute></option>
<option value="5" ><esapi:encodeForHTMLAttribute> मई</esapi:encodeForHTMLAttribute></option>
<option value="6" ><esapi:encodeForHTMLAttribute> जून</esapi:encodeForHTMLAttribute></option>
<option value="7" ><esapi:encodeForHTMLAttribute> जुलाई</esapi:encodeForHTMLAttribute></option>
<option value="8" ><esapi:encodeForHTMLAttribute> अगस्त</esapi:encodeForHTMLAttribute></option>
<option value="9" ><esapi:encodeForHTMLAttribute> सितम्बर</esapi:encodeForHTMLAttribute></option>
<option value="10" ><esapi:encodeForHTMLAttribute> अक्टूबर</esapi:encodeForHTMLAttribute></option>
<option value="11" ><esapi:encodeForHTMLAttribute> नवम्बर</esapi:encodeForHTMLAttribute></option>
<option value="12" ><esapi:encodeForHTMLAttribute> दिसम्बर</esapi:encodeForHTMLAttribute></option>
</select>
<label class="error" for="91603_0" style="display: none;"></label>


</div>								
<div class="tdata" style="width:10%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>वर्ष से / From Year</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91604_0" class="searchDrop" webservice="2"  name="91604_0"  tabindex="87" style="width:%;"  required="true"  >
<option value=""> 
Please Select</option>
<option value="2017" ><esapi:encodeForHTMLAttribute> 2017</esapi:encodeForHTMLAttribute></option>
<option value="2018" ><esapi:encodeForHTMLAttribute> 2018</esapi:encodeForHTMLAttribute></option>
<option value="2019" ><esapi:encodeForHTMLAttribute> 2019</esapi:encodeForHTMLAttribute></option>
<option value="2020" ><esapi:encodeForHTMLAttribute> 2020</esapi:encodeForHTMLAttribute></option>
<option value="2021" ><esapi:encodeForHTMLAttribute> 2021</esapi:encodeForHTMLAttribute></option>
<option value="2022" ><esapi:encodeForHTMLAttribute> 2022</esapi:encodeForHTMLAttribute></option>
<option value="2023" ><esapi:encodeForHTMLAttribute> 2023</esapi:encodeForHTMLAttribute></option>
<option value="2024" ><esapi:encodeForHTMLAttribute> 2024</esapi:encodeForHTMLAttribute></option>
<option value="2025" ><esapi:encodeForHTMLAttribute> 2025</esapi:encodeForHTMLAttribute></option>
<option value="2026" ><esapi:encodeForHTMLAttribute> 2026</esapi:encodeForHTMLAttribute></option>
<option value="2027" ><esapi:encodeForHTMLAttribute> 2027</esapi:encodeForHTMLAttribute></option>
<option value="2028" ><esapi:encodeForHTMLAttribute> 2028</esapi:encodeForHTMLAttribute></option>
<option value="2029" ><esapi:encodeForHTMLAttribute> 2029</esapi:encodeForHTMLAttribute></option>
<option value="2030" ><esapi:encodeForHTMLAttribute> 2030</esapi:encodeForHTMLAttribute></option>
</select>
<label class="error" for="91604_0" style="display: none;"></label>


</div>								
<div class="tdata" style="width:13%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>महीने तक / To Month</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91605_0" class="searchDrop" webservice="2"  name="91605_0"  tabindex="87" style="width:%;"  required="true"  >
<option value=""> 
Please Select</option>
<option value="1" ><esapi:encodeForHTMLAttribute> जनवरी</esapi:encodeForHTMLAttribute></option>
<option value="2" ><esapi:encodeForHTMLAttribute> फरवरी</esapi:encodeForHTMLAttribute></option>
<option value="3" ><esapi:encodeForHTMLAttribute> मार्च</esapi:encodeForHTMLAttribute></option>
<option value="4" ><esapi:encodeForHTMLAttribute> अप्रैल</esapi:encodeForHTMLAttribute></option>
<option value="5" ><esapi:encodeForHTMLAttribute> मई</esapi:encodeForHTMLAttribute></option>
<option value="6" ><esapi:encodeForHTMLAttribute> जून</esapi:encodeForHTMLAttribute></option>
<option value="7" ><esapi:encodeForHTMLAttribute> जुलाई</esapi:encodeForHTMLAttribute></option>
<option value="8" ><esapi:encodeForHTMLAttribute> अगस्त</esapi:encodeForHTMLAttribute></option>
<option value="9" ><esapi:encodeForHTMLAttribute> सितम्बर</esapi:encodeForHTMLAttribute></option>
<option value="10" ><esapi:encodeForHTMLAttribute> अक्टूबर</esapi:encodeForHTMLAttribute></option>
<option value="11" ><esapi:encodeForHTMLAttribute> नवम्बर</esapi:encodeForHTMLAttribute></option>
<option value="12" ><esapi:encodeForHTMLAttribute> दिसम्बर</esapi:encodeForHTMLAttribute></option>
</select>
<label class="error" for="91605_0" style="display: none;"></label>


</div>								
<div class="tdata" style="width:10%;">

<label class="lbl onlyforMobile" style="font-family:Arial;font-size:14px; color:#000000"> <esapi:encodeForHTMLAttribute>वर्ष  तक / To Year</esapi:encodeForHTMLAttribute>
<span class="mandatory">*</span>
</label>
<select id="91606_0" class="searchDrop" webservice="2"  name="91606_0"  tabindex="87" style="width:%;"  required="true"  >
<option value=""> 
Please Select</option>
<option value="2017" ><esapi:encodeForHTMLAttribute> 2017</esapi:encodeForHTMLAttribute></option>
<option value="2018" ><esapi:encodeForHTMLAttribute> 2018</esapi:encodeForHTMLAttribute></option>
<option value="2019" ><esapi:encodeForHTMLAttribute> 2019</esapi:encodeForHTMLAttribute></option>
<option value="2020" ><esapi:encodeForHTMLAttribute> 2020</esapi:encodeForHTMLAttribute></option>
<option value="2021" ><esapi:encodeForHTMLAttribute> 2021</esapi:encodeForHTMLAttribute></option>
<option value="2022" ><esapi:encodeForHTMLAttribute> 2022</esapi:encodeForHTMLAttribute></option>
<option value="2023" ><esapi:encodeForHTMLAttribute> 2023</esapi:encodeForHTMLAttribute></option>
<option value="2024" ><esapi:encodeForHTMLAttribute> 2024</esapi:encodeForHTMLAttribute></option>
<option value="2025" ><esapi:encodeForHTMLAttribute> 2025</esapi:encodeForHTMLAttribute></option>
<option value="2026" ><esapi:encodeForHTMLAttribute> 2026</esapi:encodeForHTMLAttribute></option>
<option value="2027" ><esapi:encodeForHTMLAttribute> 2027</esapi:encodeForHTMLAttribute></option>
<option value="2028" ><esapi:encodeForHTMLAttribute> 2028</esapi:encodeForHTMLAttribute></option>
<option value="2029" ><esapi:encodeForHTMLAttribute> 2029</esapi:encodeForHTMLAttribute></option>
<option value="2030" ><esapi:encodeForHTMLAttribute> 2030</esapi:encodeForHTMLAttribute></option>
</select>
<label class="error" for="91606_0" style="display: none;"></label>


</div>								
<div class="tdata" style="width:6%">
<a name="91348_remove" class="remove_bttn"></a>
<a name="91348_add" class="add_bttn"></a>
</div>
</div>
<input type="hidden" id="fieldSetRowCounter" name="fieldSetRowCounter" value="0" />
</div>
</fieldset>	
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925; &#x92a;&#x924;&#x94d;&#x930; &#x2f; Self Declaration&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:12px; color:#000">
<p>मैं घोषणा करता / करती हूँ कि मेरे विरुद्ध किसी भी थाना या न्यायालय में कोई अपराधिक या दिवानी का मुकदमा लंबित नहीं हैं| यदि मेरे द्वारा दी गई जानकारी गलत / त्रुटिपूर्ण पाए जाने पर मैं दण्ड का भागी होऊँगा / होऊँगी| अतः श्रीमान से निवेदन है कि आचरण प्रमाण पत्र निर्गत करने की कृपा की जाय| इसके लिए मैं सदा आभारी रहूँगा / रहूँगी|</p>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:12px; color:#000">
<input type="checkbox" value="Y" name="90952" id="90952" required="true" data-type="agreeText"/>
I Agree
<span class="mandatory">*</span>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91433"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
Thana Value
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="90" placeholder="" name="91433" data-type="text" data-groupno="79" id="91433"  minlength="0" maxlength="999"  />																
<label class="error" for="91433" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91547"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
From Date
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="91" placeholder="" name="91547" data-type="text" data-groupno="80" id="91547"  minlength="0" maxlength="99"  />																
<label class="error" for="91547" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91548"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
To Date
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="92" placeholder="" name="91548" data-type="text" data-groupno="81" id="91548"  minlength="0" maxlength="99"  />																
<label class="error" for="91548" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91564"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
thana type
</label>
<div class="cont" style="margin-left:%;width:50%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="91564_1" style="margin-right: 0; font-family:Arial; font-size:12px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="93" value="1" name="91564" id="91564_1"   />&nbsp; added</label>
</div>
<div class="tdata">
<label class="lbl" for="91564_2" style="margin-right: 0; font-family:Arial; font-size:12px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="93" value="2" name="91564" id="91564_2"   />&nbsp; Not added</label>
</div>
<label class="error" for="91564" style="display: none;"></label>
</div>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91597"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
SMS1
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="94" placeholder="" name="91597" data-type="text" data-groupno="83" id="91597"  minlength="0" maxlength="999"  />																
<label class="error" for="91597" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91598"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
SMS2
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="95" placeholder="" name="91598" data-type="text" data-groupno="84" id="91598"  minlength="0" maxlength="99"  />																
<label class="error" for="91598" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92459"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
Permanent Police Station
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="96" placeholder="" name="92459" data-type="text" data-groupno="93" id="92459"  minlength="0" maxlength="999"  />																
<label class="error" for="92459" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92645"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
Purpose of Application Hin
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="97" placeholder="" name="92645" data-type="text" data-groupno="97" id="92645"  minlength="0" maxlength="999"  />																
<label class="error" for="92645" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92697"
style="font-family:Arial;font-size:12px; color:#000;width:49%;">
Purpose of Application Eng
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="98" placeholder="" name="92697" data-type="text" data-groupno="98" id="92697"  minlength="0" maxlength="999"  />																
<label class="error" for="92697" style="display: none;"></label>
</div>
</div>
</div>
</div>		
<div id="cameraDialog" title="Capture Image" style="display: none">
<div class="table_cont noborder label_top">
<div class="trow errorDiv">
<div class="tdata">
<label id="status" class="error"></label>
</div>
</div>
<div class="trow cameraeDiv">
<div class="tdata">
<label class="lbl" for="camera">Camera</label>
<div class=cont>
<div id="webcam"></div>
</div>
<div class="camera">
<video id="video">Video stream not available.</video>
</div>
</div>
</div>
<div class="trow cameraeDiv">
<div class="tdata">
<div class=cont>
<img id="captureImage" class="pointer"
src="resources/images/Image-capture.png" />
</div>
</div>
</div>
<div class="trow cameraImageDiv" style="display: none">
<div class="tdata">
<label class="lbl" for="camera">Image</label>
<div class=cont>
<canvas width="320" height="240" id="canvas"
style="display: none"></canvas>
<img id="canvasImage" width="320" height="240"></img>
</div>
</div>
</div>
<div id="captureImageNoteDiv" style="display:none">
<font color="green">Image Captured. Please click OK to upload.</font>
</div>
<div class="trow cameraImageDiv" style="display: none">
<div class="tdata">
<div class=cont>
<img id="deleteCapturedImage" class="pointer"
src="resources/images/delete.png"></img>
</div>
</div>
</div>
</div>
</div>
<div
class="table_cont column_1 label_top  border_radius 
shadow"
style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div"
style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
Additional Details
</h4>

















<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

</head>
<body>
	<div class="trow">
		<div class="tdata">
			<label for="applLoc" class="lbl">Apply to the Office<span class='mandatory'>*</span>
			</label>
			<div class="cont" data-target="#locCoverage_DialogLoc" data-toggle="modal" >
				<input type="text" id="applLoc" data-groupno="1" required="true" title=""
					name="applLoc" placeholder="" value="" autocomplete="off"
					onkeyup="removeValue();"  data-toggle="tooltip" />
					
				<select id="appLocMultipleRoute" name="appLocMultipleRoute" style="display: none" required="true" onchange="setAppLocMultipleRouteCoverage(this)">
					<option value="">Select</option>
				</select>	
			</div>
		</div>
	</div>
	
	
	<div id="locCoverage_DialogLoc" class="modal fade" role="dialog">
		  <div class="modal-dialog">
		
		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header"> <h4 class="modal-title">Select Location</h4>
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		       
		      </div>
		      <div class="modal-body">
		      	<div id="locationContent">
		     	  <html><body><div style='width: auto; min-height: 0px; max-height: none; height: 367px;'><div class='table_cont noborder label_top'><div class='trow'><div class='tdata'><label class='lbl'>Location Type<span class='mandatory'>*</span></label>
<select id ='locationType' name='locationType' onchange='setChoice(this.value)'>
<option value = '0' >Select</option>
<option value = 'L999' >Line Department</option>
</select></div></div>
<div class='trow' id='LDLTRID' style='display:none'><div class='tdata'><label class='lbl'>Department Level</label>
<select id ='LDLListID' name='lineDeptCode' onchange='fillLevel(this.value)'>
<option value = '0' >Select</option>
<option value = '2' >Office of Superintendent of Police (SP)</option>
</select></div></div>
<div class='trow' id='TR1' style='display:none'><div class='tdata'><label class='lbl'>STATE</label>
<select id='1'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR323' style='display:none'><div class='tdata'><label class='lbl'>DIVISION-COMMISSIONARY</label>
<select id='323'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR2' style='display:none'><div class='tdata'><label class='lbl'>DISTRICT</label>
<select id='2'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='ipOriginalTR' style='display:none'><div class='tdata'><select id ='originalListID' name='originalCode'>

<option value = '0~1256588~0~L999~1' >Home Department (STATE)</option>
<option value = '1256588~1256596~0~L999~323' >Office of Deputy Inspector General (DIG)( BHAGALPUR )</option>
<option value = '1256588~1256590~0~L999~323' >Office of Deputy Inspector General (DIG)( DARBHANGA )</option>
<option value = '1256588~1256591~0~L999~323' >Office of Deputy Inspector General (DIG)( KOSHI )</option>
<option value = '1256588~1256589~0~L999~323' >Office of Deputy Inspector General (DIG)( MAGADH )</option>
<option value = '1256588~1256592~0~L999~323' >Office of Deputy Inspector General (DIG)( MUNGER )</option>
<option value = '1256588~1256597~0~L999~323' >Office of Deputy Inspector General (DIG)( PATNA )</option>
<option value = '1256588~1256593~0~L999~323' >Office of Deputy Inspector General (DIG)( PURNIA )</option>
<option value = '1256588~1256594~0~L999~323' >Office of Deputy Inspector General (DIG)( SARAN )</option>
<option value = '1256588~1256595~0~L999~323' >Office of Deputy Inspector General (DIG)( TIRHUT )</option>
</select></div></div><div class='trow' id='tpTRID' style='display:none'><div class='tdata'><label class='lbl'>Town Panchayat</label>

<select id ='tpListID' name='tpCode' onchange='setCoverageLocId(this.value)'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='cbTRID' style='display:none'><div class='tdata'><label class='lbl'></label>

<select id ='cbListID' name='cbCode' onchange='setCoverageLocId(this.value)'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='nacTRID' style='display:none'><div class='tdata'><label class='lbl'>Notified Area Council</label>

<select id ='nacListID' name='nacCode' onchange='setCoverageLocId(this.value)'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='mcTRID' style='display:none'><div class='tdata'><label class='lbl'>Municipal Corporation</label>

<select id ='mcListID' name='mcCode' onchange='setCoverageLocId(this.value)'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='mTRID' style='display:none'><div class='tdata'><label class='lbl'>Municipal Council</label>
<select id ='mListID' name='mpCode' onchange='setCoverageLocId(this.value)'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='zpTRID' style='display:none'><div class='tdata'><label class='lbl'>Zilla Parishad</label>
<select id ='zpListID' name='tpCode' onchange='getIpList()'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='ipTRID' style='display:none'><div class='tdata'><label class='lbl'>Panchayat Samiti</label>
<select id ='ipListID' name='ipCode' onchange='getGpList()'><option value = '0' >Select</option></select></div></div>
<div class='trow' id='gpTRID' style='display:none'><div class='tdata'><label class='lbl'>Gram Panchayat</label>
<select id ='gpListID' name='gpCode'  onchange='setCoverageLocId(this.value);'><option value = '0' >Select</option></select></div></div> <div class='trow' id='ldTRID' style='display:none'><div class='tdata'><label class='lbl'>Select Office</label><select id ='ldListID' name='ldCode'  onchange='setCoverageLocId(this.value);'><option value = '0' >Select</option></select></div></div>

<div class='trow' style='display:none'><div class='tdata'><input type='hidden' id='hiddOrgLevel' value='1,323,2,-' /></div></div></div></div></body></html> 
		        </div>
		      </div>
		 		<div class="modal-footer">
		 			<div class="text-center" id="modalfooter">
		     		  <button type="button" class="btn btn-success" id="applBtn">Ok</button>
  					<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
  					</div>
		 		</div>
		    </div>
		
		  </div>
</div>
	
	
	
	
	
	<input type="hidden" id="serviceId" value="12050017">
	<input type="hidden" id="appliedServiceId" value="12050017">
	<input type="hidden" id="locationName" value="">
	<input type="hidden" id="deocovId" value="">
</body>
</html>

</div>
<!-- -------------------------------code for captcha start---------------------- -->
<div id="captchaImageDiv" class="table_cont column_1 label_top  border_radius 
shadow"
style="background:#FFFAE3;color:#ccc">

    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
		 <div align="center">
		   <font color="black"><b>Word verification</b></font><br /><br>
		      <img src="captchaImage" id="captchaImage" style="width: 200px; height: 45px"/>
		      <img src="resources/images/refresh_icon2.png" onclick="captchaResetImage('captchaImage', 'captchaAnswer');" align="top" style="width: 40px;height: 40x" 
				title="Refresh Captcha"/><br />
					<font color="black">Please enter the characters shown above</font><br />
					<br>
					<input id="captchaAnswer" name="captchaAnswer" style="width: 140px" type="text"  autocomplete="off"/> 
					<br>
					<font color="red"> <div id="captchaError"> </div></font>
		</div>
</body>
</html>
</div>
<!---------------------------------code for captcha end------------------------>	
<div class="table_cont footer_new" style="border: none">
<p style="text-align:center">Content on this website is owned, by the General Administration Department, Government of Bihar<br />
Site is technically designed, hosted and maintained by National Informatics Centre (NIC)<br />
Powered By &mdash; ServicePlus</p></div>
<div class="box">
<div class="box-footer">
<div class="col-12">
<div class="float-right">
<button type="button" class="btn btn-info" id="draft_btn"  >
<i class="fa fa-floppy-o"></i> Draft
</button>
<button type="submit" class="btn btn-success" id="submit_btn" >
<i class="fa fa-floppy-o"></i> Submit
</button>
<button type="button" class="btn btn-danger" id="cancel_btn" onclick="CloseForm()">
<i class="fa fa-times-circle"></i> Close
</button>
<button type="button" class="btn btn-primary" id="reset_btn" onclick="loadPage(1)">
<i class="fa fa-refresh"></i> Reset
</button>
</div>
</div>
</div>
</div>
</body>
</html>   



<script
	src="/resources/js/xlsx.core.min.js"></script>
<script
	src="/resources/js/xls.core.min.js"></script>
<style type="text/css">
.topdialog{
z-index: 9999 !important;
}
 .modal-content {
    background: linear-gradient(#0eafde , #022d4a ) !important;
}
.modal-body {
    background-color: #f0f0f0;
}
.modal-body .table_cont {
	overflow-y: auto;
    height: 325px;
}
.ui-widget-shadow {
    opacity: .6;
    COLOR: #FFF;
}
 .ui-tooltip {
    z-index: 97;
}
</style>
 <style>
 .customhide{
 	display:none;
 }
 .modal-backdrop.in#modalSubmit{
 	opacity:0.3;
 }
 .processing-text, .progressbar-text{
 	position:fixed;
	top:40%;
	left:0;
	right:0;
	/*z-index:99999;*/
	height: 100%;
	width: 100%;
 }
 .progressbar-text{
 	width:50%;
	margin:0 auto;
 }
 .progressbar-text .progress{
 	height:15px;
 }
.progressbar-text .progress-bar {
 	line-height:15px;
 }
 .progress-bar-animated {
     -webkit-animation: progress-bar-stripes 5s linear infinite;
    animation: progress-bar-stripes 5s linear infinite;
 }
  @keyframes progress-bar-stripes {
    from { background-position: 0px 0; }
    to { background-position: 150px 0; }
  }
 .processing-text .loading{
 letter-spacing:2px;
 text-transform:uppercase;
 font-weight:normal;

 }
  .processing-text .h4{
 	color: #3e77c1;
 }
 .processing-text .loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
  animation: ellipsis steps(4,end) 900ms infinite;
  content: "\2026"; /* ascii code for the ellipsis character */
  opacity: 0;
  
}

@keyframes ellipsis {
  to {
    opacity:1;    
  }
}
 @-webkit-keyframes ellipsis {
  to {
    width: 1.25em;    
  }
}
.table_cont .tdata {
margin-bottom: 8px !important;
}
 </style>


 

<script type="text/javascript">	
var access_from = "M";
var access_from_source = "";
   
$(function(){
	$("#modalSubmit").hide();
	$("#processing-text").hide();
	$("#progressbar-text").hide();
	 if(window.parent!=window){
			$("#cancel_btn").hide();
		}
	 

	  var sendForEditFlag = "";
	  if(sendForEditFlag =='Y') {
		  $("#draft_btn").hide();
	  }
	if('N'=='N'){
			$("#draft_btn").hide();
	}
    $(":text").attr("autocomplete", "off");
    $(":hidden").attr("autocomplete", "off");
    $('#otp').keypress(function(event){
	    if (event.keyCode === 10 || event.keyCode === 13) 
	    	return false;

	  });
    $("[data-type='AadhaarNumber']").keypress(function(event){
    	if (event.keyCode === 10 || event.keyCode === 13) 
	    	return false;
    	});
    
    if(''!=''){
    	$("#cancel_btn").hide();
    }
    
    if('false'=='true' && ''!='true'){
    	$("#draft_btn").hide();
    }
    
    
}); 
var subMode="";
var slotCounter=1;
var slotJson='';
var slotAttrJson='';
var slotFieldsetJson='';
var aadhaarException = "";
var createFlag="";
var serviceMode='M';
var applRefNo='';
var jsonObj = [];
var controllerName = 'applyPageForm.do';
var uidFlag="true";
var aadharJson="";
var uidJson='[]';
var demoGraphicJson =uidJson != ''? $.parseJSON(uidJson):'';
$("[data-type='AadhaarNumber']").not("[data-grid]").each(function(){
	var id = $(this).attr("id");
	 var aadharNo = $(this).val();
	 var isVerified = "";
	 var verify = "true";
	 var mandatory = $(this).attr("required");
	 var counter = 0;
	 var verificationType = $(this).attr("data-verificationtype");
	 var rowCounter="";
	 createAadhaarJson(id,aadharNo,isVerified,verify,mandatory,counter,verificationType,rowCounter);
});
var AadharjsonString = JSON.stringify(jsonObj);
aadharJson =AadharjsonString != null? $.parseJSON(AadharjsonString):'';
if($("[data-type='AadhaarNumber']").length>0){
	 uidFlag="false";
}

	   var userJsonObj = '' != null && '' != ''? $.parseJSON(''):'';
	   var imageFileArray ='' != null && '' != ''? $.parseJSON(''):'';
	   var combinedJson = '{"attribute":{"91377":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90956":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"90957":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"92697":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90950":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"92459":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90952":{"exception":"","type":"agreeText","ekyc_attr":"null","values":{"value":""}},"90951":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"92641":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"92642":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"92645":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91433":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"92643":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"91547":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91548":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"92993":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"92992":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"91814":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91817":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91815":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91816":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90880":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"91332":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91333":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90882":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91330":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90881":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91331":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90884":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91336":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90883":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91337":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91334":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91335":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90885":{"exception":"","type":"declareText","ekyc_attr":"null","values":{"value":""}},"90918":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90917":{"exception":"","type":"AadhaarNumber","ekyc_attr":"null","values":{"value":""}},"90919":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90877":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"90910":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91329":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90876":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"90879":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"90912":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91327":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90878":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"90911":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91328":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90914":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90913":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90916":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90915":{"exception":"","type":"image","ekyc_attr":"null","values":{"value":""}},"91322":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91564":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91325":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91326":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90875":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91323":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91324":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"90907":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90906":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90909":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90908":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90901":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90989":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90900":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90903":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90902":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90904":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91993":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91597":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91996":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91598":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91994":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91995":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90899":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90898":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90938":{"exception":"","type":"email","ekyc_attr":"null","values":{"value":""}},"90937":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"91343":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91344":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91341":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91342":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90895":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91347":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90894":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91348":{"exception":"","type":"fieldset","ekyc_attr":"null","values":{"value":""}},"90897":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91345":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90896":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91346":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91340":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90921":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90920":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91338":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90923":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91339":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90922":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}}}}' ;
	   var ekycJson = '' != null && '' != ''? $.parseJSON(''):'';
	   var jsonData ='' != null && '' != ''? $.parseJSON(''):'';
	   var applicationId='';
	   var autoFilledValJson ='' != null && '' != ''? $.parseJSON(''):'';
	   var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
	   var draftRefNo     = '';
	   var mappingFlag  	  = 'true';
       var stateId       	  = '10';
       var attrId			  = '90897';
       var statusApp          =  'S';
       var pageload=false;
       var userChoice		  = '';
       var listValue		  = '';
       var locationId 		  = '';
       var selectedDeptLevel  = '';
	   var selectedLeveStr    ='';
	   var selectedAttrId     = '';
	   var serviceId          =  $('#serviceId').val();// '12050017'; 
	   var errormsg			  =  '';
	   var webServiceOptionList='' != null && '' != ''? $.parseJSON(''):'';
	   var allowedAttrForEdit = '';
	   var sendForEditFlag =  '';
	   var externalAttrIdList= '';
	function routeToLocation(){
		if($("#"+attrId).val() != '' && $("#"+attrId).val() != 'null'){
			LGDDataService.getMappedLocation(parseInt(stateId),parseInt(serviceId),parseInt(attrId),parseInt($('#'+attrId).val()),{callback:function(data)
			{
				if(data != '' && data.length > 0){
					if(data.length == 1){
						$('select[name=appLocMultipleRoute] option[value!=""]').remove();	
						$('#appLocMultipleRoute').hide();
						$('#applLoc').show();
						for(var key in data){
							$('#applLoc').prop('title', data[key].localBodyNameEnglish);
							$('#applLoc').val(data[key].localBodyNameEnglish);
							$('#coverageLocationId').val((data[key].spdiCoverageLocation)); 
		     			}
					}else if(data.length > 1){
						$('select[name=appLocMultipleRoute] option[value!=""]').remove();	
						for(var key in data){
							$('select[name=appLocMultipleRoute]').append($('<option>').val(data[key].spdiCoverageLocation).html(data[key].localBodyNameEnglish));  
		     			}
						$('#appLocMultipleRoute').show();
						$('#applLoc').hide();
						
					}
				}else{
					alert("You cannot apply as the selected "+$("label[for='"+attrId+"']").text().trim()+"is not mapped to any processing location");
					$('#applLoc').prop("disabled",false);
					$('#applLoc').val('');
					$('#coverageLocationId').val('-1');
					$('#applLoc').prop('title','');
					$('#appLocMultipleRoute').val('');
					$('#appLocMultipleRoute').hide();
					$('#applLoc').show();
				}
		    },
		     		async: false
		     		});
		    }
			else{
				$('#applLoc').val('');
				$('#coverageLocationId').val('-1');
				$('#appLocMultipleRoute').val('');
				$('#appLocMultipleRoute').hide();
				$('#applLoc').show();
			}
	}
	
	function setAppLocMultipleRouteCoverage(selectedCoverageID){
		$('#coverageLocationId').val(selectedCoverageID.value);
	}
	
	function removeValue(evt){
		$('#applLoc').val('');
		$('#coverageLocationId').val('');
	}						

	function getExternalInfo(){
		var externalInfo='';
		return externalInfo;
	}
	
	function getDigilockerId(){
		var digilockerId=$("#digilockerId").val();
		return digilockerId;
	}
	
	function getDigilockerReferenceKey(){
		var digilockerRefKey=$("#digilockerRefKey").val();
		return digilockerRefKey;
	}

		var  submitForm = function(form){
		    var captchaChk=checkCaptchaCode("captchaAnswer","captchaError");
		    var xyz = true;
		    if(captchaChk==true){
		    	
		    if(uidFlag=="false"){
		    	xyz = false;
		       xyz = validateAadhar(function(){
		    	   submitApplForm(form);
		       });
		    }
		    }
			if(captchaChk==true && xyz){
				submitApplForm(form);
			}else{
				$("#modalSubmit").hide();
				$("#processing-text").hide(); 
				$("#modalSubmit").removeClass("fade in");
			}
		};
		
		function submitApplForm(form){
			CreateXmlHidden();//xml
			 $('#applLoc').prop("disabled",false);
			 form.method = "post";
			 form.action = "applyPageForm.do";//?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda
			 form.submit();
			$('#SubmitButton').attr('disabled', 'disabled');
		}
		
		function FormReset(source){
			if(confirm('Are you sure you want to reset the form?')){
				if(source=="E"){
					//window.location="editApplicationForm.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&applicationRefNo=&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda&grievanceRefNo=";
					var url="editApplicationForm.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&applicationRefNo=&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda&grievanceRefNo=";
					formPost(url);
				}else{
					//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&serviceId=12050017&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda&grievanceRefNo=";
					var url="renderApplicationForm.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&serviceId=12050017&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda&grievanceRefNo=";
					formPost(url);
				}									
			}
		}
		  function CloseForm(){
			
			  	var access_from = "M";
			  	var access_from_source = "";
				if(access_from=='M' && access_from_source=='U') {
			  		answer = confirm('The data of current page will not be saved. Are you sure you want to close the form?');
					if (answer !="0"){
						window.location="";
					}
			  	} else if(access_from=='M' && access_from_source=='MASP') {
			  		answer = confirm('The data of current page will not be saved. Are you sure you want to close the form?');
					if (answer !="0"){
						window.location="";
					}
			  	} else if(access_from=='M' && access_from_source=='C') {
			  		answer = confirm('The data of current page will not be saved. Are you sure you want to close the form?');
			  		if (answer !="0"){
			  			Android.androidFucCallServiceList('dataaa');
					}
			  		
			  	} 
			  	else if(access_from=='M' && access_from_source=='') {
		  		 
			  		answer = confirm('The data of current page will not be saved. Are you sure you want to close the form?');
			  		if (answer !="0"){
			  			var path=window.location.pathname;
			  			window.location.href=window.location.protocol+'//'+window.location.hostname+path.substring(0,path.lastIndexOf("/") + 1);
					}
		  		}
			  	else {
					var source='M';
					answer = confirm('The data of current page will not be saved. Are you sure you want to close the form?');
					if (answer !="0"){
						if(source=="E"){
							window.location="appliedService.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
						}else if(source == "CTZN" || source=="CS"){ 
							var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";								
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
								formPost(url);
							}
						}else{
						
							var datachk='Y';
							if(datachk.trim()=="Y"){
								 window.history.back();
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
								formPost(url);
							}
						}		
							
					}
				 }
	  	}
		function FormClose(source){
			if(source=="new"){
				//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&serviceId=12050017&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda";
				var url="renderApplicationForm.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&serviceId=12050017&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda";
				formPost(url);
			}else{
				answer = confirm("Are you sure you want to close the form?");
				if (answer !="0"){
					if(source=="E"){
						window.location="appliedService.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
					}else if(source == "CTZN" || source=="CS"){ 
						var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
								formPost(url);
							}
					}else{
						
						var datachk='Y';
						if(datachk.trim()=="Y"){
							 window.history.back();
						}else{
							//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
							var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
							formPost(url);
						}
					}
				}
			}
		}
		function captchaResetImage(imageId, focusId){
		    	var img = document.getElementById(imageId);
		    	img.src = "captchaImage?id"+new Date().getTime();
		    	var txtValue = document.getElementById(focusId);
		    	txtValue.focus();
		}
		 
		  		
		 function captchaResetImage(imageId, focusId){
		    	var img = document.getElementById(imageId);
		    	img.src = "captchaImage?id"+new Date().getTime();
		    	var txtValue = document.getElementById(focusId);
		    	txtValue.focus();
		    }
		 
		  function checkCaptchaCode(ansId,divId){
            	var status=true;
            	if(document.getElementById(ansId)!=null){
            		var xmlhttp;
            		if (window.XMLHttpRequest) {
            			xmlhttp = new XMLHttpRequest();
            		} else if (window.ActiveXObject) {
            			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            		} else {
            			alert("Your browser does not support XMLHTTP!");
            		}
            		var answer=document.getElementById("captchaAnswer").value;
            		if(answer==null || answer == ''){
            			status = false;
            			document.getElementById(divId).innerHTML="Please Enter the Security Code Shown Above";
            		}else{
		            		var URL = "checkCaptchaCode.html?answer="+answer;
            		
            		xmlhttp.onreadystatechange = function() {
            			if (xmlhttp.readyState == 4) {
            				if(xmlhttp.responseText=="" || xmlhttp.responseText=="Y"){
            					status=true;
            				}else{
            					status=false;
            					document.getElementById(divId).innerHTML="You have entered wrong characters";
            				}
            			}
            		};
            		xmlhttp.open("GET", URL, false);
            		xmlhttp.send(null);
            	}
            }
           	return status;
           }
		  function updateMe(attrId,idVal,text) {
			  $("#"+attrId).val(idVal);
			  $("#"+attrId+"_text").val(text);
			}
		 
		  function viewLgdDept(spdiAttributeId,spdiStateId){
				if(spdiAttributeId!=null && spdiStateId!=''){
					var url="viewLGDDepartment.do?spdiStateId="+spdiStateId+"&spdiAttributeId="+spdiAttributeId+"&OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
					$("#customPopup").modal('show');
					$("#iframeId").attr("src", url);
					//window.open(url,"LGD","minimizable=no,scrollbars=no,resizable=0,titlebar=no,location=no,top=100,left=500,width=520,height=450");
				}
			}
		  
		  function closeModalWindow(){
			  $("#customPopup").modal('hide');
		  }  
		  function viewHelpDoc(){
			  var access_from = "M";
			  	var access_from_source = "";
				if(access_from=='M' && access_from_source=='C') {
					Android.androidFucHelpDocApplForm("-_-12050017-_-4236");
				} else {
					var url="viewHelpDoc.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&fileName=&serviceId=12050017&templId=4236";
					formPostPopup('P~ShowDocument','400~400','',url);
				}
				/* window.open(url,"ShowDocument",'width:400px;height:400px;scroll:no');
				window.focus(); */
			}
		  
		 var  submitDraft = function(form){
		 		var next='false';
		 		var captchaChk=true;
		 		if(next == "false")
		 		{
			     captchaChk=checkCaptchaCode("captchaAnswer","captchaError");
			  }
			    var xyz = true;
			    if(captchaChk==true){
			    	
			    if(uidFlag=="false"){
			    	xyz = false;
			       xyz = validateAadhar(function(){
			    	   submitDraftMode(form);
			       });
			    }
			    }
				if(captchaChk==true && xyz){
					submitDraftMode(form);
				}else{
					$("#modalSubmit").hide();
					$("#processing-text").hide(); 
					$("#modalSubmit").removeClass("fade in");
				}
			};
			
			function submitDraftMode(form){
				var formcheckFlag = formcheck();
				 if(formcheckFlag){
					 CreateXmlHidden();//xml
					 $('#applLoc').prop("disabled",false);
					 form.method = "post";
					 form.action = "saveApplDraft.do";//?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA&UUID=12bf8bd6-8146-411e-9fed-ebf816a98fda
					 form.submit();
					$('#SubmitButton').attr('disabled', 'disabled');	 
				 }else{
					 alert("Please fill at least one field.");
					 $("#modalSubmit").hide();
					 $("#processing-text").hide(); 
					 $("#modalSubmit").removeClass("fade in");
				 }
				 
			}
			function formcheck() {
				var requiredFilled = false;
				try{
				   var allfields = $(':input').filter(':visible');
				   $.each(allfields, function(i, field){
					   var attrType= $(this).attr("type");
					   if(typeof(attrType)!='undefined' && !(attrType =='button' || attrType =='submit' || attrType =='cancel' || attrType =='reset') ){
						  if((attrType == 'checkbox' || attrType == 'radio')){
							        if(field.checked){
							        	requiredFilled = true;	
							        }
						  }else{
							  if(typeof(field.value)!='undefined' && field.value.trim() !='' && $(this).attr("name")!='applLoc'){
					   				requiredFilled = true;
				   			}
						  }
						   
					   }
				   }); 
				}catch(e){};
				 return requiredFilled;
				}
	</script>
				<div class="modal fade" id="customPopup" role="dialog">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
				
				<h4 class="modal-title">Select</h4>
<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						x
					</button>
				
				</div>
				<div class="modal-body">
					<iframe width="100%" id='iframeId' src=''
						style="min-height: 200px;border:0px;"></iframe>
				</div>
			</div>
		</div>
	</div>	
							
<script type="text/javascript" src="resources/js/servicespecificjs/10/12050017_4236.js"
defer="defer"></script>
</form>
<div class="processing-text" id="processing-text" style="display:none">
<div class="text-center">
<i class="fa fa-spinner fa-spin fa-5x text text-primary"></i><br />
<span class="h4">PROCESSING<i class="loading"></i></span>
</div>
</div>
<div class="modal-backdrop fade" id="modalSubmit"></div>
</div>
</div>
</body>
<script type="text/javascript">
$(document).ready(function(){
makeReadOnlyNonEditable();
if("" == "Y"){
 $('#applLoc').prop("disabled",true);
}
$(".datetimeimg").on("click",function(){
$(this).parent().find("input[type='text']").datetimepicker('show');
});
$( ".datepicker").datepicker({
showOn: "button",
changeMonth: true,
changeYear: true,
dateFormat:'dd/mm/yy',
buttonImage: "resources/images/calender.gif",
buttonImageOnly: true,
showOn:'both',
buttonText: 'Click here to select date'
 });
$("#ApplicationFormLayout").validate({
ignoreTitle: true,
submitHandler: function(form) {
if(typeof(customOnSubmitFunctions) == 'function'){
if(customOnSubmitFunctions()){
$("#modalSubmit").show();
 $("#processing-text").show();
 $("#modalSubmit").addClass("fade in");
submitForm(form);
}
}else{
$("#modalSubmit").show();
 $("#processing-text").show();
 $("#modalSubmit").addClass("fade in");
submitForm(form);
}
}
    });
if(mappingFlag == 'true'){
if($("#"+attrId+"_text").length ==1){
$("#"+attrId+"_text").blur(function (){
routeToLocation();
});
}else{
$("#"+attrId).blur(function (){
routeToLocation();
});
}
}
$("#date_txt").on("click",function(){
$('#date_txtError').attr("style","display:none");
});
$("select[name='setupType']").on("change",populateLgd);
var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
});
</script>

<script type="text/javascript">		
 $(document).ready(function(){
		
}); 
</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type='text/javascript' language="javascript">
globalCountValidate=0;
function openOTPDialouge(attrValue,attrType,attrId,title,gridCounter,callback){
globalAttrValue= attrValue;
globalAttrType=attrType;
globalAttrId=attrId;
globalTitle=title;
globalGridCounter=gridCounter;
$("#dynamicText").empty();
$('#otpError').text('').css('text-align','center').hide();
$('#otp').val('');
var str="";
var resendOtpFlag=$("#digilockerPopUp").data('resendOtpFlag');
if(attrValue!=null && attrValue != "" && attrValue != undefined){
var attrVal=attrValue;
var attrValStart = attrVal.substring(0, 3);
var attrValEnd = attrVal.substring(7, 10);
var UidNumber="";
if(resendOtpFlag){
$('#resendOTP').show();
}
if(gridCounter!=null && gridCounter!=""){
UidNumber=$("#"+attrId+"_"+gridCounter+"_val").val();
}else{
UidNumber=$("#"+attrId+"_val").val();
}
if(attrType=="mobileNo"){
str="One time password (OTP) has been sent to the mobile number "+attrValStart+"XXXX"+attrValEnd+".";
}else if(attrType=="email"){
str="One time password (OTP) has been sent to the email id "+attrValStart+"XXXX"+attrValEnd+".";
}else if(attrType=="AadhaarNumber"){
str="Please enter the OTP received in your registered mobile number from UIDAI for "+UidNumber+".";
$("#uid").val(attrVal);
}
}
if ($('#dynamicText').is(':empty')){
$("#dynamicText").append(str);
}
$('#otpError').hide();
var $otpForm=$('#otp-dialogue-form');
var validateButtonTxt="Validate";
if(globalCountValidate>0){
validateButtonTxt="Validate "+globalCountValidate+"/4";
}
$("#titleDiv").empty();
$("#titleDiv").html(title);
$.unblockUI();
$('#digilockerPopUp').modal({backdrop: 'static', keyboard: false});
$("#digilockerPopUp").data('param_2', callback).data('attrId_2', attrId).data('attrVal_2', attrValue).data('gridCounter_2', gridCounter).data('resendOtpFlag', resendOtpFlag).modal('show');
$('.ui-dialog-buttonpane button').each(function(){
if($(this).text()=='Submit' || $(this).text() == 'Cancel'){
$(this).attr('disabled', 'disabled').hide();
}
});
if ($("#dialog").dialog ("isOpen")){
$('#otp-info-div').show();
$('.ui-dialog-buttonpane button').each(function(){
if($(this).text()=='Submit' || $(this).text() == 'Cancel'){
$(this).prop('disabled', false).show();
}
});
}
}
function closePopUp(){
var aadhaarAttrId=$("#digilockerPopUp").data('attrId_2');
$.unblockUI();
 globalCountValidate=0;
 $("#"+aadhaarAttrId+"_txt").val("");
 $("#"+aadhaarAttrId+"_val").val("");
 $("#"+aadhaarAttrId+"_txn").val("");
   return true;
}
function closePopUpBoth(){
var aadhaarAttrId=$("#aadhaarBothPopUp").data('attrId_3');
$.unblockUI();
 globalCountValidate=0;
 $("#"+aadhaarAttrId+"_txt").val("");
 $("#"+aadhaarAttrId+"_val").val("");
 $("#"+aadhaarAttrId+"_txn").val("");
 $('.modal-backdrop').remove();
   return true;
}
function validateOtpFunction(){
var otpEntered=$('#otp').val().trim();
var aadhaarAttrId=$("#digilockerPopUp").data('attrId_2');
var attrValue=$("#digilockerPopUp").data('attrVal_2');
var gridCounter=$("#digilockerPopUp").data('gridCounter_2');
var transactionID=$('#digilockerPopUp').data('transactionID');
var resendOtpFlag=$('#digilockerPopUp').data('resendOtpFlag');
if(globalCountValidate<4){
if(typeof otpEntered != 'undefined' && otpEntered!=''){
$.blockUI();
if(globalAttrType=="mobileNo"){
CommonService.verifyOTPSMS(otpEntered,attrValue, { callback:function(data) {
if(data){
alert("Verified");
$("#digilockerPopUp").modal("hide");
$.unblockUI();
 $('.modal-backdrop').remove();
}else{
openOTPDialouge(globalAttrValue,globalAttrType,globalAttrId,globalTitle);
$('#otpError').text('Invalid OTP').css('text-align','center').show();
globalCountValidate=globalCountValidate+1;
validateButtonTxt="Validate "+globalCountValidate+"/4";
$('#validateOTP').text(validateButtonTxt);
$.unblockUI();
}
},errorHandler:function(message) { alert("Oops: " + message);}
});
}else if(globalAttrType=="email"){
CommonService.verifyOTPEmail(otpEntered,attrValue, { callback:function(data) {
if(data){
alert("Verified");
$("#digilockerPopUp").modal("hide");
$.unblockUI();
 $('.modal-backdrop').remove();
}else{
openOTPDialouge(globalAttrValue,globalAttrType,globalAttrId,globalTitle);
$('#otpError').text('Invalid OTP').css('text-align','center').show();
globalCountValidate=globalCountValidate+1;
validateButtonTxt="Validate "+globalCountValidate+"/4";
$('#validateOTP').text(validateButtonTxt);
$.unblockUI();
}
},errorHandler:function(message) { alert("Oops: " + message);}
});
}else if(globalAttrType=="AadhaarNumber"){
var callback=$("#digilockerPopUp").data('param_2');
var uid= $("#uid").val();
var serviceId=$("#serviceId").val();
var txn="";
if(globalGridCounter!=null && globalGridCounter!=""){
txn=$("#"+aadhaarAttrId+"_"+globalGridCounter+"_txn").val();
}else{
txn=$("#"+aadhaarAttrId+"_txn").val();
}
UidVerificationService.validateUidOTP(otpEntered,uid,serviceId,txn, { callback:function(data) {
var result=data.split("~");
if(result[0]=="true"){
alert("Aadhaar Verified");
$("#digilockerPopUp").modal("hide");
if(gridCounter!=null && gridCounter!=""){
$("#"+aadhaarAttrId+"_"+gridCounter).val(result[1]);
}else{
$("#"+aadhaarAttrId).val(result[1]);
}
 $.each(aadharJson, function(i,item){
if(item!=null && item!="" && item!="undefined" && !(typeof item === "undefined")){
var jsonAttrId = item.id;
var jsonAadharNo=  item.aadharNo;
var jsonIsVerified = item.isVerified;
if(gridCounter!=null && gridCounter!=""){
if(jsonAadharNo==uid && jsonAttrId==aadhaarAttrId+"_txt_"+gridCounter){
item.isVerified='Y';
callback();
return true;
}
}else{
if(jsonAadharNo==uid && jsonAttrId==aadhaarAttrId+"_txt"){
item.isVerified='Y';
callback();
return true;
}
}
 }
});
$.unblockUI();
}else{
$.unblockUI();
alert(data);
 $("#"+aadhaarAttrId+"_txt").val("");
 $("#"+aadhaarAttrId+"_val").val("");
 $("#"+aadhaarAttrId+"_txn").val("");
}
},async:false,errorHandler:function(message) { alert("Oops: " + message);}
});
}
    }else{
$('#otpError').text('Please enter OTP').css('text-align','center').show();
$('#otp').val('');
$.unblockUI();
 $('.modal-backdrop').remove();
    }
}else{
$('#otpError').text('Number of attempts reached 4. Please try after sometime').css('text-align','center').show();
$.unblockUI();
 $('.modal-backdrop').remove();
}
}
function validateBothOtpFunction(){
var aadhaarAttrId=$("#aadhaarBothPopUp").data('attrId_3');
var gridCounter=$("#aadhaarBothPopUp").data('gridCounter_3');
if(globalCountValidate<4){
var otpEntered=$('#otpBoth').val().trim();
var callback=$("#aadhaarBothPopUp").data('param_3');
if(typeof otpEntered != 'undefined' && otpEntered!=''){
$.blockUI();
 if(globalAttrType=="AadhaarNumber"){
 var uid= $("#uid").val();
var serviceId=$("#serviceId").val();
var txn="";
if(globalGridCounter!=null && globalGridCounter!=""){
txn=$("#"+aadhaarAttrId+"_"+globalGridCounter+"_txn").val();
}else{
txn=$("#"+aadhaarAttrId+"_txn").val();
}
UidVerificationService.validateUidOTPBoth(otpEntered,uid,serviceId,txn,globalJsonValue, { callback:function(data) {
var result=data.split("~");
if(result[0]=="true"){
alert("Aadhaar Verified");
$("#aadhaarBothPopUp").modal("hide");
if(gridCounter!=null && gridCounter!=""){
$("#"+aadhaarAttrId+"_"+gridCounter).val(result[1]);
}else{
$("#"+aadhaarAttrId).val(result[1]);
}
 $.each(aadharJson, function(i,item){
if(item!=null && item!="" && item!="undefined" && !(typeof item === "undefined")){
var jsonAttrId = item.id;
var jsonAadharNo=  item.aadharNo;
var jsonIsVerified = item.isVerified;
if(gridCounter!=null && gridCounter!=""){
if(jsonAadharNo==uid && jsonAttrId==aadhaarAttrId+"_txt_"+gridCounter){
item.isVerified='Y';
callback();
return true;
}
}else{
if(jsonAadharNo==uid && jsonAttrId==aadhaarAttrId+"_txt"){
item.isVerified='Y';
callback();
return true;
}
}
 }
});
$.unblockUI();
}else{
$.unblockUI();
alert(data);
$("#"+aadhaarAttrId+"_txt").val("");
$("#"+aadhaarAttrId+"_val").val("");
$("#"+aadhaarAttrId+"_txn").val("");
}
},async:false,errorHandler:function(message) { alert("Oops: " + message);}
});
}
    }else{
$('#otpBothError').text('Please enter OTP').css('text-align','center').show();
$('#otpBoth').val('');
    }}else{
$('#otpBothError').text('Number of attempts reached 4. Please try after sometime').css('text-align','center').show();
    }
}
 function openOTPDialougeBoth(attrValue,attrType,attrId,title,gridCounter,demoJsonValue,callback){
globalAttrValue= attrValue;
globalAttrType=attrType;
globalAttrId=attrId;
globalTitle=title;
globalJsonValue=demoJsonValue;
globalGridCounter=gridCounter;
$('#otpBothError').text('').css('text-align','center').hide();
$('#otpBoth').val('');
$("#dynamicText2").empty();
var str="";
if(attrValue!=null && attrValue != "" && attrValue != undefined){
var attrVal=attrValue;
var attrValStart = attrVal.substring(0, 3);
var attrValEnd = attrVal.substring(7, 10);
var UidNumber="";
if(gridCounter!=null && gridCounter!=""){
UidNumber=$("#"+attrId+"_"+gridCounter+"_val").val();
}else{
UidNumber=$("#"+attrId+"_val").val();
}
if(attrType=="AadhaarNumber"){
str="Please enter the OTP received in your registered mobile number from UIDAI for "+UidNumber+".";
$("#uid").val(attrVal);
}
}
if ($('#dynamicText2').is(':empty')){
$("#dynamicText2").append(str);
}
$('#otpError').hide();
$("#titleDiv2").empty();
$("#titleDiv2").html(title);
$('#aadhaarBothPopUp').modal({backdrop: 'static', keyboard: false});
$("#aadhaarBothPopUp").data('param_3', callback).data('attrId_3', attrId).data('attrVal_3', attrValue).data('gridCounter_3', gridCounter).modal('show');
$('.ui-dialog-buttonpane button').each(function(){
if($(this).text()=='Submit' || $(this).text() == 'Cancel'){
$(this).attr('disabled', 'disabled').hide();
}
});
if ($("#dialog").dialog ("isOpen")){
$('#otp-info-div').show();
$('.ui-dialog-buttonpane button').each(function(){
if($(this).text()=='Submit' || $(this).text() == 'Cancel'){
$(this).prop('disabled', false).show();
}
});
}
}
 function openAadharConsent(attrId,authType){
var aadhaarAttrId=attrId.split("_")[0];
var consent=$("#"+aadhaarAttrId+"_consent").val();
var gridCounter="";
if(attrId.split("_").length>2){
 gridCounter=attrId.split("_")[2];
 }
$("#purpose").empty();
$("#purpose").append("'"+consent+"'");
$( "#otp-consent-form" ).modal({backdrop: 'static', keyboard: false});
$( "#otp-consent-form" ).data('param_1', aadhaarAttrId).data('param_2', authType).data('param_3', gridCounter).modal('show');
}
function closeConsent(){
var aadhaarAttrId=$("#otp-consent-form").data('param_1');
 $("#"+aadhaarAttrId+"_txt").val("");
}
function agreeConsent(){
var aadhaarAttrId=$("#otp-consent-form").data('param_1');
var authType=$("#otp-consent-form").data('param_2');
var gridCounter=$("#otp-consent-form").data('param_3');
if(authType!=null && authType=="3"){
var uid= $("#"+aadhaarAttrId+"_txt").val();
UidVerificationService.validateAadhaar(uid,serviceId,aadhaarAttrId,getUserId().toString(), { callback:function(data) {
var result=data.split("~");
if(result[0]=="true"){
if(gridCounter!=null && gridCounter!=""){
$("#"+aadhaarAttrId+"_"+gridCounter+"_txn").val(result[1]);
$("#"+aadhaarAttrId+"_"+gridCounter+"_val").val(uid);
$("#"+aadhaarAttrId+"_"+gridCounter).val(result[1]);
}else{
$("#"+aadhaarAttrId+"_txn").val(result[1]);
$("#"+aadhaarAttrId+"_val").val(uid);
$("#"+aadhaarAttrId).val(result[1]);
}
openeKycOTP(uid,parseInt(aadhaarAttrId),gridCounter);
}else{
alert(result[0]);
$("#"+aadhaarAttrId+"_txt").val("");
$.each(aadharJson, function(i,item){
if(item!=null && item!="" && item!="undefined" && !(typeof item === "undefined")){
if(item.isVerified!=true){
item.isVerified='';
}
}
});
}
},async: false,
errorHandler:function(message) { alert("Oops: " + message);
$("#"+aadhaarAttrId+"_txt").val("");
}
});
}
}
function openeKycOTP(attrValue,attrId,gridCounter){
globalCountValidate=0;
$("#dynamicText").empty();
var str="";
if(attrValue!=null && attrValue != "" && attrValue != undefined){
//var uid=$("#adhaarNo").val();
var UidNumber="";
if(attrValue.length==16){
UidNumber="XXXXXXXXXXXX"+attrValue.substring(12,16);
}else{
UidNumber="XXXXXXXX"+attrValue.substring(8,12);
}
str="Please enter the OTP received in your registered mobile number from UIDAI for "+UidNumber+".";
}
var $otpForm=$('#otp-dialogue-form');
if ($('#dynamicText').is(':empty')){
$otpForm.find('#dynamicText').html(str);
}
$('#otpError').hide();
var validateButtonTxt="Validate";
if(globalCountValidate>0){
validateButtonTxt="Validate "+globalCountValidate+"/4";
}
$otpForm.find('#otp').val('');
$otpForm.dialog({
        resizable: false,
        modal: true,
        title: "Validate Aadhaar OTP" ,
        height: 200,
        width: 500,
        buttons:[ {
id:"validateOTP",
text: validateButtonTxt,
            click :function () {
if(globalCountValidate<4){
var otpEntered=$otpForm.find('#otp').val().trim();
if(typeof otpEntered != 'undefined' && otpEntered!=''){
$(this).dialog('close');
var serviceId= $('#serviceId').val();
var txn=$("#"+attrId+"_txn").val();
/*  */
var attributeId=attrId+"";
if(gridCounter!=null && gridCounter!=""){
attributeId=attrId+"_"+gridCounter;
}
/* UidVerificationService.generateToken(attributeId,{ callback:function(res) {
alert(res); */
UidVerificationService.validateNParseEkycDetail(otpEntered,attrValue,serviceId,txn,attributeId, { callback:function(data) {
var result=data.split("~");
if(result[0]=="y"){
//alert("Aadhaar Verified");
if(gridCounter!=null && gridCounter!=""){
$("#"+attrId+"_"+gridCounter).val(result[2]);
}else{
$("#"+attrId).val(result[2]);
}
var fullAttrJson = $.parseJSON(result[1]);
$.each(fullAttrJson, function(i,item1){
if(item1.columnName == "image"){
var kycImage  = '';
if(item1.value!=null && item1.value!=''){
ApplicationDetailPagesService.extractBytes(item1.value,'image', {callback : function (data){
if(data != null ){
kycImage=data;
 }
},
async:false
});
}
$("img[attr-id="+item1.attr+"]").parent().attr("href",kycImage);
$("img[attr-id="+item1.attr+"]").attr("src",kycImage);
$("img[attr-id="+item1.attr+"]").parent().parent().show();
if($("#"+item1.attr+"[data-grid='Img']").length==0){
$("img[attr-id="+item1.attr+"]").parent().parent().siblings().hide();
}else{
$("#"+item1.attr+"_image").val(kycImage);
$("#"+item1.attr).siblings(".uploadImage").attr("src",kycImage);
}
}else{
$("#"+item1.attr).val(item1.value);
}
$("#"+attrId+"_txn").val(item1.spToken);
});
$.each(aadharJson, function(i,item){
if(item!=null && item!="" && item!="undefined" && !(typeof item === "undefined")){
var jsonAttrId = item.id;
var jsonAadharNo=  item.aadharNo;
var jsonIsVerified = item.isVerified;
if(gridCounter!=null && gridCounter!=""){
if(jsonAadharNo==uid && jsonAttrId==attrId+"_txt_"+gridCounter){
item.isVerified='Y';
return true;
}
}else{
if(jsonAadharNo==uid && jsonAttrId==attrId+"_txt"){
item.isVerified='Y';
return true;
}
}
 }
});
}else{
//$.unblockUI();
alert(result[1]);
$("#"+attrId+"_txt").val("");
//
$("#adhaarNo").val('');
if(gridCounter!=null && gridCounter!=""){
$("#"+attrId+"_"+gridCounter).val("");
}else{
$("#"+attrId).val("");
}
}
$("#uid").val('');
},async:false,errorHandler:function(message) {
alert("Oops: " + message);
$("#"+attrId+"_txt").val("");
//$("#adhaarNo").val('');
}
});
/* },async:false,errorHandler:function(message) {
alert("Oops: " + message);
//$("#adhaarNo").val('');
}
}); */
            }else{
$('#otpError').text('Please enter OTP').css('text-align','center').show();
$otpForm.find('#otp').val('');
            }
}
else{
$('#otpError').text('Number of attempts reached 4. Please try after sometime').css('text-align','center').show();
}
            },
        },
{
id:"closeOTP",
            text: "Close",
            click : function () {
                $(this).dialog('close');
 globalCountValidate=0;
 globalCountResend=0;
                return true;
            }
}
]});
}
var preresendtimeout;
function resendOtpFunction(){
var attrValue=$("#digilockerPopUp").data('attrVal_2');
var transactionID=$('#digilockerPopUp').data('transactionID');
var resendOtpFlag=$('#digilockerPopUp').data('resendOtpFlag');
var resendOtpCount=$('#digilockerPopUp').data('resendOtpCount');
var resendOtpTime=$('#digilockerPopUp').data('resendOtpTime');
var serviceID=$("#digilockerPopUp").data('serviceId');
var attrId=$("#digilockerPopUp").data('attrId');
var attrIDsFlag=$("#digilockerPopUp").data('attrIDsFlag');
var strmsg="";
if(globalAttrIDsFlag){
globalCountResend=0;
clearTimeout(preresendtimeout);
resendButtonTxt="Resend OTP";
}
if(globalCountResend<globalResendOtpCount){
if(globalAttrType=="mobileNo"){
NotificationService.resendSmsWithOTP(globalAttrValue, globalserviceID, globalAttrId, globalTransactionId,globalResendOtpFlag,globalResendOtpCount,globalResendOtpTime, { callback:function(data) {
if(data){
if(resendOtpFlag){
openOTPDialogForResendOTP(globalAttrValue,globalAttrType,globalAttrId,globalTitle,globalTransactionId,globalResendOtpFlag,globalResendOtpCount,globalResendOtpTime,globalserviceID);
$('#otpError').text('OTP sent').css('text-align','center').show();
$("#resendOTP").attr("disabled", "disabled");
setTimeout(function() {
            $("#resendOTP").removeAttr("disabled");
        }, 20000);
globalCountResend=globalCountResend+1;
resendButtonTxt="Resend OTP "+globalCountResend+"/" + globalResendOtpCount;
$('#resendOTP').text(resendButtonTxt);
}else{
openOTPDialouge(mobileNo,attrType,mobileAttrId,title);
}
}else{
alert("Please enter a valid mobile number");
}
},errorHandler:function(message) { alert("Oops: " + message);}
});
}else if(globalAttrType=="email"){
NotificationService.resendEmailWithOTP(globalAttrValue, globalserviceID, globalAttrId, globalTransactionId,globalResendOtpFlag,globalResendOtpCount,globalResendOtpTime, { callback:function(data) {
if(data){
if(resendOtpFlag){
openOTPDialogForResendOTP(globalAttrValue,globalAttrType,globalAttrId,globalTitle,globalTransactionId,globalResendOtpFlag,globalResendOtpCount,globalResendOtpTime,globalserviceID);
globalCountResend=globalCountResend+1;
resendButtonTxt="Resend OTP "+globalCountResend+"/" + globalResendOtpCount;
$("#resendOTP").attr("disabled", "disabled");
setTimeout(function() {
            $("#resendOTP").removeAttr("disabled");
        }, 20000);
 }else{
openOTPDialouge(globalAttrValue,globalAttrType,globalAttrId,globalTitle);
}
}else{
alert("Please enter a valid email Id");
}
},errorHandler:function(message) { alert("Oops: " + message);}
});
}else{
$('#otpError').text('Please enter OTP').css('text-align','center').show();
$('#otp').val('');
}
}else{
resendOtpAfterExceed = resendOtpTime*60000;
 resendButtonTxt="Resend OTP ";
$('#otpError').text('Attempts exceeded. Please re-try after ' + resendOtpTime +' minutes').css('text-align','center').show();
if (globalCountResend = globalResendOtpCount) {
globalCountValidate = 0;
globalCountResend = 0;
$("#resendOTP").attr("disabled", "disabled");
resendButtonTxt = "Resend OTP";
preresendtimeout = setTimeout(function() {
$("#resendOTP").removeAttr("disabled");
}, resendOtpAfterExceed);
$('#resendOTP').show();
}
}
}
function openOTPDialogForResendOTP(attrValue, attrType, attrId, title,transactionID, resendOtpFlag, resendOtpCount, resendOtpTime,serviceID, attrIDsFlag) {
globalAttrValue = attrValue;
globalAttrType = attrType;
globalAttrId = attrId;
globalTitle = title;
globalTransactionId = transactionID;
globalResendOtpFlag = resendOtpFlag;
globalResendOtpCount = resendOtpCount;
globalResendOtpTime = resendOtpTime;
globalserviceID = serviceID;
globalAttrIDsFlag = attrIDsFlag;
if (globalAttrIDsFlag) {
clearTimeout(preresendtimeout);
globalCountResend = 0;
resendButtonTxt = "Resend OTP";
}
$("#dynamicText").empty();
$('#otpError').text('').css('text-align', 'center').hide();
$('#otp').val('');
var str = "";
if (attrValue != null && attrValue != "" && attrValue != undefined) {
var attrVal = attrValue;
var attrValStart = attrVal.substring(0, 3);
var attrValEnd = attrVal.substring(7, 10);
if (attrType == "mobileNo") {
str = "An OTP has been sent to your mobile number "+ attrValStart + "XXXX" + attrValEnd
+ ". Please note that the OTP received is for single use only and is valid for 15 minutes from the time of request.";
} else if (attrType == "email") {
str = "One time password (OTP) has been sent to the email id " + attrValStart + "XXXX" + attrValEnd
+ ". Please note that the OTP received is for single use only and is valid for 15 minutes from the time of request.";
}
}
if ($('#dynamicText').is(':empty')) {
$("#dynamicText").append(str);
}
$('#otpError').hide();
var $otpForm = $('#otp-dialogue-form');
var resendButtonTxt = "Resend OTP";
if (globalResendOtpFlag = true) {
$('#resendOTP').show();
resendButtonTxt = "Resend OTP";
if (globalCountResend < globalResendOtpCount) {
resendButtonTxt = "Resend OTP " + globalCountResend + "/" + globalResendOtpCount;
}
}
$("#titleDiv").empty();
$("#titleDiv").html(title);
$.unblockUI();
$('#digilockerPopUp').modal({backdrop : 'static',keyboard : false});
$("#digilockerPopUp").data('attrVal_2', attrValue).data('transactionID', transactionID).data('resendOtpFlag',resendOtpFlag).data('resendOtpCount', resendOtpCount).data('resendOtpTime', resendOtpTime).data('serviceID', serviceID).data('attrId', attrId).data('attrIDsFlag', attrIDsFlag).modal('show');
$('.ui-dialog-buttonpane button').each(function() {
if ($(this).text() == 'Submit' || $(this).text() == 'Cancel') {
$(this).attr('disabled', 'disabled').hide();
}
});
if ($("#dialog").dialog("isOpen")) {
$('#otp-info-div').show();
$('.ui-dialog-buttonpane button').each(function() {
if ($(this).text() == 'Submit' || $(this).text() == 'Cancel') {
$(this).prop('disabled', false).show();
}
});
}
}
</script>
</head>
<body>
<div class="modal fade" id="otp-consent-form" role="dialog" style="display:none">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header text-center">
<h4 class="modal-title text-white" id="titleDiv"  style="position:relative;">Consent</h4>
</div>
<div class="modal-body">
 I hereby state that I have no objection in authenticating myself with Aadhaar based authentication system and consent to providing my Aadhaar number. I understand that the Aadhaar number shall be used only for the below mentioned purpose:<br/>
   <div id="purpose"></div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" data-dismiss="modal" onClick="agreeConsent()">Agree</button>
                <button type="button" class="btn btn-danger"  data-dismiss="modal" onClick="closeConsent()">Disagree</button>
                 </div>
</div>
</div>
</div>
<div class="modal fade" id="digilockerPopUp" role="dialog" style="display:none">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header text-center">
<h4 class="modal-title text-white" id="titleDiv" style="position:relative;">Validate OTP</h4>
</div>
<div class="modal-body">
<input type="hidden" id="uid" name="uid" />
<div id="dynamicText"></div>
   <table width="100%" align="center" cellpadding="10px" cellspacing="10px">
<input type="hidden" id="uid" name="uid" />
<tbody>
<tr>
<td>
Enter OTP<font color="red" size="+1">*</font>
</td>
<td align="left">
<input type="text" name="otp" id="otp" minlength="6" maxlength="6"></input>
<FONT color="red"><div id="otpError" style="display: none;"></div></FONT>
</td>
</tr>
</tbody>
</table>
<div>Click on validate button to validate OTP</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" data-dismiss="modal" id="validateOTP" onclick="validateOtpFunction()">Validate</button>
                   <button type="button" class="btn btn-primary"  id="resendOTP" onclick="resendOtpFunction()" style="display:none;">Resend OTP</button>
                <button type="button" class="btn btn-danger"  data-dismiss="modal" onClick="closePopUp()">Close</button>
                 </div>
</div>
</div>
</div>
<div class="modal fade" id="aadhaarBothPopUp" role="dialog" style="display:none">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header text-center">
<h4 class="modal-title text-white " id="titleDiv2"  style="position:relative;">Validate OTP</h4>
</div>
<div class="modal-body">
<input type="hidden" id="uid" name="uid" />
<div id="dynamicText2"></div>
   <table width="100%" align="center" cellpadding="10px" cellspacing="10px">
<input type="hidden" id="uid" name="uid" />
<tbody>
<tr>
<td>
Enter OTP<font color="red" size="+1">*</font>
</td>
<td align="left">
<input type="text" name="otpBoth" id="otpBoth" minlength="6" maxlength="6"></input>
<FONT color="red"><div id="otpBothError" style="display: none;"></div></FONT>
</td>
</tr>
</tbody>
</table>
<div>Click on validate button to validate OTP</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" data-dismiss="modal" id="validateBothOtp" onclick="validateBothOtpFunction()" >Validate</button>
                <button type="button" class="btn btn-danger"  data-dismiss="modal" onClick="closePopUpBoth()">Close</button>
                 </div>
</div>
</div>
</div>
</body>
</html>










<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style type="text/css">
.ui-dialog{z-index:9999;}

</style>
<script type='text/javascript' language="javascript">
 $(document).ready(function(){
	var kycRequired= $("input[name=kycRequired]").val();
	
	
	if(kycRequired == 'Y'){
		$('form[name="ApplicationFormLayout"]').hide();
		var EKYC_THROUGH = ""; 
		if(EKYC_THROUGH == 'DIGILOCKER'){
			$("#digilockerRedirectPopUp").modal('show');
		}else{
			eSignConsent();
		}
		
	}
}); 
 
 function proceedToDigilockerBio(){
	 var digiUrl= ""; //"http://localhost:8080/EP-SERVICEPLUS/dlresponse.do" ; 
	 var responseType="";
	 var clientId="";
	 var redirectUri="";
	 var state="";
     window.open(digiUrl+"?response_type="+responseType+"&client_id="+clientId+"&redirect_uri="+redirectUri+"&state="+state+"&auth_mode=F","_self");
}
 
 function proceedToDigilocker(){
	 var digiUrl= ""; //"http://localhost:8080/EP-SERVICEPLUS/dlresponse.do" ; 
	 var responseType="";
	 var clientId="";
	 var redirectUri="";
	 var state="";
     window.open(digiUrl+"?response_type="+responseType+"&client_id="+clientId+"&redirect_uri="+redirectUri+"&state="+state,"_self");
}
 
 function goToServiceList(){
	 window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=GOQR-IBU5-N157-I1US-904S-435G-QOEC-5YIA";
}
 
function eSignConsent(){
    $("#dialog-confirm").dialog({
      open: function(event, ui) { $(".ui-dialog-titlebar-close").hide();
      $("#button-ok").attr("disabled","disabled");
      $("#consentCheck").prop("checked",false);},
	  closeOnEscape: false,
      resizable: false,
      height:300,
      width: 600,
      modal: true,
      position: {  at: "center", of: window},
      buttons: [
                {
                	id: "button-ok",
                    text: "Proceed",
                    click: function() {
                        $(this).dialog("close");
                        	showAdharPop();	
                        
                    }
                },
               
            ]
  });
}
function showAdharPop(){
	  $( "#ekycAadhaar" ).dialog({
	      open: function(event, ui) { $(".ui-dialog-titlebar-close").hide();},
		  closeOnEscape: false,
	      resizable: false,
	      height:200,
	      width: 300,
	      modal: true,
	      position: {  at: "center", of: window},
	      buttons: [
	                {
	                	id: "button-ok",
	                    text: "Submit",
	                    click: function() {
	                    	if($("#adharNo").val().trim()!="" && ($("#adharNo").val().trim().length==12 || $("#adharNo").val().trim().length==16)){
	                    		
	                        $(this).dialog("close");
	                        generateAadhaarOtp($("#adharNo").val());
	                    	}else{
	                    		alert("Please enter valid Aadhaar number / Virtual Id");
	                    		return false;
	                    	}
	                    }
	                },
	                {
	                id: "button-cancel",
	                text: "Cancel",
	                click: function() {
	                    $(this).dialog("close");
	                   
	                }
	                }
	            ]
	  });
}


function consent(obj){
	  var is_check = obj.checked;
	  if(is_check){
		  $("#button-ok").removeAttr("disabled");
	  }else{
		  $("#button-ok").attr("disabled","disabled");
	  }
	  
}
function generateAadhaarOtp(aadhaarNumber){
	UidVerificationService.validateAadhaar(aadhaarNumber,"0",null,null, { callback:function(data) {  
			var result=data.split("~");
		 		if(result[0]=="true"){
		 			$("#aadhaar_txn").val(result[1]);
		 			openeKycOTPDialouge(aadhaarNumber,"AadhaarNumber");
		 		}else{
		 			alert(result[0]);
		 		}
		 	},async: false,
		 	errorHandler:function(message) { alert("Oops: " + message);} 
	  		});
}
function openeKycOTPDialouge(attrValue,userId){
	globalCountValidate=0;
	$("#dynamicText").empty();
	var str="";
	if(attrValue!=null && attrValue != "" && attrValue != undefined){
			//var uid=$("#adhaarNo").val();
    		var UidNumber="";
    		if(attrValue.length==16){
    			UidNumber="XXXXXXXXXXXX"+attrValue.substring(12,16);
    		}else{
    			UidNumber="XXXXXXXX"+attrValue.substring(8,12);
    		}
    		str="Please enter the OTP received in your registered mobile number from UIDAI for "+UidNumber+".";

	}
	if ($('#dynamicText').is(':empty')){
		$("#dynamicText").append(str);
	}
	
	$('#otpError').hide();
	var $otpForm=$('#otp-dialogue-form');
	var validateButtonTxt="Validate";
	if(globalCountValidate>0){
		validateButtonTxt="Validate "+globalCountValidate+"/4";
	}
	$otpForm.find('#otp').val('');
	$otpForm.dialog({
        resizable: false,
        modal: true,
        title: "Validate Aadhaar OTP" ,
        height: 250,
        width: 500, 
        buttons:[ {
        	id:"validateOTP",
        	text: validateButtonTxt,
            click :function () {
            	if(globalCountValidate<4){
            		var otpEntered=$otpForm.find('#otp').val().trim();
                	if(typeof otpEntered != 'undefined' && otpEntered!=''){
                    	$(this).dialog('close');
                    	 
                    		var serviceId= $('#serviceId').val();
                    		var txn=$("#aadhaar_txn").val();
                    		/*  */
                    			UidVerificationService.validateNParseEkycDetail(otpEntered,attrValue,serviceId,txn,'-1', { callback:function(data) {
                        			var result=data.split("~");
                        			if(result[0]=="y"){
          					 			//alert("Aadhaar Verified");
          					 			var fullAttrJson = $.parseJSON(result[1]);
          					 			$.each(fullAttrJson, function(i,item1){
          					 				if(item1.columnName == "image"){
          					 					var kycImage  = '';
          										if(item1.value!=null && item1.value!=''){
          											ApplicationDetailPagesService.extractBytes(item1.value,'image', {callback : function (data){
          												if(data != null ){
          													kycImage=data;
          													 }
          												},
          												async:false
          												});
          										}
          										$("a[attr-id="+item1.attr+"]").attr("href",kycImage);
          										$("img[attr-id="+item1.attr+"]").attr("src",kycImage);
          					 				}else{
          					 					$("#"+item1.attr+"_kyc").html(item1.value);
          					 				}
          					 				
          					 				
          					 			});
          					 			$('form[name="ApplicationFormLayout"]').show();
          					 		}else{
          					 			//$.unblockUI();
          					 			alert(result[1]);
          					 		//	$("#adhaarNo").val('');
          					 		}
                        			$("#uid").val('');
          					 	},async:false,errorHandler:function(message) {
          					 		alert("Oops: " + message);
          					 	//$("#adhaarNo").val('');
          					 	} 
          				  		});
                    	
    	            }else{
    	            	$('#otpError').text('Please enter OTP').css('text-align','center').show();
    	            	$otpForm.find('#otp').val('');
    	            }
            	}
                	else{
                		$('#otpError').text('Number of attempts reached 4. Please try after sometime').css('text-align','center').show();
                	}
            },
        },
        	{
        	id:"closeOTP",
            text: "Close",
            click : function () {
                $(this).dialog('close');
               	 globalCountValidate=0;
            	 globalCountResend=0;
                return true;
            }
        	}
	]});
	$('.ui-dialog-buttonpane button').each(function(){
		if($(this).text()=='Submit' || $(this).text() == 'Cancel'){
			$(this).attr('disabled', 'disabled').hide();
		}
	});
	if ($("#dialog").dialog ("isOpen")){
		$('#otp-info-div').show();
		$('.ui-dialog-buttonpane button').each(function(){
			if($(this).text()=='Submit' || $(this).text() == 'Cancel'){
				$(this).prop('disabled', false).show();
			}
		});
	}
}
</script>
</head>
<body>

<div id="dialog-confirm" title="Consent Authentication Form" style="display:none;">
	
	 <p>I hereby state that I have no objection in authenticating myself with Aadhaar based authentication system and consent to providing my Aadhaar number. I understand that the Aadhaar number shall be used only for updating my e-KYC details.<br/>
<hr>
			 <div>
			 	<input type="checkbox" id="consentCheck" value="y" onclick="consent(this)" /> <strong>I agree with above user consent.</strong> </div> 
				</div>
	<div id="OTPModal" title="Aadhaar number verification" style="display:none;">
	       <form action="eSigndoc.htm" method="POST" id="signDocFormId">
	        <label>Please enter the OTP received in your registered mobile number from UIDAI for<div id="uidNumber"></div> <br/>
	          	Enter OTP<span class="mandatory">*</span>
	        </label>
	           <div>
	           <input type="text" name="otpCode" id="otpCode" class="form-control" 
	            placeholder="Enter OTP Code"  maxlength="8" autocomplete="off">
	           </div><br/>
	           Click on submit button to validate OTP.
	        </form>
	</div>
	
	<div id="ekycAadhaar" title="Aadhaar" style="display:none;">
		 <label>
		 	Aadhaar Number / Virtual Id<span class="mandatory">*</span>
		</label>
		  <div>
		       <input type="text" name="adharNo" id="adharNo" class="form-control" onkeyup="javascript:this.value=this.value.replace(/[^0-9]/g, '');" 
		        placeholder="Enter aadhaar card number"  maxlength="16" mixlength="12" autocomplete="off">
		  </div>
		      
	</div>
<div class="modal fade" id="digilockerRedirectPopUp" role="dialog">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
					</button>
					<h4 class="modal-title">
                       eKYC Confirmation
                      </h4>
				</div>
				<div class="modal-body">
					<br/><br/> Do you want to proceed?
				</div>
				<div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="exportbuttonid" onclick="proceedToDigilocker()" data-dismiss="modal">Proceed </button>
                      
                      	<button type="button" class="btn btn-primary" id="exportbuttonid2" onclick="proceedToDigilockerBio()" data-dismiss="modal">Proceed with Finger Print </button>
                      
                      <button type="button" class="btn btn-danger" onclick="return goToServiceList();" data-dismiss="modal">Cancel</button>
                     </div>
			</div>
		</div>
	</div>
	<form id="otp-dialogue-form" style="display:none;" name="otp_Form" method="post"  
		 		accept-charset="UTF-8" cssClass="application_form"  enctype="multipart/form-data">
				<div id="dynamicText"></div>
					<div id="otp-info-div" style="display:block;">	
					<table width="100%" align="center" cellpadding="10px" cellspacing="10px">
					<input type="hidden" id="uid" name="uid" />
						<tbody>
							<tr>
								<td>
									Enter OTP<font color="red" size="+1">*</font>
								</td>
								<td align="left">
								<input type="text" name="otp" id="otp" minlength="6" maxlength="6"></input>
								</td>
							</tr>
						</tbody>
					</table>
					<tr>    Click on validate button to validate OTP</tr>
						<FONT color="red"><div id="otpError" style="display: none;"></div></FONT>
					</div>
</form>
	
</body>
</html>
</html>
<script> $(document).ready(function(){$("li.default1").addClass("active");$("li.active").nextAll(".click").addClass("not-active");});
</script> 	
 </body>
</html>