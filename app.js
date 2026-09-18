const products = [
{code:"OSS_001",name:"DOUBLE GRID SOAP BOX",category:"Bathroom Accessories",image:"assets/OSS_001.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_002",name:"MINI POPCORN MAKER",category:"Home & Kitchen",image:"assets/OSS_002.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_003",name:"2L MOTIVATIONAL WATTER BOTTLE",category:"Water Bottle",image:"assets/OSS_003.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_004",name:"5M OUTDOOR CLOTHESLINE",category:"Home & Kitchen",image:"assets/OSS_004.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_005",name:"10M OUTDOOR CLOTHESLINE",category:"Home & Kitchen",image:"assets/OSS_005.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_006",name:"48PCS CAR CONTAINER",category:"Toys",image:"assets/OSS_006.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_007",name:"3PCS MOTIVATION WATER BOTTLE",category:"Water Bottle",image:"assets/OSS_007.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_008",name:"HOT AND COLD DORI BOTTLE",category:"Water Bottle",image:"assets/OSS_008.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_009",name:"1000ML STEEL WATER BOTTLE",category:"Water Bottle",image:"assets/OSS_009.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_010",name:"VACCUM FLASK SET WITH 3 CUPS",category:"Home & Kitchen",image:"assets/OSS_010.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_011",name:"PLUG MOSQUITO KILLER LAMP",category:"Electric & Smart Gadgets",image:"assets/OSS_011.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_012",name:"ELECTRIC GAS LIGHTER",category:"Electric & Smart Gadgets",image:"assets/OSS_012.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_013",name:"PORTABLE CAR AIR MATTRESS",category:"Car Accessories",image:"assets/OSS_013.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_014",name:"SOLAR RECHARGEABLE LED FLOOD LIGHT",category:"Electric & Smart Gadgets",image:"assets/OSS_014.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_015",name:"ANTI SLIP TAPE WITH GLOW IN DARK STRIPE",category:"Tools And Hardware",image:"assets/OSS_015.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_016",name:"PORTABLE INFLATABLE BED",category:"Folding Furniture",image:"assets/OSS_016.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_017",name:"4PCS MAGNETIC CAR WINDOW CURTAIN",category:"Car Accessories",image:"assets/OSS_017.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_018",name:"CLOTH DRYING ROPE WITH 12 CLIPS",category:"Home & Kitchen",image:"assets/OSS_018.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_019",name:"PORTABLE MESH NEBULIZER MACHINE",category:"Health & Personal Care",image:"assets/OSS_019.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_020",name:"30PCS SELF ADHESIVE TRANSPARENT BOOK COVER",category:"Smart Stationery",image:"assets/OSS_020.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_021",name:"7 INCH MOVING SAND ART",category:"Gifts & Decor",image:"assets/OSS_021.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_022",name:"ALL IN ONE 60W USB FAST CHARGING TRAVEL DATA CABLE SET",category:"Smart Gadgets",image:"assets/OSS_022.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_023",name:"PORTABLE FOLDING CHAIR",category:"Folding Furniture",image:"assets/OSS_023.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_024",name:"SLIM FLOOR WIPER MOP WITH SILICONE BLADE & TELESCOPIC HANDLE",category:"Multipurpose Cleaning Tool",image:"assets/OSS_024.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_025",name:"ANTI VIBRATION PADS",category:"Smart Gadgets",image:"assets/OSS_025.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_026",name:"DANCING JELLYFISH TOY WITH MUSIC & MOVEMENT",category:"Toys",image:"assets/OSS_026.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_027",name:"360°METAL DESKTOP MOBILE PHONE STAND",category:"Mobile Accessories",image:"assets/OSS_027.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_028",name:"ELECTRIC WATER HOT BAG",category:"Health & Personal Care",image:"assets/OSS_028.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_029",name:"2.5×6 NON ADJUSTABLE FOLDING BED",category:"Folding Furniture",image:"assets/OSS_029.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_030",name:"2.5×6 ADJUSTABLE FOLDING BED",category:"Folding Furniture",image:"assets/OSS_030.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_031",name:"HOT & COLD 1000ML STEEL WATER BOTTLE",category:"Water Bottle",image:"assets/OSS_031.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_032",name:"2PCS HD VISION DRIVING GLASSES",category:"Car Accessories",image:"assets/OSS_032.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_033",name:"PORTABLE 2 IN 1 CAMPING GAS STOVE",category:"Travel Accessories",image:"assets/OSS_033.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_034",name:"ELECTRIC KAPOOR DANI WITH NIGHT LAMP",category:"Gifts & Decor",image:"assets/OSS_034.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_035",name:"WATER-ABSORBING RUBBER DOORMAT",category:"Home & Kitchen",image:"assets/OSS_035.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_036",name:"MAGIC PRACTICE COPYBOOK",category:"Smart Stationery",image:"assets/OSS_036.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"},
{code:"OSS_037",name:"40×40 MICROFIBER CLOTH (ONLY YELLOW)",category:"Multipurpose Cleaning Cloth",image:"assets/OSS_037.jpg",status:"In Stock",moq:"₹500 Minimum Order Quantity (MOQ)"}
];

