# Demo for halla NFT

### Getting started

1. install all the dependancies with `npm install`
2. create a database in mongodb and import the `users.json` file collection
   this file containes all the dummy users data
3. now change the database files from `components > database.js`. update the mongourl and database name
4. run the server using `npm run dev`
5. login with one of the accounts in the `users.json` file
6. you'll be redirected to the Dashboard and you can see the big 'Connect Metamask' button
7. when you click the button it'll ask you to connect the metamask with the website
8. you accept the connection request and your account address will be stored in the database which you can see from the MongoDB Compass
