









<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
		
		 	<title>ServicePlus- Issuance of Caste Certificate at RO level</title>
		
		
	
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
			    input.setAttribute("value", "KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D");
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
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4650013&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
 var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4650013&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
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
<input type="hidden" id="csrfTokeID" name="OWASP_CSRFTOKEN" value="KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D"/>
<input type="hidden" id="currentDateID" name="currentDate" value="29/03/2026"/>
<input type="hidden" name ="UUID" value="e7348b69-a5c7-453f-b588-073f3af46e34"/>
<input type="hidden" name ="applStatus" id="applStatus" value="S"/>
<input type="hidden" name ="grievanceRefNo" id="grievanceRefNo" value=""/>
<input type="hidden" name="seq_no"  value="flnfl"/>
<input type="hidden" name="applyId"  value=""/>
<input type="hidden" name ="serviceId" id="serviceId" value="4650013"/>
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
form.action = "applyPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4650013&UUID="+uuid ;
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
<td><img alt="" src="Filemanager/connectors/jsp/filemanager.jsp?mode=preview&amp;path=/opt/sp_common/ROOT/Filemanager/userfiles/bihar-sarkar2.jpg" style="height:100px; width:100px" /></td>
<td style="text-align:center">
<div><span style="font-size:16px"><strong>फॉर्म</strong><strong>&nbsp;/ Form</strong> <strong>&ndash;</strong><strong> 1</strong></span><br />
&nbsp;
<div><span style="font-size:16px"><strong>अनुसूचित जाति / अनुसूचित जनजाति / पिछड़ा वर्ग / अत्यंत पिछड़ा / गैर आरक्षित वर्ग का</strong></span><br />
<strong><span style="font-size:16px">जाति प्रमाण-पत्र हेतु आवेदन-पत्र (राजस्व अधिकारी स्तर से) </span></strong><br />
<span style="font-size:16px"><strong>Application Form for Issuance of Caste Certificate from Revenue Officer Level</strong></span></div>
</div>
</td>
<td style="text-align:right"><img alt="" src="Filemanager/connectors/jsp/filemanager.jsp?mode=preview&amp;path=/opt/sp_common/ROOT/Filemanager/userfiles/BPSM_Logo1.gif" style="height:100px; width:100px" /></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p></div>
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_left  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x916;&#x94b;&#x91c; &#x2f; Search&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&quot;&#x906;&#x935;&#x947;&#x926;&#x928; &#x938;&#x902;&#x926;&#x930;&#x94d;&#x92d; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e;&quot; &#x90f;&#x935;&#x902;  &quot;&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x928;&#x93e;&#x92e; &#x28;English&#x29;&quot; &#x926;&#x94b;&#x928;&#x94b;&#x902; &#x921;&#x93e;&#x932;&#x915;&#x930; &#x5b;Get Details&#x5d; &#x915;&#x930;&#x947;&#x902;&#x7c;
<span class="mandatory">*</span>
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="78185"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Application Ref. No. of Residence&#x2f;Income&#x2f;Caste
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="3" placeholder="" name="78185" data-type="text" data-groupno="92" id="78185"  minlength="0" maxlength="99"  />																
<label class="error" for="78185" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="78249"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x928;&#x93e;&#x92e; &#x2f; Applicant Name &#x28;English&#x29;
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="4" placeholder="" name="78249" data-type="fullName" data-groupno="95" id="78249"  applicantname="true" maxlength="99"  />																
<label class="error" for="78249" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<input type="button" class="button" size="" title="" style="width:%;" tabindex="5" data-datatype="button"  data-groupno="94"  id="78187" name="78187" value="Get Details"/>					
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x2f; Details of Application&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17196"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
&#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Service
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="17196_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="6" value="1" name="17196" id="17196_1"  required="true"   />&nbsp; &#x938;&#x93e;&#x92e;&#x93e;&#x928;&#x94d;&#x92f;&#x2f;General</label>
</div>
<div class="tdata">
<label class="lbl" for="17196_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="6" value="2" name="17196" id="17196_2"  required="true"   />&nbsp; &#x924;&#x924;&#x94d;&#x915;&#x93e;&#x932;&#x2f;Tatkal</label>
</div>
<label class="error" for="17196" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="9" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x2f; Details of Applicant&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17177"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">

&#x932;&#x93f;&#x902;&#x917; &#x2f; Gender
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:90%;">

