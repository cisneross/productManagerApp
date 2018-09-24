var products = require('./../controllers/products.js');
var path = require('path');
module.exports = function(app){
    //routes
    app.post('/create', products.createProduct );
    app.get('/listproducts', products.findTheProducts);
    app.get('/findprod/:id', products.show);
    app.put('/update/:id', products.update);
    app.delete('/delete/:id', products.remove)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}