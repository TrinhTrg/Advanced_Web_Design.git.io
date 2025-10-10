exports.home = (req, res) => {  
    res.render('index');  
};  

exports.about = (req, res) => {  
    res.render('index', { content: 'about' });  
};  

exports.contact = (req, res) => {  
    res.render('index', { content: 'contact' });  
};  
