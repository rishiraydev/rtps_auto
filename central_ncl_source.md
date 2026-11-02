link-https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=9330013&UUID=3c215324-36a4-4d06-97e5-8b63068eb64b&directService=true&tempId=3127&grievDefined=0&serviceLinkRequired=No&userLoggedIn=N&source=CTZN&OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT










<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
		
		 	<title>ServicePlus- Issuance of Non Creamy Layer Certificate (For the purpose of Govt. of India) at RO level</title>
		
		
	
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
			    input.setAttribute("value", "CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT");
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
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=9330013&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
 var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=9330013&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
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
<input type="hidden" id="csrfTokeID" name="OWASP_CSRFTOKEN" value="CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT"/>
<input type="hidden" id="currentDateID" name="currentDate" value="02/11/2026"/>
<input type="hidden" name ="UUID" value="c545c508-0449-4639-a4d7-56aaad439620"/>
<input type="hidden" name ="applStatus" id="applStatus" value="S"/>
<input type="hidden" name ="grievanceRefNo" id="grievanceRefNo" value=""/>
<input type="hidden" name="seq_no"  value="imipg"/>
<input type="hidden" name="applyId"  value=""/>
<input type="hidden" name ="serviceId" id="serviceId" value="9330013"/>
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
form.action = "applyPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=9330013&UUID="+uuid ;
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
<td>&nbsp;</td>
<td style="text-align:center">
<div><span style="font-size:16px"><strong>फॉर्म-VI<br />
ओ. बी. सी. (क्रीमीलेयर रहित) प्रमाण पत्र हेतु आवेदन-पत्र<br />
Application Form for issuance of OBC(Non Creamy Layer) Certificate from Revenue Officer Level</strong><br />
<span style="font-size:12px"><strong>(भारत सरकार के प्रयोजनार्थ)</strong></span></span></div>
</td>
<td style="text-align:right">&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p></div>
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x2f; Applicant&#x27;s Detail&#xd;&#xa;&#x9;&#x9;	
</h4>
<hr/>
<div class="trow">
<div class="tdata">
<label class="lbl" for="93029"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923; &#x92a;&#x924;&#x94d;&#x930; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x93e;&#x930;&#x942;&#x92a; &#x28;&#x92d;&#x93e;&#x937;&#x93e;&#x29; &#x91a;&#x941;&#x928;&#x947;&#x902; &#x2f; Select Certificate Format
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="93029" name="93029" class="searchDrop" tabindex="1" style="width:83%;" data-datatype="dropDown" data-groupno="428"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x939;&#x93f;&#x902;&#x926;&#x940; &#x2f; Hindi</option>
<option value="2" >&#x905;&#x902;&#x917;&#x94d;&#x930;&#x947;&#x91c;&#x940; &#x2f; English</option>
</select>
<label class="error" style="display: none;" for="93029"></label>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60088"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x932;&#x93f;&#x902;&#x917; &#x2f; Gender
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="60088_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="1" name="60088" id="60088_1"  required="true"   />&nbsp; &#x92a;&#x941;&#x930;&#x941;&#x937; &#x2f; Male</label>
</div>
<div class="tdata">
<label class="lbl" for="60088_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="2" name="60088" id="60088_2"  required="true"   />&nbsp; &#x938;&#x94d;&#x924;&#x94d;&#x930;&#x940; &#x2f; Female</label>
</div>
<div class="tdata">
<label class="lbl" for="60088_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="3" name="60088" id="60088_3"  required="true"   />&nbsp; &#x924;&#x943;&#x924;&#x940;&#x92f; &#x932;&#x93f;&#x902;&#x917; &#x2f; Third Gender</label>
</div>
<label class="error" for="60088" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60093"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x2f; Salutation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60093" name="60093" class="searchDrop" tabindex="4" style="width:83%;" data-datatype="dropDown" data-groupno="19"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x936;&#x94d;&#x930;&#x940;</option>
<option value="2" >&#x936;&#x94d;&#x930;&#x940;&#x92e;&#x924;&#x940;</option>
<option value="3" >&#x938;&#x941;&#x936;&#x94d;&#x930;&#x940;</option>
<option value="4" >&#x915;&#x94b;&#x908; &#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x928;&#x939;&#x940;&#x902;</option>
</select>
<label class="error" style="display: none;" for="60093"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60091"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
1. Name of Applicant
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="5" placeholder="" name="60091" data-type="fullName" data-groupno="152" id="60091"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="60091" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60094"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x2f; &#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="6" placeholder="" name="60094" data-type="text" data-groupno="2" id="60094"  maxlength="99"  required="true"  />																
<label class="error" for="60094" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60068"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
2. &#x91c;&#x928;&#x94d;&#x92e; &#x924;&#x93f;&#x925;&#x93f; &#x2f; Date of Birth
</label>
<div class="cont" style="margin-left:%;width:83%;">
<div class="calendar_opt" style="width:83%;">
<input type="text" name="60068" value="" tabindex="7" id="60068"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60068" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60062"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Aadhaar No. &#x28;&#x906;&#x927;&#x93e;&#x930; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x940;&#x915;&#x930;&#x923; &#x905;&#x928;&#x93f;&#x935;&#x93e;&#x930;&#x94d;&#x92f; &#x928;&#x939;&#x940;&#x902; &#x939;&#x948;, &#x92f;&#x926;&#x93f; &#x906;&#x92a; &#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x92d;&#x930;&#x947;&#x902;&#x917;&#x947; &#x924;&#x94b; &#x907;&#x938;&#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x940;&#x915;&#x930;&#x923; &#x915;&#x930;&#x928;&#x93e; &#x939;&#x94b;&#x917;&#x93e;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-verificationType="2" data-type="AadhaarNumber" serviceId="9330013" verification-flag="true" value="" type="text" tabindex="8"  placeholder="" name="60062_txt" data-datatype="AadhaarNumber" data-groupno="156" id="60062_txt"  maxlength="16" verhoeff="16"  />
<input type="hidden" id="60062" name="60062" value=""/>
<label class="error" for="60062"  style="display: none;"></label>
<input type="hidden" id="60062_txn" name="60062_txn" value=""/>
<input type="hidden" id="60062_val" name="60062_val" value=""/>
<input type="hidden" id="60062_consent" value="'Identification of Applicant by GAD, Govt. of Bihar'. मैं यह स्पष्ट करता हूँ कि मुझे आधार आधारित प्रमाणीकरण प्रणाली के साथ स्वयं को प्रमाणित करने में कोई आपत्ति नहीं है और मैं अपना आधार नंबर प्रदान करने के लिए सहमत हूँ। मैं समझता हूँ कि आधार नंबर का उपयोग केवल नीचे उल्लिखित उद्देश्य के लिए किया जाएगा: 'सामान्य प्रशासन विभाग, बिहार सरकार द्वारा आवेदक की पहचान।"/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:70%;font-family:Arial;font-size:14px; color:#000">3. &#x906;&#x935;&#x93e;&#x938;&#x940;&#x92f; &#x92a;&#x924;&#x93e; &#x28;&#x92a;&#x942;&#x930;&#x94d;&#x923;&#x29; &#x2f; Residential Address &#x28;Full&#x29;
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:70%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x915;&#x29; &#x938;&#x94d;&#x925;&#x93e;&#x908; &#x92a;&#x924;&#x93e; &#x2f; Permanent Address&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60069"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60069" name="60069"  tabindex="13" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="10"  required="true" >
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
<label class="error" for="60069" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60070"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60070" name="60070"  tabindex="14" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="11"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60070" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60071"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60071" name="60071"  tabindex="15" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="12"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60071" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60072"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60072" name="60072"  tabindex="16" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="13"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60072" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60097"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="17" placeholder="" name="60097" data-type="text" data-groupno="14" id="60097"  maxlength="99"  required="true"  />																
<label class="error" for="60097" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60073"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="18" placeholder="" name="60073" data-type="text" data-groupno="157" id="60073"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="60073" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60098"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="19" placeholder="" name="60098" data-type="text" data-groupno="16" id="60098"  maxlength="99"  required="true"  />																
<label class="error" for="60098" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60100"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="20" placeholder="" name="60100" data-type="text" data-groupno="17" id="60100"  minlength="6" maxlength="6" min="000000" max="999999" digits="true"  required="true"  />																
<label class="error" for="60100" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60099"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x94d;&#x915;&#x93f;&#x932; &#x928;. &#x2f; Circle No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="21" placeholder="" name="60099" data-type="text" data-groupno="120" id="60099"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="60099" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60103"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x939;&#x94b;&#x932;&#x94d;&#x921;&#x93f;&#x902;&#x917; &#x928;. &#x2f; Holding No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="22" placeholder="" name="60103" data-type="text" data-groupno="121" id="60103"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="60103" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91079"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
</label>
<div class="cont" style="margin-left:%;width:83%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91079_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="1" name="91079" id="91079_1"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="91079_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="2" name="91079" id="91079_2"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="91079_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="3" name="91079" id="91079_3"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="91079_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="4" name="91079" id="91079_4"   />&nbsp; &#x928;&#x917;&#x930;&#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="91079" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91081"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="91081" name="91081"  tabindex="24" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="371"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91081" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60059"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="60059" name="60059"  tabindex="25" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="155" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60059" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91083"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91083" name="91083"  tabindex="27" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="372" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91083" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91084"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91084" name="91084"  tabindex="29" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="374" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91084" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91085"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91085" name="91085"  tabindex="31" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="377" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91085" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60101"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x28;&#x916;&#x29; &#x905;&#x938;&#x94d;&#x925;&#x93e;&#x908; &#x92a;&#x924;&#x93e; &#x2f; Temporary Address&#x3a; -
</label>
<div class="cont" style="margin-left:%;width:50%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="60101_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="33" value="1" name="60101" id="60101_1"    />
Same as above &#x2f; &#x90a;&#x92a;&#x930; &#x91c;&#x948;&#x938;&#x93e;
</label>
</div>									
<label class="error" for="60101_1" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60102"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60102" name="60102"  tabindex="35" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="46"  required="true" >
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
<label class="error" for="60102" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60077"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60077" name="60077"  tabindex="36" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="47"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60077" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60076"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="60076" name="60076"  tabindex="37" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="48" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60076" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60060"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="60060" name="60060"  tabindex="38" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="49" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60060" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60081"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="39" placeholder="" name="60081" data-type="text" data-groupno="50" id="60081"  maxlength="99"  required="true"  />																
<label class="error" for="60081" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60074"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="40" placeholder="" name="60074" data-type="text" data-groupno="158" id="60074"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="60074" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60064"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="41" placeholder="" name="60064" data-type="text" data-groupno="52" id="60064"  maxlength="99"  required="true"  />																
<label class="error" for="60064" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60056"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="42" placeholder="" name="60056" data-type="text" data-groupno="53" id="60056"  minlength="6" maxlength="6" min="000000" max="999999" digits="true"  required="true"  />																
<label class="error" for="60056" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60104"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x94d;&#x915;&#x93f;&#x932; &#x928;. &#x2f; Circle No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="43" placeholder="" name="60104" data-type="text" data-groupno="122" id="60104"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="60104" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60090"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x939;&#x94b;&#x932;&#x94d;&#x921;&#x93f;&#x902;&#x917; &#x928;. &#x2f; Holding No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="44" placeholder="" name="60090" data-type="text" data-groupno="123" id="60090"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="60090" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91080"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
</label>
<div class="cont" style="margin-left:%;width:83%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91080_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="1" name="91080" id="91080_1"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="91080_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="2" name="91080" id="91080_2"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="91080_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="3" name="91080" id="91080_3"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="91080_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="4" name="91080" id="91080_4"   />&nbsp; &#x928;&#x917;&#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="91080" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91082"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91082" name="91082"  tabindex="46" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="370" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91082" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60061"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="60061" name="60061"  tabindex="47" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="154" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="60061" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91086"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91086" name="91086"  tabindex="49" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="373" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91086" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91087"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91087" name="91087"  tabindex="51" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="375" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91087" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91088"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="91088" name="91088"  tabindex="53" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="376" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="91088" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60105"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
4. &#x927;&#x930;&#x94d;&#x92e; &#x2f; Religion
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="55" placeholder="" name="60105" data-type="text" data-groupno="129" id="60105"  maxlength="99"  required="true"  />																
<label class="error" for="60105" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60057"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x930;&#x94d;&#x917; &#x2f; Category
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60057" name="60057" class="searchDrop" tabindex="56" style="width:83%;" data-datatype="dropDown" data-groupno="139"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x905;&#x928;&#x94d;&#x92f; &#x92a;&#x93f;&#x91b;&#x95c;&#x93e; &#x935;&#x930;&#x94d;&#x917;</option>
<option value="2" >&#x92a;&#x93f;&#x91b;&#x921;&#x93c;&#x93e; &#x935;&#x930;&#x94d;&#x917; &#x28;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x940;-2&#x29;</option>
</select>
<label class="error" style="display: none;" for="60057"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60106"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
5. &#x91c;&#x93e;&#x924;&#x93f; &#x2f; Caste
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60106" name="60106" class="searchDrop" tabindex="57" style="width:83%;" data-datatype="dropDown" data-groupno="140"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >Abdal &#x2f; &#x905;&#x92c;&#x94d;&#x926;&#x932;</option>
<option value="3" >Aghori &#x2f; &#x905;&#x918;&#x94b;&#x930;&#x940;</option>
<option value="4" >Amaat &#x2f; &#x905;&#x92e;&#x93e;&#x924;</option>
<option value="5" >Kasab &#x28;Kasai&#x29; &#x28;Muslim&#x29; &#x2f; &#x915;&#x938;&#x93e;&#x92c; &#x28;&#x915;&#x938;&#x93e;&#x908;&#x29; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="6" >Kewat, Keot &#x2f; &#x915;&#x947;&#x935;&#x91f;, &#x915;&#x947;&#x909;&#x924;</option>
<option value="7" >Kadar &#x2f; &#x915;&#x93e;&#x926;&#x930;</option>
<option value="8" >Kaivartta&#x2f;Kaibartta &#x2f; &#x915;&#x948;&#x935;&#x930;&#x924;&#x93e;&#x2f;&#x915;&#x948;&#x92c;&#x930;&#x924;&#x93e;</option>
<option value="9" >Kalandar &#x2f; &#x915;&#x932;&#x928;&#x94d;&#x926;&#x930;</option>
<option value="10" >Kaura &#x2f; &#x915;&#x94c;&#x930;&#x93e;</option>
<option value="12" >Kochh &#x2f; &#x915;&#x94b;&#x91a;</option>
<option value="13" >Korku &#x2f; &#x915;&#x94b;&#x930;&#x915;&#x941;</option>
<option value="15" >Kurmi,Kurmi&#x28;Mahto&#x29; &#x28;in Chhotanagpur Division only&#x29; &#x2f; &#x915;&#x941;&#x930;&#x94d;&#x92e;&#x940;, &#x915;&#x941;&#x930;&#x94d;&#x92e;&#x940; &#x28;&#x92e;&#x939;&#x924;&#x94b;&#x29; &#x915;&#x947;&#x935;&#x932; &#x91b;&#x94b;&#x91f;&#x93e;&#x928;&#x93e;&#x917;&#x92a;&#x941;&#x930; &#x92a;&#x94d;&#x930;&#x92e;&#x902;&#x921;&#x932; &#x92e;&#x947;&#x902;</option>
<option value="16" >Kagzi &#x2f; &#x915;&#x93e;&#x917;&#x91c;&#x940;</option>
<option value="17" >Kanu &#x2f; &#x915;&#x93e;&#x928;&#x941;</option>
<option value="18" >Kamar &#x28;Lohar, Karmakar, Visvakarma&#x29; &#x2f; &#x915;&#x92e;&#x93e;&#x930; &#x28;&#x932;&#x94b;&#x939;&#x93e;&#x930;, &#x915;&#x930;&#x94d;&#x92e;&#x915;&#x93e;&#x930;, &#x935;&#x93f;&#x936;&#x94d;&#x935;&#x915;&#x930;&#x94d;&#x92e;&#x93e;&#x29;</option>
<option value="19" >Kushwaha &#x28;Koeri&#x29; &#x2f; &#x915;&#x941;&#x936;&#x935;&#x93e;&#x939;&#x93e; &#x28;&#x915;&#x94b;&#x907;&#x930;&#x940;&#x29;</option>
<option value="20" >Kapadia &#x2f; &#x915;&#x92a;&#x921;&#x93f;&#x92f;&#x93e;</option>
<option value="21" >Kosta, Kostha &#x2f; &#x915;&#x94b;&#x938;&#x94d;&#x924;&#x93e; , &#x915;&#x94b;&#x936;&#x94d;&#x924;</option>
<option value="22" >Khatik &#x2f; &#x916;&#x91f;&#x940;&#x915;</option>
<option value="23" >Khangar &#x2f; &#x916;&#x902;&#x917;&#x930;</option>
<option value="24" >Khatwa &#x2f; &#x916;&#x91f;&#x935;&#x93e;</option>
<option value="25" >Khatwe &#x2f; &#x916;&#x924;&#x935;&#x947;</option>
<option value="26" >Khadwar &#x28;Only in the district of Sivan and Rohtas&#x29; &#x2f; &#x916;&#x921;&#x935;&#x93e;&#x930; &#x28;&#x938;&#x93f;&#x930;&#x94d;&#x92b; &#x938;&#x93f;&#x935;&#x93e;&#x928; &#x914;&#x930; &#x930;&#x94b;&#x939;&#x924;&#x93e;&#x938; &#x91c;&#x93f;&#x932;&#x947;&#x902; &#x92e;&#x947;&#x902;&#x29;</option>
<option value="27" >Khetauri, Khatauri &#x2f; &#x916;&#x947;&#x924;&#x94b;&#x921;&#x940;, &#x916;&#x924;&#x94c;&#x921;&#x940;</option>
<option value="28" >Khelta &#x2f; &#x916;&#x947;&#x932;&#x924;&#x93e;</option>
<option value="29" >Godi &#x28;Chhava&#x29;&#x2f;&#x917;&#x94b;&#x926;&#x940; &#x28;&#x91a;&#x93e;&#x935;&#x93e;&#x29;</option>
<option value="30" >Gaddi&#x2f;&#x917;&#x926;&#x94d;&#x926;&#x940;</option>
<option value="31" >Gandarbh or Gandharb&#x2f;&#x917;&#x902;&#x927;&#x930;&#x94d;&#x92d; &#x92f;&#x93e; &#x917;&#x902;&#x927;&#x930;&#x94d;&#x935;</option>
<option value="32" >Gangai &#x28;Ganesh&#x29;&#x2f;&#x917;&#x902;&#x917;&#x908; &#x28;&#x917;&#x923;&#x947;&#x936;&#x29;</option>
<option value="33" >Gangota, Gangoth&#x2f;&#x917;&#x902;&#x917;&#x94b;&#x924;&#x93e;, &#x917;&#x902;&#x917;&#x94b;&#x925;</option>
<option value="34" >Gorh,Gonrh &#x28;Only in the district of Saran &amp; Rohtas&#x29;&#x2f;&#x917;&#x94b;&#x930;&#x939;, &#x917;&#x94b;&#x930;&#x94d;&#x928;&#x939; &#x28;&#x915;&#x947;&#x935;&#x932; &#x91c;&#x93f;&#x932;&#x93e; &#x938;&#x93e;&#x930;&#x923; &#x914;&#x930; &#x930;&#x94b;&#x939;&#x924;&#x93e;&#x938; &#x92e;&#x947;&#x902;&#x29;</option>
<option value="35" >Gulgaliya&#x2f;&#x917;&#x941;&#x932;&#x917;&#x932;&#x93f;&#x92f;&#x93e;</option>
<option value="36" >Goud&#x2f;&#x917;&#x94c;&#x902;&#x921;</option>
<option value="37" >Ghatwar&#x2f;&#x918;&#x91f;&#x935;&#x93e;&#x930;</option>
<option value="38" >Chik &#x28;Muslim&#x29;&#x2f;&#x91a;&#x93f;&#x915; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="39" >Chain, Chayeen&#x2f;&#x91a;&#x947;&#x928;, &#x91a;&#x947;&#x908;&#x928;</option>
<option value="40" >Chapota&#x2f;&#x91a;&#x92a;&#x94b;&#x924;&#x93e;</option>
<option value="41" >Chandrabanshi &#x28;Kahar&#x29;&#x2f;&#x91a;&#x902;&#x926;&#x94d;&#x930;&#x935;&#x902;&#x936;&#x940; &#x28;&#x915;&#x939;&#x93e;&#x930;&#x29;</option>
<option value="42" >Churihar &#x28;Muslim&#x29;&#x2f;&#x91a;&#x942;&#x930;&#x93f;&#x939;&#x93e;&#x930; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="43" >Chanou&#x2f;&#x91a;&#x928;&#x90a;</option>
<option value="44" >Jogi &#x28;Jugi&#x29;&#x2f;&#x91c;&#x94b;&#x917;&#x940; &#x28;&#x91c;&#x941;&#x917;&#x940;&#x29;</option>
<option value="45" >Tikulhar&#x2f;&#x91f;&#x93f;&#x915;&#x941;&#x932;&#x939;&#x93e;&#x930;</option>
<option value="46" >Dafali &#x28;Muslim&#x29;&#x2f;&#x921;&#x92b;&#x932;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="47" >Dhekaru&#x2f;&#x926;&#x947;&#x915;&#x93e;&#x930;&#x942;</option>
<option value="48" >Tanti &#x28;Tatwa&#x29;, Tati, Tatin&#x2f;&#x924;&#x93e;&#x902;&#x924;&#x940;&#x28;&#x924;&#x924;&#x935;&#x93e;&#x29;,&#x924;&#x93e;&#x924;&#x940;, &#x924;&#x93e;&#x924;&#x940;&#x928;</option>
<option value="49" >Turha&#x2f;&#x924;&#x941;&#x930;&#x939;&#x93e;</option>
<option value="50" >Tamariya&#x2f;&#x924;&#x92e;&#x921;&#x93f;&#x92f;&#x93e;</option>
<option value="51" >Tiyar&#x2f;&#x924;&#x93f;&#x92f;&#x93e;&#x930;</option>
<option value="52" >Tamoli, Tamboli&#x2f;&#x924;&#x92e;&#x94b;&#x932;&#x940;, &#x924;&#x93e;&#x92e;&#x92c;&#x94b;&#x932;&#x940;</option>
<option value="53" >Teli&#x2f;&#x924;&#x947;&#x932;&#x940;</option>
<option value="55" >Devhar&#x2f;&#x926;&#x947;&#x935;&#x939;&#x930;</option>
<option value="56" >Dhanuk&#x2f;&#x927;&#x93e;&#x928;&#x941;&#x915;</option>
<option value="57" >Dhobi &#x28;Muslim&#x29;&#x2f;&#x927;&#x94b;&#x92c;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="58" >Dhunia &#x28;Muslim&#x29;&#x2f;&#x927;&#x941;&#x928;&#x93f;&#x92f;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="59" >Dhamin&#x2f;&#x927;&#x93e;&#x92e;&#x93f;&#x928;</option>
<option value="60" >Dhankar&#x2f;&#x927;&#x928;&#x915;&#x93e;&#x930;</option>
<option value="61" >Dhimar&#x2f;&#x927;&#x940;&#x92e;&#x930;</option>
<option value="62" >Nai&#x2f;&#x928;&#x93e;&#x908;</option>
<option value="63" >Nat &#x28;Muslim&#x29;&#x2f;&#x928;&#x91f; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="64" >Nunia, Nonia &#x2f;&#x928;&#x941;&#x928;&#x93f;&#x92f;&#x93e;, &#x928;&#x94b;&#x928;&#x93f;&#x92f;&#x93e;</option>
<option value="65" >Namshudra&#x2f;&#x928;&#x92e;&#x936;&#x941;&#x926;&#x94d;&#x930;&#x93e;</option>
<option value="66" >Naiya&#x2f;&#x928;&#x948;&#x92f;&#x93e;</option>
<option value="67" >Nalband &#x28;Muslim&#x29; &#x2f; &#x928;&#x93e;&#x932;&#x92c;&#x902;&#x926; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x#x93f;&#x92e;&#x29;</option>
<option value="68" >Pamaria &#x28;Muslim&#x29;&#x2f;&#x92a;&#x92e;&#x930;&#x93f;&#x92f;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="69" >Prajapati &#x28;Kumbhar&#x29;&#x2f;&#x92a;&#x94d;&#x930;&#x91c;&#x93e;&#x92a;&#x924;&#x93f;&#x28;&#x915;&#x941;&#x92e;&#x94d;&#x939;&#x93e;&#x930;&#x29;</option>
<option value="70" >Pandi &#x2f; &#x92a;&#x928;&#x94d;&#x926;&#x940;</option>
<option value="71" >Pinganiya&#x2f;&#x92a;&#x93f;&#x902;&#x917;&#x93e;&#x928;&#x93f;&#x92f;&#x93e;</option>
<option value="72" >Parya&#x2f;&#x92a;&#x930;&#x947;&#x92f;&#x93e;</option>
<option value="73" >Pradhan&#x2f;&#x92a;&#x94d;&#x930;&#x927;&#x93e;&#x928;</option>
<option value="74" >Pahira &#x2f;&#x92a;&#x93e;&#x939;&#x93f;&#x930;&#x93e;</option>
<option value="75" >pal &#x28;Bherihar-Gaderi&#x29;, Gaderia&#x2f;&#x92a;&#x93e;&#x932;&#x28;&#x92d;&#x947;&#x930;&#x93f;&#x92f;&#x93e;&#x930;-&#x917;&#x921;&#x947;&#x930;&#x940;&#x29; &#x917;&#x921;&#x947;&#x930;&#x93f;&#x92f;&#x93e;</option>
<option value="76" >Shekhra &#x2f; &#x936;&#x947;&#x916;&#x95c;&#x93e;</option>
<option value="77" >Bagdi&#x2f;&#x92c;&#x93e;&#x917;&#x926;&#x940;</option>
<option value="78" >Bari&#x2f;&#x92c;&#x93e;&#x930;&#x940;</option>
<option value="79" >Beldar&#x2f;&#x92c;&#x947;&#x932;&#x926;&#x93e;&#x930;</option>
<option value="80" >Bind &#x2f; &#x92c;&#x93f;&#x928;&#x94d;&#x926;</option>
<option value="81" >Barhai &#x28;Viswakarma&#x29;&#x2f; &#x92c;&#x95d;&#x908;&#x28;&#x935;&#x93f;&#x936;&#x94d;&#x935;&#x915;&#x930;&#x94d;&#x92e;&#x93e;&#x29;</option>
<option value="82" >Barai&#x2f;&#x92c;&#x930;&#x908;</option>
<option value="83" >Sudi, Halwai, Roniyar, Pansari, Modi, Kasera,Kesarwani, Thathera, Patwa, Sinduriya-Bania,Mahuri-Vaishya, Avadh-Bania, Agrahari-Vaishya&#x2f;&#x938;&#x941;&#x926;&#x940;, &#x939;&#x932;&#x935;&#x93e;&#x908;, &#x930;&#x94b;&#x928;&#x93f;&#x92f;&#x93e;&#x930;, &#x92a;&#x928;&#x938;&#x93e;&#x930;&#x940;, &#x92e;&#x94b;&#x926;&#x940;, &#x915;&#x938;&#x947;&#x930;&#x93e;, &#x915;&#x947;&#x936;&#x930;&#x935;&#x93e;&#x928;&#x940;, &#x920;&#x920;&#x947;&#x930;&#x93e;, &#x92a;&#x924;&#x935;&#x93e;, &#x938;&#x93f;&#x928;&#x94d;&#x926;&#x941;&#x930;&#x93f;&#x92f;&#x93e;-&#x92c;&#x928;&#x93f;&#x92f;&#x93e;, &#x92e;&#x93e;&#x939;&#x941;&#x930;&#x940;-&#x935;&#x948;&#x936;&#x94d;&#x92f;-&#x905;&#x935;&#x927;-&#x92c;&#x928;&#x93f;&#x92f;&#x93e;, &#x905;&#x917;&#x94d;&#x930;&#x939;&#x93e;&#x930;&#x940;-&#x935;&#x948;&#x936;&#x94d;&#x92f;</option>
<option value="84" >Bhathiara &#x28;Muslim&#x29;&#x2f;&#x92d;&#x925;&#x93f;&#x906;&#x930;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="85" >Bhar&#x2f;&#x92d;&#x930;</option>
<option value="86" >Bhaskar &#x2f; &#x92d;&#x93e;&#x938;&#x94d;&#x915;&#x930;</option>
<option value="87" >Bhuihar, Bhuiyar&#x2f;&#x92d;&#x941;&#x907;&#x939;&#x93e;&#x930;, &#x92d;&#x941;&#x907;&#x92f;&#x93e;&#x930;</option>
<option value="88" >Bhat, Bhatt&#x2f;&#x92d;&#x93e;&#x91f;, &#x92d;&#x91f;&#x94d;&#x91f;</option>
<option value="89" >Mali &#x28;Malakar&#x29;&#x2f;&#x92e;&#x93e;&#x932;&#x940; &#x28;&#x92e;&#x93e;&#x932;&#x93e;&#x915;&#x93e;&#x930;&#x29;</option>
<option value="90" >Mallah &#x28;Surhiya,Kewat Murawari&#x29;&#x2f;&#x92e;&#x932;&#x94d;&#x932;&#x93e;&#x939; &#x28;&#x938;&#x941;&#x930;&#x939;&#x93f;&#x92f;&#x93e;, &#x915;&#x947;&#x935;&#x91f;, &#x92e;&#x941;&#x930;&#x935;&#x93e;&#x930;&#x940;&#x29;</option>
<option value="91" >Madari &#x28;Muslim&#x29;&#x2f;&#x92e;&#x926;&#x93e;&#x930;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="92" >Mehtar, Lalbegi &#x28;Muslim&#x29;, Halalkhor, Bhangi &#x2f;&#x92e;&#x947;&#x939;&#x924;&#x930;, &#x932;&#x93e;&#x932;&#x92c;&#x947;&#x917;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;, &#x939;&#x932;&#x93e;&#x932;&#x916;&#x94b;&#x930;, &#x92d;&#x902;&#x917;&#x940;</option>
<option value="93" >Miriasin &#x28;Muslim&#x29;&#x2f;&#x92e;&#x93f;&#x930;&#x93f;&#x92f;&#x93e;&#x938;&#x93f;&#x928; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="94" >Majhwar&#x2f;&#x92e;&#x91d;&#x935;&#x93e;&#x930;</option>
<option value="95" >Malar &#x28;Malhar&#x29;&#x2f;&#x92e;&#x932;&#x93e;&#x930; &#x28;&#x92e;&#x932;&#x939;&#x93e;&#x930;&#x29;</option>
<option value="96" >Mangar &#x28;Magar&#x29;&#x2f;&#x92e;&#x902;&#x917;&#x930; &#x28;&#x92e;&#x917;&#x930;&#x29;</option>
<option value="97" >Markande &#x2f; &#x92e;&#x93e;&#x930;&#x915;&#x923;&#x94d;&#x921;&#x947;</option>
<option value="98" >Maulik&#x2f;&#x92e;&#x94c;&#x932;&#x93f;&#x915;</option>
<option value="99" >Mukri &#x28;Mukeri&#x29; &#x28;Muslim&#x29;&#x2f;&#x92e;&#x941;&#x915;&#x930;&#x940; &#x28;&#x92e;&#x941;&#x915;&#x947;&#x930;&#x940;&#x29; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="100" >Madar&#x2f;&#x92e;&#x926;&#x93e;&#x930;</option>
<option value="101" >Mauriaro, Mauriara&#x2f;&#x92e;&#x94c;&#x930;&#x93f;&#x906;&#x930;&#x94b;&#x902;, &#x92e;&#x94c;&#x930;&#x93f;&#x906;&#x930;&#x93e;</option>
<option value="102" >Mirshikar &#x28;Muslim&#x29;&#x2f;&#x92e;&#x940;&#x930;&#x936;&#x940;&#x915;&#x93e;&#x930; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="103" >Momin &#x28;Muslim&#x29;,Ansari,Julaha&#x2f;&#x92e;&#x94b;&#x92e;&#x93f;&#x928; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29; ,&#x905;&#x902;&#x938;&#x93e;&#x930;&#x940; ,&#x91c;&#x941;&#x932;&#x93e;&#x939;&#x93e;</option>
<option value="104" >Yadav &#x28;Gwala,Ahir,Gope, Sadgope&#x29;&#x2f;&#x92f;&#x93e;&#x926;&#x935;&#x28;&#x917;&#x94d;&#x935;&#x93e;&#x932;&#x93e;, &#x905;&#x939;&#x940;&#x930;,&#x917;&#x94b;&#x92a; &#x938;&#x926;&#x917;&#x94b;&#x92a;&#x29;</option>
<option value="105" >Rajbhar&#x2f;&#x930;&#x93e;&#x91c;&#x92d;&#x930;</option>
<option value="106" >Rajdhobi&#x2f;&#x930;&#x93e;&#x91c;&#x927;&#x94b;&#x92c;&#x940;</option>
<option value="107" >Rajbanshi &#x28;Risiya &amp; Poliya&#x29;&#x2f;&#x930;&#x93e;&#x91c;&#x935;&#x902;&#x936;&#x940;&#x28;&#x930;&#x93f;&#x938;&#x93f;&#x92f;&#x93e; &#x90f;&#x935;&#x902; &#x92a;&#x94b;&#x932;&#x93f;&#x92f;&#x93e;&#x29;</option>
<option value="108" >Rangwa&#x2f;&#x930;&#x902;&#x917;&#x935;&#x93e;</option>
<option value="109" >Rangrez &#x28;Muslim&#x29;&#x2f;&#x930;&#x902;&#x917;&#x930;&#x947;&#x91c; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="110" >Rauttiya&#x2f;&#x930;&#x94c;&#x924;&#x93f;&#x92f;&#x93e;</option>
<option value="111" >Rayeen or Kunjra &#x28;Muslim&#x29; &#x2f; &#x930;&#x93e;&#x908;&#x928; &#x92f;&#x93e; &#x915;&#x941;&#x902;&#x91c;&#x930;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="112" >Laheri&#x2f;&#x932;&#x939;&#x947;&#x930;&#x940;</option>
<option value="113" >Banpar&#x2f;&#x92c;&#x928;&#x92a;&#x93e;&#x930;</option>
<option value="114" >Shivhari&#x2f;&#x936;&#x93f;&#x935;&#x939;&#x93e;&#x930;&#x940;</option>
<option value="115" >Sauta &#x28;Sota&#x29;&#x2f;&#x938;&#x94c;&#x924;&#x93e; &#x28;&#x938;&#x94b;&#x924;&#x93e;&#x29;</option>
<option value="116" >Sayee &#x28;Muslim&#x29; &#x2f;&#x938;&#x93e;&#x908; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="117" >Sonar , Sunar&#x2f;&#x938;&#x94b;&#x928;&#x93e;&#x930;, &#x938;&#x941;&#x928;&#x93e;&#x930;</option>
<option value="118" >Sangatrash&#x28;only in the district of Nawadah&#x29;&#x2f;&#x938;&#x902;&#x917;&#x93e;&#x924;&#x94d;&#x930;&#x938;&#x28;&#x915;&#x947;&#x935;&#x932; &#x928;&#x935;&#x93e;&#x926;&#x93e; &#x91c;&#x93f;&#x932;&#x93e; &#x92e;&#x947;&#x902;&#x29;</option>
<option value="119" >Idrisi or Darzi &#x28;Muslim&#x29;&#x2f;&#x907;&#x926;&#x930;&#x93f;&#x938;&#x940; &#x92f;&#x93e; &#x926;&#x930;&#x94d;&#x91c;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="120" >Christain converts from Scheduled Caste&#x2f;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x93f;&#x924; &#x91c;&#x93e;&#x924;&#x93f;&#x92f;&#x94b;&#x902; &#x938;&#x947; &#x908;&#x938;&#x93e;&#x908; &#x927;&#x930;&#x94d;&#x92e; &#x92e;&#x947;&#x902; &#x92a;&#x930;&#x93f;&#x935;&#x930;&#x94d;&#x924;&#x93f;&#x924;</option>
<option value="121" >Christain converts from Other Backward Class&#x2f;&#x905;&#x928;&#x94d;&#x92f; &#x92a;&#x93f;&#x91b;&#x95c;&#x947; &#x935;&#x930;&#x94d;&#x917;&#x94b;&#x902; &#x938;&#x947; &#x908;&#x938;&#x93e;&#x908; &#x927;&#x930;&#x94d;&#x92e; &#x92e;&#x947;&#x902; &#x92a;&#x930;&#x93f;&#x935;&#x930;&#x94d;&#x924;&#x93f;&#x924;</option>
<option value="122" >Dhanwar&#x2f;&#x927;&#x928;&#x935;&#x93e;&#x930;</option>
<option value="123" >Dangi&#x2f;&#x926;&#x93e;&#x902;&#x917;&#x940;</option>
<option value="124" >Kalwar &#x2f; &#x915;&#x932;&#x935;&#x93e;&#x930;</option>
<option value="125" >Kulahia&#x2f;&#x915;&#x941;&#x932;&#x94d;&#x939;&#x948;&#x92f;&#x93e;</option>
<option value="126" >Shershahbadi &#x2f;&#x936;&#x947;&#x930;&#x936;&#x93e;&#x939;&#x935;&#x93e;&#x926;&#x940;</option>
<option value="127" >Sukiyar&#x2f;&#x938;&#x941;&#x915;&#x93f;&#x92f;&#x93e;&#x930;</option>
<option value="128" >Nagar &#x28;This does not include Maithili Brahmins and immigrant Nagars from other States who are Brahmins and Baniyas&#x29;&#x2f;&#x928;&#x93e;&#x917;&#x930; &#x28;&#x907;&#x938;&#x92e;&#x947;&#x902; &#x92e;&#x948;&#x925;&#x93f;&#x932;&#x940; &#x92c;&#x94d;&#x930;&#x93e;&#x939;&#x94d;&#x92e;&#x923; &#x936;&#x93e;&#x92e;&#x93f;&#x932; &#x928;&#x939;&#x940;&#x902; &#x939;&#x948; &#x914;&#x930; &#x926;&#x942;&#x938;&#x930;&#x947; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x94b;&#x902; &#x915;&#x947; &#x905;&#x92a;&#x94d;&#x930;&#x935;&#x93e;&#x938;&#x940; &#x928;&#x93e;&#x917;&#x930; &#x92c;&#x94d;&#x930;&#x93e;&#x939;&#x94d;&#x92e;&#x923; &#x914;&#x930; &#x92c;&#x928;&#x93f;&#x92f;&#x93e; &#x939;&#x948;&#x964;&#x29;</option>
<option value="129" >Saikalgar &#x28;Sikligar&#x29; &#x28;Muslim&#x29;&#x2f;&#x938;&#x93e;&#x907;&#x915;&#x932;&#x917;&#x93e;&#x930;&#x28;&#x938;&#x93f;&#x915;&#x932;&#x940;&#x917;&#x93e;&#x930;&#x29;&#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="130" >Bakho &#x28;Muslim&#x29;&#x2f;&#x92c;&#x916;&#x94d;&#x916;&#x94b; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="131" >Thakurai &#x28;Muslim&#x29; &#x2f; &#x920;&#x915;&#x941;&#x930;&#x93e;&#x908; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="132" >Adrakhi&#x2f;&#x905;&#x926;&#x94d;&#x930;&#x93e;&#x916;&#x940;</option>
<option value="133" >Soyar&#x2f;&#x938;&#x94b;&#x92f;&#x93e;&#x930;</option>
<option value="135" >Chhipi&#x2f;&#x91b;&#x940;&#x92a;&#x940;</option>
<option value="136" >ltfarosh&#x2f;ttaftrosh&#x2f;Gadheri&#x2f;&#x908;&#x91f;&#x92b;&#x930;&#x94b;&#x936;&#x2f;&#x908;&#x91f;&#x93e;&#x92b;&#x930;&#x94b;&#x936; &#x2f;&#x917;&#x926;&#x939;&#x947;&#x921;&#x940;</option>
<option value="199" >Kalal, Eraqui &#x2f; &#x915;&#x932;&#x93e;&#x932; , &#x907;&#x930;&#x93e;&#x915;&#x940;</option>
</select>
<label class="error" style="display: none;" for="60106"></label>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60107"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
6. &#x909;&#x92a;-&#x91c;&#x93e;&#x924;&#x93f; &#x2f; Sub-Caste
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="60107" name="60107" class="searchDrop" tabindex="59" style="width:83%;" data-datatype="dropDown" data-groupno="141"   >
<option value="">
Please Select</option>
</select>
<label class="error" style="display: none;" for="60107"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60078"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;-&#x91c;&#x93e;&#x924;&#x93f; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Sub-Caste Serial No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="60" placeholder="" name="60078" data-type="text" data-groupno="27" id="60078"  minlength="0" maxlength="99"  />																
<label class="error" for="60078" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60082"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
7. &#x92a;&#x947;&#x936;&#x93e; &#x2f; Occupation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="60082" name="60082" class="searchDrop" tabindex="61" style="width:83%;" data-datatype="dropDown" data-groupno="149"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x91b;&#x93e;&#x924;&#x94d;&#x930; &#x2f; Student</option>
<option value="2" >&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x2f; Govt. Service</option>
<option value="3" >&#x928;&#x93f;&#x91c;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x2f; Private Service</option>
<option value="4" >&#x935;&#x94d;&#x92f;&#x93e;&#x92a;&#x93e;&#x930; &#x2f; Bussiness</option>
<option value="5" >&#x915;&#x93f;&#x938;&#x93e;&#x928; &#x2f; Farmer</option>
<option value="6" >&#x917;&#x943;&#x939;&#x93f;&#x923;&#x940; &#x2f; Housewife</option>
<option value="7" >&#x905;&#x928;&#x94d;&#x92f; &#x2f; Others</option>
</select>
<label class="error" style="display: none;" for="60082"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60066"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x932;&#x94d;&#x932;&#x93f;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947; &#x2f; Please specify
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="62" placeholder="" name="60066" data-type="text" data-groupno="153" id="60066"  maxlength="99"  required="true"  />																
<label class="error" for="60066" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60065"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
8. &#x915;&#x947;&#x902;&#x926;&#x94d;&#x930; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x93f;&#x91b;&#x95c;&#x940; &#x91c;&#x93e;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Caste Serial No.
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="63" placeholder="" name="60065" data-type="text" data-groupno="142" id="60065"  maxlength="99"  required="true"  />																
<label class="error" for="60065" style="display: none;"></label>


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60083"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
9. Name of Father
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="65" placeholder="" name="60083" data-type="fullName" data-groupno="3" id="60083"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="60083" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60084"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="66" placeholder="" name="60084" data-type="text" data-groupno="4" id="60084"  maxlength="99"  required="true"  />																
<label class="error" for="60084" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91110"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
9.1 &#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x940; &#x91c;&#x93e;&#x924;&#x93f; &#x2f; Caste of Father
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="91110" name="91110" class="searchDrop" tabindex="67" style="width:83%;" data-datatype="dropDown" data-groupno="400"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >Abdal&#x2f;&#x905;&#x92c;&#x94d;&zwj;&#x926;&#x932;</option>
<option value="3" >Aghori&#x2f;&#x905;&#x918;&#x94b;&#x930;&#x940;</option>
<option value="4" >Amaat&#x2f;&#x905;&#x92e;&#x93e;&#x924;</option>
<option value="5" >Kasab &#x28;Kasai&#x29; &#x28;Muslim&#x29;&#x2f;&#x915;&#x938;&#x93e;&#x92c; &#x28;&#x915;&#x938;&#x93e;&#x908;&#x29; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="6" >Kewat, Keot&#x2f;&#x915;&#x947;&#x935;&#x91f;, &#x915;&#x947;&#x909;&#x924;</option>
<option value="7" >Kadar&#x2f;&#x915;&#x93e;&#x926;&#x930;</option>
<option value="8" >Kaivartta&#x2f;Kaibartta&#x2f;&#x915;&#x948;&#x935;&#x930;&#x924;&#x93e;&#x2f;&#x915;&#x948;&#x92c;&#x930;&#x924;&#x93e;</option>
<option value="9" >Kalandar&#x2f;&#x915;&#x932;&#x928;&#x94d;&zwj;&#x926;&#x930;</option>
<option value="10" >Kaura&#x2f;&#x915;&#x94c;&#x930;&#x93e;</option>
<option value="12" >Kochh&#x2f;&#x915;&#x94b;&#x91a;</option>
<option value="13" >Korku&#x2f;&#x915;&#x94b;&#x930;&#x915;&#x941;</option>
<option value="15" >Kurmi,Kurmi&#x28;Mahto&#x29; &#x28;in Chhotanagpur Division only&#x29;&#x2f;&#x915;&#x941;&#x930;&#x94d;&#x92e;&#x940;, &#x915;&#x941;&#x930;&#x94d;&#x92e;&#x940; &#x28;&#x92e;&#x939;&#x924;&#x94b;&#x29; &#x915;&#x947;&#x935;&#x932; &#x91b;&#x94b;&#x91f;&#x93e;&#x928;&#x93e;&#x917;&#x92a;&#x941;&#x930; &#x92a;&#x94d;&#x930;&#x92e;&#x902;&#x921;&#x932; &#x92e;&#x947;&#x902;</option>
<option value="16" >Kagzi&#x2f;&#x915;&#x93e;&#x917;&#x91c;&#x940;</option>
<option value="17" >Kanu&#x2f;&#x915;&#x93e;&#x928;&#x941;</option>
<option value="18" >Kamar &#x28;Lohar, Karmakar, Visvakarma&#x29;&#x2f;&#x915;&#x92e;&#x93e;&#x930;&#x28;&#x932;&#x94b;&#x939;&#x93e;&#x930;, &#x915;&#x930;&#x94d;&#x92e;&#x915;&#x93e;&#x930;, &#x935;&#x93f;&#x936;&#x94d;&zwj;&#x935;&#x915;&#x930;&#x94d;&#x92e;&#x93e;&#x29;</option>
<option value="19" >Kushwaha &#x28;Koeri&#x29;&#x2f;&#x915;&#x941;&#x936;&#x935;&#x93e;&#x939;&#x93e; &#x28;&#x915;&#x94b;&#x907;&#x930;&#x940;&#x29;</option>
<option value="20" >Kapadia&#x2f;&#x915;&#x92a;&#x921;&#x93f;&#x92f;&#x93e;</option>
<option value="21" >Kosta, Koshta &#x2f; &#x915;&#x94b;&#x938;&#x94d;&#x924;&#x93e; , &#x915;&#x94b;&#x936;&#x94d;&#x924;</option>
<option value="22" >Khatik&#x2f;&#x916;&#x91f;&#x940;&#x915;</option>
<option value="23" >Khangar&#x2f;&#x916;&#x902;&#x917;&#x930;</option>
<option value="24" >Khatwa&#x2f;&#x916;&#x91f;&#x935;&#x93e;</option>
<option value="25" >Khatwe&#x2f;&#x916;&#x924;&#x935;&#x947;</option>
<option value="26" >Khadwar &#x28;Only in the district of Sivan and Rohtas&#x29;&#x2f;&#x916;&#x921;&#x935;&#x93e;&#x930; &#x28;&#x938;&#x93f;&#x930;&#x94d;&#x92b; &#x938;&#x93f;&#x935;&#x93e;&#x928; &#x914;&#x930; &#x930;&#x94b;&#x939;&#x924;&#x93e;&#x938; &#x91c;&#x93f;&#x932;&#x947;&#x902; &#x92e;&#x947;&#x902;&#x29;</option>
<option value="27" >Khetauri, Khatauri&#x2f;&#x916;&#x947;&#x924;&#x94b;&#x921;&#x940;, &#x916;&#x924;&#x94c;&#x921;&#x940;</option>
<option value="28" >Khelta&#x2f;&#x916;&#x947;&#x932;&#x924;&#x93e;</option>
<option value="29" >Godi &#x28;Chhava&#x29;&#x2f;&#x917;&#x94b;&#x926;&#x940; &#x28;&#x91a;&#x93e;&#x935;&#x93e;&#x29;</option>
<option value="30" >Gaddi&#x2f;&#x917;&#x926;&#x94d;&#x926;&#x940;</option>
<option value="31" >Gandarbh or Gandharb&#x2f;&#x917;&#x902;&#x927;&#x930;&#x94d;&#x92d; &#x92f;&#x93e; &#x917;&#x902;&#x927;&#x930;&#x94d;&#x935;</option>
<option value="32" >Gangai &#x28;Ganesh&#x29;&#x2f;&#x917;&#x902;&#x917;&#x908; &#x28;&#x917;&#x923;&#x947;&#x936;&#x29;</option>
<option value="33" >Gangota, Gangoth&#x2f;&#x917;&#x902;&#x917;&#x94b;&#x924;&#x93e;, &#x917;&#x902;&#x917;&#x94b;&#x925;</option>
<option value="34" >Gorh,Gonrh &#x28;Only in the district of Saran &amp; Rohtas&#x29;&#x2f;&#x917;&#x94b;&#x930;&#x939;, &#x917;&#x94b;&#x930;&#x94d;&#x928;&#x939; &#x28;&#x915;&#x947;&#x935;&#x932; &#x91c;&#x93f;&#x932;&#x93e; &#x938;&#x93e;&#x930;&#x923; &#x914;&#x930; &#x930;&#x94b;&#x939;&#x924;&#x93e;&#x938; &#x92e;&#x947;&#x902;&#x29;</option>
<option value="35" >Gulgaliya&#x2f;&#x917;&#x941;&#x932;&#x917;&#x932;&#x93f;&#x92f;&#x93e;</option>
<option value="36" >Goud&#x2f;&#x917;&#x94c;&#x902;&#x921;</option>
<option value="37" >Ghatwar&#x2f;&#x918;&#x91f;&#x935;&#x93e;&#x930;</option>
<option value="38" >Chik &#x28;Muslim&#x29;&#x2f;&#x91a;&#x93f;&#x915; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="39" >Chain, Chayeen&#x2f;&#x91a;&#x947;&#x928;, &#x91a;&#x947;&#x908;&#x928;</option>
<option value="40" >Chapota&#x2f;&#x91a;&#x92a;&#x94b;&#x924;&#x93e;</option>
<option value="41" >Chandrabanshi &#x28;Kahar&#x29;&#x2f;&#x91a;&#x902;&#x926;&#x94d;&#x930;&#x935;&#x902;&#x936;&#x940; &#x28;&#x915;&#x939;&#x93e;&#x930;&#x29;</option>
<option value="42" >Churihar &#x28;Muslim&#x29;&#x2f;&#x91a;&#x942;&#x930;&#x93f;&#x939;&#x93e;&#x930; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="43" >Chanou&#x2f;&#x91a;&#x928;&#x90a;</option>
<option value="44" >Jogi &#x28;Jugi&#x29;&#x2f;&#x91c;&#x94b;&#x917;&#x940; &#x28;&#x91c;&#x941;&#x917;&#x940;&#x29;</option>
<option value="45" >Tikulhar&#x2f;&#x91f;&#x93f;&#x915;&#x941;&#x932;&#x939;&#x93e;&#x930;</option>
<option value="46" >Dafali &#x28;Muslim&#x29;&#x2f;&#x921;&#x92b;&#x932;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="47" >Dhekaru&#x2f;&#x926;&#x947;&#x915;&#x93e;&#x930;&#x942;</option>
<option value="48" >Tanti &#x28;Tatwa&#x29;, Tati, Tatin&#x2f;&#x924;&#x93e;&#x902;&#x924;&#x940;&#x28;&#x924;&#x924;&#x935;&#x93e;&#x29;,&#x924;&#x93e;&#x924;&#x940;, &#x924;&#x93e;&#x924;&#x940;&#x928;</option>
<option value="49" >Turha&#x2f;&#x924;&#x941;&#x930;&#x939;&#x93e;</option>
<option value="50" >Tamariya&#x2f;&#x924;&#x92e;&#x921;&#x93f;&#x92f;&#x93e;</option>
<option value="51" >Tiyar&#x2f;&#x924;&#x93f;&#x92f;&#x93e;&#x930;</option>
<option value="52" >Tamoli, Tamboli&#x2f;&#x924;&#x92e;&#x94b;&#x932;&#x940;, &#x924;&#x93e;&#x92e;&#x92c;&#x94b;&#x932;&#x940;</option>
<option value="53" >Teli&#x2f;&#x924;&#x947;&#x932;&#x940;</option>
<option value="55" >Devhar&#x2f;&#x926;&#x947;&#x935;&#x939;&#x930;</option>
<option value="56" >Dhanuk&#x2f;&#x927;&#x93e;&#x928;&#x941;&#x915;</option>
<option value="57" >Dhobi &#x28;Muslim&#x29;&#x2f;&#x927;&#x94b;&#x92c;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="58" >Dhunia &#x28;Muslim&#x29;&#x2f;&#x927;&#x941;&#x928;&#x93f;&#x92f;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="59" >Dhamin&#x2f;&#x927;&#x93e;&#x92e;&#x93f;&#x928;</option>
<option value="60" >Dhankar &#x2f; &#x927;&#x928;&#x915;&#x93e;&#x930;</option>
<option value="61" >Dhimar &#x2f; &#x927;&#x940;&#x92e;&#x930;</option>
<option value="62" >Nai &#x2f; &#x928;&#x93e;&#x908;</option>
<option value="63" >Nat &#x28;Muslim&#x29; &#x2f; &#x928;&#x91f; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="64" >Nunia, Nonia &#x2f; &#x928;&#x941;&#x928;&#x93f;&#x92f;&#x93e;, &#x928;&#x94b;&#x928;&#x93f;&#x92f;&#x93e;</option>
<option value="65" >Namshudra &#x2f; &#x928;&#x92e;&#x936;&#x941;&#x926;&#x94d;&#x930;&#x93e;</option>
<option value="66" >Naiya &#x2f; &#x928;&#x948;&#x92f;&#x93e;</option>
<option value="67" >Nalband &#x28;Muslim&#x29; &#x2f; &#x928;&#x93e;&#x932;&#x92c;&#x902;&#x926; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e; &#x29;</option>
<option value="68" >Pamaria &#x28;Muslim&#x29; &#x2f; &#x92a;&#x92e;&#x930;&#x93f;&#x92f;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="69" >Prajapati &#x28;Kumbhar&#x29; &#x2f; &#x92a;&#x94d;&#x930;&#x91c;&#x93e;&#x92a;&#x924;&#x93f;&#x28;&#x915;&#x941;&#x92e;&#x94d;&zwj;&#x939;&#x93e;&#x930;&#x29;</option>
<option value="70" >Pandi &#x2f; &#x92a;&#x928;&#x94d;&#x926;&#x940;</option>
<option value="71" >Pinganiya&#x2f;&#x92a;&#x93f;&#x902;&#x917;&#x93e;&#x928;&#x93f;&#x92f;&#x93e;</option>
<option value="72" >Parya&#x2f;&#x92a;&#x930;&#x947;&#x92f;&#x93e;</option>
<option value="73" >Pradhan&#x2f;&#x92a;&#x94d;&#x930;&#x927;&#x93e;&#x928;</option>
<option value="74" >Pahira &#x2f;&#x92a;&#x93e;&#x939;&#x93f;&#x930;&#x93e;</option>
<option value="75" >pal &#x28;Bherihar-Gaderi&#x29;, Gaderia&#x2f;&#x92a;&#x93e;&#x932;&#x28;&#x92d;&#x947;&#x930;&#x93f;&#x92f;&#x93e;&#x930;-&#x917;&#x921;&#x947;&#x930;&#x940;&#x29; &#x917;&#x921;&#x947;&#x930;&#x93f;&#x92f;&#x93e;</option>
<option value="76" >Shekhra &#x2f; &#x936;&#x947;&#x916;&#x95c;&#x93e;</option>
<option value="77" >Bagdi&#x2f;&#x92c;&#x93e;&#x917;&#x926;&#x940;</option>
<option value="78" >Bari &#x2f; &#x92c;&#x93e;&#x930;&#x940;</option>
<option value="79" >Beldar &#x2f; &#x92c;&#x947;&#x932;&#x926;&#x93e;&#x930;</option>
<option value="80" >Bind &#x2f; &#x92c;&#x93f;&#x928;&#x94d;&#x926;</option>
<option value="81" >Barhai &#x28;Viswakarma&#x29; &#x2f; &#x92c;&#x922;&#x908; &#x28;&#x935;&#x93f;&#x936;&#x94d;&zwj;&#x935;&#x915;&#x930;&#x94d;&#x92e;&#x93e;&#x29;</option>
<option value="82" >Barai&#x2f;&#x92c;&#x930;&#x908;</option>
<option value="83" >Sudi, Halwai, Roniyar, Pansari, Modi, Kasera,Kesarwani, Thathera, Patwa, Sinduriya-Bania,Mahuri-Vaishya, Avadh-Bania, Agrahari-Vaishya&#x2f;&#x938;&#x941;&#x926;&#x940;, &#x939;&#x932;&#x935;&#x93e;&#x908;, &#x930;&#x94b;&#x928;&#x93f;&#x92f;&#x93e;&#x930;, &#x92a;&#x928;&#x938;&#x93e;&#x930;&#x940;, &#x92e;&#x94b;&#x926;&#x940;, &#x915;&#x938;&#x947;&#x930;&#x93e;,&#x915;&#x947;&#x936;&#x930;&#x935;&#x93e;&#x928;&#x940;, &#x920;&#x920;&#x947;&#x930;&#x93e;, &#x92a;&#x924;&#x935;&#x93e;, &#x938;&#x93f;&#x928;&#x94d;&zwj;&#x926;&#x941;&#x930;&#x93f;&#x92f;&#x93e;-&#x92c;&#x928;&#x93f;&#x92f;&#x93e;,&#x92e;&#x93e;&#x939;&#x941;&#x930;&#x940;-&#x935;&#x948;&#x936;&#x94d;&zwj;&#x92f;-&#x905;&#x935;&#x927;-&#x92c;&#x928;&#x93f;&#x92f;&#x93e;, &#x905;&#x917;&#x94d;&#x930;&#x939;&#x93e;&#x930;&#x93f;-&#x935;&#x948;&#x936;&#x94d;&zwj;&#x92f;</option>
<option value="84" >Bhathiara &#x28;Muslim&#x29;&#x2f;&#x92d;&#x925;&#x93f;&#x906;&#x930;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="85" >Bhar&#x2f;&#x92d;&#x930;</option>
<option value="86" >Bhaskar &#x2f; &#x92d;&#x93e;&#x938;&#x94d;&#x915;&#x930;</option>
<option value="87" >Bhuihar, Bhuiyar &#x2f; &#x92d;&#x941;&#x907;&#x939;&#x93e;&#x930;, &#x92d;&#x941;&#x907;&#x92f;&#x93e;&#x930;</option>
<option value="88" >Bhat, Bhatt&#x2f;&#x92d;&#x93e;&#x91f;, &#x92d;&#x91f;&#x94d;&#x91f;</option>
<option value="89" >Mali &#x28;Malakar&#x29;&#x2f;&#x92e;&#x93e;&#x932;&#x940; &#x28;&#x92e;&#x93e;&#x932;&#x93e;&#x915;&#x93e;&#x930;&#x29;</option>
<option value="90" >Mallah &#x28;Surhiya,Kewat Murawari&#x29;&#x2f;&#x92e;&#x932;&#x94d;&zwj;&#x932;&#x93e;&#x939; &#x28;&#x938;&#x941;&#x930;&#x939;&#x93f;&#x92f;&#x93e;, &#x915;&#x947;&#x935;&#x91f; &#x92e;&#x941;&#x930;&#x93e;&#x935;&#x93e;&#x930;&#x940;&#x29;</option>
<option value="91" >Madari &#x28;Muslim&#x29;&#x2f;&#x92e;&#x926;&#x93e;&#x930;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="92" >Mehtar, Lalbegi &#x28;Muslim&#x29;, Halalkhor, Bhangi &#x2f;&#x92e;&#x947;&#x939;&#x924;&#x930;, &#x932;&#x93e;&#x932;&#x92c;&#x947;&#x917;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;, &#x939;&#x932;&#x93e;&#x932;&#x916;&#x94b;&#x930;, &#x92d;&#x902;&#x917;&#x940;</option>
<option value="93" >Miriasin &#x28;Muslim&#x29;&#x2f;&#x92e;&#x93f;&#x930;&#x93f;&#x92f;&#x93e;&#x938;&#x93f;&#x928; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="94" >Majhwar&#x2f;&#x92e;&#x91d;&#x935;&#x93e;&#x930;</option>
<option value="95" >Malar &#x28;Malhar&#x29;&#x2f;&#x92e;&#x932;&#x93e;&#x930; &#x28;&#x92e;&#x932;&#x939;&#x93e;&#x930;&#x29;</option>
<option value="96" >Mangar &#x28;Magar&#x29;&#x2f;&#x92e;&#x902;&#x917;&#x930; &#x28;&#x92e;&#x917;&#x930;&#x29;</option>
<option value="97" >Markande &#x2f; &#x92e;&#x93e;&#x930;&#x915;&#x923;&#x94d;&#x921;&#x947;</option>
<option value="98" >Maulik&#x2f;&#x92e;&#x94c;&#x932;&#x93f;&#x915;</option>
<option value="99" >Mukri &#x28;Mukeri&#x29; &#x28;Muslim&#x29;&#x2f;&#x92e;&#x941;&#x915;&#x930;&#x940; &#x28;&#x92e;&#x941;&#x915;&#x947;&#x930;&#x940;&#x29; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="100" >Madar&#x2f;&#x92e;&#x926;&#x93e;&#x930;</option>
<option value="101" >Mauriaro, Mauriara&#x2f;&#x92e;&#x94c;&#x930;&#x93f;&#x906;&#x930;&#x94b;&#x902;, &#x92e;&#x94c;&#x930;&#x93f;&#x906;&#x930;&#x93e;</option>
<option value="102" >Mirshikar &#x28;Muslim&#x29;&#x2f;&#x92e;&#x940;&#x930;&#x936;&#x940;&#x915;&#x93e;&#x930; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="103" >Momin &#x28;Muslim&#x29;,Ansari,Julaha&#x2f;&#x92e;&#x94b;&#x92e;&#x93f;&#x928; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29; ,&#x905;&#x902;&#x938;&#x93e;&#x930;&#x940; ,&#x91c;&#x941;&#x932;&#x93e;&#x939;&#x93e;</option>
<option value="104" >Yadav &#x28;Gwala,Ahir,Gope, Sadgope&#x29;&#x2f;&#x92f;&#x93e;&#x926;&#x935;&#x28;&#x917;&#x94d;&#x935;&#x93e;&#x932;&#x93e;, &#x905;&#x939;&#x940;&#x930;,&#x917;&#x94b;&#x92a; &#x938;&#x926;&#x917;&#x94b;&#x92a;&#x29;</option>
<option value="105" >Rajbhar&#x2f;&#x930;&#x93e;&#x91c;&#x92d;&#x930;</option>
<option value="106" >Rajdhobi&#x2f;&#x930;&#x93e;&#x91c;&#x927;&#x94b;&#x92c;&#x940;</option>
<option value="107" >Rajbanshi &#x28;Risiya &amp; Poliya&#x29;&#x2f;&#x930;&#x93e;&#x91c;&#x935;&#x902;&#x936;&#x940;&#x28;&#x930;&#x93f;&#x938;&#x93f;&#x92f;&#x93e; &#x90f;&#x935;&#x902; &#x92a;&#x94b;&#x932;&#x93f;&#x92f;&#x93e;&#x29;</option>
<option value="108" >Rangwa&#x2f;&#x930;&#x902;&#x917;&#x935;&#x93e;</option>
<option value="109" >Rangrez &#x28;Muslim&#x29;&#x2f;&#x930;&#x902;&#x917;&#x930;&#x947;&#x91c; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="110" >Rauttiya&#x2f;&#x930;&#x94c;&#x924;&#x93f;&#x92f;&#x93e;</option>
<option value="111" >Rayeen or Kunjra &#x28;Muslim&#x29; &#x2f; &#x930;&#x93e;&#x908;&#x928; &#x92f;&#x93e; &#x915;&#x941;&#x902;&#x91c;&#x930;&#x93e; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="112" >Laheri&#x2f;&#x932;&#x939;&#x947;&#x930;&#x940;</option>
<option value="113" >Banpar&#x2f;&#x92c;&#x928;&#x92a;&#x93e;&#x930;</option>
<option value="114" >Shivhari&#x2f;&#x936;&#x93f;&#x935;&#x939;&#x93e;&#x930;&#x940;</option>
<option value="115" >Sauta &#x28;Sota&#x29;&#x2f;&#x938;&#x94c;&#x924;&#x93e; &#x28;&#x938;&#x94b;&#x924;&#x93e;&#x29;</option>
<option value="116" >Sayee &#x28;Muslim&#x29; &#x2f;&#x938;&#x93e;&#x908; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="117" >Sonar , Sunar&#x2f;&#x938;&#x94b;&#x928;&#x93e;&#x930;, &#x938;&#x941;&#x928;&#x93e;&#x930;</option>
<option value="118" >Sangatrash&#x28;only in the district of Nawadah&#x29;&#x2f;&#x938;&#x902;&#x917;&#x93e;&#x924;&#x94d;&#x930;&#x938;&#x28;&#x915;&#x947;&#x935;&#x932; &#x928;&#x935;&#x93e;&#x926;&#x93e; &#x91c;&#x93f;&#x932;&#x93e; &#x92e;&#x947;&#x902;&#x29;</option>
<option value="119" >Idrisi or Darzi &#x28;Muslim&#x29;&#x2f;&#x907;&#x926;&#x930;&#x93f;&#x938;&#x940; &#x92f;&#x93e; &#x926;&#x930;&#x94d;&#x91c;&#x940; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="120" >Christain converts from Scheduled Caste&#x2f;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x93f;&#x924; &#x91c;&#x93e;&#x924;&#x93f;&#x92f;&#x94b;&#x902; &#x938;&#x947; &#x908;&#x938;&#x93e;&#x908; &#x927;&#x930;&#x94d;&#x92e; &#x92e;&#x947;&#x902; &#x92a;&#x930;&#x93f;&#x935;&#x930;&#x94d;&#x924;&#x93f;&#x924;</option>
<option value="121" >Christain converts from Other Backward Class&#x2f;&#x905;&#x928;&#x94d;&#x92f; &#x92a;&#x93f;&#x91b;&#x95c;&#x947; &#x935;&#x930;&#x94d;&#x917;&#x94b;&#x902; &#x938;&#x947; &#x908;&#x938;&#x93e;&#x908; &#x927;&#x930;&#x94d;&#x92e; &#x92e;&#x947;&#x902; &#x92a;&#x930;&#x93f;&#x935;&#x930;&#x94d;&#x924;&#x93f;&#x924;</option>
<option value="122" >Dhanwar&#x2f;&#x927;&#x928;&#x935;&#x93e;&#x930;</option>
<option value="123" >Dangi&#x2f;&#x926;&#x93e;&#x902;&#x917;&#x940;</option>
<option value="124" >Kalwar &#x2f; &#x915;&#x932;&#x935;&#x93e;&#x930;</option>
<option value="125" >Kulahia&#x2f;&#x915;&#x941;&#x932;&#x94d;&#x939;&#x948;&#x92f;&#x93e;</option>
<option value="126" >Shershahbadi &#x2f;&#x936;&#x947;&#x930;&#x936;&#x93e;&#x939;&#x935;&#x93e;&#x926;&#x940;</option>
<option value="127" >Sukiyar&#x2f;&#x938;&#x941;&#x915;&#x93f;&#x92f;&#x93e;&#x930;</option>
<option value="128" >Nagar &#x28;This does not include Maithili Brahmins and immigrant Nagars from other States who are Brahmins and Baniyas&#x29;&#x2f;&#x928;&#x93e;&#x917;&#x930; &#x28;&#x907;&#x938;&#x92e;&#x947;&#x902; &#x92e;&#x948;&#x925;&#x93f;&#x932;&#x940; &#x92c;&#x94d;&#x930;&#x93e;&#x939;&#x92e;&#x94d;&zwj;&#x923; &#x936;&#x93e;&#x92e;&#x93f;&#x932; &#x928;&#x939;&#x940;&#x902; &#x939;&#x948;&#x964; &#x914;&#x930; &#x926;&#x942;&#x938;&#x930;&#x947; &#x930;&#x93e;&#x91c;&#x94d;&zwj;&#x92f;&#x94b;&#x902; &#x915;&#x947; &#x905;&#x92a;&#x94d;&#x930;&#x935;&#x93e;&#x938;&#x940; &#x928;&#x917;&#x930; &#x91c;&#x94b; &#x92c;&#x94d;&#x930;&#x93e;&#x939;&#x92e;&#x94d;&zwj;&#x923; &#x914;&#x930; &#x92c;&#x928;&#x93f;&#x92f;&#x93e; &#x939;&#x948;&#x964; &#x914;&#x930; &#x926;&#x942;&#x938;&#x930;&#x947; &#x930;&#x93e;&#x91c;&#x94d;&zwj;&#x92f;&#x94b;&#x902; &#x915;&#x947; &#x905;&#x92a;&#x94d;&#x930;&#x935;&#x93e;&#x938;&#x940; &#x928;&#x93e;&#x917;&#x930; &#x91c;&#x94b; &#x92c;&#x94d;&#x930;&#x93e;&#x939;&#x92e;&#x94d;&zwj;&#x923; &#x914;&#x930; &#x92c;&#x928;&#x93f;&#x92f;&#x93e; &#x939;&#x948;&#x964;</option>
<option value="129" >Saikalgar &#x28;Sikligar&#x29; &#x28;Muslim&#x29;&#x2f;&#x938;&#x93e;&#x907;&#x915;&#x932;&#x917;&#x93e;&#x930;&#x28;&#x938;&#x93f;&#x915;&#x932;&#x940;&#x917;&#x93e;&#x930;&#x29;&#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="130" >Bakho &#x28;Muslim&#x29;&#x2f;&#x92c;&#x916;&#x94d;&#x916;&#x94b; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="131" >Thakurai &#x28;Muslim&#x29; &#x2f; &#x920;&#x915;&#x941;&#x930;&#x93e;&#x908; &#x28;&#x92e;&#x941;&#x938;&#x94d;&#x932;&#x93f;&#x92e;&#x29;</option>
<option value="132" >Adrakhi&#x2f;&#x905;&#x926;&#x94d;&#x930;&#x93e;&#x916;&#x940;</option>
<option value="133" >Soyar&#x2f;&#x938;&#x94b;&#x92f;&#x93e;&#x930;</option>
<option value="135" >Chhipi&#x2f;&#x91b;&#x940;&#x92a;&#x940;</option>
<option value="136" >ltfarosh&#x2f;ttaftrosh&#x2f;Gadheri&#x2f;&#x908;&#x91f;&#x92b;&#x930;&#x94b;&#x936;&#x2f;&#x908;&#x91f;&#x93e;&#x92b;&#x930;&#x94b;&#x936; &#x2f;&#x917;&#x926;&#x939;&#x947;&#x921;&#x940;</option>
<option value="199" >Kalal, Eraqui &#x2f; &#x915;&#x932;&#x93e;&#x932; , &#x907;&#x930;&#x93e;&#x915;&#x940;</option>
</select>
<label class="error" style="display: none;" for="91110"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="91111"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93e;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Caste Serial No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="68" placeholder="" name="91111" data-type="text" data-groupno="401" id="91111"  minlength="0" maxlength="99"  />																
<label class="error" for="91111" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60085"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
10. Name of Mother
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="69" placeholder="" name="60085" data-type="fullName" data-groupno="5" id="60085"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="60085" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="60086"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="70" placeholder="" name="60086" data-type="text" data-groupno="6" id="60086"  maxlength="99"  required="true"  />																
<label class="error" for="60086" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60087"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
11. Name of Husband
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="71" placeholder="" name="60087" data-type="fullName" data-groupno="124" id="60087"  applicantname="true" maxlength="99"  />																
<label class="error" for="60087" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60067"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="72" placeholder="" name="60067" data-type="text" data-groupno="125" id="60067"  minlength="0" maxlength="99"  />																
<label class="error" for="60067" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60058"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x908;&#x92e;&#x947;&#x932; &#x2f; Email of Applicant &#x28;Required for delivery of Certificate as attachment in Email&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="email" serviceId="9330013" resendOtpFlag="true" resendOtpCount="5" resendOtpTime="1"  verification-flag="false" value="" type="text" tabindex="73"  placeholder="" name="60058" data-datatype="email" data-groupno="9" id="60058"  minlength="6" email="true" maxlength="254" minlength="6"  />
<label class="error" for="60058"  style="display: none;"></label>
<input type="hidden" id="60058_txn" name="60058_txn" value=""/>
<input type="hidden" id="60058_val" name="60058_val" value=""/>
<input type="hidden" id="60058_consent" value=""/>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91123"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92b;&#x94b;&#x91f;&#x94b; &#x2f; Photograph of Applicant
</label>
<div class="cont" style="margin-left:%;width:%;">
<input type="hidden" class="imageData" name="91123_image"  id="91123_image" value=""/>
<figure class="thumbnail" style='display:none'>
<a target="_blank" onClick="openLargeStringImage(91123)">
<img class="uploadImage" id="preview" name="preview" src="" attr-id="91123"></img>
</a>
</figure>
<label><a class="removeImage" id="91123_removeLink" style="display:none"><img src="resources/images/delete1.png" width="18" height="19" border="0" /></a></label>
</br> 
<input type="hidden" name="91123_removeFlag" id="91123_removeFlag" value="false"/>
<input type="hidden" name="imageHeight" id="imageHeight" value=""/>
<input type="hidden" name="imageWidth" id="imageWidth" value=""/>
<input type="hidden" name="minImageSize" id="minImageSize" value="20"/>
<input type="hidden" name="maxImageSize" id="maxImageSize" value="200"/>
<input type="hidden" name="91123_croph" id="91123_croph" value=""/>
<input type="hidden" name="91123_cropw" id="91123_cropw" value=""/>
<input type="hidden" name="91123_cropx" id="91123_cropx" value=""/>
<input type="hidden" name="91123_cropy" id="91123_cropy" value=""/>
<input type="file" class="image groupset1"   data-type="image" id="91123" name="91123" />
<image id="91123_openCamra" class="openCamera pointer groupset1"  src="resources/images/camera-icon.png"></image>
<label class="error" for="91123" style="display: none;"></label>							
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60063"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant &#x28;Required for delivery of Certificate through Download Link in SMS&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="9330013" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="75"  placeholder="" name="60063" data-datatype="mobileNo" data-groupno="8" id="60063"  minlength="10" digits="true" maxlength="10" minlength="10"  />
<label class="error" for="60063"  style="display: none;"></label>
<input type="hidden" id="60063_txn" name="60063_txn" value=""/>
<input type="hidden" id="60063_val" name="60063_val" value=""/>
<input type="hidden" id="60063_consent" value=""/>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91159"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant &#x28;Required for delivery of Certificate through Download Link in SMS&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="9330013" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="76"  placeholder="" name="91159" data-datatype="mobileNo" data-groupno="422" id="91159"  minlength="10" digits="true" maxlength="10" minlength="10"  />
<label class="error" for="91159"  style="display: none;"></label>
<input type="hidden" id="91159_txn" name="91159_txn" value=""/>
<input type="hidden" id="91159_val" name="91159_val" value=""/>
<input type="hidden" id="91159_consent" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91073"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Status
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91073_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="77" value="1" name="91073" id="91073_1"   />&nbsp; Accept</label>
</div>
<div class="tdata">
<label class="lbl" for="91073_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="77" value="2" name="91073" id="91073_2"   />&nbsp; Reject</label>
</div>
<label class="error" for="91073" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91074"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Aadhaar Authentication
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91074_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="79" value="1" name="91074" id="91074_1"   />&nbsp; Verified</label>
</div>
<div class="tdata">
<label class="lbl" for="91074_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="79" value="2" name="91074" id="91074_2"   />&nbsp; Not Verified</label>
</div>
<label class="error" for="91074" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91077"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Reason For Rejection
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="80" placeholder="" name="91077" data-type="text" data-groupno="366" id="91077"  minlength="0" maxlength="999"  />																
<label class="error" for="91077" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91076"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Applicant Name
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="81" placeholder="" name="91076" data-type="text" data-groupno="365" id="91076"  minlength="0" maxlength="99"  />																
<label class="error" for="91076" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91098"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
SelectedEnclosure
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="82" placeholder="" name="91098" data-type="text" data-groupno="387" id="91098"  minlength="0" maxlength="999"  />																
<label class="error" for="91098" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91162"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
unused
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="83" placeholder="" name="91162" data-type="text" data-groupno="425" id="91162"  minlength="0" maxlength="99"  />																
<label class="error" for="91162" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60365"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Mode
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="60365_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="84" value="1" name="60365" id="60365_1"   />&nbsp; Online</label>
</div>
<div class="tdata">
<label class="lbl" for="60365_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="84" value="2" name="60365" id="60365_2"   />&nbsp; Offline</label>
</div>
<div class="tdata">
<label class="lbl" for="60365_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="84" value="3" name="60365" id="60365_3"   />&nbsp; Kiosk</label>
</div>
<label class="error" for="60365" style="display: none;"></label>
</div>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<label class="lbl" for="93031"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x92e;&#x902;&#x921;&#x932; &#x2f; Commissionary
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="93031" name="93031"  tabindex="85" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="433"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="93031" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<label class="lbl" for="91161"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Gazatte Resolution
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<input size="" value="" type="text" tabindex="86" placeholder="" name="91161" data-type="text" data-groupno="424" id="91161"  minlength="1" maxlength="999"  required="true"  />																
<label class="error" for="91161" style="display: none;"></label>


