/* =========================================================
   OSS DIGITAL CATALOG
   MASTER PRODUCT LIST + FIRESTORE LIVE STOCK
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


/* =========================================================
   MASTER PRODUCTS
   DO NOT CHANGE ORDER / CODE / NAME / CATEGORY / IMAGE
========================================================= */

const MASTER_PRODUCTS = [

  {
    code:"OSS_001",
    name:"DOUBLE GRID SOAP BOX",
    category:"Bathroom Accessories",
    image:"OSS_001.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_002",
    name:"MINI POPCORN MAKER",
    category:"Home & Kitchen",
    image:"OSS_002.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_003",
    name:"2L MOTIVATIONAL WATTER BOTTLE",
    category:"Water Bottle",
    image:"OSS_003.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_004",
    name:"5M OUTDOOR CLOTHESLINE",
    category:"Home & Kitchen",
    image:"OSS_004.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_005",
    name:"10M OUTDOOR CLOTHESLINE",
    category:"Home & Kitchen",
    image:"OSS_005.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_006",
    name:"48PCS CAR CONTAINER",
    category:"Toys",
    image:"OSS_006.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_007",
    name:"3PCS MOTIVATION WATER BOTTLE",
    category:"Water Bottle",
    image:"OSS_007.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_008",
    name:"HOT AND COLD DORI BOTTLE",
    category:"Water Bottle",
    image:"OSS_008.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_009",
    name:"1000ML STEEL WATER BOTTLE",
    category:"Water Bottle",
    image:"OSS_009.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_010",
    name:"VACCUM FLASK SET WITH 3 CUPS",
    category:"Home & Kitchen",
    image:"OSS_010.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_011",
    name:"PLUG MOSQUITO KILLER LAMP",
    category:"Electric & Smart Gadgets",
    image:"OSS_011.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_012",
    name:"ELECTRIC GAS LIGHTER",
    category:"Electric & Smart Gadgets",
    image:"OSS_012.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_013",
    name:"PORTABLE CAR AIR MATTRESS",
    category:"Car Accessories",
    image:"OSS_013.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_014",
    name:"SOLAR RECHARGEABLE LED FLOOD LIGHT",
    category:"Electric & Smart Gadgets",
    image:"OSS_014.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_015",
    name:"ANTI SLIP TAPE WITH GLOW IN DARK STRIPE",
    category:"Tools And Hardware",
    image:"OSS_015.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_016",
    name:"PORTABLE INFLATABLE BED",
    category:"Folding Furniture",
    image:"OSS_016.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_017",
    name:"4PCS MAGNETIC CAR WINDOW CURTAIN",
    category:"Car Accessories",
    image:"OSS_017.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_018",
    name:"CLOTH DRYING ROPE WITH 12 CLIPS",
    category:"Home & Kitchen",
    image:"OSS_018.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_019",
    name:"PORTABLE MESH NEBULIZER MACHINE",
    category:"Health & Personal Care",
    image:"OSS_019.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_020",
    name:"30PCS SELF ADHESIVE TRANSPARENT BOOK COVER",
    category:"Smart Stationery",
    image:"OSS_020.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_021",
    name:"7 INCH MOVING SAND ART",
    category:"Gifts & Decor",
    image:"OSS_021.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_022",
    name:"ALL IN ONE 60W USB FAST CHARGING TRAVEL DATA CABLE SET",
    category:"Smart Gadgets",
    image:"OSS_022.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_023",
    name:"PORTABLE FOLDING CHAIR",
    category:"Folding Furniture",
    image:"OSS_023.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_024",
    name:"SLIM FLOOR WIPER MOP WITH SILICONE BLADE & TELESCOPIC HANDLE",
    category:"Multipurpose Cleaning Tool",
    image:"OSS_024.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_025",
    name:"ANTI VIBRATION PADS",
    category:"Smart Gadgets",
    image:"OSS_025.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_026",
    name:"DANCING JELLYFISH TOY WITH MUSIC & MOVEMENT",
    category:"Toys",
    image:"OSS_026.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_027",
    name:"360°METAL DESKTOP MOBILE PHONE STAND",
    category:"Mobile Accessories",
    image:"OSS_027.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_028",
    name:"ELECTRIC WATER HOT BAG",
    category:"Health & Personal Care",
    image:"OSS_028.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_029",
    name:"2.5×6 NON ADJUSTABLE FOLDING BED",
    category:"Folding Furniture",
    image:"OSS_029.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_030",
    name:"2.5×6 ADJUSTABLE FOLDING BED",
    category:"Folding Furniture",
    image:"OSS_030.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_031",
    name:"HOT & COLD 1000ML STEEL WATER BOTTLE",
    category:"Water Bottle",
    image:"OSS_031.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_032",
    name:"2PCS HD VISION DRIVING GLASSES",
    category:"Car Accessories",
    image:"OSS_032.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_033",
    name:"PORTABLE 2 IN 1 CAMPING GAS STOVE",
    category:"Travel Accessories",
    image:"OSS_033.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_034",
    name:"ELECTRIC KAPOOR DANI WITH NIGHT LAMP",
    category:"Gifts & Decor",
    image:"OSS_034.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_035",
    name:"WATER-ABSORBING RUBBER DOORMAT",
    category:"Home & Kitchen",
    image:"OSS_035.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_036",
    name:"MAGIC PRACTICE COPYBOOK",
    category:"Smart Stationery",
    image:"OSS_036.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_037",
    name:"40×40 MICROFIBER CLOTH (ONLY YELLOW)",
    category:"Multipurpose Cleaning Cloth",
    image:"OSS_037.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  },

  {
    code:"OSS_038",
    name:"Self Adhesive Door Bottom Sealing Strip Guard",
    category:"Home & Kitchen",
    image:"OSS_038.jpg",
    moq:"₹500 Minimum Order Quantity (MOQ)"
  }

];


/* =========================================================
   WORKING PRODUCTS
========================================================= */

let products =
  MASTER_PRODUCTS.map(product => ({
    ...product,
    status:"In Stock"
  }));


let selectedProducts =
  new Set();


let activeCategory =
  "All";


let activeStock =
  "All";


/* =========================================================
   DOM
========================================================= */

const grid =
  document.getElementById("grid");

const count =
  document.getElementById("count");

const search =
  document.getElementById("search");

const cats =
  document.getElementById("cats");

const bar =
  document.getElementById("bar");

const selectedCount =
  document.getElementById("selectedCount");

const multiButton =
  document.getElementById("multi");


/* =========================================================
   PRODUCT CARD STYLE
========================================================= */

const style =
  document.createElement("style");


style.textContent = `

#grid.grid{

  display:grid !important;

  grid-template-columns:
    repeat(2,minmax(0,1fr)) !important;

  gap:18px !important;

  width:100% !important;

  align-items:start !important;

}


#grid .product-card{

  width:100% !important;

  min-width:0 !important;

  background:#fff !important;

  border-radius:18px !important;

  overflow:hidden !important;

  border:1px solid #e2e6eb !important;

  box-shadow:
    0 5px 18px rgba(0,0,0,.08) !important;

  display:flex !important;

  flex-direction:column !important;

}


#grid .product-image-wrap{

  width:100% !important;

  height:260px !important;

  background:#f5f5f5 !important;

  display:flex !important;

  align-items:center !important;

  justify-content:center !important;

  overflow:hidden !important;

}


#grid .product-image-wrap img{

  width:100% !important;

  height:100% !important;

  object-fit:cover !important;

  display:block !important;

}


#grid .product-body{

  padding:14px !important;

  background:#fff !important;

}


#grid .product-code{

  color:#718096 !important;

  font-size:12px !important;

  font-weight:700 !important;

  margin-bottom:6px !important;

}


#grid .product-name{

  color:#071b3a !important;

  font-size:18px !important;

  line-height:1.25 !important;

  margin:0 0 7px 0 !important;

  font-weight:800 !important;

}


#grid .product-category{

  color:#5c6675 !important;

  font-size:13px !important;

  margin-bottom:8px !important;

}


#grid .stock-in,
#grid .stock-coming,
#grid .stock-out{

  display:inline-block !important;

  padding:6px 10px !important;

  border-radius:20px !important;

  font-size:12px !important;

  font-weight:700 !important;

  margin-bottom:8px !important;

}


#grid .stock-in{

  background:#dff6e5 !important;

  color:#16733a !important;

}


#grid .stock-coming{

  background:#fff1c9 !important;

  color:#956d00 !important;

}


#grid .stock-out{

  background:#ffdede !important;

  color:#a00000 !important;

}


#grid .product-moq{

  color:#c62828 !important;

  font-size:13px !important;

  font-weight:700 !important;

  margin-bottom:12px !important;

}


#grid .product-actions{

  display:flex !important;

  gap:9px !important;

  width:100% !important;

}


#grid .whatsapp-btn{

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


#grid .select-btn{

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


#grid .select-btn.selected{

  background:#1c9b50 !important;

}


#cats{

  display:flex !important;

  flex-wrap:wrap !important;

  gap:7px !important;

}


#cats button{

  border:1px solid #d7dce2 !important;

  background:#fff !important;

  color:#172033 !important;

  border-radius:20px !important;

  padding:8px 12px !important;

  font-size:12px !important;

  font-weight:700 !important;

  cursor:pointer !important;

}


#cats button.active{

  background:#071b3a !important;

  color:#fff !important;

  border-color:#071b3a !important;

}


.filters button{

  cursor:pointer !important;

}


.filters button.active{

  background:#071b3a !important;

  color:#fff !important;

}


@media(max-width:700px){

  #grid.grid{

    grid-template-columns:
      repeat(2,minmax(0,1fr)) !important;

    gap:10px !important;

  }


  #grid .product-image-wrap{

    height:170px !important;

  }


  #grid .product-body{

    padding:9px !important;

  }


  #grid .product-name{

    font-size:14px !important;

    line-height:1.25 !important;

  }


  #grid .product-code{

    font-size:10px !important;

  }


  #grid .product-category{

    font-size:10px !important;

  }


  #grid .product-moq{

    font-size:10px !important;

  }


  #grid .whatsapp-btn{

    font-size:10px !important;

    padding:9px 4px !important;

  }


  #grid .select-btn{

    width:38px !important;

    min-width:38px !important;

    font-size:20px !important;

  }

}


@media(max-width:430px){

  #grid .product-image-wrap{

    height:155px !important;

  }

}

`;

document.head.appendChild(style);


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

function renderCategories(){

  if(!cats) return;


  const categories = [
    "All",
    ...new Set(
      MASTER_PRODUCTS.map(
        product => product.category
      )
    )
  ];


  cats.innerHTML =
    categories
      .map(category => `

        <button
          type="button"
          class="${
            activeCategory === category
              ? "active"
              : ""
          }"
          data-category="${category}"
        >
          ${category}
        </button>

      `)
      .join("");


  cats
    .querySelectorAll(
      "button[data-category]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          activeCategory =
            button.dataset.category;

          renderCategories();

          renderProducts();

        }
      );

    });

}


