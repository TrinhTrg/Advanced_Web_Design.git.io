// class MyClass {
//   // private property
//   #x = 0;

//   // private method (can only be called within the class)
//   #incX() {
//     this.#x++;
//     console.log(this.#x);
//   }

//   // private setter (can only be called within the class)
//   set #setX(x) {
//     this.#x = x;
//   }

//   // private getter (can only be called within the class)
//   get #getX() {
//     return this.#x;
//   }
// }

// const m = new MyClass();

// m.incX();   // Lỗi ???? - private method không thể gọi bên ngoài

class Counter {
  #count = 0;   // private property

  #increase() {
    this.#count++;
    console.log(`Count: ${this.#count}`);
  }

  click() {
    this.#increase();
  }
}

const c = new Counter();

c.click();  // Count: 1
c.click();  // Count: 2 
c.increase(); 
// c.#increase(); // Lỗi - private method không thể gọi bên ngoài
