class Shape {
  constructor(chieuDai, chieuRong) {
    this.chieuDai = chieuDai;
    this.chieuRong = chieuRong;
    // this.area = this.chieuDai * this.chieuRong;
    // this.chuvi = (this.chieuDai + this.chieuRong) * 2;//dư thừa
  }
  setChieuDai(chieuDai) {
    this.chieuDai = chieuDai;
  }
  getChieuDai() {
    return `Chieu dai: ${this.chieuDai}`;
  }
  setChieuRong(chieuRong) {
    this.chieuRong = chieuRong;
  }
  getChieuRong() {
    return `Chieu rong: ${this.chieuRong}` ;
  }
  setArea() {
    this.area = this.chieuDai * this.chieuRong;
  }
  getArea() {
    return `Dien tich: ${this.area}`;
  }
  setChuVi() {
    this.chuvi = (this.chieuDai + this.chieuRong) * 2;
  }
  getChuVi() {
    return `Chu vi: ${this.chuvi}`;
  }
}
const hinhChuNhat = new Shape(10, 5);
// console.log(hinhChuNhat.getChieuDai());
// console.log(hinhChuNhat.getChieuRong());
console.log(hinhChuNhat.getArea());
console.log(hinhChuNhat.getChuVi());
