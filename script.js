/* ===== DATA: ingredients and recipes ===== */
const ING=["Potato","Onion","Tomato","Egg","Rice","Lentils","Chicken","Flour","Yogurt","Garlic","Chili","Cheese","Pasta","Bread","Butter","Milk","Spinach","Carrot","Peas","Corn","Mushroom","Beef","Fish","Lemon","Cucumber","Bell Pepper","Ginger","Oil","Spices","Noodles","Chickpeas","Coconut","Avocado","Tortilla"];
const L="Light",C="Comfort Food",F="Feast Style",S="Spicy";
const mk=(n,i,t,m,s)=>({n,i:i.split(","),t,m,s:s.split("|")});
const R=[
mk("Masala Omelette","Egg,Onion,Tomato,Chili,Spices",15,S,"Chop the onion, tomato and chili.|Beat the eggs with spices and stir in the veg.|Pan-fry both sides until golden."),
mk("Cheese Toast","Bread,Cheese,Butter",15,L,"Butter the bread.|Top with plenty of cheese.|Grill until bubbly and golden."),
mk("Garlic Butter Pasta","Pasta,Garlic,Butter,Cheese",30,C,"Boil the pasta until al dente.|Sizzle garlic in butter.|Toss together and top with cheese."),
mk("Crispy Aloo Fry","Potato,Onion,Spices,Oil",30,S,"Cube the potatoes, slice the onion.|Fry potatoes in oil until crisp.|Add onion and spices, cook 5 minutes."),
mk("Lentil Soup","Lentils,Onion,Garlic,Tomato,Spices",30,C,"Simmer lentils until soft.|Fry onion, garlic, tomato and spices.|Stir into the lentils and simmer 5 minutes."),
mk("Chicken Biryani","Chicken,Rice,Onion,Yogurt,Tomato,Ginger,Spices",60,F,"Marinate chicken in yogurt, ginger and spices.|Brown onions, then cook chicken with tomato.|Layer with parboiled rice and steam 20 minutes."),
mk("Egg Fried Rice","Rice,Egg,Carrot,Peas,Onion",30,C,"Stir-fry onion, carrot and peas.|Scramble in the eggs.|Add cooked rice and toss on high heat."),
mk("Spicy Chicken Curry","Chicken,Onion,Tomato,Ginger,Garlic,Chili,Spices",60,S,"Brown onion with ginger and garlic.|Add tomato, chili and spices until oily.|Add chicken and simmer until tender."),
mk("Fresh Garden Salad","Cucumber,Tomato,Onion,Lemon",15,L,"Slice the cucumber, tomato and onion.|Toss together in a bowl.|Squeeze lemon over and serve."),
mk("Veggie Pulao","Rice,Carrot,Peas,Onion,Spices",30,C,"Fry onion and spices.|Add carrot, peas and washed rice.|Cover with water and cook until fluffy."),
mk("Creamy Spinach","Spinach,Onion,Garlic,Yogurt,Spices",30,L,"Wilt the spinach and blend it smooth.|Fry onion, garlic and spices.|Add spinach and stir in yogurt."),
mk("Chickpea Curry","Chickpeas,Onion,Tomato,Garlic,Spices",30,S,"Fry onion and garlic.|Add tomato and spices and cook down.|Add chickpeas and simmer 10 minutes."),
mk("Mushroom Stir-Fry","Mushroom,Garlic,Bell Pepper,Oil",15,L,"Slice the mushrooms and pepper.|Heat oil and fry garlic.|Stir-fry everything for 5 minutes."),
mk("Garlic Butter Steak","Beef,Butter,Garlic",30,F,"Sear the beef in a hot pan.|Add butter and garlic and baste.|Rest 5 minutes, then slice."),
mk("Lemon Grilled Fish","Fish,Lemon,Garlic,Spices,Oil",30,L,"Rub fish with oil, garlic and spices.|Grill 4 minutes per side.|Finish with lemon juice."),
mk("Fluffy Pancakes","Flour,Egg,Milk,Butter",30,C,"Whisk flour, egg and milk into a batter.|Melt butter in a pan.|Cook until bubbles form, then flip."),
mk("Chicken Tacos","Tortilla,Chicken,Tomato,Onion,Cheese,Chili",30,S,"Cook diced chicken with chili.|Warm the tortillas.|Fill with chicken, tomato, onion and cheese."),
mk("Veggie Noodles","Noodles,Carrot,Bell Pepper,Garlic,Oil",15,L,"Boil the noodles and drain.|Stir-fry garlic, carrot and pepper.|Toss in the noodles."),
mk("Mac and Cheese","Pasta,Cheese,Milk,Butter",30,C,"Boil the pasta.|Melt butter, add milk and cheese.|Mix with pasta until creamy."),
mk("Cucumber Yogurt Bowl","Yogurt,Cucumber,Spices",15,L,"Grate the cucumber.|Mix into the yogurt.|Season with spices and chill."),
mk("Potato Gratin","Potato,Cheese,Milk,Butter",60,F,"Slice the potatoes thinly.|Layer with butter, milk and cheese.|Bake 45 minutes until golden."),
mk("Hearty Beef Stew","Beef,Potato,Carrot,Onion,Garlic",60,F,"Brown the beef with onion and garlic.|Add potato, carrot and water.|Simmer 45 minutes until tender."),
mk("Corn Fritters","Corn,Flour,Egg,Onion",30,C,"Mix corn, flour, egg and chopped onion.|Spoon into hot oil.|Fry until golden on both sides."),
mk("Avocado Egg Toast","Avocado,Bread,Egg,Lemon",15,L,"Toast the bread.|Mash avocado with lemon.|Spread and top with a fried egg."),
mk("Coconut Chicken Curry","Chicken,Coconut,Ginger,Chili,Onion",60,F,"Fry onion, ginger and chili.|Add chicken and brown it.|Pour in coconut milk and simmer 30 minutes."),
mk("Creamy Tomato Soup","Tomato,Onion,Garlic,Butter",30,L,"Sauté onion and garlic in butter.|Add tomatoes and simmer 15 minutes.|Blend smooth and season.")
];