</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_4 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x905;&#x935;&#x93f;&#x92d;&#x93e;&#x935;&#x915; &#x2f; &#x92a;&#x93f;&#x924;&#x93e; &#x2f; &#x92a;&#x924;&#x93f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f;&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x905;&#x935;&#x93f;&#x92d;&#x93e;&#x935;&#x915; &#x2f; &#x92a;&#x93f;&#x924;&#x93e; &#x2f; &#x92a;&#x924;&#x93f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f;
</label>				
</div>
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x93f;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x92e;&#x93e;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x924;&#x93f;
</label>				
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x915;&#x29; &#x28;1&#x29; &#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60188"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="92" placeholder="" name="60188" data-type="text" data-groupno="184" id="60188"  minlength="0" maxlength="99"  />																
<label class="error" for="60188" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60189"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="93" placeholder="" name="60189" data-type="text" data-groupno="185" id="60189"  minlength="0" maxlength="99"  />																
<label class="error" for="60189" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60190"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="94" placeholder="" name="60190" data-type="text" data-groupno="186" id="60190"  minlength="0" maxlength="99"  />																
<label class="error" for="60190" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60197"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="96" placeholder="" name="60197" data-type="text" data-groupno="192" id="60197"  minlength="0" maxlength="99"  />																
<label class="error" for="60197" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60198"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="97" placeholder="" name="60198" data-type="text" data-groupno="194" id="60198"  minlength="0" maxlength="99"  />																
<label class="error" for="60198" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60199"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="98" placeholder="" name="60199" data-type="text" data-groupno="195" id="60199"  minlength="0" maxlength="99"  />																
<label class="error" for="60199" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;i&#x29; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60204"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="100" placeholder="" name="60204" data-type="text" data-groupno="196" id="60204"  minlength="0" maxlength="99"  />																
<label class="error" for="60204" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60205"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="101" placeholder="" name="60205" data-type="text" data-groupno="197" id="60205"  minlength="0" maxlength="99"  />																
<label class="error" for="60205" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60206"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="102" placeholder="" name="60206" data-type="text" data-groupno="198" id="60206"  minlength="0" maxlength="99"  />																
<label class="error" for="60206" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x28;ii&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60207"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="104" placeholder="" name="60207" data-type="text" data-groupno="203" id="60207"  minlength="0" maxlength="99"  />																
<label class="error" for="60207" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60211"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="105" placeholder="" name="60211" data-type="text" data-groupno="207" id="60211"  minlength="0" maxlength="99"  />																
<label class="error" for="60211" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60215"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="106" placeholder="" name="60215" data-type="text" data-groupno="211" id="60215"  minlength="0" maxlength="99"  />																
<label class="error" for="60215" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;iii&#x29; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60208"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="108" placeholder="" name="60208" data-type="text" data-groupno="204" id="60208"  minlength="0" maxlength="99"  />																
<label class="error" for="60208" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60213"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="109" placeholder="" name="60213" data-type="text" data-groupno="209" id="60213"  minlength="0" maxlength="99"  />																
<label class="error" for="60213" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60217"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="110" placeholder="" name="60217" data-type="text" data-groupno="213" id="60217"  minlength="0" maxlength="99"  />																
<label class="error" for="60217" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x28;iv&#x29; &#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="91143"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91143" value="" tabindex="112" id="91143"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91143" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91144"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91144" value="" tabindex="113" id="91144"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91144" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91145"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91145" value="" tabindex="114" id="91145"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91145" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;v&#x29; &#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f; &#x28;&#x905;&#x917;&#x930; &#x932;&#x93e;&#x917;&#x942; &#x939;&#x94b;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60210"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f; &#x28;&#x905;&#x917;&#x930; &#x932;&#x93e;&#x917;&#x942; &#x939;&#x94b;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="116" placeholder="" name="60210" data-type="text" data-groupno="206" id="60210"  minlength="0" maxlength="99"  />																
<label class="error" for="60210" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60214"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f; &#x28;&#x905;&#x917;&#x930; &#x932;&#x93e;&#x917;&#x942; &#x939;&#x94b;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="117" placeholder="" name="60214" data-type="text" data-groupno="210" id="60214"  minlength="0" maxlength="99"  />																
<label class="error" for="60214" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60218"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f; &#x28;&#x905;&#x917;&#x930; &#x932;&#x93e;&#x917;&#x942; &#x939;&#x94b;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="118" placeholder="" name="60218" data-type="text" data-groupno="214" id="60218"  minlength="0" maxlength="99"  />																
<label class="error" for="60218" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x916;&#x29; &#x905;&#x902;&#x924;&#x930;&#x930;&#x93e;&#x937;&#x94d;&#x91f;&#x94d;&#x930;&#x940;&#x92f; &#x938;&#x947;&#x935;&#x93e; &#x92e;&#x947;&#x902; &#x928;&#x93f;&#x92f;&#x94b;&#x91c;&#x93f;&#x924; &#x91c;&#x948;&#x938;&#x947; &#x92f;&#x941;&#x928;&#x93f;&#x938;&#x947;&#x92b; &#x2f; &#x92f;&#x942;&#x966; &#x90f;&#x928;&#x966; &#x2f; &#x921;&#x92c;&#x94d;&#x932;&#x94d;&#x92f;&#x942;&#x966; &#x90f;&#x91a;&#x966; &#x913;&#x966;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60223"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="124" placeholder="" name="60223" data-type="text" data-groupno="224" id="60223"  minlength="0" maxlength="99"  />																
<label class="error" for="60223" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60226"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="125" placeholder="" name="60226" data-type="text" data-groupno="225" id="60226"  minlength="0" maxlength="99"  />																
<label class="error" for="60226" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60229"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="126" placeholder="" name="60229" data-type="text" data-groupno="226" id="60229"  minlength="0" maxlength="99"  />																
<label class="error" for="60229" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60224"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="128" placeholder="" name="60224" data-type="text" data-groupno="228" id="60224"  minlength="0" maxlength="99"  />																
<label class="error" for="60224" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60227"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="129" placeholder="" name="60227" data-type="text" data-groupno="229" id="60227"  minlength="0" maxlength="99"  />																
<label class="error" for="60227" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60230"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="130" placeholder="" name="60230" data-type="text" data-groupno="230" id="60230"  minlength="0" maxlength="99"  />																
<label class="error" for="60230" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60232"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="132" placeholder="" name="60232" data-type="text" data-groupno="232" id="60232"  minlength="0" maxlength="99"  />																
<label class="error" for="60232" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91106"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="133" placeholder="" name="91106" data-type="text" data-groupno="395" id="91106"  minlength="0" maxlength="99"  />																
<label class="error" for="91106" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91108"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="134" placeholder="" name="91108" data-type="text" data-groupno="394" id="91108"  minlength="0" maxlength="99"  />																
<label class="error" for="91108" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x924;&#x93f;&#x925;&#x93f; &#x938;&#x947;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="91104"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x924;&#x93f;&#x925;&#x93f; &#x938;&#x947;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91104" value="" tabindex="136" id="91104"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91104" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60233"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x924;&#x93f;&#x925;&#x93f; &#x938;&#x947;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="60233" value="" tabindex="137" id="60233"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60233" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60234"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x924;&#x93f;&#x925;&#x93f; &#x924;&#x915;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="60234" value="" tabindex="138" id="60234"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60234" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x924;&#x93f;&#x925;&#x93f; &#x924;&#x915;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="91105"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x924;&#x93f;&#x925;&#x93f; &#x924;&#x915;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91105" value="" tabindex="140" id="91105"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91105" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91107"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x924;&#x93f;&#x925;&#x93f; &#x924;&#x915;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91107" value="" tabindex="141" id="91107"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91107" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="91109"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x924;&#x93f;&#x925;&#x93f; &#x924;&#x915;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="calendar_opt" style="width:70%;">
<input type="text" name="91109" value="" tabindex="142" id="91109"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="91109" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x917;&#x29; &#x928;&#x93f;&#x91c;&#x940; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x928;&#x93f;&#x92f;&#x94b;&#x91c;&#x93f;&#x924; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60240"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="148" placeholder="" name="60240" data-type="text" data-groupno="242" id="60240"  minlength="0" maxlength="99"  />																
<label class="error" for="60240" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60244"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="149" placeholder="" name="60244" data-type="text" data-groupno="243" id="60244"  minlength="0" maxlength="99"  />																
<label class="error" for="60244" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60248"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="150" placeholder="" name="60248" data-type="text" data-groupno="244" id="60248"  minlength="0" maxlength="99"  />																
<label class="error" for="60248" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60241"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="152" placeholder="" name="60241" data-type="text" data-groupno="245" id="60241"  minlength="0" maxlength="99"  />																
<label class="error" for="60241" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60245"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="153" placeholder="" name="60245" data-type="text" data-groupno="246" id="60245"  minlength="0" maxlength="99"  />																
<label class="error" for="60245" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60249"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="154" placeholder="" name="60249" data-type="text" data-groupno="247" id="60249"  minlength="0" maxlength="99"  />																
<label class="error" for="60249" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60242"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60242" value="" tabindex="156" id="60242"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60242" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60246"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60246" value="" tabindex="157" id="60246"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60246" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60250"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60250" value="" tabindex="158" id="60250"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60250" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x918;&#x29; &#x906;&#x930;&#x94d;&#x92e;&#x938; &#x95e;&#x94b;&#x930;&#x94d;&#x938; &#x2f; &#x92a;&#x93e;&#x930;&#x93e; &#x92e;&#x93f;&#x932;&#x93f;&#x91f;&#x94d;&#x930;&#x940; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60254"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="164" placeholder="" name="60254" data-type="text" data-groupno="252" id="60254"  minlength="0" maxlength="99"  />																
<label class="error" for="60254" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60256"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="165" placeholder="" name="60256" data-type="text" data-groupno="257" id="60256"  minlength="0" maxlength="99"  />																
<label class="error" for="60256" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60258"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="166" placeholder="" name="60258" data-type="text" data-groupno="258" id="60258"  minlength="0" maxlength="99"  />																
<label class="error" for="60258" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60267"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="168" placeholder="" name="60267" data-type="text" data-groupno="260" id="60267"  minlength="0" maxlength="99"  />																
<label class="error" for="60267" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60275"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="169" placeholder="" name="60275" data-type="text" data-groupno="261" id="60275"  minlength="0" maxlength="99"  />																
<label class="error" for="60275" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60283"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="170" placeholder="" name="60283" data-type="text" data-groupno="262" id="60283"  minlength="0" maxlength="99"  />																
<label class="error" for="60283" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x921;&#x29; &#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f;&#x94b;&#x902; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x92a;&#x947;&#x936;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60269"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x93f;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="176" placeholder="" name="60269" data-type="text" data-groupno="268" id="60269"  minlength="0" maxlength="99"  />																
<label class="error" for="60269" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60277"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92e;&#x93e;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="177" placeholder="" name="60277" data-type="text" data-groupno="269" id="60277"  minlength="0" maxlength="99"  />																
<label class="error" for="60277" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60285"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93f; &#x2f; &#x92a;&#x924;&#x94d;&#x928;&#x940;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="178" placeholder="" name="60285" data-type="text" data-groupno="270" id="60285"  minlength="0" maxlength="99"  />																
<label class="error" for="60285" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91a;&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x94d;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x28;&#x92a;&#x93f;&#x924;&#x93e; &#x2f; &#x92e;&#x93e;&#x924;&#x93e; &#x2f; &#x905;&#x935;&#x92f;&#x938;&#x94d;&#x915; &#x92c;&#x91a;&#x94d;&#x91a;&#x94b;&#x902; &#x915;&#x93e; &#x928;&#x93e;&#x92e;&#x29;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x92a;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60271"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="184" placeholder="" name="60271" data-type="text" data-groupno="279" id="60271"  minlength="0" maxlength="99"  />																
<label class="error" for="60271" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60279"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="185" placeholder="" name="60279" data-type="text" data-groupno="283" id="60279"  minlength="0" maxlength="99"  />																
<label class="error" for="60279" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60287"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="186" placeholder="" name="60287" data-type="text" data-groupno="287" id="60287"  minlength="0" maxlength="99"  />																
<label class="error" for="60287" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60272"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="188" placeholder="" name="60272" data-type="text" data-groupno="280" id="60272"  minlength="0" maxlength="99"  />																
<label class="error" for="60272" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60280"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="189" placeholder="" name="60280" data-type="text" data-groupno="284" id="60280"  minlength="0" maxlength="99"  />																
<label class="error" for="60280" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60288"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="190" placeholder="" name="60288" data-type="text" data-groupno="288" id="60288"  minlength="0" maxlength="99"  />																
<label class="error" for="60288" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x28;&#x915;&#x29; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60273"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="192" placeholder="" name="60273" data-type="text" data-groupno="281" id="60273"  minlength="0" maxlength="99"  />																
<label class="error" for="60273" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60281"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="193" placeholder="" name="60281" data-type="text" data-groupno="285" id="60281"  minlength="0" maxlength="99"  />																
<label class="error" for="60281" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60289"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="194" placeholder="" name="60289" data-type="text" data-groupno="289" id="60289"  minlength="0" maxlength="99"  />																
<label class="error" for="60289" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x916;&#x29; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60274"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="196" placeholder="" name="60274" data-type="text" data-groupno="282" id="60274"  minlength="0" maxlength="99"  />																
<label class="error" for="60274" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91116"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="197" placeholder="" name="91116" data-type="text" data-groupno="407" id="91116"  minlength="0" maxlength="99"  />																
<label class="error" for="91116" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91118"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="198" placeholder="" name="91118" data-type="text" data-groupno="409" id="91118"  minlength="0" maxlength="99"  />																
<label class="error" for="91118" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;4&#x29; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924; &#x28;&#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x93f;&#x932;&#x93f;&#x902;&#x917; &#x915;&#x93e;&#x928#x928;&#x942;&#x928; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x29; &#x28;&#x935;&#x93f;&#x935;&#x930;&#x923; &#x905;&#x902;&#x91a;&#x932;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x93f;&#x924; &#x939;&#x94b;&#x928;&#x93e; &#x91a;&#x93e;&#x939;&#x93f;&#x90f; &#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60292"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924; &#x28;&#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x93f;&#x932;&#x93f;&#x902;&#x917; &#x915;&#x93e;&#x928;&#x942;&#x928; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x29; &#x28;&#x935;&#x93f;&#x935;&#x930;&#x923; &#x905;&#x902;&#x91a;&#x932;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x93f;&#x924; &#x939;&#x94b;&#x928;&#x93e; &#x91a;&#x93e;&#x939;&#x93f;&#x90f; &#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="200" placeholder="" name="60292" data-type="text" data-groupno="296" id="60292"  minlength="0" maxlength="99"  />																
<label class="error" for="60292" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91117"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924; &#x28;&#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x93f;&#x932;&#x93f;&#x902;&#x917; &#x915;&#x93e;&#x928;&#x942;&#x928; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x29; &#x28;&#x935;&#x93f;&#x935;&#x930;&#x923; &#x905;&#x902;&#x91a;&#x932;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x93f;&#x924; &#x939;&#x94b;&#x928;&#x93e; &#x91a;&#x93e;&#x939;&#x93f;&#x90f; &#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="201" placeholder="" name="91117" data-type="text" data-groupno="406" id="91117"  minlength="0" maxlength="99"  />																
<label class="error" for="91117" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91119"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924; &#x28;&#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x93f;&#x932;&#x93f;&#x902;&#x917; &#x915;&#x93e;&#x928;&#x942;&#x928; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x29; &#x28;&#x935;&#x93f;&#x935;&#x930;&#x923; &#x905;&#x902;&#x91a;&#x932;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x93f;&#x924; &#x939;&#x94b;&#x928;&#x93e; &#x91a;&#x93e;&#x939;&#x93f;&#x90f; &#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="202" placeholder="" name="91119" data-type="text" data-groupno="408" id="91119"  minlength="0" maxlength="99"  />																
<label class="error" for="91119" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;5&#x29; &#x915;&#x941;&#x932; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x2f; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60302"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x941;&#x932; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x2f; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="204" placeholder="" name="60302" data-type="text" data-groupno="298" id="60302"  minlength="0" maxlength="99"  />																
<label class="error" for="60302" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60307"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x941;&#x932; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x2f; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="205" placeholder="" name="60307" data-type="text" data-groupno="299" id="60307"  minlength="0" maxlength="99"  />																
<label class="error" for="60307" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="91120"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x915;&#x941;&#x932; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x2f; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x95b;&#x92e;&#x940;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="206" placeholder="" name="91120" data-type="text" data-groupno="410" id="91120"  minlength="0" maxlength="99"  />																
<label class="error" for="91120" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91b;&#x29; &#x92a;&#x94d;&#x932;&#x93e;&#x902;&#x91f;&#x947;&#x936;&#x928;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60304"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="212" placeholder="" name="60304" data-type="text" data-groupno="308" id="60304"  minlength="0" maxlength="99"  />																
<label class="error" for="60304" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60309"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="213" placeholder="" name="60309" data-type="text" data-groupno="311" id="60309"  minlength="0" maxlength="99"  />																
<label class="error" for="60309" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60314"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="214" placeholder="" name="60314" data-type="text" data-groupno="314" id="60314"  minlength="0" maxlength="99"  />																
<label class="error" for="60314" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60305"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="216" placeholder="" name="60305" data-type="text" data-groupno="309" id="60305"  minlength="0" maxlength="99"  />																
<label class="error" for="60305" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60310"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="217" placeholder="" name="60310" data-type="text" data-groupno="312" id="60310"  minlength="0" maxlength="99"  />																
<label class="error" for="60310" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60315"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="218" placeholder="" name="60315" data-type="text" data-groupno="315" id="60315"  minlength="0" maxlength="99"  />																
<label class="error" for="60315" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60306"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="220" placeholder="" name="60306" data-type="text" data-groupno="310" id="60306"  minlength="0" maxlength="99"  />																
<label class="error" for="60306" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60311"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="221" placeholder="" name="60311" data-type="text" data-groupno="313" id="60311"  minlength="0" maxlength="99"  />																
<label class="error" for="60311" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60316"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="222" placeholder="" name="60316" data-type="text" data-groupno="316" id="60316"  minlength="0" maxlength="99"  />																
<label class="error" for="60316" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91c;&#x29; &#x92a;&#x930;&#x924;&#x940; &#x91c;&#x92e;&#x940;&#x928; &#x2f; &#x92d;&#x935;&#x928; &#x28;&#x936;&#x939;&#x930;&#x940; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x29;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60322"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="228" placeholder="" name="60322" data-type="text" data-groupno="324" id="60322"  minlength="0" maxlength="99"  />																
<label class="error" for="60322" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60326"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="229" placeholder="" name="60326" data-type="text" data-groupno="327" id="60326"  minlength="0" maxlength="99"  />																
<label class="error" for="60326" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60330"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="230" placeholder="" name="60330" data-type="text" data-groupno="330" id="60330"  minlength="0" maxlength="99"  />																
<label class="error" for="60330" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60323"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="232" placeholder="" name="60323" data-type="text" data-groupno="325" id="60323"  minlength="0" maxlength="99"  />																
<label class="error" for="60323" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60327"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="233" placeholder="" name="60327" data-type="text" data-groupno="328" id="60327"  minlength="0" maxlength="99"  />																
<label class="error" for="60327" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60331"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="234" placeholder="" name="60331" data-type="text" data-groupno="331" id="60331"  minlength="0" maxlength="99"  />																
<label class="error" for="60331" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x92f;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932; &#x939;&#x94b;&#x924;&#x93e; &#x939;&#x948;&#x3f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60324"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x92f;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932; &#x939;&#x94b;&#x924;&#x93e; &#x939;&#x948;&#x3f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="236" placeholder="" name="60324" data-type="text" data-groupno="326" id="60324"  minlength="0" maxlength="99"  />																
<label class="error" for="60324" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60328"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x92f;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932; &#x939;&#x94b;&#x924;&#x93e; &#x939;&#x948;&#x3f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="237" placeholder="" name="60328" data-type="text" data-groupno="329" id="60328"  minlength="0" maxlength="99"  />																
<label class="error" for="60328" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60332"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x92f;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932; &#x939;&#x94b;&#x924;&#x93e; &#x939;&#x948;&#x3f;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="238" placeholder="" name="60332" data-type="text" data-groupno="332" id="60332"  minlength="0" maxlength="99"  />																
<label class="error" for="60332" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91d;&#x29; &#x935;&#x93e;&#x930;&#x94d;&#x937;&#x93f;&#x915; &#x906;&#x92f;&#x3a; -
</label>				
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x928;&#x94c;&#x915;&#x930;&#x940; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60336"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
Job Inc
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="244" placeholder="" name="60336" data-type="text" data-groupno="338" id="60336"  decimal="2" minlength="0" maxlength="8" DecimalNumber="true" min="0" max="99999999"  />																
<label class="error" for="60336" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60340"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Business inc
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="246" placeholder="" name="60340" data-type="text" data-groupno="340" id="60340"  decimal="2" minlength="0" maxlength="8" DecimalNumber="true" min="0" max="99999999"  />																
<label class="error" for="60340" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x947;&#x902;&#x936;&#x928; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="91100"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Pension Income
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="248" placeholder="" name="91100" data-type="text" data-groupno="391" id="91100"  decimal="2" minlength="0" maxlength="8" DecimalNumber="true" min="0" max="99999999"  />																
<label class="error" for="91100" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x915;&#x943;&#x937;&#x93f; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="91103"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Agriculture Income
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="250" placeholder="" name="91103" data-type="text" data-groupno="393" id="91103"  decimal="2" minlength="0" maxlength="8" DecimalNumber="true" min="0" max="99999999"  />																
<label class="error" for="91103" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x935;&#x93e;&#x930;&#x94d;&#x937;&#x93f;&#x915; &#x906;&#x92f;
<span class="mandatory">*</span>
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60344"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
Anual Inc
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="252" placeholder="" name="60344" data-type="text" data-groupno="342" id="60344"  minlength="1" maxlength="999"  required="true"  />																
<label class="error" for="60344" style="display: none;"></label>


