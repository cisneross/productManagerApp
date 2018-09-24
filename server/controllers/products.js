var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    //methods
    createProduct: (req,res)=>{
        console.log(req.body.name);
        Product.create({
            title: req.body.title,
            price: req.body.price,
            img_url: req.body.img_url,
        }, function(err, prod){
            if(err){
                res.json(err);
            }else{
                console.log('succesfully created a product',prod);
                res.json(prod);
            }
        })
    },
    findTheProducts:(req,res)=>{
        console.log('made it to get products')
        Product.find({}, function(err, products){
            if (err){
                console.log('errors');
                res.json(err);
            }
            else{
                console.log('found all the products',products);
                res.json(products);
            }
        })
    },
    show:(req,res)=>{
        console.log('got the id ', req.params.id);
        Product.findOne({_id: req.params.id}, function(err, prod){
            console.log('made it contorller', prod)
            console.log('got an erro', err);
            if(err){
                res.json(err);
            }else{
                res.json(prod);
            }
        })
    },
    update:(req,res)=>{
        console.log(req.params.id);
        Product.findOne({_id: req.params.id}, function(err, product){
            product.title = req.body.title;
            product.price = req.body.price;
            product.img_url = req.body.img_url;
            product.save(function(err){
                if(err){
                    res.json(err);
                }else{
                    res.json(product);
                }
            })
        })
    },
    remove:(req,res)=>{
        Product.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("how do you mess up deleting something?");
                res.json(err);
            }else{
                res.json({message: "Product deleted Deleted"});
            }
        })
    }
}