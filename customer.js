class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get() {
    return {name: this.name, age: this.age}
  }
  isSame(checkData) {
    const customerData = this.get()
    const keysOfCheckData = Object.keys(checkData)
    return keysOfCheckData.every((key) => {
      return checkData[key]===customerData[key]
    })
  }
}
module.exports = {
  Customer
}