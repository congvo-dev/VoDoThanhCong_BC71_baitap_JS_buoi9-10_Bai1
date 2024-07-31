function layThongTinNhanVien () {
    // co 8 truong thong tin
    var user = document.getElementById("tknv").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var date = document.getElementById("datepicker").value;
    var base = document.getElementById("luongCB").value*1;
    var role = document.getElementById("chucvu").value;
    var hour = document.getElementById("gioLam").value*1;

    var nv = new NhanVien (user, name, email, pass, date, base, role, hour);
    return nv;
}

function renderDSNV() {
    // co 7 cot
    var contentHTML = "";
    for (var i=0; i<DSNV.length; i++) {
        var nv = DSNV[i];
        var trContent = `<tr>
            <td>${nv.user}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.date}</td>
            <td>${nv.role}</td>
            <td>${nv.tinhLuong()}</td>
            <td>${nv.xepLoai()}</td>
            <td><button class="btn btn-danger" onclick="xoaNv(${nv.user})">Xóa</button>
            <button class="btn btn-warning" onclick="suaNv(${nv.user})"
            data-toggle="modal"
            data-target="#myModal">Sửa</button></td>
        </tr>`;
        contentHTML += trContent;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

