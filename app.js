/* =========================================================
   OSS DIGITAL CATALOG
   STABLE MASTER + FIRESTORE LIVE PRODUCTS
========================================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


/* =========================================================
   FIREBASE
========================================================= */

const firebaseConfig = {

  apiKey:
    "AIzaSyBY7FpGggnMnv-IsqG81rjY1ofCWRm48wk",

  authDomain:
    "oss-digital-catalog.firebaseapp.com",

  projectId:
    "oss-digital-catalog",

  storageBucket:
    "oss-digital-catalog.firebasestorage.app",

  messagingSenderId:
    "294933773409",

  appId:
    "1:294933773409:web:3a62fc14daaa9d344cfe20",

  measurementId:
    "G-GT8YNKQJ5K"

};


const app =
  initializeApp(firebaseConfig);

const db =
  getFirestore(app);


/* =========================================================
   WHATSAPP
========================================================= */

const WA =
  "919499806747";


/* =========================================================
   DEFAULT MOQ
========================================================= */

const MOQ_DEFAULT =
  "₹500 Minimum Order Quantity (MOQ)";


/* =========================================================
   VARIABLES
========================================================= */

let masterProducts = [];

let products = [];

let selected =
  new Set();

let filter =
  "All";

let category =
  "All";


/* =========================================================
   SHORT SELECTOR
========================================================= */

