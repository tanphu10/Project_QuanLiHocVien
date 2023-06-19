class Person {
  constructor(maSo, hoTen, email, diaChi) {
    this.maSo = "";
    this.hoTen = "";
    this.email = "";
    this.diaChi = "";
  }
}
class SinhVien extends Person {
  constructor(maSo, hoTen, email, diaChi) {
    super(maSo, hoTen, email, diaChi);
    this.diemToan = 0;
    this.diemLi = 0;
    this.diemHoa = 0;
  }
  tinhDiemTrungBinh = () => {
    return ((+this.diemToan) + (+this.diemHoa) + (+this.diemLi)) / 3;
  };
}
class NhanVien extends Person {
  constructor(maSo, hoTen, email, diaChi) {
    super(maSo, hoTen, email, diaChi);
    this.soNgayLamViec = 0;
    this.luongTheoNgay = 0;
  }
  tinhLuong = () => {
    return this.luongTheoNgay *this.soNgayLamViec;
  };
}

class KhachHang extends Person {
  constructor(maSo, hoTen, email, diaChi) {
    super(maSo, hoTen, email, diaChi);
    this.tenCongTy = "";
    this.triGiaHoaDon = "";
    this.danhGia = "";
  }
}
export { Person, SinhVien, NhanVien, KhachHang };
