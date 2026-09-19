/* =========================================================
   OSS DIGITAL CATALOG
   FIRESTORE LIVE CATALOG
   ADMIN PANEL NAME UPDATE SUPPORT
========================================================= */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


/* =========================================================
   FIREBASE
========================================================= */

const firebaseConfig = {
  apiKey: "AIzaSyBY7FpGggnMnv-IsqG81rjY1ofCWRm48wk",
  authDomain: "oss-digital-catalog.firebaseapp.com",
  projectId: "oss-digital-catalog",
  storageBucket: "oss-digital-catalog.firebasestorage.app",
  messagingSenderId: "294933773409",
  appId: "1:294933773409:web:3a62fc14daaa9d344cfe20",
  measurementId: "G-GT8YNKQJ5K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/* =========================================================
   SETTINGS
========================================================= */

const WHATSAPP_NUMBER = "9499806747";

let products = [];
let selectedProducts = new Set();

let activeCategory = "All";
let activeStock = "All";


/* =========================================================
   DOM
========================================================= */

const grid = document.getElementById("grid");
const count = document.getElementById("count");
const search = document.getElementById("search");
const cats = document.getElementById("cats");

const bar = document.getElementById("bar");
const selectedCount = document.getElementById("selectedCount");
const multiButton = document.getElementById("multi");


/* =========================================================
   FORCE CLEAN CATALOG DESIGN
========================================================= */

const style = document.createElement("style");

style.textContent = `

/* ===============================
   PRODUCT GRID
================================ */

#grid.grid {

  display:grid !important;

  grid-template-columns:
    repeat(2,minmax(0,1fr)) !important;

  gap:18px !important;

  width:100% !important;

  align-items:start !important;

}


/* ===============================
   PRODUCT CARD
================================ */

#grid .product-card {

  width:100% !important;

  min-width:0 !important;

  background:#ffffff !important;

  border-radius:18px !important;

  overflow:hidden !important;

  border:1px solid #e2e6eb !important;

  box-shadow:
    0 5px 18px rgba(0,0,0,.08) !important;

  display:flex !important;

  flex-direction:column !important;

}


/* ===============================
   IMAGE
================================ */

#grid .product-image-wrap {

  width:100% !important;

  height:260px !important;

  background:#f5f5f5 !important;

  display:flex !important;

  align-items:center !important;

  justify-content:center !important;

  overflow:hidden !important;

}


#grid .product-image-wrap img {

  width:100% !important;

  height:100% !important;

  object-fit:cover !important;

  display:block !important;

}


/* ===============================
   BODY
================================ */

#grid .product-body {

  padding:14px !important;

  background:#fff !important;

}


/* ===============================
   CODE
================================ */

#grid .product-code {

  color:#718096 !important;

  font-size:12px !important;

  font-weight:700 !important;

  margin-bottom:6px !important;

}


/* ===============================
   PRODUCT NAME
================================ */

#grid .product-name {

  color:#071b3a !important;

  font-size:18px !important;

  line-height:1.25 !important;

  margin:0 0 7px 0 !important;

  font-weight:800 !important;

}


/* ===============================
   CATEGORY
================================ */

#grid .product-category {

  color:#5c6675 !important;

  font-size:13px !important;

  margin-bottom:8px !important;

}


/* ===============================
   STOCK
================================ */

#grid .stock-in,
#grid .stock-coming,
#grid .stock-out {

  display:inline-block !important;

  padding:6px 10px !important;

  border-radius:20px !important;

  font-size:12px !important;

  font-weight:700 !important;

  margin-bottom:8px !important;

}


#grid .stock-in {

  background:#dff6e5 !important;

  color:#16733a !important;

}


#grid .stock-coming {

  background:#fff1c9 !important;

  color:#956d00 !important;

}


#grid .stock-out {

  background:#ffdede !important;

  color:#a00000 !important;

}


/* ===============================
   MOQ
================================ */

#grid .product-moq {

  color:#c62828 !important;

  font-size:13px !important;

  font-weight:700 !important;

  margin-bottom:12px !important;

}


/* ===============================
   BUTTONS
================================ */

#grid .product-actions {

  display:flex !important;

  gap:9px !important;

  width:100% !important;

}


#grid .whatsapp-btn {

  flex:1 !important;

  border:0 !important;

  border-radius:10px !important;

  background:#1c9b50 !important;

  color:#fff !important;

  padding:12px 10px !important;

  font-size:14px !important;

  font-weight:700 !important;

  cursor:pointer !important;

}


#grid .select-btn {

  width:52px !important;

  min-width:52px !important;

  border:0 !important;

  border-radius:10px !important;

  background:#17375f !important;

  color:#fff !important;

  font-size:25px !important;

  font-weight:700 !important;

  cursor:pointer !important;

}


#grid .select-btn.selected {

  background:#1c9b50 !important;

}


/* ===============================
   CATEGORY BUTTONS
================================ */

#cats {

  display:flex !important;

  flex-wrap:wrap !important;

  gap:7px !important;

}


#cats button {

  border:1px solid #d7dce2 !important;

  background:#fff !important;

  color:#172033 !important;

  border-radius:20px !important;

  padding:8px 12px !important;

  font-size:12px !important;

  font-weight:700 !important;

  cursor:pointer !important;

}


#cats button.active {

  background:#071b3a !important;

  color:#fff !important;

  border-color:#071b3a !important;

}


/* ===============================
   STOCK FILTER
================================ */

.filters button {

  cursor:pointer !important;

}


.filters button.active {

  background:#071b3a !important;

  color:#fff !important;

}


/* ===============================
   MOBILE
================================ */

@media(max-width:700px){

  #grid.grid {

    grid-template-columns:
      repeat(2,minmax(0,1fr)) !important;

    gap:10px !important;

  }


  #grid .product-image-wrap {

    height:170px !important;

  }


  #grid .product-body {

    padding:9px !important;

  }


  #grid .product-name {

    font-size:14px !important;

    line-height:1.25 !important;

  }


  #grid .product-code {

    font-size:10px !important;

  }


  #grid .product-category {

    font-size:10px !important;

  }


  #grid .product-moq {

    font-size:10px !important;

  }


  #grid .whatsapp-btn {

    font-size:10px !important;

    padding:9px 4px !important;

  }


  #grid .select-btn {

    width:38px !important;

    min-width:38px !important;

    font-size:20px !important;

  }

}


@media(max-width:430px){

  #grid .product-image-wrap {

    height:155px !important;

  }

}


`;


document.head.appendChild(style);


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getName(product) {

  /*
     ADMIN PANEL saves:
     name

     Compatibility:
     productName
     title
  */

  return (
    product.name ||
    product.productName ||
    product.title ||
    "Unnamed Product"
  );

}


function getCategory(product) {

  return (
    product.category ||
    "Other"
  );

}


function getStock(product) {

  return (
    product.stock ||
    product.status ||
    "In Stock"
  );

}


function getImage(product) {

  return (
    product.image ||
    product.imageUrl ||
    product.photo ||
    "538820.jpg"
  );

}


function getMOQ(product) {

  return (
    product.moq ||
    "₹500 Minimum Order Quantity (MOQ)"
  );

}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function compareCodes(a,b) {

  const x =
    parseInt(
      String(a || "").replace(/\D/g,"")
    ) || 999999;

  const y =
    parseInt(
      String(b || "").replace(/\D/g,"")
    ) || 999999;

  return x-y;

}


/* =========================================================
   FIRESTORE LIVE
========================================================= */

onSnapshot(

  collection(db,"products"),

  function(snapshot){

    products = [];

    snapshot.forEach(function(doc){

      products.push({

        id:doc.id,

        ...doc.data()

      });

    });


    products.sort(function(a,b){

      return compareCodes(
        a.code || a.id,
        b.code || b.id
      );

    });


    renderCategories();

    renderProducts();

  },

  function(error){

    console.error(
      "Firestore error:",
      error
    );

    if(grid){

      grid.innerHTML = `

        <div style="
          grid-column:1/-1;
          text-align:center;
          padding:40px;
          color:#c62828;
          font-weight:bold;
        ">

          Firebase connection error.

        </div>

      `;

    }

  }

);


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories(){

  if(!cats) return;

  const set =
    new Set();

  products.forEach(function(product){

    set.add(
      getCategory(product)
    );

  });


  cats.innerHTML = "";


  const all =
    document.createElement("button");

  all.textContent = "All";

  if(activeCategory === "All"){

    all.classList.add("active");

  }


  all.onclick = function(){

    activeCategory = "All";

    renderCategories();

    renderProducts();

  };


  cats.appendChild(all);


  Array
    .from(set)
    .sort()
    .forEach(function(category){

      const button =
        document.createElement("button");

      button.textContent =
        category;

      if(
        activeCategory === category
      ){

        button.classList.add("active");

      }


      button.onclick = function(){

        activeCategory =
          category;

        renderCategories();

        renderProducts();

      };


      cats.appendChild(button);

    });

}


/* =========================================================
   STOCK FILTER
========================================================= */

document
  .querySelectorAll(".filters button")
  .forEach(function(button){

    button.addEventListener(
      "click",
      function(){

        document
          .querySelectorAll(
            ".filters button"
          )
          .forEach(function(btn){

            btn.classList.remove(
              "active"
            );

          });


        button.classList.add(
          "active"
        );


        activeStock =
          button.dataset.filter ||
          "All";


        renderProducts();

      }
    );

  });


/* =========================================================
   SEARCH
========================================================= */

if(search){

  search.addEventListener(
    "input",
    function(){

      renderProducts();

    }
  );

}


/* =========================================================
   RENDER
========================================================= */

function renderProducts(){

  if(!grid) return;


  const searchText =
    search
      ? search.value
          .toLowerCase()
          .trim()
      : "";


  const filtered =
    products.filter(function(product){

      const name =
        getName(product);

      const code =
        product.code ||
        product.id ||
        "";

      const category =
        getCategory(product);

      const stock =
        getStock(product);


      const searchable =
        (
          name +
          " " +
          code +
          " " +
          category
        )
          .toLowerCase();


      const searchMatch =
        !searchText ||
        searchable.includes(
          searchText
        );


      const categoryMatch =
        activeCategory === "All" ||
        category === activeCategory;


      const stockMatch =
        activeStock === "All" ||
        stock === activeStock;


      return (
        searchMatch &&
        categoryMatch &&
        stockMatch
      );

    });


  if(count){

    count.textContent =
      `${filtered.length} Products`;

  }


  grid.innerHTML = "";


  if(filtered.length === 0){

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:40px;
        font-weight:bold;
        color:#555;
      ">

        No products found.

      </div>

    `;

    return;

  }


  filtered.forEach(function(product){

    const name =
      getName(product);

    const code =
      product.code ||
      product.id ||
      "";

    const category =
      getCategory(product);

    const stock =
      getStock(product);

    const image =
      getImage(product);

    const moq =
      getMOQ(product);


    let stockClass =
      "stock-in";


    if(stock === "Coming Soon"){

      stockClass =
        "stock-coming";

    }


    if(stock === "Out of Stock"){

      stockClass =
        "stock-out";

    }


    const selected =
      selectedProducts.has(
        product.id
      );


    const card =
      document.createElement("article");


    card.className =
      "product-card";


    card.innerHTML = `

      <div class="product-image-wrap">

        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(name)}"
          loading="lazy"
          onerror="
            this.onerror=null;
            this.src='538820.jpg';
          "
        >

      </div>


      <div class="product-body">

        <div class="product-code">

          ${escapeHTML(code)}

        </div>


        <h2 class="product-name">

          ${escapeHTML(name)}

        </h2>


        <div class="product-category">

          ${escapeHTML(category)}

        </div>


        <div class="${stockClass}">

          ${escapeHTML(stock)}

        </div>


        <div class="product-moq">

          ${escapeHTML(moq)}

        </div>


        <div class="product-actions">

          <button
            class="whatsapp-btn"
            data-id="${escapeHTML(product.id)}"
          >
            WhatsApp Enquiry
          </button>


          <button
            class="select-btn ${
              selected ? "selected" : ""
            }"
            data-id="${escapeHTML(product.id)}"
          >
            ${
              selected
                ? "✓"
                : "+"
            }
          </button>

        </div>

      </div>

    `;


    /* ===============================
       WHATSAPP
    =============================== */

    card
      .querySelector(".whatsapp-btn")
      .addEventListener(
        "click",
        function(){

          sendSingleEnquiry(
            product.id
          );

        }
      );


    /* ===============================
       SELECT
    =============================== */

    card
      .querySelector(".select-btn")
      .addEventListener(
        "click",
        function(){

          toggleProduct(
            product.id
          );

        }
      );


    grid.appendChild(card);

  });


  updateBar();

}


/* =========================================================
   SINGLE WHATSAPP
========================================================= */

function sendSingleEnquiry(id){

  const product =
    products.find(function(p){

      return p.id === id;

    });


  if(!product) return;


  const name =
    getName(product);

  const code =
    product.code ||
    product.id ||
    "";


  const category =
    getCategory(product);


  const message =
`Hello OSS,

I am interested in this product:

Product: ${name}
Code: ${code}
Category: ${category}

Please share the wholesale price and details.`;


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(
      message
    );


  window.open(
    url,
    "_blank"
  );

}


/* =========================================================
   SELECT PRODUCT
========================================================= */

function toggleProduct(id){

  if(
    selectedProducts.has(id)
  ){

    selectedProducts.delete(id);

  }else{

    selectedProducts.add(id);

  }


  renderProducts();

}


/* =========================================================
   SELECTION BAR
========================================================= */

function updateBar(){

  const total =
    selectedProducts.size;


  if(selectedCount){

    selectedCount.textContent =
      total;

  }


  if(bar){

    if(total > 0){

      bar.classList.remove(
        "hidden"
      );

    }else{

      bar.classList.add(
        "hidden"
      );

    }

  }

}


/* =========================================================
   MULTIPLE WHATSAPP
========================================================= */

if(multiButton){

  multiButton.addEventListener(
    "click",
    function(){

      const selected =
        products.filter(function(product){

          return selectedProducts.has(
            product.id
          );

        });


      if(
        selected.length === 0
      ){

        return;

      }


      let message =
`Hello OSS,

I am interested in the following products:

`;


      selected.forEach(
        function(product,index){

          const name =
            getName(product);

          const code =
            product.code ||
            product.id ||
            "";


          message +=
`${index+1}. ${name}
Code: ${code}

`;

        }
      );


      message +=
`Please share the wholesale prices and details.`;


      const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(
          message
        );


      window.open(
        url,
        "_blank"
      );

    }
  );

}


/* =========================================================
   DEFAULT FILTER
========================================================= */

const allFilter =
  document.querySelector(
    '.filters button[data-filter="All"]'
  );


if(allFilter){

  allFilter.classList.add(
    "active"
  );

}


/* =========================================================
   DONE
========================================================= */

console.log(
  "OSS Digital Catalog — Live Firestore Connected"
);
