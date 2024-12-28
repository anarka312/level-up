class Book {
    constructor(title, author, year, isRead = false) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.isRead = isRead;
    }
  
   
    toggleReadStatus() {
      this.isRead = !this.isRead;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
   
    removeBook(title) {
      this.books = this.books.filter(book => book.title !== title);
    }
  
   
    getUnreadBooks() {
      return this.books.filter(book => !book.isRead);
    }
  }
  

  const book1 = new Book('Ak keme', 'Chyngyz Aitmatov', 1967);
  const book2 = new Book('Syngan Kylych', 'Tologon Kasymbekov', 1957, true);
  const book3 = new Book('Kanybek', 'Kasymaaly Jantoshov', 1937);
  
 
  const library = new Library();
  

  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  

  console.log('Непрочитанные книги:', library.getUnreadBooks());
  

  book1.toggleReadStatus();
  console.log(`Статус книги "${book1.title}" после изменения: ${book1.isRead ? 'Прочитана' : 'Не прочитана'}`);
  

  library.removeBook('1984');
  
  console.log('Библиотека после удаления книги "1984":', library.books);
  