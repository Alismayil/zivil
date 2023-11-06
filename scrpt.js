const usd = document.querySelector(".usd-li");
const usdSubMenu = document.querySelector(".usd-submenu");
const usdResp = document.querySelector(".resp-usd-li");
const usdSubMenuResp = document.querySelector(".resp-usd-submenu");
const language = document.querySelector(".language-li");
const languageSubMenu = document.querySelector(".language-submenu");
const languageResp = document.querySelector(".resp-language-li");
const languageSubMenuResp = document.querySelector(".resp-language-submenu");
const userResp = document.querySelector(".resp-user-li");
const userSubMenuResp = document.querySelector(".resp-user-submenu");
const homeRespHomeLi = document.querySelector(".resp-li-home");
const homeRespHomeLiSubMenu = document.querySelector(".resp-li-home-submenu");
const blogRespHomeLi = document.querySelector(".resp-li-blog");
const blogRespHomeLiSubMenu = document.querySelector(".resp-li-blog-submenu");
const pagesRespHomeLi = document.querySelector(".resp-li-pages");
const pagesRespHomeLiSubMenu = document.querySelector(".resp-li-pages-submenu");
const shopRespHomeLi = document.querySelector(".resp-li-shop");
const shopRespHomeLiSubMenu = document.querySelector(".resp-li-shop-submenu");
// navbar accordion
const shopRespHomeLiSubMenu1 = document.querySelector(
  ".resp-li-shop-submenu-1"
);
const shopRespHomeLiSubMenu2 = document.querySelector(
  ".resp-li-shop-submenu-2"
);
const shopRespHomeLiSubMenu3 = document.querySelector(
  ".resp-li-shop-submenu-3"
);
// navbar accordion

const blogRespHomeLiSubMenu1 = document.querySelector(
  ".resp-li-blog-submenu-1"
);
const shopRespSection1 = document.querySelector(".resp-shop-section-1");
const shopRespSection2 = document.querySelector(".resp-shop-section-2");
const shopRespSection3 = document.querySelector(".resp-shop-section-3");
const deleteBtn = document.querySelector(".deleteBtn");
const RespNavbar = document.querySelector(".resp-navbar");
const BarIcon = document.getElementById("bar");
// new planet slider
const Slider1 = document.querySelector("#plant-img-1");
const Slider2 = document.querySelector("#plant-img-2");
const SliderPage1 = document.querySelector("#container-plant-1");
const SliderPage2 = document.querySelector("#container-plant-2");
const sliderLeft1 = document.querySelector(".plant-page-change-left-1");
const sliderRight1 = document.querySelector(".plant-page-change-right-1");
const sliderLeft2 = document.querySelector(".plant-page-change-left-2");
const sliderRight2 = document.querySelector(".plant-page-change-right-2");
// new planet slider

//basket
// let basketpushArr = [];

// new planet click
SliderPage2.style.display = "none";

sliderLeft1.addEventListener("click", (e) => {
  e.preventDefault();
  SliderPage2.style.display = "flex";
  SliderPage1.style.display = "none";
});
sliderRight1.addEventListener("click", (e) => {
  e.preventDefault();
  SliderPage2.style.display = "flex";
  SliderPage1.style.display = "none";
});
sliderRight2.addEventListener("click", (e) => {
  e.preventDefault();
  SliderPage1.style.display = "flex";
  SliderPage2.style.display = "none";
});
sliderLeft2.addEventListener("click", (e) => {
  e.preventDefault();
  SliderPage1.style.display = "flex";
  SliderPage2.style.display = "none";
});

// new planet click

// search click
const searchIcon = document.querySelector("#search-icon");
const searchIconDelete = document.querySelector("#search-icon-delete");
const searchSubmenu = document.querySelector(".not-mean-6");
// search click

// group click
searchSubmenu.style.visibility = "hidden";

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchSubmenu.style.visibility = "visible";
});
searchIconDelete.addEventListener("click", (e) => {
  e.preventDefault();
  searchSubmenu.style.visibility = "hidden";
});
// products click

// heard click
const heardIcon = document.querySelector("#heard");
// heard click

// heard click

heardIcon.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Uzerinde isler aparilir, Muvəqqəti narahatçılığa görə üzr isdəyirik");
});
// heard click

// basket click
const basketIcon = document.querySelector("#baskets");
const basketPage = document.querySelector(".basket-page");
const basketDelete = document.querySelector("#basket-delete");
const notMean = document.querySelector(".not-mean-7");

