$(document).ready(function(e){
    var txtName = $("#txtName");
    var tbName = $("#tbName");
    function ktName(){
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if(txtName.val() == ""){
            tbName.html("nhap vo");
            return false;
        }
        if(!re.test(txtName.val())){
            tbName.html("nhap sai roi");
            return false;
        }
        tbName.html("");
        return true;
    }
    txtName.blur(ktName);
// ------------------------------
    var txtCMND = $("#txtCMND");
    var tbCMND = $("#tbCMND");
    function ktCMND(){
        var re = /^([0-9]{9,9})*$/;
        if(txtCMND.val() == ""){
            tbCMND.html("nhap vo");
            return false;
        }
        if(!re.test(txtCMND.val())){
            tbCMND.html("nhap sai roi");
            return false;
        }
        tbCMND.html("");
        return true;
    }
    txtCMND.blur(ktCMND);
// ------------------------------
    var txtAdd = $("#txtAdd");
    var tbAdd = $("#tbAdd");
    function ktAdd(){
        var re = /^[0-9\/]+[\sA-Za-z]+/gm;
        if(txtAdd.val() == ""){
            tbAdd.html("nhap vo");
            return false;
        }
        if(!re.test(txtAdd.val())){
            tbAdd.html("nhap sai roi");
            return false;
        }
        tbAdd.html("");
        return true;
    }
    txtAdd.blur(ktAdd);
// ---------------------------------------
    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");
    function ktEmail(){
        var re = /^[a-zA-Z0-9.\_\-]+@gmail.com$/;
        if(txtEmail.val() == ""){
            tbEmail.html("nhap vo");
            return false;
        }
        if(!re.test(txtEmail.val())){
            tbEmail.html("nhap sai roi");
            return false;
        }
        tbEmail.html("");
        return true;
    }
    txtEmail.blur(ktEmail);
// ---------------------------------------
    var txtPhone = $("#txtPhone");
    var tbPhone = $("#tbPhone");
    function ktPhone(){
        var re = /^(0[3|5|7|8|9][0-9]{8})$/;
        if(txtPhone.val() == ""){
            tbPhone.html("nhap vo");
            return false;
        }
        if(!re.test(txtPhone.val())){
            tbPhone.html("nhap sai roi");
            return false;
        }
        tbPhone.html("");
        return true;
    }
    txtPhone.blur(ktPhone);

// -----------------------------------------
    var stt = 1;
    $("#btnSave").click(function(){
        if(ktName(), ktCMND(), ktPhone(), ktEmail(), ktAdd()){
            var row = "<tr><td>"
            row += (stt++) + "</td><td>";
            row += txtName.val() + "</td><td>";
            row += txtCMND.val() + "</td><td>";
            row += txtAdd.val() + "</td><td>";
            row += txtEmail.val() + "</td><td>";
            row += txtPhone.val() + "</td><td>";
            row += $("#txtImg").val() + "</td><td>";
            row += "</tr>";

            $('tbody').append(row);
            $("#myModal").modal('hide');
        }
    })
})