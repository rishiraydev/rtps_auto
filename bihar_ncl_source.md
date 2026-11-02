link- https://serviceonline.bihar.gov.in/renderApplicationForm.do?serviceId=6830012&UUID=76608e25-dc26-49be-a26a-670a779affb5&directService=true&tempId=2192&grievDefined=0&serviceLinkRequired=No&userLoggedIn=N&source=CTZN&OWASP_CSRFTOKEN=ZG8L-XL5D-LNXU-K9M8-8Z09-3UCU-0CY3-E7YS









<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
		
		 	<title>ServicePlus- Issuance of Non Creamy Layer Certificate (For the purpose of Govt. of Bihar) at RO level</title>
		
		
	
    
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<link rel="icon" href="view-resources/image/serviceplus-logo.png" type="image/x-icon" />
 <link rel="stylesheet" type="text/css" href="/view-resources/components/bootstrap-4.0.0/dist/css/bootstrap.min.css">
 <link rel="stylesheet" type="text/css" href="/view-resources/components/bootstrap/css/bootstrapValidator.min.css">
 <link rel="stylesheet" type="text/css" href="/view-resources/components/bootstrap/css/bootstrap-datetimepicker.min.css">
 <link rel="stylesheet" type="text/css" href="/view-resources/components/select2/select2.min.css">
 <link rel="stylesheet" type="text/css" href="/view-resources/components/datatables/dataTables.bootstrap.css">
 <link rel="stylesheet" type="text/css" href="/view-resources/components/font-awesome-4.7.0/css/font-awesome.min.css">

 
 <link rel="stylesheet" href="/view-resources/css/mainStyle.css">
 <link rel="stylesheet" href="/view-resources/css/iconStyle.css">
 
 
 
 
  <!-- Themes  -->

 <link rel="stylesheet" href="view-resources/themes/skins/skin-blue.min.css" type="text/css"/>


 
 <!-- Include js lib files -->
<script  type="text/javascript" src="/view-resources/components/jQuery/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="/view-resources/components/jQuery/jquery.validate.min.js"></script>
<script type="text/javascript" src="/view-resources/components/jQueryUI/jquery.blockUI.js"></script>
<script type="text/javascript" src="/view-resources/js/md5.js"></script>

<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script  type="text/javascript" src="/view-resources/components/jQueryUI/jquery-ui.min.js"></script>
<script  type="text/javascript" src="/view-resources/components/bootstrap-4.0.0/assets/js/vendor/popper.min.js"></script>
<script type="text/javascript" src="/view-resources/components/bootstrap-4.0.0/dist/js/bootstrap.min.js"></script>
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
					if(params[i].indexOf("OWASP_CSRFTOKEN")==-1) {
						var paramSplit = params[i].split("=");
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						input.setAttribute("name", paramSplit[0].trim());
						input.setAttribute("value", paramSplit[1].trim());
						formTag.appendChild(input);
					}
				}
			}
			
		    var input = document.createElement("input");
		    input.setAttribute("type", "hidden");
		    input.setAttribute("name", "OWASP_CSRFTOKEN");
		    input.setAttribute("value", "6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J");
		    formTag.appendChild(input);
		    
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
 

 <style>
.serviceplusoffline .topheader, .serviceplusoffline .main-header, .serviceplusoffline .main-sidebar, .serviceplusoffline footer {
display:none;
}
.serviceplusoffline .content-wrapper, .serviceplusoffline .right-side, .serviceplusoffline .main-footer {
margin-left:0px;
}
/* .footer-content-wrapper{background-color: #036ca5;} */
/* to showcase .ui-dialog boxes above .header-content-wrapper  - priyanka - 14082018*/
.ui-dialog{
  	z-index:9999 !important;
}
</style>
<script type="text/javascript" src="/view-resources/themes/js/themeswitcher.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	checkCookie();
});
 
 function checkCookie() {
	    var user=getCookie("mysheet");
	    if (user != "") {
	        chooseStyle(user, 60);
	    } 
	    else
	    	{	
	    	chooseStyle('default-theme', 60);
	    	}
	}
	
function chooseStyle(styletitle, days){ //Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
	
	if (document.getElementById){
	setStylesheet(styletitle);
	setCookie("mysheet", styletitle, days);
	}
}
</script>
<style type="text/css" media="print" >
   	.topheader{display:none;}
</style>
<style type="text/css" media="print" >
   	/* .footer-content-wrapper{display:none;
   	background-color: #036ca5 !important;} */
</style>
 </head>
 <!-- view body -->
 <body class="hold-transition skin-blue sidebar-mini">
  <!-- TO TOP  -->
    <div class="container-fluid topheader">
       <div class="row">
            <div class="col-10 col-lg-11">
            <a class="navbar-brand pull-left fontnirvana"  href="javascript:void(0)" onClick="formPost('home.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" >
                <img src="resources/images/PNG/sp-logo.png" alt="ServicePlus" class="img-responsive">
							<!-- <img src="view-resources/image/emblem.png" alt="Logo" class="img-responsive"> --></a>
            </div>
            
            <div class="col-2 col-lg-1">
             <a href="javascript:void(0)" onClick="formPost('home.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" ><img src="view-resources/image/emblem.png" alt="Logo" class="img-responsive"></a>
              
            </div>
        </div>
    
        
    </div>
    <div class="wrapper">
    	<div class="header-content-wrapper">
 			






<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->



<title>ServicePlus metadata based service delivery framework - Goverment of India</title>
<style>
.languageDropdown .slimScrollDiv {
	height:auto !important;
}
.languageDropdown li , .theme-menu li{
	width:100%;
	border-bottom:solid 1px #c0e4f3;
}
.languageDropdown li:last-child , .theme-menu li:last-child{
	border-bottom:none;
}
</style>
 
<header class="main-header">
	<!-- Logo -->
	<a href="javascript:void(0)" onClick="formPost('home.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" class="logo"> <span class="logo-mini"><b>Menu</b></span>
		<span class="logo-lg"><b>Menu</b></span>
	</a>
	<!-- Header Navbar: style can be found in header.less -->
	<nav class="navbar navbar-static-top" role="navigation">
		<!-- Sidebar toggle button-->
		<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"> <span class="sr-only">Toggle navigation</span>
		</a>
		<div class="navbar-custom-menu">
			<ul class="nav navbar-nav">
			
			

 <li class="nav-item dropdown tasks-menu">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
              <i class="fa fa-flag-o"></i>&nbsp;Themes
            </a>
            <ul class="dropdown-menu theme-menu" style="height:auto;">
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                 <li><!-- Task item -->
                 <a href="javascript:void(0)" onClick="formPost('home.do?theme=blue&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" > 
                      
                      <h3>
                     <i class="fa fa-circle" style="color:#3c8dbc;"></i>&nbsp;Blue (Default)
                      </h3>
                    </a>
                  </li>
                <li><!-- Task item -->
                   <a href="javascript:void(0)" onClick="formPost('home.do?theme=grey&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" > 
                
                      <h3>
                      <i class="fa fa-circle" style="color:#455D7A;"></i>&nbsp;Grey
                        
                      </h3>
                    </a>
                  </li>
                  <li><!-- Task item -->
                  <a href="javascript:void(0)" onClick="formPost('home.do?theme=red&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" > 
                  
                      <h3>
                        <i class="fa fa-circle" style="color:#f95959;"></i>&nbsp;Red
                      </h3>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                  <a href="javascript:void(0)" onClick="formPost('home.do?theme=green&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" > 
                  
                      <h3>
                      <i class="fa fa-circle" style="color:#00a65a;"></i>&nbsp;Green
                      </h3>
                    </a>
                  </li>
                 
                   <li><!-- Task item -->
                  <a href="javascript:void(0)" onClick="formPost('home.do?theme=yellow&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" > 

                      <h3>
                      <i class="fa fa-circle" style="color:#f39c12;"></i>&nbsp;Yellow
                      </h3>
                    </a>
                  </li>
                   <li><!-- Task item -->
                    <a href="javascript:void(0)" onClick="formPost('home.do?theme=purple&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J');" > 

                      <h3>
                      <i class="fa fa-circle" style="color:#605ca8;"></i>&nbsp;Violet
                      </h3>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
            </ul>
          </li>
					
					
					          
          <!-- by STV -->
           <li class="nav-item dropdown tasks-menu">
           <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
              <i ></i>&nbsp;Language
            </a>
              <ul class="dropdown-menu languageDropdown">
                          
                
                             
              
               
                  
                    
                     <li>
                         <a href="#" onClick="getDataForPropertiesFileOnProd();formPost('home.do?language=en')">
                         &nbsp;✅ English
                         </a>
                    </li>
                    
                    
                    
                     
               
               
                  
                    
                    
                    <li>
                     <a href="#" onClick="formPost('home.do?language=kn')">
                         &nbsp;Kannada
                     </a>
                   </li>
                   
                    
                    
                     
               
               
                  
                    
                    
                    <li>
                     <a href="#" onClick="formPost('home.do?language=hi')">
                         &nbsp;Hindi
                     </a>
                   </li>
                   
                    
                    
                     
                                            
              </ul>
              </li>
        
          
           <!--  </li>  -->
					
				<!-- User Account: style can be found in dropdown.less -->
				<li class="nav-item dropdown user user-menu"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"> <img
						src="view-resources/image/User_160x160.png" class="user-image" alt="User Image"> <span >null</span>
				</a>
					<ul class="dropdown-menu">
						<!-- User image -->
						<li class="user-header w-100"><img src="view-resources/image/User_160x160.png" class="img-circle" alt="User Image">
							<p>
								
									<span><b> State:&nbsp; null</b>
									</span>
								
								<small> Location:&nbsp;  
										null&nbsp;&nbsp; 
				  							
								</small>
							</p></li>
						<!-- Menu Footer-->
						<li class="user-footer w-100">
							<div class="float-left">
								<a href="#" class="btn btn-danger btn-flat" onclick="roles();"> <i
									class="fa fa-user-circle-o" aria-hidden="true"></i> Role
								</a>
							</div>
							<div class="float-right">
								
							
								
							</div>
						</li>
					</ul></li>

			</ul>
		</div>
	</nav>