// basket click

// basket click

basketIcon.addEventListener("click", (e) => {
  e.preventDefault();
  basketPage.style.display = "block";
  notMean.style.display = "block";
});

basketDelete.addEventListener("click", (e) => {
  e.preventDefault();
  basketPage.style.display = "none";
  notMean.style.display = "none";
});
// basket click

// group click
const groupIcon = document.querySelector("#group");
const groupSubmenu = document.querySelector(".group-submenu");
// group click

groupIcon.addEventListener("click", (e) => {
  e.preventDefault();
  groupSubmenu.classList.toggle("groupOpen");
  languageSubMenu.classList.remove("languageOpen");
  usdSubMenu.classList.remove("usdOpen");
});

// normal navbar started
usd.addEventListener("click", (e) => {
  e.preventDefault();
  usdSubMenu.classList.toggle("usdOpen");
  languageSubMenu.classList.remove("languageOpen");
  groupSubmenu.classList.remove("groupOpen");
});

language.addEventListener("click", (e) => {
  e.preventDefault();
  languageSubMenu.classList.toggle("languageOpen");
  usdSubMenu.classList.remove("usdOpen");
  groupSubmenu.classList.remove("groupOpen");
});

// normal navbar end

// responsive navbar started
usdResp.addEventListener("click", (e) => {
  e.preventDefault();
  usdSubMenuResp.classList.toggle("usdOpenResp");
  languageSubMenuResp.classList.remove("languageOpenResp");
  userSubMenuResp.classList.remove("userOpenResp");
});

languageResp.addEventListener("click", (e) => {
  e.preventDefault();
  languageSubMenuResp.classList.toggle("languageOpenResp");
  usdSubMenuResp.classList.remove("usdOpenResp");
  userSubMenuResp.classList.remove("userOpenResp");
});
userResp.addEventListener("click", (e) => {
  e.preventDefault();
  userSubMenuResp.classList.toggle("userOpenResp");
  languageSubMenuResp.classList.remove("languageOpenResp");
  usdSubMenuResp.classList.remove("usdOpenResp");
});
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  RespNavbar.style.display = "none";
});

BarIcon.addEventListener("click", (e) => {
  e.preventDefault();
  RespNavbar.style.display = "block";
});

homeRespHomeLi.addEventListener("click", (e) => {
  e.preventDefault();
  homeRespHomeLiSubMenu.classList.toggle("homeOpenRespSubMenu");
  blogRespHomeLiSubMenu.classList.remove("blogOpenRespSubMenu");
  pagesRespHomeLiSubMenu.classList.remove("pagesOpenRespSubMenu");
  shopRespHomeLiSubMenu.classList.remove("shopOpenRespSubMenu");
});

blogRespHomeLi.addEventListener("click", (e) => {
  e.preventDefault();
  blogRespHomeLiSubMenu.classList.toggle("blogOpenRespSubMenu");
  homeRespHomeLiSubMenu.classList.remove("homeOpenRespSubMenu");
  pagesRespHomeLiSubMenu.classList.remove("pagesOpenRespSubMenu");
  shopRespHomeLiSubMenu.classList.remove("shopOpenRespSubMenu");
});
blogRespHomeLiSubMenu.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  blogRespHomeLiSubMenu1.classList.toggle("blog1OpenRespSubMenu");
});
shopRespSection1.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  shopRespHomeLiSubMenu1.classList.toggle("shop1OpenRespSubMenu");
  shopRespHomeLiSubMenu2.classList.remove("shop2OpenRespSubMenu");
  shopRespHomeLiSubMenu3.classList.remove("shop3OpenRespSubMenu");
});
shopRespSection2.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  shopRespHomeLiSubMenu2.classList.toggle("shop2OpenRespSubMenu");
  shopRespHomeLiSubMenu1.classList.remove("shop1OpenRespSubMenu");
  shopRespHomeLiSubMenu3.classList.remove("shop3OpenRespSubMenu");
});
shopRespSection3.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  shopRespHomeLiSubMenu3.classList.toggle("shop3OpenRespSubMenu");
  shopRespHomeLiSubMenu1.classList.remove("shop1OpenRespSubMenu");
  shopRespHomeLiSubMenu2.classList.remove("shop2OpenRespSubMenu");
});
pagesRespHomeLi.addEventListener("click", (e) => {
  e.preventDefault();
  pagesRespHomeLiSubMenu.classList.toggle("pagesOpenRespSubMenu");
  homeRespHomeLiSubMenu.classList.remove("homeOpenRespSubMenu");
  blogRespHomeLiSubMenu.classList.remove("blogOpenRespSubMenu");
  shopRespHomeLiSubMenu.classList.remove("shopOpenRespSubMenu");
});

