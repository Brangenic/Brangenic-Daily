/* ============ ICONS (inline SVG, no emoji) ============ */
const I={
 home:'<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 users:'<path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="3.5"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M15.5 3.6a3.5 3.5 0 0 1 0 6.8"/>',
 deal:'<path d="M12 3v18M5 8l7-5 7 5M7 21h10"/>',
 building:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>',
 dollar:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1.4-1.3-2-3-2s-3 .6-3 2 1.2 1.8 3 2.2 3 .9 3 2.3-1.3 2-3 2-3-.6-3-2"/>',
 spark:'<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"/>',
 gear:'<circle cx="12" cy="12" r="3.2"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.7a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.4 2.7h4l.4-2.7a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/>',
 bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a2 2 0 0 0 3.4 0"/>',
 check:'<path d="M20 6 9 17l-5-5"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9z"/>',
 msg:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 20l1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
 cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
 pen:'<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
 chart:'<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 shield:'<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/><path d="M9 11.5l2 2 4-4.5"/>',
 send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 x:'<path d="M18 6 6 18M6 6l12 12"/>',
 key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="M11 12 21 2M15 5l3 3M18 2l3 3"/>',
 layers:'<path d="m12 2 10 6-10 6L2 8z"/><path d="m2 14 10 6 10-6"/>',
 wallet:'<rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20M16 15h2"/>',
 up:'<path d="M12 19V5M6 11l6-6 6 6"/>'
};
const ic=(n,s=16)=>`<svg class="icon" style="width:${s}px;height:${s}px" viewBox="0 0 24 24">${I[n]}</svg>`;
const av=(t,bg,s=34)=>`<div class="avatar" style="width:${s}px;height:${s}px;font-size:${s*.36}px;background:${bg}">${t}</div>`;

/* ============ STATE + DATA ============ */
const $=id=>document.getElementById(id);
let route=location.hash.replace('#','')||'/';
let toastT;const toast=m=>{const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2300)};

const people=[
 {n:'Marsha Campbell',i:'MC',c:'#b05a7a',t:'Buyer',st:'Offer signed',ph:'876-555-0142',last:'4 days ago',hot:true},
 {n:'Andre Chin',i:'AC',c:'#4a6fa5',t:'Buyer',st:'Second viewing Sat',ph:'876-555-0177',last:'Yesterday',hot:true},
 {n:'Kerry-Ann Palmer',i:'KP',c:'#b98f3e',t:'Seller',st:'Listing agreement sent',ph:'876-555-0129',last:'Today',hot:false},
 {n:'Damion Grant',i:'DG',c:'#7a6ab0',t:'Renter',st:'Lease signed',ph:'876-555-0163',last:'2 days ago',hot:false},
 {n:'Alicia Reid',i:'AR',c:'#2c7a5c',t:'Seller',st:'Considering listing',ph:'876-555-0118',last:'6 days ago',hot:true},
 {n:'Omar Douglas',i:'OD',c:'#39536b',t:'Buyer',st:'Pre-approved J$25M',ph:'876-555-0195',last:'3 days ago',hot:false}
];
const stages=['Lead','Listed / Viewing','Offer Made','Sale Agreed','Closed'];
let deals=[
 {p:'Ironshore Villa',pr:'J$62M',c:'Marsha Campbell',s:2,d:3},
 {p:'12 Barbican Road',pr:'J$68M',c:'Andre Chin',s:1,d:9},
 {p:'4 Winchester Avenue',pr:'J$34M',c:'Kerry-Ann Palmer',s:1,d:17},
 {p:'Red Hills Apartment',pr:'Rental',c:'Damion Grant',s:4,d:2},
 {p:'Stony Hill Lot',pr:'J$18M',c:'Omar Douglas',s:0,d:1}
];
const props=[
 {a:'12 Barbican Road',m:'Kingston 6 · 4 bd · 3 ba',p:'J$68,000,000',g:'g1',st:'Active',sp:'p-green'},
 {a:'Ironshore Villa',m:'Montego Bay · 5 bd · 5 ba',p:'J$62,000,000',g:'g2',st:'Under offer',sp:'p-gold'},
 {a:'4 Winchester Avenue',m:'Kingston 10 · 3 bd · 2 ba',p:'J$34,000,000',g:'g3',st:'Active',sp:'p-green'},
 {a:'Stony Hill Lot',m:'St Andrew · 1.2 acres',p:'J$18,000,000',g:'g4',st:'Draft',sp:'p-mut'}
];
const unitStatus=['av','av','rs','ct','sd','sd','av','ct','sd','rs','av','sd','sd','ct','av','rs','sd','av','ct','sd','av','av','rs','sd','sd','ct','av','sd','rs','av','sd','ct','av','sd','av','rs','sd','sd','av','ct'];
const uLabel={av:'Available',rs:'Reserved',ct:'Contracted',sd:'Sold'};

const templates=[
 {n:'Kingston',s:'Editorial minimal',bg:'#ffffff',ink:'#141814',ac:'#14523c',f:'serif'},
 {n:'Coastline',s:'Airy and bright',bg:'#f2f7f6',ink:'#1d3a35',ac:'#2a8f7c',f:'sans'},
 {n:'Estate',s:'Dark and luxurious',bg:'#131512',ink:'#f3efe6',ac:'#b98f3e',f:'serif'},
 {n:'Signal',s:'Bold and modern',bg:'#f5f2ec',ink:'#17181c',ac:'#a8442c',f:'sans'},
 {n:'Heritage',s:'Warm and classic',bg:'#faf6ee',ink:'#3a3226',ac:'#7d6236',f:'serif'}
];
let selTpl=0;

/* ============ ROUTER ============ */
window.addEventListener('hashchange',()=>{route=location.hash.replace('#','')||'/';render()});
function nav(r){location.hash=r}
function render(){
  const r=route;
  if(r.startsWith('/app'))return renderApp(r.split('/')[2]||'dashboard');
  if(r.startsWith('/dev'))return renderDev(r.split('/')[2]||'overview');
  if(r.startsWith('/pm'))return renderPm(r.split('/')[2]||'overview');
  if(r.startsWith('/product/'))return renderMk(productPage(r.split('/')[2]||'agents'));
  if(r==='/pricing')return renderMk(pricingPage());
  if(r==='/login')return renderMk(loginPage(),true);
  renderMk(homePage());
  window.scrollTo(0,0);
}

/* ============ MARKETING SHELL ============ */
function mkNav(){return `
<nav class="mk-nav" id="mknav"><div class="in">
  <div class="logo" onclick="nav('/')"><div class="mk">R</div>Realm</div>
  <div class="mk-links">
    <a onclick="nav('/')">Product</a>
    <a onclick="nav('/product/agents')">For Realtors</a>
    <a onclick="nav('/product/developers')">For Developers</a>
    <a onclick="nav('/product/communities')">For Property Managers</a>
    <a onclick="nav('/pricing')">Pricing</a>
  </div>
  <div style="display:flex;gap:10px">
    <button class="btn btn-o btn-sm" onclick="nav('/login')">Log in</button>
    <button class="btn btn-p btn-sm" onclick="nav('/login')">Start free trial</button>
  </div>
</div></nav>`}
function renderMk(inner,noScroll){$('root') .innerHTML=mkNav()+inner+`
<div class="footer">Realm — the operating system for Caribbean real estate. Built in Kingston, Jamaica. · Demo prototype, sample data only.</div>`;
 if(!noScroll)window.scrollTo(0,0);initLux()}

/* ---------- LUXURY MOTION ---------- */
let luxBound=false;
function initLux(){
  const nav=$('mknav');
  const isHome=(route==='/'||route==='');
  const onScroll=()=>{
    if(nav)nav.classList.toggle('clear',isHome&&window.scrollY<window.innerHeight-140);
    document.querySelectorAll('.plx').forEach(el=>{
      const r=el.parentElement.getBoundingClientRect();
      const sp=parseFloat(el.dataset.sp||'0.06');
      el.style.transform=`translateY(${(r.top-window.innerHeight/2)*-sp}px)`;
    });
  };
  onScroll();
  if(!luxBound){window.addEventListener('scroll',()=>{if(document.getElementById('mknav'))onScroll()},{passive:true});luxBound=true}
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('vis');
      e.target.querySelectorAll('.cnt').forEach(c=>{
        if(c.dataset.done)return;c.dataset.done='1';
        const n=+c.dataset.n;const t0=performance.now();
        const tick=t=>{const p=Math.min((t-t0)/1400,1);const e2=1-Math.pow(1-p,3);
          c.textContent=Math.round(n*e2).toLocaleString();if(p<1)requestAnimationFrame(tick)};
        requestAnimationFrame(tick);
      });
      io.unobserve(e.target)}
  }),{threshold:.18});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  startReels();
}

