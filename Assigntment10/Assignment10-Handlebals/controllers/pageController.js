exports.home = (req, res) => {  
    res.render('index');  
};  

exports.about = (req, res) => {  
    res.render('index', { content: 'partials/about' });  
};  

exports.contact = (req, res) => {  
    res.render('index', { content: 'partials/contact' });  
};  
