class Boss {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getInfo() {
    return `Ten: ${this.name} . Dia chi: ${this.address}`;
  }
}

class Employee extends Boss {
  constructor(empName, empAddress, bossName, bossAddress) {

    super(bossName, bossAddress);
    this.empName = empName;
    this.empAddress = empAddress;
  }

  getInfo() {
    return `Ten: ${this.empName} . Dia chi: ${this.empAddress}`;
  }
  getBossInfo() {
    return super.getInfo();
  }
}

const emp = new Employee("An", "789 Worker St", "Mr. Bùi", "123 Main St");

console.log(emp.getInfo());  
console.log(emp.getBossInfo());  
