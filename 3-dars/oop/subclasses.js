class Book{
    constructor(name,author,year){
        this.name=name;
        this.author=author;
        this.year=year;
    }
    
    getSummary(){
        return`${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
} 

class Magazine extends Book{
    constructor(name,author,year){
      super(name,author,year);
    }
}
let mag1=new Magazine('journal','somebody',2009)


console.log(mag1.getSummary())