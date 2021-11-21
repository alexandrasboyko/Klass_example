class Agregation {
  constructor(dataBaseArr, classEntity, entityConstructFields) {
    this.dataBaseArr = dataBaseArr;
    this.classEntity = classEntity;
    this.entityConstructFields = entityConstructFields;
  }
  getCollectionEnteties() {
    return this.dataBaseArr.map((dataBaseItem) => {
      if(this.entityConstructFields) {
        const dataBaseItemValues = this.entityConstructFields.map((key) => {
          return dataBaseItem[key]
        })
        return new this.classEntity(...dataBaseItemValues)
      }

      return new this.classEntity(...Object.values(dataBaseItem))
    })
  }
}
module.exports = {
  Agregation
}