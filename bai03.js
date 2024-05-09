function convertString() {
    const inputString = document.getElementById('inputString').value;
    const friendlyURL = convertToFriendlyURL(inputString);
    document.getElementById('result').textContent = friendlyURL;
  }

  function convertToFriendlyURL(inputString) {
    //Đổi chữ hoa thành chữ thường
    str = inputString.toLowerCase();
    //Xóa 2 kí tự trắng
    str=str.trim();
    str = str.replace(/ +/g, " ");
    //đổi khoảng trắng thành -
    str = str.replace(/ +/g, "-");
    //Xóa tag HTML
    str = str.replace(/<[^>]*>/g,"");
    //Xóa kí tự đặc biệt
    // Chuyển đổi sang dạng chuẩn Unicode
    str = str.normalize('NFD');
    // Loại bỏ dấu sắc
    str = str.replace(/[\u0301\u0300]/g, '');
    // Loại bỏ dấu huyền
    str = str.replace(/[\u0302\u0303]/g, '');
    // Loại bỏ dấu hỏi
    str = str.replace(/[\u0306]/g, '');
    // Loại bỏ dấu mũ
    str = str.replace(/[\u0304]/g, '');
    // Loại bỏ dấu nặng
    str = str.replace(/[\u030C]/g, '');
    // Loại bỏ dấu thòng
    str = str.replace(/[\u030F]/g, '');
    // Chuyển đổi thành chữ thường
    str = str.toLowerCase();
    // Loại bỏ ký tự đặc biệt
    str = str.replace(/[^\w\s-]/g, '');
    // Loại bỏ khoảng trắng thừa
    str = str.replace(/\s+/g, '-');
    str = str.replace(/--+/g, "-");
    str = str.replace(/-([^\-])/, "$1");

    return str;
  }