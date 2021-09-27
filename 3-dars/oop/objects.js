const book1={
    name:'Book 1',
    author:'ernest',
    year:'2018',
    getSummary (){
      return`${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
}

const book2={
    name:'book 2',
    author:'harry',
    year:'2018',
    getSummary (){
        return`${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
}

console.log(book2.getSummary())

