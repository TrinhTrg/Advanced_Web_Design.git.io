// class MyClass {
//   a = 1;       // .a is public
//   #b = 2;      // .#b is private
//   static #c = 3;  // .#c is private and static

//   incB() {
//     this.#b++;
//     console.log(this.#b);
//   }
// }

// const m = new MyClass();

// m.incB(); // runs OK

// // m.#b = 0; // error - private property cannot be modified outside

class Student {
  name;      // public
  #score;    // private

  constructor(name, score) {
    this.name = name;
    this.#score = score;
  }


  showInfo() {
    console.log(`Tên: ${this.name}, Điểm: ${this.#score}`);
  }

  addScore(x) {
    this.#score += x;
  }
}

const s = new Student("An", 8);

// gọi public method
s.showInfo();   // Tên: An, Điểm: 8
s.addScore(2);
s.showInfo();   // Tên: An, Điểm: 10

