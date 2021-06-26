$(document).ready(function(){
    // Kiem tra ten
    var txtName = $("#txtName");
    var tbName = $("#tbName");
    function KtName() {
        var re = /^[A-Z][a-z]+(\s[A-z][a-z]+)+$/;
        if(txtName.val() == ""){
            tbName.html("Bắt buộc nhập");
            return false;
        }
        if(!re.test(txtName.val())){
            tbName.html("ví dụ: Tran Thanh Hung");
            return false;
        }
        tbName.html("");
        return true;
    }
    txtName.blur(KtName);

    // Kiem tra Số áo
    var txtNumber = $("#txtNumber");
    var tbNumber = $("#tbNumber");
    function KtNumber() {
        var re = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
        if(txtNumber.val() == ""){
            tbNumber.html("Bắt buộc nhập");
            return false;
        }
        if(!re.test(txtNumber.val())){
            tbNumber.html("ví dụ:Vui lòng nhập số hoặc nhập từ 1-100");
            return false;
        }
        tbNumber.html("");
        return true;
    }
    txtNumber.blur(KtNumber);

    // Kiem tra dia chi
    var txtAdd = $("#txtAdd");
    var tbAdd = $("#tbAdd");
    function KtAdd() {
        var re = /^[0-9\/]+[\sA-Za-z]+/gm;
        if(txtAdd.val() == ""){
            tbAdd.html("Bắt buộc nhập");
            return false;
        }
        if(!re.test(txtAdd.val())){
            tbAdd.html("Nhập sai, Vui lòng nhập lại.ví dụ: 16 Ha Noi ");
            return false;
        }
        tbAdd.html("");
        return true;
    }
    txtAdd.blur(KtAdd);

    // Kiem tra Ngày tập trung
    var txtDate = $("#txtDate");
    var tbDate = $("#tbDate");
    function KtDate() {
        if(txtDate.val() == ""){
            tbDate.html("Bắt buộc nhập");
            return false;
        }
        var day = new Date(txtDate.val());
        var today = new Date();
        today.setDate(today.getDate() + 7);
        if(day < today){
            tbDate.html("Ngày tập trung sau ngày hiện tại 7 ngày");
            return false;
        }
        tbDate.html("");
        return true;
    }
    txtDate.blur(KtDate);

    // Kiem tra so dien thoai
    var txtPhone = $("#txtPhone");
    var tbPhone = $("#tbPhone");
    function KtPhone() {
        var re = /^(0[1-9]{3})+(-[0-9]{3})+(-[0-9]{3})\b$/;
        if(txtPhone.val() == ""){
            tbPhone.html("Bắt buộc nhập");
            return false;
        }
        if(!re.test(txtPhone.val())){
            tbPhone.html("ví dụ:0xxx-xxx-xxx");
            return false;
        }
        tbPhone.html("");
        return true;
    }
    txtPhone.blur(KtPhone);

    // Kiem tra Img
    var txtImg = $("#txtImg");
    var tbImg = $("#tbImg");
    function KtraImg(){
        if(txtImg.val() == ""){
            tbImg.html("Add file!");
            return false;
        }
        tbImg.html("");
        return true;
    }
    txtImg.blur(KtraImg);

    var stt=1;
    $("#BtnSave").click(function(){
        if(KtName() , KtNumber(), KtDate(), KtPhone(), KtraImg()){
            var row = "<tr><td>";
            row += (stt++) + "</td><td>";
            row += txtName.val() + "</td><td>";
            row += txtNumber.val() + "</td><td>";
            row += txtAdd.val() + "</td><td>";
            row += txtDate.val() + "</td><td>";
            row += txtPhone.val() + "</td><td>";
            row += txtImg.val() + "</td></td>";
            row += "</tr>";
            $("tbody").append(row);
            $("#myModal").modal('hide');
        }
    })
})