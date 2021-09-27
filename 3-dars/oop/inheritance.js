function Book(name,author,year){
    this.name=name;
    this.author=author;
    this.year=year;
}

Book.prototype.getSummary=function(){
    return`${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
}

//inheritance
Magazine.prototype=Object.create(Book.prototype)

function Magazine(name,author,year){
    this.name=name;
    this.author=author;
    this.year=year;
}

let mag1=new Magazine('journal1','somebody',2021)

console.log(mag1.getSummary)