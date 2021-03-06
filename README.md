# iLuddite
iLuddite is a Makersquare Greenfield project created by Brittany Artimez, Michael Lefkowitz, Stephen Bolton, Joey Steinburger, and Rachel DePriest. Our application is meant for anybody who loves to read, and wants a more social experience for a traditionally solo exercise.  

##Getting Started
To get stared working with iLuddite, please clone the iLuddite repository to your computer: 
```
$ git clone https://github.com/skbolton/iLuddite
```
Next, change the directory on the terminal to the iLuddite repository:

```
cd iLuddite
```

Finally install the node dependencies in the iLuddite repository: 

```
npm install
```
##Running iLuddite

###Authorization and Account Creation 
Before creating an account with iLuddite, we require that all potential users have an active Facebook account. This allows for us to gather the users profile picture, name, and friends that use iLuddite. In addition this allows for an easy authorization process for both the user and the developers.

###Search Bar
The current version of iLuddite will only search for book titles. We are currently working on expanding our efforts to allow for users to also search by authors. Once the user has selected the book, they will be redirected to that book's page, at which time they will be able to add the book to their queue or to their favorite books.     

###User Model
The user model's information is primarily gathered from the Facebook API, which gives iLuddite access to the user's name, Facebook id, friends, and profile picture. In addition iLuddite adds the user's queue, favorite books, token, reading stats, and time when user's account was activated to the user model schema.   

###Book Model
The book model's information is primarily gathered from the Google API, which gives iLuddite access to the book's title, ISBN, author, summary, cover, and thumbnail. iLuddite only adds a book id to the book model schema. 

###APIs Used
Facebook: https://developers.facebook.com/docs/graph-api  

Google Books: https://developers.google.com/books/docs/v1/using

##Built With
Mongoose, React, Bootstrap, Web pack, and Passport.

##Contributors
Front-End: Stephen Bolton and Joey Steinburger

Back-End: Brittany Artimez, Michael Lefkowitz, and Rachel DePriest