/* ---------- SHOWREEL ENGINE ---------- */
const SCENES={
 nudge:()=>`<div class="scap"><div class="k">The assistant</div><h4>A client goes quiet.<br>Realm notices.</h4><p>Four days of silence triggers a nudge — with the follow-up already drafted in your voice.</p></div>
  <div><div class="card a-slide" style="padding:16px;display:flex;gap:12px;align-items:flex-start">
   ${av('MC','#b05a7a',38)}<div style="flex:1"><b style="font-size:13.5px">Marsha hasn't replied in 4 days</b>
   <div style="font-size:12px;color:var(--mut);margin-top:2px">Buyer · Ironshore Villa · Offer made</div>
   <div style="display:flex;gap:6px;margin-top:10px"><span class="btn btn-sm btn-p">WhatsApp</span><span class="btn btn-sm btn-o">Snooze</span></div></div></div>
   <div class="a-pop" style="animation-delay:1.6s;margin-top:12px"><span class="pill p-green">${ic('check',12)} Follow-up sent — in your voice</span></div></div>`,
 form:()=>`<div class="scap"><div class="k">Smart forms</div><h4>One link.<br>A signed offer.</h4><p>Your client fills the Offer to Purchase on their phone, uploads documents, and signs.</p></div>
  <div><div class="card a-slide" style="padding:18px">
   <b style="font-size:13.5px">Offer to Purchase — Marsha Campbell</b>
   <div class="prog a-bar" style="margin:12px 0 14px"><i style="--w:100%"></i></div>
   ${[['Purchaser & TRN','0.4s'],['Offer: J$60,500,000','0.8s'],['Documents uploaded (4)','1.2s']].map(f=>`<div class="a-slide" style="animation-delay:${f[1]};display:flex;justify-content:space-between;font-size:12.5px;padding:7px 0;border-bottom:1px dashed var(--line)"><span>${f[0]}</span><span style="color:var(--green)">${ic('check',12)}</span></div>`).join('')}
   <div class="a-pop" style="animation-delay:2s;margin-top:12px"><span class="pill p-green">Signed — filed automatically</span></div></div></div>`,
 report:()=>`<div class="scap"><div class="k">Seller reports</div><h4>One tap.<br>A branded report.</h4><p>Every showing, post and inquiry becomes an owner update your seller shows off.</p></div>
  <div><div class="card a-slide" style="overflow:hidden;padding:0">
   <div style="background:var(--green);color:#fff;padding:12px 16px;font-family:'Instrument Serif',serif">12 Barbican Road — Owner Update</div>
   <div style="display:grid;grid-template-columns:repeat(4,1fr)">${[['6','Showings','.3s'],['14','Inquiries','.6s'],['9','Open house','.9s'],['1','Offers','1.2s']].map(s=>`<div class="a-pop" style="animation-delay:${s[2]};padding:14px 6px;text-align:center;border-right:1px solid var(--line)"><div class="serif" style="font-size:20px;color:var(--green)">${s[0]}</div><div style="font-size:9px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em">${s[1]}</div></div>`).join('')}</div>
   <div class="a-pop" style="animation-delay:1.7s;padding:12px 16px"><span class="pill p-gold">Sent to owner via WhatsApp</span></div></div></div>`,
 units:()=>`<div class="scap"><div class="k">Presales</div><h4>Watch the building<br>sell itself.</h4><p>Every reservation and contract updates the grid — and your lender report — in real time.</p></div>
  <div><div class="card a-slide" style="padding:18px">
   <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px">${Array.from({length:24}).map((_,i)=>{const fills=[2,5,7,10,11,14,17,19,21,22];const f=fills.includes(i);return `<div class="a-cell ${f?'f':''}" style="animation-delay:${.2+i*.09}s"></div>`}).join('')}</div>
   <div class="a-pop" style="animation-delay:2.6s;margin-top:14px;display:flex;justify-content:space-between;align-items:center"><span class="pill p-green">45% pre-sold</span><span style="font-size:12px;color:var(--mut)">Lender report ready</span></div></div></div>`,
 updates:()=>`<div class="scap"><div class="k">Buyer portals</div><h4>Post once.<br>27 buyers know.</h4><p>Milestone updates land in every buyer's portal — the "any update?" calls stop.</p></div>
  <div><div class="card a-slide" style="padding:16px"><b style="font-size:13.5px">Foundation complete — 12 photos</b>
   <div style="font-size:12px;color:var(--mut);margin-top:3px">Published to Palm Ridge buyers</div></div>
   ${[['Grace W.','viewed','0.9s'],['Marlon T.','viewed','1.3s'],['Simone B.','viewed','1.7s']].map(b=>`<div class="a-slide" style="animation-delay:${b[2]};display:flex;justify-content:space-between;background:#fff;border:1px solid var(--line);border-radius:10px;padding:9px 14px;margin-top:8px;font-size:12.5px"><span>${b[0]}</span><span style="color:var(--green)">${b[1]} ${ic('check',11)}</span></div>`).join('')}`,
 budget:()=>`<div class="scap"><div class="k">Owner transparency</div><h4>Every dollar,<br>visible.</h4><p>Budgets, balances and every receipt — published to every owner, automatically.</p></div>
  <div><div class="card a-slide" style="padding:18px">
   ${[['Security','84%','.3s'],['Landscaping','62%','.7s'],['Repairs','91%','1.1s']].map(b=>`<div style="padding:8px 0"><div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:6px"><b>${b[0]}</b><span style="color:var(--mut)">${b[1]} of budget</span></div><div class="prog a-bar" style="animation-delay:${b[2]}"><i style="--w:${b[1]}"></i></div></div>`).join('')}
   <div class="a-pop" style="animation-delay:1.9s;margin-top:10px"><span class="pill p-green">Receipts attached — owners can see everything</span></div></div></div>`,
 pay:()=>`<div class="scap"><div class="k">Collections</div><h4>Fees paid<br>in two taps.</h4><p>Card or bank transfer, receipts issued, arrears reminded politely — automatically.</p></div>
  <div><div class="card a-slide" style="padding:18px;display:flex;justify-content:space-between;align-items:center">
   <div><div style="font-size:12px;color:var(--mut)">July maintenance — Mews 12</div><div class="serif" style="font-size:24px;margin-top:2px">J$63,000</div></div>
   <span class="btn btn-sm btn-p">Pay now</span></div>
   <div class="a-pop" style="animation-delay:1.2s;margin-top:12px"><span class="pill p-green">${ic('check',12)} Paid — HOA ledger updated</span></div>
   <div class="a-slide" style="animation-delay:1.8s;margin-top:12px"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px"><span>Collection rate</span><b style="color:var(--green)">91%</b></div><div class="prog a-bar" style="animation-delay:1.9s"><i style="--w:91%"></i></div></div>`
};
function reelHtml(keys){return `
<div class="reel reveal" data-reel="1">
  <div class="rbar"><div class="rdot"></div><div class="rdot"></div><div class="rdot"></div><span class="rlive">Live demo</span></div>
  <div class="stage">${keys.map((k,i)=>`<div class="scene ${i===0?'on':''}">${SCENES[k]()}</div>`).join('')}</div>
  <div class="rfoot"><div class="rdots">${keys.map((_,i)=>`<i class="${i===0?'on':''}"></i>`).join('')}</div>
  <span style="font-size:11.5px;color:var(--mut)">Auto-playing demo — the real thing is one click away</span></div>
</div>`}
function startReels(){
  document.querySelectorAll('[data-reel]').forEach(r=>{
    if(r.dataset.init)return;r.dataset.init='1';
    const scenes=[...r.querySelectorAll('.scene')],dots=[...r.querySelectorAll('.rdots i')];let i=0;
    const show=n=>{scenes.forEach((s,j)=>s.classList.toggle('on',j===n));dots.forEach((d,j)=>d.classList.toggle('on',j===n))};
    const iv=setInterval(()=>{if(!document.body.contains(r)){clearInterval(iv);return}i=(i+1)%scenes.length;show(i)},5600);
  });
}

/* ---------- PRODUCT PAGES ---------- */
const PRODUCTS={
 agents:{kick:'Realm for Agents & Brokerages',h:'Your entire deal,<br><em style="color:#d9c188">handled.</em>',img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1900&q=78',
  sub:'From the first inquiry to the signed offer to the commission payout — one calm workspace that works like a personal assistant.',
  reel:['nudge','form','report'],demo:'/app/dashboard',setrole:'agent',price:'From US$15 per agent, monthly · 14 days free',
  feats:[['file','Client-fill forms & e-signature','Send one link; your client completes the Offer to Purchase, uploads documents and signs on their phone. The PDF files itself and every field lands in your CRM.'],
   ['bell','Smart nudges & Your Day','Quiet clients, stale deals and unsigned forms surface automatically each morning — with follow-ups pre-drafted in your voice.'],
   ['chart','Branded seller reports','Every logged call, showing and post becomes a one-tap owner report — the strongest listing-retention tool there is.'],
   ['dollar','Commission clarity','Sale price, rate, GCT, splits and co-broke — your exact net on every deal, months before it closes.'],
   ['spark','Copilot in your voice','Listing descriptions, captions, replies and report narratives generated from your actual listings.'],
   ['globe','Website & listing pages','Five designer templates, custom domain on Pro, and instant landing pages for every listing that feed inquiries into your pipeline.']]},
 developers:{kick:'Realm for Developers',h:'Sell the building<br><em style="color:#d9c188">before it exists.</em>',img:'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1900&q=78',
  sub:'Presale inventory, buyer portals, deposit ledgers and lender-ready reporting — the first platform of its kind in the Caribbean.',
  reel:['units','updates','pay'],demo:'/dev/overview',setrole:'dev',price:'From US$299 per development, monthly',
  feats:[['layers','Unit inventory & allocations','Available, reserved, contracted, sold — with reservation timers and no double-selling, across every block and phase.'],
   ['up','Buyer portals & milestone updates','Construction photos, payment schedules and what-happens-next for every purchaser. Post once; everyone knows.'],
   ['wallet','Deposits & installments','Tracked to the cent in a ledger built around REDDA trust-account rules, with receipts and aging.'],
   ['chart','Lender-ready reporting','Presale percentages, contracted value and deposits held — formatted the way banks and the JMB ask for it.'],
   ['deal','Broker network','Publish inventory to licensed agents across Jamaica; allocations and co-broke commissions tracked automatically.'],
   ['key','Handover & titles','Snag lists with photos, walkthrough scheduling and splinter-title tracking your buyers can see for themselves.']]},
 communities:{kick:'Realm for Property Managers & Communities',h:'The AGM question,<br><em style="color:#d9c188">answered forever.</em>',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1900&q=78',
  sub:'White-label portals where owners see every balance, budget line and receipt — and pay, book and report without calling the office.',
  reel:['budget','pay','nudge'],demo:'/pm/overview',setrole:'pm',price:'From US$29 per community, monthly · owner access always free',
  feats:[['eye','Owner transparency','Statements, budget vs. actual, strata balances, meeting minutes and every uploaded receipt — visible to every owner.'],
   ['wallet','Online fee collection','Card and bank transfer payments, automated arrears reminders, weekly settlement with board-ready reconciliation.'],
   ['cal','Amenity booking','Tennis court, pool and clubhouse booked fairly from residents phones, with per-unit limits.'],
   ['file','Requests & maintenance','Photo-attached requests every owner can track — reported, in progress, done — with automatic notifications.'],
   ['chart','Budget & expense publishing','Managers upload monthly expenses with receipts; owners see exactly what was paid for and why.'],
   ['globe','True white label','Your name, logo, colors and domain on every screen. Realm stays invisible.']]}
};
function productPage(seg){
 const p=PRODUCTS[seg]||PRODUCTS.agents;
 const embed=seg==='developers'?dOverview():seg==='communities'?pOverview():vDash();
 return `
<div class="phero">
  <div class="bg" style="background-image:url('${p.img}')"></div><div class="tint"></div>
  <div class="in">
    <div class="kicker hl" style="animation-delay:.1s;color:var(--gold)">${p.kick}</div>
    <h1 class="hl" style="animation-delay:.25s">${p.h}</h1>
    <p class="hl" style="animation-delay:.45s">${p.sub}</p>
    <div class="hl" style="animation-delay:.6s;display:flex;gap:12px;margin-top:26px">
      <button class="btn btn-p" onclick="setRole('${p.setrole}');nav('${p.demo}')">Open the live demo ${ic('arrow',14)}</button>
      <button class="btn btn-o" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.45)" onclick="nav('/pricing')">${p.price.split('·')[0].trim()}</button>
    </div>
  </div>
</div>
<div class="sect" style="padding-top:76px;padding-bottom:30px">
  <div class="head reveal" style="max-width:560px"><div class="kicker">What it does</div>
    <h2>Everything this side of the business needs.</h2></div>
  <div class="pfgrid">
    ${p.feats.map((f,i)=>`<div class="pfeat reveal" style="transition-delay:${(i%2)*0.1}s"><div class="fi">${ic(f[0],17)}</div><div><b>${f[1]}</b><p>${f[2]}</p></div></div>`).join('')}
  </div>
</div>
<div class="sect" style="padding-top:40px;padding-bottom:30px">
  <div class="head reveal" style="max-width:560px"><div class="kicker">See it move</div>
    <h2>Watch it work.</h2></div>
  ${reelHtml(p.reel)}
</div>
<div class="sect" style="padding-top:40px">
  <div class="head reveal" style="max-width:560px"><div class="kicker">Inside the product</div>
    <h2>This is the actual dashboard.</h2>
    <p>Not a mockup — the same workspace you'll use, with sample data. Open it and click around.</p></div>
  <div class="embedframe reveal">
    <div class="eb"><div class="rdot"></div><div class="rdot"></div><div class="rdot"></div></div>
    <div class="ewrap"><div class="escale">${embed}</div>
    <div class="efade"><button class="btn btn-p" onclick="setRole('${p.setrole}');nav('${p.demo}')">Open the live demo ${ic('arrow',14)}</button></div></div>
  </div>
  <div style="text-align:center;margin-top:26px;font-size:12.5px;color:var(--mut)">${p.price}</div>
</div>`}

