# React-Book-search
5. December 2022

The Book Finder React app uses Google Books api
The deployed web app is on [link](http://pastoral-flowers.surge.sh/).

## OBJECTIVE
The React app uses the Google Books Api to find ans render basic information about the book: cover, title, ISBN, the date of the publishing, publisher and author. Also there is the button that links to the Google Books page. The app uses Bootstap React for styling. The end-user is for a Belarusian speaker.

## BACKGROUND
The app uses: 

- React 18.2;
- Bootstrap;
- Axios React;

The Axios React is used for getiing Google Books data. The Bootstap React helps to style and organise the rendering data from Google Books.


## TECHNICAL DESIGN
The Book Search app uses *{useState}* for setting the search term and the search results. If there is no data about book cover, ISBN, authour or publisher, there are the template notes about the lack of the information with use of *if() else*. The Google Book page opens on a new page with *target="_blank"*. There is the *pattern* term for the search input word - not less then 4 letters.

## CAVEATS
The web-app can be used in mobile vetsion. Mind that you need to get the [Google Books api](https://developers.google.com/books). There is also a special word search term restrictions, connected with the specifics of the Google Books API - certain search term words shut down the app, that words can be random and without great logic (like the word "read" or "прыгажуня" (beautiful in Belarusian)) so putting some measures for the search terms useless.
