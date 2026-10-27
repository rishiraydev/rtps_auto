









<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
		
		 	<title>ServicePlus- Issuance of Income Certificate at RO level</title>
		
		
	
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
			    input.setAttribute("value", "E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE");
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
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4640012&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
 var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4640012&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
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
<input type="hidden" id="csrfTokeID" name="OWASP_CSRFTOKEN" value="E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE"/>
<input type="hidden" id="currentDateID" name="currentDate" value="29/03/2026"/>
<input type="hidden" name ="UUID" value="5937c809-5315-4f3c-82db-93e71ee088f1"/>
<input type="hidden" name ="applStatus" id="applStatus" value="S"/>
<input type="hidden" name ="grievanceRefNo" id="grievanceRefNo" value=""/>
<input type="hidden" name="seq_no"  value="cgcha"/>
<input type="hidden" name="applyId"  value=""/>
<input type="hidden" name ="serviceId" id="serviceId" value="4640012"/>
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
form.action = "applyPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4640012&UUID="+uuid ;
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
<td style="text-align:left"><img alt="" src="Filemanager/connectors/jsp/filemanager.jsp?mode=preview&amp;path=/opt/sp_common/ROOT/Filemanager/userfiles/bihar-sarkar2.jpg" style="height:100px; width:100px" /></td>
<td style="text-align:center">
<div><span style="font-size:16px"><strong>फॉर्म / Form-XV</strong></span><br />
&nbsp;</div>
<div><span style="font-size:16px"><strong>आय प्रमाण-पत्र हेतु आवेदन-पत्र (राजस्व अधिकारी स्तर से) </strong></span><br />
<span style="font-size:16px"><strong>Application Form for Issuance of Income Certificate from Revenue Officer Level</strong></span></div>
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
<label class="lbl" for="78171"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Application Ref. No. of Residence&#x2f;Caste&#x2f;Income
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="3" placeholder="" name="78171" data-type="text" data-groupno="91" id="78171"  minlength="0" maxlength="99"  />																
<label class="error" for="78171" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="78253"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x928;&#x93e;&#x92e; &#x2f; Applicant Name &#x28;English&#x29;
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="4" placeholder="" name="78253" data-type="fullName" data-groupno="94" id="78253"  applicantname="true" maxlength="99"  />																
<label class="error" for="78253" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<input type="button" class="button" size="" title="" style="width:%;" tabindex="5" data-datatype="button"  data-groupno="93"  id="78173" name="78173" value="Get Details"/>					
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
<label class="lbl" for="17209"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
&#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Service Type
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="17209_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="6" value="1" name="17209" id="17209_1"  required="true"   />&nbsp; &#x938;&#x93e;&#x92e;&#x93e;&#x928;&#x94d;&#x92f;&#x2f;General</label>
</div>
<div class="tdata">
<label class="lbl" for="17209_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="6" value="2" name="17209" id="17209_2"  required="true"   />&nbsp; &#x924;&#x924;&#x94d;&#x915;&#x93e;&#x932;&#x2f;Tatkal</label>
</div>
<label class="error" for="17209" style="display: none;"></label>
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
<label class="lbl" for="17155"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x932;&#x93f;&#x902;&#x917; &#x2f; Gender
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:90%;">

