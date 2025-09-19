// hàm lấy sản phẩm từ API
async function fetchProducts() {
    try {
        const response = await fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products');
        const products = await response.json();

        // sử dụng destructuring để lấy các thuộc tính cần thiết
        const { id, name, avatar, price, features, description } = products[1]; // lấy sản phẩm thứ hai làm ví dụ
        // clone sản phẩm và thêm thuộc tính mới
        const clonedProduct = { 
            id, 
            name, 
            avatar, 
            price, 
            features: {
                ...features,
                warranty: "2 years", // thêm thuộc tính mới
            },
            description,

        };
       console.log('clone Product: ', clonedProduct); 
    }
    catch (error) {
        console.error('Error fetching products:', error);
    }
    
}
fetchProducts();