const $ =
  selector =>
    document.querySelector(selector);


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHtml(value){

  return String(
    value ?? ""
  ).replace(
    /[&<>"']/g,
    character => ({

      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"

    }[character])
  );

}


/* =========================================================
   STATUS
========================================================= */

function normalizeStatus(product){

  return (
    product.status ||
    product.stock ||
    "In Stock"
  );

}


/* =========================================================
   NORMALIZE PRODUCT
========================================================= */

function normalizeProduct(product){

  return {

    code:
      String(
        product.code || ""
      ).trim(),

    name:
      String(
        product.name || ""
      ).trim(),

    category:
      String(
        product.category ||
        "Other"
      ).trim(),

    image:
      String(
        product.image || ""
      ).trim(),

    status:
      normalizeStatus(product),

    moq:
      String(
        product.moq ||
        MOQ_DEFAULT
      ).trim()

  };

}


/* =========================================================
   SORT PRODUCTS
========================================================= */

function sortProducts(list){

  const masterOrder =
    new Map(

      masterProducts.map(
        (item,index) => [
          item.code.toUpperCase(),
          index
        ]
      )

    );


  return [...list].sort(
    (a,b) => {

      const aKey =
        a.code.toUpperCase();

      const bKey =
        b.code.toUpperCase();


      const aMaster =
        masterOrder.has(aKey);

      const bMaster =
        masterOrder.has(bKey);


      if(
        aMaster &&
        bMaster
      ){

        return (
          masterOrder.get(aKey) -
          masterOrder.get(bKey)
        );

      }


      if(aMaster){

        return -1;

      }


      if(bMaster){

        return 1;

      }


      const aNum =
        Number(
          a.code.match(
            /\d+/
          )?.[0] ||
          999999
        );


      const bNum =
        Number(
          b.code.match(
            /\d+/
          )?.[0] ||
          999999
        );


      return (
        aNum - bNum ||
        a.code.localeCompare(
          b.code
        )
      );

    }
  );

}


/* =========================================================
   REBUILD PRODUCTS
========================================================= */

function rebuildProducts(
  firestoreProducts
){

  const liveByCode =
    new Map(

      firestoreProducts.map(
        item => [
          item.code.toUpperCase(),
          item
        ]
      )

    );


  /* -------------------------------------------------------
     MASTER PRODUCTS
  ------------------------------------------------------- */

  const master =
    masterProducts.map(
      base => {

        const live =
          liveByCode.get(
            base.code.toUpperCase()
          );


        return normalizeProduct({

          ...base,

          status:
            live
              ? normalizeStatus(live)
              : base.status,

          moq:
            live?.moq ||
            base.moq

        });

      }
    );


  /* -------------------------------------------------------
     EXTRA ADMIN PRODUCTS
  ------------------------------------------------------- */

  const masterCodes =
    new Set(

      masterProducts.map(
        item =>
          item.code.toUpperCase()
      )

    );


  const extras =
    firestoreProducts

      .filter(
        item =>
          !masterCodes.has(
            item.code.toUpperCase()
          )
      )

      .map(
        item =>
          normalizeProduct(item)
      )

      .filter(
        item =>
          item.code &&
          item.name
      );


  /* -------------------------------------------------------
     FINAL PRODUCT LIST
  ------------------------------------------------------- */

  products =
    sortProducts([
      ...master,
      ...extras
    ]);


  /* -------------------------------------------------------
     REMOVE INVALID SELECTED PRODUCTS
  ------------------------------------------------------- */

  selected.forEach(
    code => {

      if(
        !products.some(
          item =>
            item.code === code
        )
      ){

        selected.delete(code);

      }

    }
  );


  renderCategories();

  render();

  updateBar();

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

function renderCategories(){

  const cats =
    $("#cats");


  if(!cats){

    return;

  }


  const list = [

    "All",

    ...new Set(

      products

        .map(
          item =>
            item.category
        )

        .filter(Boolean)

    )

  ];


  if(
    !list.includes(category)
  ){

    category =
      "All";

  }


  cats.innerHTML =

    list

      .map(
        item => `

          <button
            type="button"
            class="${
              item === category
                ? "active"
                : ""
            }"
            data-cat="${
              escapeHtml(item)
            }"
          >
            ${
              escapeHtml(item)
            }
          </button>

        `
      )

      .join("");

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function render(){

  const grid =
    $("#grid");

  const count =
    $("#count");

  const search =
    $("#search");


  if(
    !grid ||
    !count ||
    !search
  ){

    return;

  }


  const query =
    search.value
      .trim()
      .toLowerCase();


  const visible =
    products.filter(
      product => {

        const matchesStatus =

          filter === "All" ||

          product.status ===
            filter;


        const matchesCategory =

          category === "All" ||

          product.category ===
            category;


        const haystack =

          `${product.name} ${product.code}`
            .toLowerCase();


        return (

          matchesStatus &&

          matchesCategory &&

          (
            !query ||
            haystack.includes(query)
          )

        );

      }
    );


  count.textContent =
    `${visible.length} products`;


  grid.innerHTML =

    visible

      .map(
        product => {

          const statusClass =

            product.status ===
              "Out of Stock"

              ? "out"

              : product.status ===
                  "Coming Soon"

                ? "coming"

                : "";


          const selectedClass =

            selected.has(
              product.code
            )

              ? "selected"

              : "";


          const image =

            product.image ||
            "538820.jpg";


          const disabled =

            product.status ===
              "Out of Stock"

              ? "disabled"

              : "";


          return `

            <article class="card">

              <div class="photo">

                <img

                  src="${
                    escapeHtml(image)
                  }"

                  alt="${
                    escapeHtml(
                      product.name
                    )
                  }"

                  loading="lazy"

                  onerror="
                    this.onerror=null;
                    this.src='538820.jpg';
                  "

                >

              </div>


              <div class="body">

                <div class="code">

                  ${
                    escapeHtml(
                      product.code
                    )
                  }

                  ·

                  ${
                    escapeHtml(
                      product.category
                    )
                  }

                </div>


                <div class="name">

                  ${
                    escapeHtml(
                      product.name
                    )
                  }

                </div>


                <span
                  class="
                    status
                    ${statusClass}
                  "
                >

                  ${
                    escapeHtml(
                      product.status
                    )
                  }

                </span>


                <div class="moq">

                  ${
                    escapeHtml(
                      product.moq
                    )
                  }

                </div>


                <div class="actions">


                  <button

                    type="button"

                    class="wa"

                    data-wa-code="${
                      escapeHtml(
                        product.code
                      )
                    }"

                    ${disabled}

                  >

                    WhatsApp Enquiry

                  </button>


                  <button

                    type="button"

                    class="
                      plus
                      ${selectedClass}
                    "

                    data-select-code="${
                      escapeHtml(
                        product.code
                      )
                    }"

                    aria-label="
                      Select ${
                        escapeHtml(
                          product.name
                        )
                      }
                    "

                  >

                    ${
                      selected.has(
                        product.code
                      )
                        ? "✓"
                        : "+"
                    }

                  </button>


                </div>

              </div>

            </article>

          `;

        }
      )

      .join("");

}


/* =========================================================
   SELECTED BAR
========================================================= */

function updateBar(){

  const bar =
    $("#bar");

  const selectedCount =
    $("#selectedCount");


  if(
    !bar ||
    !selectedCount
  ){

    return;

  }


  selectedCount.textContent =
    String(
      selected.size
    );


  bar.classList.toggle(

    "hidden",

    selected.size === 0

  );

}


/* =========================================================
   SINGLE WHATSAPP
========================================================= */

function waOne(product){

  const message =

`Hi ONE STOP SOLUTION (OSS),

I'm interested in ${product.name} (${product.code}).

Please share details and rates.`;


  window.location.href =

    `https://wa.me/${WA}?text=${
      encodeURIComponent(
        message
      )
    }`;

}


/* =========================================================
   MULTIPLE WHATSAPP
========================================================= */

function sendMultipleEnquiry(){

  const list =

    products.filter(
      product =>
        selected.has(
          product.code
        )
    );


  if(
    !list.length
  ){

    return;

  }


  const message =

`Hi ONE STOP SOLUTION (OSS),

I'm interested in the following products:

${

  list

    .map(
      (product,index) =>
        `${index + 1}. ${product.name} (${product.code})`
    )

    .join("\n")

}

Please share details and rates.`;


  window.location.href =

    `https://wa.me/${WA}?text=${
      encodeURIComponent(
        message
      )
    }`;

}


/* =========================================================
   EVENTS
========================================================= */

function initEvents(){

  const cats =
    $("#cats");

  const filters =
    document.querySelector(
      ".filters"
    );

  const search =
    $("#search");

  const grid =
    $("#grid");

  const multiButton =
    $("#multi");


  /* -------------------------------------------------------
     CATEGORY
  ------------------------------------------------------- */

  cats?.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "button[data-cat]"
        );


      if(!button){

        return;

      }


      category =
        button.dataset.cat ||
        "All";


      renderCategories();

      render();

    }
  );


  /* -------------------------------------------------------
     STOCK FILTER
  ------------------------------------------------------- */

  filters?.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "button[data-filter]"
        );


      if(!button){

        return;

      }


      filter =
        button.dataset.filter ||
        "All";


      filters

        .querySelectorAll(
          "button[data-filter]"
        )

        .forEach(
          item => {

            item.classList.toggle(

              "active",

              item.dataset.filter ===
                filter

            );

          }
        );


      render();

    }
  );


  /* -------------------------------------------------------
     SEARCH
  ------------------------------------------------------- */

  search?.addEventListener(
    "input",
    render
  );


  /* -------------------------------------------------------
     PRODUCT BUTTONS
  ------------------------------------------------------- */

  grid?.addEventListener(
    "click",
    event => {

      const waButton =
        event.target.closest(
          "[data-wa-code]"
        );


      if(
        waButton &&
        !waButton.disabled
      ){

        const product =
          products.find(
            item =>
              item.code ===
              waButton.dataset.waCode
          );


        if(product){

          waOne(product);

        }


        return;

      }


      const selectButton =
        event.target.closest(
          "[data-select-code]"
        );


      if(!selectButton){

        return;

      }


      const code =
        selectButton.dataset.selectCode;


      if(
        selected.has(code)
      ){

        selected.delete(code);

      }
      else{

        selected.add(code);

      }


      updateBar();

      render();

    }
  );


  /* -------------------------------------------------------
     MULTIPLE WHATSAPP
  ------------------------------------------------------- */

  multiButton?.addEventListener(
    "click",
    sendMultipleEnquiry
  );

}