/* ============ HOME PAGE ============ */
function homePage(){return `
<div class="hero-lux">
  <div class="hero-bg" style="background-image:url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1900&q=80')"></div>
  <div class="hero-tint"></div>
  <div class="hero-in">
    <div class="kicker hl" style="animation-delay:.1s">One platform · Three worlds of property</div>
    <h1><span class="hl" style="display:block;animation-delay:.25s">The operating system</span><span class="hl" style="display:block;animation-delay:.4s">for <em>Caribbean</em> real estate.</span></h1>
    <p class="hl" style="animation-delay:.6s">Whether you sell it, build it, or manage it — Realm runs the whole journey. Agents close deals, developers sell buildings before they exist, and communities finally see where every dollar goes.</p>
    <div class="cta hl" style="animation-delay:.75s;justify-content:center;display:flex;gap:12px;margin-top:34px">
      <button class="btn btn-p" onclick="nav('/login')">Start free — 14 days ${ic('arrow',14)}</button>
      <button class="btn btn-o" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.45)" onclick="nav('/pricing')">See pricing</button>
    </div>
    <div class="meta hl" style="animation-delay:.9s;color:rgba(255,255,255,.6);margin-top:22px;font-size:12.5px">Built in Jamaica, by people who work in this industry · Plans from US$15 · White label available</div>
  </div>
  <div class="scrollcue">Scroll</div>
</div>
<div class="marq"><div class="track">
  ${Array(2).fill(`<span>Agents <i></i> Developers <i></i> Communities <i></i> Kingston to the Caribbean <i></i> Every deal, handled <i></i></span>`).join('')}
</div></div>
<div class="shot fade" style="max-width:1140px;margin-top:72px">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px" class="persona-grid">
    <div class="card pcard reveal" style="overflow:hidden;cursor:pointer" onclick="nav('/product/agents')">
      <div class="pimg-w">
        <div class="pimg" style="background-image:url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=75')"></div>
        <div class="pimg-t"></div>
        <div class="plabel"><div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.8">I sell property</div>
        <div class="serif" style="font-size:23px;margin-top:4px">Agents & Brokerages</div></div>
      </div>
      <div style="padding:18px 22px">
        <div style="font-size:13px;color:var(--ink-2);line-height:1.6">Client-signed offers from one link. Nudges before you forget. Seller reports in one tap. Your commission, to the cent.</div>
        <div style="margin-top:14px;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12.5px;color:var(--mut)">From US$15/mo</span>
          <span style="color:var(--green);font-weight:600;font-size:13px;display:flex;align-items:center;gap:6px">Explore ${ic('arrow',13)}</span>
        </div>
      </div>
    </div>
    <div class="card pcard reveal" style="overflow:hidden;cursor:pointer;transition-delay:.12s" onclick="nav('/product/developers')">
      <div class="pimg-w">
        <div class="pimg" style="background-image:url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=75')"></div>
        <div class="pimg-t"></div>
        <div class="plabel"><div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.8">I build property</div>
        <div class="serif" style="font-size:23px;margin-top:4px">Developers</div></div>
      </div>
      <div style="padding:18px 22px">
        <div style="font-size:13px;color:var(--ink-2);line-height:1.6">Every unit on one screen. Buyer portals that end the "any update?" calls. Deposit ledgers built for trust-account rules. Lender-ready reports in one click.</div>
        <div style="margin-top:14px;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12.5px;color:var(--mut)">From US$299/development</span>
          <span style="color:var(--green);font-weight:600;font-size:13px;display:flex;align-items:center;gap:6px">Explore ${ic('arrow',13)}</span>
        </div>
      </div>
    </div>
    <div class="card pcard reveal" style="overflow:hidden;cursor:pointer;transition-delay:.24s" onclick="nav('/product/communities')">
      <div class="pimg-w">
        <div class="pimg" style="background-image:url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=75')"></div>
        <div class="pimg-t"></div>
        <div class="plabel"><div style="font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.8">I manage property</div>
        <div class="serif" style="font-size:23px;margin-top:4px">Managers & Communities</div></div>
      </div>
      <div style="padding:18px 22px">
        <div style="font-size:13px;color:var(--ink-2);line-height:1.6">Owners see every balance, budget line and receipt. Fees paid online. Amenities booked without arguments. All under your brand — white label.</div>
        <div style="margin-top:14px;display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12.5px;color:var(--mut)">From US$29/mo · owners free</span>
          <span style="color:var(--green);font-weight:600;font-size:13px;display:flex;align-items:center;gap:6px">Explore ${ic('arrow',13)}</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="sect">
  <div class="head reveal" style="text-align:center;max-width:520px;margin:0 auto 34px"><div class="kicker">Watch it work</div>
    <h2>Ninety seconds of Realm.</h2>
    <p>An auto-playing tour of the three worlds — nudges, presales and owner transparency.</p></div>
  ${reelHtml(['nudge','units','budget'])}
</div>
<div class="split">
  <div class="txt reveal">
    <div class="num">01 — For the ones who sell</div>
    <h2>Close deals while<br><em style="color:var(--green)">others chase paper.</em></h2>
    <p class="lead">Your client fills the offer from one link and signs on their phone. Your assistant nudges before you forget anyone. Your seller gets a branded report in one tap.</p>
    <button class="btn btn-t" style="margin-top:14px" onclick="nav('/product/agents')">Learn more — the agent workspace ${ic('arrow',14)}</button>
  </div>
  <div class="imgw reveal" style="transition-delay:.15s"><div class="img plx" data-sp="0.06" style="background-image:url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=78')"></div></div>
</div>
<div class="statsband">
  <div class="in">
    ${[[1650,'+','Licensed realtors in the RAJ'],[280,'B','J$ in building applications, 2025'],[1300,'','Strata corporations in Jamaica'],[1,'','Platform that connects them all']]
     .map((s,i)=>`<div class="reveal" style="transition-delay:${i*0.1}s"><div class="cnum"><span class="cnt" data-n="${s[0]}">0</span><small>${s[1]}</small></div><div class="clab">${s[2]}</div></div>`).join('')}
  </div>
</div>
<div class="cta-lux">
  <div class="bg plx" data-sp="0.1" style="background-image:url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1900&q=78')"></div>
  <div class="tint"></div>
  <div class="in reveal">
    <div class="kicker" style="color:var(--gold)">From the first viewing to every year after</div>
    <h2 class="serif" style="font-size:clamp(34px,4.5vw,52px);line-height:1.08;margin-top:16px">Whatever you do in property —<br><em style="color:#d9c188">run it on Realm.</em></h2>
    <p style="color:rgba(255,255,255,.75);margin:18px 0 30px;font-size:15px">Agents start free in five minutes. Developers and managers, talk to Realm.</p>
    <div style="display:flex;gap:12px;justify-content:center">
      <button class="btn btn-p" onclick="nav('/login')">Start your trial ${ic('arrow',14)}</button>
      <button class="btn btn-o" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.45)" onclick="toast('The AI concierge opens here')">Talk to Realm</button>
    </div>
  </div>
</div>`}

/* ============ PRICING ============ */
function pricingPage(){return `
<div class="sect fade" style="padding-top:70px">
  <div style="text-align:center;max-width:560px;margin:0 auto 52px">
    <div class="kicker">Pricing</div>
    <h2 class="serif" style="font-size:44px;margin-top:14px">Priced for one good deal a year.</h2>
    <p style="color:var(--mut);margin-top:14px">If Realm helps you close a single extra transaction, it pays for itself many times over. No contracts, cancel anytime.</p>
  </div>
  <div class="pgrid">
    <div class="plan">
      <h3>Core</h3><div class="price">$15<span> USD / agent / mo</span></div>
      <div class="for">For individual agents getting organised</div>
      <ul>${['CRM and deal pipelines','Client-fill forms + e-signature (25 sends/mo)','Activity logs and seller reports','Commission tracker','Copilot (fair use)','Website subdomain'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-o" onclick="nav('/login')">Start free</button>
    </div>
    <div class="plan hot">
      <span class="flag pill p-green">Most popular</span>
      <h3>Pro</h3><div class="price">$29<span> USD / agent / mo</span></div>
      <div class="for">For producers who want the full assistant</div>
      <ul>${['Everything in Core','Smart nudges and auto follow-up sequences','Daily digest and automations','Full email marketing','Social content planner','Website with custom domain','Unlimited form sends'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-p" onclick="nav('/login')">Start free</button>
    </div>
    <div class="plan">
      <h3>Team</h3><div class="price">$12<span> USD / agent / mo · 5+ seats</span></div>
      <div class="for">For teams and small brokerages</div>
      <ul>${['Core or Pro per seat (Pro $24)','Shared pipeline and lead assignment','Team reporting','Admin approvals and roles'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-o" onclick="nav('/login')">Talk to us</button>
    </div>
    <div class="plan">
      <h3>Developer</h3><div class="price">$299<span> USD / development / mo</span></div>
      <div class="for">For pre-construction sales teams</div>
      <ul>${['Unit inventory and allocations','Buyer portal with construction updates','Payment schedules and deposit ledger','Broker network and commissions','Lender-ready presale reporting'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-o" onclick="nav('/login');setTimeout(()=>setRole('dev'),50)">Explore the portal</button>
    </div>
  </div>
  <div style="max-width:560px;margin:56px auto 26px;text-align:center">
    <div class="kicker">White label</div>
    <h2 class="serif" style="font-size:32px;margin-top:10px">Realm for Property Managers</h2>
    <p style="color:var(--mut);margin-top:12px">Your brand on every screen. Residents book amenities, pay maintenance fees and raise requests through a portal that looks like yours — powered by Realm underneath.</p>
  </div>
  <div class="pgrid" style="grid-template-columns:repeat(3,1fr);max-width:900px;margin:0 auto">
    <div class="plan">
      <h3>Community</h3><div class="price">$149<span> USD / community / mo</span></div>
      <div class="for">Up to 60 units</div>
      <ul>${['White-label resident portal','Amenity booking (courts, pool, clubhouse)','Maintenance fee collection','Request and ticket tracking'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-o" onclick="nav('/login');setTimeout(()=>setRole('pm'),50)">Explore the portal</button>
    </div>
    <div class="plan hot">
      <span class="flag pill p-green">Best value</span>
      <h3>Estate</h3><div class="price">$299<span> USD / community / mo</span></div>
      <div class="for">Up to 200 units</div>
      <ul>${['Everything in Community','Custom domain and full branding','Visitor and gate pass management','Arrears automation and reporting','Board-ready financial summaries'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-p" onclick="nav('/login');setTimeout(()=>setRole('pm'),50)">Explore the portal</button>
    </div>
    <div class="plan">
      <h3>Portfolio</h3><div class="price">Custom<span></span></div>
      <div class="for">Multiple communities, one dashboard</div>
      <ul>${['Everything in Estate','Portfolio-level reporting','Priority support and onboarding','Payment gateway of your choice'].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul>
      <button class="btn btn-o" onclick="toast('We will reach out')">Talk to us</button>
    </div>
  </div>
  <div style="text-align:center;margin-top:34px;font-size:12.5px;color:var(--mut)">
    Websites: subdomain included on every agent plan · custom domain +US$10/mo (included in Pro) · custom design from US$250 one-time.<br>Founding members: first 50 agents lock in US$10/mo for life. A small convenience fee applies to resident payments.
  </div>
</div>`}

/* ============ LOGIN ============ */
let role='agent';
const roleNotes={agent:'Demo agent workspace — Harbour View Realty',dev:'Demo developer portal — Palm Ridge Residences',pm:'Demo manager portal — Cherry Gardens Mews (white label)'};
function setRole(r){role=r;['agent','dev','pm'].forEach(x=>{const b=$('r-'+x);if(b)b.classList.toggle('on',x===r)});const n=$('login-note');if(n)n.textContent=roleNotes[r]}
function loginPage(){return `
<div class="login fade">
  <div class="side">
    <div class="logo" style="color:#fff"><div class="mk" style="background:rgba(255,255,255,.15)">R</div>Realm</div>
    <h2>Everything from first call to keys — handled.</h2>
    <div style="font-size:12.5px;color:#c4d6cc">Trusted by agents and developers across Jamaica.</div>
  </div>
  <div class="form-wrap"><div class="form">
    <h3>Welcome back</h3>
    <div class="sub" id="login-note">${roleNotes[role]}</div>
    <div class="roletog" style="grid-template-columns:1fr 1fr 1fr">
      <button id="r-agent" class="${role==='agent'?'on':''}" onclick="setRole('agent')">Agent</button>
      <button id="r-dev" class="${role==='dev'?'on':''}" onclick="setRole('dev')">Developer</button>
      <button id="r-pm" class="${role==='pm'?'on':''}" onclick="setRole('pm')">Property manager</button>
    </div>
    <div class="field"><label>Email</label><input value="jordan@harbourview.com"></div>
    <div class="field"><label>Password</label><input type="password" value="ababababab"></div>
    <button class="btn btn-p" style="width:100%;margin-top:6px" onclick="nav(role==='agent'?'/app/dashboard':role==='dev'?'/dev/overview':'/pm/overview')">Log in ${ic('arrow',14)}</button>
    <div style="text-align:center;margin-top:18px;font-size:12.5px;color:var(--mut)">New here? <a style="color:var(--green);font-weight:600;cursor:pointer" onclick="toast('Signup flow ships with the real build')">Start your 14-day trial</a></div>
  </div></div>
</div>`}

