This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# MyReads Project by Sameer Mitra

## Table of Contents

- [Introduction](#Introduction)
- [Instructions](#Instructions)
- [Specifications] (#Specifications)
- [App Structure](#Structure)
- [Backend Server](#Backend_Server)

## Introduction

This is project is a book tracking application that allows the user to search through a list of books and add the books to 3 different Bookshelves:
1. Current Reading book shelf
2. Want to Read book shelf
3. Previously Read book shelf

## Instructions

  ### How to start the MyReads React application
  - Application may be downloaded or cloned (git clone https://github.com/sameer-mitra/reactnd-project-myreads )
  - Once downloaded or cloned via git clone terminal command
  - Run `npm install` via terminal, to download all dependencies for the application.
  - Run `npm start` via terminal, to launch application's dev server.
  
## Specifications
  ### Application Setup
  - Verify that the application was created with create-react-app and requires only npm install and npm start to get it installed and launched.
  - Verify that an updated README that describes the project and has instructions for installing and launching the project is included.

  ### Main Page
  - Verify that the main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
  - Verify that the main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
  - Verify that when the browser is refreshed, the same information is displayed on the page.
  
  ### Search Page
  - Verify that:
    1. The search page has a search input field.
	2. The search page behaves correctly:
		a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.
		b) Search results are not shown when all of the text is deleted out of the search input box.
		c) Invalid queries are handled and prior search results are not shown.
		d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
		e) The user is able to search for multiple words, such as “artificial intelligence.”
  - Verify that the search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
  - Verify that if a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
  - Verify that when an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
  * There are only a limite dnumber of search terms that work with the app which can be found in the root project directory in the `SEARCH_TERMS.md` file.

  ### Routing
  - Verify that the main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
  - Verify that the main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
  - Verify that when the browser is refreshed, the same information is displayed on the page.
  
  ### Code Functionality
  - Verify that component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
  - Verify that books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
  - Verify that the code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.
  

  ## Structure

  - The application is build using the React library, using a few class based components containing component state and several stateless functional components.
  - App routing, linking, etc is all done through react-router-dom with use of several router components _BrowserRouter, Route, Switch & Link_
  - The application has the following file and folder structure:

```bash
├── README.md - Main readme file with instrcutions on how to run and use application. This file.
├── package.json # npm package manager file. Contains all app dependencies and npm scripts.
├── public
│   ├── favicon.ico # React App Icon.
│   └── index.html # Base HTML file with boilerplate html for app and script  tags to load main js file.
└── src
    ├── components
	│ 	├── Book.js # Book with book image, title and author.
	│ 	├── BookCase.js # Book case that has multiple shelves.
	│ 	├── BookShelf.js # Shelf that keeps books.
	│ 	├── BookShelfChanger.js # Component that places book in shelf.
	│ 	├── OpenSearchBtn.js # Component that moves to Search page.
	│ 	├── SearchBar.js # The top component that has a back button and unput list to enter search terms.
	│ 	└── SearchResults.js # The results section in the Search Page.
	├── icons # images/icons used in app interface. 
	│	├── add.svg
	│	├── arrow-back.svg
	│	└── arrow-drop-down.svg
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root(parent)component of the app (class based) which houses all pages and other components of app as well as routing.
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. 
    ├── index.js # Primary JavaScript file in project. It is used for DOM rendering only (ReactDOM.render method call).
	├── ListBooks.js # Main Page with the book case. 
	└── SearchBooks.js # Search Page with the SearchBar and Search Results.
```

  ## Backend_Server

  To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

  * [`getAll`](#getall)
  * [`update`](#update)
  * [`search`](#search)

  ### `getAll`

  Method Signature:

  ```js
  getAll()
  ```

  * Returns a Promise which resolves to a JSON object containing a collection of book objects.
  * This collection represents the books currently in the bookshelves in your app.

  ### `update`

  Method Signature:

  ```js
  update(book, shelf)
  ```

  * book: `<Object>` containing at minimum an `id` attribute
  * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
  * Returns a Promise which resolves to a JSON object containing the response data of the POST request

  ### `search`

  Method Signature:

  ```js
  search(query)
  ```

  * query: `<String>`
  * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
  * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

  ## Important
  The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
