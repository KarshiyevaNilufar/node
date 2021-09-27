function Book(name,author,year){
    this.name=name;
    this.author=author;
    this.year=year;
}

//instantation
Book.prototype.getSummary=function(){
    return`${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
}
let book1 =new Book('javasrcipt','john',2016)

console.log(book1)