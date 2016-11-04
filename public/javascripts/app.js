/**
 * Created by usuario on 10/8/15.
 */




$(function(){

    var buttonClicked = "";

    $(".operatorClicker").on("click",function(event){
        event.preventDefault();
        $(".operatorClicker").removeClass('selected');
        $(this).addClass("selected");
        buttonClicked = $(this).attr("class");
    });

        $(".equals").on("click", function(){
            event.preventDefault();
            var formData = $("#calculate").serialize();
            var splitButtonClicked = buttonClicked.split(" ");
            console.log("This is button clicked ______" + splitButtonClicked);
            switch(splitButtonClicked[0]){
                case "add":
                    addData(formData);
                    getAnswer();
                    buttonClicked = "";
                    break;
                case "subtract":
                    subtractData(formData);
                    getAnswer();
                    buttonClicked= "";
                    break;
                case "multiply":
                    multiplyData(formData);
                    getAnswer();
                    buttonClicked="";
                    break;
                case "divide":
                    divideData(formData);
                    getAnswer();
                    buttonClicked="";
                    break;
                default:
                    console.log("Switch is not working");
            }
        });

    function getAnswer() {
        $.ajax({
            url: "/calculate/getAnswer",
            type: "GET",
            success: function (data) {
                $(".answer").html("<p>" + data + "</p>")
            }
        });
    }

    function addData(formData){
        $.ajax({
            type:"POST",
            url: "/calculate/add",
            data: formData,
            success: function(data){
                console.log(data + "add worked");

            }
        });
    };

    function subtractData(formData){
        $.ajax({
            type:"POST",
            url: "/calculate/subtract",
            data: formData,
            success: function(data){
                console.log(data + "subtract worked");

            }
        });
    }

    function divideData(formData){
        $.ajax({
            type:"POST",
            url: "/calculate/divide",
            data: formData,
            success: function(data){
                console.log(data + "divide worked");

            }
        });
    };

    function multiplyData(formData){
        $.ajax({
            type:"POST",
            url: "/calculate/multiply",
            data: formData,
            success: function(data){
                console.log("multiply worked");

            }
        });
    };

});
