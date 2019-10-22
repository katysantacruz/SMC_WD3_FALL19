
$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");
    

  });


  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $( "#exampleInputPassword1" ).validate({
    rules: {
      field: {
        required: true,
        minlength: 8
      }
    }
  });

 
    

