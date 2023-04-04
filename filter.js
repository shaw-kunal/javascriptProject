const data = [
    {
        id: 1,
        name: "invicta menls prow drive men dress",
        img: "https://m.media-amazon.com/images/I/61NU0FmIZlL._AC_UL600_FMwebp_QL65_.jpg",
        price: 74,
        cat: "dress",
    },
    {
        id: 11,
        name: "invicta menls prow drive men dress",
        img: "https://m.media-amazon.com/images/I/31wDazCs+eL._AC_UL320_.jpg",
        price: 100,
        cat: "dress",
    },

   
    {
        id: 3,
        name: "Breitling  superocean Heritage",
        img: "https://m.media-amazon.com/images/I/413O7hxn+HL._AC_UL600_FMwebp_QL65_.jpg",
        price: 200,
        cat: "Luxury"
    },
    {
        id: 7,
        name: "MOTOROLA e13 (Aurora Green, 64 GB)  (4 GB RAM)",
        img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/i/8/5/-original-imagmmmhmjpfvbry.jpeg?q=70",
        price: 150,
        cat: "Phone",
    },
    {
        id: 4,
        name: "Breitling  superocean Heritage luxury 2",
        img: "https://m.media-amazon.com/images/I/31rOjg95cFL._AC_SR320,400_.jpg",
        price: 200,
        cat: "Luxury"
    },
    {
        id: 5,
        name: "Garmin Venu Smartcasual",
        img: "https://m.media-amazon.com/images/I/71qs3hHvSEL._AC_UL320_.jpg",
        price: 74,
        cat: "Casual",
    },
    {
        id: 5,
        name: "Garmin Venu Smartcasual",
        img: "https://m.media-amazon.com/images/I/61XnG8ZA3lL._AC_UL320_.jpg",
        price: 100,
        cat: "Casual",
    },
  
    {
        id: 6,
        name: "POCO C31 (Royal Blue, 64 GB)  (4 GB RAM)",
        img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=70",
        price: 100,
        cat: "Phone",
    },
    {
        id: 8,
        name: "realme C30 (Bamboo Green, 32 GB)  (3 GB RAM)",
        img: "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70",
        price: 250,
        cat: "Phone",
    },
    {
        id: 2,
        name: "timex men's expedition scout_sports",
        img: "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
        price: 40,
        cat: "sport",
    },

]

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const CategoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


const displayProduct = (filterItems) => {
    productsContainer.innerHTML = filterItems.map((product) =>
        `
  <div class="product">
              <img
            src=${product.img}
              alt=""
              />
              <span class="name">${product.name} </span>
              <span class="priceText">$${product.price}</span>
            </div>
  `
    ).join("")
}

displayProduct(data);

searchInput.addEventListener("keyup", (e) => {

    const value = e.target.value.toLowerCase();
    if (value) {
        displayProduct(
            data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
        );
    }
    else {
        displayProduct(data);
    }
})


// now display catagery

const setCateroy = () => {
    const allCats = data.map(item => item.cat)
    const categories = ["All", ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i
    })].map(cat => cat.toUpperCase());
    console.log(categories);

    CategoriesContainer.innerHTML = categories.map((cat) =>
        `
   <span class="cat">${cat}</span>
   `).join('')


    // set click event


    CategoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;
        console.log(selectedCat);

        selectedCat === "ALL"
            ? displayProduct(data)
            : displayProduct(data.filter((data) => data.cat.toUpperCase() === selectedCat));
    })

};




const setPrices = () => {
    const priceList = data.map((item) => item.price)
    const minimumPrice = Math.min(...priceList);
    const maximunprice = Math.max(...priceList);
    console.log(minimumPrice + " " + maximunprice);
    priceRange.min = minimumPrice;
    priceRange.max = maximunprice;
    priceRange.value = maximunprice;
    priceValue.textContent = "$" + maximunprice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProduct(data.filter(item=>item.price <= e.target.value ))



    })


}




setCateroy();
setPrices();




