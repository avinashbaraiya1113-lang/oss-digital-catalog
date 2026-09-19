/* =========================================================
   OSS DIGITAL CATALOG
   FIRESTORE LIVE STOCK + WHATSAPP
   ADMIN NAME UPDATE COMPATIBILITY
========================================================= */


/* =========================================================
   FIREBASE
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
   FIREBASE CONFIG
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


/* =========================================================
   INITIALIZE
========================================================= */

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
const searchInput = document.getElementById("search");
const cats = document.getElementById("cats");

const enquiryBar = document.getElementById("bar");
const selectedCount = document.getElementById("selectedCount");
const multiButton = document.getElementById("multi");


/* =========================================================
   SAFE TEXT
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   PRODUCT NAME
   IMPORTANT:
   Supports:
   name
   productName
   title
========================================================= */

function getProductName(product) {

  return (
    product.name ||
    product.productName ||
    product.title ||
    "Unnamed Product"
  );

}


/* =========================================================
   PRODUCT STOCK
========================================================= */

function getStock(product) {

  return (
    product.stock ||
    product.status ||
    "In Stock"
  );

}


/* =========================================================
   PRODUCT IMAGE
========================================================= */

function getImage(product) {

  return (
    product.image ||
    product.imageUrl ||
    product.photo ||
    "538820.jpg"
  );

}


/* =========================================================
   PRODUCT CATEGORY
========================================================= */

function getCategory(product) {

  return (
    product.category ||
    "Other"
  );

}


/* =========================================================
   PRODUCT MOQ
========================================================= */

function getMOQ(product) {

  return (
    product.moq ||
    "₹500 Minimum Order Quantity (MOQ)"
  );

}


/* =========================================================
   FIRESTORE LIVE PRODUCTS
========================================================= */

onSnapshot(
  collection(db, "products"),

  function(snapshot) {

    products = [];

    snapshot.forEach(function(doc) {

      const data = doc.data();

      products.push({

        id: doc.id,

        ...data

      });

    });


    /* -----------------------------------------
       SORT BY PRODUCT CODE
    ----------------------------------------- */

    products.sort(function(a, b) {

      return compareCodes(
        a.code || a.id,
        b.code || b.id
      );

    });


    /* -----------------------------------------
       UPDATE CATEGORY BUTTONS
    ----------------------------------------- */

    renderCategories();


    /* -----------------------------------------
       RENDER PRODUCTS
    ----------------------------------------- */

    renderProducts();


  },

  function(error) {

    console.error(
      "Firestore error:",
      error
    );

    if (grid) {

      grid.innerHTML = `
        <div style="
          padding:30px;
          text-align:center;
          color:#c62828;
          font-weight:bold;
        ">
          Unable to load products.
          <br><br>
          Please refresh the page.
        </div>
      `;

    }

  }

);


/* =========================================================
   SORT PRODUCT CODES
========================================================= */

