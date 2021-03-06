class Library{
    
    getBooks(){
        let books={
            "The alchemist":{book_name:"The alchemist",author:"paulo",price:200,no_of_copies:5,sold:4},
            "aadu jeevitham":{book_name:"aadu jeevitham",author:"bennyamin",price:200,no_of_copies:5,sold:4},
            "Ballya kala sagi":{book_name:"Ballya kala sagi",author:"Basheer",price:200,no_of_copies:0,sold:4}
        }
        return books;
    }

    findBook(bookname){
        let book=this.getBooks();
        if(bookname in book){
            if(book[bookname]["no_of_copies"]>0){
                return 1
            }
            else{
                return -1
            }
        }
        else{
            return 0
        }
    } 
}

var obj1=new Library();
var books=obj1.findBook("Ballya kala sagi");
var res=books==0?"This book is not available in this library":books==1?"available":"Not in stock"
console.log(res); 