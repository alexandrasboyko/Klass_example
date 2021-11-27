const ukraineKeyDB = [
  {"ім\'я": "Test 1", "вік": "33", "стать": "M"},
  {"ім\'я": "Test 2", "вік": "23", "стать": "M"},
  {"ім\'я": "Test 3", "вік": "24", "стать": "M"},
  {"ім\'я": "Test 4", "вік": "25", "стать": "M"},
  {"ім\'я": "Test 5", "вік": "26", "стать": "M"},
  {"ім\'я": "Test 6", "вік": "28", "стать": "M"}
]
const englishKeyDB = [
  {"name": "Test 1", "age": "33", "gender": "M"},
  {"name": "Test 2", "age": "23", "gender": "M"},
  {"name": "Test 3", "age": "24", "gender": "M"},
  {"name": "Test 4", "age": "25", "gender": "M"},
  {"name": "Test 5", "age": "26", "gender": "M"},
  {"name": "Test 6", "age": "28", "gender": "M"}
]
const mapKeys = {
  "ім\'я": "name",
  "вік": "age",
  "стать": "gender"
}

const mapKeysArr = Object.keys(mapKeys)
const transDB = ukraineKeyDB.map((elementInDB) => {
  return mapKeysArr.reduce((acc, key) => {
    const englKey = mapKeys[key]
    const ukrDBValue = elementInDB[key]
    acc[englKey] = ukrDBValue
    return acc
  }, {})
})
console.log(transDB)


