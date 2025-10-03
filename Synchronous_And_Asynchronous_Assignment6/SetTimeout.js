setTimeout(
    Wait = () => {
  console.log('Tôi đã chờ 2 giây');
}, 2000);
var Nowait = () => {
  console.log('Tôi không cần chờ');
}
Nowait();
// Another example
console.log("Bắt đầu chương trình...");

setTimeout(
    Load = () => {
  console.log("Đang tải dữ liệu từ server (mất 3 giây)...");
}, 3000);

setTimeout(
    Load2 = () => {
  console.log("Đang xử lý dữ liệu (mất 1 giây)...");
}, 1000);
var Nowait2 = () => {
  console.log("Tôi không cần chờ dữ liệu tải xong");
}
Nowait2();
console.log("Kết thúc chương trình...");