<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="17177_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="1" name="17177" id="17177_1"  required="true"   />&nbsp; &#x92a;&#x941;&#x930;&#x941;&#x937; &#x2f; Male</label>
</div>
<div class="tdata">
<label class="lbl" for="17177_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="2" name="17177" id="17177_2"  required="true"   />&nbsp; &#x938;&#x94d;&#x924;&#x94d;&#x930;&#x940; &#x2f; Female</label>
</div>
<div class="tdata">
<label class="lbl" for="17177_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="3" name="17177" id="17177_3"  required="true"   />&nbsp; &#x924;&#x943;&#x924;&#x940;&#x92f; &#x932;&#x93f;&#x902;&#x917;&#x2f;Third Gender</label>
</div>
<label class="error" for="17177" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="63930"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x2f; Salutation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="63930" name="63930" class="searchDrop" tabindex="9" style="width:83%;" data-datatype="dropDown" data-groupno="72"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x936;&#x94d;&#x930;&#x940;</option>
<option value="2" >&#x936;&#x94d;&#x930;&#x940;&#x92e;&#x924;&#x940;</option>
<option value="3" >&#x938;&#x941;&#x936;&#x94d;&#x930;&#x940;</option>
<option value="4" >&#x915;&#x94b;&#x908; &#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x928;&#x939;&#x940;&#x902;</option>
</select>
<label class="error" style="display: none;" for="63930"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17176"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Applicant
<span class="mandatory">*</span>
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="10" placeholder="" name="17176" data-type="fullName" data-groupno="4" id="17176"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="17176" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17193"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x2f; &#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="11" placeholder="" name="17193" data-type="text" data-groupno="21" id="17193"   required="true"  />																
<label class="error" for="17193" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17179"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Father
<span class="mandatory">*</span>
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="12" placeholder="" name="17179" data-type="fullName" data-groupno="5" id="17179"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="17179" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17195"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="13" placeholder="" name="17195" data-type="text" data-groupno="22" id="17195"   required="true"  />																
<label class="error" for="17195" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="78252"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Mother
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="14" placeholder="" name="78252" data-type="fullName" data-groupno="96" id="78252"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="78252" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41486"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="15" placeholder="" name="41486" data-type="text" data-groupno="45" id="41486"   required="true"  />																
<label class="error" for="41486" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="64882"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Husband
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="16" placeholder="" name="64882" data-type="fullName" data-groupno="73" id="64882"  applicantname="true" maxlength="99"  />																
<label class="error" for="64882" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="64883"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="17" placeholder="" name="64883" data-type="text" data-groupno="74" id="64883"  minlength="0" maxlength="99"  />																
<label class="error" for="64883" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17180"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant &#x28;Required for delivery of Certificate through Download Link in SMS&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="4650013" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="18"  placeholder="" name="17180" data-datatype="mobileNo" data-groupno="7" id="17180"  minlength="10" digits="true" maxlength="10" minlength="10"  />
<label class="error" for="17180"  style="display: none;"></label>
<input type="hidden" id="17180_txn" name="17180_txn" value=""/>
<input type="hidden" id="17180_val" name="17180_val" value=""/>
<input type="hidden" id="17180_consent" value=""/>
</div>
</div>
<div class="tdata">
<label class="lbl" for="17332"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x908;&#x92e;&#x947;&#x932; &#x2f; Email of Applicant &#x28;Required for delivery of Certificate as attachment in Email&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="email" serviceId="4650013" resendOtpFlag="false" resendOtpCount="" resendOtpTime=""  verification-flag="false" value="" type="text" tabindex="19"  placeholder="" name="17332" data-datatype="email" data-groupno="30" id="17332"  minlength="6" email="true" maxlength="254" minlength="6"  />
<label class="error" for="17332"  style="display: none;"></label>
<input type="hidden" id="17332_txn" name="17332_txn" value=""/>
<input type="hidden" id="17332_val" name="17332_val" value=""/>
<input type="hidden" id="17332_consent" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91559"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant &#x28;Required for delivery of Certificate through Download Link in SMS&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="4650013" resendOtpFlag="false" resendOtpCount="" resendOtpTime=""  verification-flag="false" value="" type="text" tabindex="20"  placeholder="" name="91559" data-datatype="mobileNo" data-groupno="106" id="91559"  minlength="10" digits="true" maxlength="10" minlength="10"  />
<label class="error" for="91559"  style="display: none;"></label>
<input type="hidden" id="91559_txn" name="91559_txn" value=""/>
<input type="hidden" id="91559_val" name="91559_val" value=""/>
<input type="hidden" id="91559_consent" value=""/>
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000000">&#x938;&#x94d;&#x925;&#x93e;&#x908; &#x92a;&#x924;&#x93e; &#x2f; Permanent Address &#x3a;-
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17392"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17392" name="17392"  tabindex="24" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="32"  required="true" >
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
<label class="error" for="17392" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17183"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17183" name="17183"  tabindex="25" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="9"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17183" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17182"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17182" name="17182"  tabindex="26" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="10"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17182" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17184"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17184" name="17184"  tabindex="27" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="11"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17184" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75299"
style="font-family:Arial;font-size:14px; color:#000000;width:99%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="75299_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="28" value="1" name="75299" id="75299_1"  required="true"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="75299_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="28" value="2" name="75299" id="75299_2"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="75299_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="28" value="3" name="75299" id="75299_3"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="75299_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="28" value="4" name="75299" id="75299_4"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="75299" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="56927"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward Number
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="29" placeholder="" name="56927" data-type="text" data-groupno="59" id="56927"  minlength="1" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" required="true"  />																
<label class="error" for="56927" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="56891"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="56891" name="56891"  tabindex="30" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="56" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="56891" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75300"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75300" name="75300"  tabindex="32" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="81" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75300" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75301"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75301" name="75301"  tabindex="34" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="82" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75301" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75302"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75302" name="75302"  tabindex="36" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="83" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75302" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17185"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="38" placeholder="" name="17185" data-type="text" data-groupno="12" id="17185"  maxlength="99"  required="true"  />																
<label class="error" for="17185" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17186"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post Office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="39" placeholder="" name="17186" data-type="text" data-groupno="14" id="17186"  maxlength="99"  required="true"  />																
<label class="error" for="17186" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="65034"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="65034" name="65034"  tabindex="40" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="75"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="65034" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="90779"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="41" placeholder="" name="90779" data-type="text" data-groupno="97" id="90779"  minlength="0" maxlength="6" min="000000" max="999999" digits="true"  />																
<label class="error" for="90779" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91902"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x935;&#x930;&#x94d;&#x924;&#x92e;&#x93e;&#x928; &#x92a;&#x924;&#x93e; &#x2f; Present Address
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="91902_1" style="font-family:Arial;font-size:14px; color:#000000">										
<input type="checkbox"	tabindex="42" value="1" name="91902" id="91902_1"    />
&#x90a;&#x92a;&#x930; &#x915;&#x947; &#x91c;&#x948;&#x938;&#x93e; &#x2f; Same as above
</label>
</div>									
<label class="error" for="91902_1" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
<div class="tdata">
<label class="lbl" for="56980"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Aadhaar Number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-verificationType="2" data-type="AadhaarNumber" serviceId="4650013" verification-flag="true" value="" type="text" tabindex="43"  placeholder="" name="56980_txt" data-datatype="AadhaarNumber" data-groupno="62" id="56980_txt"  maxlength="16" verhoeff="16"  />
<input type="hidden" id="56980" name="56980" value=""/>
<label class="error" for="56980"  style="display: none;"></label>
<input type="hidden" id="56980_txn" name="56980_txn" value=""/>
<input type="hidden" id="56980_val" name="56980_val" value=""/>
<input type="hidden" id="56980_consent" value="'Identification of Applicant by GAD, Govt. of Bihar'. मैं यह स्पष्ट करता हूँ कि मुझे आधार आधारित प्रमाणीकरण प्रणाली के साथ स्वयं को प्रमाणित करने में कोई आपत्ति नहीं है और मैं अपना आधार नंबर प्रदान करने के लिए सहमत हूँ। मैं समझता हूँ कि आधार नंबर का उपयोग केवल नीचे उल्लिखित उद्देश्य के लिए किया जाएगा: 'सामान्य प्रशासन विभाग, बिहार सरकार द्वारा आवेदक की पहचान।'"/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91903"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="91903" name="91903"  tabindex="44" style="width:83%;" data-dispLang="" data-datatype="custLGDHierarchy" data-groupno="112"  required="true" >
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
<label class="error" for="91903" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="91904"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="91904" name="91904"  tabindex="45" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="113"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91904" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91905"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91905" name="91905"  tabindex="46" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="114" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91905" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91906"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91906" name="91906"  tabindex="47" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="115" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91906" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91907"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91907_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="1" name="91907" id="91907_1"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="91907_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="2" name="91907" id="91907_2"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="91907_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="3" name="91907" id="91907_3"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="91907_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="4" name="91907" id="91907_4"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="91907" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91914"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward Number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="49" placeholder="" name="91914" data-type="text" data-groupno="123" id="91914"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="91914" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91908"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91908" name="91908"  tabindex="50" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="117" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91908" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91909"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91909" name="91909"  tabindex="52" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="118" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91909" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91910"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91910" name="91910"  tabindex="54" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="119" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91910" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91911"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91911" name="91911"  tabindex="56" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="120" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91911" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91913"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="58" placeholder="" name="91913" data-type="text" data-groupno="122" id="91913"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91913" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="91915"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post Office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="59" placeholder="" name="91915" data-type="text" data-groupno="124" id="91915"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91915" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91912"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91912" name="91912"  tabindex="60" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="121" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91912" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91916"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="61" placeholder="" name="91916" data-type="text" data-groupno="125" id="91916"  minlength="0" maxlength="6" min="000000" max="999999" digits="true"  />																
<label class="error" for="91916" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17493"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92b;&#x94b;&#x91f;&#x94b; &#x2f; Photograph of Applicant
</label>
<div class="cont" style="margin-left:%;width:%;">
<input type="hidden" class="imageData" name="17493_image"  id="17493_image" value=""/>
<figure class="thumbnail" style='display:none'>
<a target="_blank" onClick="openLargeStringImage(17493)">
<img class="uploadImage" id="preview" name="preview" src="" attr-id="17493"></img>
</a>
</figure>
<label><a class="removeImage" id="17493_removeLink" style="display:none"><img src="resources/images/delete1.png" width="18" height="19" border="0" /></a></label>
</br> 
<input type="hidden" name="17493_removeFlag" id="17493_removeFlag" value="false"/>
<input type="hidden" name="imageHeight" id="imageHeight" value=""/>
<input type="hidden" name="imageWidth" id="imageWidth" value=""/>
<input type="hidden" name="minImageSize" id="minImageSize" value="20"/>
<input type="hidden" name="maxImageSize" id="maxImageSize" value="350"/>
<input type="hidden" name="17493_croph" id="17493_croph" value=""/>
<input type="hidden" name="17493_cropw" id="17493_cropw" value=""/>
<input type="hidden" name="17493_cropx" id="17493_cropx" value=""/>
<input type="hidden" name="17493_cropy" id="17493_cropy" value=""/>
<input type="file" class="image groupset1"   data-type="image" id="17493" name="17493" />
<image id="17493_openCamra" class="openCamera pointer groupset1"  src="resources/images/camera-icon.png"></image>
<label class="error" for="17493" style="display: none;"></label>							
</div>
</div>
<input type="hidden" name="41547" value="" id="41547" data-name="Role Id"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="71866"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
Application Status
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="71866_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="63" value="1" name="71866" id="71866_1"  required="true"   />&nbsp; Accept</label>
</div>
<div class="tdata">
<label class="lbl" for="71866_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="63" value="2" name="71866" id="71866_2"  required="true"   />&nbsp; Reject</label>
</div>
<label class="error" for="71866" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="71989"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Reason for Rejection
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="65" placeholder="" name="71989" data-type="text" data-groupno="77" id="71989"   />																
<label class="error" for="71989" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="58159"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Application Mode
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="58159_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="66" value="1" name="58159" id="58159_1"   />&nbsp; Online</label>
</div>
<div class="tdata">
<label class="lbl" for="58159_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="66" value="2" name="58159" id="58159_2"   />&nbsp; Offline</label>
</div>
<div class="tdata">
<label class="lbl" for="58159_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="66" value="3" name="58159" id="58159_3"   />&nbsp; Kiosk</label>
</div>
<label class="error" for="58159" style="display: none;"></label>
</div>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41485"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Mother
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="67" placeholder="" name="41485" data-type="text" data-groupno="44" id="41485"  minlength="0" maxlength="99"  />																
<label class="error" for="41485" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60761"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Aadhaar Authentication
</label>
<div class="cont" style="margin-left:%;width:83%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="60761_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="68" value="1" name="60761" id="60761_1"   />&nbsp; verified</label>
</div>
<div class="tdata">
<label class="lbl" for="60761_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="68" value="2" name="60761" id="60761_2"   />&nbsp; not verified</label>
</div>
<label class="error" for="60761" style="display: none;"></label>
</div>	
</div>
</div>
<input type="hidden" name="90788" value="" id="90788" data-name="Tatkal SLA Date"/>
<input type="hidden" name="75303" value="" id="75303" data-name="Applicant_Name"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92189"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
SMS1
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="69" placeholder="" name="92189" data-type="text" data-groupno="131" id="92189"  minlength="0" maxlength="999"  />																
<label class="error" for="92189" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92190"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
SMS2
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="70" placeholder="" name="92190" data-type="text" data-groupno="132" id="92190"  minlength="0" maxlength="99"  />																
<label class="error" for="92190" style="display: none;"></label>
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x905;&#x928;&#x94d;&#x92f; &#x2f; Others&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17202"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x947;&#x936;&#x93e; &#x2f; Profession
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17202" name="17202" class="searchDrop" tabindex="71" style="width:83%;" data-datatype="dropDown" data-groupno="25"  required="true"   >
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
<label class="error" style="display: none;" for="17202"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="56928"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x94d;&#x92f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f; &#x92e;&#x947;&#x902; &#x909;&#x932;&#x94d;&#x932;&#x93f;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947;&#x902; &#x2f; Please specify if other
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="72" placeholder="" name="56928" data-type="text" data-groupno="60" id="56928"  maxlength="99"  required="true"  />																
<label class="error" for="56928" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17191"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x930;&#x94d;&#x917;&#x9;&#x2f; Category
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17191" name="17191" class="searchDrop" tabindex="73" style="width:83%;" data-datatype="dropDown" data-groupno="18"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x905;&#x924;&#x94d;&#x92f;&#x902;&#x924; &#x92a;&#x93f;&#x91b;&#x921;&#x93c;&#x93e; &#x935;&#x930;&#x94d;&#x917; &#x28;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x940;-1&#x29;</option>
<option value="2" >&#x92a;&#x93f;&#x91b;&#x921;&#x93c;&#x93e; &#x935;&#x930;&#x94d;&#x917; &#x28;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x940;-2&#x29;</option>
<option value="3" >&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x93f;&#x924; &#x91c;&#x93e;&#x924;&#x93f;</option>
<option value="4" >&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x93f;&#x924; &#x91c;&#x928;&#x91c;&#x93e;&#x924;&#x93f;</option>
<option value="5" >&#x917;&#x948;&#x930; &#x906;&#x930;&#x915;&#x94d;&#x937;&#x93f;&#x924;</option>
</select>
<label class="error" style="display: none;" for="17191"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="91594"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x948;&#x930; &#x906;&#x930;&#x915;&#x94d;&#x937;&#x93f;&#x924; &#x935;&#x930;&#x94d;&#x917; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f; &#x92e;&#x947;&#x902; &#x905;&#x92a;&#x928;&#x940; &#x91c;&#x93e;&#x924;&#x93f; &#x909;&#x932;&#x94d;&#x932;&#x947;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947;&#x902; &#x2f; Please specify your caste in case of unreserved category
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="74" placeholder="" name="91594" data-type="text" data-groupno="107" id="91594"  minlength="1" maxlength="99"  required="true"  />																
<label class="error" for="91594" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41552"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93e;&#x924;&#x93f; &#x2f; Caste
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41552" name="41552" class="searchDrop" tabindex="75" style="width:83%;" data-datatype="dropDown" data-groupno="52"  required="true"   >
<option value="">
Please Select</option>
</select>
<label class="error" style="display: none;" for="41552"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="41535"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93e;&#x924;&#x93f; &#x905;&#x928;&#x941;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Caste Serial number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="76" placeholder="" name="41535" data-type="text" data-groupno="46" id="41535"  minlength="0" maxlength="99"  />																
<label class="error" for="41535" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17188"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x91c;&#x93e;&#x924;&#x93f; &#x2f; Sub-Caste
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="17188" name="17188" class="searchDrop" tabindex="77" style="width:83%;" data-datatype="dropDown" data-groupno="19"   >
<option value="">
Please Select</option>
</select>
<label class="error" style="display: none;" for="17188"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="41579"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x91c;&#x93e;&#x924;&#x93f; &#x905;&#x928;&#x941;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Sub-Caste Serial number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="78" placeholder="" name="41579" data-type="text" data-groupno="53" id="41579"  minlength="0" maxlength="99"  />																
<label class="error" for="41579" style="display: none;"></label>
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c; &#x91a;&#x92f;&#x928; &#x938;&#x942;&#x91a;&#x940; &#x2f; Document Check List&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41545"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x932;&#x92c;&#x94d;&#x927; &#x915;&#x930;&#x93e;&#x90f; &#x917;&#x90f; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;&#x94b;&#x902; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x2f; Enclosures attached along with Application Form &#x28;General&#x29;
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="41545_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="79" value="1" name="41545" id="41545_1"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-II &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41545_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="79" value="2" name="41545" id="41545_2"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-III &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41545_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="79" value="3" name="41545" id="41545_3"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-V &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<label class="error" for="41545_3" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41546"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x932;&#x92c;&#x94d;&#x927; &#x915;&#x930;&#x93e;&#x90f; &#x917;&#x90f; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;&#x94b;&#x902; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x2f; Enclosures attached with Application Form &#x28;Tatkal&#x29;
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="41546_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="80" value="1" name="41546" id="41546_1"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-II &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41546_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="80" value="2" name="41546" id="41546_2"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-III &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41546_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="80" value="3" name="41546" id="41546_3"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-V &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41546_4" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="80" value="4" name="41546" id="41546_4"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x915;&#x29;&rsquo; &#x915;&#x947; &#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x947; &#x92a;&#x939;&#x91a;&#x93e;&#x928; &#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x938;&#x947; &#x915;&#x94b;&#x908; &#x90f;&#x915;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41546_5" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="80" value="5" name="41546" id="41546_5"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x916;&#x29;&rsquo; &#x915;&#x947; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x938;&#x947; &#x915;&#x94b;&#x908; &#x90f;&#x915;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41546_6" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="80" value="6" name="41546" id="41546_6"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x915;&#x29;&rsquo; &#x92f;&#x93e; &#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x916;&#x29;&rsquo; &#x915;&#x947; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x928; &#x939;&#x94b;&#x928;&#x947; &#x92a;&#x930; &#x939;&#x932;&#x94d;&#x915;&#x93e; &#x915;&#x930;&#x94d;&#x92e;&#x91a;&#x93e;&#x930;&#x940; &#x2f; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x938;&#x947;&#x935;&#x915; &#x926;&#x94d;&#x935;&#x93e;&#x930;&#x93e; &#x935;&#x93f;&#x939;&#x93f;&#x924; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x928;&#x93f;&#x930;&#x94d;&#x917;&#x924; &#x91c;&#x93e;&#x901;&#x91a; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x935;&#x947;&#x926;&#x928;
</label>
</div>									
<label class="error" for="41546_6" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A977; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x91c;&#x93e;&#x924;&#x93f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x938;&#x93e;&#x915;&#x94d;&#x937;&#x94d;&#x92f; &#x939;&#x947;&#x924;&#x941; &#x928;&#x93f;&#x92e;&#x94d;&#x928;&#x93e;&#x902;&#x915;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; &#x938;&#x92e;&#x941;&#x91a;&#x93f;&#x924; &#x92e;&#x928;&#x947; &#x91c;&#x93e;&#x92f;&#x947;&#x902;&#x917;&#x947;&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="93963"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x91c;&#x93e;&#x924;&#x93f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x938;&#x93e;&#x915;&#x94d;&#x937;&#x94d;&#x92f; &#x939;&#x947;&#x924;&#x941; &#x906;&#x935;&#x947;&#x926;&#x915;&#x2f;&#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x947; &#x92a;&#x93f;&#x924;&#x93e;&#x2f;&#x92a;&#x942;&#x930;&#x94d;&#x935;&#x91c; &#x915;&#x93e; &#x928;&#x93f;&#x92e;&#x94d;&#x928;&#x93e;&#x902;&#x915;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; &#x938;&#x92e;&#x941;&#x91a;&#x93f;&#x924; &#x92e;&#x93e;&#x928;&#x947; &#x91c;&#x93e;&#x92f;&#x947;&#x902;&#x917;&#x947;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="93963_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="81" value="1" name="93963" id="93963_1"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x916;&#x924;&#x93f;&#x92f;&#x93e;&#x928;</label>
</div>
<div class="tdata">
<label class="lbl" for="93963_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="81" value="2" name="93963" id="93963_2"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x926;&#x93e;&#x928;&#x92a;&#x924;&#x94d;&#x930;</label>
</div>
<div class="tdata">
<label class="lbl" for="93963_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="81" value="3" name="93963" id="93963_3"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x92d;&#x942;&#x92e;&#x93f; &#x938;&#x902;&#x92c;&#x902;&#x927;&#x940; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;</label>
</div>
<div class="tdata">
<label class="lbl" for="93963_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="81" value="4" name="93963" id="93963_4"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x92d;&#x942;&#x92e;&#x93f;&#x939;&#x940;&#x928;&#x94b;&#x902; &#x915;&#x94b; &#x906;&#x935;&#x902;&#x91f;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928; &#x938;&#x947; &#x938;&#x902;&#x92c;&#x902;&#x927;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916;</label>
</div>
<div class="tdata">
<label class="lbl" for="93963_5" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="81" value="5" name="93963" id="93963_5"  required="true"   />&nbsp; &#x905;&#x928;&#x94d;&#x92f; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916;</label>
</div>
<div class="tdata">
<label class="lbl" for="93963_6" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="81" value="6" name="93963" id="93963_6"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916;&#x94b;&#x902; &#x915;&#x940; &#x905;&#x928;&#x941;&#x92a;&#x932;&#x92c;&#x94d;&#x927;&#x924;&#x93e; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f; &#x92e;&#x947;&#x902; &#x938;&#x94d;&#x925;&#x932; &#x928;&#x93f;&#x930;&#x940;&#x915;&#x94d;&#x937;&#x923; &#x939;&#x947;&#x924;&#x941; &#x906;&#x917;&#x94d;&#x930;&#x939;</label>
</div>
<label class="error" for="93963" style="display: none;"></label>
</div>	


