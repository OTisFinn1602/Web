$(document).ready(() => {
    var stt = 1;
    var txtName = $("#txtName");
    var tbName = $("#tbName");

    var txtPhone = $("#txtPhone");
    var tbPhone = $("#tbPhone");

    var txtDate = $("#txtDate");
    var tbDate = $("#tbDate");

    var txtTime = $("#txtTime");
    var tbTime = $("#tbTime");

    var txtSN = $("#txtSN");
    var tbSN = $("#tbSN");

    // var txtGC = $("#txtGC");

    //kiem tra ho va ten
    function KtName() {
        var re = /^[A-Z][a-z]|(\s[A-Z][a-z]+)+$/;
        if (txtName.val() == "") {
            tbName.html("Vui long dien thong tin!");
            return false;
        }
        if (!re.test(txtName.val())) {
            tbName.html("vd: Aa Bb Cc");
            return false;
        }
        tbName.html("");
        return true;
    }
    txtName.blur(KtName);
    // kiem tra so dien thoai
    function KtPhone() {
        var re = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
        if (txtPhone.val() == "") {
            tbPhone.html("Vui long dien thong tin!");
            return false;
        }
        if (!re.test(txtPhone.val())) {
            tbPhone.html("vd: (84+)0000 000");
            return false;
        }
        tbPhone.html("");
        return true;
    }
    txtPhone.blur(KtPhone);
    // kiem tra ngay nhan tiec
    function KtDate() {
        if (txtDate.val() == "") {
            tbDate.html("Vui long dien thong tin!");
            return false;
        }
        var day = new Date(txtDate.val());
        var today = new Date();
        today.setDate(today.getDate())
        if (day < today) {
            tbDate.html("Vui long nhap ngay lon hon ngay hien tai");
            return false;
        }
        tbDate.html("");
        return true;
    }
    txtDate.blur(KtDate);
    // kiem tra gio nhan tiec
    function KtTime() {
        if (txtTime.val() == "") {
            tbTime.html("Vui long dien thong tin!");
            return false;
        }
        // var time = new time(txtTime.val());
        // var totime = new Date();
        // totime.setDate(totime.getHours() + ":" + totime.getMinutes() + ":" + totime.getSeconds())
        tbTime.html("");
        return true;
    }
    txtTime.blur(KtTime);
    // Kiem tra so nguoi
    // Xin regex vì re ở dưới ko kiểm tra được số 10 
    function KtSN() {
        var re = /^[1-9]{1,}$/;
        if (txtSN.val() == "") {
            tbSN.html("Vui long dien thong tin!");
            return false;
        }
        if (!re.test(txtSN.val())) {
            tbSN.html("Vui long nhap so luong nguoi nhieu hon 1");
            return false;
        }
        tbSN.html("");
        return true;
    }
    txtSN.blur(KtSN);
    // Kiem tra loai tiec
    // addRow
    //Nhập thông tin Name rồi bấm Lưu thì nó xuất ra thành công.
    //Còn nhập full thông tin thì nó không lưu được.
    //Nó không lấy được dữ liệu nhập từ loại tiệc, loại phòng, thành viên, dịch vụ.
    $("#BtnSave").click(() => {
        if (KtName() && KtPhone() && KtDate() && KtTime() && KtSN()) {
            // var loaitiec = $('select option:selected').text();
            var LP = "";
            if ($("#vip").is(":checked")) {
                LP += "VIP"
            }
            if ($("#thuong").is(":checked")) {
                LP += "THUONG"
            }
            var DV = "";
            if ($("#ckb-NV").is(":checked")) {
                DV += "Nhan vien phuc vu rieng"
            }
            if ($("#ckb-HT").is(":checked")) {
                DV += "Hoa tuoi"
            }
            var TV = "";
            if ($("#TV").is(":checked")) {
                TV += "Thanh Vien"
            }

            var row = "<tr><td>";
            row += (stt++) + "</td><td>";
            row += txtName.val() + "</td><td>";
            row += txtPhone.val() + "</td><td>";
            row += txtDate.val() + "</td><td>";
            row += txtTime.val() + "</td><td>";
            row += txtSN.val() + "</td><td>";
            row += $("select option:selected").text() + "</td><td>";
            row += LP + "</td><td>";
            row += TV + "</td><td>";
            row += DV + "</td><td>";
            row += $("#txtGC").val() + "</td></td>";
            row += "</tr>";
            $("tbody").append(row);
            $("#myModal").modal('hide');
        }
    })
})