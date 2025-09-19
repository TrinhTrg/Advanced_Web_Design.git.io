var x = 10;
function main() {
    var x1 =15;
  console.log(x1);
}
function ham1() {
    var x2 =30;
  console.log(x2);

}
function ham2() {
    var x3 =0;
    for (let i = 0; i < 5; i++) {
        x3 += 1;
        console.log(x3);
        // console.log(i); // i chỉ có thể truy cập trong block for. nếu không khai báo var x3 thì bỏ qua console.log(x3);
    }   
}
//ham1();
ham2();
//main();
//console.log(x);