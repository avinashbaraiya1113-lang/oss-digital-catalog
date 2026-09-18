const products = [
{"code":"OSS_001","name":"3Pcs Motivation Water Bottle","category":"Water Bottle","image":"OSS_001.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_002","name":"Hot and Cold Dori Bottle","category":"Water Bottle","image":"OSS_002.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_003","name":"1000ML Steel Water Bottle","category":"Water Bottle","image":"OSS_003.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_004","name":"Vaccum Flask Set With 3 Cups","category":"Home & Kitchen","image":"OSS_004.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_005","name":"Plug Mosquito Killer Lamp","category":"Electric & Smart Gadgets","image":"OSS_005.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_006","name":"Electric Gas Lighter","category":"Electric & Smart Gadgets","image":"OSS_006.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_007","name":"Portable Car Air Mattress","category":"Car Accessories","image":"OSS_007.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_008","name":"Solar Rechargeable LED Flood Light","category":"Electric & Smart Gadgets","image":"OSS_008.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_009","name":"Anti Slip Tape with Glow in Dark Stripe","category":"Smart Gadgets","image":"OSS_009.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_010","name":"Portable Inflatable Bed","category":"Smart Gadgets","image":"OSS_010.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_011","name":"4Pcs Magnetic Car Window Curtain","category":"Car Accessories","image":"OSS_011.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_012","name":"Cloth Drying Rope with 12 Clips","category":"Home & Kitchen","image":"OSS_012.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_013","name":"Portable Mesh Nebulizer Machine","category":"Health & Personal Care","image":"OSS_013.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_014","name":"30Pcs Self Adhesive Transparent Book Cover","category":"Smart Stationery","image":"OSS_014.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_015","name":"7 Inch Moving Sand Art","category":"Gifts & Decor","image":"OSS_015.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_016","name":"All in One 60W USB Fast Charging Travel Data Cable Set","category":"Smart Gadgets","image":"OSS_016.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_017","name":"Portable Folding Chair","category":"Folding Furniture","image":"OSS_017.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_018","name":"Slim Floor Wiper Mop with Silicone Blade & Telescopic Handle","category":"Multipurpose Cleaning Tool","image":"OSS_018.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_019","name":"Anti Vibration Pads","category":"Smart Gadgets","image":"OSS_019.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_020","name":"Dancing Jellyfish Toy with Music & Movement","category":"Toys","image":"OSS_020.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_021","name":"360°Metal desktop Mobile Phone Stand","category":"Mobile Accessories","image":"OSS_021.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_022","name":"Electric Water Hot Bag","category":"Health & Personal Care","image":"OSS_022.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_023","name":"2.5×6 Non Adjustable Folding bed","category":"Folding Furniture","image":"OSS_023.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_024","name":"2.5×6 Adjustable Folding bed","category":"Folding Furniture","image":"OSS_024.webp","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_025","name":"Hot & Cold 1000ML Steel Water Bottle","category":"Water Bottle","image":"OSS_025.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_026","name":"2pcs HD Vision Driving Glasses","category":"Car Accessories","image":"OSS_026.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_027","name":"Portable 2 in 1 Camping Gas Stove","category":"Travel Accessories","image":"OSS_027.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_028","name":"Electric Kapoor Dani with Night Lamp","category":"Gifts & Decor","image":"OSS_028.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_029","name":"Water-Absorbing Rubber Doormat","category":"Home & Kitchen","image":"OSS_029.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_030","name":"Magic Practice Copybook","category":"Smart Stationery","image":"OSS_030.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_031","name":"40×40 Microfiber Cloth (Only Yellow)","category":"Multipurpose Cleaning Cloth","image":"OSS_031.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_032","name":"2pcs HD Vision Driving Glasses","category":"Car Accessories","image":"OSS_032.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_033","name":"Portable 2 in 1 Camping Gas Stove","category":"Travel Accessories","image":"OSS_033.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_034","name":"Electric Kapoor Dani with Night Lamp","category":"Gifts & Decor","image":"OSS_034.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_035","name":"Water-Absorbing Rubber Doormat","category":"Home & Kitchen","image":"OSS_035.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_036","name":"Magic Practice Copybook","category":"Smart Stationery","image":"OSS_036.jpg","status":"In Stock","moQ":"₹500 Minimum Order Quantity (MOQ)"},
{"code":"OSS_037","name":"40×40 Microfiber Cloth (Only Yellow)","category":"Multipurpose Cleaning Cloth","image":"OSS_037.jpg","status":"In Stock","moq":"₹500 Minimum Order Quantity (MOQ)"}
];