/* ============ APP SHELL (AGENT) ============ */
const agentNav=[
 ['dashboard','Today','home'],['people','People','users'],['deals','Deals','deal'],
 ['properties','Properties','building'],['forms','Forms','file'],['money','Money','dollar'],
 ['copilot','Copilot','spark'],['website','My Website','globe'],['settings','Settings','gear']
];
function shell(items,active,base,title,persona,content){return `
<div class="app">
  <aside class="side">
    <div class="slogo"><div class="mk">R</div>Realm</div>
    <div class="grp">Workspace</div>
    ${items.map(n=>`<div class="snav-item ${n[0]===active?'on':''}" onclick="nav('${base}/${n[0]}')">${ic(n[2],15)}${n[1]}</div>`).join('')}
    <div class="foot">${av(persona[1],persona[2],32)}<div style="min-width:0"><div style="color:#fff;font-size:13px;font-weight:600">${persona[0]}</div><div style="font-size:11px;cursor:pointer" onclick="nav('/')">Log out</div></div></div>
  </aside>
  <div class="main">
    <div class="mobile-note">Best viewed on desktop — this demo mirrors the web workspace.</div>
    <div class="topbar"><h1>${title}</h1>
      <div class="right">
        <button class="iconbtn" onclick="toast('3 nudges waiting — see Today')">${ic('bell')}<span class="nd"></span></button>
        <button class="btn btn-p btn-sm" onclick="openModal('m-form')">${ic('send',13)} Send a form</button>
      </div>
    </div>
    <div class="content fade">${content}</div>
  </div>
</div>
${modals()}`}
function renderApp(page){
  const map={dashboard:vDash,people:vPeople,deals:vDeals,properties:vProps,forms:vForms,money:vMoney,copilot:vCopilot,website:vWebsite,settings:vSettings};
  const titles={dashboard:'Today',people:'People',deals:'Deals',properties:'Properties',forms:'Forms',money:'Money',copilot:'Copilot',website:'My Website',settings:'Settings'};
  $('root').innerHTML=shell(agentNav,page,'/app',titles[page]||'Today',['Jordan B.','J','var(--gold)'],(map[page]||vDash)());
  after(page);
}
function vDash(){return `
<div class="grid4" style="margin-bottom:16px">
  ${[['Active deals','7','2 need attention'],['Projected net · Q3','J$4.1M','J$1.36M received'],['Awaiting signature','3','1 overdue'],['Showings · July','12','+4 vs June']]
   .map(s=>`<div class="card stat"><div class="k">${s[0]}</div><div class="v">${s[1]}</div><div class="d">${s[2]}</div></div>`).join('')}
</div>
<div class="grid2">
  <div class="card panel">
    <div class="ph"><h3>Your day — Tuesday, July 7</h3><span class="pill p-gold">3 open nudges</span></div>
    ${[
      ['phone','Call back Marsha Campbell','Offer question on Ironshore Villa · quiet 4 days',['WhatsApp','Snooze','Done']],
      ['cal','Viewing at 12 Barbican Road','2:00 PM · Andre Chin and wife',['Directions','Prep']],
      ['pen','The Chin offer is unsigned','Opened 3 days ago — a reminder usually does it',['Send reminder','Snooze']]
    ].map(d=>`<div class="digest-li"><div class="di">${ic(d[0])}</div>
      <div><div class="w">${d[1]}</div><div class="s">${d[2]}</div></div>
      <div class="acts">${d[3].map((b,i)=>`<button class="btn btn-sm ${i===0?'btn-p':'btn-o'}" onclick="toast('${b} — done')">${b}</button>`).join('')}</div></div>`).join('')}
  </div>
  <div>
    <div class="card panel" style="margin-bottom:16px">
      <div class="ph"><h3>Pipeline pulse</h3><a onclick="nav('/app/deals')">Open deals</a></div>
      ${[['Lead',1],['Listed / Viewing',2],['Offer Made',1],['Sale Agreed',0],['Closed',1]].map(s=>`
      <div style="display:flex;align-items:center;gap:12px;padding:7px 0">
        <span style="font-size:12.5px;width:110px;color:var(--ink-2)">${s[0]}</span>
        <div class="prog" style="flex:1"><i style="width:${s[1]*20+8}%"></i></div>
        <b style="font-size:13px">${s[1]}</b></div>`).join('')}
    </div>
    <div class="card panel">
      <div class="ph"><h3>Recently signed</h3><a onclick="nav('/app/forms')">All forms</a></div>
      <div class="digest-li"><div class="di" style="background:var(--green-tint)">${ic('check')}</div>
        <div><div class="w">Offer to Purchase — Marsha C.</div><div class="s">Signed via client link · filed automatically</div></div></div>
    </div>
  </div>
</div>`}
function vPeople(){return `<div class="card"><table><thead><tr><th>Name</th><th>Type</th><th>Status</th><th>Last touch</th><th></th></tr></thead>
<tbody>${people.map((p,i)=>`<tr class="row" onclick="openDrawer(${i})"><td><div class="tname">${av(p.i,p.c,32)}${p.n}</div></td>
  <td><span class="pill ${p.t==='Buyer'?'p-green':p.t==='Seller'?'p-gold':'p-blue'}">${p.t}</span></td>
  <td style="color:var(--ink-2)">${p.st}</td><td style="color:${p.hot?'var(--red)':'var(--mut)'};font-weight:${p.hot?600:400}">${p.last}</td>
  <td style="text-align:right;color:var(--mut)">${ic('arrow',14)}</td></tr>`).join('')}</tbody></table></div>`}
function vDeals(){return `
<div class="kb">${stages.map((s,i)=>{const list=deals.filter(d=>d.s===i);
  return `<div class="kcol"><h4>${s}<span>${list.length}</span></h4>
   ${list.map(d=>`<div class="kcard"><div class="kp">${d.p}</div><div class="kc">${d.c}</div>
     <div class="kr"><span class="price-s" style="color:var(--green)">${d.pr}</span><span class="pill ${d.d>14?'p-red':'p-mut'}">${d.d}d in stage</span></div>
     ${i<4?`<span class="kmv" onclick="moveDeal('${d.c}')">Move to ${stages[i+1]} </span>`:''}</div>`).join('')||'<div style="font-size:12px;color:#b3b0a4;text-align:center;padding:14px 0">Empty</div>'}
  </div>`}).join('')}</div>
<div class="card panel" style="margin-top:16px">
  <div class="ph"><h3>Client deal tracker</h3><span class="pill p-green">Client viewed 2h ago</span></div>
  <div style="display:flex;justify-content:space-between;align-items:center">
    <div style="font-size:13px;color:var(--ink-2)">Marsha follows her purchase on a branded page — stage, documents needed, and what happens next.</div>
    <button class="btn btn-o btn-sm" onclick="openModal('m-tracker')">${ic('eye',13)} Preview client view</button>
  </div>
</div>`}
function vProps(){return `
<div class="grid4">${props.map((p,i)=>`
 <div class="card prop-card" onclick="${i===0?`openModal('m-prop')`:`toast('Full property files in the real build')`}">
   <div class="prop-img ${p.g}"><span class="tag pill ${p.sp}" style="background:rgba(255,255,255,.92)">${p.st}</span></div>
   <div class="prop-b"><div class="a">${p.a}</div><div class="m">${p.m}</div><div class="p">${p.p}</div></div>
 </div>`).join('')}</div>
<div style="margin-top:14px;font-size:12.5px;color:var(--mut)">Click 12 Barbican Road to see the activity log and generate a seller report.</div>`}
function vForms(){return `
<div class="card"><table><thead><tr><th>Form</th><th>Client</th><th>Status</th><th></th></tr></thead><tbody>
${[['Offer to Purchase','Marsha Campbell','Signed','p-green','View signed PDF'],['Offer to Purchase','Andre Chin','Awaiting signature','p-gold','Send reminder'],['Listing Agreement','Kerry-Ann Palmer','Sent today','p-blue','Copy link'],['KYC / Client Intake','Omar Douglas','Completed','p-green','View file']]
 .map(f=>`<tr class="row" onclick="toast('${f[4]} — done')"><td style="font-weight:600">${f[0]}</td><td>${f[1]}</td><td><span class="pill ${f[3]}">${f[2]}</span></td><td style="color:var(--green);font-weight:600;font-size:12.5px">${f[4]}</td></tr>`).join('')}
</tbody></table></div>`}
function vMoney(){return `
<div class="grid2">
 <div>
  <div class="card panel" style="background:#101711;border:none;color:#fff;margin-bottom:16px">
    <div style="font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)">Projected net · this quarter</div>
    <div class="serif" style="font-size:38px;margin-top:6px">J$4,120,000</div>
    <div style="font-size:12.5px;color:#93a89d;margin-top:4px">3 deals expected to close · J$1,360,000 already received</div>
  </div>
  <div class="card panel"><div class="ph"><h3>Upcoming payouts</h3></div>
   <div class="wf">
    <div><span>Ironshore Villa · Marsha Campbell</span><b>J$1,734,000</b></div>
    <div><span>4 Winchester Avenue · listing side</span><b>J$918,000</b></div>
    <div><span>Red Hills Apartment · rental</span><b>J$85,000</b></div>
   </div>
  </div>
 </div>
 <div class="card panel">
  <div class="ph"><h3>Commission calculator</h3></div>
  <div class="sl"><label>Sale price <b id="cp">J$68,000,000</b></label><input type="range" min="10" max="200" value="68" oninput="calc(this.value,null,null)"></div>
  <div class="sl"><label>Commission rate <b id="cr">5.0%</b></label><input type="range" min="20" max="70" value="50" oninput="calc(null,this.value,null)"></div>
  <div class="sl"><label>Your split <b id="cs">60%</b></label><input type="range" min="40" max="90" value="60" step="5" oninput="calc(null,null,this.value)"></div>
  <div class="wf" style="margin-top:16px">
    <div><span>Gross commission</span><b id="w1">J$3,400,000</b></div>
    <div><span class="neg">GCT (15%)</span><span class="neg" id="w2">- J$510,000</span></div>
    <div><span class="neg">Brokerage share</span><span class="neg" id="w3">- J$1,156,000</span></div>
    <div><span>Your net payout</span><span class="net" id="w4">J$1,734,000</span></div>
  </div>
 </div>
</div>`}
let lastKind=null;
const gens={
 listing:'Listing description - 12 Barbican Road\n\nTucked behind mature mango trees in Kingston 6, this four-bedroom family home pairs old Barbican charm with a fully renewed interior. A chef kitchen in quartz, a principal suite with garden views, and a veranda made for Sunday mornings.\n\nJ$68,000,000 - Viewings by appointment.',
 social:'Open house announcement - Instagram\n\nOPEN HOUSE - SUNDAY 2 to 5 PM\n12 Barbican Road, Kingston 6\n\nFour bedrooms. Three baths. A veranda that ends arguments about where Christmas happens.',
 reply:'Reply to Marsha\n\nHi Marsha - good news: your signed offer went to the vendor attorney this morning. The one item I still need is the pre-approval letter from NCB. - Jordan',
 report:'Seller report narrative - 4 Winchester Avenue\n\nMrs. Palmer, your first fortnight on market outperformed the Kingston 10 average: four private showings against a typical two, and eleven inquiries driven by our matched-buyer email campaign.'
};
function vCopilot(){return `
<div class="card panel" style="margin-bottom:16px;display:flex;gap:12px;align-items:center;background:var(--gold-tint);border-color:#e7d8b4">
  <span style="color:#8a6a2a">${ic('spark',18)}</span>
  <div style="font-size:13px;color:#6d5620"><b>Your voice profile:</b> warm and professional · Kingston focus · plain language. Copilot writes as you.</div>
</div>
<div class="grid2">
 <div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
   ${[['listing','Listing description'],['social','Social caption'],['reply','Reply to client'],['report','Report narrative']].map(g=>`<button class="btn btn-o btn-sm" onclick="gen('${g[0]}')">${g[1]}</button>`).join('')}
  </div>
  <div class="cop-out" id="cop-out">Choose a generator. Copilot already knows your listings, your deals and how you sound.</div>
 </div>
 <div class="card panel"><div class="ph"><h3>This month</h3></div>
  ${[['Listing descriptions',14],['Social captions',22],['Client replies',31],['Report narratives',6]].map(s=>`<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line);font-size:13.5px"><span style="color:var(--ink-2)">${s[0]}</span><b>${s[1]}</b></div>`).join('')}
 </div>
</div>`}
function vSettings(){return `
<div class="grid2">
 <div class="card panel"><div class="ph"><h3>Brokerage</h3></div>
  <div class="field"><label>Brokerage name</label><input value="Harbour View Realty"></div>
  <div class="field"><label>Default commission split (agent share)</label><select><option>60%</option><option>50%</option></select></div>
  <button class="btn btn-p btn-sm" onclick="toast('Saved')">Save changes</button></div>
 <div class="card panel"><div class="ph"><h3>Team approvals</h3><span class="pill p-gold">1 pending</span></div>
  <div class="digest-li">${av('TB','#39536b',34)}<div><div class="w">Tanya Brown</div><div class="s">Requested to join · License SL-4482</div></div>
    <div class="acts"><button class="btn btn-sm btn-p" onclick="toast('Approved')">Approve</button></div></div>
 </div>