</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="9" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x938;&#x94d;&#x935;-&#x918;&#x94b;&#x937;&#x923;&#x93e; &#x2f; Self Declaration&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="74837"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
Self Declaration
</label>
<div class="cont" style="margin-left:%;width:99%;">
<textarea id="74837" name="74837" style="width:99%;" size="" tabindex="82" placeholder="" minlength="0" maxlength="5000"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="74837" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:100%;font-family:Arial;font-size:14px; color:#000">
<p>.</p>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">
<input type="checkbox" value="Y" name="41670" id="41670" required="true" data-type="agreeText"/>
I Agree
<span class="mandatory">*</span>
</label>
</div>
<input type="hidden" name="57009" value="" id="57009" data-name="encloserChk"/>
</div>
</div>		

    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<input type="hidden" name="derived_service_id" id="derived_service_id" value="4650013"/>
<input type="hidden" name="derivedFieldEditableFlag" id="derivedFieldEditableFlag" value="1"/>
<input type="hidden" name="derived_identifier_fieldSource" id="derived_identifier_fieldSource" value="A"/>	

 <input type="hidden" name="derived_identifier_attr_id" value="78185"/>
 <input type="hidden" name="derived_identifier_attr_inputtype" value="text"/>

 <input type="hidden" name="derived_identifier_attr_id" value="78249"/>
 <input type="hidden" name="derived_identifier_attr_inputtype" value="fullName"/>