</div>
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x915;&#x94d;&#x92f;&#x93e; &#x915;&#x930; &#x92d;&#x941;&#x915;&#x924;&#x93e;&#x928; &#x915;&#x930;&#x924;&#x947; &#x939;&#x948;&#x902; &#x3f; &#x28;&#x905;&#x917;&#x930; &#x939;&#x93e;&#x901; &#x924;&#x94b; &#x935;&#x93f;&#x917;&#x924; &#x924;&#x940;&#x928; &#x935;&#x930;&#x94d;&#x937;&#x94b;&#x902; &#x915;&#x93e; &#x930;&#x93f;&#x91f;&#x930;&#x94d;&#x928; &#x915;&#x940; &#x92a;&#x94d;&#x930;&#x924;&#x93f; &#x92a;&#x94d;&#x930;&#x938;&#x94d;&#x924;&#x941;&#x924; &#x915;&#x930;&#x947;&#x902;&#x29;
<span class="mandatory">*</span>
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60345"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
Return Op
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="60345_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="256" value="1" name="60345" id="60345_1"  required="true"   />&nbsp; &#x939;&#x93e;&#x901; &#x2f; Yes</label>
</div>
<div class="tdata">
<label class="lbl" for="60345_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="256" value="2" name="60345" id="60345_2"  required="true"   />&nbsp; &#x928;&#x939;&#x940;&#x902; &#x2f; No</label>
</div>
<label class="error" for="60345" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="91102"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x28;3&#x29; &#x915;&#x94d;&#x92f;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x930; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x939;&#x948;&#x3f; &#x28;&#x905;&#x917;&#x930; &#x939;&#x93e;&#x901; &#x924;&#x94b; &#x92a;&#x942;&#x930;&#x94d;&#x923; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x926;&#x947;&#x902;&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="91102_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="257" value="1" name="91102" id="91102_1"  required="true"   />&nbsp; &#x939;&#x93e;&#x901; &#x2f; Yes</label>
</div>
<div class="tdata">
<label class="lbl" for="91102_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="257" value="2" name="91102" id="91102_2"  required="true"   />&nbsp; &#x928;&#x939;&#x940;&#x902; &#x2f; No</label>
</div>
<label class="error" for="91102" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60350"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
Tax Desc
</label>
<div class="cont" style="margin-left:%;width:70%;">
<textarea id="60350" name="60350" style="width:70%;" size="" tabindex="258" placeholder="" minlength="0" maxlength="500"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="60350" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91f;&#x29; &#x915;&#x941;&#x91b; &#x905;&#x928;&#x94d;&#x92f; &#x92c;&#x93e;&#x924;&#x947;&#x902;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60352"
style="font-family:Arial;font-size:14px; color:#000;width:10%;">
Other Dtl
</label>
<div class="cont" style="margin-left:%;width:70%;">
<textarea id="60352" name="60352" style="width:70%;" size="" tabindex="260" placeholder="" minlength="0" maxlength="500"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="60352" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_left  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
.&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:12px; color:#000">&#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x93f;&#x924; &#x915;&#x93f;&#x92f;&#x93e; &#x91c;&#x93e;&#x924;&#x93e; &#x939;&#x948; &#x915;&#x93f; &#x909;&#x92a;&#x930;&#x94d;&#x92f;&#x941;&#x915;&#x94d;&#x924; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x92e;&#x947;&#x930;&#x940; &#x91c;&#x93e;&#x928;&#x915;&#x93e;&#x930;&#x940; &#x92e;&#x947;&#x902; &#x938;&#x924;&#x94d;&#x92f; &#x939;&#x948;&#x902; &#x914;&#x930; &#x92a;&#x942;&#x930;&#x94d;&#x923; &#x935;&#x93f;&#x936;&#x94d;&#x935;&#x93e;&#x938; &#x939;&#x948; &#x915;&#x93f; &#x92e;&#x948;&#x902; &#x915;&#x94d;&#x930;&#x940;&#x92e;&#x940;&#x932;&#x947;&#x92f;&#x930; &#x915;&#x947; &#x905;&#x928;&#x94d;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x928;&#x939;&#x940;&#x902; &#x939;&#x942;&#x901; &#x914;&#x930; &#x905;&#x928;&#x94d;&#x92f; &#x92a;&#x93f;&#x91b;&#x95c;&#x93e; &#x935;&#x930;&#x94d;&#x917; &#x915;&#x947; &#x932;&#x93f;&#x90f; &#x938;&#x915;&#x94d;&#x937;&#x92e; &#x939;&#x942;&#x901;&#x7c; &#x905;&#x917;&#x930; &#x915;&#x94b;&#x908; &#x938;&#x942;&#x91a;&#x928;&#x93e; &#x917;&#x932;&#x924; &#x92a;&#x93e;&#x92f;&#x940; &#x917;&#x92f;&#x940; &#x924;&#x94b; &#x92e;&#x947;&#x930;&#x93e; &#x928;&#x93f;&#x92f;&#x94b;&#x91c;&#x928; &#x930;&#x926;&#x94d;&#x926; &#x915;&#x93f;&#x92f;&#x93e; &#x91c;&#x93e; &#x938;&#x915;&#x924;&#x93e; &#x939;&#x948; &#x92f;&#x93e; &#x915;&#x93e;&#x928;&#x942;&#x928; &#x915;&#x947; &#x928;&#x93f;&#x92f;&#x92e; &#x915;&#x947; &#x905;&#x928;&#x94d;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x915;&#x93e;&#x930;&#x94d;&#x930;&#x935;&#x93e;&#x908; &#x915;&#x940; &#x91c;&#x93e; &#x938;&#x915;&#x924;&#x940; &#x939;&#x948;&#x7c;
</label>				
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_left  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x938;&#x902;&#x932;&#x917;&#x94d;&#x928;&#x915; &#x2f; Attachments&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60054"
style="font-family:Arial;font-size:14px; color:#000;width:20%;">
&#x938;&#x902;&#x932;&#x917;&#x94d;&#x928;&#x915; &#x91a;&#x941;&#x928;&#x947;&#x3a; -
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:21%;width:79%;">

