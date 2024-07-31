// empty
function emptyTest(value,idErr) {
    if(value.length == 0) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "không được để trống";
        return false;
    }
    document.getElementById(idErr).innerText = "";
    return true
}
// user
function userTest(value,idErr) {
    // kt độ dài của tài khoản
    if (value.length < 4 || value.length > 6) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Tài khoản tối đa 4 - 6 ký số";
        return false;
    }
    const isNumeric = /^\d+$/;
    var isValid = isNumeric.test(value);
    if (isValid) {
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).style.display= "block";
    document.getElementById(idErr).innerText = "Tài khoản tối đa 4 - 6 ký số";
    return false;
}
// name
function nameTest(value,idErr) {
    const regex = /^[a-zA-Z ]*$/;
    var isValid = regex.test(value);
    if (isValid) {
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).style.display= "block";
    document.getElementById(idErr).innerText = "Tên nhân viên phải là chữ";
    return false;
}
// email
function emailTest(value,idErr) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = regex.test(value);
    if (isValid) {
        document.getElementById(idErr).innerText = "";
        return true;
    }
    document.getElementById(idErr).style.display= "block";
    document.getElementById(idErr).innerText = "Email không hợp lệ";
    return false;   
} 
// pass
function passTest(value,idErr) {
    // kt độ dài của mật khẩu
    if (value.length < 6 || value.length > 10) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Mật khẩu chứa ít nhất 6-10 ký tự";
        return false;
    }

    // kt ít nhất 1 ký tự số
    const hasNumber = /\d/;

    // kt có ít nhất 1 ký tự in hoa
    const hasUpperCase = /[A-Z]/;

    // kt có ít nhất 1 ký tự đặc biệt
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    // Kiểm tra tất cả các điều kiện
    if (!hasNumber.test(value) || !hasUpperCase.test(value) || !hasSpecialChar.test(value)) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "(Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
        return false;
    }
    return true;
}
// date
function dateTest(value,idErr) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    isValid = regex.test(value);
    if (!isValid) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Ngày làm phải có định dạng mm/dd/yyyy";
        return false;
    }
    document.getElementById(idErr).innerText = "";
    return true
}
// base
function baseTest(value,idErr) {
    const isNumeric = /^\d+$/;
    isValid = isNumeric.test(value);
    if (!isValid) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Lương phải là số";
        return false;
    }
    if (value < 1000000 || value > 20000000) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Lương cơ bản 1 000 000 - 20 000 000";
        return false;
    }
    document.getElementById(idErr).innerText = "";
    return true
}
// role
function roleTest(value,idErr) {
    if (value == "Chọn chức vụ") {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)";
        return false;
    }
    document.getElementById(idErr).innerText = "";
    return true
}
// hour
function hourTest(value,idErr) {
    const isNumeric = /^\d+$/;
    isValid = isNumeric.test(value);
    if (!isValid) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Giờ làm phải là số";
        return false;
    }
    if (value < 80 || value > 200) {
        document.getElementById(idErr).style.display= "block";
        document.getElementById(idErr).innerText = "Số giờ làm trong tháng 80 - 200 giờ";
        return false;
    }
    document.getElementById(idErr).innerText = "";
    return true
}
// all
function allTest (nv) {
    var userIsValid =
    emptyTest(nv.user,"tbTKNV")
    && userTest(nv.user,"tbTKNV");
    //console.log("🚀 ~ themNhanVien ~ userIsValid:", userIsValid);

    var nameIsValid = 
    emptyTest(nv.name, "tbTen")
    && nameTest(nv.name, "tbTen"); 
    //console.log("🚀 ~ themNhanVien ~ nameIsValid:", nameIsValid);

    var emailIsValid = 
    emptyTest(nv.email,"tbEmail")
    && emailTest(nv.email,"tbEmail");
    //console.log("🚀 ~ themNhanVien ~ emailIsValid:", emailIsValid);
    
    var passIsValid = 
    emptyTest(nv.pass,"tbMatKhau")
    && passTest(nv.pass,"tbMatKhau");
    //console.log("🚀 ~ themNhanVien ~ passIsValid:", passIsValid);
    
    var dateIsValid =
    emptyTest(nv.date,"tbNgay")
    && dateTest(nv.date,"tbNgay");
    //console.log("🚀 ~ themNhanVien ~ dateIsValid:", dateIsValid)

    var baseIsValid =
    emptyTest(nv.base,"tbLuongCB")
    && baseTest(nv.base,"tbLuongCB");
    //console.log("🚀 ~ themNhanVien ~ baseIsValid:", baseIsValid)
    
    var roleIsValid= 
    emptyTest(nv.role,"tbChucVu")
    && roleTest(nv.role,"tbChucVu");
   //console.log("🚀 ~ themNhanVien ~ roleIsValid:", roleIsValid)

    var hourIsValid =
    emptyTest(nv.hour,"tbGiolam")
    && hourTest(nv.hour,"tbGiolam");
    //console.log("🚀 ~ themNhanVien ~ hourIsValid:", hourIsValid)

    var isValid = 
    userIsValid 
    && nameIsValid 
    && emailIsValid 
    && passIsValid
    && dateIsValid
    && baseIsValid
    && roleIsValid
    && hourIsValid ;
    return isValid;
}