</div>`}

/* ---------- WEBSITE BUILDER ---------- */
function vWebsite(){return `
<div class="card panel" style="margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
 <div><h3 style="font-size:15px;font-weight:600">jordanblake.realm.app <span class="pill p-green" style="margin-left:8px">Live</span></h3>
  <div style="font-size:12.5px;color:var(--mut);margin-top:3px">Your listings sync automatically. Custom domain available on Pro.</div></div>
 <div style="display:flex;gap:8px">
  <button class="btn btn-o btn-sm" onclick="toast('Domain settings ship in the real build')">${ic('globe',13)} Connect domain</button>
  <button class="btn btn-p btn-sm" onclick="openSite()">${ic('eye',13)} Preview my site</button>
 </div>
</div>
<div class="ph" style="margin-bottom:12px"><h3 style="font-size:14.5px;font-weight:600">Choose your template</h3></div>
<div class="tpl-grid">
 ${templates.map((t,i)=>`
  <div class="tpl card ${i===selTpl?'sel':''}" onclick="pickTpl(${i})">
    <span class="selpill pill p-green">Selected</span>
    <div class="prev" style="background:${t.bg};color:${t.ink}">
      <div class="mini-h" style="font-size:${t.f==='serif'?'20px':'17px'};font-family:${t.f==='serif'?"'Instrument Serif',serif":"'Instrument Sans',sans-serif"};font-weight:${t.f==='serif'?400:700}">Jordan Blake<br>Real Estate</div>
      <div class="mini-bar" style="background:${t.ac}"></div>
      <div class="mini-grid"><i style="background:${t.ac}22;border:1px solid ${t.ac}44"></i><i style="background:${t.ac}22;border:1px solid ${t.ac}44"></i><i style="background:${t.ac}22;border:1px solid ${t.ac}44"></i></div>
    </div>
    <div class="tb"><div><b>${t.n}</b><br><span>${t.s}</span></div><span style="color:var(--green)">${ic('arrow',14)}</span></div>
  </div>`).join('')}
 <div class="tpl card" onclick="openModal('m-custom')">
   <div class="prev" style="background:repeating-linear-gradient(45deg,#f0efe9,#f0efe9 10px,#faf9f4 10px,#faf9f4 20px);display:flex;align-items:center;justify-content:center">
     <div style="text-align:center;color:var(--mut)">${ic('pen',22)}<div style="margin-top:8px;font-weight:600;font-size:13px;color:var(--ink-2)">Fully custom design</div></div>
   </div>
   <div class="tb"><div><b>Custom</b><br><span>Designed with you · from US$250</span></div><span style="color:var(--green)">${ic('arrow',14)}</span></div>
 </div>
</div>
<div class="ph" style="margin:26px 0 6px"><h3 style="font-size:14.5px;font-weight:600">Listing landing pages</h3></div>
<div style="font-size:12.5px;color:var(--mut);margin-bottom:12px">Give any listing its own beautiful page. Inquiries land straight in your CRM. Pages use your selected template style.</div>
<div class="card"><table><thead><tr><th>Listing</th><th>Page</th><th>Views · 30d</th><th>Inquiries</th><th></th></tr></thead><tbody>
 ${props.map((p,i)=>`<tr class="row">
   <td><div class="tname"><span style="width:34px;height:26px;border-radius:6px;display:inline-block" class="${p.g}"></span>${p.a}</div></td>
   <td style="color:var(--mut);font-size:12.5px">${i<2?'jordanblake.realm.app/'+p.a.toLowerCase().split(' ').join('-').replace(',',''):'Not published'}</td>
   <td>${i<2?[482,317][i]:'-'}</td><td>${i<2?[11,6][i]:'-'}</td>
   <td style="text-align:right">${i<2?`<button class="btn btn-o btn-sm" onclick="openListing(${i})">${ic('eye',12)} View page</button>`:`<button class="btn btn-p btn-sm" onclick="openListing(${i});toast('Page published')">${ic('globe',12)} Create page</button>`}</td>
  </tr>`).join('')}
