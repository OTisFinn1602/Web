$(document).ready(function(e){
    $("#Login").click(function(){
        $("#myModal").modal();
    });

    function KtraEmail(){
        var re = /^[a-zA-Z0-9.\_\-]+@(gmail)+.com$/;
        if($("#Email").val() == ""){
            $("#tbEmail").html("Vui long nhap email!");
            return false;
        }
        if(!re.test($("#Email").val())){
            $("#tbEmail").html("Error! vd: abc123@gmail.com");
            return false;
        }
        $("#tbEmail").html("");
        return true;
    }
    $("#Email").blur(KtraEmail);

    function KtraPass(){
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if($("#Pass").val() == ""){
            $("#tbPass").html("Vui long nhap password!");
            return false;
        }
        if(!re.test($("#Pass").val())){
            $("#tbPass").html("Tối thiểu tám ký tự, ít nhất một chữ hoa, một chữ thường và một số!");
            return false;
        }
        $("#tbPass").html("");
        return true;
    }
    $("#Pass").blur(KtraPass);
    
    function KtraCheck(){
        var KMSI = $("#Check").val();
        if(KMSI == ''){
            $("#tbCheck").html("abc");
            return false;
        }
        $("#tbCheck").html("aaa");
        return true;
    }
    $("input[type = 'checkbox']:checked").blur(KtraCheck);

    $("#myBtn").click(function(){
        if(KtraEmail() == true && KtraPass() == true && KtraCheck() == true){
            alert("Login successful");
            $("#myModal").modal("hide");
            return false;
        }
        return false;
    })
    return false;
})