/* ===== CATEGORIES AND MOOD COLORS ===== */
const CATS=[
  ["Protein and legumes",["Chicken","Beef","Fish","Egg","Lentils","Chickpeas"]],
  ["Dairy",["Milk","Yogurt","Cheese","Butter"]],
  ["Vegetables and fruit",["Potato","Onion","Tomato","Garlic","Spinach","Carrot","Peas","Corn","Mushroom","Cucumber","Bell Pepper","Avocado","Ginger","Chili","Lemon"]],
  ["Pantry",["Rice","Pasta","Noodles","Flour","Bread","Tortilla","Oil","Spices","Coconut"]]
];
const MC={"Light":"#4d7c4a","Comfort Food":"#a9741b","Feast Style":"#8f2d3a","Spicy":"#c2410c"};

/* ===== STATE + STORAGE ===== */
const $=s=>document.querySelector(s);
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let sel=new Set(store.get("sel",[]).filter(n=>ING.includes(n)));
let favs=new Set(store.get("favs",[]));
let time=60,mood="Any",favOnly=false;
const root=document.documentElement;

/* ===== INGREDIENT PICKER ===== */
$("#ings").innerHTML=CATS.map(([t,a])=>`<div class="group"><h3>${t}</h3><div class="wrapx">${a.map(n=>`<button class="ing" data-n="${n}" aria-pressed="false"><span class="box" aria-hidden="true"></span>${n}</button>`).join("")}</div></div>`).join("");
$("#ings").onclick=e=>{
  const b=e.target.closest(".ing");if(!b)return;
  const n=b.dataset.n;sel.has(n)?sel.delete(n):sel.add(n);
  store.set("sel",[...sel]);syncUI();render();
};
function syncUI(){
  document.querySelectorAll(".ing").forEach(b=>b.setAttribute("aria-pressed",sel.has(b.dataset.n)));
  document.querySelectorAll("[data-t]").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.t===time));
  document.querySelectorAll("[data-m]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===mood));
  $("#favOnly").setAttribute("aria-pressed",favOnly);
  $("#sS").textContent=sel.size;
}
$("#tc").onclick=e=>{const b=e.target.closest("[data-t]");if(b){time=+b.dataset.t;syncUI();render()}};
$("#mc").onclick=e=>{const b=e.target.closest("[data-m]");if(b){mood=b.dataset.m;syncUI();render()}};
$("#favOnly").onclick=()=>{favOnly=!favOnly;syncUI();render()};
$("#clear").onclick=()=>{sel.clear();store.set("sel",[]);syncUI();render()};

/* ===== MATCHING ===== */
const TL={15:"15 min",30:"30 min",60:"1 hour"};
function matches(){
  return R.map(r=>{
    const miss=r.i.filter(x=>!sel.has(x));
    return{...r,miss,pct:Math.round(100*(r.i.length-miss.length)/r.i.length)};
  }).filter(r=>r.t<=time&&(mood==="Any"||r.m===mood)&&(favOnly?favs.has(r.n):r.pct>0))
    .sort((a,b)=>b.pct-a.pct||a.t-b.t);
}
const tags=(a,c)=>a.length?a.map(x=>`<span class="tag ${c}">${x}</span>`).join(""):`<span class="meta">None</span>`;

