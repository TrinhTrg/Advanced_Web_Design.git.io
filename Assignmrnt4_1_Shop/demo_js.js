var woment = [
    { 
        id: 1, 
        name: "Quan jean nu", 
        price: "269.000 VND", 
        oldPrice: "329.000 VND",
        image: "https://hthaostudio.com/wp-content/uploads/2021/12/Anh-SP-quan-Jean-9-min.jpg" 
    },
    { 
        id: 2, 
        name: "Ao khoac nu", 
        price: "449.000 VND", 
        oldPrice: "519.000 VND",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNSRqX39KJQKcm-n7DmTlxp6QMmKpyc0nwg&s" 
    },
    { 
        id: 3, 
        name: "Pajama nu", 
        price: "200.000 VND", 
        oldPrice: "269.000 VND",
        image: "https://chuphinhquangcao.net/wp-content/uploads/2023/09/de-dang-voi-cach-chup-anh-quan-ao-dep-bang-dien-thoai-64f57df1b4c5c.webp" 
    }
];
var man = [
    { 
        id: 1, 
        name: "Quan cosmo (den)", 
        price: "200.000 VND", 
        oldPrice: "269.000 VND",
        image: "https://cdn2.yame.vn/pimg/quan-jogger-y1-m1-0022106/858f0862-a7b3-e001-709e-001a6e183ec9.jpg?w=540&h=756&c=true&v=052025" 
    },
    { 
        id: 2, 
        name: "Quan jean nam", 
        price: "350.000 VND", 
        oldPrice: "419.000 VND",
        image: "https://img.lazcdn.com/g/p/56d670ebc0cd0dcc73bf804349d67660.jpg_720x720q80.jpg" 
    },
    { 
        id: 3, 
        name: "Ao khoac nam", 
        price: "499.000 VND",
        oldPrice: "599.000 VND", 
        image: "https://pos.nvncdn.com/492284-9176/ps/20230424_wWznEPXuIn.jpeg?v=1682349546"
    }
];


function listProducts() {
    var demo = "";

    for (let i = 0; i < man.length; i++) {
        demo += '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height:250px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<span class="old-price">' + man[i].oldPrice + '</span>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
    }
    document.getElementById("men").innerHTML = demo;

    // Reset demo cho women
    demo = "";

    // Render sản phẩm Nữ
    for (let i = 0; i < woment.length; i++) {
        demo += '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height:250px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<span class="old-price">' + woment[i].oldPrice + '</span>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
    }
    document.getElementById("women").innerHTML = demo;
}



// Gọi hàm khi load trang
window.onload = listProducts;
