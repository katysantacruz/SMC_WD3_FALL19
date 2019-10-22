
$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");
    

     
  });


  
  $( "#exampleInputPassword1" ).submit({
    rules: {
      field: {
        required: true,
        minlength: 8
      }
    }
  });

  
    




