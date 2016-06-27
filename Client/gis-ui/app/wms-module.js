var getCapResp;

var respProcess = function ( resp ) {
        $("#wmsresponse > figure > pre > code").text(resp);
		getCapResp = resp;
};
    
var getCap = function() 
//http://demo.opengeo.org/geoserver/ows
	var u = $$("#wmsSrvUrl").val();
	$.ajax({
	           url: u,
	           data: {
		          service: "wms",
		          version: "1.3.0",
		          request: "GetCapabilities"
	           },
	           type: "GET",
	           dataType: "xml",
	           crossDomain: true 
	       })
              .done(function( resp ) {
                respProcess(resp);
          })
              .fail(function( xhr, status, errorThrown ) {
              alert("OOps");
              console.log( "Error: " + errorThrown );
              console.log( "Status: " + status );
              console.dir(xhr);
          })
              .always(function( xhr, status ) {
              console.log("Request complete");
          });
    };