const WA="919499806747";
let selected=new Set(),filter="All",cat="All";

const grid=document.querySelector("#grid");
const search=document.querySelector("#search");
const count=document.querySelector("#count");
const cats=document.querySelector("#cats");
const bar=document.querySelector("#bar");
const selectedCount=document.querySelector("#selectedCount");

const catsList=["All",...new Set(products.map(p=>p.category))];

cats.innerHTML=catsList.map(x=>`<button class="${x==="All"?"active":""}" data-cat="${x}">${x}</button>`).join("");

cats.onclick=e=>{
  if(e.target.dataset.cat){
    cat=e.target.dataset.cat;
    cats.querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.cat===cat));
    render();
  }
};

document.querySelector(".filters").onclick=e=>{
  if(e.target.dataset.filter){
    filter=e.target.dataset.filter;
    document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
    render();
  }
};

document.querySelector('.filters button[data-filter="All"]').classList.add("active");
search.oninput=render;

function waOne(p){
  const msg=`Hi ONE STOP SOLUTION (OSS),

I'm interested in ${p.name} (${p.code}).

Please share details and rates.`;
  location.href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

function render(){
  const q=search.value.trim().toLowerCase();

  const list=products.filter(p=>
    (filter==="All"||p.status===filter)&&
    (cat==="All"||p.category===cat)&&
    (!q||p.name.toLowerCase().includes(q)||p.code.toLowerCase().includes(q))
  );

  count.textContent=`${list.length} products`;

  grid.innerHTML=list.map(p=>`
    <article class="card">
      <div class="photo">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>

      <div class="body">
        <div class="code">${p.code} · ${p.category}</div>
        <div class="name">${p.name}</div>

        <span class="status ${p.status==="Out of Stock"?"out":p.status==="Coming Soon"?"coming":""}">
          ${p.status}
        </span>

        <div class="moq">${p.moq}</div>

        <div class="actions">
          <button class="wa ${p.status==="Out of Stock"?"disabled":""}"
            ${p.status==="Out of Stock"?"disabled":""}
            onclick='waOne(${JSON.stringify(p)})'>
            WhatsApp Enquiry
          </button>

          <button class="plus ${selected.has(p.code)?"selected":""}"
            onclick="toggle('${p.code}')">
            ${selected.has(p.code)?"✓":"+"}
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function toggle(code){
  selected.has(code)?selected.delete(code):selected.add(code);
  updateBar();
  render();
}

function updateBar(){
  selectedCount.textContent=selected.size;
  bar.classList.toggle("hidden",selected.size===0);
}

document.querySelector("#multi").onclick=()=>{
  const list=products.filter(p=>selected.has(p.code));

  const msg=`Hi ONE STOP SOLUTION (OSS),

I'm interested in the following products:

${list.map((p,i)=>`${i+1}. ${p.name} (${p.code})`).join("\n")}

Please share details and rates.`;

  location.href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
};

render();
