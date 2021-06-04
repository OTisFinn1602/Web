$(document).ready(function(e) {
    $('#dangKy').click(function () {
        let hoTen = $('#hoTen').val();
        let lop = $('#lstLop option:selected').val();
        let monHoc = $('#lstMonHoc option:selected').val();
        let loai = $("input[type = 'radio']:checked").val();
        let item = '<tr><td>' + hoTen + '</td><td>' + lop + '</td><td>' + monHoc + '</td><td>' + loai + '</td></tr>';
        $('table tbody').append(item);
        return true;
    })
}) 