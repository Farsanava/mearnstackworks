class Library {
    books = {
        "halfgirlfriend": { book_name1: "halfgirlfriend", author: "chethan bagath", price: 300, avl_copies: 300, copies_sold: 250 },
        "randamoozham": { book_name1: "randamoozham", author: "mt", price: 350, avl_copies: 250, copies_sold: 200 },
        "the alchemist": { book_name1: "the alchemist", author: "paulo", price: 400, avl_copies: 250, copies_sold: 200 }
    }
    findBook(book_name) {
        if(book_name in this.books){
            let book=this.books[book_name]
            if(book.avl_copies>0){
                console.log(book);
            }
            else{
                console.log("not available");
            }
        }
        else{
            console.log("book not exist");
        }

    }
    getSold() {
        let copies_sold_history = [];
        for (let sold in this.books) {
            copies_sold_history.push(this.books[sold].copies_sold)
        }
        return copies_sold_history;
    }

    filterBook() {
        var sold = this.getSold()
        sold.sort((bk1, bk2) => bk1 - bk2)
        console.log(sold);

    }

}
var obj = new Library()
obj.findBook("randamoozham")
obj.findBook("hai")
// obj.getSold()
obj.filterBook()


