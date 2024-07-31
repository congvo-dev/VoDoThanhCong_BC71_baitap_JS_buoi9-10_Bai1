// file chua lop du lieu NhanVien
function NhanVien (user, name, email, pass, date, base, role, hour) {
    this.user = user;
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.date = date;
    this.base = base;
    this.role = role;
    this.hour = hour;
    this.tinhLuong = function() {
        var luong = ""
        if (this.role == "Sếp") {
            luong = this.base *3;
            return luong.toLocaleString();
        } else if (this.role == "Trưởng phòng") {
            luong = this.base *2;
            return luong.toLocaleString();
        } else {
            luong = this.base;
            return luong.toLocaleString();
        }       
    };
    this.xepLoai = function() {
        if (this.hour >= 192) {
            return "Xuất sắc";
        } else if (176 <= this.hour && this.hour < 192) {
            return "Giỏi";
        } else if (160 <= this.hour && this.hour < 176) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    };
}