<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="17155_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="1" name="17155" id="17155_1"  required="true"   />&nbsp; &#x92a;&#x941;&#x930;&#x941;&#x937; &#x2f; Male</label>
</div>
<div class="tdata">
<label class="lbl" for="17155_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="2" name="17155" id="17155_2"  required="true"   />&nbsp; &#x938;&#x94d;&#x924;&#x94d;&#x930;&#x940; &#x2f; Female</label>
</div>
<div class="tdata">
<label class="lbl" for="17155_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="3" name="17155" id="17155_3"  required="true"   />&nbsp; &#x924;&#x943;&#x924;&#x940;&#x92f; &#x932;&#x93f;&#x902;&#x917; &#x2f; Third Gender</label>
</div>
<label class="error" for="17155" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="64058"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x2f; Salutation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="64058" name="64058" class="searchDrop" tabindex="9" style="width:83%;" data-datatype="dropDown" data-groupno="70"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x936;&#x94d;&#x930;&#x940;</option>
<option value="2" >&#x936;&#x94d;&#x930;&#x940;&#x92e;&#x924;&#x940;</option>
<option value="3" >&#x938;&#x941;&#x936;&#x94d;&#x930;&#x940;</option>
<option value="4" >&#x915;&#x94b;&#x908; &#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x928;&#x939;&#x940;&#x902;</option>
</select>
<label class="error" style="display: none;" for="64058"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17154"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Applicant
<span class="mandatory">*</span>
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="10" placeholder="" name="17154" data-type="fullName" data-groupno="3" id="17154"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="17154" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17394"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x2f; &#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="11" placeholder="" name="17394" data-type="text" data-groupno="36" id="17394"   required="true"  />																
<label class="error" for="17394" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17157"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Father
<span class="mandatory">*</span>
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="12" placeholder="" name="17157" data-type="fullName" data-groupno="4" id="17157"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="17157" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17395"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="13" placeholder="" name="17395" data-type="text" data-groupno="35" id="17395"  maxlength="99"  required="true"  />																
<label class="error" for="17395" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41395"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Mother
<span class="mandatory">*</span>
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="14" placeholder="" name="41395" data-type="fullName" data-groupno="45" id="41395"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="41395" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41433"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="15" placeholder="" name="41433" data-type="text" data-groupno="48" id="41433"   required="true"  />																
<label class="error" for="41433" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="64810"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Name of Husband
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="16" placeholder="" name="64810" data-type="fullName" data-groupno="72" id="64810"  applicantname="true" maxlength="99"  />																
<label class="error" for="64810" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="64811"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="17" placeholder="" name="64811" data-type="text" data-groupno="73" id="64811"   />																
<label class="error" for="64811" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17203"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="4640012" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="18"  placeholder="" name="17203" data-datatype="mobileNo" data-groupno="27" id="17203"  minlength="10" digits="true" maxlength="10" minlength="10"  />
<label class="error" for="17203"  style="display: none;"></label>
<input type="hidden" id="17203_txn" name="17203_txn" value=""/>
<input type="hidden" id="17203_val" name="17203_val" value=""/>
<input type="hidden" id="17203_consent" value=""/>
</div>
</div>
<div class="tdata">
<label class="lbl" for="17205"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x908;&#x92e;&#x947;&#x932; &#x2f; Email of Applicant
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="email" serviceId="4640012" resendOtpFlag="false" resendOtpCount="" resendOtpTime=""  verification-flag="false" value="" type="text" tabindex="19"  placeholder="" name="17205" data-datatype="email" data-groupno="26" id="17205"  minlength="6" email="true" maxlength="254" minlength="6"  />
<label class="error" for="17205"  style="display: none;"></label>
<input type="hidden" id="17205_txn" name="17205_txn" value=""/>
<input type="hidden" id="17205_val" name="17205_val" value=""/>
<input type="hidden" id="17205_consent" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:99%;font-family:Arial;font-size:14px; color:#000000">&#x92a;&#x924;&#x93e; &#x2f; Address &#x3a;-
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17158"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17158" name="17158"  tabindex="22" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="7"  required="true" >
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
<label class="error" for="17158" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17162"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17162" name="17162"  tabindex="23" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="8"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17162" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17159"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17159" name="17159"  tabindex="24" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="9"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17159" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17163"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17163" name="17163"  tabindex="25" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="10"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17163" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75265"
style="font-family:Arial;font-size:14px; color:#000000;width:99%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="75265_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="1" name="75265" id="75265_1"  required="true"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="75265_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="2" name="75265" id="75265_2"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="75265_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="3" name="75265" id="75265_3"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="75265_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="4" name="75265" id="75265_4"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="75265" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="56894"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="27" placeholder="" name="56894" data-type="text" data-groupno="51" id="56894"  minlength="1" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" required="true"  />																
<label class="error" for="56894" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="56895"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="56895" name="56895"  tabindex="28" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="52" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="56895" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75266"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75266" name="75266"  tabindex="30" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="80" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75266" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75267"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75267" name="75267"  tabindex="32" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="81" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75267" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75268"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75268" name="75268"  tabindex="34" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="82" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75268" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17160"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="36" placeholder="" name="17160" data-type="text" data-groupno="11" id="17160"   required="true"  />																
<label class="error" for="17160" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17164"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="37" placeholder="" name="17164" data-type="text" data-groupno="13" id="17164"   required="true"  />																
<label class="error" for="17164" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="65010"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="65010" name="65010"  tabindex="38" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="74"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="65010" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="90777"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="39" placeholder="" name="90777" data-type="text" data-groupno="95" id="90777"  minlength="0" maxlength="6" min="000000" max="999999" digits="true"  />																
<label class="error" for="90777" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17495"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92b;&#x94b;&#x91f;&#x94b; &#x2f; Photograph of Applicant
</label>
<div class="cont" style="margin-left:%;width:%;">
<input type="hidden" class="imageData" name="17495_image"  id="17495_image" value=""/>
<figure class="thumbnail" style='display:none'>
<a target="_blank" onClick="openLargeStringImage(17495)">
<img class="uploadImage" id="preview" name="preview" src="" attr-id="17495"></img>
</a>
</figure>
<label><a class="removeImage" id="17495_removeLink" style="display:none"><img src="resources/images/delete1.png" width="18" height="19" border="0" /></a></label>
</br> 
<input type="hidden" name="17495_removeFlag" id="17495_removeFlag" value="false"/>
<input type="hidden" name="imageHeight" id="imageHeight" value=""/>
<input type="hidden" name="imageWidth" id="imageWidth" value=""/>
<input type="hidden" name="minImageSize" id="minImageSize" value="20"/>
<input type="hidden" name="maxImageSize" id="maxImageSize" value="350"/>
<input type="hidden" name="17495_croph" id="17495_croph" value=""/>
<input type="hidden" name="17495_cropw" id="17495_cropw" value=""/>
<input type="hidden" name="17495_cropx" id="17495_cropx" value=""/>
<input type="hidden" name="17495_cropy" id="17495_cropy" value=""/>
<input type="file" class="image groupset1"   data-type="image" id="17495" name="17495" />
<image id="17495_openCamra" class="openCamera pointer groupset1"  src="resources/images/camera-icon.png"></image>
<label class="error" for="17495" style="display: none;"></label>							
</div>
</div>
<div class="tdata">
<label class="lbl" for="57339"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Aadhaar Number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-verificationType="2" data-type="AadhaarNumber" serviceId="4640012" verification-flag="true" value="" type="text" tabindex="41"  placeholder="" name="57339_txt" data-datatype="AadhaarNumber" data-groupno="61" id="57339_txt"  maxlength="16" verhoeff="16"  />
<input type="hidden" id="57339" name="57339" value=""/>
<label class="error" for="57339"  style="display: none;"></label>
<input type="hidden" id="57339_txn" name="57339_txn" value=""/>
<input type="hidden" id="57339_val" name="57339_val" value=""/>
<input type="hidden" id="57339_consent" value="Identification of Applicant by GAD, Govt. of Bihar'.
मैं यह स्पष्ट करता हूँ कि मुझे आधार आधारित प्रमाणीकरण प्रणाली के साथ स्वयं को प्रमाणित करने में कोई आपत्ति नहीं है और मैं अपना आधार नंबर प्रदान करने के लिए सहमत हूँ। मैं समझता हूँ कि आधार नंबर का उपयोग केवल नीचे उल्लिखित उद्देश्य के लिए किया जाएगा:
'सामान्य प्रशासन विभाग, बिहार सरकार द्वारा आवेदक की पहचान।'"/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="59987"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Aadhar Authentication
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="59987_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="42" value="1" name="59987" id="59987_1"   />&nbsp; Verified</label>
</div>
<div class="tdata">
<label class="lbl" for="59987_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="42" value="2" name="59987" id="59987_2"   />&nbsp; Not Verified</label>
</div>
<label class="error" for="59987" style="display: none;"></label>
</div>	
</div>
</div>
<input type="hidden" name="41291" value="" id="41291" data-name="Role Id"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="71338"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Application Status
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:90%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="71338_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="43" value="1" name="71338" id="71338_1"  required="true"   />&nbsp; Accept</label>
</div>
<div class="tdata">
<label class="lbl" for="71338_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="43" value="2" name="71338" id="71338_2"  required="true"   />&nbsp; Reject</label>
</div>
<label class="error" for="71338" style="display: none;"></label>
</div>	


