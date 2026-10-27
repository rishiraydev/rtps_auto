








<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
		
		 	<title>ServicePlus- Issuance of Residence Certificate at RO level</title>
		
		
	
    
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
		    input.setAttribute("value", "ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB");
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
            <a class="navbar-brand pull-left fontnirvana"  href="javascript:void(0)" onClick="formPost('home.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" >
                <img src="resources/images/PNG/sp-logo.png" alt="ServicePlus" class="img-responsive">
							<!-- <img src="view-resources/image/emblem.png" alt="Logo" class="img-responsive"> --></a>
            </div>
            
            <div class="col-2 col-lg-1">
             <a href="javascript:void(0)" onClick="formPost('home.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" ><img src="view-resources/image/emblem.png" alt="Logo" class="img-responsive"></a>
              
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
	<a href="javascript:void(0)" onClick="formPost('home.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" class="logo"> <span class="logo-mini"><b>Menu</b></span>
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
                 <a href="javascript:void(0)" onClick="formPost('home.do?theme=blue&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" > 
                      
                      <h3>
                     <i class="fa fa-circle" style="color:#3c8dbc;"></i>&nbsp;Blue (Default)
                      </h3>
                    </a>
                  </li>
                <li><!-- Task item -->
                   <a href="javascript:void(0)" onClick="formPost('home.do?theme=grey&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" > 
                
                      <h3>
                      <i class="fa fa-circle" style="color:#455D7A;"></i>&nbsp;Grey
                        
                      </h3>
                    </a>
                  </li>
                  <li><!-- Task item -->
                  <a href="javascript:void(0)" onClick="formPost('home.do?theme=red&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" > 
                  
                      <h3>
                        <i class="fa fa-circle" style="color:#f95959;"></i>&nbsp;Red
                      </h3>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                  <a href="javascript:void(0)" onClick="formPost('home.do?theme=green&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" > 
                  
                      <h3>
                      <i class="fa fa-circle" style="color:#00a65a;"></i>&nbsp;Green
                      </h3>
                    </a>
                  </li>
                 
                   <li><!-- Task item -->
                  <a href="javascript:void(0)" onClick="formPost('home.do?theme=yellow&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" > 

                      <h3>
                      <i class="fa fa-circle" style="color:#f39c12;"></i>&nbsp;Yellow
                      </h3>
                    </a>
                  </li>
                   <li><!-- Task item -->
                    <a href="javascript:void(0)" onClick="formPost('home.do?theme=purple&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB');" > 

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
	var url = "viewUserRoles.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
	$("#roleFrame").attr('src', url);
	$("#roleModal").modal();
}

