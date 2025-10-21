const Product = require('../models/productModel');
const { Op } = require('sequelize');

//get all products
exports.getAllProducts = async (req,res) =>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const offset = (page - 1) * limit;

        const sortBy = req.query.sortBy || 'id';
        const sortOrder = req.query.sortOrder === 'desc' ? 'DESC' : 'ASC';

        const { count, rows } = await Product.findAndCountAll({
        limit,
        offset,
        order: [[sortBy, sortOrder]],
        });
        res.render('index',{
            products: rows,
            currentPage: page,
            totalPages: Math.ceil(count / limit),
            sortBy,
            sortOrder,
            });
    }catch(err){
        console.log(err);
        res.status(500).send('error when fetching products');
    }
};
exports.create = async (req,res)=>{
    try{
        const {name,price,description} =req.body;
        const image = req.file? req.file.filename : null;
        await Product.create({name,price,imageUrl:image, description});
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.status(500).send('error when creating product');
    }
};
exports.edit = async (req,res)=>{
    try{
        const product = await Product.findByPk(req.params.id);
        res.render('edit',{product});
    }catch(err){
        console.log(err);
        res.status(500).send('error when fetching product for edit');
    }
};


