



// const wrapper = document.querySelector(".sliderWrapper");
// const menuItems = document.querySelectorAll(".menuItem");
// menuItems.forEach((item, index) => {
//   const handler = () => {
//     wrapper.style.transform = `translateX(${-100 * index}vw)`;
//   };

//   item.addEventListener("click", handler);
//   item.addEventListener("touchstart", handler); 




// });











// const products = [
//   {
//     id: 1,
//     title: "BRUTON EVA",
//     price: 999,
//     colors: [
//       { code: "darkblue", img: "shoes1.png" },
//       { code: "black", img: "shoes1.2.png" },
//     ],
//   },
//   {
//     id: 2,
//     title: "PUMA",
//     price: 892,
//     colors: [
//       { code: "darkblue", img: "shoes2.png" },
//       { code: "black", img: "shoes2.2.png" },
//     ],
//   },
//   {
//     id: 3,
//     title: "ADIDAS",
//     price: 1000,
//     colors: [
//       { code: "green", img: "shoes3.png" },
//       { code: "black", img: "shoes2.2.png" },
//     ],
//   },
//   {
//     id: 4,
//     title: "NIKE",
//     price: 799,
//     colors: [
//       { code: "white", img: "shoes4.png" },
//       { code: "black", img: "shoes2.2.png" },
//     ],
//   },
//   {
//     id: 5,
//     title: "LAMBARD",
//     price: 809,
//     colors: [
//       { code: "white", img: "shoes5.png" },
//       { code: "black", img: "shoes2.2.png" },
//     ],
//   },
// ];

// // Initial product
// let chosenProduct = products[0];

// // DOM references
// const wrapper = document.querySelector(".sliderWrapper");
// const menuItems = document.querySelectorAll(".menuItem");
// const currentProductImg = document.querySelector(".productImg");
// const currentProductTitle = document.querySelector(".productTitle");
// const currentProductPrice = document.querySelector(".productPrice");
// const colorElements = document.querySelectorAll(".color");

// // Function to update product display
// function updateProduct(index) {
//   chosenProduct = products[index];

//   // Slide animation
//   wrapper.style.transform = `translateX(${-100 * index}vw)`;

//   // Update product data
//   currentProductTitle.textContent = chosenProduct.title;
//   currentProductPrice.textContent = "₹" + chosenProduct.price;
//   currentProductImg.src = chosenProduct.colors[0].img;


//   currentProducColors.forEach((color,index)=>{
//     color.style.backgroundColor= chosenProduct.colors[index].code
//   })

//   // Update color circles
//   colorElements.forEach((color, i) => {
//     if (chosenProduct.colors[i]) {
//       color.style.backgroundColor = chosenProduct.colors[i].code;
//       color.style.display = "inline-block";
//     } else {
//       color.style.display = "none";
//     }
//     color.classList.remove("active");
//   });

//   colorElements[0].classList.add("active");

//   // Highlight menu item
//   menuItems.forEach(mi => mi.classList.remove("active"));
//   menuItems[index].classList.add("active");
// }

// // Event listeners for menu items
// menuItems.forEach((item, index) => {
//   const handler = () => updateProduct(index);
//   item.addEventListener("click", handler);
//   item.addEventListener("touchstart", handler);
// });

// // Event listeners for color selection
// colorElements.forEach((color, index) => {
//   color.addEventListener("click", () => {
//     if (chosenProduct.colors[index]) {
//       currentProductImg.src = chosenProduct.colors[index].img;
//       colorElements.forEach(c => c.classList.remove("active"));
//       color.classList.add("active");
//     }
//   });
// });

// // Initial display
// updateProduct(0);





const products = [
  {
    id: 1,
    title: "BRUTON EVA",
    price: 999,
    colors: [
      { code: "darkblue", img: "shoes1.png" },
      { code: "black", img: "shoes1.2.png" },
    ],
  },
  {
    id: 2,
    title: "PUMA",
    price: 892,
    colors: [
      { code: "darkblue", img: "shoes2.png" },
      { code: "black", img: "shoes2.2.png" },
    ],
  },
  {
    id: 3,
    title: "ADIDAS",
    price: 1000,
    colors: [
      { code: "gray", img: "shoes 3.png" },
      { code: "darkgreen", img: "shoes 3.1.png" },
    ],
  },
  {
    id: 4,
    title: "NIKE",
    price: 799,
    colors: [
      { code: "lightblue", img: "shoes4.png" },
      { code: "lightgray", img: "shoes4.1.png" },
    ],
  },
  {
    id: 5,
    title: "CANVAS",
    price: 809,
    colors: [
      { code: "black", img: "shoes5.png" },
      { code: "red", img: "shoes5.1.png" },
    ],
  },
];

// Initial product
let chosenProduct = products[0];

// DOM references
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const colorElements = document.querySelectorAll(".color");

// Function to update product display
function updateProduct(index) {
  chosenProduct = products[index];

  // Slide animation
  wrapper.style.transform = `translateX(${-100 * index}vw)`;

  // Update product data
  currentProductTitle.textContent = chosenProduct.title;
  currentProductPrice.textContent = "₹" + chosenProduct.price;
  currentProductImg.src = chosenProduct.colors[0].img;

  // Update color circles
  colorElements.forEach((color, i) => {
    if (chosenProduct.colors[i]) {
      color.style.backgroundColor = chosenProduct.colors[i].code;
      color.style.display = "inline-block";
    } else {
      color.style.display = "none";
    }
    color.classList.remove("active");
  });

  // Set first color active by default
  colorElements[0].classList.add("active");

  // Highlight active menu item
  menuItems.forEach(mi => mi.classList.remove("active"));
  menuItems[index].classList.add("active");
}

// Event listeners for menu items
menuItems.forEach((item, index) => {
  const handler = () => updateProduct(index);
  item.addEventListener("click", handler);
  item.addEventListener("touchstart", handler);
});

// Event listeners for color selection
colorElements.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (chosenProduct.colors[index]) {
      currentProductImg.src = chosenProduct.colors[index].img;

      // Remove all active classes
      colorElements.forEach(c => c.classList.remove("active"));

      // Highlight the clicked color
      color.classList.add("active");
    }
  });
});

// Initial display
updateProduct(0);
