let products = [
    {
      id: 1,
      name: "Formal Shirt",
      size: "L",
      color: "White",
      price: 800,
      image: "1.jpg",
      description: "Good looking white shirt",
    },
    {
      id: 2,
      name: "Printed Shirt",
      size: "M",
      color: "Mixed Blue and White",
      price: 1500,
      image: "2.jpg",
      description: "Good looking printed shirt",
    },
  
    {
      id: 3,
      name: "Formal Shirt",
      size: "S",
      color: "Blue",
      price: 1200,
      image: "3.jpg",
      description: "Good looking Black Checked Shirt",
    },
  
    {
      id: 4,
      name: "Formal Trouser",
      size: "M",
      color: "Dark Blue",
      price: 3000,
      image: "4.jpg",
      description: "Nicely Crafted Blue Formal Trouser",
    },
  
    {
      id: 5,
      name: "Ripped Jeans",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "5.jpg",
      description: "Good looking Ripped Jeans",
    },
  
    {
      id: 6,
      name: "Trouser",
      size: "M",
      color: "Grey",
      price: 1500,
      image: "6.jpg",
      description: "For making you comfortable",
    },
    {
      id: 7,
      name: "Cheetah",
      size: "M",
      color: "Black and Brown",
      price: 15000,
      image: "7.jpg",
      description: "Dress it in Your Own Way",
    },
    {
      id: 8,
      name: "Cuba",
      size: "M",
      color: "BLack",
      price: 18000,
      image: "8.jpg",
      description: "Make your Own Style",
    },
    {
      id: 9,
      name: "SKMEI",
      size: "M",
      color: "Black",
      price: 11000,
      image: "9.jpg",
      description: "Made for you",
    },
    {
      id: 10,
      name: "Formal Shoes",
      size: "M",
      color: "Brown",
      price: 1500,
      image: "10.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 11,
      name: "Sneakers",
      size: "M",
      color: "Maroon",
      price: 1500,
      image: "11.jpg",
      description: "Because it is Necessary",
    },
    {
      id: 12,
      name: "Formal Shoes",
      size: "M",
      color: "Black",
      price: 1800,
      image: "12.jpg",
      description: "Every Shoes has its Own Story",
    },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          
          <p>
            <button onclick="addToCart(${id})"  >Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` 
        
        <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
 
  function addToCart(id){
    let pro = getProductByID(products,id)
    // console.log(pro)

    if(cart.length==0){
      document.getElementById('count').innerText="("+ cart.length +")";
      cart.push(pro);
      console.log(pro);
      displayProducts(cart,"cart");
      document.getElementById("count").innerText="("+ cart.length +")"
    }

    else{
      let obj = cart.find((cartprod) => cartprod.id==id);
      if(obj===undefined){
        cart.push(pro);
        console.log(cart);
        displayProducts(cart,"cart");
      document.getElementById("count").innerText="("+ cart.length +")"
      console.log(cart)
      }
      else{
        alert("product already exist")
      }
    }
    let cartlength=cart.length;
    console.log(cartlength)
    document.getElementById('count').value=cartlength;
  }
   
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }


  function filter(){
    let min = document.getElementById("minfilter").value;
    let max = document.getElementById("maxfilter").value;

    let filteredproducts = products.filter(function(prod){
      return prod.price>=min && prod.price<=max;
    })
    displayProducts(filteredproducts);
  }

 