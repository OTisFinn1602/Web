$(document).ready(function(e){
    let i = 1;
    let dongia = $("#dongia");
    let kyhan = $("#kyhan");
    let valueSelect;

    let check = $("input[type = 'checkbox']");
    let strCheck;
    let countCheck = 0;
    
    let ttll = $("#lienlac");
    let sdt = $("#sdt");
    let add = $("#add");

    let pay = $("input[type = 'radio']");
    let pay1 = $("input:radio[value='Chuyen khoan']");
    let pay2 = $("input:radio[value='Tien mat']");
    let strPay = "";

    check.change(function() {
        checkChange = $("input[type = 'checkbox']:checked");
        strCheck = "";
        for(val of checkChange){
            strCheck += val.value + ", ";
            countCheck++;
        }
        console.log(strCheck);
    })

    kyhan.change(function() {
        valueSelect = $('#kyhan option:selected').val();
        console.log('value:' +valueSelect);

        if(valueSelect == 3)
            dongia.val('300000');
        else if(valueSelect == 6)
            dongia.val('500000');
        else if(valueSelect == 12)
            dongia.val('800000');
        else
            dongia.val('Error!');
    })

    function checkTTLL(){
        let tblienlac = $('#tblienlac');
        let re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if(ttll.val() == "") {
            tblienlac.html('* Trường này không được để trống');
            return false;
        }else if(!re.test(ttll.val())) {
            tblienlac.html('* Chữ cái đầu phải viết hoa');
            return false;
        }
        tblienlac.html('');
        return true;
    }
    ttll.blur(checkTTLL);

    function checkNumPhone(){
        let tbsdt = $('#tbsdt');
        let re = /((03|09|07|08)+([0-9]{8})\b)/g
        if(sdt.val() == "") {
            tbsdt.html('* Trường này không được để trống');
            console.log(tbsdt);
            return false;
        }
        if(!re.test(sdt.val())){
            tbsdt.html('* SĐT gồm 10 số bắt đầu bởi 09|07|08');
            return false;
        }
        tbsdt.html('');
        return true;
    }
    sdt.blur(checkNumPhone);

    function checkAddress(){
        let tbadd = $('#tbadd');
        if(add.val() == ""){
            tbadd.html('* Trường này không được để trống');
            return false;
        }
        tbadd.html('');
        return true;
    }
    add.blur(checkAddress);

    pay.change(function() {
        if($(this).val() == 'Chuyen khoan'){
            strPay = "Chuyen khoan";
            pay2.prop('checked',false);
        }else {
            strPay = "Tien mat";
            pay1.prop('checked',false);
        }
        console.log(strPay);
    })

    function TongThanhTien(){
        return parseInt(dongia.val()) * parseInt(countCheck);
    }

    $('#btnDB').click( function() {
        let tien = TongThanhTien();
        if(checkTTLL() && checkNumPhone() && checkAddress()){
            let row = '<tr><td>' + (i++) +'</td><td>' + strCheck + '</td><td>' + 
            valueSelect + ' tháng' + '</td><td>' + ttll.val() +'</td><td>' + 
            add.val() + '</td><td>' + tien + '</td><td>' + strPay +'</td></tr>';
            $("table").append(row);
            return false;
        }else{
            alert('Thông tin nhập vào chưa đúng');
            checkTTLL();
            checkNumPhone();
            checkAddress();
        }
        return true;
    })
})