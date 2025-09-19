// Rest parameter example
// cách một là function thông thường
function Rest(a, b, ...c) {
    console.log('a = ', a);
    console.log('b = ', b);
    console.log('c = ', c); // c là mảng chứa các phần tử còn lại
    //total = a + b + c.reduce((acc, val) => acc + val, 0); // tính tổng a + b + các phần tử trong mảng c
    //another way to calculate just sum only c
    total = a + b;
    for (let i = 0; i < c.length; i++) {
        total += c[i];
    }
    return total;

}
console.log(Rest(2,5,7,8,10,13)); 


// cách 2 là tính mảng
function Rest2(...numbers) { // numbers is an array
    total = 0;
    for (let num of numbers) { // num là từng phần tử trong mảng numbers
        total += num;
    }
    return total;
}
console.log(Rest2(2,5,7,8,10,13));