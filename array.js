class Wrapper {
  constructor(item) {
    this.item = item;
  }
}

const arr = ['a', 'd', 'f', 'q', 4]
console.log(arr.map((element) => {
  return new Wrapper(element + 1)
}))