shopRespHomeLi.addEventListener("click", (e) => {
  e.preventDefault();
  shopRespHomeLiSubMenu.classList.toggle("shopOpenRespSubMenu");
  homeRespHomeLiSubMenu.classList.remove("homeOpenRespSubMenu");
  blogRespHomeLiSubMenu.classList.remove("blogOpenRespSubMenu");
  pagesRespHomeLiSubMenu.classList.remove("pagesOpenRespSubMenu");
});
// blogRespSection1.addEventListener('click',(e)=>{
//     e.preventDefault()
//     e.stopPropagation()
//     shopRespHomeLiSubMenu1.classList.toggle('shop1OpenRespSubMenu')

// })

// responsive navbar end

// -----------------------------------------------------


// ---------------------basket--------------------------------
const featureBox = document.getElementById('featured-box')
let basketpushArr 
if (getLocalStorage('basket')) {
  basketpushArr = getLocalStorage('basket')
}
else{
  basketpushArr=[]
}


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}


function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}


function createCard(id, productImg, productName, productPrice) {
  const card = document.createElement('div')
  const img = document.createElement('img')
  const name = document.createElement('div')
  const price = document.createElement('div')
  const hoverBtns = document.createElement('div')
  const likeBtn = document.createElement('div')
  const seeBtn = document.createElement('div')
  const basketBtn = document.createElement('div')


  name.classList.add('name')
  price.classList.add('price')
  hoverBtns.classList.add('hoverBtns')
  basketBtn.classList.add('basketBtn')
  seeBtn.classList.add('seeBtn')
  likeBtn.classList.add('likeBtn')
  card.classList.add('card')


  img.src = productImg
  name.textContent = productName
  price.textContent = productPrice
  basketBtn.innerHTML = `<i class="fa-brands fa-opencart"></i>`
  seeBtn.innerHTML = `<i class="fa-regular fa-eye"></i>`
  likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`

  card.innerHTML = `
  <div class='stars'>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
  </div>
  
  `

  basketBtn.onclick = function (e) {
    basketpushArr.push({
      id,
      productImg,
      productName,
      productPrice
    })
    setLocalStorage('basket', basketpushArr)
    basketPull.innerHTML=""
    basketpushArr=getLocalStorage('basket')
    generateBasketCard()
  }

  hoverBtns.append(likeBtn, seeBtn, basketBtn)
  card.append(img, name, price, hoverBtns)
  featureBox.append(card)
}

function getProduct() {
  axios.get("http://localhost:3000/Pronia")
    .then(x => {
      x.data.forEach(element => {
        createCard(element.id, element.image, element.name, element.price)
      });
    })

}
getProduct()

// --------------------------basketpull---------------------

const basketPull = document.querySelector('.basket-pull')
function basketPageAdd(id, img, name, price) {
  const boxView = document.createElement('div')
  boxView.innerHTML=""
  boxView.innerHTML = `
                  <img src=' ${img}' class="box-view-left">
                    </img>
                        <div class="box-view-middle">
                            <p>${name}</p>
                            <span>${price}
                            <div class='temp'>
                            <div class='minus'>-</div>
                                  <div class='number'>1</div>
                            <div  class='plus'>+</div>
                            </div>
                            </span>
                            
                        </div>
                      <span class="box-view-right"> 
                      <i class="fa-solid fa-xmark">
                      </i>
                  </span>
  `
const removeBtn=boxView.querySelector('.box-view-right')
removeBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  basketpushArr=basketpushArr.filter((x)=>x.id!==id)
  console.log(basketpushArr);
console.log(id);
  setLocalStorage('basket', basketpushArr)
  boxView.innerHTML=""
  generateBasketCard()
})

  boxView.classList.add('box-view')

  basketPull.append(boxView)

}
function generateBasketCard() {
  basketpushArr.forEach(element => {
    basketPageAdd(element.id, element.productImg, element.productName, element.productPrice)
  
  });
}
generateBasketCard()

// basketpushArr.forEach(element => createCard(element.id, element.image, element.name, element.price));


// axios ile
// const res = await axios.get("http://localhost:3000/Pronia")
// res.data.forEach(element => {
//   createCard(element.image, element.name, element.price)


// })
// -----------------------------------------------------