/* =========================================================
   STOCK FILTER
========================================================= */

document
  .querySelectorAll(
    ".filters button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".filters button"
          )
          .forEach(btn => {

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
    renderProducts
  );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value){

  return String(
    value ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   RENDER PRODUCTS
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
    products.filter(product => {

      const searchable = (
        product.name +
        " " +
        product.code +
        " " +
        product.category
      )
        .toLowerCase();


      const searchMatch =
        !searchText ||
        searchable.includes(
          searchText
        );


      const categoryMatch =
        activeCategory === "All" ||
        product.category ===
          activeCategory;


      const stockMatch =
        activeStock === "All" ||
        product.status ===
          activeStock;


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

    updateBar();

    return;

  }


  filtered.forEach(product => {

    const selected =
      selectedProducts.has(
        product.code
      );


    let stockClass =
      "stock-in";


    if(
      product.status ===
      "Coming Soon"
    ){

      stockClass =
        "stock-coming";

    }


    if(
      product.status ===
      "Out of Stock"
    ){

      stockClass =
        "stock-out";

    }


    const card =
      document.createElement(
        "article"
      );


    card.className =
      "product-card";


    card.innerHTML = `

      <div class="product-image-wrap">

        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="
            this.onerror=null;
            this.src='538820.jpg';
          "
        >

      </div>


      <div class="product-body">

        <div class="product-code">
          ${escapeHTML(product.code)}
        </div>


        <h2 class="product-name">
          ${escapeHTML(product.name)}
        </h2>


        <div class="product-category">
          ${escapeHTML(product.category)}
        </div>


        <div class="${stockClass}">
          ${escapeHTML(product.status)}
        </div>


        <div class="product-moq">
          ${escapeHTML(product.moq)}
        </div>


        <div class="product-actions">

          <button
            type="button"
            class="whatsapp-btn"
          >
            WhatsApp Enquiry
          </button>


          <button
            type="button"
            class="
              select-btn
              ${selected ? "selected" : ""}
            "
          >
            ${selected ? "✓" : "+"}
          </button>

        </div>

      </div>

    `;


    const whatsappButton =
      card.querySelector(
        ".whatsapp-btn"
      );


    whatsappButton.addEventListener(
      "click",
      () => {

        sendSingleEnquiry(
          product
        );

      }
    );


    const selectButton =
      card.querySelector(
        ".select-btn"
      );


    selectButton.addEventListener(
      "click",
      () => {

        toggleProduct(
          product.code
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

function sendSingleEnquiry(
  product
){

  const message =
`Hi ONE STOP SOLUTION (OSS),

I'm interested in ${product.name} (${product.code}).

Please share details and rates.`;


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(
      message
    );


  window.location.href =
    url;

}


/* =========================================================
   SELECT PROD