</header>

<div id="roleModal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header header-border'">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Assigned Role to the user-</h4>
			</div>
			<div class="modal-body">
				<iframe id="roleFrame" width="100%" height="100%" overflow="yes"></iframe>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-dismiss="modal">
					<i class="fa fa-times-circle"></i>&nbsp;Close
				</button>
			</div>
		</div>

	</div>
</div>
<script>
function deletecookie() {
	  document.cookie = '__csc_connect__inf0_'+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function roles(){
	var url = "viewUserRoles.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
	$("#roleFrame").attr('src', url);
	$("#roleModal").modal();
}

/* function getDataForPropertiesFileOnProd(){
	languagePackService.getDataForPropertiesFileOnProd();
} */
function getDataForPropertiesFileOnProd() {
    $.ajax({
        url : 'viewFileInLangpack.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J',
        success : function(data) {
        }
    });
}
</script>

 		</div>
 			






<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->

<title>ServicePlus metadata based service delivery framework - Goverment of India</title>
<!-- ---    DWR   CODE start -->

<!-- ---    DWR   CODE end   -->
<link rel="stylesheet" href="resources/Menu/common/css/dashboard.min.css"></link>
<script>
var index1="";
var index2="";
  var user="";
$(document).ready(function(){

	$( ".sidebar-menu .treeview .treeview-menu li" ).click(function() {
		index2 = $( ".sidebar-menu .treeview .treeview-menu li" ).index( this );
	    	 var cookieeuse= index1+"~"+index2;
	    setCookiesidemenu("side-menu-selected", cookieeuse, 1);
	});
 $( ".sidebar-menu .treeview #treeviewtitle" ).click(function() {
 	index1 = $( ".sidebar-menu .treeview #treeviewtitle" ).index( this );
 var text3= $(".sidebar-menu .treeview #treeviewtitle").eq(index1).text();
 text3=$.trim(text3);
});
 checkCookiesidemenu();
});
function setCookiesidemenu(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookiesidemenu(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function callAnnotation(annotation, id){
	var callAnnotationForm=document.createElement("form");
	callAnnotationForm.method="POST";
	callAnnotationForm.action=annotation;
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "OWASP_CSRFTOKEN");
    input.setAttribute("value", "6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J");
    callAnnotationForm.appendChild(input);
    if(id!=0){
	    var inputId = document.createElement("input");
	    inputId.setAttribute("type", "hidden");
	    inputId.setAttribute("name", "id");
	    inputId.setAttribute("value", id);
	    callAnnotationForm.appendChild(inputId);
    }
 	document.body.appendChild(callAnnotationForm);
	callAnnotationForm.submit();
}

function checkCookiesidemenu() {
    user=getCookiesidemenu("side-menu-selected");
    if (user != "") {
        var user1=user.split('~'); 
        index1=user1[0];
        $(".sidebar-menu .treeview").eq(user1[0]).addClass( "active" );
        $(".sidebar-menu .treeview ul").eq(user1[1]).addClass( "menu-open" );
        $(".sidebar-menu .treeview .treeview-menu > li").eq(user1[1]).find("a:first").css("color","#dd4b39");
    var   text1= $(".sidebar-menu .treeview #treeviewtitle").eq(user1[0]).text();
     var  text2=  $(".sidebar-menu .treeview .treeview-menu li").eq(user1[1]).text();
     
     var text3="<ol class='breadcrumb'><li class='breadcrumb-item'>"+text1+"</li><li class='breadcrumb-item active'>"+text2+"</li></ol>";
     
     
     /* $( "#headtitle" ).html( '<strong>'+text1+'</strong>');
     $( "#subheadtitle" ).html('<strong>'+text2+'</strong>'); */
     $( "#headtitle" ).html( text3);
     //$("#headtitle").css("color","#808080");
    // $("#headtitle").parent().css("background-color","lightgrey");
     setCookiesidemenu("side-menu-selected", user, 1);
    } 
}
 function viewRasFeedback() {
	var url = 'https://stage.ras.gov.in/reports/reportListServicePlus?key=4e71055602e5220ef6dc8385d53aacfd4eb9983a'
	var width = 800;
	var height = 400;
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	 
	var data = '';
	var jsn = JSON.parse(data);
	if(isEmpty(jsn)) {
		alert('data not found!');
	} else {
		var stId = jsn.rasStateId;
		var depId = jsn.rasDepartmentId;
		if(stId=='0') {
				alert('data not found!');
		} else {
			url = url + "&st_id="+stId+"&dept_id=";
			if(depId=='0') {
				url = url + "null";
			} else {
				url = url + depId;
			}
			window.open(url, "_blank", 'width='+width+',height='+height+', top='+top+', left='+left+',scrollbars=yes');
		}
	}
 }
 
function isEmpty(obj) {
	for ( var key in obj) {
		if (obj.hasOwnProperty(key))
			return false;
	}
	return true;
}
</script>

<aside class="main-sidebar">
 <section class="sidebar">
 <ul class="sidebar-menu">



	 
	 	
	
    
	
	
	
	        

	



 

</ul>
</section>
</aside>

 		<div class="content-wrapper">
			






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
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=6830012&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
 var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=6830012&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
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
<input type="hidden" id="csrfTokeID" name="OWASP_CSRFTOKEN" value="6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J"/>
<input type="hidden" id="currentDateID" name="currentDate" value="02/11/2026"/>
<input type="hidden" name ="UUID" value="3c1c41b5-026a-4c6a-963f-835b2b45dcfc"/>
<input type="hidden" name ="applStatus" id="applStatus" value="S"/>
<input type="hidden" name ="grievanceRefNo" id="grievanceRefNo" value=""/>
<input type="hidden" name="seq_no"  value="pdgnk"/>
<input type="hidden" name="applyId"  value=""/>
<input type="hidden" name ="serviceId" id="serviceId" value="6830012"/>
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
form.action = "applyPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=6830012&UUID="+uuid ;
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
<div><span style="font-size:20px"><strong>फॉर्म &ndash; IX : पिछड़ा वर्ग / अत्यंत पिछड़ा वर्ग (क्रीमीलेयर रहित) प्रमाण-पत्र हेतु आवेदन-पत्र</strong></span></div>
<div><span style="font-size:18px"><strong>(बिहार सरकार के प्रयोजनार्थ)</strong></span></div>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p></div>
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x2f; Applicant&#x27;s Detail&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="61752"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x915;&#x94d;&#x92f;&#x93e; &#x906;&#x92a;&#x915;&#x947; &#x92a;&#x93e;&#x938; &#x92a;&#x939;&#x932;&#x947; &#x938;&#x947; &#x928;&#x93f;&#x930;&#x94d;&#x917;&#x924; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;-&#x92a;&#x924;&#x94d;&#x930; &#x939;&#x948; &#x2f; Do you have old Issued Certificate
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="61752" name="61752" class="searchDrop" tabindex="1" style="width:83%;" data-datatype="dropDown" data-groupno="338"   >
<option value="">
Please Select</option>
<option value="1" >&#x928;&#x939;&#x940;&#x902; &#x2f; No</option>
<option value="2" >&#x939;&#x93e;&#x901; &#x2f; Yes</option>
</select>
<label class="error" style="display: none;" for="61752"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41855"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x932;&#x93f;&#x902;&#x917; &#x2f; Gender
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="41855_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="1" name="41855" id="41855_1"  required="true"   />&nbsp; &#x92a;&#x941;&#x930;&#x941;&#x937; &#x2f; Male</label>
</div>
<div class="tdata">
<label class="lbl" for="41855_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="2" name="41855" id="41855_2"  required="true"   />&nbsp; &#x938;&#x94d;&#x924;&#x94d;&#x930;&#x940; &#x2f; Female</label>
</div>
<div class="tdata">
<label class="lbl" for="41855_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="3" value="3" name="41855" id="41855_3"  required="true"   />&nbsp; &#x924;&#x943;&#x924;&#x940;&#x92f; &#x932;&#x93f;&#x902;&#x917; &#x2f; Third Gender</label>
</div>
<label class="error" for="41855" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="63931"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x2f; Salutation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="63931" name="63931" class="searchDrop" tabindex="4" style="width:83%;" data-datatype="dropDown" data-groupno="341"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x936;&#x94d;&#x930;&#x940; &#x2f; Mr.</option>
<option value="2" >&#x936;&#x94d;&#x930;&#x940;&#x92e;&#x924;&#x940; &#x2f; Mrs.</option>
<option value="3" >&#x938;&#x941;&#x936;&#x94d;&#x930;&#x940; &#x2f; Miss</option>
<option value="4" >&#x915;&#x94b;&#x908; &#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x928;&#x939;&#x940;&#x902; &#x2f; No Salutation</option>
</select>
<label class="error" style="display: none;" for="63931"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="54228"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
1. Applicant&#x27;s Name
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="5" placeholder="" name="54228" data-type="fullName" data-groupno="152" id="54228"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="54228" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41813"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x2f; &#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="6" placeholder="" name="41813" data-type="text" data-groupno="2" id="41813"   required="true"  />																
<label class="error" for="41813" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41857"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
2. &#x91c;&#x928;&#x94d;&#x92e; &#x924;&#x93f;&#x925;&#x93f; &#x2f; Date of Birth
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="calendar_opt" style="width:70%;">
<input type="text" name="41857" value="" tabindex="7" id="41857"    required="true" class='datepicker' checkDate='checkDate'  required="true">
</div>
<label class="error" for="41857" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="56117"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Aadhaar No. &#x28;&#x906;&#x927;&#x93e;&#x930; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x940;&#x915;&#x930;&#x923; &#x905;&#x928;&#x93f;&#x935;&#x93e;&#x930;&#x94d;&#x92f; &#x928;&#x939;&#x940;&#x902; &#x939;&#x948;, &#x92f;&#x926;&#x93f; &#x906;&#x92a; &#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x92d;&#x930;&#x947;&#x902;&#x917;&#x947; &#x924;&#x94b; &#x907;&#x938;&#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x940;&#x915;&#x930;&#x923; &#x915;&#x930;&#x928;&#x93e; &#x939;&#x94b;&#x917;&#x93e;&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-verificationType="2" data-type="AadhaarNumber" serviceId="6830012" verification-flag="true" value="" type="text" tabindex="8"  placeholder="" name="56117_txt" data-datatype="AadhaarNumber" data-groupno="156" id="56117_txt"  maxlength="16" verhoeff="16"  />
<input type="hidden" id="56117" name="56117" value=""/>
<label class="error" for="56117"  style="display: none;"></label>
<input type="hidden" id="56117_txn" name="56117_txn" value=""/>
<input type="hidden" id="56117_val" name="56117_val" value=""/>
<input type="hidden" id="56117_consent" value="Identification of Applicant by GAD, Govt. of Bihar."/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:70%;font-family:Arial;font-size:14px; color:#000">3. &#x906;&#x935;&#x93e;&#x938;&#x940;&#x92f; &#x92a;&#x924;&#x93e; &#x2f; Residential Address
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
<label class="lbl" for="41827"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41827" name="41827"  tabindex="13" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="10"  required="true" >
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
<label class="error" for="41827" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="41828"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41828" name="41828"  tabindex="14" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="11"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="41828" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41829"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41829" name="41829"  tabindex="15" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="12"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="41829" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="41831"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x938;&#x939; &#x905;&#x902;&#x91a;&#x932; &#x2f; Block cum Circle
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41831" name="41831"  tabindex="16" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="13"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="41831" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41830"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="17" placeholder="" name="41830" data-type="text" data-groupno="14" id="41830"  maxlength="99"  required="true"  />																
<label class="error" for="41830" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="56372"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="18" placeholder="" name="56372" data-type="text" data-groupno="157" id="56372"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="56372" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="64990"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="64990" name="64990"  tabindex="19" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="344"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="64990" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="41853"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post Office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="20" placeholder="" name="41853" data-type="text" data-groupno="16" id="41853"  maxlength="99"  required="true"  />																
<label class="error" for="41853" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41948"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x939;&#x94b;&#x932;&#x94d;&#x921;&#x93f;&#x902;&#x917; &#x928;. &#x2f; Holding No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="21" placeholder="" name="41948" data-type="text" data-groupno="121" id="41948"  minlength="1" maxlength="3" min="-9" max="999" digits="true"  />																
<label class="error" for="41948" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="41947"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x94d;&#x915;&#x93f;&#x932; &#x928;. &#x2f; Circle No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="22" placeholder="" name="41947" data-type="text" data-groupno="120" id="41947"  minlength="1" maxlength="3" min="-9" max="999" digits="true"  />																
<label class="error" for="41947" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="85734"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="85734_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="1" name="85734" id="85734_1"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="85734_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="2" name="85734" id="85734_2"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="85734_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="3" name="85734" id="85734_3"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="85734_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="23" value="4" name="85734" id="85734_4"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="85734" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="90781"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="24" placeholder="" name="90781" data-type="text" data-groupno="376" id="90781"  minlength="0" maxlength="6" min="000000" max="999999" digits="true"  />																
<label class="error" for="90781" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="85744"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="85744" name="85744"  tabindex="25" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="367" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="85744" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="85745"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="85745" name="85745"  tabindex="27" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="368" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="85745" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="85746"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="85746" name="85746"  tabindex="29" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="369" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="85746" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="85747"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="85747" name="85747"  tabindex="31" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="370" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="85747" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41873"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x28;&#x916;&#x29; &#x905;&#x938;&#x94d;&#x925;&#x93e;&#x908; &#x92a;&#x924;&#x93e; &#x2f; Temporary Address&#x3a; -
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="41873_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="33" value="1" name="41873" id="41873_1"    />
&#x90a;&#x92a;&#x930; &#x91c;&#x948;&#x938;&#x93e; &#x2f; Same as Above
</label>
</div>									
<label class="error" for="41873_1" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41876"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41876" name="41876"  tabindex="35" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="46"  required="true" >
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
<label class="error" for="41876" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="41879"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="41879" name="41879"  tabindex="36" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="47"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="41879" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41877"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="41877" name="41877"  tabindex="37" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="48" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="41877" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="41880"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x938;&#x939; &#x905;&#x902;&#x91a;&#x932; &#x2f; Block cum Circle
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="41880" name="41880"  tabindex="38" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="49" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="41880" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41881"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="39" placeholder="" name="41881" data-type="text" data-groupno="50" id="41881"  maxlength="99"  required="true"  />																
<label class="error" for="41881" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="56373"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="40" placeholder="" name="56373" data-type="text" data-groupno="158" id="56373"  minlength="0" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" />																
<label class="error" for="56373" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="64988"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="64988" name="64988"  tabindex="41" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="343" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="64988" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="41882"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="42" placeholder="" name="41882" data-type="text" data-groupno="52" id="41882"  maxlength="99"  required="true"  />																
<label class="error" for="41882" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41950"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x939;&#x94b;&#x932;&#x94d;&#x921;&#x93f;&#x902;&#x917; &#x928;. &#x2f; Holding No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="43" placeholder="" name="41950" data-type="text" data-groupno="123" id="41950"  minlength="1" maxlength="3" min="-9" max="999" digits="true"  />																
<label class="error" for="41950" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="41949"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x938;&#x930;&#x94d;&#x915;&#x93f;&#x932; &#x928;. &#x2f; Circle No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="44" placeholder="" name="41949" data-type="text" data-groupno="122" id="41949"  minlength="1" maxlength="3" min="-9" max="999" digits="true"  />																
<label class="error" for="41949" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41958"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
4. &#x927;&#x930;&#x94d;&#x92e; &#x2f; Religion
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="45" placeholder="" name="41958" data-type="text" data-groupno="129" id="41958"   required="true"  />																
<label class="error" for="41958" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="90782"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="46" placeholder="" name="90782" data-type="text" data-groupno="377" id="90782"  minlength="0" maxlength="6" min="000000" max="999999" digits="true"  />																
<label class="error" for="90782" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="42079"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x930;&#x94d;&#x917; &#x2f; Category
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="42079" name="42079" class="searchDrop" tabindex="47" style="width:83%;" data-datatype="dropDown" data-groupno="139"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x905;&#x924;&#x94d;&#x92f;&#x902;&#x924; &#x92a;&#x93f;&#x91b;&#x921;&#x93c;&#x93e; &#x935;&#x930;&#x94d;&#x917; &#x28;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x940;-1&#x29;</option>
<option value="2" >&#x92a;&#x93f;&#x91b;&#x921;&#x93c;&#x93e; &#x935;&#x930;&#x94d;&#x917; &#x28;&#x905;&#x928;&#x941;&#x938;&#x942;&#x91a;&#x940;-2&#x29;</option>
</select>
<label class="error" style="display: none;" for="42079"></label>	


</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="42078"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
5. &#x91c;&#x93e;&#x924;&#x93f; &#x2f; Caste
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="42078" name="42078" class="searchDrop" tabindex="49" style="width:83%;" data-datatype="dropDown" data-groupno="140"  required="true"   >
<option value="">
Please Select</option>
</select>
<label class="error" style="display: none;" for="42078"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="42081"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
6. &#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x92e;&#x947;&#x902; &#x91c;&#x93e;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Serial No. of Caste in Bihar Govt. List.
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="50" placeholder="" name="42081" data-type="text" data-groupno="142" id="42081"  maxlength="99"  required="true"  />																
<label class="error" for="42081" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="42080"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
7. &#x909;&#x92a;&#x91c;&#x93e;&#x924;&#x93f; &#x2f; Sub-Caste
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="42080" name="42080" class="searchDrop" tabindex="51" style="width:83%;" data-datatype="dropDown" data-groupno="141"   >
<option value="">
Please Select</option>
</select>
<label class="error" style="display: none;" for="42080"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="41865"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x91c;&#x93e;&#x924;&#x93f; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x2f; Sub-Caste Serial No.
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="52" placeholder="" name="41865" data-type="text" data-groupno="27" id="41865"  minlength="1" maxlength="3" min="0" max="999" digits="true"  />																
<label class="error" for="41865" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="42349"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
8. &#x92a;&#x947;&#x936;&#x93e; &#x2f; Occupation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="42349" name="42349" class="searchDrop" tabindex="53" style="width:83%;" data-datatype="dropDown" data-groupno="149"  required="true"   >
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
<label class="error" style="display: none;" for="42349"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="54328"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x932;&#x94d;&#x932;&#x947;&#x916;&#x93f;&#x924; &#x915;&#x930;&#x947; &#x2f; Please Specify
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="54" placeholder="" name="54328" data-type="text" data-groupno="153" id="54328"  maxlength="99"  required="true"  />																
<label class="error" for="54328" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41821"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
9. Father&#x27;s Name
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="55" placeholder="" name="41821" data-type="fullName" data-groupno="3" id="41821"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="41821" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41823"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="56" placeholder="" name="41823" data-type="text" data-groupno="4" id="41823"  maxlength="99"  required="true"  />																
<label class="error" for="41823" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41951"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
10. Husband&#x27;s Name
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="57" placeholder="" name="41951" data-type="fullName" data-groupno="124" id="41951"  applicantname="true" maxlength="99"  />																
<label class="error" for="41951" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="41952"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="58" placeholder="" name="41952" data-type="text" data-groupno="125" id="41952"  maxlength="99"  />																
<label class="error" for="41952" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41822"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
11. Mother&rsquo;s Name
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="59" placeholder="" name="41822" data-type="fullName" data-groupno="5" id="41822"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="41822" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41824"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="60" placeholder="" name="41824" data-type="text" data-groupno="6" id="41824"   required="true"  />																
<label class="error" for="41824" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41825"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant &#x28;Required for delivery of Certificate through Download Link in SMS&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="6830012" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="61"  placeholder="" name="41825" data-datatype="mobileNo" data-groupno="8" id="41825"  minlength="10" digits="true" maxlength="10" minlength="10"  required="true"  />
<label class="error" for="41825"  style="display: none;"></label>
<input type="hidden" id="41825_txn" name="41825_txn" value=""/>
<input type="hidden" id="41825_val" name="41825_val" value=""/>
<input type="hidden" id="41825_consent" value=""/>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41826"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x908;&#x92e;&#x947;&#x932; &#x2f; Email of Applicant &#x28;Required for delivery of Certificate as attachment in Email&#x29;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="email" serviceId="6830012" resendOtpFlag="false" resendOtpCount="" resendOtpTime=""  verification-flag="false" value="" type="text" tabindex="62"  placeholder="" name="41826" data-datatype="email" data-groupno="9" id="41826"  minlength="6" email="true" maxlength="254" minlength="6"  />
<label class="error" for="41826"  style="display: none;"></label>
<input type="hidden" id="41826_txn" name="41826_txn" value=""/>
<input type="hidden" id="41826_val" name="41826_val" value=""/>
<input type="hidden" id="41826_consent" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60921"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Aadhaar Authentication
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_0 noborder">
<div class="tdata">
<label class="lbl" for="60921_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="63" value="1" name="60921" id="60921_1"   />&nbsp; Verified</label>
</div>
<div class="tdata">
<label class="lbl" for="60921_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="63" value="2" name="60921" id="60921_2"   />&nbsp; Not Verified</label>
</div>
<label class="error" for="60921" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60784"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Mode
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_0 noborder">
<div class="tdata">
<label class="lbl" for="60784_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="64" value="1" name="60784" id="60784_1"   />&nbsp; Online</label>
</div>
<div class="tdata">
<label class="lbl" for="60784_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="64" value="2" name="60784" id="60784_2"   />&nbsp; Offline</label>
</div>
<div class="tdata">
<label class="lbl" for="60784_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="64" value="3" name="60784" id="60784_3"   />&nbsp; kiosk</label>
</div>
<label class="error" for="60784" style="display: none;"></label>
</div>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="85712"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Status
</label>
<div class="cont" style="margin-left:%;width:70%;">
<div class="optiongroup column_0 noborder">
<div class="tdata">
<label class="lbl" for="85712_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="65" value="1" name="85712" id="85712_1"   />&nbsp; Accept</label>
</div>
<div class="tdata">
<label class="lbl" for="85712_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="65" value="2" name="85712" id="85712_2"   />&nbsp; Reject</label>
</div>
<label class="error" for="85712" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="85713"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Reason of Rejection
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="66" placeholder="" name="85713" data-type="text" data-groupno="348" id="85713"  minlength="0" maxlength="99"  />																
<label class="error" for="85713" style="display: none;"></label>
</div>
</div>
<input type="hidden" name="65196" value="" id="65196" data-name="Cast Name in English"/>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_4 label_left  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
12.  &#x905;&#x92d;&#x93f;&#x92d;&#x93e;&#x935;&#x915; &#x2f; &#x92a;&#x93f;&#x924;&#x93e; &#x2f; &#x92a;&#x924;&#x93f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f;&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x905;&#x935;&#x93f;&#x92d;&#x93e;&#x935;&#x915; &#x2f; &#x92a;&#x93f;&#x924;&#x93e; &#x2f; &#x92a;&#x924;&#x93f; &#x915;&#x940; &#x938;&#x94d;&#x925;&#x93f;&#x924;&#x93f;
</label>				
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x93f;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x92e;&#x93e;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x924;&#x93f;
</label>				
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x915;&#x29; &#x28;1&#x29; &#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60522"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="72" placeholder="" name="60522" data-type="text" data-groupno="173" id="60522"   />																
<label class="error" for="60522" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60524"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="73" placeholder="" name="60524" data-type="text" data-groupno="174" id="60524"   />																
<label class="error" for="60524" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60526"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x902;&#x935;&#x948;&#x927;&#x93e;&#x928;&#x93f;&#x915; &#x92a;&#x926;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="74" placeholder="" name="60526" data-type="text" data-groupno="175" id="60526"   />																
<label class="error" for="60526" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60534"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="76" placeholder="" name="60534" data-type="text" data-groupno="177" id="60534"   />																
<label class="error" for="60534" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60537"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="77" placeholder="" name="60537" data-type="text" data-groupno="178" id="60537"   />																
<label class="error" for="60537" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60540"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="78" placeholder="" name="60540" data-type="text" data-groupno="179" id="60540"   />																
<label class="error" for="60540" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;i&#x29; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60535"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="80" placeholder="" name="60535" data-type="text" data-groupno="181" id="60535"   />																
<label class="error" for="60535" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60538"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="81" placeholder="" name="60538" data-type="text" data-groupno="182" id="60538"   />																
<label class="error" for="60538" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60541"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947;&#x935;&#x93e; &#x28;&#x915;&#x947;&#x928;&#x94d;&#x926;&#x94d;&#x930; &#x2f; &#x930;&#x93e;&#x91c;&#x94d;&#x92f;&#x29;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="82" placeholder="" name="60541" data-type="text" data-groupno="183" id="60541"   />																
<label class="error" for="60541" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;ii&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60536"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="84" placeholder="" name="60536" data-type="text" data-groupno="185" id="60536"   />																
<label class="error" for="60536" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60539"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="85" placeholder="" name="60539" data-type="text" data-groupno="186" id="60539"   />																
<label class="error" for="60539" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60542"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="86" placeholder="" name="60542" data-type="text" data-groupno="187" id="60542"   />																
<label class="error" for="60542" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;iii&#x29; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60548"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="88" placeholder="" name="60548" data-type="text" data-groupno="189" id="60548"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60548" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60553"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="89" placeholder="" name="60553" data-type="text" data-groupno="190" id="60553"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60553" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60558"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="90" placeholder="" name="60558" data-type="text" data-groupno="191" id="60558"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60558" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;iv&#x29; &#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60917"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60917" value="" tabindex="92" id="60917"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60917" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60919"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60919" value="" tabindex="93" id="60919"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60919" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60918"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60918" value="" tabindex="94" id="60918"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60918" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;v&#x29; &#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f; &#x28;&#x905;&#x917;&#x930; &#x932;&#x93e;&#x917;&#x942; &#x939;&#x94b;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60550"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="96" placeholder="" name="60550" data-type="text" data-groupno="197" id="60550"  minlength="1" maxlength="2" min="0" max="99" digits="true"  />																
<label class="error" for="60550" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60555"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="97" placeholder="" name="60555" data-type="text" data-groupno="198" id="60555"  minlength="1" maxlength="2" min="0" max="99" digits="true"  />																
<label class="error" for="60555" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60560"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x909;&#x92e;&#x94d;&#x930; &#x92a;&#x94d;&#x930;&#x925;&#x92e; &#x936;&#x94d;&#x930;&#x947;&#x923;&#x940; &#x92e;&#x947;&#x902; &#x92a;&#x94d;&#x930;&#x94b;&#x928;&#x94d;&#x928;&#x924;&#x93f; &#x915;&#x947; &#x938;&#x92e;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="98" placeholder="" name="60560" data-type="text" data-groupno="199" id="60560"  minlength="1" maxlength="2" min="0" max="99" digits="true"  />																
<label class="error" for="60560" style="display: none;"></label>
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
<label class="lbl" for="60552"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="104" placeholder="" name="60552" data-type="text" data-groupno="205" id="60552"   />																
<label class="error" for="60552" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60557"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="105" placeholder="" name="60557" data-type="text" data-groupno="206" id="60557"   />																
<label class="error" for="60557" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60562"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x902;&#x917;&#x920;&#x928; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="106" placeholder="" name="60562" data-type="text" data-groupno="207" id="60562"   />																
<label class="error" for="60562" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60565"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="108" placeholder="" name="60565" data-type="text" data-groupno="209" id="60565"   />																
<label class="error" for="60565" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60567"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="109" placeholder="" name="60567" data-type="text" data-groupno="210" id="60567"   />																
<label class="error" for="60567" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60569"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="110" placeholder="" name="60569" data-type="text" data-groupno="211" id="60569"   />																
<label class="error" for="60569" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60566"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="112" placeholder="" name="60566" data-type="text" data-groupno="213" id="60566"   />																
<label class="error" for="60566" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60568"
style="font-family:Arial;font-size:14px; color:#000;width:25%;">
&#x924;&#x93f;&#x925;&#x93f; &#x938;&#x947;
</label>
<div class="cont" style="margin-left:26%;width:74%;">
<div class="calendar_opt" style="width:74%;">
<input type="text" name="60568" value="" tabindex="113" id="60568"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60568" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60570"
style="font-family:Arial;font-size:14px; color:#000;width:25%;">
&#x924;&#x93f;&#x925;&#x93f; &#x924;&#x915;
</label>
<div class="cont" style="margin-left:26%;width:74%;">
<div class="calendar_opt" style="width:74%;">
<input type="text" name="60570" value="" tabindex="114" id="60570"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60570" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x917;&#x29; &#x928;&#x93f;&#x91c;&#x940; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x928;&#x93f;&#x92f;&#x94b;&#x91c;&#x928; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x3a; -
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
<label class="lbl" for="60580"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="120" placeholder="" name="60580" data-type="text" data-groupno="221" id="60580"   />																
<label class="error" for="60580" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60585"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="121" placeholder="" name="60585" data-type="text" data-groupno="222" id="60585"   />																
<label class="error" for="60585" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60590"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x902;&#x917;&#x920;&#x928; &#x2f; &#x92b;&#x930;&#x94d;&#x92e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="122" placeholder="" name="60590" data-type="text" data-groupno="223" id="60590"   />																
<label class="error" for="60590" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60581"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="124" placeholder="" name="60581" data-type="text" data-groupno="225" id="60581"   />																
<label class="error" for="60581" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60586"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="125" placeholder="" name="60586" data-type="text" data-groupno="226" id="60586"   />																
<label class="error" for="60586" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60591"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="126" placeholder="" name="60591" data-type="text" data-groupno="227" id="60591"   />																
<label class="error" for="60591" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60582"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60582" value="" tabindex="128" id="60582"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60582" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60587"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60587" value="" tabindex="129" id="60587"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60587" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="60592"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x93f;&#x92f;&#x941;&#x915;&#x94d;&#x924;&#x93f; &#x915;&#x940; &#x924;&#x93f;&#x925;&#x93f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="calendar_opt" style="width:75%;">
<input type="text" name="60592" value="" tabindex="130" id="60592"     class='datepicker' checkDate='checkDate'  >
</div>
<label class="error" for="60592" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x918;&#x29; &#x906;&#x930;&#x94d;&#x92e;&#x938; &#x95e;&#x94b;&#x930;&#x94d;&#x938; &#x2f; &#x915;&#x94b;&#x930; &#x92e;&#x93f;&#x932;&#x93f;&#x91f;&#x94d;&#x930;&#x940; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x3a; -
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
<label class="lbl" for="60600"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="136" placeholder="" name="60600" data-type="text" data-groupno="237" id="60600"   />																
<label class="error" for="60600" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60603"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="137" placeholder="" name="60603" data-type="text" data-groupno="238" id="60603"   />																
<label class="error" for="60603" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60606"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x926;&#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="138" placeholder="" name="60606" data-type="text" data-groupno="239" id="60606"   />																
<label class="error" for="60606" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60601"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="140" placeholder="" name="60601" data-type="text" data-groupno="241" id="60601"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60601" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60604"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="141" placeholder="" name="60604" data-type="text" data-groupno="242" id="60604"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60604" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60607"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x935;&#x947;&#x924;&#x928;&#x92e;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="142" placeholder="" name="60607" data-type="text" data-groupno="243" id="60607"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60607" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x921;&#x29; &#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f;&#x94b; &#x915;&#x947; &#x932;&#x93f;&#x90f;&#x3a; -
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
<label class="lbl" for="60616"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f;&#x94b; &#x915;&#x947; &#x932;&#x93f;&#x90f; &#x92a;&#x947;&#x936;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="148" placeholder="" name="60616" data-type="text" data-groupno="249" id="60616"   />																
<label class="error" for="60616" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60623"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f;&#x94b; &#x915;&#x947; &#x932;&#x93f;&#x90f; &#x92a;&#x947;&#x936;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="149" placeholder="" name="60623" data-type="text" data-groupno="250" id="60623"   />																
<label class="error" for="60623" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60630"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f;&#x94b; &#x915;&#x947; &#x932;&#x93f;&#x90f; &#x92a;&#x947;&#x936;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="150" placeholder="" name="60630" data-type="text" data-groupno="251" id="60630"   />																
<label class="error" for="60630" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91a;&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x94d;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x28;&#x92a;&#x93f;&#x924;&#x93e; &#x2f; &#x92e;&#x93e;&#x924;&#x93e; &#x2f; &#x905;&#x935;&#x92f;&#x938;&#x94d;&#x915; &#x92c;&#x91a;&#x94d;&#x91a;&#x94b;&#x902; &#x915;&#x947; &#x928;&#x93e;&#x92e;&#x29;&#x3a; -
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
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x905;&#x935;&#x92f;&#x938;&#x94d;&#x915; &#x92c;&#x91a;&#x94d;&#x91a;&#x94b;&#x902; &#x915;&#x947; &#x928;&#x93e;&#x92e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="85728"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x905;&#x935;&#x92f;&#x938;&#x94d;&#x915; &#x92c;&#x91a;&#x94d;&#x91a;&#x93e; 1
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="156" placeholder="" name="85728" data-type="text" data-groupno="351" id="85728"  minlength="0" maxlength="99"  />																
<label class="error" for="85728" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="85730"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x905;&#x935;&#x92f;&#x938;&#x94d;&#x915; &#x92c;&#x91a;&#x94d;&#x91a;&#x93e; 2
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="157" placeholder="" name="85730" data-type="text" data-groupno="352" id="85730"  minlength="0" maxlength="99"  />																
<label class="error" for="85730" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="85732"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x905;&#x935;&#x92f;&#x938;&#x94d;&#x915; &#x92c;&#x91a;&#x94d;&#x91a;&#x93e; 3
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="158" placeholder="" name="85732" data-type="text" data-groupno="353" id="85732"  minlength="0" maxlength="99"  />																
<label class="error" for="85732" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;1&#x29; &#x92a;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60618"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="160" placeholder="" name="60618" data-type="text" data-groupno="257" id="60618"   />																
<label class="error" for="60618" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60625"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="161" placeholder="" name="60625" data-type="text" data-groupno="258" id="60625"   />																
<label class="error" for="60625" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60632"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="162" placeholder="" name="60632" data-type="text" data-groupno="259" id="60632"   />																
<label class="error" for="60632" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932; &#x28;&#x90f;&#x915;&#x921;&#x93c; . &#x921;&#x93f;&#x938;&#x92e;&#x93f;&#x932; &#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60619"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="164" placeholder="" name="60619" data-type="text" data-groupno="261" id="60619"  decimal="2" minlength="1" maxlength="10" DecimalNumber="true" min="0" max="9999999999"  />																
<label class="error" for="60619" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60626"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="165" placeholder="" name="60626" data-type="text" data-groupno="262" id="60626"  decimal="2" minlength="1" maxlength="10" DecimalNumber="true" min="0" max="9999999999"  />																
<label class="error" for="60626" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60633"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="166" placeholder="" name="60633" data-type="text" data-groupno="263" id="60633"  decimal="2" minlength="1" maxlength="10" DecimalNumber="true" min="0" max="9999999999"  />																
<label class="error" for="60633" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x28;&#x915;&#x29; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;  &#x28;&#x90f;&#x915;&#x921;&#x93c; . &#x921;&#x93f;&#x938;&#x92e;&#x93f;&#x932;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60620"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="168" placeholder="" name="60620" data-type="text" data-groupno="265" id="60620"  minlength="0" maxlength="9" min="0" max="999999999" digits="true"  />																
<label class="error" for="60620" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x916;&#x29; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60692"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="170" placeholder="" name="60692" data-type="text" data-groupno="331" id="60692"  minlength="0" maxlength="9" min="0" max="999999999" digits="true"  />																
<label class="error" for="60692" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;4&#x29; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924; &#x28;&#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x93f;&#x932;&#x93f;&#x902;&#x917; &#x915;&#x93e;&#x928;&#x942;&#x928; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x29; &#x28;&#x935;&#x93f;&#x935;&#x930;&#x923; &#x905;&#x902;&#x91a;&#x932;&#x93e;&#x927;&#x93f;&#x915;&#x93e;&#x930;&#x940; &#x938;&#x947; &#x938;&#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x93f;&#x924; &#x939;&#x94b;&#x928;&#x93e; &#x91a;&#x93e;&#x939;&#x93f;&#x90f;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60622"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="172" placeholder="" name="60622" data-type="text" data-groupno="267" id="60622"   />																
<label class="error" for="60622" style="display: none;"></label>
</div>
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;5&#x29; &#x915;&#x941;&#x932; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x2f; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928;  &#x28;&#x90f;&#x915;&#x921;&#x93c; . &#x921;&#x93f;&#x938;&#x92e;&#x93f;&#x932;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60642"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x915;&#x941;&#x932; &#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x2f; &#x905;&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="176" placeholder="" name="60642" data-type="text" data-groupno="277" id="60642"   />																
<label class="error" for="60642" style="display: none;"></label>
</div>
</div>
<div class="tdata">
</div>
<div class="tdata">
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
<label class="lbl" for="60644"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="184" placeholder="" name="60644" data-type="text" data-groupno="285" id="60644"   />																
<label class="error" for="60644" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60649"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="185" placeholder="" name="60649" data-type="text" data-groupno="286" id="60649"   />																
<label class="error" for="60649" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60654"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92b;&#x938;&#x932; &#x2f; &#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="186" placeholder="" name="60654" data-type="text" data-groupno="287" id="60654"   />																
<label class="error" for="60654" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x92a;&#x924;&#x93e;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60645"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="188" placeholder="" name="60645" data-type="text" data-groupno="289" id="60645"   />																
<label class="error" for="60645" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60650"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="189" placeholder="" name="60650" data-type="text" data-groupno="290" id="60650"   />																
<label class="error" for="60650" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60655"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x92a;&#x924;&#x93e;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="190" placeholder="" name="60655" data-type="text" data-groupno="291" id="60655"   />																
<label class="error" for="60655" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932; &#x28;&#x90f;&#x915;&#x921;&#x93c; . &#x921;&#x93f;&#x938;&#x92e;&#x93f;&#x932; &#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60646"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="192" placeholder="" name="60646" data-type="text" data-groupno="293" id="60646"  decimal="2" minlength="1" maxlength="10" DecimalNumber="true" min="0" max="9999999999"  />																
<label class="error" for="60646" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60651"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="193" placeholder="" name="60651" data-type="text" data-groupno="294" id="60651"  decimal="2" minlength="1" maxlength="10" DecimalNumber="true" min="0" max="9999999999"  />																
<label class="error" for="60651" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60656"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x915;&#x94d;&#x937;&#x947;&#x924;&#x94d;&#x930;&#x92b;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="194" placeholder="" name="60656" data-type="text" data-groupno="295" id="60656"  decimal="2" minlength="1" maxlength="10" DecimalNumber="true" min="0" max="9999999999"  />																
<label class="error" for="60656" style="display: none;"></label>
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
<label class="lbl" for="60660"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="200" placeholder="" name="60660" data-type="text" data-groupno="301" id="60660"   />																
<label class="error" for="60660" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60662"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="201" placeholder="" name="60662" data-type="text" data-groupno="302" id="60662"   />																
<label class="error" for="60662" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60664"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x938;&#x94d;&#x925;&#x93e;&#x928;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="202" placeholder="" name="60664" data-type="text" data-groupno="303" id="60664"   />																
<label class="error" for="60664" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60666"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="204" placeholder="" name="60666" data-type="text" data-groupno="305" id="60666"   />																
<label class="error" for="60666" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60667"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="205" placeholder="" name="60667" data-type="text" data-groupno="306" id="60667"   />																
<label class="error" for="60667" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60668"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="206" placeholder="" name="60668" data-type="text" data-groupno="307" id="60668"   />																
<label class="error" for="60668" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x915;&#x94d;&#x92f;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932; &#x939;&#x94b;&#x924;&#x93e; &#x939;&#x948;&#x3f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60674"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="208" placeholder="" name="60674" data-type="text" data-groupno="309" id="60674"   />																
<label class="error" for="60674" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60679"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="209" placeholder="" name="60679" data-type="text" data-groupno="310" id="60679"   />																
<label class="error" for="60679" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="60684"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x924;&#x93f; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x907;&#x938;&#x94d;&#x924;&#x947;&#x92e;&#x93e;&#x932;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="210" placeholder="" name="60684" data-type="text" data-groupno="311" id="60684"   />																
<label class="error" for="60684" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;&#x91d;&#x29; &#x906;&#x92f;&#x3a; -
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
<label class="lbl" for="60676"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x928;&#x94c;&#x915;&#x930;&#x940; &#x938;&#x947; &#x906;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="216" placeholder="" name="60676" data-type="text" data-groupno="317" id="60676"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60676" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60686"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x935;&#x94d;&#x92f;&#x935;&#x938;&#x93e;&#x92f; &#x938;&#x947; &#x906;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="218" placeholder="" name="60686" data-type="text" data-groupno="319" id="60686"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="60686" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x947;&#x902;&#x936;&#x928; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="85729"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x92a;&#x947;&#x902;&#x936;&#x928; &#x938;&#x947; &#x906;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="220" placeholder="" name="85729" data-type="text" data-groupno="354" id="85729"  minlength="0" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="85729" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x915;&#x943;&#x937;&#x93f; &#x938;&#x947; &#x906;&#x92f;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="85733"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x915;&#x943;&#x937;&#x93f; &#x938;&#x947; &#x906;&#x92f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<input size="" value="" type="text" tabindex="222" placeholder="" name="85733" data-type="text" data-groupno="356" id="85733"  minlength="0" maxlength="8" min="0" max="99999999" digits="true"  />																
<label class="error" for="85733" style="display: none;"></label>
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
<label class="lbl" for="60677"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x935;&#x93e;&#x930;&#x94d;&#x937;&#x93f;&#x915; &#x906;&#x92f;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:16%;width:75%;">

<input size="" value="" type="text" tabindex="224" placeholder="" name="60677" data-type="text" data-groupno="321" id="60677"  minlength="1" maxlength="8" min="0" max="99999999" digits="true"  required="true"  />																
<label class="error" for="60677" style="display: none;"></label>


</div>
</div>
<div class="tdata">
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;2&#x29; &#x915;&#x94d;&#x92f;&#x93e; &#x915;&#x930; &#x92d;&#x941;&#x917;&#x924;&#x93e;&#x928; &#x915;&#x930;&#x924;&#x947; &#x939;&#x948;&#x902; &#x3f; &#x28;&#x905;&#x917;&#x930; &#x939;&#x93e;&#x901; &#x924;&#x94b; &#x935;&#x93f;&#x917;&#x924; &#x924;&#x940;&#x928; &#x935;&#x930;&#x94d;&#x937;&#x94b;&#x902; &#x915;&#x93e; &#x930;&#x93f;&#x91f;&#x930;&#x94d;&#x928; &#x915;&#x940; &#x92a;&#x94d;&#x930;&#x924;&#x93f; &#x92a;&#x94d;&#x930;&#x938;&#x94d;&#x924;&#x941;&#x924; &#x915;&#x930;&#x947;&#x902;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60678"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x915;&#x94d;&#x92f;&#x93e; &#x915;&#x930; &#x92d;&#x941;&#x917;&#x924;&#x93e;&#x928; &#x915;&#x930;&#x924;&#x947; &#x939;&#x948;&#x902; &#x3f;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<div class="optiongroup column_0 noborder">
<div class="tdata">
<label class="lbl" for="60678_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="228" value="1" name="60678" id="60678_1"   />&nbsp; &#x939;&#x93e;&#x901; &#x2f; Yes</label>
</div>
<div class="tdata">
<label class="lbl" for="60678_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="228" value="2" name="60678" id="60678_2"   />&nbsp; &#x928;&#x939;&#x940;&#x902; &#x2f; No</label>
</div>
<label class="error" for="60678" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x28;3&#x29; &#x915;&#x94d;&#x92f;&#x93e; &#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x930; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x939;&#x948;&#x3f; &#x28;&#x905;&#x917;&#x930; &#x939;&#x93e;&#x901; &#x924;&#x94b; &#x92a;&#x942;&#x930;&#x94d;&#x923; &#x935;&#x93f;&#x935;&#x930;&#x923; &#x926;&#x947;&#x902;&#x29;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60688"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x938;&#x92e;&#x94d;&#x92a;&#x924;&#x93f; &#x915;&#x930; &#x915;&#x93e; &#x935;&#x93f;&#x935;&#x930;&#x923;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<textarea id="60688" name="60688" style="width:%;" size="" tabindex="230" placeholder="" minlength="0" maxlength="1000"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="60688" style="display: none;"></label>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:90%;font-family:Arial;font-size:14px; color:#000">&#x915;&#x941;&#x91b; &#x905;&#x928;&#x94d;&#x92f; &#x92c;&#x93e;&#x924;&#x947;&#x902;
</label>				
</div>
<div class="tdata">
<label class="lbl" for="60690"
style="font-family:Arial;font-size:14px; color:#000;width:15%;">
&#x905;&#x928;&#x94d;&#x92f; &#x92c;&#x93e;&#x924;&#x947;&#x902;
</label>
<div class="cont" style="margin-left:16%;width:75%;">
<textarea id="60690" name="60690" style="width:%;" size="" tabindex="232" placeholder="" minlength="0" maxlength="1000"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="60690" style="display: none;"></label>	
</div>
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
<label class="lbl" for="42248"
style="font-family:Arial;font-size:14px; color:#000;width:20%;">
&#x938;&#x902;&#x932;&#x917;&#x94d;&#x928;&#x915; &#x91a;&#x941;&#x928;&#x947;&#x3a; -
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:21%;width:79%;">

<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="42248_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox" checked="checked" tabindex="233" value="1" name="42248" id="42248_1"  required="true"  />
Form-XI-&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925; &#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="42248_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="233" value="2" name="42248" id="42248_2"    required="true"  />
Form-XIII-&#x906;&#x935;&#x93e;&#x938; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="42248_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="233" value="3" name="42248" id="42248_3"    required="true"  />
Form-IV-&#x91c;&#x93e;&#x924;&#x93f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="42248_4" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="233" value="4" name="42248" id="42248_4"    required="true"  />
Form-XVI-&#x906;&#x92f; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="42248_5" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="233" value="5" name="42248" id="42248_5"    required="true"  />
&#x915;&#x94d;&#x930;&#x940;&#x92e;&#x940;&#x932;&#x947;&#x92f;&#x930; &#x930;&#x939;&#x93f;&#x924; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="42248_6" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="233" value="6" name="42248" id="42248_6"    required="true"  />
&#x938;&#x93f;&#x902;&#x91a;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x936;&#x924; &#x28;&#x92c;&#x93f;&#x939;&#x93e;&#x930; &#x938;&#x930;&#x915;&#x93e;&#x930; &#x915;&#x947; &#x938;&#x93f;&#x932;&#x93f;&#x902;&#x917; &#x915;&#x93e;&#x928;&#x942;&#x928; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924;&#x29;
</label>
</div>									
<label class="error" for="42248_6" style="display: none;"></label>
<!-- </div> -->	
</div> 


</div>
</div>
<input type="hidden" name="42384" value="" id="42384" data-name="Role ID"/>
<input type="hidden" name="61165" value="" id="61165" data-name="slectedEnclosures"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="92423"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
Applicant_Name
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="234" placeholder="" name="92423" data-type="text" data-groupno="379" id="92423"  minlength="0" maxlength="99"  />																
<label class="error" for="92423" style="display: none;"></label>
</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_left  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x918;&#x94b;&#x937;&#x923;&#x93e; &#x2f; Self Declaration&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:100%;font-family:Arial;font-size:14px; color:#000">
<p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif">प्रमाणित किया जाता है कि उपर्युक्त विवरण मेरी जानकारी में सत्य है और पूर्ण विश्वास है कि मैं क्रीमीलेयर के अंतर्गत नहीं हूँ और अन्य पिछड़ा वर्ग के लिए सक्षम हूँ| अगर कोई सूचना गलत पायी गयी तो मेरा नियोजन रद्द किया जा सकता है या कानून के नियम के अंतर्गत कार्रवाई की जा सकती है|</span></span></p>
</label>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">
<input type="checkbox" value="Y" name="54227" id="54227" required="true" data-type="agreeText"/>
I Agree
<span class="mandatory">*</span>
</label>
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
class="table_cont column_1 label_left  border_radius 
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
	
	
	
	
	
	<input type="hidden" id="serviceId" value="6830012">
	<input type="hidden" id="appliedServiceId" value="6830012">
	<input type="hidden" id="locationName" value="">
	<input type="hidden" id="deocovId" value="">
</body>
</html>

</div>
<!-- -------------------------------code for captcha start---------------------- -->
<div id="captchaImageDiv" class="table_cont column_1 label_left  border_radius 
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
<p style="text-align:center">Contents on this website is owned, by the General Administration Department, Government of Bihar<br />
Site is technically designed, hosted and maintained by National Informatics Centre (NIC)<br />
Powered By &mdash; SERVICEPLUS</p></div>
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
var access_from = "";
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
	if(''=='N'){
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
var uidJson='[{"id":19,"versionNo":12,"serviceId":6830012,"uidAttrId":56117,"nameAttrId":54228,"attrType":0}]';
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
	   var combinedJson = '{"attribute":{"41950":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41831":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41952":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41830":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41951":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"41958":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"42248":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"41829":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41828":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41949":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41827":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41948":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60599":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60598":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60597":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60593":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60592":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60591":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60590":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90791":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"41822":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"60919":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"41821":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"60918":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60917":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"41947":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41826":{"exception":"","type":"email","ekyc_attr":"null","values":{"value":""}},"41825":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"41824":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41823":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60921":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"56425":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"41813":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"42349":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60375":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"64988":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"64990":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"92423":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60603":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60602":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60601":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60600":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60609":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60608":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60607":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60606":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60605":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60604":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60613":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"56117":{"exception":"","type":"AadhaarNumber","ekyc_attr":"null","values":{"value":""}},"60612":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60611":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60610":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60619":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60618":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60617":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60616":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60615":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60625":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60624":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60623":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60622":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60620":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"65196":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"56372":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"56373":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60629":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60626":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60636":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60633":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60632":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60631":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60630":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"61165":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"42080":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"42081":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"42079":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"42078":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60519":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60639":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60638":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60637":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60526":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60647":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60525":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60646":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60524":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60645":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60523":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60644":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60522":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60643":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60521":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60642":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60520":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60641":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60640":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60649":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60648":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60537":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60658":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60536":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60657":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"85713":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60535":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60656":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60534":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60655":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60533":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60654":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85712":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60532":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60653":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60531":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60652":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60651":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60650":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41880":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41882":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41881":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"61752":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"61753":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"63931":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60539":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60538":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60659":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60548":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60669":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60547":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60668":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60546":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60667":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60545":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60666":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60544":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60665":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60543":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60664":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60784":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60542":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60663":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60541":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60662":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60540":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60661":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60660":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41873":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"41872":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"41877":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41876":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41879":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"85728":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85729":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60558":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60679":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60557":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60678":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60556":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60677":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60555":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60676":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85733":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85734":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"60675":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60553":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60674":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85731":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60552":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85732":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60673":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60551":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60672":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60550":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85730":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60671":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60670":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"41865":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85726":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60569":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85727":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60568":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60689":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60567":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60688":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"60566":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60687":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60565":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60686":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60564":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60685":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60563":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60684":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60562":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60683":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"54328":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60561":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60682":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60560":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60681":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60680":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"90781":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90782":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"42384":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"41855":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"41853":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41857":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60579":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60578":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60577":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60576":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60575":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60574":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"85751":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60692":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"85750":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"60570":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60691":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60690":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"41961":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"41962":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"85748":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"85749":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"85746":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"85747":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60589":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"85744":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60588":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"85745":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"60587":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"60586":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60585":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60584":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"54229":{"exception":"","type":"declareText","ekyc_attr":"null","values":{"value":""}},"60583":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"54228":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"60582":{"exception":"","type":"date","ekyc_attr":"null","values":{"value":""}},"54227":{"exception":"","type":"agreeText","ekyc_attr":"null","values":{"value":""}},"60581":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"60580":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}}}}' ;
	   var ekycJson = '' != null && '' != ''? $.parseJSON(''):'';
	   var jsonData ='' != null && '' != ''? $.parseJSON(''):'';
	   var applicationId='';
	   var autoFilledValJson ='' != null && '' != ''? $.parseJSON(''):'';
	   var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
	   var draftRefNo     = '';
	   var mappingFlag  	  = 'true';
       var stateId       	  = '10';
       var attrId			  = '41831';
       var statusApp          =  'S';
       var pageload=false;
       var userChoice		  = '';
       var listValue		  = '';
       var locationId 		  = '';
       var selectedDeptLevel  = '';
	   var selectedLeveStr    ='';
	   var selectedAttrId     = '';
	   var serviceId          =  $('#serviceId').val();// '6830012'; 
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
			 form.action = "applyPageForm.do";//?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc
			 form.submit();
			$('#SubmitButton').attr('disabled', 'disabled');
		}
		
		function FormReset(source){
			if(confirm('Are you sure you want to reset the form?')){
				if(source=="E"){
					//window.location="editApplicationForm.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&applicationRefNo=&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc&grievanceRefNo=";
					var url="editApplicationForm.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&applicationRefNo=&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc&grievanceRefNo=";
					formPost(url);
				}else{
					//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&serviceId=6830012&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc&grievanceRefNo=";
					var url="renderApplicationForm.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&serviceId=6830012&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc&grievanceRefNo=";
					formPost(url);
				}									
			}
		}
		  function CloseForm(){
			
			  	var access_from = "";
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
							window.location="appliedService.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
						}else if(source == "CTZN" || source=="CS"){ 
							var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";								
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
								formPost(url);
							}
						}else{
						
							var datachk='';
							if(datachk.trim()=="Y"){
								 window.history.back();
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
								formPost(url);
							}
						}		
							
					}
				 }
	  	}
		function FormClose(source){
			if(source=="new"){
				//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&serviceId=6830012&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc";
				var url="renderApplicationForm.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&serviceId=6830012&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc";
				formPost(url);
			}else{
				answer = confirm("Are you sure you want to close the form?");
				if (answer !="0"){
					if(source=="E"){
						window.location="appliedService.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
					}else if(source == "CTZN" || source=="CS"){ 
						var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
								formPost(url);
							}
					}else{
						
						var datachk='';
						if(datachk.trim()=="Y"){
							 window.history.back();
						}else{
							//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
							var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
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
					var url="viewLGDDepartment.do?spdiStateId="+spdiStateId+"&spdiAttributeId="+spdiAttributeId+"&OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
					$("#customPopup").modal('show');
					$("#iframeId").attr("src", url);
					//window.open(url,"LGD","minimizable=no,scrollbars=no,resizable=0,titlebar=no,location=no,top=100,left=500,width=520,height=450");
				}
			}
		  
		  function closeModalWindow(){
			  $("#customPopup").modal('hide');
		  }  
		  function viewHelpDoc(){
			  var access_from = "";
			  	var access_from_source = "";
				if(access_from=='M' && access_from_source=='C') {
					Android.androidFucHelpDocApplForm("-_-6830012-_-2192");
				} else {
					var url="viewHelpDoc.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&fileName=&serviceId=6830012&templId=2192";
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
					 form.action = "saveApplDraft.do";//?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J&UUID=3c1c41b5-026a-4c6a-963f-835b2b45dcfc
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
							
<script type="text/javascript" src="resources/js/servicespecificjs/10/6830012_2192.js"
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
	$('input[name^=41857]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=41857]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60917]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60917]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60919]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60919]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60918]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60918]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60568]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60568]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60570]').datepicker("option","yearRange", "1900:c+20");
$('input[name^=60582]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60582]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60587]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60587]').datepicker("option","yearRange", "1900:2026");
$('input[name^=60592]').datepicker("option","maxDate", new Date(2026,10,2));
$('input[name^=60592]').datepicker("option","yearRange", "1900:2026");
	
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
	 window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=6QCT-N6XH-YS0T-IJ53-IX6O-3ZUP-4QTX-V51J";
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
 		</div>
      	<!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
     	 <div class="control-sidebar-bg"></div>
 	</div><!-- ./wrapper -->
 	<div class="footer-content-wrapper">
 		<title><spring:message code="page.title" /></title>
<c:if test="true">
<footer class="main-footer">
        <nav class="navbar_footer  footer">

        </nav>

        <div class="container-fluid copyright text-center">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div class="ad_images">
                        <ul>
                            <li>
                            <a href="http://www.panchayat.gov.in/" title="Panchayat Raj( External Site that opens in a new window)" target="_blank"> <img src="view-resources/image/panchayati-raj.png" class="img-responsive" alt="panchayat Raj"></a>
                        </li>
                        <li>
                            <a href="http://www.digitalindia.gov.in/" title="Digital India( External Site that opens in a new window)" target="_blank"> <img src="view-resources/image/digital-india-logo.png" width="115" height="39" alt="digital india"></a>
                        </li>
                        <li>
                            <a href="http://data.gov.in/" title="Data Portal (External Site that opens in a new window)" target="_blank"><img src="view-resources/image/data-gov-logo.png" width="140" height="40" alt="data"></a>
                        </li>
                        <li>
                            <a href="http://india.gov.in/" title="NPI (External Site that opens in a new window)" target="_blank"><img src="view-resources/image/india-gov-logo.png" width="61" height="40" alt="NPI"></a>
                        </li>
                        <li>
                            <a href="http://deity.gov.in/" title="DeitY (External Site that opens in a new window)" target="_blank"><img src="view-resources/image/Deity-logo.png" alt="DeitY"></a>
                        </li>
                        <li>
                            <a href="http://pmindia.gov.in/" title="PM INDIA (External Site that opens in a new window)" target="_blank"><img src="view-resources/image/pm-india-logo.png" alt="pm india"></a>
                        </li>
                        </ul>
                    </div>
                </div>
            <p>Site is technically designed, hosted and maintained by National Informatics Centre<br/>Contents on this website is owned, updated and managed by the Ministry of Panchayati Raj<br/>POWERED BY SERVICEPLUS
            </p>
        </div>

    </footer>
    </c:if>
 	</div> 	
 </body>
 
<!-- <script>$.widget.bridge('uibutton', $.ui.button);</script> -->

 
<!-- ****************************************Start Notification Start Success,ERROR,Alert,Notify************************************************* -->
 
 






 













<!-- ****************************************End Notification Start Success,ERROR,Alert,Notify************************************************* -->
</html>


