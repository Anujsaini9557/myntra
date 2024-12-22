console.log(" Jai Shree Krishna");

let items = [
  {
  item_image: 'images/1.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/jack.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/K.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/2.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/3.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/4.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/1.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/6.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/7.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
  {
  item_image: 'images/8.jpg',
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name:'cartlon London',
  item_name:'Rhodium-Plated CZ Floral Studs',
  current_price:606,
  original_price :1045,
  discount_percentage : 42,
},
];



let itemsContainerElement = document.querySelector(".items-container");

let innerHTML = '';
items.forEach(item => {
innerHTML +=  `<div class="item-container">
<img class="item-image" src="${item.item_image}" alt="item image">
<div class="rating">
${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
</div>
<div>
<div class="company-name">${item.company_name}</div>
<div class="item-name">${item.item_name}</div>
<div class="price">
<span class="current-price">${item.current_price}</span>
<span class="original-price">${item.original_price}</span>
<span class="discount">${item.discount_percentage}</span>
</div>
<button class="btn-add-bag">Add to Bag</button>
</div>`;
});
 itemsContainerElement.innerHTML = innerHTML;

  
        



