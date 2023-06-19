import removeVietnameseTones from "../controllers/keysearch.js";
import * as result from "./Person.js";

export default class ListCompilation {
  constructor() {
    this.arr = [];
  }
  addPerson(person) {
    this.arr.push(person);
  }
  renderGiaoDien() {
    let content = this.arr.map((item, index) => {
      // console.log(item);
      let abc;
      if (item.tinhDiemTrungBinh) {
        abc = "Sinh Viên có Điểm TB là :" + item.tinhDiemTrungBinh();
      } else if (item.tinhLuong) {
        abc = "Nhân viên có Tổng lương là:" + item.tinhLuong();
      } else if (item.tenCongTy) {
        abc =
          "Khách hàng có tên công ty :" +
          item.tenCongTy +
          "\n" +
          "Đánh giá:" +
          item.danhGia;
      }
      // Object.assign(abc, item);
      let { idMaSo, hoTen, email, diaChi } = item;
      return ` 
      <tr >
      <td>${idMaSo}</td>
      <td>${hoTen}</td>
      <td>${email}</td>
      <td>${diaChi}</td>
      <td>${abc}<td>
      <td>
      <button class="btn btn-danger" onclick="deletePerson('${idMaSo}')">Xoá</button>
      <button class="btn btn-warning" onclick="getInforPerson('${idMaSo}')">Sửa</button>
      </td>
      </tr>`;
    });
    document.getElementById("tbodyForm").innerHTML = content;
  }
  saveLocal() {
    localStorage.setItem("arr", JSON.stringify(this.arr));
  }
  getLocal() {
    let personLocal = JSON.parse(localStorage.getItem("arr"));
    if (personLocal) {
      this.arr = [...personLocal];
      this.renderGiaoDien();
    }
  }
  deletePerson(idMaSo) {
    let index = this.arr.findIndex((item) => item.idMaSo == idMaSo);
    if (index != -1) {
      this.arr.splice(index, 1);
      this.renderGiaoDien();
      this.saveLocal();
    }
  }
  getInforPerson(idMaSo) {
    let person = this.arr.find((item) => item.idMaSo == idMaSo);
    console.log(person);
    if (person) {
      document.getElementById("btnThem").click();
      let arrInput = document.querySelectorAll("#controlForm input");
      console.log(arrInput);
      for (let item of arrInput) {
        let { id } = item;
        item.value = person[id];
      }
    }
  }
  editPerson(person) {
    let index = this.arr.findIndex((item) => item.idMaSo == person.idMaSo);
    console.log(index);
    if (index != -1) {
      this.arr[index] = person;
      this.renderGiaoDien();
      this.saveLocal();
      document.getElementById("btnClose").click();
    }
  }
  searchPerson(keyWord) {
    let newKey = removeVietnameseTones(keyWord);
    let arrTimKiem = this.arr.filter((item) => {
      let tenNguoiMoi = removeVietnameseTones(item.hoTen);
      return tenNguoiMoi
        .toLowerCase()
        .trim()
        .includes(newKey.toLowerCase().trim());
    });
    console.log(arrTimKiem);
    
  }
}
