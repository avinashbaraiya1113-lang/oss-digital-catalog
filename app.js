/* =========================================================
   FIRESTORE LIVE PRODUCTS
   MASTER + ADMIN PRODUCTS
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

      /* =========================================
         FIRESTORE DATA
      ========================================= */

      const firestoreProducts = [];


      snapshot.forEach(
        docSnapshot => {

          const data =
            docSnapshot.data() || {};


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

            code: code,

            id:
              docSnapshot.id

          });

        }
      );


      /* =========================================
         MASTER PRODUCTS
         Keep MASTER order unchanged
      ========================================= */

      const masterProducts =

        MASTER_PRODUCTS.map(
          master => {

            const firestoreProduct =

              firestoreProducts.find(
                item =>
                  String(
                    item.code
                  ).toUpperCase() ===
                  String(
                    master.code
                  ).toUpperCase()
              );


            /* -------------------------------------
               If Firestore has this master product,
               use its latest editable values.
            ------------------------------------- */

            if(firestoreProduct){

              return {

                ...master,

                ...firestoreProduct,

                code:
                  master.code,

                /* Master image/name/category
                   remain available as fallback */

                name:
                  firestoreProduct.name ||
                  master.name,

                category:
                  firestoreProduct.category ||
                  master.category,

                image:
                  firestoreProduct.image ||
                  master.image,

                moq:
                  firestoreProduct.moq ||
                  master.moq,

                status:
                  firestoreProduct.status ||
                  firestoreProduct.stock ||
                  "In Stock"

              };

            }


            /* -------------------------------------
               Firestore document not found:
               use MASTER product.
            ------------------------------------- */

            return {

              ...master,

              status:
                "In Stock"

            };

          }

        );


      /* =========================================
         NEW ADMIN PRODUCTS
         OSS_039, OSS_040, OSS_041...
      ========================================= */

      const newProducts =

        firestoreProducts.filter(
          firestoreProduct => {

            const existsInMaster =

              MASTER_PRODUCTS.some(
                master =>

                  String(
                    master.code
                  ).toUpperCase() ===

                  String(
                    firestoreProduct.code
                  ).toUpperCase()
              );


            return !existsInMaster;

          }

        );


      /* =========================================
         NORMALIZE NEW PRODUCTS
      ========================================= */

      const normalizedNewProducts =

        newProducts.map(
          product => ({

            ...product,

            code:
              product.code ||
              product.id,

            name:
              product.name ||
              "Unnamed Product",

            category:
              product.category ||
              "Other",

            image:
              product.image ||
              (
                product.code
                  ? product.code + ".jpg"
                  : "538820.jpg"
              ),

            moq:
              product.moq ||
              "₹500 Minimum Order Quantity (MOQ)",

            status:
              product.status ||
              product.stock ||
              "In Stock"

          })

        );


      /* =========================================
         FINAL PRODUCT LIST

         1. MASTER 001–038
         2. NEW 039+
      ========================================= */

      products = [

        ...masterProducts,

        ...normalizedNewProducts

      ];


      /* =========================================
         SORT

         OSS_001
         OSS_002
         ...
         OSS_038
         OSS_039
         OSS_040
      ========================================= */

      products.sort(

        (a,b) => {

          const aNumber =
            parseInt(
              String(
                a.code || ""
              ).replace(
                /\D/g,
                ""
              )
            ) || 999999;


          const bNumber =
            parseInt(
              String(
                b.code || ""
              ).replace(
                /\D/g,
                ""
              )
            ) || 999999;


          return (
            aNumber -
            bNumber
          );

        }

      );


      /* =========================================
         UPDATE CATEGORY BUTTONS
      ========================================= */

      renderCategories();


      /* =========================================
         RENDER ALL PRODUCTS
      ========================================= */

      renderProducts();


      /* =========================================
         UPDATE MULTIPLE ENQUIRY BAR
      ========================================= */

      updateBar();


      console.log(
        "OSS Catalog updated:",
        products.length,
        "products"
      );

    },


    error => {

      console.error(
        "Firestore error:",
        error
      );


      /* =========================================
         FALLBACK
         If Firestore temporarily fails,
         show MASTER PRODUCTS.
      ========================================= */

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


/* =========================================================
   INITIAL LOAD
========================================================= */

renderCategories();

renderProducts();

updateBar();


/* =========================================================
   END
========================================================= */
