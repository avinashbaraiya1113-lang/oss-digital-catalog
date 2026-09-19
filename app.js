selectedProducts.delete(
  code
);

} else {

  selectedProducts.add(
    code
  );

}

renderProducts();

updateBar();

}


/* =========================================================
   UPDATE MULTIPLE ENQUIRY BAR
========================================================= */

function updateBar(){

  if(
    !bar ||
    !selectedCount
  ){
    return;
  }

  selectedCount.textContent =
    selectedProducts.size;


  if(
    selectedProducts.size > 0
  ){

    bar.style.display =
      "flex";

  }else{

    bar.style.display =
      "none";

  }

}


/* =========================================================
   MULTIPLE WHATSAPP ENQUIRY
========================================================= */

function sendMultipleEnquiry(){

  if(
    selectedProducts.size === 0
  ){
    return;
  }


  const selected =
    products.filter(
      product =>
        selectedProducts.has(
          product.code
        )
    );


  if(
    selected.length === 0
  ){
    return;
  }


  const productList =
    selected
      .map(
        (product,index) =>
          `${index + 1}. ${product.name} (${product.code})`
      )
      .join("\n");


  const message =
`Hi ONE STOP SOLUTION (OSS),

I'm interested in the following products:

${productList}

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
   MULTIPLE BUTTON
========================================================= */

if(
  multiButton
){

  multiButton.addEventListener(
    "click",
    sendMultipleEnquiry
  );

}


/* =========================================================
   FIRESTORE LIVE STOCK
========================================================= */

try{

  const productsRef =
    collection(
      db,
      "products"
    );


  onSnapshot(

    productsRef,

    snapshot => {

      const stockMap = {};


      snapshot.forEach(
        docSnapshot => {

          const data =
            docSnapshot.data() || {};


          const code =
            data.code ||
            docSnapshot.id;


          stockMap[code] =
            data.status ||
            data.stock ||
            "In Stock";

        }
      );


      products =
        MASTER_PRODUCTS.map(
          product => ({

            ...product,

            status:
              stockMap[
                product.code
              ] ||
              "In Stock"

          })
        );


      renderCategories();

      renderProducts();

      updateBar();

    },


    error => {

      console.error(
        "Firestore error:",
        error
      );


      products =
        MASTER_PRODUCTS.map(
          product => ({

            ...product,

            status:
              "In Stock"

          })
        );


      renderCategories();

      renderProducts();

      updateBar();

    }

  );

}catch(error){

  console.error(
    "Firebase initialization error:",
    error
  );

}


/* =========================================================
   INITIAL LOAD
========================================================= */

renderCategories();

renderProducts();

updateBar();


/* =========================================================
   END
========================================================= */
