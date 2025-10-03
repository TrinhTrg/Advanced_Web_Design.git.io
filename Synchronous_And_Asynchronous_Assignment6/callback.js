function Cv(callback) {
    console.log("Bắt đầu công việc...");
    callback();
}
function callback(){
    console.log("Kết thúc công việc "); 
}
Cv(callback);
// output:
// Bắt đầu công việc...
// Kết thúc công việc
// vì Cv(callback) gọi hàm callback() bên trong nó nên hàm callback() sẽ được thực thi sau khi hàm Cv(callback) được gọi.
// tính toán gọi hàm callback , b1 là tính toán, b2 in ra kết quả
function tinhToan(a, b, callback) { // callback là hàm inKetQua nên đặt tên là inKetQua cũng được
    let tong = a + b; // var hoặc let đều được
    callback(tong);
}
function inKetQua(tong) {
    console.log("Tổng là: " + tong);
}
tinhToan(5, 10, inKetQua);
// another example tính diện tích hình chữ nhật
function Hcn(dai, rong, callback) {
    let dientich = dai * rong;
    callback(dientich);
}
function inDienTich(dientich) {
    console.log("Diện tích hình chữ nhật là: " + dientich);
}
Hcn(5, 10, inDienTich);

// another example tính chu vi hình chữ nhật
function chuviHcn(dai, rong, callback) {
    let chuvi = (dai + rong) * 2;
    callback(chuvi);
}
function inChuvi(chuvi){
    console.log("Chu vi hình chữ nhật là: " + chuvi);
}
chuviHcn(5, 10, inChuvi);