</tbody></table></div>`}
function openListing(pi){
 const t=templates[selTpl];const p=props[pi];const serif=t.f==='serif';const dark=t.bg==='#131512';
 const wrap=document.createElement('div');wrap.className='sitewrap open';wrap.id='sitewrap';
 wrap.innerHTML=`
  <div class="site-tools">
    <div style="display:flex;align-items:center;gap:10px">${ic('globe',14)} jordanblake.realm.app/${p.a.toLowerCase().split(' ').join('-')} <span class="pill p-gold">Listing page · ${t.n}</span></div>
    <div style="display:flex;gap:8px">
      ${templates.map((x,i)=>`<button class="btn btn-sm" style="background:${i===selTpl?'#fff':'transparent'};color:${i===selTpl?'#111':'#aaa'};border:1px solid #444" onclick="selTpl=${i};document.getElementById('sitewrap').remove();openListing(${pi})">${x.n}</button>`).join('')}
      <button class="btn btn-sm btn-gold" onclick="document.getElementById('sitewrap').remove()">Close preview</button>
    </div>
  </div>
  <div class="siteframe" style="background:${t.bg};color:${t.ink}">
    <div class="${p.g}" style="height:330px;position:relative">
      <div style="position:absolute;bottom:0;left:0;right:0;padding:36px;background:linear-gradient(transparent,rgba(0,0,0,.55));color:#fff">
        <div style="max-width:920px;margin:0 auto">
          <div style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;opacity:.85">Exclusive listing · ${p.st}</div>
          <div style="font-family:${serif?"'Instrument Serif',serif":"'Instrument Sans',sans-serif"};font-weight:${serif?400:700};font-size:44px;margin-top:8px">${p.a}</div>
          <div style="font-size:15px;opacity:.9;margin-top:4px">${p.m}</div>
        </div>
      </div>
    </div>
    <div style="max-width:920px;margin:0 auto;padding:34px 32px;display:grid;grid-template-columns:1.6fr 1fr;gap:36px">
      <div>
        <div style="font-family:'Instrument Serif',serif;font-size:30px;color:${t.ac}">${p.p}</div>
        <p style="margin-top:16px;font-size:14.5px;line-height:1.75;opacity:.85">Tucked behind mature mango trees, this home pairs classic charm with a fully renewed interior. Gated, dual power with solar, minutes from everything that matters.</p>
        <div style="display:flex;gap:22px;margin-top:22px;font-size:13px;opacity:.8"><span>4 bedrooms</span><span>3 bathrooms</span><span>Solar + grid</span><span>Gated</span></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px">
          <div class="g2" style="height:86px;border-radius:10px"></div><div class="g3" style="height:86px;border-radius:10px"></div><div class="g4" style="height:86px;border-radius:10px"></div>
        </div>
      </div>
      <div style="border:1px solid ${t.ink}22;border-radius:16px;padding:22px;background:${dark?'#1b1e1a':'#fff'};align-self:start">
        <div style="font-weight:700;font-size:15px">Book a private viewing</div>
        <div style="font-size:12px;opacity:.65;margin:4px 0 16px">with Jordan Blake · Licensed Realtor</div>
        <div class="field"><label style="color:inherit;opacity:.7">Your name</label><input placeholder="Full name" style="background:${dark?'#131512':'#fff'};color:inherit;border-color:${t.ink}33"></div>
        <div class="field"><label style="color:inherit;opacity:.7">Phone or WhatsApp</label><input placeholder="876 ..." style="background:${dark?'#131512':'#fff'};color:inherit;border-color:${t.ink}33"></div>
        <div style="background:${t.ac};color:${dark?'#131512':'#fff'};text-align:center;padding:13px;border-radius:10px;font-weight:600;font-size:14px;cursor:pointer" onclick="toast('Inquiry captured')">Request viewing</div>
      </div>
    </div>
    <div style="text-align:center;padding:30px;font-size:11.5px;opacity:.5">Presented by Jordan Blake · Harbour View Realty · Powered by Realm</div>
  </div>`;
 document.body.appendChild(wrap);
}
function pickTpl(i){selTpl=i;renderApp('website');toast('Template applied: '+templates[i].n)}
function openSite(){
 const t=templates[selTpl];const serif=t.f==='serif';
 const wrap=document.createElement('div');wrap.className='sitewrap open';wrap.id='sitewrap';
 wrap.innerHTML=`
  <div class="site-tools">
    <div style="display:flex;align-items:center;gap:10px">${ic('globe',14)} jordanblake.realm.app <span class="pill p-gold">Template: ${t.n}</span></div>
    <div style="display:flex;gap:8px">
      ${templates.map((x,i)=>`<button class="btn btn-sm" style="background:${i===selTpl?'#fff':'transparent'};color:${i===selTpl?'#111':'#aaa'};border:1px solid #444" onclick="selTpl=${i};document.getElementById('sitewrap').remove();openSite()">${x.n}</button>`).join('')}
      <button class="btn btn-sm btn-gold" onclick="document.getElementById('sitewrap').remove()">Close preview</button>
    </div>
  </div>
  <div class="siteframe" style="background:${t.bg};color:${t.ink}">
    <div style="max-width:980px;margin:0 auto;padding:26px 32px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ${t.ink}18">
      <div style="font-weight:700;${serif?"font-family:'Instrument Serif',serif;font-size:20px;font-weight:400":''}">Jordan Blake</div>
      <div style="display:flex;gap:26px;font-size:13px;opacity:.75"><span>Listings</span><span>Sold</span><span>About</span><span style="color:${t.ac};font-weight:600">Book a viewing</span></div>
    </div>
    <div style="max-width:980px;margin:0 auto;padding:90px 32px 70px;text-align:center">
      <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:${t.ac};font-weight:600">Kingston · Licensed Realtor · RAJ Member</div>
      <h1 style="font-family:${serif?"'Instrument Serif',serif":"'Instrument Sans',sans-serif"};font-weight:${serif?400:700};font-size:54px;line-height:1.05;margin-top:20px">Find your place<br>in Jamaica.</h1>
      <p style="max-width:440px;margin:20px auto 0;font-size:15px;opacity:.75;line-height:1.6">Personal, straight-talking guidance for buyers and sellers across Kingston and the North Coast.</p>
      <div style="margin-top:30px"><span style="display:inline-block;background:${t.ac};color:${t.bg==='#131512'?'#131512':'#fff'};padding:13px 28px;border-radius:10px;font-weight:600;font-size:14px;cursor:pointer">Browse listings</span></div>
    </div>
    <div style="max-width:980px;margin:0 auto;padding:0 32px 90px">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">
        ${props.slice(0,3).map(p=>`<div style="border:1px solid ${t.ink}1c;border-radius:14px;overflow:hidden;background:${t.bg==='#131512'?'#1b1e1a':'#fff'}">
          <div class="${p.g}" style="height:130px"></div>
          <div style="padding:16px"><div style="font-weight:600;font-size:14px">${p.a}</div>
          <div style="font-size:12px;opacity:.65;margin-top:2px">${p.m}</div>
          <div style="font-family:'Instrument Serif',serif;font-size:17px;margin-top:10px;color:${t.ac}">${p.p}</div></div></div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:60px;font-size:11.5px;opacity:.5">Powered by Realm · listings sync automatically from your workspace</div>
    </div>
  </div>`;
 document.body.appendChild(wrap);
}

/* ============ DEVELOPER PORTAL ============ */
const devNav=[
 ['overview','Overview','home'],['units','Units','layers'],['buyers','Buyers','users'],
 ['payments','Payments','wallet'],['updates','Construction Updates','up'],['handover','Handover & Titles','key'],
 ['brokers','Broker Network','deal'],['reports','Lender Reports','chart'],['dsettings','Settings','gear']
];
function renderDev(page){
  const map={overview:dOverview,units:dUnits,buyers:dBuyers,payments:dPayments,updates:dUpdates,handover:dHandover,brokers:dBrokers,reports:dReports,dsettings:dSettings};
  const titles={overview:'Palm Ridge Residences',units:'Unit Inventory',buyers:'Buyers',payments:'Payments',updates:'Construction Updates',handover:'Handover & Titles',brokers:'Broker Network',reports:'Lender Reports',dsettings:'Settings'};
  $('root').innerHTML=shell(devNav,page,'/dev',titles[page]||'Overview',['Palm Ridge Dev.','P','var(--blue)'],(map[page]||dOverview)());
  after(page);
}
function dOverview(){
 const sold=unitStatus.filter(u=>u==='sd').length,ct=unitStatus.filter(u=>u==='ct').length,rs=unitStatus.filter(u=>u==='rs').length,tot=unitStatus.length;
 const pre=Math.round((sold+ct)/tot*100);
 return `
<div class="card panel" style="margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px">
  <div><div style="display:flex;gap:10px;align-items:center"><h3 class="serif" style="font-size:22px">Palm Ridge Residences</h3><span class="pill p-green">REB registered</span></div>
    <div style="font-size:12.5px;color:var(--mut);margin-top:4px">40 units · Kingston 8 · Est. completion March 2027 · Phase 1 of 2</div></div>
  <button class="btn btn-p btn-sm" onclick="openModal('m-buyerportal')">${ic('eye',13)} Preview buyer portal</button>
</div>
<div class="grid4" style="margin-bottom:16px">
  <div class="card stat"><div class="k">Pre-sold</div><div class="v">${pre}%</div><div class="d"><b>${sold+ct} of ${tot}</b> units committed</div></div>
  <div class="card stat"><div class="k">Deposits in trust</div><div class="v">J$186M</div><div class="d">Fully reconciled · REDDA compliant</div></div>
  <div class="card stat"><div class="k">Reserved</div><div class="v">${rs}</div><div class="d">2 expire this week</div></div>
  <div class="card stat"><div class="k">Broker sales</div><div class="v">14</div><div class="d">via 6 partner brokerages</div></div>
</div>
<div class="grid2">
  <div class="card panel"><div class="ph"><h3>Sales absorption</h3><a onclick="nav('/dev/units')">Open inventory</a></div>
    ${[['Jan',2],['Feb',4],['Mar',3],['Apr',6],['May',5],['Jun',4]].map(m=>`<div style="display:flex;align-items:center;gap:12px;padding:6px 0"><span style="font-size:12px;width:34px;color:var(--mut)">${m[0]}</span><div class="prog" style="flex:1"><i style="width:${m[1]*15}%"></i></div><b style="font-size:12.5px">${m[1]}</b></div>`).join('')}
  </div>
  <div class="card panel"><div class="ph"><h3>Needs attention</h3></div>
    ${[['clock','Unit B-14 reservation expires Friday','Buyer: N. Salmon — deposit not yet received',['Remind','Release']],['file','3 buyers missing pre-approval letters','Blocks their Agreement for Sale prep',['Request docs']],['up','Milestone update due to 27 buyers','Foundation complete — post with photos',['Post update']]]
     .map(d=>`<div class="digest-li"><div class="di">${ic(d[0])}</div><div><div class="w">${d[1]}</div><div class="s">${d[2]}</div></div><div class="acts">${d[3].map((b,i)=>`<button class="btn btn-sm ${i===0?'btn-p':'btn-o'}" onclick="toast('${b} — done')">${b}</button>`).join('')}</div></div>`).join('')}
  </div>
</div>`}
function dUnits(){return `
<div class="card panel" style="margin-bottom:16px">
 <div class="ph"><h3>Block A and B · 40 units</h3>
  <div class="legend"><span><i style="background:#fff;border:1px solid var(--line-2)"></i>Available</span><span><i style="background:var(--gold-tint);border:1px solid #e3d3ab"></i>Reserved</span><span><i style="background:var(--blue-tint);border:1px solid #c8d5e4"></i>Contracted</span><span><i style="background:var(--green)"></i>Sold</span></div></div>
 <div class="units">${unitStatus.map((u,i)=>{const b=i<20?'A':'B';const n=b+'-'+String(i%20+1).padStart(2,'0');return `<div class="unit u-${u}" onclick="unitClick('${n}','${uLabel[u]}')">${n}</div>`}).join('')}</div>
</div>
<div class="grid3">${[['1-bed · 720 sq ft','J$28.5M','12 remaining'],['2-bed · 1,080 sq ft','J$41M','5 remaining'],['3-bed PH · 1,650 sq ft','J$68M','1 remaining']]
  .map(u=>`<div class="card panel"><b style="font-size:14px">${u[0]}</b><div class="serif" style="font-size:22px;color:var(--green);margin-top:6px">${u[1]}</div><div style="font-size:12.5px;color:var(--mut);margin-top:2px">${u[2]}</div></div>`).join('')}</div>`}
function unitClick(n,s){toast('Unit '+n+' - '+s+'.')}
function dBuyers(){return `
<div class="card"><table><thead><tr><th>Buyer</th><th>Unit</th><th>Stage</th><th>Paid to date</th><th>Next milestone</th><th></th></tr></thead><tbody>
 ${[['Nadine Salmon','NS','#b05a7a','B-14','Reserved','J$0 of J$4.1M','Deposit due Friday','p-red'],['Marlon Thompson','MT','#4a6fa5','A-03','Contracted','J$8.2M of J$41M','Stage 2 — Jan',''],['Grace Whyte','GW','#2c7a5c','A-11','Contracted','J$12.3M of J$41M','Stage 3 — roof',''],['Devon Clarke','DC','#7a6ab0','B-07','Sold (complete)','J$28.5M — paid in full','Handover · title pending',''],['Simone Barrett','SB','#b98f3e','A-17','Contracted','J$13.6M of J$68M','Mortgage at completion','']]
  .map(b=>`<tr class="row" onclick="openModal('m-buyerportal')"><td><div class="tname">${av(b[1],b[2],32)}${b[0]}</div></td><td style="font-weight:600">${b[3]}</td><td><span class="pill ${b[4]==='Reserved'?'p-gold':b[4].startsWith('Sold')?'p-green':'p-blue'}">${b[4]}</span></td><td>${b[5]}</td><td style="color:${b[7]?'var(--red)':'var(--ink-2)'}">${b[6]}</td><td style="color:var(--mut)">${ic('arrow',14)}</td></tr>`).join('')}
</tbody></table></div>`}
function dPayments(){return `
<div class="grid4" style="margin-bottom:16px">${[['Collected to date','J$186M','across 24 buyers'],['Due this month','J$22.4M','8 installments'],['Overdue','J$4.1M','1 buyer · reminded'],['Trust account','Reconciled','last audit June 30']].map(s=>`<div class="card stat"><div class="k">${s[0]}</div><div class="v" style="font-size:24px">${s[1]}</div><div class="d">${s[2]}</div></div>`).join('')}</div>
<div class="card"><table><thead><tr><th>Date</th><th>Buyer</th><th>Unit</th><th>Item</th><th>Amount</th><th>Status</th></tr></thead><tbody>
 ${[['Jul 04','Grace Whyte','A-11','Stage 3 installment','J$4,100,000','Received','p-green'],['Jul 02','Marlon Thompson','A-03','Stage 2 installment','J$4,100,000','Received','p-green'],['Jul 01','Simone Barrett','A-17','Stage 2 installment','J$6,800,000','Received','p-green'],['Jun 28','Nadine Salmon','B-14','Reservation deposit','J$4,100,000','Overdue','p-red']]
  .map(r=>`<tr><td style="color:var(--mut)">${r[0]}</td><td style="font-weight:600">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td class="serif">${r[4]}</td><td><span class="pill ${r[6]}">${r[5]}</span></td></tr>`).join('')}
</tbody></table></div>`}
function dBrokers(){return `<div class="card"><table><thead><tr><th>Brokerage</th><th>Agent</th><th>Units sold</th><th>Commission owed</th></tr></thead><tbody>
 ${[['Harbour View Realty','Jordan B.',4,'J$3,690,000'],['Blue Mountain Estates','K. Douglas',3,'J$2,767,500'],['Coldwell Banker Jamaica','T. Reid',3,'J$2,460,000']].map(b=>`<tr><td style="font-weight:600">${b[0]}</td><td>${b[1]}</td><td>${b[2]}</td><td class="serif">${b[3]}</td></tr>`).join('')}
</tbody></table></div>`}
function dReports(){return `
<div class="grid2">
 <div class="card panel"><div class="ph"><h3>Lender-ready presale report</h3><span class="pill p-green">Auto-generated</span></div>
  <p style="font-size:13px;color:var(--ink-2);margin-bottom:16px">Banks and the JMB ask for evidence a market exists before releasing construction drawdowns. Realm produces the package monthly.</p>
  <div class="wf"><div><span>Units committed (sold + contracted)</span><b>18 of 40 · 45%</b></div><div><span>Contracted value</span><b>J$742M</b></div><div><span>Deposits held in trust</span><b>J$186M</b></div><div><span>Buyers with financing confirmed</span><b>14 of 18</b></div></div>
  <div style="display:flex;gap:8px;margin-top:18px"><button class="btn btn-p btn-sm" onclick="toast('June report exported')">Export June PDF</button><button class="btn btn-o btn-sm" onclick="toast('Shared with NCB')">Share securely</button></div>
 </div>
 <div class="card panel"><div class="ph"><h3>Compliance</h3></div>
  ${[['REB development registration','Renewed · expires Mar 31, 2027','p-green'],['Trust account reconciliation','Current · June 30','p-green'],['Charge lodged on title','38 of 40 units','p-gold'],['Shared Community Act lodgment','Bylaws submitted','p-green']].map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--line)"><span style="font-size:13.5px">${c[0]}</span><span class="pill ${c[2]}">${c[1]}</span></div>`).join('')}
 </div>
</div>`}
function dUpdates(){return `
<div class="grid2">
 <div><div class="card panel" style="margin-bottom:16px"><div class="ph"><h3>Post a milestone update</h3><span class="pill p-gold">Goes to all 27 active buyers</span></div>
   <div class="field"><label>Milestone</label><select><option>Ground floor walls — in progress</option><option>Roof complete</option></select></div>
   <div class="field"><label>Message to buyers</label><textarea rows="3">Block A ground-floor walls are up and block B follows next week. We remain on schedule for March 2027.</textarea></div>
   <div style="display:flex;gap:10px"><button class="btn btn-p" onclick="toast('Update published — 27 buyers notified')">Publish update</button><button class="btn btn-o" onclick="toast('Preview')">Preview</button></div>
  </div></div>
 <div class="card panel"><div class="ph"><h3>Update history</h3></div><div class="tl">
   ${[['Foundation complete — 12 photos','June 30 · viewed by 24 of 27'],['Site preparation and piling done','May 18'],['Ground breaking ceremony','April 2'],['Sales launch — 40 units released','January 15']].map(u=>`<div class="tli"><div class="w">${u[0]}</div><div class="s">${u[1]}</div></div>`).join('')}
 </div></div>
</div>`}
function dHandover(){return `
<div class="grid4" style="margin-bottom:16px">${[['Units at practical completion','4','Block B ground floor'],['Snag items open','9','3 units'],['Handover packs ready','2','keys + manuals'],['Splinter titles in progress','4','NLA lodged']].map(s=>`<div class="card stat"><div class="k">${s[0]}</div><div class="v" style="font-size:24px">${s[1]}</div><div class="d">${s[2]}</div></div>`).join('')}</div>
<div class="card"><table><thead><tr><th>Unit</th><th>Buyer</th><th>Snag list</th><th>Title status</th></tr></thead><tbody>
 ${[['B-07','Devon Clarke','0 open · signed off','Splinter title — NLA processing','p-gold'],['B-02','Alicia Grey','3 open','Awaiting practical completion','p-mut'],['B-04','Howard family','4 open','Awaiting practical completion','p-mut']].map(r=>`<tr class="row" onclick="toast('Full snag detail with photos in the real build')"><td style="font-weight:600">${r[0]}</td><td>${r[1]}</td><td style="font-size:12.5px;color:var(--ink-2)">${r[2]}</td><td><span class="pill ${r[4]}">${r[3]}</span></td></tr>`).join('')}
