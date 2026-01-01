let current = 1; 

  function showOffer() {
    document.getElementById("offer1").style.display = "none";
    document.getElementById("offer2").style.display = "none";
    document.getElementById("offer3").style.display = "none";

    document.getElementById(`offer${current}`).style.display = "block";
  }

  function nextOffer() {
    current++;
    if (current > 3) current = 1;
    showOffer();
  }

  function prevOffer() {
    current--;
    if (current < 1) current = 3;
    showOffer();
  }
  showOffer();

const menuData = [
    { name:"LASAL CHEESE", price:"$18.00", img:"food1.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"JUMBO CRAB SHRIMP", price:"$24.00", img:"food2.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"KOKTAIL JUICE", price:"$12.00", img:"food3.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"CAPO STEAK", price:"$60.00", img:"food4.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"ORGANIC FRUIT SALAD", price:"$8.00", img:"food5.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"CHEESE PIZZA", price:"$18.00", img:"food6.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},

    { name:"KOFTA MEAT", price:"$40.00", img:"food1.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"SPANISH PIES", price:"$14.00", img:"food2.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"CHEESE TOST", price:"$6.00", img:"food3.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"FRUIT SALAD", price:"$14.00", img:"food4.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"CHICKEN SHAWARMA", price:"$20.00", img:"food5.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { name:"MEGA CHEESE PIZZA", price:"$30.00", img:"food6.png", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
];

let menuContainer = document.getElementById("menuContainer");

menuData.forEach(item =>{
    menuContainer.innerHTML += `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-info">
                <h3>${item.name} <span>${item.price}</span></h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `;
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let para1 = document.getElementById("para1");
    let para2 = document.getElementById("para2");
    let para3 = document.getElementById("para3");

   
    para1.style.display = "none";
    para2.style.display = "none";
    para3.style.display = "none";

    let valid = true;

   
    if (name.length < 3 || name.length > 15) {
        para1.innerHTML = "Name must be 3-15 characters.";
        para1.style.display = "block";
        valid = false;
    }

   
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        para2.innerHTML = "Please enter a valid email.";
        para2.style.display = "block";
        valid = false;
    }

    
    if (subject === "") {
        para3.innerHTML = "Subject cannot be empty.";
        para3.style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Message sent!"); 
        this.submit();
    }
}); 
var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img-gallery img");
// Convert NodeList to array
var imagesArr = [];
for (var i = 0; i < images.length; i++) {
imagesArr.push(images[i]);
}
var currentIndex = 0;
// Function to display image in popup
function showImage(index) {
boxItem.style.backgroundImage = "url(" + imagesArr[index].src + ")";
}
28
// When image is clicked → open popup
for (var j = 0; j < imagesArr.length; j++) {
(function (j) {
imagesArr[j].addEventListener("click", function () {
BoxContainer.style.display = "flex";
currentIndex = j;
showImage(currentIndex);
});
})(j);
}
BtnClose.addEventListener("click", function () {
BoxContainer.style.display = "none";
});
// Next image
nextBtn.addEventListener("click", function () {
currentIndex++;
if (currentIndex === imagesArr.length) {
currentIndex = 0;
}
showImage(currentIndex);
});
prevBtn.addEventListener("click", function () {
currentIndex--;
if (currentIndex < 0) {
currentIndex = imagesArr.length - 1;
}
showImage(currentIndex);
});
// Close popup when clicking outside
BoxContainer.addEventListener("click", function (event) {
if (event.target === BoxContainer) {
BoxContainer.style.display = "none";
}
});
// Start Gallery Section

// Get elements
var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".img-gallery img");

// Convert NodeList to array
var imagesArr = [];
for (var i = 0; i < images.length; i++) {
imagesArr.push(images[i]);
}

var currentIndex = 0;


function showImage(index) {
boxItem.style.backgroundImage = "url(" + imagesArr[index].src +
")";
}

28


for (var j = 0; j < imagesArr.length; j++) {
(function (j) {
imagesArr[j].addEventListener("click", function () {
BoxContainer.style.display = "flex";
currentIndex = j;
showImage(currentIndex);
});
})(j);
}
BtnClose.addEventListener("click", function () {
BoxContainer.style.display = "none";
});


nextBtn.addEventListener("click", function () {
currentIndex++;
if (currentIndex === imagesArr.length) {
currentIndex = 0;
}
showImage(currentIndex);
});

29

prevBtn.addEventListener("click", function () {
currentIndex--;
if (currentIndex < 0) {
currentIndex = imagesArr.length - 1;
}
showImage(currentIndex);
});

// Close popup when clicking outside
BoxContainer.addEventListener("click", function (event) {
if (event.target === BoxContainer) {
BoxContainer.style.display = "none";
}
});