</body>
</html>
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
<option value = '5' >Block Circle</option>
</select></div></div>
<div class='trow' id='TR1' style='display:none'><div class='tdata'><label class='lbl'>STATE</label>
<select id='1'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR323' style='display:none'><div class='tdata'><label class='lbl'>DIVISION-COMMISSIONARY</label>
<select id='323'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR2' style='display:none'><div class='tdata'><label class='lbl'>DISTRICT</label>
<select id='2'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR76' style='display:none'><div class='tdata'><label class='lbl'>SUB-DIVISION</label>
<select id='76'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR5' style='display:none'><div class='tdata'><label class='lbl'>BLOCK</label>
<select id='5'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='TR77' style='display:none'><div class='tdata'><label class='lbl'>CIRCLE</label>
<select id='77'  style='display:none' onchange='fillSecond(this.value,this.id);'></select></div></div>
<div class='trow' id='ipOriginalTR' style='display:none'><div class='tdata'><select id ='originalListID' name='originalCode'>

<option value = '0~16630~0~L999~1' >General Administration Department</option>
<option value = '16630~1257617~0~L999~323' >Office of Divisional Commissioner( BHAGALPUR )</option>
<option value = '16630~1257611~0~L999~323' >Office of Divisional Commissioner( DARBHANGA )</option>
<option value = '16630~1257612~0~L999~323' >Office of Divisional Commissioner( KOSHI )</option>
<option value = '16630~1257610~0~L999~323' >Office of Divisional Commissioner( MAGADH )</option>
<option value = '16630~1257613~0~L999~323' >Office of Divisional Commissioner( MUNGER )</option>
<option value = '16630~1257618~0~L999~323' >Office of Divisional Commissioner( PATNA )</option>
<option value = '16630~1257614~0~L999~323' >Office of Divisional Commissioner( PURNIA )</option>
<option value = '16630~1257615~0~L999~323' >Office of Divisional Commissioner( SARAN )</option>
<option value = '16630~1257616~0~L999~323' >Office of Divisional Commissioner( TIRHUT )</option>
<option value = '1257614~16631~0~L999~2' >Administrative Department( DISTRICT - ARARIA )</option>
<option value = '1257610~16632~0~L999~2' >Administrative Department( DISTRICT - ARWAL )</option>
<option value = '1257610~16633~0~L999~2' >Administrative Department( DISTRICT - AURANGABAD )</option>
<option value = '1257617~16634~0~L999~2' >Administrative Department( DISTRICT - BANKA )</option>
<option value = '1257613~16635~0~L999~2' >Administrative Department( DISTRICT - BEGUSARAI )</option>
<option value = '1257617~16636~0~L999~2' >Administrative Department( DISTRICT - BHAGALPUR )</option>
<option value = '1257618~16637~0~L999~2' >Administrative Department( DISTRICT - BHOJPUR )</option>
<option value = '1257618~16638~0~L999~2' >Administrative Department( DISTRICT - BUXAR )</option>
<option value = '1257611~16639~0~L999~2' >Administrative Department( DISTRICT - DARBHANGA )</option>
<option value = '1257610~16640~0~L999~2' >Administrative Department( DISTRICT - GAYA )</option>
<option value = '1257615~16641~0~L999~2' >Administrative Department( DISTRICT - GOPALGANJ )</option>
<option value = '1257613~16642~0~L999~2' >Administrative Department( DISTRICT - JAMUI )</option>
<option value = '1257610~16643~0~L999~2' >Administrative Department( DISTRICT - JEHANABAD )</option>
<option value = '1257618~16644~0~L999~2' >Administrative Department( DISTRICT - KAIMUR (BHABUA) )</option>
<option value = '1257614~16645~0~L999~2' >Administrative Department( DISTRICT - KATIHAR )</option>
<option value = '1257613~16646~0~L999~2' >Administrative Department( DISTRICT - KHAGARIA )</option>
<option value = '1257614~16647~0~L999~2' >Administrative Department( DISTRICT - KISHANGANJ )</option>
<option value = '1257613~16648~0~L999~2' >Administrative Department( DISTRICT - LAKHISARAI )</option>
<option value = '1257612~16649~0~L999~2' >Administrative Department( DISTRICT - MADHEPURA )</option>
<option value = '1257611~16650~0~L999~2' >Administrative Department( DISTRICT - MADHUBANI )</option>
<option value = '1257613~16651~0~L999~2' >Administrative Department( DISTRICT - MUNGER )</option>
<option value = '1257616~16652~0~L999~2' >Administrative Department( DISTRICT - MUZAFFARPUR )</option>
<option value = '1257618~16653~0~L999~2' >Administrative Department( DISTRICT - NALANDA )</option>
<option value = '1257610~16654~0~L999~2' >Administrative Department( DISTRICT - NAWADA )</option>
<option value = '1257616~16655~0~L999~2' >Administrative Department( DISTRICT - PASHCHIM CHAMPARAN )</option>
<option value = '1257618~16656~0~L999~2' >Administrative Department( DISTRICT - PATNA )</option>
<option value = '1257616~16657~0~L999~2' >Administrative Department( DISTRICT - PURBI CHAMPARAN )</option>
<option value = '1257614~16658~0~L999~2' >Administrative Department( DISTRICT - PURNIA )</option>
<option value = '1257618~16659~0~L999~2' >Administrative Department( DISTRICT - ROHTAS )</option>
<option value = '1257612~16660~0~L999~2' >Administrative Department( DISTRICT - SAHARSA )</option>
<option value = '1257611~16661~0~L999~2' >Administrative Department( DISTRICT - SAMASTIPUR )</option>
<option value = '1257615~16662~0~L999~2' >Administrative Department( DISTRICT - SARAN )</option>
<option value = '1257613~16663~0~L999~2' >Administrative Department( DISTRICT - SHEIKHPURA )</option>
<option value = '1257616~16664~0~L999~2' >Administrative Department( DISTRICT - SHEOHAR )</option>
<option value = '1257616~16665~0~L999~2' >Administrative Department( DISTRICT - SITAMARHI )</option>
<option value = '1257615~16666~0~L999~2' >Administrative Department( DISTRICT - SIWAN )</option>
<option value = '1257612~16667~0~L999~2' >Administrative Department( DISTRICT - SUPAUL )</option>
<option value = '1257616~16668~0~L999~2' >Administrative Department( DISTRICT - VAISHALI )</option>
<option value = '16637~17408~0~L999~76' >ARA</option>
<option value = '16631~17395~0~L999~76' >ARARIA</option>
<option value = '16657~17459~0~L999~76' >ARERAJ</option>
<option value = '16632~17397~0~L999~76' >ARWAL</option>
<option value = '16633~17398~0~L999~76' >AURANGABAD</option>
<option value = '16655~17456~0~L999~76' >BAGHA</option>
<option value = '16658~17448~0~L999~76' >BAISI</option>
<option value = '16635~17400~0~L999~76' >BAKHRI</option>
<option value = '16635~17401~0~L999~76' >BALIA</option>
<option value = '16634~17495~0~L999~76' >BANKA</option>
<option value = '16658~17465~0~L999~76' >BANMANKHI</option>
<option value = '16656~17458~0~L999~76' >BARH</option>
<option value = '16645~17426~0~L999~76' >BARSOI</option>
<option value = '16635~17402~0~L999~76' >BEGUSARAI</option>
<option value = '16665~17479~0~L999~76' >BELSAND</option>
<option value = '16650~17435~0~L999~76' >BENIPATTI</option>
<option value = '16639~17413~0~L999~76' >BENIPUR</option>
<option value = '16655~17447~0~L999~76' >BETTIAH</option>
<option value = '16644~17424~0~L999~76' >BHABHUA</option>
<option value = '16636~17405~0~L999~76' >BHAGALPUR</option>
<option value = '16653~17453~0~L999~76' >BIHARSHARIF</option>
<option value = '16659~17469~0~L999~76' >BIKRAMGANJ</option>
<option value = '16639~17414~0~L999~76' >BIRAUL</option>
<option value = '16667~17484~0~L999~76' >BIRPUR</option>
<option value = '16638~17411~0~L999~76' >BUXAR</option>
<option value = '16657~17460~0~L999~76' >CHAKIYA</option>
<option value = '16661~17474~0~L999~76' >DALSINGHSARAI</option>
<option value = '16656~16674~0~L999~76' >Danapur</option>
<option value = '16639~17415~0~L999~76' >DARBHANGA</option>
<option value = '16633~17399~0~L999~76' >DAUDNAGAR</option>
<option value = '16659~17470~0~L999~76' >DEHRI</option>
<option value = '16658~17466~0~L999~76' >DHAMDAHA</option>
<option value = '16638~17412~0~L999~76' >DUMRAON</option>
<option value = '16631~17396~0~L999~76' >FORBESGANJ</option>
<option value = '16640~17416~0~L999~76' >GAYA SADAR</option>
<option value = '16646~17429~0~L999~76' >GOGRI</option>
<option value = '16641~17420~0~L999~76' >GOPALGANJ</option>
<option value = '16668~17488~0~L999~76' >HAJIPUR</option>
<option value = '16641~17421~0~L999~76' >HATHUA</option>
<option value = '16651~17441~0~L999~76' >HAWELI KHARAGPUR</option>
<option value = '16653~17445~0~L999~76' >HILSA</option>
<option value = '16642~17422~0~L999~76' >JAMUI</option>
<option value = '16650~17436~0~L999~76' >JAYNAGAR</option>
<option value = '16643~17423~0~L999~76' >JEHANABAD</option>
<option value = '16650~17437~0~L999~76' >JHANJHARPUR</option>
<option value = '16636~17406~0~L999~76' >KAHALGAON</option>
<option value = '16645~17427~0~L999~76' >KATIHAR</option>
<option value = '16646~17430~0~L999~76' >KHAGARIA</option>
<option value = '16647~17431~0~L999~76' >KISHANGANJ</option>
<option value = '16648~17432~0~L999~76' >LAKHISARAI</option>
<option value = '16649~17433~0~L999~76' >MADHEPURA</option>
<option value = '16650~17438~0~L999~76' >MADHUBANI</option>
<option value = '16666~17482~0~L999~76' >MAHARAJGANJ</option>
<option value = '16668~17489~0~L999~76' >MAHNAR</option>
<option value = '16668~17490~0~L999~76' >MAHUA</option>
<option value = '16645~17428~0~L999~76' >MANIHARI</option>
<option value = '16635~17403~0~L999~76' >MANJHAUL</option>
<option value = '16662~17477~0~L999~76' >MARHAURA</option>
<option value = '16656~17491~0~L999~76' >MASAURHI</option>
<option value = '16644~17425~0~L999~76' >MOHANIA</option>
<option value = '16657~17461~0~L999~76' >MOTIHARI</option>
<option value = '16651~17440~0~L999~76' >MUNGER SADAR</option>
<option value = '16652~17443~0~L999~76' >MUZAFFARPUR EAST</option>
<option value = '16652~17444~0~L999~76' >MUZAFFARPUR WEST</option>
<option value = '16655~17457~0~L999~76' >NARKATIYAGANJ</option>
<option value = '16636~17407~0~L999~76' >NAVGACHHIYA</option>
<option value = '16654~17446~0~L999~76' >NAWADA</option>
<option value = '16640~17417~0~L999~76' >NEEMCHAK BATHANI</option>
<option value = '16667~17485~0~L999~76' >NIRMALI</option>
<option value = '16657~17462~0~L999~76' >PAKARIDYAL</option>
<option value = '16656~17492~0~L999~76' >PALIGANJ</option>
<option value = '16637~17409~0~L999~76' >Panchayat Samiti(Block Advisory Council- Jampuijala BAC )</option>
<option value = '16656~17493~0~L999~76' >PATNA CITY</option>
<option value = '16656~17494~0~L999~76' >PATNA SADAR</option>
<option value = '16661~17475~0~L999~76' >PATORI</option>
<option value = '16650~17439~0~L999~76' >PHULPARAS</option>
<option value = '16637~17410~0~L999~76' >PIRO</option>
<option value = '16665~17480~0~L999~76' >PUPRI</option>
<option value = '16658~17468~0~L999~76' >PURNIA SADAR</option>
<option value = '16654~17455~0~L999~76' >RAJAULI</option>
<option value = '16653~17454~0~L999~76' >RAJGIR</option>
<option value = '16657~17463~0~L999~76' >RAXAUL</option>
<option value = '16661~17449~0~L999~76' >ROSERA</option>
<option value = '16660~17472~0~L999~76' >SAHARSA</option>
<option value = '16661~17476~0~L999~76' >SAMASTIPUR SADAR</option>
<option value = '16662~17478~0~L999~76' >SARAN SADAR</option>
<option value = '16659~17471~0~L999~76' >SASARAM</option>
<option value = '16663~17451~0~L999~76' >SHEIKHPURA</option>
<option value = '16664~17452~0~L999~76' >SHEOHAR</option>
<option value = '16640~17418~0~L999~76' >SHERGHATTY</option>
<option value = '16657~17464~0~L999~76' >SIKARHANA</option>
<option value = '16660~17473~0~L999~76' >SIMRI BAKHTIARPUR</option>
<option value = '16665~17481~0~L999~76' >SITAMARHI SADAR</option>
<option value = '16666~17483~0~L999~76' >SIWAN SADAR</option>
<option value = '16662~17450~0~L999~76' >SONEPUR</option>
<option value = '16667~17486~0~L999~76' >SUPAUL</option>
<option value = '16651~17442~0~L999~76' >TARAPUR</option>
<option value = '16635~17404~0~L999~76' >TEGHRA</option>
<option value = '16640~17419~0~L999~76' >TEKARI</option>
<option value = '16667~17487~0~L999~76' >TRIVENIGANJ</option>
<option value = '16649~17434~0~L999~76' >UDAKISHUNGANJ</option>
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

