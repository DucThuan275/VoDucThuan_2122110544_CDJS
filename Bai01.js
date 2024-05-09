function validateForm() {
    try{
        //ho ten
        const hoTen = document.getElementById('hoTen');
        if(hoTen.value.length == 0){
            hoTen.focus();
            throw "Họ tên không được để trống!";
        }
        //so dien thoai
        const soDienThoai = document.getElementById('dienThoai');
        const pattenrnPhone = /^0[3|5|7|8|9][0-9]{8}$/;
        if(pattenrnPhone.test(soDienThoai.value)==false){
            soDienThoai.focus();
            throw "Số điện thoại không hợp lệ!";
        }
        //email address
        const Email = document.getElementById('email');
        const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (patternEmail.test(Email.value)==false){
            Email.focus();
            throw "Email không hợp lệ!";
        }
        //massv 
        const maSV = document.getElementById('maSV');
        const pattenrnMassv =/21\d{8}$/;
        if(pattenrnMassv.test(maSV.value)==false){
            maSV.focus();
            throw "Mã sinh viên không hợp lệ!";
        }
        // Ma lop
        const MaLop = document.getElementById('malop');
        const checkResult = /^CCQ\d{4}[0-9A-Z]{1,2}$/;
        if(checkResult.test(MaLop.value)==false){
            MaLop.focus();
            throw "Mã lớp không hợp lệ!";
        }
        return true;
    }
    catch(error){
        console.log(error);
    }
    return false;
}