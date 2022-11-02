# schoolLibrary
 Online book library

The input is an array.
On the first line is given a string representing a shelf with books in the library. Every book is separated with "&".
On the next lines intil the "Done" command are given commands separated with " | ".
The possible commands are as follows:
 - "Add Book | {book name}" :
    Adds the book in the first place on the shelf.
    Or if the book is already present on the shelf, the program ignores the command.
 - "Take Book | {book name}" :
    Removes the book with the given name only if the book is on the shelf.
    Otherwise, the program ignores the command.
 - "Swap Books | {book1} | {book2}" :
    If both books are on the shelf, the program swaps their places.
    If at least one is missing, the program ignores the command.
 - "Insert Book | {book name}" :
    Adds the given book at the end of the shelf.
    If the book is already present on the shelf, the program ignores the command.
 - "Check Book | {index}" :
    Prints the name of the book, which is at the given index.
    If the index is invalid, the program ignores the command.