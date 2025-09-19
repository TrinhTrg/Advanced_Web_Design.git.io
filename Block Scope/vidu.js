function testScope() {
  var a = 10; // biến toàn cục (global scope)
  function ham1() {
    var a1 = 5; // biến cục bộ trong hàm ham1()
    console.log(a); // truy cập biến toàn cục
  }

  function ham2() {
    var a2 = 10; // biến cục bộ trong ham2()
    {
      var a21 = 5; // biến cục bộ trong block con bên trong ham2()
      console.log(a21);
    }
  }

  function main() {
    var a3 = 15; // biến cục bộ trong hàm main()
    ham1();
    ham2();
    console.log(a3);
  }
  ham1();
  ham2();
  main();
  // console.log(a21);// lỗi: a21 không được định nghĩa trong phạm vi này
}
testScope();
