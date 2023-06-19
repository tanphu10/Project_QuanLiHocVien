import { SinhVien, NhanVien, KhachHang } from "../models/Person.js";
import ListCompilation from "../models/ListPerson.js";

let selectElemen = document.getElementById("chonVitri");
let displaySv = document.getElementById("sinhVien");
let displayNv = document.getElementById("nhanVien");
let displayKh = document.getElementById("khachHang");
selectElemen.addEventListener("change", () => {
  let changeABC = selectElemen.value;
  if (changeABC == "SinhVien") {
    displaySv.style.display = "block";
    displayNv.style.display = "none";
    displayKh.style.display = "none";
  } else if (changeABC == "NhanVien") {
    displaySv.style.display = "none";
    displayKh.style.display = "none";
    displayNv.style.display = "block";
    return;
  } else if (changeABC == "KhachHang") {
    displayKh.style.display = "block";
    displayNv.style.display = "none";
    displaySv.style.display = "none";
  } else if (changeABC == "ViTri") {
    displayKh.style.display = "none";
    displayNv.style.display = "none";
    displaySv.style.display = "none";
  }
});

// thêm sự kiện person
let listPerson = new ListCompilation();
listPerson.getLocal();

document.getElementById("themPerson").addEventListener("click", () => {
  let arrInput = document.querySelectorAll("#controlForm input");
  let person;
  let selectElemen = document.getElementById("chonVitri");
  let changeABC = selectElemen.value;
  if (changeABC == "SinhVien") {
    person = new SinhVien();
  } else if (changeABC == "NhanVien") {
    person = new NhanVien();
  } else if (changeABC == "KhachHang") {
    person = new KhachHang();
  }
  for (let item of arrInput) {
    let { id, value } = item;
    person[id] = value;
  }
  listPerson.addPerson(person);
  listPerson.renderGiaoDien();
  listPerson.saveLocal();
});
window.deletePerson = (idMaSo) => {
  listPerson.deletePerson(idMaSo);
};
window.getInforPerson = (idMaSo) => {
  listPerson.getInforPerson(idMaSo);
};

document.getElementById("btnCapNhat").onclick = () => {
  let arrInput = document.querySelectorAll("#controlForm input");
  console.log(arrInput);
  let person;
  let selectElemen = document.getElementById("chonVitri");
  let changeABC = selectElemen.value;
  if (changeABC == "SinhVien") {
    person = new SinhVien();
  } else if (changeABC == "NhanVien") {
    person = new NhanVien();
  } else if (changeABC == "KhachHang") {
    person = new KhachHang();
  }
  console.log(person);
  for (let item of arrInput) {
    let { id, value } = item;
    person[id] = value;
    // console.log(person[id]);
  }
  listPerson.editPerson(person);
};
window.searchPerson = (event) => {
  let value = event.target.value;
  console.log(value);
  listPerson.searchPerson(value);
};
// in ra pdf
// function printDiv(divName) {
//   var printContents = document.getElementById(divName).innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printContents;
//   window.print();
//   document.body.innerHTML = originalContents;
// }
