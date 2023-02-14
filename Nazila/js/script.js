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

for (jsonValue of jsonFlowers) {
    document.getElementById("product").innerHTML += `
    
<div class="card" style="width: 18rem;">
  <img src="${jsonValue.photo}" class="card-img-top" alt="${jsonValue.name}">
  <div class="card-body">
    <h5 class="card-title">${jsonValue.name}</h5>
    <p class="card-text">${jsonValue.instructions}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`;
}

console.log(jsonFlowers);