/* =========================================================
   LOAD MASTER PRODUCTS
========================================================= */

async function loadMasterProducts(){

  const response =

    await fetch(
      "./products.json",
      {
        cache:
          "no-store"
      }
    );


  if(
    !response.ok
  ){

    throw new Error(

      `products.json could not be loaded (${response.status})`

    );

  }


  const data =
    await response.json();


  if(
    !Array.isArray(data) ||
    !data.length
  ){

    throw new Error(
      "products.json is empty or invalid."
    );

  }


  masterProducts =

    data.map(
      normalizeProduct
    );


  products =
    sortProducts(
      masterProducts
    );


  renderCategories();

  render();

  updateBar();

}


/* =========================================================
   ERROR DISPLAY
========================================================= */

function showFatalError(error){

  console.error(
    "OSS Catalog Error:",
    error
  );


  const grid =
    $("#grid");

  const count =
    $("#count");


  if(count){

    count.textContent =
      "Catalog error";

  }


  if(grid){

    grid.innerHTML = `

      <div
        style="
          grid-column:1/-1;
          padding:30px;
          text-align:center
        "
      >

        <strong>
          Catalogue could not load.
        </strong>

        <br>

        Please refresh the page.

      </div>

    `;

  }

}


/* =========================================================
   FIRESTORE LIVE SYNC
========================================================= */

function startFirestoreSync(){

  try{

    onSnapshot(

      collection(
        db,
        "products"
      ),

      snapshot => {

        const firestoreProducts =
          [];


        snapshot.forEach(
          docSnapshot => {

            const data =
              docSnapshot.data() ||
              {};


            const code =
              String(

                data.code ||
                docSnapshot.id ||
                ""

              ).trim();


            if(!code){

              return;

            }


            firestoreProducts.push({

              ...data,

              code

            });

          }
        );


        rebuildProducts(
          firestoreProducts
        );

      },


      error => {

        console.error(

          "Firestore Live Sync Error:",

          error

        );


        /* Keep master catalogue visible */

        renderCategories();

        render();

      }

    );

  }
  catch(error){

    console.error(

      "Firestore initialization error:",

      error

    );

  }

}


/* =========================================================
   START
========================================================= */

async function init(){

  initEvents();


  try{

    await loadMasterProducts();

  }
  catch(error){

    showFatalError(
      error
    );

    return;

  }


  startFirestoreSync();

}


/* =========================================================
   DOM READY
========================================================= */

if(
  document.readyState ===
  "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    init,
    {
      once:true
    }
  );

}
else{

  init();

}
