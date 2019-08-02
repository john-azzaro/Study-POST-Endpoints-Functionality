
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList, Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();


app.use(morgan('common'));                                                                   


ShoppingList.create('beans', 2);                                                              
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);


Recipes.create(
  'boiled white rice', ['1 cup white rice', '2 cups water', 'pinch of salt']);                 
Recipes.create(
  'milkshake', ['2 tbsp cocoa', '2 cups vanilla ice cream', '1 cup milk']);


app.get('/shopping-list', (req, res) => {                                                      
  res.json(ShoppingList.get());
});

//POST//                                                                                      
app.post('/shopping-list', jsonParser, (req, res) => {                                          // When the client sends a POST request to the endpoint /shopping-list (also passing json parser as a second argument with request response objects)
  const requiredFields = ['name', 'budget'];                                                    // first you need to VALIDATE "name" and "budget" and make sure they are in request body by creating a constant with an array with "name" and "budget" in it....
  for (let i=0; i<requiredFields.length; i++) {                                                 // Now as you loop through the the list for name and budget....
    const field = requiredFields[i];
    if (!(field in req.body)) {                                                                 // if the field is NOT in the request body (i.e. name and budget are NOT in the request body)...
      const message = `Missing \`${field}\` in request body`                                    // send an error message
      console.error(message);
      return res.status(400).send(message);
    }
  }

  const item = ShoppingList.create(req.body.name, req.body.budget);                              // But if the request sent is VALID, then the item will be sent, which would be name and the body via the Shoppinglist.create method.
  res.status(201).json(item);                                                                    // And the response will be the new item, a 201 status (good), and the json object!
});


app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
