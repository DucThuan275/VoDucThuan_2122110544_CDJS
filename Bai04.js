const giaTri = document.getElementById('giaTri');
const donViNhap = document.getElementById('donViNhap');
const donViDich = document.getElementById('donViDich');
const kq = document.getElementById('kq');
function chuyenDoi() {
    const value = parseFloat(giaTri.value);
    const donViNhapValue = donViNhap.value;
    const donViDichValue = donViDich.value;
    if (isNaN(value) || value === 0) {
        kq.textContent = 'Giá trị không hợp lệ';
        return;
    }
    let result;
    switch (donViNhapValue) {
        case 'met':
            switch (donViDichValue) {
                case 'cm':
                    result = value * 100;
                    break;
                case 'mm':
                    result = value * 1000;
                    break;
                case 'feet':
                    result = value * 3.28084;
                    break;
                case 'inch':
                    result = value * 39.37;
                    break;
                default:
                    result = value;
            }
            break;
        // Tương tự cho các đơn vị nhập khác
        default:
            kq.textContent = 'Đơn vị nhập không hợp lệ';
            return;
    }
    kq.textContent = `${value} ${donViNhapValue} = ${result.toFixed(2)} ${donViDichValue}`;
}