<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="60054_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox" checked="checked" tabindex="264" value="1" name="60054" id="60054_1"  required="true"  />
Form-VIII-&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925; &#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60054_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="264" value="2" name="60054" id="60054_2"    required="true"  />
Form-XIII-Residence Certificate &#x28;&#x928;&#x93f;&#x935;&#x93e;&#x938; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923; &#x92a;&#x924;&#x94d;&#x930;&#x29;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60054_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="264" value="3" name="60054" id="60054_3"    required="true"  />
Form-IV-Caste Certificate for BC&#x2f;EBC&#x28;&#x91c;&#x93e;&#x924;&#x93f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923; &#x92a;&#x924;&#x94d;&#x930;&#x29;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60054_4" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="264" value="4" name="60054" id="60054_4"    required="true"  />
Form-XVI-Income Certificate &#x28;&#x906;&#x92f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923; &#x92a;&#x924;&#x94d;&#x930;&#x29;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60054_5" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="264" value="5" name="60054" id="60054_5"    required="true"  />
Income Tax Return of last 3 years &#x28;&#x906;&#x92f;&#x915;&#x930; &#x930;&#x93f;&#x91f;&#x930;&#x94d;&#x928;  &#x935;&#x93f;&#x917;&#x924; &#x924;&#x940;&#x928; &#x935;&#x930;&#x94d;&#x937;&#x94b; &#x915;&#x93e;&#x29;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60054_6" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="264" value="6" name="60054" id="60054_6"    required="true"  />
Property Tax Return &#x28;&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x930; &#x935;&#x93f;&#x935;&#x930;&#x923;&#x940;- &#x935;&#x93f;&#x917;&#x924; &#x924;&#x940;&#x928; &#x935;&#x930;&#x94d;&#x937;&#x94b; &#x915;&#x93e;&#x29;
</label>
</div>									
<label class="error" for="60054_6" style="display: none;"></label>
<!-- </div> -->	
</div> 


