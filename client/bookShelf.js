// define a list of books
Template.bookShelf.rendered = function() {
  Session.setDefault('books', [
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "1984", author: "George Orwell"},
    {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
    {title: "The Catcher in the Rye", author: "J. D. Salinger"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
  ]);
};

// pass session variable to template
Template.bookShelf.helpers({
  books: function () {
    return Session.get('books');
  }
});