</tbody></table></div>`}
function dSettings(){return `<div class="card panel" style="max-width:520px"><div class="ph"><h3>Development settings</h3></div>
 <div class="field"><label>Development name</label><input value="Palm Ridge Residences"></div>
 <div class="field"><label>Reservation hold period</label><select><option>7 days</option><option>14 days</option></select></div>
 <button class="btn btn-p btn-sm" onclick="toast('Saved')">Save changes</button></div>`}

/* ============ PROPERTY MANAGER PORTAL ============ */
const pmNav=[
 ['overview','Overview','home'],['amenities','Amenities','cal'],['fees','Payments','wallet'],
 ['budget','Budget & Minutes','chart'],['residents','Owners','users'],['requests','Requests','file'],['brand','White Label','globe'],['pmsettings','Settings','gear']
];
let slots={};
function renderPm(page){
  const map={overview:pOverview,amenities:pAmenities,fees:pFees,budget:pBudget,residents:pResidents,requests:pRequests,brand:pBrand,pmsettings:pSet};
  const titles={overview:'Cherry Gardens Mews',amenities:'Amenity Booking',fees:'Maintenance Payments',budget:'Budget, Expenses & Minutes',residents:'Owner Register',requests:'Requests',brand:'White Label',pmsettings:'Settings'};
  $('root').innerHTML=shell(pmNav,page,'/pm',titles[page]||'Overview',['CG Property Mgmt','C','var(--green)'],(map[page]||pOverview)());
  after(page);
}
function pOverview(){return `
<div class="card panel" style="margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px">
  <div><div style="display:flex;gap:10px;align-items:center"><h3 class="serif" style="font-size:22px">Cherry Gardens Mews</h3><span class="pill p-green">White label active</span></div>
    <div style="font-size:12.5px;color:var(--mut);margin-top:4px">84 units · Kingston 8 · residents see <b>portal.cherrygardensmews.com</b></div></div>
  <button class="btn btn-p btn-sm" onclick="openModal('m-resident')">${ic('eye',13)} Preview resident portal</button>
</div>
<div class="grid4" style="margin-bottom:16px">${[['Collection rate · July','87%','73 of 84 units paid'],['Collected this month','J$4.62M','of J$5.29M billed'],['Amenity bookings · week','23','Tennis leads'],['Open requests','6','2 urgent']].map(s=>`<div class="card stat"><div class="k">${s[0]}</div><div class="v">${s[1]}</div><div class="d">${s[2]}</div></div>`).join('')}</div>
<div class="grid2">
  <div class="card panel"><div class="ph"><h3>Needs attention</h3></div>
    ${[['wallet','11 units in arrears — J$668,000 outstanding','3 units over 90 days',['View aging','Send reminders']],['file','Pool pump repair — quote approved','Vendor scheduled Thursday',['Track']],['cal','Clubhouse double-booked Saturday','Thompson lime vs. HOA meeting',['Resolve']]]
     .map(d=>`<div class="digest-li"><div class="di">${ic(d[0])}</div><div><div class="w">${d[1]}</div><div class="s">${d[2]}</div></div><div class="acts">${d[3].map((b,i)=>`<button class="btn btn-sm ${i===0?'btn-p':'btn-o'}" onclick="toast('${b} — done')">${b}</button>`).join('')}</div></div>`).join('')}
  </div>
  <div class="card panel"><div class="ph"><h3>Collections · last 6 months</h3><a onclick="nav('/pm/fees')">Open payments</a></div>
    ${[['Feb',82],['Mar',85],['Apr',79],['May',88],['Jun',91],['Jul',87]].map(m=>`<div style="display:flex;align-items:center;gap:12px;padding:6px 0"><span style="font-size:12px;width:34px;color:var(--mut)">${m[0]}</span><div class="prog" style="flex:1"><i style="width:${m[1]}%"></i></div><b style="font-size:12.5px">${m[1]}%</b></div>`).join('')}
  </div>
</div>`}
const amenities=[{n:'Tennis Court',d:'6 AM - 9 PM · 1-hour slots',g:'g1'},{n:'Pool Cabana',d:'10 AM - 6 PM · 2-hour slots',g:'g2'},{n:'Clubhouse',d:'Event bookings',g:'g3'},{n:'Gym',d:'24 hours · access card',g:'g4'}];
function pAmenities(){
 const hours=['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p'];
 const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
 const booked={'Mon-7a':1,'Mon-6p':1,'Tue-6a':1,'Wed-5p':1,'Thu-7a':1,'Sat-8a':1,'Sat-9a':1,'Sun-4p':1,'Fri-6p':1};
 return `
<div class="grid4" style="margin-bottom:16px">${amenities.map((a)=>`<div class="card prop-card" onclick="toast('${a.n} schedule — this demo shows the Tennis Court grid')"><div class="prop-img ${a.g}" style="height:76px"></div><div class="prop-b"><div class="a">${a.n}</div><div class="m">${a.d}</div></div></div>`).join('')}</div>
<div class="card panel">
 <div class="ph"><h3>Tennis Court · this week</h3><div class="legend"><span><i style="background:#fff;border:1px solid var(--line-2)"></i>Open</span><span><i style="background:var(--green)"></i>Booked</span></div></div>
 <div style="overflow-x:auto"><table style="min-width:640px"><thead><tr><th style="width:52px"></th>${days.map(d=>`<th style="text-align:center">${d}</th>`).join('')}</tr></thead>
  <tbody>${hours.map(h=>`<tr><td style="font-size:11.5px;color:var(--mut);font-weight:600">${h}</td>${days.map(d=>{const k=d+'-'+h;const st=slots[k]!==undefined?slots[k]:(booked[k]||0);return `<td style="padding:4px"><div class="slot-cell" onclick="togSlot('${k}')" style="height:26px;border-radius:6px;cursor:pointer;border:1px solid ${st===1?'var(--green)':'var(--line)'};background:${st===1?'var(--green)':'#fff'}"></div></td>`}).join('')}</tr>`).join('')}</tbody>
 </table></div>
 <div style="font-size:12px;color:var(--mut);margin-top:10px">Click any open slot to book it on a resident's behalf.</div>
</div>`}
function togSlot(k){slots[k]=slots[k]===1?0:1;renderPm('amenities');toast(slots[k]?'Slot booked — resident confirmed':'Slot released')}
function pFees(){return `
<div class="grid4" style="margin-bottom:16px">${[['Billed · July','J$5.29M','84 units'],['Collected','J$4.62M','87% rate'],['In arrears','J$668K','11 units'],['Payout to HOA','J$4.55M','settles Friday']].map(s=>`<div class="card stat"><div class="k">${s[0]}</div><div class="v" style="font-size:24px">${s[1]}</div><div class="d">${s[2]}</div></div>`).join('')}</div>
<div class="card"><table><thead><tr><th>Unit</th><th>Resident</th><th>July fee</th><th>Status</th></tr></thead><tbody>
 ${[['Mews 12','S. Henriques','J$63,000','Paid · card','p-green'],['Mews 31','P. Goldson','J$63,000','Paid · bank transfer','p-green'],['Mews 07','R. Thompson','J$63,000','Overdue 32 days','p-red'],['Mews 44','D. McKenzie','J$126,000','Overdue 71 days','p-gold']].map(r=>`<tr class="row" onclick="toast('Full statement per unit in the real build')"><td style="font-weight:600">${r[0]}</td><td>${r[1]}</td><td class="serif">${r[2]}</td><td><span class="pill ${r[4]}">${r[3]}</span></td></tr>`).join('')}
</tbody></table></div>`}
function pBudget(){return `
<div class="grid2">
 <div><div class="card panel" style="margin-bottom:16px"><div class="ph"><h3>Budget vs actual · 2026</h3><span class="pill p-green">Published to owners</span></div>
   ${[['Security',1850,1795],['Landscaping & pool',920,988],['Insurance',1400,1400],['Repairs & maintenance',760,1105],['Utilities',540,512]].map(b=>{const over=b[2]>b[1];return `<div style="padding:9px 0;border-bottom:1px solid var(--line)"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px"><span style="font-weight:600">${b[0]}</span><span style="color:${over?'var(--red)':'var(--mut)'}">J$${b[2].toLocaleString()}k of J$${b[1].toLocaleString()}k ${over?'· over':''}</span></div><div class="prog"><i style="width:${Math.min(b[2]/b[1]*100,100)}%;background:${over?'var(--red)':'var(--green)'}"></i></div></div>`}).join('')}
   <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding-top:12px"><span>Strata account balance</span><span class="serif" style="color:var(--green);font-size:18px">J$3,470,000</span></div>
  </div></div>
 <div><div class="card panel"><div class="ph"><h3>July expenses</h3><button class="btn btn-p btn-sm" onclick="toast('Expense added with receipt')">${ic('plus',13)} Add expense</button></div>
   <table><thead><tr><th>Date</th><th>Item</th><th>Amount</th><th></th></tr></thead><tbody>
    ${[['Jul 05','Security — Guardsman monthly','J$154,000','Receipt'],['Jul 04','Pool chemicals & service','J$41,500','Receipt'],['Jul 03','Gardening crew — fortnight','J$68,000','Receipt'],['Jul 02','Gate motor repair','J$92,400','Invoice']].map(e=>`<tr><td style="color:var(--mut);font-size:12px">${e[0]}</td><td style="font-size:13px">${e[1]}</td><td class="serif">${e[2]}</td><td><button class="btn btn-sm btn-o" onclick="toast('${e[3]} attached')">${e[3]}</button></td></tr>`).join('')}
   </tbody></table>
  </div></div>
</div>`}
function pResidents(){return `<div class="card"><table><thead><tr><th>Unit</th><th>Resident</th><th>Type</th><th>Standing</th></tr></thead><tbody>
 ${[['Mews 12','Sasha Henriques','SH','#b05a7a','Owner','Good','p-green'],['Mews 31','Paul Goldson','PG','#4a6fa5','Owner','Good','p-green'],['Mews 07','Renee Thompson','RT','#b98f3e','Tenant','Arrears 32d','p-red'],['Mews 44','Dwayne McKenzie','DM','#7a6ab0','Owner','Payment plan','p-gold']].map(r=>`<tr class="row" onclick="openModal('m-resident')"><td style="font-weight:600">${r[0]}</td><td><div class="tname">${av(r[2],r[3],32)}${r[1]}</div></td><td>${r[4]}</td><td><span class="pill ${r[6]}">${r[5]}</span></td></tr>`).join('')}
</tbody></table></div>`}
function pRequests(){return `
<div class="grid3">${[['New',[['Leak under kitchen sink','Mews 22 · today','p-red'],['Gate remote not working','Mews 31 · today','p-mut']]],['In progress',[['Pool pump repair','Vendor Thursday','p-gold'],['Street lamp out','Electrician assigned','p-gold']]],['Done this month',[['AC service — clubhouse','Completed Jul 2','p-green'],['Pothole patch','Completed Jun 27','p-green']]]]
  .map(col=>`<div class="kcol" style="min-width:0"><h4>${col[0]}<span>${col[1].length}</span></h4>${col[1].map(t=>`<div class="kcard"><div class="kp">${t[0]}</div><div class="kc">${t[1]}</div><span class="pill ${t[2]}">${col[0]}</span></div>`).join('')}</div>`).join('')}</div>`}
function pBrand(){return `
<div class="grid2">
 <div class="card panel"><div class="ph"><h3>Your brand, everywhere</h3></div>
  <div class="field"><label>Portal name</label><input value="Cherry Gardens Mews Residents"></div>
  <div class="field"><label>Custom domain</label><input value="portal.cherrygardensmews.com"></div>
  <button class="btn btn-p btn-sm" onclick="toast('Saved — resident portal updated instantly')">Save branding</button></div>
 <div class="card panel"><div class="ph"><h3>What residents see</h3></div>
  <div class="card" style="overflow:hidden"><div style="background:#1f3d5c;color:#fff;padding:16px 18px"><div style="font-size:10px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">Resident portal</div><div class="serif" style="font-size:17px;margin-top:2px">Cherry Gardens Mews</div></div>
   <div style="padding:14px 16px;font-size:12.5px;color:var(--ink-2)">Book the tennis court, pay your maintenance fee, raise a request — all under your community's own name. Realm stays invisible.</div></div>
  <button class="btn btn-o" style="width:100%;margin-top:14px" onclick="openModal('m-resident')">${ic('eye',14)} Full resident preview</button></div>
