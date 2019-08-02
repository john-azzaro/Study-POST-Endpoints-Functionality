# POST Endpoints Functionality Study

<br>

## What is POST Endpoints Functionality Study?
The "POST Endpoints Functionality Study" demonstrates the basic functionalities of POST requests wherein the client creates a new item and the response is that a new item is added to the shopping list items.

<br>

In an express application, to handle a POST request, you would call the app object (note the use of cond app = require('express') ) with the POST method.  However, POST requests are a little more complicated than the GET request.  For example, the POST endpoint in this example needs to parse data about the new item being created (note the second argument in the example below which is middleware we need to install prior to this), call Shoppinglist.create from our model.js file, and return the JSO.  


```JavaScript

                    app.post('/route', jsonParser, function(req, res) {                                         
                        // validation if given
                        const item = List.create(req.body.key1, req.body.key2);
                        res.status(201).json(item);
                    });

```

<br>

## Does POST Endpoints Functionality Study commentary?
Yes! The POST Endpoints Functionality Study features commentary in the server.js file to show the structural context and implementation of POST endpoint functionality.  In addition, I also provide a Process text file that gives a good outline of the implementation process. 

<br>

## What are the key features of POST Endpoints Functionality Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future.  I divided this particular study into different branches covering different aspects of basic node servers, which i list below:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| POST request to localhost:8080/shopping-list      | This POST request will return a list of items in Postman        |



<br>

## Screenshots
![post1](https://user-images.githubusercontent.com/37447586/62384956-8f4c0300-b508-11e9-99ad-44fb0def9834.png)
![post2](https://user-images.githubusercontent.com/37447586/62384957-8f4c0300-b508-11e9-93e5-a402a3460083.png)