/* ===== RENDER ===== */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});
function render(){
  const list=matches(),box=$("#results");
  $("#count").textContent=list.length?`${list.length} dish${list.length>1?"es":""} found`:"";
  const em=$("#empty");em.hidden=list.length>0;
  em.textContent=(sel.size||favOnly)?"No dishes match these filters yet. Try adding ingredients, allowing more time or changing the mood.":"Select a few ingredients to see dishes you can cook right now.";
  box.innerHTML=list.map((r,k)=>{
    const c=r.pct>=80?"g":r.pct>=50?"y":"r",fav=favs.has(r.n);
    return `<article class="card tilt reveal ${c}" style="--d:${Math.min(k,8)*70}ms;--mc:${MC[r.m]}" data-n="${r.n}">
      <div class="mono" aria-hidden="true">${r.n[0]}</div>
      <div class="body"><h3>${r.n}</h3><p class="meta">${TL[r.t]} · ${r.m}</p>
        <div class="bar" role="progressbar" aria-label="Ingredient match" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${r.pct}"><i data-w="${r.pct}"></i></div>
        <p class="pct">${r.pct}% match</p>
        <p class="miss">${r.miss.length?"Missing: "+r.miss.join(", "):"You have everything you need."}</p>
        <div class="row"><button class="btn sm" data-a="view">View steps</button><button class="ghost sm" data-a="fav" aria-pressed="${fav}">${fav?"Saved":"Save"}</button></div>
      </div></article>`}).join("");
  setTimeout(()=>box.querySelectorAll(".bar i").forEach(b=>b.style.width=b.dataset.w+"%"),60);
  box.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}
$("#results").onclick=e=>{
  const b=e.target.closest("[data-a]");if(!b)return;
  const n=b.closest(".card").dataset.n;
  if(b.dataset.a==="view")openModal(n);
  else{toggleFav(n);b.setAttribute("aria-pressed",favs.has(n));b.textContent=favs.has(n)?"Saved":"Save";if(favOnly)render()}
};
function toggleFav(n){favs.has(n)?favs.delete(n):favs.add(n);store.set("favs",[...favs])}

/* ===== RECIPE MODAL ===== */
const modal=$("#modal");
function openModal(n){
  const r=R.find(x=>x.n===n),have=r.i.filter(x=>sel.has(x)),miss=r.i.filter(x=>!sel.has(x));
  modal.innerHTML=`<h2>${r.n}</h2><p class="meta">${TL[r.t]} · ${r.m}</p>
    <h3>You have</h3><div>${tags(have,"")}</div>
    <h3>You need</h3><div>${tags(miss,"no")}</div>
    <h3>Method</h3><ol>${r.s.map(s=>`<li>${s}</li>`).join("")}</ol>
    <div class="row"><button class="btn sm" id="mf">${favs.has(n)?"Saved":"Save recipe"}</button><button class="ghost sm" id="mx">Close</button></div>`;
  modal.showModal();
  $("#mx").onclick=()=>modal.close();
  $("#mf").onclick=e=>{toggleFav(n);e.target.textContent=favs.has(n)?"Saved":"Save recipe";render()};
}
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});

/* ===== SURPRISE ME ===== */
function confetti(){
  const cols=["#b8431f","#e0a458","#2f7a45","#f3ebe0"];
  for(let i=0;i<40;i++){
    const s=document.createElement("span");s.className="c";
    s.style.cssText=`--x:${(Math.random()-.5)*600}px;--y:${Math.random()*480-150}px;background:${cols[i%4]}`;
    document.body.appendChild(s);setTimeout(()=>s.remove(),1400);
  }
}
$("#surprise").onclick=()=>{
  const o=$("#over");o.classList.add("on");
  setTimeout(()=>{
    o.classList.remove("on");
    const l=matches(),pool=l.length?l:R,r=pool[Math.floor(Math.random()*pool.length)];
    confetti();openModal(r.n);
  },1700);
};

/* ===== THEME ===== */
const isDark=()=>root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
const themeLabel=()=>{$("#theme").textContent=isDark()?"Light mode":"Dark mode"};
const savedTheme=store.get("theme",null);if(savedTheme)root.dataset.theme=savedTheme;
$("#theme").onclick=()=>{const t=isDark()?"light":"dark";root.dataset.theme=t;store.set("theme",t);themeLabel()};

/* ===== 3D TILT (mouse devices only) ===== */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
  let last=null;
  const reset=t=>{t.style.removeProperty("--rx");t.style.removeProperty("--ry")};
  document.addEventListener("pointermove",e=>{
    const t=e.target.closest?e.target.closest(".tilt"):null;
    if(last&&last!==t)reset(last);
    last=t;if(!t)return;
    const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    t.style.setProperty("--ry",(x*8)+"deg");t.style.setProperty("--rx",(-y*8)+"deg");
  });
}

/* ===== INIT ===== */
$("#sI").textContent=ING.length;$("#sR").textContent=R.length;
syncUI();themeLabel();render();