# INFSCI2560 Activity 9

Connect this application to a MongoDB instance and then use [Postman](https://www.postman.com) or [Hoppscotch](https://hoppscotch.io) to insert some books. Remix this Glitch project that uses Express.js and Mongoose to connect to your [Mongo Atlas](https://www.mongodb.com/cloud/atlas) database.


## Steps

Create a MongoDB instance in the cloud. Visit [Mongo Atlas](https://www.mongodb.com/cloud/atlas) and create an account.
  * Visit the MongoDB Atlas Instructions page on Canvas (should be in the Week 10 module) for a step by step guide.
  * If you like videos, check out this [YouTube tutorial](https://www.youtube.com/watch?v=_mO2wF_1rV0)
  * For the official documentation check out: [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide to create a cloud hosted MongoDB database.

Once you have created your MongoDb database in the cloud, edit the `.env` file and add the following pieces of information:
* Username - The username of the account you created on MongoDB Cloud
* Password - The password of the account you created on MongoDB Cloud
* Host - This is the hostname from the connection string. Note, just copy the hostname, not any other elements of the connection string URL.
* Database - This is the name of the database you created in the cloud.


To test your application, you can use [Postman](https://www.postman.com) or [Hoppscotch](https://hoppscotch.io) to insert some books. Try the API calls below to see if you can add and list the books in your database.

**NOTE**: If you use Hoppscotch, you need to turn on the proxy in the [settings](https://hoppscotch.io/settings/)

API tests with Postman

`GET /api/book`

* This should be intially empty.
* Try POSTing the following two books to the `/api/book` endpoint:

`POST /api/book`
```json
{
  "title":"War and Peace",
  "author":"Warren Peice?"
}
```

`POST /api/book`

```json
{
  "title":"One Day in the Life of Ivan Denisovich",
  "author":"Aleksandr Solzhenitsyn"
}
```

`GET /api/book`
* Now you should get a JSON response of the two books you just created in the database


Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