</div>
</div>
<input type="hidden" name="57043" value="" id="57043" data-name="AnaxtureHide"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="72463"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Reason for Rejection
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="44" placeholder="" name="72463" data-type="text" data-groupno="76" id="72463"   />																
<label class="error" for="72463" style="display: none;"></label>
</div>
</div>
<input type="hidden" name="17516" value="" id="17516" data-name="आधार नंबर / Aadhaar Number"/>
<input type="hidden" name="90787" value="" id="90787" data-name="Tatkal SLA Date"/>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<label class="lbl" for="58921"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
Application Mode
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="58921_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="1" name="58921" id="58921_1"   />&nbsp; Online</label>
</div>
<div class="tdata">
<label class="lbl" for="58921_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="2" name="58921" id="58921_2"   />&nbsp; Offline</label>
</div>
<div class="tdata">
<label class="lbl" for="58921_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000000" >
<input type="radio" style="margin-right: 0;" tabindex="45" value="3" name="58921" id="58921_3"   />&nbsp; Kiosk</label>
</div>
<label class="error" for="58921" style="display: none;"></label>
</div>	
</div>
</div>
<input type="hidden" name="75269" value="" id="75269" data-name="Applicant_Name"/>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x905;&#x928;&#x94d;&#x92f; &#x2f; Others&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17207"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x947;&#x936;&#x93e; &#x2f; Profession
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17207" name="17207" class="searchDrop" tabindex="46" style="width:83%;" data-datatype="dropDown" data-groupno="30"  required="true"   >
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
<label class="error" style="display: none;" for="17207"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="56897"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x932;&#x94d;&#x932;&#x93f;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947;&#x902; &#x2f; Please specify
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="47" placeholder="" name="56897" data-type="text" data-groupno="53" id="56897"  maxlength="99"  required="true"  />																
<label class="error" for="56897" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17172"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x909;&#x926;&#x94d;&#x926;&#x947;&#x936;&#x94d;&#x92f; &#x2f; Purpose of Application
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="48" placeholder="" name="17172" data-type="text" data-groupno="21" id="17172"  minlength="0" maxlength="99"  />																
<label class="error" for="17172" style="display: none;"></label>
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17168"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x938;&#x947; &#x906;&#x92f; &#x2f; Income from Govt. Service
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="50" placeholder="" name="17168" data-type="text" data-groupno="16" id="17168"  minlength="1" maxlength="9" min="0" max="999999999" digits="true"  />																
<label class="error" for="17168" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="17171"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x915;&#x943;&#x937;&#x93f; &#x938;&#x947; &#x906;&#x92f; &#x2f; Income from Agriculture
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="51" placeholder="" name="17171" data-type="text" data-groupno="18" id="17171"  minlength="1" maxlength="9" min="0" max="999999999" digits="true"  />																
<label class="error" for="17171" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17169"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f;&#x93f;&#x915; &#x906;&#x92f; &#x2f; Income from Business
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="52" placeholder="" name="17169" data-type="text" data-groupno="17" id="17169"  minlength="1" maxlength="9" min="0" max="999999999" digits="true"  />																
<label class="error" for="17169" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="17170"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x94d;&#x92f; &#x938;&#x94d;&#x930;&#x94b;&#x924;&#x94b;&#x902; &#x938;&#x947; &#x906;&#x92f; &#x2f; Income from Other Sources
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="53" placeholder="" name="17170" data-type="text" data-groupno="19" id="17170"  minlength="1" maxlength="9" min="0" max="999999999" digits="true"  />																
<label class="error" for="17170" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17173"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x915;&#x941;&#x932; &#x906;&#x92f; &#x28;&#x935;&#x93e;&#x930;&#x94d;&#x937;&#x93f;&#x915;&#x29; &#x2f; Total income &#x28;Annual&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="54" placeholder="" name="17173" data-type="text" data-groupno="20" id="17173"  minlength="1" maxlength="10" min="0" max="9999999999" digits="true"  required="true"  />																
<label class="error" for="17173" style="display: none;"></label>


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
<label class="lbl" for="41282"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x909;&#x92a;&#x932;&#x92c;&#x94d;&#x927; &#x915;&#x930;&#x93e;&#x90f; &#x917;&#x90f; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;&#x94b;&#x902; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x2f; Enclosures attached along with Application Form &#x28;General&#x29;
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="41282_1" style="font-family:Arial;font-size:14px; color:#000000">										
<input type="checkbox"	tabindex="55" value="1" name="41282" id="41282_1"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-XVII &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<label class="error" for="41282_1" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41469"
style="font-family:Arial;font-size:14px; color:#000000;width:90%;">
&#x909;&#x92a;&#x932;&#x92c;&#x94d;&#x927; &#x915;&#x930;&#x93e;&#x90f; &#x917;&#x90f; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;&#x94b;&#x902; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x2f; Enclosures attached with Application Form &#x28;Tatkal&#x29;
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="41469_1" style="font-family:Arial;font-size:14px; color:#000000">										
<input type="checkbox"	tabindex="56" value="1" name="41469" id="41469_1"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-XVII &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41469_2" style="font-family:Arial;font-size:14px; color:#000000">										
<input type="checkbox"	tabindex="56" value="2" name="41469" id="41469_2"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x915;&#x29;&rsquo; &#x915;&#x947; &#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x947; &#x92a;&#x939;&#x91a;&#x93e;&#x928;-&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x938;&#x947; &#x915;&#x94b;&#x908; &#x90f;&#x915;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41469_3" style="font-family:Arial;font-size:14px; color:#000000">										
<input type="checkbox"	tabindex="56" value="3" name="41469" id="41469_3"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x916;&#x29;&rsquo; &#x915;&#x947; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x938;&#x947; &#x915;&#x94b;&#x908; &#x90f;&#x915;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="41469_4" style="font-family:Arial;font-size:14px; color:#000000">										
<input type="checkbox"	tabindex="56" value="4" name="41469" id="41469_4"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x915;&#x29;&rsquo; &#x92f;&#x93e; &#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x916;&#x29;&rsquo; &#x915;&#x947; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x928; &#x939;&#x94b;&#x928;&#x947; &#x92a;&#x930; &#x939;&#x932;&#x94d;&#x915;&#x93e; &#x915;&#x930;&#x94d;&#x92e;&#x91a;&#x93e;&#x930;&#x940; &#x2f; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x938;&#x947;&#x935;&#x915; &#x926;&#x94d;&#x935;&#x93e;&#x930;&#x93e; &#x935;&#x93f;&#x939;&#x93f;&#x924; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x928;&#x93f;&#x930;&#x94d;&#x917;&#x924; &#x91c;&#x93e;&#x901;&#x91a; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x935;&#x947;&#x926;&#x928;
</label>
</div>									
<label class="error" for="41469_4" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x92f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x938;&#x93e;&#x915;&#x94d;&#x937;&#x94d;&#x92f; &#x939;&#x947;&#x924;&#x941; &#x928;&#x93f;&#x92e;&#x94d;&#x928;&#x93e;&#x902;&#x915;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; &#x938;&#x92e;&#x941;&#x91a;&#x93f;&#x924; &#x92e;&#x928;&#x947; &#x91c;&#x93e;&#x92f;&#x947;&#x902;&#x917;&#x947;&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="94045"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x92f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x938;&#x93e;&#x915;&#x94d;&#x937;&#x94d;&#x92f; &#x939;&#x947;&#x924;&#x941; &#x906;&#x935;&#x947;&#x926;&#x915;&#x2f;&#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x947; &#x92e;&#x93e;&#x924;&#x93e;-&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93f;&#x92e;&#x94d;&#x928;&#x93e;&#x902;&#x915;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; &#x938;&#x92e;&#x941;&#x91a;&#x93f;&#x924; &#x92e;&#x93e;&#x928;&#x947; &#x91c;&#x93e;&#x92f;&#x947;&#x902;&#x917;&#x947;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="94045_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="57" value="1" name="94045" id="94045_1"    required="true"  />
&#x935;&#x947;&#x924;&#x928; &#x2f; &#x92a;&#x947;&#x902;&#x936;&#x928; &#x92a;&#x930;&#x94d;&#x91a;&#x940;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="94045_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="57" value="2" name="94045" id="94045_2"    required="true"  />
&#x906;&#x92f;&#x915;&#x930; &#x930;&#x93f;&#x91f;&#x930;&#x94d;&#x928;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="94045_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="57" value="3" name="94045" id="94045_3"    required="true"  />
&#x905;&#x928;&#x94d;&#x92f;&#x93e;&#x928;&#x94d;&#x92f; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916;
</label>
</div>									
<label class="error" for="94045_3" style="display: none;"></label>
<!-- </div> -->	
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
<label class="lbl" for="74860"
style="font-family:Arial;font-size:14px; color:#000000;width:99%;">
Self Declaration
</label>
<div class="cont" style="margin-left:%;width:99%;">
<textarea id="74860" name="74860" style="width:99%;" size="" tabindex="58" placeholder="" minlength="0" maxlength="5000"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="74860" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:100%;font-family:Arial;font-size:14px; color:#000000">
<p>.</p>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000000">
<input type="checkbox" value="Y" name="41398" id="41398" required="true" data-type="agreeText"/>
I Agree
<span class="mandatory">*</span>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91147"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
Submission SMS1
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="61" placeholder="" name="91147" data-type="text" data-groupno="99" id="91147"  minlength="0" maxlength="999"  />																
<label class="error" for="91147" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="91148"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
Submission SMS2
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="62" placeholder="" name="91148" data-type="text" data-groupno="100" id="91148"  minlength="0" maxlength="999"  />																
<label class="error" for="91148" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="94046"
style="font-family:Arial;font-size:14px; color:#000000;width:49%;">
Enclosers_List
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="63" placeholder="" name="94046" data-type="text" data-groupno="103" id="94046"  minlength="0" maxlength="99"  />																
<label class="error" for="94046" style="display: none;"></label>
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
<input type="hidden" name="derived_service_id" id="derived_service_id" value="4640012"/>
<input type="hidden" name="derivedFieldEditableFlag" id="derivedFieldEditableFlag" value="1"/>
<input type="hidden" name="derived_identifier_fieldSource" id="derived_identifier_fieldSource" value="A"/>	

 <input type="hidden" name="derived_identifier_attr_id" value="78171"/>
 <input type="hidden" name="derived_identifier_attr_inputtype" value="text"/>

 <input type="hidden" name="derived_identifier_attr_id" value="78253"/>
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
	
	
	
	
	
	<input type="hidden" id="serviceId" value="4640012">
	<input type="hidden" id="appliedServiceId" value="4640012">
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
var uidJson='[{"id":12,"versionNo":12,"serviceId":4640012,"uidAttrId":57339,"nameAttrId":17154,"attrType":0}]';
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
	   var combinedJson = '{"attribute":{"41395":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"17168":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17169":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17203":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"41433":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17163":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17164":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41398":{"exception":"","type":"agreeText","ekyc_attr":"null","values":{"value":""}},"41397":{"exception":"","type":"declareText","ekyc_attr":"null","values":{"value":""}},"17160":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17162":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"94046":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"94045":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"59448":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"56897":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"59447":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"56894":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"56895":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"57509":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17209":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"61163":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17205":{"exception":"","type":"email","ekyc_attr":"null","values":{"value":""}},"17207":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"71338":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"65010":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"90794":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"90795":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17495":{"exception":"","type":"image","ekyc_attr":"null","values":{"value":""}},"72463":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17170":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41469":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"17171":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17172":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17173":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"58921":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"64058":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"90787":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"64810":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"75269":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"75268":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"57043":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"75267":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"64811":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"75266":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"75265":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"59987":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90777":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41291":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"17157":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"17158":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17159":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17394":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17395":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17154":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"91147":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17155":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"91148":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"75279":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"74860":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"75277":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"78171":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"75276":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"75275":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"78173":{"exception":"","type":"button","ekyc_attr":"null","values":{"value":""}},"78253":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"57339":{"exception":"","type":"AadhaarNumber","ekyc_attr":"null","values":{"value":""}},"17516":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"41282":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}}}}' ;
	   var ekycJson = '' != null && '' != ''? $.parseJSON(''):'';
	   var jsonData ='' != null && '' != ''? $.parseJSON(''):'';
	   var applicationId='';
	   var autoFilledValJson ='' != null && '' != ''? $.parseJSON(''):'';
	   var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
	   var draftRefNo     = '';
	   var mappingFlag  	  = 'true';
       var stateId       	  = '10';
       var attrId			  = '17163';
       var statusApp          =  'S';
       var pageload=false;
       var userChoice		  = '';
       var listValue		  = '';
       var locationId 		  = '';
       var selectedDeptLevel  = '';
	   var selectedLeveStr    ='';
	   var selectedAttrId     = '';
	   var serviceId          =  $('#serviceId').val();// '4640012'; 
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
			 form.action = "applyPageForm.do";//?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&UUID=5937c809-5315-4f3c-82db-93e71ee088f1
			 form.submit();
			$('#SubmitButton').attr('disabled', 'disabled');
		}
		
		function FormReset(source){
			if(confirm('Are you sure you want to reset the form?')){
				if(source=="E"){
					//window.location="editApplicationForm.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&applicationRefNo=&UUID=5937c809-5315-4f3c-82db-93e71ee088f1&grievanceRefNo=";
					var url="editApplicationForm.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&applicationRefNo=&UUID=5937c809-5315-4f3c-82db-93e71ee088f1&grievanceRefNo=";
					formPost(url);
				}else{
					//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&serviceId=4640012&UUID=5937c809-5315-4f3c-82db-93e71ee088f1&grievanceRefNo=";
					var url="renderApplicationForm.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&serviceId=4640012&UUID=5937c809-5315-4f3c-82db-93e71ee088f1&grievanceRefNo=";
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
							window.location="appliedService.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
						}else if(source == "CTZN" || source=="CS"){ 
							var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";								
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
								formPost(url);
							}
						}else{
						
							var datachk='Y';
							if(datachk.trim()=="Y"){
								 window.history.back();
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
								formPost(url);
							}
						}		
							
					}
				 }
	  	}
		function FormClose(source){
			if(source=="new"){
				//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&serviceId=4640012&UUID=5937c809-5315-4f3c-82db-93e71ee088f1";
				var url="renderApplicationForm.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&serviceId=4640012&UUID=5937c809-5315-4f3c-82db-93e71ee088f1";
				formPost(url);
			}else{
				answer = confirm("Are you sure you want to close the form?");
				if (answer !="0"){
					if(source=="E"){
						window.location="appliedService.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
					}else if(source == "CTZN" || source=="CS"){ 
						var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
								formPost(url);
							}
					}else{
						
						var datachk='Y';
						if(datachk.trim()=="Y"){
							 window.history.back();
						}else{
							//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
							var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
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
					var url="viewLGDDepartment.do?spdiStateId="+spdiStateId+"&spdiAttributeId="+spdiAttributeId+"&OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
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
					Android.androidFucHelpDocApplForm("-_-4640012-_-747");
				} else {
					var url="viewHelpDoc.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&fileName=&serviceId=4640012&templId=747";
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
					 form.action = "saveApplDraft.do";//?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE&UUID=5937c809-5315-4f3c-82db-93e71ee088f1
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
							
<script type="text/javascript" src="resources/js/servicespecificjs/10/4640012_747.js"
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
	 window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=E54M-XRUE-LPCG-09IJ-VR6U-NG2G-4XUS-I1BE";
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