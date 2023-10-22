"use strict"

const readlineSync = require('readline-sync');
const BinarySearchTree = require('./binarySearchTree');

const library = new BinarySearchTree();

function displayMenu() {
    console.log('1. Add Book');
    console.log('2. Search Book');
    console.log('3. Exit');
}

while (true) {
    displayMenu();
    const choice = readlineSync.questionInt('Enter your choice: ');

    switch(choice) {
        case 1:
            const bookName = readlineSync.question('Enter book name: ');
            library.insert(bookName);
            console.log('Book added successfully!');
            break;
        
        case 2:
            const searchBook = readlineSync.question('Enter book name to search: ');
            const isFound = library.search(searchBook);
            if (isFound)
                console.log('Book found in the library');
            else 
                console.log('Book not found in the libary');
            break;

        case 3:
            console.log('Exiting the application.');
            process.exit(0);
            break;

        default:
            console.log('Invalid choice. Please try again.');
    }
}