<div class='trow' style='display:none'><div class='tdata'><input type='hidden' id='hiddOrgLevel' value='1,323,2,76,5,77,-' /></div></div></div></div></body></html> 
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
	
	
	
	
	
	<input type="hidden" id="serviceId" value="4650013">
	<input type="hidden" id="appliedServiceId" value="4650013">
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
var uidJson='[{"id":14,"versionNo":13,"serviceId":4650013,"uidAttrId":56980,"nameAttrId":17176,"attrType":0}]';
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
	   var combinedJson = '{"attribute":{"74837":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"41670":{"exception":"","type":"agreeText","ekyc_attr":"null","values":{"value":""}},"17202":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"92189":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41553":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"41552":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"56891":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"58159":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"78249":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"91921":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17332":{"exception":"","type":"email","ekyc_attr":"null","values":{"value":""}},"17179":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"64883":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17493":{"exception":"","type":"image","ekyc_attr":"null","values":{"value":""}},"90796":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"64882":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"91920":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17176":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"17177":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90797":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"41547":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"41546":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"41545":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"75299":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"41669":{"exception":"","type":"declareText","ekyc_attr":"null","values":{"value":""}},"91918":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91919":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"56980":{"exception":"","type":"AadhaarNumber","ekyc_attr":"null","values":{"value":""}},"60761":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91912":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91913":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90788":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"91910":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91559":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"91911":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91916":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91914":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91915":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"71866":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91594":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"75307":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91677":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"75306":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17185":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"75305":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17186":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"75304":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"75303":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"17188":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"75302":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17182":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"75301":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41535":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41579":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17183":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"75300":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17184":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"78185":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"78187":{"exception":"","type":"button","ekyc_attr":"null","values":{"value":""}},"17180":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"91909":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91907":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"59505":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91908":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"57009":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"91902":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"61220":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90779":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91905":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"59507":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91906":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91903":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91904":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"65034":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17196":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"41486":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41485":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"93963":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"63930":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"17193":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17392":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17195":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"78252":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"17191":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"92190":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"56927":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"56928":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"71989":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}}}}' ;
	   var ekycJson = '' != null && '' != ''? $.parseJSON(''):'';
	   var jsonData ='' != null && '' != ''? $.parseJSON(''):'';
	   var applicationId='';
	   var autoFilledValJson ='' != null && '' != ''? $.parseJSON(''):'';
	   var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
	   var draftRefNo     = '';
	   var mappingFlag  	  = 'true';
       var stateId       	  = '10';
       var attrId			  = '17184';
       var statusApp          =  'S';
       var pageload=false;
       var userChoice		  = '';
       var listValue		  = '';
       var locationId 		  = '';
       var selectedDeptLevel  = '';
	   var selectedLeveStr    ='';
	   var selectedAttrId     = '';
	   var serviceId          =  $('#serviceId').val();// '4650013'; 
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
			 form.action = "applyPageForm.do";//?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&UUID=e7348b69-a5c7-453f-b588-073f3af46e34
			 form.submit();
			$('#SubmitButton').attr('disabled', 'disabled');
		}
		
		function FormReset(source){
			if(confirm('Are you sure you want to reset the form?')){
				if(source=="E"){
					//window.location="editApplicationForm.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&applicationRefNo=&UUID=e7348b69-a5c7-453f-b588-073f3af46e34&grievanceRefNo=";
					var url="editApplicationForm.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&applicationRefNo=&UUID=e7348b69-a5c7-453f-b588-073f3af46e34&grievanceRefNo=";
					formPost(url);
				}else{
					//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&serviceId=4650013&UUID=e7348b69-a5c7-453f-b588-073f3af46e34&grievanceRefNo=";
					var url="renderApplicationForm.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&serviceId=4650013&UUID=e7348b69-a5c7-453f-b588-073f3af46e34&grievanceRefNo=";
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
							window.location="appliedService.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
						}else if(source == "CTZN" || source=="CS"){ 
							var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";								
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
								formPost(url);
							}
						}else{
						
							var datachk='Y';
							if(datachk.trim()=="Y"){
								 window.history.back();
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
								formPost(url);
							}
						}		
							
					}
				 }
	  	}
		function FormClose(source){
			if(source=="new"){
				//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&serviceId=4650013&UUID=e7348b69-a5c7-453f-b588-073f3af46e34";
				var url="renderApplicationForm.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&serviceId=4650013&UUID=e7348b69-a5c7-453f-b588-073f3af46e34";
				formPost(url);
			}else{
				answer = confirm("Are you sure you want to close the form?");
				if (answer !="0"){
					if(source=="E"){
						window.location="appliedService.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
					}else if(source == "CTZN" || source=="CS"){ 
						var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
								formPost(url);
							}
					}else{
						
						var datachk='Y';
						if(datachk.trim()=="Y"){
							 window.history.back();
						}else{
							//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
							var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
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
					var url="viewLGDDepartment.do?spdiStateId="+spdiStateId+"&spdiAttributeId="+spdiAttributeId+"&OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
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
					Android.androidFucHelpDocApplForm("-_-4650013-_-748");
				} else {
					var url="viewHelpDoc.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&fileName=&serviceId=4650013&templId=748";
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
					 form.action = "saveApplDraft.do";//?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D&UUID=e7348b69-a5c7-453f-b588-073f3af46e34
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
							
<script type="text/javascript" src="resources/js/servicespecificjs/10/4650013_748.js"
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
	 window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=KT6W-N7IL-NRUU-7K2B-JZ5A-6BZI-R5F1-FU0D";
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
<script type="text/javascript" src="https://www.google.com/jsapi"></script><script> $(document).ready(function(){$("li.default1").addClass("active");$("li.active").nextAll(".click").addClass("not-active");});google.load("elements", "1", {packages: "transliteration"})
</script> 	
 </body>
</html>