</div>`}
function pSet(){return `<div class="card panel" style="max-width:520px"><div class="ph"><h3>Community settings</h3></div>
 <div class="field"><label>Monthly maintenance fee</label><input value="J$63,000"></div>
 <div class="field"><label>Amenity booking limit per unit</label><select><option>4 hours / week</option><option>6 hours / week</option></select></div>
 <button class="btn btn-p btn-sm" onclick="toast('Saved')">Save changes</button></div>`}

/* ============ MODALS / DRAWER ============ */
function modals(){return `
<div class="overlay" id="m-form" onclick="closeOv(event)"><div class="modal">
  <h3>Send a form</h3><div class="note">Your client completes it on their phone — data and the signed PDF come back to you.</div>
  <div class="field"><label>Form</label><select><option>Offer to Purchase (e-sign)</option><option>Listing Agreement (e-sign)</option><option>KYC / Client Intake (e-sign)</option></select></div>
  <div class="field"><label>Client</label><select><option>Marsha Campbell</option><option>Andre Chin</option><option>Kerry-Ann Palmer</option></select></div>
  <div style="display:flex;gap:10px;margin-top:18px">
    <button class="btn btn-o" style="flex:1" onclick="closeAllOv();toast('Secure link copied')">Copy link</button>
    <button class="btn btn-p" style="flex:1" onclick="closeAllOv();toast('Sent via WhatsApp')">Send via WhatsApp</button>
  </div>
</div></div>
<div class="overlay" id="m-tracker" onclick="closeOv(event)"><div class="modal" style="max-width:460px">
  <div class="pill p-mut" style="margin-bottom:14px">Client view · what Marsha sees</div>
  <h3>Your journey to Ironshore Villa</h3><div class="note">Harbour View Realty · updated live</div>
  <div class="tl" style="margin-top:6px">${[['Offer submitted','Signed July 3',1],['Documents collected','4 of 6 — pre-approval still needed',1],['Paperwork with attorneys','Agreement for Sale in preparation',2],['Financing','Mortgage disbursement happens here',0],['Keys','Walkthrough and handover',0]].map(s=>`<div class="tli" style="${s[2]===0?'opacity:.45':''}"><div class="w">${s[0]} ${s[2]===2?'<span class="pill p-gold" style="margin-left:6px">Now</span>':''}</div><div class="s">${s[1]}</div></div>`).join('')}</div>
  <button class="btn btn-o" style="width:100%;margin-top:8px" onclick="closeAllOv()">Close preview</button>
</div></div>
<div class="overlay" id="m-prop" onclick="closeOv(event)"><div class="modal">
  <div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3>12 Barbican Road</h3><div class="note">Kingston 6 · Active · J$68,000,000</div></div><span class="pill p-green">6 showings · 14 inquiries · 1 offer</span></div>
  <div class="grid2" style="grid-template-columns:1fr 1fr;gap:20px">
    <div><div style="font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin-bottom:10px">Activity — July</div>
      <div class="tl">${[['Showing — Andre Chin and wife','Jul 5 · returning Saturday'],['Instagram reel — 4,200 views','Jul 2'],['Open house — 9 visitors','Jun 28'],['Email blast — 212 matched buyers','Jun 25']].map(a=>`<div class="tli"><div class="w">${a[0]}</div><div class="s">${a[1]}</div></div>`).join('')}</div></div>
    <div><div style="font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin-bottom:10px">Log activity</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${[['phone','Call'],['users','Showing'],['msg','Social post'],['cal','Open house'],['send','Email blast'],['file','Offer']].map(a=>`<button class="btn btn-o btn-sm" style="justify-content:flex-start" onclick="toast('${a[1]} logged — appears in the next seller report')">${ic(a[0],13)} ${a[1]}</button>`).join('')}</div>
      <button class="btn btn-p" style="width:100%;margin-top:14px" onclick="closeAllOv();openModal('m-report')">${ic('chart',14)} Make my seller report</button></div>
  </div>
</div></div>
<div class="overlay" id="m-report" onclick="closeOv(event)"><div class="modal" style="max-width:560px">
  <h3>Seller report — ready</h3><div class="note">Generated from your activity log in four seconds. Branded and client-ready.</div>
  <div class="card" style="overflow:hidden">
    <div style="background:var(--green);color:#fff;padding:18px 20px;display:flex;justify-content:space-between;align-items:center"><div><div class="serif" style="font-size:17px">12 Barbican Road</div><div style="font-size:10.5px;opacity:.75;letter-spacing:.1em;text-transform:uppercase">Owner update · June 22 – July 7</div></div><div class="serif" style="font-size:22px">R</div></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid var(--line)">${[['6','Showings'],['14','Inquiries'],['9','Open house'],['1','Offer']].map(s=>`<div style="padding:13px 6px;text-align:center;border-right:1px solid var(--line)"><div class="serif" style="font-size:20px;color:var(--green)">${s[0]}</div><div style="font-size:9.5px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em">${s[1]}</div></div>`).join('')}</div>
    <div style="padding:16px 20px;font-size:13px;line-height:1.65;color:var(--ink-2)">Interest in your home remains strong. This fortnight we hosted six private showings and an open house that drew nine visitors, generating fourteen direct inquiries. One offer has been received and countered. Recommendation: hold price for two more weeks. — Jordan</div>
  </div>
  <div style="display:flex;gap:10px;margin-top:16px"><button class="btn btn-o" style="flex:1" onclick="closeAllOv();toast('PDF downloaded')">Download PDF</button><button class="btn btn-p" style="flex:2" onclick="closeAllOv();toast('Sent to the owner via WhatsApp')">Send to owner</button></div>
</div></div>
<div class="overlay" id="m-custom" onclick="closeOv(event)"><div class="modal" style="max-width:460px">
  <h3>Custom website design</h3><div class="note">Our design team builds your site with you. From US$250 one-time.</div>
  <div class="field"><label>What should it feel like?</label><textarea rows="3" placeholder="Luxury coastal, editorial, bold and modern..."></textarea></div>
  <button class="btn btn-p" style="width:100%" onclick="closeAllOv();toast('Request received')">Request custom design</button>
</div></div>
<div class="overlay" id="m-buyerportal" onclick="closeOv(event)"><div class="modal" style="max-width:470px">
  <div class="pill p-mut" style="margin-bottom:14px">Buyer view · what your purchaser sees</div>
  <h3>Unit A-11 · Palm Ridge Residences</h3><div class="note">Welcome back, Grace — construction is on schedule.</div>
  <div class="prog" style="margin-bottom:6px"><i style="width:45%"></i></div>
  <div style="font-size:12px;color:var(--mut);margin-bottom:18px">45% complete · estimated completion March 2027</div>
  <div class="tl">${[['Foundation complete','June 30 · 12 photos posted',1],['Ground floor walls','In progress — next update mid-July',2],['Roof milestone','Your Stage 3 installment triggers here',0],['Practical completion','Snag walkthrough and handover',0]].map(s=>`<div class="tli" style="${s[2]===0?'opacity:.45':''}"><div class="w">${s[0]} ${s[2]===2?'<span class="pill p-gold" style="margin-left:6px">Now</span>':''}</div><div class="s">${s[1]}</div></div>`).join('')}</div>
  <button class="btn btn-o" style="width:100%;margin-top:14px" onclick="closeAllOv()">Close preview</button>
</div></div>
<div class="overlay" id="m-resident" onclick="closeOv(event)"><div class="modal" style="max-width:470px;padding:0;overflow:hidden">
  <div style="background:#1f3d5c;color:#fff;padding:22px 26px">
    <div class="pill" style="background:rgba(255,255,255,.15);color:#fff;margin-bottom:12px">Resident view · white label</div>
    <div style="font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">Cherry Gardens Mews</div>
    <div class="serif" style="font-size:23px;margin-top:4px">Good morning, Sasha</div>
    <div style="font-size:12.5px;opacity:.8;margin-top:2px">Mews 12 · Account in good standing</div>
  </div>
  <div style="padding:22px 26px">
    <div class="card panel" style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:12px;color:var(--mut)">July maintenance fee</div><div class="serif" style="font-size:24px;margin-top:2px">J$63,000</div></div><button class="btn btn-p btn-sm" onclick="toast('Paid by saved card — receipt sent, HOA ledger updated')">Pay now</button></div></div>
    <div class="card panel" style="margin-bottom:12px"><div class="ph" style="margin-bottom:10px"><h3 style="font-size:13.5px">Book the tennis court</h3><span class="pill p-mut">2h left this week</span></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${['Sat 7a','Sat 8a','Sat 9a','Sun 4p','Sun 5p'].map((s,i)=>`<button class="btn btn-sm ${i===1?'btn-p':'btn-o'}" onclick="toast('${i===1?'Slot already yours':'Booked — see you on court'}')">${s}</button>`).join('')}</div></div>
    <div class="card panel"><div class="ph" style="margin-bottom:10px"><h3 style="font-size:13.5px">My requests</h3></div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px"><span>Gate remote replacement</span><span class="pill p-gold">In progress</span></div>
      <button class="btn btn-o btn-sm" style="margin-top:12px" onclick="toast('New request form')">Raise a request</button></div>
    <button class="btn btn-o" style="width:100%;margin-top:14px" onclick="closeAllOv()">Close preview</button>
  </div>
</div></div>
<div class="drawer" id="drawer"></div>`}
function openModal(id){$(id).classList.add('open')}
function closeOv(e){if(e.target.classList.contains('overlay'))e.target.classList.remove('open')}
function closeAllOv(){document.querySelectorAll('.overlay').forEach(o=>o.classList.remove('open'));const d=$('drawer');if(d)d.classList.remove('open')}
function openDrawer(i){
 const p=people[i];const d=$('drawer');
 d.innerHTML=`
  <button class="iconbtn dclose" onclick="this.parentElement.classList.remove('open')">${ic('x',15)}</button>
  <div style="display:flex;gap:14px;align-items:center;margin-bottom:18px">${av(p.i,p.c,52)}<div><div class="serif" style="font-size:22px">${p.n}</div><div style="font-size:12.5px;color:var(--mut)">${p.ph} · <span class="pill ${p.t==='Buyer'?'p-green':p.t==='Seller'?'p-gold':'p-blue'}">${p.t}</span></div></div></div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:20px">${[['phone','Call'],['msg','WhatsApp'],['send','Send form'],['pen','Log']].map(a=>`<button class="btn btn-o btn-sm" style="flex-direction:column;gap:4px;padding:11px 4px" onclick="toast('${a[1]} — done')">${ic(a[0],15)}<span style="font-size:11px">${a[1]}</span></button>`).join('')}</div>
  <div style="font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin-bottom:10px">Timeline</div>
  <div class="card panel"><div class="tl">${[['Offer to Purchase signed','Jul 3 · via client link'],['Viewing — Ironshore Villa','Jun 29 · loved the pool'],['Sent 3 matched listings','Jun 24 · WhatsApp'],['New lead — Instagram','Jun 20']].map(t=>`<div class="tli"><div class="w">${t[0]}</div><div class="s">${t[1]}</div></div>`).join('')}</div></div>`;
 d.classList.add('open');
}

/* ============ INTERACTIONS ============ */
function moveDeal(c){const d=deals.find(x=>x.c===c);if(d&&d.s<4){d.s++;d.d=0;renderApp('deals');toast(d.s===4?'Deal closed — commission recorded in Money':'Moved — nudges recalibrated')}}
let P=68e6,R=.05,S=.6;
const fm=n=>'J$'+Math.round(n).toLocaleString('en-US');
function calc(p,r,s){
 if(p)P=p*1e6;if(r)R=r/1000;if(s)S=s/100;
 $('cp').textContent=fm(P);$('cr').textContent=(R*100).toFixed(1)+'%';$('cs').textContent=Math.round(S*100)+'%';
 const g=P*R,gct=g*.15,net=(g-gct)*S,brk=(g-gct)*(1-S);
 $('w1').textContent=fm(g);$('w2').textContent='- '+fm(gct);$('w3').textContent='- '+fm(brk);$('w4').textContent=fm(net);
}
function gen(k){
 lastKind=k;const out=$('cop-out');const txt=gens[k];let i=0;
 clearInterval(out._t);out.innerHTML='<span class="cursor"></span>';
 out._t=setInterval(()=>{i+=3;out.innerHTML=txt.slice(0,i).replace(/\n/g,'<br>')+'<span class="cursor"></span>';if(i>=txt.length){clearInterval(out._t);out.innerHTML=txt.replace(/\n/g,'<br>')}},13);
}
function after(page){window.scrollTo(0,0)}

render();
