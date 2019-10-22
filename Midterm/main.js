
$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");

    $("a1").click(function(){
      alert("Theres Nothing In Your Cart!");
    });
     
  });


  
  $( "#exampleInputPassword1" ).submit({
    rules: {
      field: {
        required: true,
        minlength: 8
      }
    }
  });

  
    