</div>
</div>
<input type="hidden" name="60055" value="" id="60055" data-name="Role ID"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91160"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Annexure List
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="265" placeholder="" name="91160" data-type="text" data-groupno="423" id="91160"  minlength="0" maxlength="999"  />																
<label class="error" for="91160" style="display: none;"></label>
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x918;&#x94b;&#x937;&#x923;&#x93e; &#x2f; Self Declaration&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">
<p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif">.</span></span></p>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91078"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
Self Declaration
</label>
<div class="cont" style="margin-left:%;width:99%;">
<textarea id="91078" name="91078" style="width:99%;" size="" tabindex="267" placeholder="" minlength="0" maxlength="2000"  scriptNames="^[\p{Bengali}\p{Devanagari}\p{Gujarati}\p{Gurmukhi}\p{Kannada}\p{Latin}\p{Malayalam}\p{Oriya}\p{Tamil}\p{Telugu}\p{CommonWithNumbers}]+$" allowedLanguages="Bengali/Hindi/Gujrati/Gurmukhi/Kannada/English/Malyalam/Oriya/Tamil/Telungu" ></textarea>
<label class="error" for="91078" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">
<input type="checkbox" value="Y" name="60109" id="60109" required="true" data-type="agreeText"/>
I Agree
<span class="mandatory">*</span>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91142"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Gyapank Number
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="269" placeholder="" name="91142" data-type="text" data-groupno="418" id="91142"  minlength="0" maxlength="99"  />																
<label class="error" for="91142" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91219"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Submission SMS1
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="270" placeholder="" name="91219" data-type="text" data-groupno="426" id="91219"  minlength="0" maxlength="999"  />																
<label class="error" for="91219" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91220"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Submission SMS2
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="271" placeholder="" name="91220" data-type="text" data-groupno="427" id="91220"  minlength="0" maxlength="999"  />																
<label class="error" for="91220" style="display: none;"></label>
</div>
</div>
</div>
</div>		

    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<input type="hidden" name="derived_service_id" id="derived_service_id" value="9330013"/>
