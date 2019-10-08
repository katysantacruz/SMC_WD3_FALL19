$(document).ready(function(){
    // $("#mainTitle").addClass("pink");

    $("#colorChange").click(changeColor);
    $("#addDiv").click(addStuff);


    function changeColor(){
        $("#mainTitle").toggleClass("blue");
        $("#subTitle").toggle();
        // if( $("#mainTitle").hasClass("pink") ) {
        //     $("#mainTitle").removedClass("pink");
        //     $("#mainTitle").addClass("blue");

        // }
        // else if ( $("#mainTitle").hasClass("pink") ) {
        //     $("#mainTitle").removedClass("pink");
        //     $("#mainTitle").addClass("blue");
        // }
        //  else {
        // $("#mainTitle").addClass("pink");
        //  }
    }
    function addStuff (){
        $("#mainTitle").append("<span style='color:red'>Ha,ha,ha!</span>")
    }

})