const WA = "919499806747";

let selected = new Set();
let filter = "All";
let cat = "All";

const grid = document.querySelector("#grid");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const cats = document.querySelector("#cats");
const bar = document.querySelector("#bar");
const selectedCount = document.querySelector("#selectedCount");

const catsList = ["All", ...new Set(products.map(p => p.category))];

cats.innerHTML = catsList.map(x => `
<button class="${x === "All" ? "active" : ""}" data-cat="${x}">
${x}
</button>
`).join("");

cats.onclick = e => {
    if (e.target.dataset.cat) {
        cat = e.target.dataset.cat;

        cats.querySelectorAll("button").forEach(b => {
            b.classList.toggle("active", b.dataset.cat === cat);
        });

        render();
    }
};

document.querySelector(".filters").onclick = e => {
    if (e.target.dataset.filter) {
        filter = e.target.dataset.filter;

        document.querySelectorAll(".filters button").forEach(b => {
            b.classList.toggle(
                "active",
                b.dataset.filter === filter
            );
        });

        render();
    }
};

document
.querySelector('.filters button[data-filter="All"]')
.classList.add("active");

search.oninput = render;

function waOne(p) {
    const msg = `Hi ONE STOP SOLUTION (OSS),

I'm interested in ${p.name} (${p.code}).

Please share details and rates.`;

    location.href =
        `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

function updateBar() {
    selectedCount.textContent = `${selected.size} selected`;
    bar.classList.toggle("show", selected.size > 0);
}

function render() {
    const q = search.value.trim().toLowerCase();

    const list = products.filter(p =>
        (filter === "All" || p.status === filter) &&
        (cat === "All" || p.category === cat) &&
        (
            !q ||
            p.name.toLowerCase().includes(q) ||
            p.code.toLowerCase().includes(q)
        )
    );

    count.textContent = `${list.length} products`;

    grid.innerHTML = list.map(p => `
<article class="card">

<div class="photo">
<img src="${p.image}" alt="${p.name}" loading="lazy">
</div>

<div class="body">

<span class="status ${
    p.status === "Out of Stock"
    ? "out"
    : p.status === "Coming Soon"
    ? "coming"
    : ""
}">
${p.status}
</span>

<div class="code">
${p.code} · ${p.category}
</div>

<div class="name">
${p.name}
</div>

<div class="moq">
${p.moq || "₹500 Minimum Order Quantity (MOQ)"}
</div>

<div class="actions">

<button
class="wa"
onclick='waOne(${JSON.stringify(p)})'
${p.status === "Out of Stock" ? "disabled" : ""}
>
WhatsApp Enquiry
</button>

<button
class="add ${selected.has(p.code) ? "selected" : ""}"
data-code="${p.code}"
title="Add to enquiry"
>
${selected.has(p.code) ? "✓" : "+"}
</button>

</div>

</div>
</article>
`).join("");

    grid.querySelectorAll(".add").forEach(button => {
        button.onclick = () => {
            const code = button.dataset.code;

            if (selected.has(code)) {
                selected.delete(code);
            } else {
                selected.add(code);
            }

            render();
            updateBar();
        };
    });

    updateBar();
}

bar.onclick = () => {
    if (selected.size === 0) return;

    const chosen = products.filter(p =>
        selected.has(p.code)
    );

    const lines = chosen.map((p, i) =>
        `${i + 1}. ${p.name} (${p.code})`
    );

    const msg = `Hi ONE STOP SOLUTION (OSS),

I'm interested in the following products:

${lines.join("\n")}

Please share details and rates.`;

    location.href =
        `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
};

render();
