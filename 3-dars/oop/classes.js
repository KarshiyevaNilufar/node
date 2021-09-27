class Book{
    constructor(name,author,year){
        this.name=name;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        this.#test()
        return`${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
    static getAge(){
        return 'static'
    }
    #test(){
        console.log('private method')
    }
}

Book.getAge()

const Book1=new Book('node.js','rayn',2009)

console.log(Book1.getSummary())