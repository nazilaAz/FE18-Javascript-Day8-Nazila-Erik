var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


let jsonFlowers = JSON.parse(flowerlist);
// console.log(jsonFlowers);

for (jsonValue of jsonFlowers) {
    document.getElementById("product").innerHTML += `
 <div>
<div class="card mx-1 my-2 H-100">
<figure>
  <img src="image/${jsonValue.photo}" class="card-img-top" alt="${jsonValue.name}">
  <figcaption>${jsonValue.price} €</figcaption>
  </figure>
  <div class="card-body">
    <h5 class="card-title">${jsonValue.name}</h5>
    <p class="card-text">${jsonValue.instructions}</p>
    <button type="button" class="btn btn-success addToCart">Add to Cart</button>
  </div>
</div>
</div>
`;
}

// console.log(jsonFlowers);

let cart = [];
let cartNumber = 0;
let btns = document.getElementsByClassName("addToCart");
// console.log(btns);
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        addtoCart(jsonFlowers[i]);
        sumCartNumber();

    })
}

let spanCart = document.getElementById("topCart");

//create Function
function addtoCart(product) {
    if (cart.find((value) => value.name == product.name)) {
        product.qty++;
        cartNumber++;
    } else {
        cart.push(product);
        cartNumber = cartNumber + product.qty
    }
    showCartElement();
    //console.log(cart);

}

function sumCartNumber() {
    document.getElementById("topCart").innerHTML = `
    ${cartNumber}<i class="bi bi-cart"></i>`;
}

function showCartElement() {
    document.getElementById("rowAdd").innerHTML = "";

    for (let cartValue of cart) {
        document.getElementById("rowAdd").innerHTML += `
        
            <td>${cartValue.name}</td>
            <td>${cartValue.price}</td>
            <td><img src="image/${cartValue.photo}" style="width:100px;height:100px;"></td>
            <td>${cartValue.qty}</td>
            <td><button type="button" class="btn btn-success">+QTY</button></td>
            <td><button type="button" class="btn btn-warning">-QTY</button></td>
            <td><button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
            <tr>
            </tr>
             
    `;

    }


}