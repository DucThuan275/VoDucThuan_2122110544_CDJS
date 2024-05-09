const danhSachMonHocUl = document.getElementById('danhSachMonHoc');
const formThemMonHoc = document.getElementById('formThemMonHoc');

formThemMonHoc.addEventListener('submit', function(event) {
  event.preventDefault();

  const tenMonHocInput = document.getElementById('tenMonHoc');
  const tenMonHoc = tenMonHocInput.value.trim();

  if (tenMonHoc === '') {
    alert('Vui lòng nhập tên môn học!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = tenMonHoc;

  // Thêm nút "Xóa" cho mỗi môn học
  const btnXoa = document.createElement('button');
  btnXoa.textContent = 'Xóa';
  btnXoa.addEventListener('click', function() {
    danhSachMonHocUl.removeChild(li);
  });

  li.appendChild(btnXoa); // Thêm nút "Xóa" vào li

  danhSachMonHocUl.appendChild(li); // Thêm li vào danh sách

  tenMonHocInput.value = ''; // Xóa nội dung input sau khi thêm
});










































// function validateTenMonHoc() {
//     const tenMonHoc = document.getElementById('tenmh').value;
//     if (tenMonHoc.trim() === '') {
//       alert('Vui lòng nhập tên môn học!');
//       return false; // Ngừng xử lý form nếu tên môn học trống
//     }
//     return true; // Tên môn học hợp lệ
//   }
  
//   // Ví dụ sử dụng:
//   const submitButton = document.getElementById('themmh');
//   submitButton.addEventListener('click', function() {
//     if (!validateTenMonHoc()) {
//       location.reload();
//       return;
//     }
//   });
  

// const themmh = document.querySelector("#themmh");

// themmh.addEventListener("click", function(){
//     const MonHoc = {
//         Tenmh:document.querySelector("#tenmh").value,
//         showMonHoc:function(){
//             const show = document.querySelector("#show");
//             str_old = show.innerHTML;
//             const str_new=`
//             <tr>
//                 <th>${this.Tenmh}</th>
//                 <td><button class="btn btn-danger delete">X</button></td>
//             </tr>
//             `;
//             str_old+=str_new;
//             show.innerHTML = str_old;
//         }
//     }
//     MonHoc.showMonHoc();
// });

// const deleteButtons = document.querySelectorAll('.delete');

// deleteButtons.forEach(button => {
//   button.addEventListener('click', function(event) {
//     const row = event.target.closest('tr'); // Lấy hàng chứa nút "Xóa"
//     row.parentNode.removeChild(row); // Xóa hàng khỏi bảng
//   });
// });
