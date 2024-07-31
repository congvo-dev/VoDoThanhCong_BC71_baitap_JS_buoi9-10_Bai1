var DSNV = [];
var data = localStorage.getItem("DSNV_JSON");
var nvArr = JSON.parse(data);
for (var i=0; i<nvArr.length; i++) {
    var data = nvArr[i];
    var nv = new NhanVien(
        data.user, 
        data.name, 
        data.email, 
        data.pass, 
        data.date, 
        data.base, 
        data.role, 
        data.hour,
    );
    DSNV.push(nv);
}
console.log("DSNV:",DSNV);
renderDSNV();
function themNhanVien() {
    var nv = layThongTinNhanVien();

    if (allTest(nv)) {
        DSNV.push(nv);
        var jsonDSNV = JSON.stringify(DSNV);
        localStorage.setItem("DSNV_JSON", jsonDSNV);
        console.log("DSNV:",DSNV);
        renderDSNV();
    }
}

function xoaNv(user) {
    var viTri = DSNV.findIndex(function(item){
        return item.user == user;
    })
    if (viTri != -1) {
        DSNV.splice(viTri,1);
    }
    console.log("DSNV:",DSNV);
    var jsonDSNV = JSON.stringify(DSNV);
    localStorage.setItem("DSNV_JSON", jsonDSNV);
    renderDSNV();
}

function suaNv(user) {
    var viTri = DSNV.findIndex(function(item){
        return item.user == user;
    })
    var nv = DSNV[viTri];
    document.getElementById("tknv").value = nv.user;
    document.getElementById("name").value = nv.name;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.pass;
    document.getElementById("datepicker").value = nv.date;
    document.getElementById("luongCB").value = nv.base;
    document.getElementById("chucvu").value = nv.role;
    document.getElementById("gioLam").value = nv.hour;
    document.getElementById("tknv").setAttribute("readonly",true);
}

function capNhatNv() {
    var sv = layThongTinNhanVien();
    if (allTest(sv)) {
        var viTri = DSNV.findIndex(function(item){
            return item.user == sv.user;
        })
        DSNV[viTri] = sv;
        var jsonDSNV = JSON.stringify(DSNV);
        localStorage.setItem("DSNV_JSON", jsonDSNV);
        renderDSNV();
    }
}

function timNv() {
    var tenLoaiCanTim = document.getElementById("searchName").value;

    var contentHTML = "";
    for ( i=0; i<DSNV.length; i++) {
        if (DSNV[i].xepLoai() == tenLoaiCanTim) {
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
            document.getElementById("tableDanhSach").innerHTML = contentHTML;       
        }
    }
    if (contentHTML.length == 0) {
        alert("Không tìm thấy nhân viên có loại này");
    }     

}