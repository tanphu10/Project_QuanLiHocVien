// class emptyTest (checkInput, idInfo) {
//     // check xem input đó có được nhập dữ liệu vào hay không nếu không có thì báo lỗi và trả về một kết quả false , nếu có trả về true
//     if (checkInput) {
//       document.getElementById(idInfo).innerHTML = "";
//       return true;
//     } else {
//       document.getElementById(idInfo).innerHTML = "***please this input inside";
//       return false;
//     }
//   }

  
// function checkEmail(checkInput, idInfo) {
//     var regexEmail =
//       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (regexEmail.test(checkInput)) {
//       document.getElementById(idInfo).innerHTML = "";
//       return true;
//     } else {
//       document.getElementById(idInfo).innerHTML = "***please input form email";
//       return false;
//     }
//   }