/* function getDataForPropertiesFileOnProd(){
	languagePackService.getDataForPropertiesFileOnProd();
} */
function getDataForPropertiesFileOnProd() {
    $.ajax({
        url : 'viewFileInLangpack.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB',
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
    input.setAttribute("value", "ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB");
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
//window.location="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4630012&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
 var url="openPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4630012&source="+source+"&page="+pages+"&applicationRefNo="+applicationRefNo+"&UUID="+uuid ;
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
<input type="hidden" id="csrfTokeID" name="OWASP_CSRFTOKEN" value="ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB"/>
<input type="hidden" id="currentDateID" name="currentDate" value="01/04/2026"/>
<input type="hidden" name ="UUID" value="35e51ab4-14eb-44f8-a410-512c3e5dcf2a"/>
<input type="hidden" name ="applStatus" id="applStatus" value="S"/>
<input type="hidden" name ="grievanceRefNo" id="grievanceRefNo" value=""/>
<input type="hidden" name="seq_no"  value="nomlg"/>
<input type="hidden" name="applyId"  value=""/>
<input type="hidden" name ="serviceId" id="serviceId" value="4630012"/>
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
form.action = "applyPageForm.do?OWASP_CSRFTOKEN="+csrfTokeID+"&serviceId=4630012&UUID="+uuid ;
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
<div><span style="font-size:16px"><strong>फॉर्म / Form-XII </strong></span><br />
&nbsp;
<div><strong><span style="font-size:16px">निवास प्रमाण-पत्र&nbsp;<strong>हेतु </strong>आवेदन-पत्र (राजस्व अधिकारी स्तर से)<br />
Application Form for issuance of&nbsp; Residence Certificate from Revenue Officer Level</span></strong></div>
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
<label class="lbl" for="78174"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x902;&#x915; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Application Ref. No. of Caste&#x2f;Income&#x2f;Residence
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="3" placeholder="" name="78174" data-type="text" data-groupno="78" id="78174"  minlength="0" maxlength="99"  />																
<label class="error" for="78174" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="78248"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x928;&#x93e;&#x92e; &#x2f; Applicant Name &#x28;English&#x29;
</label>
<div class="cont" style="margin-left:50%;width:50%;">
<input size="" value="" type="text" tabindex="4" placeholder="" name="78248" data-type="fullName" data-groupno="81" id="78248"  applicantname="true" maxlength="99"  />																
<label class="error" for="78248" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<input type="button" class="button" size="" title="" style="width:%;" tabindex="5" data-datatype="button"  data-groupno="80"  id="78176" name="78176" value="Get Details"/>					
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
<label class="lbl" for="17285"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
&#x938;&#x947;&#x935;&#x93e; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Service
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="17285_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="6" value="1" name="17285" id="17285_1"  required="true"   />&nbsp; &#x938;&#x93e;&#x92e;&#x93e;&#x928;&#x94d;&#x92f;&#x2f;General</label>
</div>
<div class="tdata">
<label class="lbl" for="17285_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="6" value="2" name="17285" id="17285_2"  required="true"   />&nbsp; &#x924;&#x924;&#x94d;&#x915;&#x93e;&#x932;&#x2f;Tatkal</label>
</div>
<label class="error" for="17285" style="display: none;"></label>
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
<label class="lbl" for="17290"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x932;&#x93f;&#x902;&#x917; &#x2f; Gender
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:90%;">

<div class="optiongroup column_3 noborder">
<div class="tdata">
<label class="lbl" for="17290_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="1" name="17290" id="17290_1"  required="true"   />&nbsp; &#x92a;&#x941;&#x930;&#x941;&#x937; &#x2f; Male</label>
</div>
<div class="tdata">
<label class="lbl" for="17290_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="2" name="17290" id="17290_2"  required="true"   />&nbsp; &#x938;&#x94d;&#x924;&#x94d;&#x930;&#x940; &#x2f; Female</label>
</div>
<div class="tdata">
<label class="lbl" for="17290_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="8" value="3" name="17290" id="17290_3"  required="true"   />&nbsp; &#x924;&#x943;&#x924;&#x940;&#x92f; &#x932;&#x93f;&#x902;&#x917; &#x2f; Third Gender</label>
</div>
<label class="error" for="17290" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="63928"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x2f; Salutation
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="63928" name="63928" class="searchDrop" tabindex="9" style="width:83%;" data-datatype="dropDown" data-groupno="56"  required="true"   >
<option value="">
Please Select</option>
<option value="1" >&#x936;&#x94d;&#x930;&#x940;</option>
<option value="2" >&#x936;&#x94d;&#x930;&#x940;&#x92e;&#x924;&#x940;</option>
<option value="3" >&#x938;&#x941;&#x936;&#x94d;&#x930;&#x940;</option>
<option value="4" >&#x915;&#x94b;&#x908; &#x905;&#x92d;&#x93f;&#x935;&#x93e;&#x926;&#x928; &#x928;&#x939;&#x940;&#x902;</option>
</select>
<label class="error" style="display: none;" for="63928"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="78250"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Applicant
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="10" placeholder="" name="78250" data-type="fullName" data-groupno="82" id="78250"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="78250" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17287"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x2f; &#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="11" placeholder="" name="17287" data-type="text" data-groupno="5" id="17287"   required="true"  />																
<label class="error" for="17287" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="78251"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Father
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="12" placeholder="" name="78251" data-type="fullName" data-groupno="83" id="78251"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="78251" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17288"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="13" placeholder="" name="17288" data-type="text" data-groupno="7" id="17288"   required="true"  />																
<label class="error" for="17288" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="41565"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Mother
<span class="mandatory">*</span>
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="14" placeholder="" name="41565" data-type="fullName" data-groupno="27" id="41565"  applicantname="true" maxlength="99"  required="true"  />																
<label class="error" for="41565" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="41567"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92e;&#x93e;&#x924;&#x93e; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="15" placeholder="" name="41567" data-type="text" data-groupno="28" id="41567"   required="true"  />																
<label class="error" for="41567" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="64876"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Husband
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="16" placeholder="" name="64876" data-type="fullName" data-groupno="58" id="64876"  applicantname="true" maxlength="99"  />																
<label class="error" for="64876" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="64877"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x924;&#x93f; &#x915;&#x93e; &#x928;&#x93e;&#x92e;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="17" placeholder="" name="64877" data-type="text" data-groupno="59" id="64877"   />																
<label class="error" for="64877" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17293"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x92e;&#x94b;&#x92c;&#x93e;&#x907;&#x932; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Mobile No. of Applicant
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="mobileNo" serviceId="4630012" resendOtpFlag="true" resendOtpCount="2" resendOtpTime="5"  verification-flag="true" value="" type="text" tabindex="18"  placeholder="" name="17293" data-datatype="mobileNo" data-groupno="9" id="17293"  minlength="10" digits="true" maxlength="10" minlength="10"  />
<label class="error" for="17293"  style="display: none;"></label>
<input type="hidden" id="17293_txn" name="17293_txn" value=""/>
<input type="hidden" id="17293_val" name="17293_val" value=""/>
<input type="hidden" id="17293_consent" value=""/>
</div>
</div>
<div class="tdata">
<label class="lbl" for="17294"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x908;&#x92e;&#x947;&#x932; &#x2f; Email of Applicant
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-type="email" serviceId="4630012" resendOtpFlag="false" resendOtpCount="" resendOtpTime=""  verification-flag="false" value="" type="text" tabindex="19"  placeholder="" name="17294" data-datatype="email" data-groupno="10" id="17294"  minlength="6" email="true" maxlength="254" minlength="6"  />
<label class="error" for="17294"  style="display: none;"></label>
<input type="hidden" id="17294_txn" name="17294_txn" value=""/>
<input type="hidden" id="17294_val" name="17294_val" value=""/>
<input type="hidden" id="17294_consent" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" style="width:50%;font-family:Arial;font-size:14px; color:#000">&#x92a;&#x924;&#x93e; &#x2f; Address&#x3a;-
</label>				
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17391"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x930;&#x93e;&#x91c;&#x94d;&#x92f; &#x2f; State
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17391" name="17391"  tabindex="22" style="width:83%;" data-dispLang="E" data-datatype="custLGDHierarchy" data-groupno="22"  required="true" >
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
<label class="error" for="17391" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17297"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x91c;&#x93f;&#x932;&#x93e; &#x2f; District
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17297" name="17297"  tabindex="23" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="13"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17297" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17296"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x905;&#x928;&#x941;&#x92e;&#x902;&#x921;&#x932; &#x2f; Sub-Division
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17296" name="17296"  tabindex="24" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="12"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17296" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17298"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x94d;&#x930;&#x916;&#x902;&#x921; &#x2f; Block
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="17298" name="17298"  tabindex="25" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="14"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="17298" style="display: none;"></label>	


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75290"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
&#x938;&#x94d;&#x925;&#x93e;&#x928;&#x940;&#x92f; &#x928;&#x93f;&#x915;&#x93e;&#x92f; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Local Body
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="75290_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="1" name="75290" id="75290_1"  required="true"   />&nbsp; &#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat</label>
</div>
<div class="tdata">
<label class="lbl" for="75290_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="2" name="75290" id="75290_2"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation</label>
</div>
<div class="tdata">
<label class="lbl" for="75290_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="3" name="75290" id="75290_3"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality</label>
</div>
<div class="tdata">
<label class="lbl" for="75290_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="26" value="4" name="75290" id="75290_4"  required="true"   />&nbsp; &#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat</label>
</div>
<label class="error" for="75290" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="56887"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x935;&#x93e;&#x930;&#x94d;&#x921; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Ward No.
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="27" placeholder="" name="56887" data-type="text" data-groupno="37" id="56887"  minlength="1" maxlength="3" AlphaNumeric="true"  scriptNames="^[\p{Latin}\p{CommonWithNumbers}\p{Common}]+$" allowedLanguages="English/CommonWithNumbers" required="true"  />																
<label class="error" for="56887" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="56886"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Village Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="56886" name="56886"  tabindex="28" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="36" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="56886" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75291"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x928;&#x93f;&#x917;&#x92e; &#x2f; Municipal Corporation
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75291" name="75291"  tabindex="30" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="67" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75291" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75292"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x2f; Municipality
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75292" name="75292"  tabindex="32" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="68" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75292" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="75293"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x928;&#x917;&#x930; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x2f; Town Panchayat
</label>
<div class="cont" style="margin-left:%;width:83%;">
<select id="75293" name="75293"  tabindex="34" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="69" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="75293" style="display: none;"></label>	
</div>
</div>
<div class="tdata">
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17299"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x917;&#x94d;&#x930;&#x93e;&#x92e; &#x28;Village&#x29; &#x2f; &#x92e;&#x94b;&#x939;&#x932;&#x94d;&#x932;&#x93e; &#x28;Town&#x29;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="36" placeholder="" name="17299" data-type="text" data-groupno="15" id="17299"  maxlength="99"  required="true"  />																
<label class="error" for="17299" style="display: none;"></label>


</div>
</div>
<div class="tdata">
<label class="lbl" for="17300"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x921;&#x93e;&#x915; &#x918;&#x930; &#x2f; Post Office
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="37" placeholder="" name="17300" data-type="text" data-groupno="17" id="17300"  maxlength="99"  required="true"  />																
<label class="error" for="17300" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="65015"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x925;&#x93e;&#x928;&#x93e; &#x2f; Police Station
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:83%;">

<select id="65015" name="65015"  tabindex="38" style="width:83%;" data-dispLang="B" data-datatype="custLGDHierarchy" data-groupno="60"  required="true" >
<option value=""> 
Please Select</option>	
</select>
<label class="error" for="65015" style="display: none;"></label>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="90772"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92a;&#x93f;&#x928; &#x915;&#x94b;&#x921; &#x2f; Pin Code
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<input size="" value="" type="text" tabindex="39" placeholder="" name="90772" data-type="text" data-groupno="84" id="90772"  minlength="6" maxlength="6" min="000000" max="999999" digits="true"  required="true"  />																
<label class="error" for="90772" style="display: none;"></label>


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17494"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915;&#x2f;&#x92a;&#x94d;&#x930;&#x93e;&#x927;&#x93f;&#x915;&#x943;&#x924; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x928;&#x93f;&#x927;&#x93f; &#x915;&#x93e; &#x915;&#x93e;&#x909;&#x902;&#x91f;&#x930; &#x92a;&#x930; &#x932;&#x93f;&#x92f;&#x93e; &#x917;&#x92f;&#x93e; &#x92b;&#x94b;&#x91f;&#x94b; &#x2f; Photograph of applicant &#x2f; authorized representative taken over the counter
</label>
<div class="cont" style="margin-left:%;width:%;">
<input type="hidden" class="imageData" name="17494_image"  id="17494_image" value=""/>
<figure class="thumbnail" style='display:none'>
<a target="_blank" onClick="openLargeStringImage(17494)">
<img class="uploadImage" id="preview" name="preview" src="" attr-id="17494"></img>
</a>
</figure>
<label><a class="removeImage" id="17494_removeLink" style="display:none"><img src="resources/images/delete1.png" width="18" height="19" border="0" /></a></label>
</br> 
<input type="hidden" name="17494_removeFlag" id="17494_removeFlag" value="false"/>
<input type="hidden" name="imageHeight" id="imageHeight" value=""/>
<input type="hidden" name="imageWidth" id="imageWidth" value=""/>
<input type="hidden" name="minImageSize" id="minImageSize" value="20"/>
<input type="hidden" name="maxImageSize" id="maxImageSize" value="350"/>
<input type="hidden" name="17494_croph" id="17494_croph" value=""/>
<input type="hidden" name="17494_cropw" id="17494_cropw" value=""/>
<input type="hidden" name="17494_cropx" id="17494_cropx" value=""/>
<input type="hidden" name="17494_cropy" id="17494_cropy" value=""/>
<input type="file" class="image groupset1"   data-type="image" id="17494" name="17494" />
<image id="17494_openCamra" class="openCamera pointer groupset1"  src="resources/images/camera-icon.png"></image>
<label class="error" for="17494" style="display: none;"></label>							
</div>
</div>
<div class="tdata">
<label class="lbl" for="90837"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x93e; &#x938;&#x94d;&#x935;&#x905;&#x92d;&#x93f;&#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x93f;&#x924; &#x92b;&#x94b;&#x91f;&#x94b; &#x2f; Self attested photograph of applicant
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:%;">

<input type="hidden" class="imageData" name="90837_image"  required="true"  id="90837_image" value=""/>
<figure class="thumbnail" style='display:none'>
<a target="_blank" onClick="openLargeStringImage(90837)">
<img class="uploadImage" id="preview" name="preview" src="" attr-id="90837"></img>
</a>
</figure>
<label><a class="removeImage" id="90837_removeLink" style="display:none"><img src="resources/images/delete1.png" width="18" height="19" border="0" /></a></label>
</br> 
<input type="hidden" name="90837_removeFlag" id="90837_removeFlag" value="false"/>
<input type="hidden" name="imageHeight" id="imageHeight" value=""/>
<input type="hidden" name="imageWidth" id="imageWidth" value=""/>
<input type="hidden" name="minImageSize" id="minImageSize" value="20"/>
<input type="hidden" name="maxImageSize" id="maxImageSize" value="350"/>
<input type="hidden" name="90837_croph" id="90837_croph" value=""/>
<input type="hidden" name="90837_cropw" id="90837_cropw" value=""/>
<input type="hidden" name="90837_cropx" id="90837_cropx" value=""/>
<input type="hidden" name="90837_cropy" id="90837_cropy" value=""/>
<input type="file" class="image groupset1"   data-type="image" id="90837" name="90837" imagerequired='true'/>
<image id="90837_openCamra" class="openCamera pointer groupset1"  src="resources/images/camera-icon.png"></image>
<label class="error" for="90837" style="display: none;"></label>							


</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="56925"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x927;&#x93e;&#x930; &#x938;&#x902;&#x916;&#x94d;&#x92f;&#x93e; &#x2f; Aadhaar Number
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" onChange="triggerChange(this.name);" data-verificationType="2" data-type="AadhaarNumber" serviceId="4630012" verification-flag="true" value="" type="text" tabindex="42"  placeholder="" name="56925_txt" data-datatype="AadhaarNumber" data-groupno="38" id="56925_txt"  maxlength="16" verhoeff="16"  />
<input type="hidden" id="56925" name="56925" value=""/>
<label class="error" for="56925"  style="display: none;"></label>
<input type="hidden" id="56925_txn" name="56925_txn" value=""/>
<input type="hidden" id="56925_val" name="56925_val" value=""/>
<input type="hidden" id="56925_consent" value="Identification of Applicant by GAD, Govt. of Bihar.मैं यह स्पष्ट करता हूँ कि मुझे आधार आधारित प्रमाणीकरण प्रणाली के साथ स्वयं को प्रमाणित करने में कोई आपत्ति नहीं है और मैं अपना आधार नंबर प्रदान करने के लिए सहमत हूँ। मैं समझता हूँ कि आधार नंबर का उपयोग केवल नीचे उल्लिखित उद्देश्य के लिए किया जाएगा: 'सामान्य प्रशासन विभाग, बिहार सरकार द्वारा आवेदक की पहचान।"/>
</div>
</div>
<input type="hidden" name="41650" value="" id="41650" data-name="Role Id"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="71542"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Status
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:70%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="71542_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="43" value="1" name="71542" id="71542_1"  required="true"   />&nbsp; Accept</label>
</div>
<div class="tdata">
<label class="lbl" for="71542_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="43" value="2" name="71542" id="71542_2"  required="true"   />&nbsp; Reject</label>
</div>
<label class="error" for="71542" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="60011"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Aadhar Authentication
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="60011_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="44" value="1" name="60011" id="60011_1"   />&nbsp; Verified</label>
</div>
<div class="tdata">
<label class="lbl" for="60011_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="44" value="2" name="60011" id="60011_2"   />&nbsp; Not Verified</label>
</div>
<label class="error" for="60011" style="display: none;"></label>
</div>	
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17291"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Applicant Temp
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="45" placeholder="" name="17291" data-type="text" data-groupno="6" id="17291"  disAllowChar="!,@,#,$,%,^,&,*,(,),_,-,+,=,~,`,{,},[,],|,\,;,:,,',<,>,.,?,/" minlength="1" maxlength="999" character="true"  scriptNames="^[\p{Latin}\p{Common}\p{Common}]+$" allowedLanguages="English/Common" />																
<label class="error" for="17291" style="display: none;"></label>
</div>
</div>
<div class="tdata">
<label class="lbl" for="72426"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Reason for Rejection
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="46" placeholder="" name="72426" data-type="text" data-groupno="62" id="72426"   />																
<label class="error" for="72426" style="display: none;"></label>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="17292"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Name of Father Temp
<img src="resources/images/helpImage4.png" title="For auto conversion of Name from English to Hindi, press <Space> after typing every word."  height="12"></img>
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="47" placeholder="" name="17292" data-type="text" data-groupno="8" id="17292"  minlength="0" maxlength="99"  />																
<label class="error" for="17292" style="display: none;"></label>
</div>
</div>
<input type="hidden" name="75294" value="" id="75294" data-name="Applicant_Name"/>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60021"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
Application Mode
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="60021_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="1" name="60021" id="60021_1"   />&nbsp; Online</label>
</div>
<div class="tdata">
<label class="lbl" for="60021_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="2" name="60021" id="60021_2"   />&nbsp; Offline</label>
</div>
<div class="tdata">
<label class="lbl" for="60021_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="48" value="3" name="60021" id="60021_3"   />&nbsp; Kiosk</label>
</div>
<label class="error" for="60021" style="display: none;"></label>
</div>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="92200"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
SMS 1
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="49" placeholder="" name="92200" data-type="text" data-groupno="95" id="92200"  minlength="0" maxlength="999"  />																
<label class="error" for="92200" style="display: none;"></label>
</div>
</div>
<input type="hidden" name="90786" value="" id="90786" data-name="Tatkal SLA Date"/>
</div>
<div class="trow">
<div class="tdata">&nbsp;</div>
<div class="tdata">
<label class="lbl" for="92201"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
SMS 2
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input size="" value="" type="text" tabindex="50" placeholder="" name="92201" data-type="text" data-groupno="96" id="92201"  minlength="0" maxlength="99"  />																
<label class="error" for="92201" style="display: none;"></label>
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
<label class="lbl" for="41566"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
&#x928;&#x93f;&#x935;&#x93e;&#x938; &#x915;&#x93e; &#x92a;&#x94d;&#x930;&#x915;&#x93e;&#x930; &#x2f; Type of Residence
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:99%;">

<div class="optiongroup column_2 noborder">
<div class="tdata">
<label class="lbl" for="41566_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="51" value="1" name="41566" id="41566_1"  required="true"   />&nbsp; &#x938;&#x94d;&#x925;&#x93e;&#x92f;&#x940;</label>
</div>
<div class="tdata">
<label class="lbl" for="41566_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="51" value="2" name="41566" id="41566_2"  required="true"   />&nbsp; &#x905;&#x938;&#x94d;&#x925;&#x93e;&#x92f;&#x940;</label>
</div>
<label class="error" for="41566" style="display: none;"></label>
</div>	


</div>
</div>
<div class="tdata">
<label class="lbl" for="17301"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x906;&#x935;&#x947;&#x926;&#x928; &#x915;&#x93e; &#x909;&#x926;&#x94d;&#x926;&#x947;&#x936;&#x94d;&#x92f; &#x2f; Purpose of Application
</label>
<div class="cont" style="margin-left:%;width:70%;">
<input size="" value="" type="text" tabindex="52" placeholder="" name="17301" data-type="text" data-groupno="19" id="17301"  minlength="0" maxlength="99"  />																
<label class="error" for="17301" style="display: none;"></label>
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
<label class="lbl" for="41578"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x932;&#x92c;&#x94d;&#x927; &#x915;&#x930;&#x93e;&#x92f;&#x947; &#x917;&#x92f;&#x947; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;&#x94b; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x2f; Enclosure attached along with Application Form &#x28;General&#x29;
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="41578_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="53" value="1" name="41578" id="41578_1"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-XIV &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<label class="error" for="41578_1" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="60467"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x909;&#x92a;&#x932;&#x92c;&#x94d;&#x927; &#x915;&#x930;&#x93e;&#x92f;&#x947; &#x917;&#x92f;&#x947; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;&#x94b; &#x915;&#x940; &#x938;&#x942;&#x91a;&#x940; &#x2f; Enclosure attached along with Application Form &#x28;Tatkal&#x29;
</label>
<div class="cont" style="margin-left:%;width:90%;">
<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="60467_1" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="54" value="1" name="60467" id="60467_1"    />
&#x92b;&#x949;&#x930;&#x94d;&#x92e;-XIV &#x938;&#x94d;&#x935;&#x92f;&#x902; &#x936;&#x92a;&#x925;-&#x92a;&#x924;&#x94d;&#x930;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60467_2" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="54" value="2" name="60467" id="60467_2"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x915;&#x29;&rsquo; &#x915;&#x947; &#x906;&#x935;&#x947;&#x926;&#x915; &#x915;&#x947; &#x92a;&#x939;&#x91a;&#x93e;&#x928;-&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x938;&#x947; &#x915;&#x94b;&#x908; &#x90f;&#x915;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60467_3" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="54" value="3" name="60467" id="60467_3"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x916;&#x29;&rsquo; &#x915;&#x947; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x938;&#x947; &#x915;&#x94b;&#x908; &#x90f;&#x915;
</label>
</div>									
<div class="tdata">
<label class="lbl" for="60467_4" style="font-family:Arial;font-size:14px; color:#000">										
<input type="checkbox"	tabindex="54" value="4" name="60467" id="60467_4"    />
&#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x915;&#x29;&rsquo; &#x92f;&#x93e; &#x938;&#x92e;&#x942;&#x939; &lsquo;&#x28;&#x916;&#x29;&rsquo; &#x915;&#x947; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x928; &#x939;&#x94b;&#x928;&#x947; &#x92a;&#x930; &#x939;&#x932;&#x94d;&#x915;&#x93e; &#x915;&#x930;&#x94d;&#x92e;&#x91a;&#x93e;&#x930;&#x940; &#x2f; &#x92a;&#x902;&#x91a;&#x93e;&#x92f;&#x924; &#x938;&#x947;&#x935;&#x915; &#x926;&#x94d;&#x935;&#x93e;&#x930;&#x93e; &#x935;&#x93f;&#x939;&#x93f;&#x924; &#x92a;&#x94d;&#x930;&#x92a;&#x924;&#x94d;&#x930; &#x92e;&#x947;&#x902; &#x928;&#x93f;&#x930;&#x94d;&#x917;&#x924; &#x91c;&#x93e;&#x901;&#x91a; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x935;&#x947;&#x926;&#x928;
</label>
</div>									
<label class="error" for="60467_4" style="display: none;"></label>
<!-- </div> -->	
</div> 
</div>
</div>
<input type="hidden" name="56981" value="" id="56981" data-name="enclCheckedVar"/>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_1 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
&#x906;&#x935;&#x93e;&#x938; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x938;&#x93e;&#x915;&#x94d;&#x937;&#x94d;&#x92f; &#x939;&#x947;&#x924;&#x941; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; &#x91a;&#x941;&#x928;&#x947;&#x902;&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="94358"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
&#x906;&#x935;&#x93e;&#x938; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x915;&#x947; &#x938;&#x93e;&#x915;&#x94d;&#x937;&#x94d;&#x92f; &#x939;&#x947;&#x924;&#x941; &#x906;&#x935;&#x947;&#x926;&#x915;&#x2f;&#x906;&#x935;&#x947;&#x926;&#x93f;&#x915;&#x93e; &#x915;&#x947; &#x92e;&#x93e;&#x924;&#x93e;-&#x92a;&#x93f;&#x924;&#x93e;&#x2f;&#x92a;&#x942;&#x930;&#x94d;&#x935;&#x91c; &#x915;&#x93e; &#x928;&#x93f;&#x92e;&#x94d;&#x928;&#x93e;&#x902;&#x915;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; &#x938;&#x92e;&#x941;&#x91a;&#x93f;&#x924; &#x92e;&#x93e;&#x928;&#x947; &#x91c;&#x93e;&#x92f;&#x947;&#x902;&#x917;&#x947;
<span class="mandatory">*</span>
</label>
<div class="cont" style="margin-left:%;width:50%;">

<div class="optiongroup column_1 noborder">
<div class="tdata">
<label class="lbl" for="94358_1" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="1" name="94358" id="94358_1"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x916;&#x924;&#x93f;&#x92f;&#x93e;&#x928;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_2" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="2" name="94358" id="94358_2"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x926;&#x93e;&#x928;&#x92a;&#x924;&#x94d;&#x930;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_3" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="3" name="94358" id="94358_3"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x92d;&#x942;&#x92e;&#x93f; &#x938;&#x902;&#x92c;&#x902;&#x927;&#x940; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_4" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="4" name="94358" id="94358_4"  required="true"   />&nbsp; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916; - &#x92d;&#x942;&#x92e;&#x93f;&#x939;&#x940;&#x928;&#x94b;&#x902; &#x915;&#x94b; &#x906;&#x935;&#x902;&#x91f;&#x93f;&#x924; &#x91c;&#x92e;&#x940;&#x928; &#x938;&#x947; &#x938;&#x902;&#x92c;&#x902;&#x927;&#x93f;&#x924; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_5" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="5" name="94358" id="94358_5"  required="true"   />&nbsp; &#x905;&#x928;&#x94d;&#x92f; &#x930;&#x93e;&#x91c;&#x938;&#x94d;&#x935; &#x905;&#x92d;&#x93f;&#x932;&#x947;&#x916;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_6" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="6" name="94358" id="94358_6"  required="true"   />&nbsp; &#x930;&#x93e;&#x936;&#x928; &#x915;&#x93e;&#x930;&#x94d;&#x921;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_7" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="7" name="94358" id="94358_7"  required="true"   />&nbsp; &#x928;&#x93f;&#x930;&#x94d;&#x935;&#x93e;&#x91a;&#x928; &#x92a;&#x939;&#x91a;&#x93e;&#x928; &#x92a;&#x924;&#x94d;&#x930;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_8" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="8" name="94358" id="94358_8"  required="true"   />&nbsp; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x941;&#x924; &#x935;&#x93f;&#x92a;&#x924;&#x94d;&#x930;</label>
</div>
<div class="tdata">
<label class="lbl" for="94358_9" style="margin-right: 0; font-family:Arial; font-size:14px; color:#000" >
<input type="radio" style="margin-right: 0;" tabindex="55" value="9" name="94358" id="94358_9"  required="true"   />&nbsp; &#x926;&#x942;&#x930;&#x92d;&#x93e;&#x937; &#x935;&#x93f;&#x92a;&#x924;&#x94d;&#x930;</label>
</div>
<label class="error" for="94358" style="display: none;"></label>
</div>	


</div>
</div>
</div>
</div>		
<!--  <noscript><meta http-equiv="refresh" content="0;url=urlNotFound.jsp"></noscript>  -->
<div class="table_cont column_2 label_top  border_radius shadow" section-action="" sectionVisibility-task="" data-type="section" style="background:#FFFAE3;color:#ccc">
<h4 class="shaded_div" title="" style="padding:5px;background:#B5A970; text-align:Center;font-family:Arial; font-size:16px; color:#000000">
Enclosure Section&#xd;&#xa;&#x9;&#x9;	
</h4>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90866"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c; &#x2f; Document
</label>
<div class="cont" style="margin-left:%;width:70%;">
<select id="90866" name="90866" class="searchDrop" tabindex="56" style="width:70%;" data-datatype="dropDown" data-groupno="91"   >
<option value="">
Please Select</option>
<option value="1" >&#x928;&#x93f;&#x930;&#x94d;&#x935;&#x93e;&#x91a;&#x928; &#x92a;&#x939;&#x91a;&#x93e;&#x928; &#x92a;&#x924;&#x94d;&#x930;</option>
<option value="2" >&#x92e;&#x924;&#x926;&#x93e;&#x924;&#x93e; &#x92a;&#x939;&#x91a;&#x93e;&#x928; &#x92a;&#x924;&#x94d;&#x930;</option>
<option value="3" >&#x906;&#x927;&#x93e;&#x930; &#x915;&#x93e;&#x930;&#x94d;&#x921;</option>
<option value="4" >&#x921;&#x94d;&#x930;&#x93e;&#x908;&#x935;&#x93f;&#x902;&#x917; &#x932;&#x93e;&#x907;&#x938;&#x947;&#x902;&#x938;</option>
<option value="5" >&#x92a;&#x948;&#x928; &#x915;&#x93e;&#x930;&#x94d;&#x921;</option>
<option value="6" >&#x92a;&#x93e;&#x938;&#x92a;&#x94b;&#x930;&#x94d;&#x91f;</option>
<option value="7" >&#x938;&#x930;&#x94d;&#x935;&#x93f;&#x938; &#x92a;&#x939;&#x91a;&#x93e;&#x928; &#x92a;&#x924;&#x94d;&#x930; &#x28;&#x915;&#x947;&#x902;&#x926;&#x94d;&#x930;, &#x930;&#x93e;&#x91c;&#x94d;&#x92f;, &#x938;&#x93e;&#x930;&#x94d;&#x935;&#x91c;&#x93e;&#x928;&#x93f;&#x915;&#x29;</option>
<option value="8" >&#x92a;&#x93e;&#x938;&#x92c;&#x941;&#x915; &#x28;&#x92b;&#x94b;&#x91f;&#x94b; &#x938;&#x939;&#x93f;&#x924; &#x92c;&#x948;&#x902;&#x915; &#x2f;&#x921;&#x93e;&#x915;&#x918;&#x930; &#x926;&#x94d;&#x935;&#x93e;&#x930;&#x93e; &#x91c;&#x93e;&#x930;&#x940;&#x29;</option>
<option value="9" >&#x938;&#x94d;&#x92e;&#x93e;&#x930;&#x94d;&#x91f; &#x915;&#x93e;&#x930;&#x94d;&#x921; &#x28;&#x936;&#x94d;&#x930;&#x92e; &#x92e;&#x902;&#x924;&#x94d;&#x930;&#x93e;&#x932;&#x92f; &#x915;&#x940; &#x92f;&#x94b;&#x91c;&#x928;&#x93e; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x91c;&#x93e;&#x930;&#x940;&#x29;</option>
<option value="10" >&#x938;&#x94d;&#x935;&#x93e;&#x938;&#x94d;&#x925;&#x94d;&#x92f; &#x92c;&#x940;&#x92e;&#x93e; &#x938;&#x94d;&#x92e;&#x93e;&#x930;&#x94d;&#x91f; &#x915;&#x93e;&#x930;&#x94d;&#x921; &#x28;&#x936;&#x94d;&#x930;&#x92e; &#x92e;&#x902;&#x924;&#x94d;&#x930;&#x93e;&#x932;&#x92f; &#x915;&#x940; &#x92f;&#x94b;&#x91c;&#x928;&#x93e; &#x915;&#x947; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x91c;&#x93e;&#x930;&#x940;&#x29;</option>
<option value="11" >&#x92a;&#x947;&#x902;&#x936;&#x928; &#x926;&#x938;&#x94d;&#x924;&#x93e;&#x935;&#x947;&#x91c; &#x28;&#x92b;&#x94b;&#x91f;&#x94b; &#x938;&#x939;&#x93f;&#x924;&#x29;</option>
<option value="12" >&#x938;&#x930;&#x915;&#x93e;&#x930;&#x940; &#x92a;&#x939;&#x91a;&#x93e;&#x928; &#x92a;&#x924;&#x94d;&#x930; &#x28;&#x938;&#x93e;&#x902;&#x938;&#x926;, &#x935;&#x93f;&#x927;&#x93e;&#x92f;&#x915; &#x914;&#x930; &#x935;&#x93f;&#x927;&#x93e;&#x928; &#x92a;&#x930;&#x93f;&#x937;&#x926; &#x938;&#x926;&#x938;&#x94d;&#x92f;&#x94b;&#x902; &#x915;&#x94b; &#x91c;&#x93e;&#x930;&#x940;&#x29;</option>
</select>
<label class="error" style="display: none;" for="90866"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="90867"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
.
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input type="hidden" name="90867_fileUp" value="true"/>
<input type="hidden" name="doc_minImageSize" id="doc_minImageSize" value="20"/>
<input type="hidden" name="doc_maxImageSize" id="doc_maxImageSize" value="1024"/>
<input type="hidden" name="doc_allowed" id="doc_allowed" value="pdf,doc,docx,xls,xlsx,dwg,kmz,kml,mp4,m4v,mpg,wmv,mov,avi"/>
<input type="text"   name="90867_additionalDoc" id="90867_additionalDoc" value=""  size="1024"  tabindex="57"  style="width:34.5%;margin-right: 6px;" placeholder="Additional document name" data-datatype="fileUp"   />																
<input type="file"  data-type="file_doc"  class="imageDoc" id="90867" name="90867"  />		
<label class="error" for="90867" style="display: none;"></label>
<input type="hidden" class="imageData" name="90867_image" id="90867_image" value=""/>
</div>
</div>
</div>
<div class="trow">
<div class="tdata">
<label class="lbl" for="90868"
style="font-family:Arial;font-size:14px; color:#000;width:90%;">
&#x92d;&#x930;&#x93e; &#x939;&#x941;&#x906; &#x906;&#x935;&#x947;&#x926;&#x928; &#x92a;&#x924;&#x94d;&#x930; &#x938;&#x92d;&#x940; &#x905;&#x928;&#x941;&#x932;&#x917;&#x94d;&#x928;&#x915;&#x94b;&#x902; &#x915;&#x947; &#x938;&#x93e;&#x925;
</label>
<div class="cont" style="margin-left:%;width:70%;">
<select id="90868" name="90868" class="searchDrop" tabindex="58" style="width:70%;" data-datatype="dropDown" data-groupno="93"   >
<option value="">
Please Select</option>
<option value="1" >&#x92d;&#x930;&#x93e; &#x939;&#x941;&#x906; &#x906;&#x935;&#x947;&#x926;&#x928; &#x92a;&#x924;&#x94d;&#x930; &#x938;&#x92d;&#x940; &#x905;&#x928;&#x941;&#x932;&#x917;&#x94d;&#x928;&#x915;&#x94b;&#x902; &#x915;&#x947; &#x938;&#x93e;&#x925;</option>
</select>
<label class="error" style="display: none;" for="90868"></label>	
</div>
</div>
<div class="tdata">
<label class="lbl" for="90869"
style="font-family:Arial;font-size:14px; color:#000;width:49%;">
..
</label>
<div class="cont" style="margin-left:%;width:50%;">
<input type="hidden" name="90869_fileUp" value="true"/>
<input type="hidden" name="doc_minImageSize" id="doc_minImageSize" value="20"/>
<input type="hidden" name="doc_maxImageSize" id="doc_maxImageSize" value="1024"/>
<input type="hidden" name="doc_allowed" id="doc_allowed" value="pdf,doc,docx,xls,xlsx,dwg,kmz,kml,mp4,m4v,mpg,wmv,mov,avi"/>
<input type="text"   name="90869_additionalDoc" id="90869_additionalDoc" value=""  size="1024"  tabindex="59"  style="width:34.5%;margin-right: 6px;" placeholder="Additional document name" data-datatype="fileUp"   />																
<input type="file"  data-type="file_doc"  class="imageDoc" id="90869" name="90869"  />		
<label class="error" for="90869" style="display: none;"></label>
<input type="hidden" class="imageData" name="90869_image" id="90869_image" value=""/>
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
<label class="lbl" for="74559"
style="font-family:Arial;font-size:14px; color:#000;width:99%;">
Self Declaration
</label>
<div class="cont" style="margin-left:%;width:99%;">
<textarea id="74559" name="74559" style="width:99%;" size="" tabindex="60" placeholder="" minlength="0" maxlength="5000"  scriptNames="^[\p{Devanagari}\p{Latin}\p{CommonWithNumbers}]+$" allowedLanguages="Hindi/English" ></textarea>
<label class="error" for="74559" style="display: none;"></label>	
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
<input type="checkbox" value="Y" name="74561" id="74561" required="true" data-type="agreeText"/>
I Agree
<span class="mandatory">*</span>
</label>
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
<input type="hidden" name="derived_service_id" id="derived_service_id" value="4630012"/>
<input type="hidden" name="derivedFieldEditableFlag" id="derivedFieldEditableFlag" value="1"/>
<input type="hidden" name="derived_identifier_fieldSource" id="derived_identifier_fieldSource" value="A"/>	

 <input type="hidden" name="derived_identifier_attr_id" value="78174"/>
 <input type="hidden" name="derived_identifier_attr_inputtype" value="text"/>

 <input type="hidden" name="derived_identifier_attr_id" value="78248"/>
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
	
	
	
	
	
	<input type="hidden" id="serviceId" value="4630012">
	<input type="hidden" id="appliedServiceId" value="4630012">
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
var uidJson='[{"id":9,"versionNo":12,"serviceId":4630012,"uidAttrId":56925,"nameAttrId":78250,"attrType":0}]';
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
	   var combinedJson = '{"attribute":{"17288":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"74559":{"exception":"","type":"textArea","ekyc_attr":"null","values":{"value":""}},"17285":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"17287":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"64876":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"64877":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"78248":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"90837":{"exception":"","type":"image","ekyc_attr":"null","values":{"value":""}},"17299":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90792":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"94358":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"72426":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"90793":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"65015":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17296":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17494":{"exception":"","type":"image","ekyc_attr":"null","values":{"value":""}},"17297":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17298":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"17291":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17292":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17293":{"exception":"","type":"mobileNo","ekyc_attr":"null","values":{"value":""}},"17294":{"exception":"","type":"email","ekyc_attr":"null","values":{"value":""}},"75298":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"74561":{"exception":"","type":"agreeText","ekyc_attr":"null","values":{"value":""}},"75297":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"74560":{"exception":"","type":"declareText","ekyc_attr":"null","values":{"value":""}},"75296":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17290":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"75295":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"75294":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"75293":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"75292":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"75291":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"75290":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"56981":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"90866":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"90868":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"90867":{"exception":"","type":"fileUp","ekyc_attr":"null","values":{"value":""}},"90869":{"exception":"","type":"fileUp","ekyc_attr":"null","values":{"value":""}},"92201":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17300":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"17301":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"92200":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41650":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"71542":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90786":{"exception":"","type":"hidden","ekyc_attr":"null","values":{"value":""}},"41578":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"59461":{"exception":"","type":"label","ekyc_attr":"null","values":{"value":""}},"60011":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"90772":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41565":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"41602":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"17391":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"41567":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"41566":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"78251":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"59470":{"exception":"","type":"blank","ekyc_attr":"null","values":{"value":""}},"78174":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"78250":{"exception":"","type":"fullName","ekyc_attr":"null","values":{"value":""}},"78176":{"exception":"","type":"button","ekyc_attr":"null","values":{"value":""}},"56886":{"exception":"","type":"custLGDHierarchy","ekyc_attr":"null","values":{"value":""}},"56887":{"exception":"","type":"text","ekyc_attr":"null","values":{"value":""}},"63928":{"exception":"","type":"dropDown","ekyc_attr":"null","values":{"value":""}},"60467":{"exception":"","type":"checkBox","ekyc_attr":"null","values":{"value":""}},"60021":{"exception":"","type":"radio","ekyc_attr":"null","values":{"value":""}},"56925":{"exception":"","type":"AadhaarNumber","ekyc_attr":"null","values":{"value":""}}}}' ;
	   var ekycJson = '' != null && '' != ''? $.parseJSON(''):'';
	   var jsonData ='' != null && '' != ''? $.parseJSON(''):'';
	   var applicationId='';
	   var autoFilledValJson ='' != null && '' != ''? $.parseJSON(''):'';
	   var tokenID="OWASP_CSRFTOKEN="+$('#csrfTokeID').val();
	   var draftRefNo     = '';
	   var mappingFlag  	  = 'true';
       var stateId       	  = '10';
       var attrId			  = '17298';
       var statusApp          =  'S';
       var pageload=false;
       var userChoice		  = '';
       var listValue		  = '';
       var locationId 		  = '';
       var selectedDeptLevel  = '';
	   var selectedLeveStr    ='';
	   var selectedAttrId     = '';
	   var serviceId          =  $('#serviceId').val();// '4630012'; 
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
			 form.action = "applyPageForm.do";//?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a
			 form.submit();
			$('#SubmitButton').attr('disabled', 'disabled');
		}
		
		function FormReset(source){
			if(confirm('Are you sure you want to reset the form?')){
				if(source=="E"){
					//window.location="editApplicationForm.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&applicationRefNo=&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a&grievanceRefNo=";
					var url="editApplicationForm.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&applicationRefNo=&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a&grievanceRefNo=";
					formPost(url);
				}else{
					//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&serviceId=4630012&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a&grievanceRefNo=";
					var url="renderApplicationForm.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&serviceId=4630012&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a&grievanceRefNo=";
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
							window.location="appliedService.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
						}else if(source == "CTZN" || source=="CS"){ 
							var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";								
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
								formPost(url);
							}
						}else{
						
							var datachk='';
							if(datachk.trim()=="Y"){
								 window.history.back();
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
								formPost(url);
							}
						}		
							
					}
				 }
	  	}
		function FormClose(source){
			if(source=="new"){
				//window.location="renderApplicationForm.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&serviceId=4630012&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a";
				var url="renderApplicationForm.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&serviceId=4630012&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a";
				formPost(url);
			}else{
				answer = confirm("Are you sure you want to close the form?");
				if (answer !="0"){
					if(source=="E"){
						window.location="appliedService.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
					}else if(source == "CTZN" || source=="CS"){ 
						var isUrlServiceLink = false;
							if(isUrlServiceLink){
								window.location="serviceLinkHome.html?serviceToken=&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
							}else{
								//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
								var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
								formPost(url);
							}
					}else{
						
						var datachk='';
						if(datachk.trim()=="Y"){
							 window.history.back();
						}else{
							//window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
							var url = "beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
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
					var url="viewLGDDepartment.do?spdiStateId="+spdiStateId+"&spdiAttributeId="+spdiAttributeId+"&OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
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
					Android.androidFucHelpDocApplForm("-_-4630012-_-751");
				} else {
					var url="viewHelpDoc.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&fileName=&serviceId=4630012&templId=751";
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
					 form.action = "saveApplDraft.do";//?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB&UUID=35e51ab4-14eb-44f8-a410-512c3e5dcf2a
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
							
<script type="text/javascript" src="resources/js/servicespecificjs/10/4630012_751.js"
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
	 window.location="beneficiaryPrimaryServiceList.do?OWASP_CSRFTOKEN=ONNE-WRDU-LWEL-Q9Y2-0W1M-72P4-VPUG-8PUB";
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