<input type="hidden" name="derivedFieldEditableFlag" id="derivedFieldEditableFlag" value="1"/>
<input type="hidden" name="derived_identifier_fieldSource" id="derived_identifier_fieldSource" value="A"/>	

 <input type="hidden" name="derived_identifier_attr_id" value="60091"/>
 <input type="hidden" name="derived_identifier_attr_inputtype" value="fullName"/>

 <input type="hidden" name="derived_identifier_attr_id" value="60069"/>
 <input type="hidden" name="derived_identifier_attr_inputtype" value="custLGDHierarchy"/>

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
<option value = '1257614~16658~0~L999~2' >PURNEA</option>
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
<option value = '16658~17468~0~L999~76' >PURNEA SADAR</option>
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
	
	
	
	
	
	<input type="hidden" id="serviceId" value="9330013">
	<input type="hidden" id="appliedServiceId" value="9330013">
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
var uidJson='[{"id":32,"versionNo":13,"serviceId":9330013,"uidAttrId":86335,"nameAttrId":86322,"attrType":0},{"id":18,"versionNo":13,"serviceId":9330013,"uidAttrId":60062,"nameAttrId":60091,"dobAttrId":60068,"attrType":0}]';
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
	   var combinedJson = '{"attribute":{"91099":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"93030":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91093":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91094":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91092":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91098":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91095":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91096":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"93031":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60109":{"exception":"","type":"agreeText","ekyc_attr":"null","values":{"value":""}},"60239":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60238":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60237":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60236":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60235":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60234":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60233":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60354":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60232":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60353":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60231":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60352":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"60230":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60351":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60350":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"91088":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91089":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"93029":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"91082":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91083":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91080":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91081":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91086":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91087":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91084":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"91085":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60249":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60248":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60368":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60247":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60367":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60246":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60245":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60365":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60244":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60243":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60242":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60241":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60240":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60259":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60258":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60257":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60256":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60255":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60254":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60253":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60252":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60251":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60250":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60269":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60268":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60267":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60266":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60265":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60264":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60263":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60262":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60261":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60260":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60279":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60278":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60277":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60276":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60275":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60274":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60273":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60272":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60271":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60270":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60289":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60288":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60287":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60286":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60285":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60284":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60283":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60281":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60280":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91110":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"91111":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91116":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91117":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91114":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91115":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60059":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60058":{"exception":"","type":"email","ekyc_attr":"null","values":{"value":""}},"60057":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60299":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60056":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91109":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60298":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60055":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"60297":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60054":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"91107":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"91108":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60292":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60291":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91101":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91102":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91220":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91100":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91105":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"91106":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91103":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91104":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60069":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60068":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60189":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60067":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91219":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60188":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60066":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60187":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60065":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60064":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60063":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"60062":{"exception":"","type":"AadhaarNumber","ekyc_attr":"null","values":{"value":""}},"60061":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60060":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60070":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60191":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60190":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91132":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91130":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"91131":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60079":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60078":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60199":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60077":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60198":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60076":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60197":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60075":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60196":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60074":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60195":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60073":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60194":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60072":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60193":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60071":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60192":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60081":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91123":{"exception":"","type":"image","ekyc_attr":"null","values":{"value":""}},"60080":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91120":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60088":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60087":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"91118":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60086":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91119":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60085":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"60084":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60083":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"60082":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60091":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"60090":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91159":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"60099":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60098":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60097":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60096":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60095":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60094":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60093":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"91145":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"91143":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"91144":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"91141":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91142":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60306":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60305":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60304":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60303":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60302":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60301":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60300":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60309":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60308":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60307":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60317":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60316":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60315":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60314":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60313":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60311":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60310":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91160":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91161":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60319":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91162":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60318":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60207":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60328":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60206":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60327":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60205":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60326":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60204":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60325":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60203":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60324":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60202":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60323":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60201":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60322":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60200":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60321":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60320":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"91079":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91077":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91078":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"91076":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"91073":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91074":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60208":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60329":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60218":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60339":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60217":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60338":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60337":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60215":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60336":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60214":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60335":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60213":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60334":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60333":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60211":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60332":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60210":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60331":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60330":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60219":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60108":{"exception":"","type":"declareText","ekyc_attr":"null","values":{"value":""}},"60229":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60107":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60228":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60106":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60227":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60348":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60105":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60226":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60104":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60225":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60346":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60103":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60224":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60345":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60102":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60223":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60344":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60101":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"60222":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60100":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60221":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60342":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60220":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60341":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60340":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}}}}' ;
	   var ekycJson = '' != null && '' != ''? $.parseJSON(''):'';
	   var jsonData ='' != null && '' != ''? $.parseJSON(''):'';
	   var applicationId='';
	   var autoFilledValJson ='' != null && '' != ''? $.parseJSON(''):'';
	   var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
	   var draftRefNo     = '';
	   var mappingFlag  	  = 'true';
       var stateId       	  = '10';
       var attrId			  = '60072';
       var statusApp          =  'S';
       var pageload=false;
       var userChoice		  = '';
       var listValue		  = '';
       var locationId 		  = '';
       var selectedDeptLevel  = '';
	   var selectedLeveStr    ='';
	   var selectedAttrId     = '';
	   var serviceId          =  $('#serviceId').val();// '9330013'; 
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
			 form.action = "applyPageForm.do";//?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&UUID=c545c508-0449-4639-a4d7-56aaad439620
			 form.submit();
			$('#SubmitButton').attr('disabled', 'disabled');
		}
		
		function FormReset(source){
			if(confirm('Are you sure you want to reset the form?')){
				if(source=="E"){
					//window.location="editApplicationForm.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&applicationRefNo=&UUID=c545c508-0449-4639-a4d7-56aaad439620&grievanceRefNo=";
					var url="editApplicationForm.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&applicationRefNo=&UUID=c545c508-0449-4639-a4d7-56aaad439620&grievanceRefNo=";
					formPost(url);
				}else{
					//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&serviceId=9330013&UUID=c545c508-0449-4639-a4d7-56aaad439620&grievanceRefNo=";
					var url="renderApplicationForm.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&serviceId=9330013&UUID=c545c508-0449-4639-a4d7-56aaad439620&grievanceRefNo=";
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
							window.location="appliedService.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
						}else if(source == "CTZN" || source=="CS"){ 
							var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";								
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
								formPost(url);
							}
						}else{
						
							var datachk='Y';
							if(datachk.trim()=="Y"){
								 window.history.back();
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
								formPost(url);
							}
						}		
							
					}
				 }
	  	}
		function FormClose(source){
			if(source=="new"){
				//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&serviceId=9330013&UUID=c545c508-0449-4639-a4d7-56aaad439620";
				var url="renderApplicationForm.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&serviceId=9330013&UUID=c545c508-0449-4639-a4d7-56aaad439620";
				formPost(url);
			}else{
				answer = confirm("Are you sure you want to close the form?");
				if (answer !="0"){
					if(source=="E"){
						window.location="appliedService.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
					}else if(source == "CTZN" || source=="CS"){ 
						var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
								formPost(url);
							}
					}else{
						
						var datachk='Y';
						if(datachk.trim()=="Y"){
							 window.history.back();
						}else{
							//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
							var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
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
					var url="viewLGDDepartment.do?spdiStateId="+spdiStateId+"&spdiAttributeId="+spdiAttributeId+"&OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
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
					Android.androidFucHelpDocApplForm("-_-9330013-_-3127");
				} else {
					var url="viewHelpDoc.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&fileName=&serviceId=9330013&templId=3127";
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
					 form.action = "saveApplDraft.do";//?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT&UUID=c545c508-0449-4639-a4d7-56aaad439620
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
							
<script type="text/javascript" src="resources/js/servicespecificjs/10/9330013_3127.js"
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
	$('input[name^=60068]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60068]').datepicker("option","yearRange", "1900:2026");
$('input[name^=91143]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=91144]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=91145]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=91104]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=60233]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=60234]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=91105]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=91107]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=91109]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=60242]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=60246]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=60250]').datepicker("option","yearRange", "1900:c+20");
	
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
	 window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=CQS5-M40I-P2II-2T5J-6967-NSSU-RG96-ZTFT";
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