function compareCodes(a, b) {

  const na =
    parseInt(
      String(a || "").replace(/\D/g, "")
    ) || 999999;

  const nb =
    parseInt(
      String(b || "").replace(/\D/g, "")
    ) || 999999;

  return na - nb;

}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

  if (!cats) return;

  const categorySet = new Set();

  products.forEach(function(product) {

    const category =
      getCategory(product);

    if (category) {

      categorySet.add(category);

    }

  });


  const categoryList =
    Array.from(categorySet).sort();


  cats.innerHTML = "";


  /* ALL BUTTON */

  const allButton =
    document.createElement("button");

  allButton.textContent = "All";

  allButton.className =
    activeCategory === "All"
      ? "active"
      : "";

  allButton.onclick = function() {

    activeCategory = "All";

    renderCategories();
    renderProducts();

  };

  cats.appendChild(allButton);


  /* CATEGORY BUTTONS */

  categoryList.forEach(function(category) {

    const button =
      document.createElement("button");

    button.textContent =
      category;

    button.className =
      activeCategory === category
        ? "active"
        : "";

    button.onclick = function() {

      activeCategory = category;

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
  .querySelectorAll(
    ".filters button"
  )
  .forEach(function(button) {

    button.addEventListener(
      "click",
      function() {

        document
          .querySelectorAll(
            ".filters button"
          )
          .forEach(function(btn) {

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

if (searchInput) {

  searchInput.addEventListener(
    "input",
    function() {

      renderProducts();

    }
  );

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

  if (!grid) return;


  const search =
    (
      searchInput
        ? searchInput.value
        : ""
    )
      .toLowerCase()
      .trim();


  const filtered =
    products.filter(function(product) {


      /* -----------------------------------------
         SEARCH
      ----------------------------------------- */

      const name =
        getProductName(product);

      const code =
        product.code ||
        product.id ||
        "";

      const category =
        getCategory(product);


      const searchableText =
        (
          name +
          " " +
          code +
          " " +
          category
        )
          .toLowerCase();


      const matchSearch =
        !search ||
        searchableText.includes(search);


      /* -----------------------------------------
         CATEGORY
      ----------------------------------------- */

      const matchCategory =
        activeCategory === "All" ||
        category === activeCategory;


      /* -----------------------------------------
         STOCK
      ----------------------------------------- */

      const stock =
        getStock(product);


      const matchStock =
        activeStock === "All" ||
        stock === activeStock;


      return (
        matchSearch &&
        matchCategory &&
        matchStock
      );

    });


  /* =====================================================
     COUNT
  ===================================================== */

  if (count) {

    count.textContent =
      `${filtered.length} Products`;

  }


  /* =====================================================
     EMPTY
  ===================================================== */

  if (filtered.length === 0) {

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        padding:40px;
        text-align:center;
        font-weight:bold;
      ">

        No products found.

      </div>

    `;

    return;

  }


  /* =====================================================
     PRODUCT HTML
  ===================================================== */

  grid.innerHTML = "";


  filtered.forEach(function(product) {

    const name =
      getProductName(product);

    const code =
      product.code ||
      product.id ||
      "";


    const category =
      getCategory(product);


    const image =
      getImage(product);


    const stock =
      getStock(product);


    const moq =
      getMOQ(product);


    /* -----------------------------------------
       STOCK CLASS
    ----------------------------------------- */

    let stockClass =
      "stock-in";

    if (stock === "Coming Soon") {

      stockClass =
        "stock-coming";

    }

    if (stock === "Out of Stock") {

      stockClass =
        "stock-out";

    }


    /* -----------------------------------------
       SELECTED
    ----------------------------------------- */

    const isSelected =
      selectedProducts.has(
        product.id
      );


    /* -----------------------------------------
       CARD
    ----------------------------------------- */

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
          onerror="this.onerror=null;this.src='538820.jpg';"
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
            onclick="sendSingleEnquiry('${escapeHTML(product.id)}')"
          >
            WhatsApp Enquiry
          </button>


          <button
            class="select-btn ${isSelected ? "selected" : ""}"
            onclick="toggleProduct('${escapeHTML(product.id)}')"
            aria-label="Select product"
          >
            ${isSelected ? "✓" : "+"}
          </button>

        </div>

      </div>

    `;


    grid.appendChild(card);

  });


  updateSelectionBar();

}


/* =========================================================
   SINGLE WHATSAPP ENQUIRY
========================================================= */

window.sendSingleEnquiry =
function(id) {

  const product =
    products.find(function(p) {

      return p.id === id;

    });


  if (!product) return;


  const name =
    getProductName(product);


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
    encodeURIComponent(message);


  window.open(
    url,
    "_blank"
  );

};


/* =========================================================
   SELECT / UNSELECT PRODUCT
========================================================= */

window.toggleProduct =
function(id) {

  if (
    selectedProducts.has(id)
  ) {

    selectedProducts.delete(id);

  } else {

    selectedProducts.add(id);

  }


  renderProducts();

};


/* =========================================================
   SELECTION BAR
========================================================= */

function updateSelectionBar() {

  const total =
    selectedProducts.size;


  if (selectedCount) {

    selectedCount.textContent =
      total;

  }


  if (enquiryBar) {

    if (total > 0) {

      enquiryBar.classList.remove(
        "hidden"
      );

    } else {

      enquiryBar.classList.add(
        "hidden"
      );

    }

  }

}


/* =========================================================
   MULTIPLE WHATSAPP ENQUIRY
========================================================= */

if (multiButton) {

  multiButton.addEventListener(
    "click",
    function() {

      if (
        selectedProducts.size === 0
      ) {

        return;

      }


      const selected =
        products.filter(function(product) {

          return selectedProducts.has(
            product.id
          );

        });


      let message =
`Hello OSS,

I am interested in the following products:

`;


      selected.forEach(
        function(product, index) {

          const name =
            getProductName(product);


          const code =
            product.code ||
            product.id ||
            "";


          message +=
`${index + 1}. ${name}
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
   INITIAL FILTER BUTTON
========================================================= */

const firstFilter =
  document.querySelector(
    '.filters button[data-filter="All"]'
  );


if (firstFilter) {

  firstFilter.classList.add(
    "active"
  );

}


/* =========================================================
   FIREBASE LIVE UPDATE NOTE
========================================================= */

/*
   IMPORTANT:

   This catalog uses Firestore onSnapshot().

   Therefore:

   ADMIN PANEL
        ↓
   Firestore
        ↓
   onSnapshot()
        ↓
   Main Catalog

   When the Admin Panel changes:
   Product Name
   Category
   Image
   Stock
   MOQ

   the Main Catalog automatically receives
   the updated document.
*/


console.log(
  "OSS Digital Catalog — Firebase Live Connected"
);
