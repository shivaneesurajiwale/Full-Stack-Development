'use strict';

// ── Products Data ──────────────────────────────────────────────────
const PRODUCTS = [
  { id:1, name:"Men's Graphic Oversized Tee", price:599, originalPrice:999, discount:40, category:"Men", sub:"T-Shirts",
    images:["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"],
    sizes:["XS","S","M","L","XL","XXL"], colors:["Black","White","Olive"], rating:4.7, reviews:2341, badge:"Bestseller"
  },

  { id:2, name:"Men's Zip-Up Hoodie", price:1199, originalPrice:1799, discount:33, category:"Men", sub:"Hoodies",
    images:["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"],
    sizes:["S","M","L","XL","XXL"], colors:["Black","Charcoal","Navy"], rating:4.8, reviews:1892, badge:"New"
  },

  { id:3, name:"Men's Slim Fit Chinos", price:999, originalPrice:1499, discount:33, category:"Men", sub:"Bottoms",
    images:["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"],
    sizes:["28","30","32","34","36"], colors:["Khaki","Olive","Navy"], rating:4.6, reviews:987
  },

  { id:4, name:"Women's Crop Top", price:549, originalPrice:799, discount:31, category:"Women", sub:"Tops",
    images:["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80"],
    sizes:["XS","S","M","L","XL"], colors:["White","Black","Blush"], rating:4.5, reviews:3201, badge:"Trending"
  },

  { id:5, name:"Women's Floral Kurta", price:799, originalPrice:1299, discount:38, category:"Women", sub:"Kurtas",
    images:["https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80"],
    sizes:["XS","S","M","L","XL","XXL"], colors:["Pink","Mustard","White"], rating:4.4, reviews:756, badge:"New"
  },

  { id:6, name:"Men's White Running Sneakers", price:1799, originalPrice:2999, discount:40, category:"Footwear", sub:"Sneakers",
    images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
    sizes:["6","7","8","9","10","11"], colors:["White","Black","Grey"], rating:4.7, reviews:2109
  },

  { id:7, name:"Women's Block Heel Sandals", price:1299, originalPrice:1999, discount:35, category:"Footwear", sub:"Sandals",
    images:["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80"],
    sizes:["5","6","7","8","9"], colors:["Tan","Black","White"], rating:4.5, reviews:1567
  },

  { id:8, name:"Unisex Canvas Slip-Ons", price:899, originalPrice:1299, discount:31, category:"Footwear", sub:"Casual",
    images:["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80"],
    sizes:["5","6","7","8","9","10","11"], colors:["White","Black","Navy"], rating:4.3, reviews:892
  },

  { id:9, name:"Kids' Printed Sweatshirt", price:499, originalPrice:799, discount:38, category:"Kids", sub:"Sweatshirts",
    images:["https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=600&q=80"],
    sizes:["2-3Y","4-5Y","6-7Y","8-9Y","10-11Y"], colors:["Blue","Red","Yellow"], rating:4.6, reviews:2789
  },

  { id:10, name:"Kids' Jogger Set", price:699, originalPrice:999, discount:30, category:"Kids", sub:"Sets",
    images:["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80"],
    sizes:["2-3Y","4-5Y","6-7Y","8-9Y"], colors:["Grey","Navy","Green"], rating:4.7, reviews:1234
  },

  { id:11, name:"Men's Dry-Fit Sports Tee", price:599, originalPrice:899, discount:33, category:"Sports", sub:"T-Shirts",
    images:["https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"],
    sizes:["S","M","L","XL","XXL"], colors:["Black","White","Blue","Red"], rating:4.5, reviews:3412
  }
];

const CATEGORIES = ["All","Men","Women","Footwear","Kids","Sports","Accessories"];
const PROMO_CODES = { SOULED10:10, FLAT20:20, NEWUSER15:15 };
const PAYMENT_METHODS = [
  { id:"cod", label:"Cash on Delivery", sub:"Pay when your order arrives", icon:"💵" },
  { id:"gpay", label:"Google Pay", sub:"UPI via Google Pay", icon:"📱" },
  { id:"phonepe", label:"PhonePe", sub:"UPI via PhonePe", icon:"📱" },
  { id:"upi", label:"Other UPI", sub:"BHIM, Paytm, any UPI ID", icon:"💳" },
  { id:"netbank", label:"Net Banking", sub:"All major Indian banks", icon:"🏦" },
];
const CATEGORY_CARDS = [
  { name:"Men", img:"https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&q=80" },
  { name:"Women", img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80" },
  { name:"Footwear", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80" },
  { name:"Kids", img:"https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=300&q=80" },
  { name:"Sports", img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80" },
  { name:"Accessories", img:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&q=80" },
];
const HERO_SLIDES = [
  { title:"New Season, New Style", sub:"Men's Summer Collection", tag:"Up to 40% Off", img:"https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1400&q=80", cta:"Shop Men", link:"#shop?category=Men" },
  { title:"Her Edit — Just Arrived", sub:"Women's Picks This Season", tag:"New Arrivals", img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80", cta:"Shop Women", link:"#shop?category=Women" },
  { title:"Step Up Your Game", sub:"Footwear for Every Occasion", tag:"Exclusive Deals", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=80", cta:"Shop Footwear", link:"#shop?category=Footwear" },
];

// ── State ─────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('ss_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ss_wish') || '[]');
let heroIdx = 0;
let heroTimer = null;
let shopCategory = "All";
let shopSort = "popularity";
let shopSizes = [];
let shopMaxPrice = 4000;
let selectedPayment = "cod";
let appliedCode = null;
let promoDiscount = 0;
let detailSize = "";
let detailColor = "";
let detailQty = 1;
let detailImg = 0;
let detailTabActive = "desc";
let homeCatFilter = "All";

// ── Persistence ───────────────────────────────────────────────────
function saveCart() { localStorage.setItem('ss_cart', JSON.stringify(cart)); }
function saveWish() { localStorage.setItem('ss_wish', JSON.stringify(wishlist)); }

// ── Cart helpers ──────────────────────────────────────────────────
function cartCount() { return cart.reduce((s,i) => s+i.qty, 0); }
function cartTotal() { return cart.reduce((s,i) => s + i.product.price * i.qty, 0); }
function addToCart(product, size, color) {
  const key = `${product.id}-${size}-${color}`;
  const ex = cart.find(i => i.key === key);
  if (ex) ex.qty++; else cart.push({ key, product, size, color, qty:1 });
  saveCart(); updateBadges();
}
function removeFromCart(key) { cart = cart.filter(i => i.key !== key); saveCart(); updateBadges(); }
function updateCartQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); updateBadges();
}
function clearCart() { cart = []; saveCart(); updateBadges(); }

// ── Wishlist helpers ──────────────────────────────────────────────
function isWishlisted(id) { return wishlist.some(p => p.id === id); }
function toggleWish(product) {
  if (isWishlisted(product.id)) wishlist = wishlist.filter(p => p.id !== product.id);
  else wishlist.push(product);
  saveWish(); updateBadges();
}

// ── Badges ────────────────────────────────────────────────────────
function updateBadges() {
  const cc = cartCount();
  const cb = document.getElementById('cartBadge');
  if (cb) { cb.textContent = cc; cb.style.display = cc > 0 ? 'flex' : 'none'; }
  const wl = wishlist.length;
  const wb = document.getElementById('wishBadge');
  if (wb) { wb.textContent = wl; wb.style.display = wl > 0 ? 'flex' : 'none'; }
}

// ── Toast ─────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

// ── Router ────────────────────────────────────────────────────────
function route() {
  const hash = location.hash.slice(1) || 'home';
  const [page, qs] = hash.split('?');
  const params = new URLSearchParams(qs || '');

  document.getElementById('mobileMenu').style.display = 'none';
  document.getElementById('searchBar').style.display = 'none';

  if (page === 'home') renderHome();
  else if (page === 'shop') renderShop(params);
  else if (page === 'product') renderProductDetail(Number(params.get('id') || qs));
  else if (page === 'cart') renderCart();
  else if (page === 'wishlist') renderWishlist();
  else renderHome();

  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
window.addEventListener('load', route);

// ── Product card HTML ─────────────────────────────────────────────
function productCardHTML(p) {
  const wished = isWishlisted(p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img-wrap">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <button class="wish-btn${wished?' active':''}" data-wish="${p.id}" title="Wishlist">
        <svg width="15" height="15" fill="${wished?'#ef4444':'none'}" stroke="${wished?'#ef4444':'currentColor'}" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <button class="add-bag-btn" data-add="${p.id}">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        Add to Bag
      </button>
    </div>
    <div class="product-info">
      <div class="product-sub">${p.sub}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
        <span class="rating-badge">${p.rating} ★</span>
        <span class="review-count">(${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-price">
        <span class="price-now">₹${p.price.toLocaleString()}</span>
        <span class="price-orig">₹${p.originalPrice.toLocaleString()}</span>
        <span class="price-off">(${p.discount}% off)</span>
      </div>
    </div>
  </div>`;
}

function bindCardEvents(container) {
  container.querySelectorAll('[data-id]').forEach(card => {
    const id = Number(card.dataset.id);
    card.addEventListener('click', e => {
      if (e.target.closest('[data-wish]') || e.target.closest('[data-add]')) return;
      location.hash = `product?id=${id}`;
    });
  });
  container.querySelectorAll('[data-wish]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const p = PRODUCTS.find(x => x.id === Number(btn.dataset.wish));
      toggleWish(p);
      const svg = btn.querySelector('svg');
      if (isWishlisted(p.id)) {
        btn.classList.add('active');
        svg.setAttribute('fill','#ef4444'); svg.setAttribute('stroke','#ef4444');
      } else {
        btn.classList.remove('active');
        svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor');
      }
      showToast(isWishlisted(p.id) ? 'Saved to wishlist!' : 'Removed from wishlist');
    });
  });
  container.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const p = PRODUCTS.find(x => x.id === Number(btn.dataset.add));
      const size = p.sizes[Math.min(2, p.sizes.length-1)];
      addToCart(p, size, p.colors[0]);
      showToast(`${p.name} added to bag!`);
    });
  });
}

// ── Home Page ─────────────────────────────────────────────────────
function renderHome() {
  if (heroTimer) clearInterval(heroTimer);

  const trending = PRODUCTS.filter(p => p.badge === 'Bestseller' || p.badge === 'Trending').slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.badge === 'New').slice(0, 4);
  const all = homeCatFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === homeCatFilter);
  const featured = all.slice(0, 8);

  document.getElementById('app').innerHTML = `
  <!-- Hero -->
  <section class="hero">
    <img class="hero-img" id="heroImg" src="${HERO_SLIDES[0].img}" alt="Hero" />
    <div class="hero-overlay"></div>
    <div class="hero-content" id="heroContent">
      <span class="hero-tag" id="heroTag">${HERO_SLIDES[0].tag}</span>
      <div class="hero-sub" id="heroSub">${HERO_SLIDES[0].sub}</div>
      <h1 class="hero-title" id="heroTitle">${HERO_SLIDES[0].title}</h1>
      <div class="hero-btns">
        <a href="${HERO_SLIDES[0].link}" class="btn-orange" id="heroCta">${HERO_SLIDES[0].cta} →</a>
        <a href="#shop" class="btn-outline" style="border-color:#fff;color:#fff">View All</a>
      </div>
    </div>
    <button class="hero-nav prev" id="heroPrev">&#8249;</button>
    <button class="hero-nav next" id="heroNext">&#8250;</button>
    <div class="hero-dots" id="heroDots">
      ${HERO_SLIDES.map((_,i) => `<button class="hero-dot${i===0?' active':''}" data-slide="${i}"></button>`).join('')}
    </div>
  </section>

  <!-- Marquee -->
  <div class="marquee-strip">
    <div class="marquee-inner">
      ${'<span>Free Shipping on ₹499+ &bull; New Drops Every Week &bull; Easy 30-Day Returns &bull; COD Available &bull; 100% Authentic &bull;</span>'.repeat(6)}
    </div>
  </div>

  <!-- Trust -->
  <div class="trust-row">
    <div class="trust-grid">
      <div class="trust-item"><div class="trust-icon">🚚</div><div><div class="trust-title">Free Delivery</div><div class="trust-sub">On orders above ₹499</div></div></div>
      <div class="trust-item"><div class="trust-icon">🔄</div><div><div class="trust-title">Easy Returns</div><div class="trust-sub">30-day hassle-free returns</div></div></div>
      <div class="trust-item"><div class="trust-icon">🔒</div><div><div class="trust-title">Secure Payments</div><div class="trust-sub">100% safe & encrypted</div></div></div>
      <div class="trust-item"><div class="trust-icon">⚡</div><div><div class="trust-title">COD Available</div><div class="trust-sub">Pay on delivery, no hassle</div></div></div>
    </div>
  </div>

  <!-- Categories -->
  <div class="section" style="background:#fff">
    <div class="container">
      <div class="sec-header"><h2 class="sec-title">Shop by Category</h2></div>
      <div class="cat-grid">
        ${CATEGORY_CARDS.map(c => `
          <a href="#shop?category=${c.name}" class="cat-card">
            <div class="cat-img-wrap"><img src="${c.img}" alt="${c.name}" loading="lazy" /></div>
            <div class="cat-label">${c.name}</div>
          </a>`).join('')}
      </div>
    </div>
  </div>

  <!-- Trending -->
  <div class="section" style="background:#f7f7f7">
    <div class="container">
      <div class="sec-header">
        <h2 class="sec-title">Trending Now</h2>
        <a href="#shop" class="sec-link">View All →</a>
      </div>
      <div class="product-grid" id="trendGrid">
        ${trending.map(productCardHTML).join('')}
      </div>
    </div>
  </div>

  <!-- Banner -->
  <div class="banner">
    <img class="banner-img" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80" alt="Women's Collection" loading="lazy" />
    <div class="banner-overlay">
      <div>
        <div class="banner-tag">Women's New In</div>
        <div class="banner-title">Fresh Styles<br>Every Week</div>
        <a href="#shop?category=Women" class="btn-outline" style="border-color:#fff;color:#fff">Shop Women</a>
      </div>
    </div>
  </div>

  <!-- New Arrivals -->
  <div class="section" style="background:#fff">
    <div class="container">
      <div class="sec-header">
        <h2 class="sec-title">New Arrivals</h2>
        <a href="#shop" class="sec-link">View All →</a>
      </div>
      <div class="product-grid" id="newGrid">
        ${newArrivals.map(productCardHTML).join('')}
      </div>
    </div>
  </div>

  <!-- All products with filter tabs -->
  <div class="section" style="background:#f7f7f7">
    <div class="container">
      <div class="sec-header"><h2 class="sec-title">All Products</h2></div>
      <div class="tab-row" id="homeTabs">
        ${CATEGORIES.map(c => `<button class="tab-btn${homeCatFilter===c?' active':''}" data-cat="${c}">${c}</button>`).join('')}
      </div>
      <div class="product-grid" id="featuredGrid">
        ${featured.map(productCardHTML).join('')}
      </div>
      <div style="text-align:center;margin-top:32px">
        <a href="#shop" class="btn-outline">View All Products →</a>
      </div>
    </div>
  </div>

  ${renderFooter()}
  `;

  // Hero logic
  heroIdx = 0;
  const updateHero = () => {
    const s = HERO_SLIDES[heroIdx];
    document.getElementById('heroImg').src = s.img;
    document.getElementById('heroTag').textContent = s.tag;
    document.getElementById('heroSub').textContent = s.sub;
    document.getElementById('heroTitle').textContent = s.title;
    const cta = document.getElementById('heroCta');
    cta.textContent = s.cta + ' →'; cta.href = s.link;
    document.querySelectorAll('.hero-dot').forEach((d,i) => {
      d.classList.toggle('active', i === heroIdx);
    });
  };
  const nextSlide = () => { heroIdx = (heroIdx+1) % HERO_SLIDES.length; updateHero(); };
  heroTimer = setInterval(nextSlide, 4500);
  document.getElementById('heroPrev').onclick = () => { clearInterval(heroTimer); heroIdx = (heroIdx-1+HERO_SLIDES.length)%HERO_SLIDES.length; updateHero(); heroTimer=setInterval(nextSlide,4500); };
  document.getElementById('heroNext').onclick = () => { clearInterval(heroTimer); nextSlide(); heroTimer=setInterval(nextSlide,4500); };
  document.querySelectorAll('[data-slide]').forEach(btn => {
    btn.onclick = () => { clearInterval(heroTimer); heroIdx=Number(btn.dataset.slide); updateHero(); heroTimer=setInterval(nextSlide,4500); };
  });

  // Category tabs
  document.getElementById('homeTabs').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    homeCatFilter = btn.dataset.cat;
    renderHome();
  });

  // Product card events
  bindCardEvents(document.getElementById('trendGrid'));
  bindCardEvents(document.getElementById('newGrid'));
  bindCardEvents(document.getElementById('featuredGrid'));
}

// ── Shop Page ─────────────────────────────────────────────────────
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (shopCategory !== 'All') list = list.filter(p => p.category === shopCategory);
  if (shopSizes.length) list = list.filter(p => shopSizes.some(s => p.sizes.includes(s)));
  list = list.filter(p => p.price <= shopMaxPrice);
  if (shopSort === 'price_asc') list.sort((a,b) => a.price - b.price);
  else if (shopSort === 'price_desc') list.sort((a,b) => b.price - a.price);
  else if (shopSort === 'discount') list.sort((a,b) => b.discount - a.discount);
  else if (shopSort === 'newest') list.sort((a,b) => b.id - a.id);
  else list.sort((a,b) => b.reviews - a.reviews);
  return list;
}

function renderShop(params) {
  if (params && params.get('category')) shopCategory = params.get('category');
  const q = params && params.get('q') ? params.get('q') : null;
  let products = q
    ? PRODUCTS.filter(p => [p.name,p.category,p.sub,p.description].join(' ').toLowerCase().includes(q.toLowerCase()))
    : getFilteredProducts();

  const SIZES = ["XS","S","M","L","XL","XXL"];

  document.getElementById('app').innerHTML = `
  <div class="shop-header">
    <div class="shop-header-inner">
      <div class="shop-top">
        <div>
          <div class="shop-title">${q ? `Results for "${q}"` : shopCategory === 'All' ? 'All Products' : shopCategory}</div>
          <div class="shop-count">${products.length} products</div>
        </div>
        <div class="shop-top-right">
          <select class="sort-select" id="sortSel">
            <option value="popularity"${shopSort==='popularity'?' selected':''}>Popularity</option>
            <option value="newest"${shopSort==='newest'?' selected':''}>Newest First</option>
            <option value="price_asc"${shopSort==='price_asc'?' selected':''}>Price: Low to High</option>
            <option value="price_desc"${shopSort==='price_desc'?' selected':''}>Price: High to Low</option>
            <option value="discount"${shopSort==='discount'?' selected':''}>Best Discount</option>
          </select>
        </div>
      </div>
      <div class="pill-row" id="catPills">
        ${CATEGORIES.map(c => `<button class="pill${shopCategory===c?' active':''}" data-cat="${c}">${c}</button>`).join('')}
      </div>
    </div>
  </div>
  <div class="shop-body">
    <aside class="sidebar">
      <div class="sidebar-card">
        <div class="sidebar-title">⊞ Filters</div>
        <div class="filter-section">
          <div class="filter-heading">Category</div>
          ${CATEGORIES.map(c => `<label class="filter-option"><input type="checkbox" ${shopCategory===c?'checked':''} data-fcat="${c}" /><span>${c}</span></label>`).join('')}
        </div>
        <div class="filter-section">
          <div class="filter-heading">Max Price: ₹<span id="priceVal">${shopMaxPrice.toLocaleString()}</span></div>
          <input type="range" class="range-input" id="priceRange" min="399" max="4000" step="100" value="${shopMaxPrice}" />
          <div class="range-labels"><span>₹399</span><span>₹4,000</span></div>
        </div>
        <div class="filter-section">
          <div class="filter-heading">Size</div>
          <div class="size-grid">
            ${SIZES.map(s => `<button class="size-chip${shopSizes.includes(s)?' active':''}" data-sz="${s}">${s}</button>`).join('')}
          </div>
        </div>
        <button class="clear-btn" id="clearFilters">✕ Clear Filters</button>
      </div>
    </aside>
    <div class="products-area">
      <div class="products-grid-shop" id="shopGrid">
        ${products.length ? products.map(productCardHTML).join('') : '<div class="empty-state"><h3>No products found</h3><p>Try adjusting your filters</p></div>'}
      </div>
    </div>
  </div>
  ${renderFooter()}
  `;

  // Sort
  document.getElementById('sortSel').onchange = e => { shopSort = e.target.value; renderShop(params); };

  // Category pills
  document.getElementById('catPills').addEventListener('click', e => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    shopCategory = btn.dataset.cat;
    renderShop(new URLSearchParams());
  });

  // Sidebar category checkboxes
  document.querySelectorAll('[data-fcat]').forEach(cb => {
    cb.onchange = () => {
      shopCategory = cb.dataset.fcat;
      renderShop(new URLSearchParams());
    };
  });

  // Price range
  const pr = document.getElementById('priceRange');
  pr.oninput = () => { shopMaxPrice = Number(pr.value); document.getElementById('priceVal').textContent = Number(pr.value).toLocaleString(); };
  pr.onchange = () => { shopMaxPrice = Number(pr.value); renderShop(new URLSearchParams()); };

  // Size chips
  document.querySelectorAll('[data-sz]').forEach(btn => {
    btn.onclick = () => {
      const sz = btn.dataset.sz;
      if (shopSizes.includes(sz)) shopSizes = shopSizes.filter(s => s !== sz);
      else shopSizes.push(sz);
      renderShop(new URLSearchParams());
    };
  });

  // Clear
  document.getElementById('clearFilters').onclick = () => {
    shopCategory = 'All'; shopSizes = []; shopMaxPrice = 4000;
    renderShop(new URLSearchParams());
  };

  bindCardEvents(document.getElementById('shopGrid'));
}

// ── Product Detail ────────────────────────────────────────────────
function renderProductDetail(idOrParams) {
  let productId = idOrParams;
  if (typeof idOrParams === 'string') {
    const p = new URLSearchParams(idOrParams);
    productId = Number(p.get('id'));
  }
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) { document.getElementById('app').innerHTML = '<div style="text-align:center;padding:80px 20px"><h2>Product not found</h2><br><a href="#shop" class="btn-orange">Browse Products</a></div>'; return; }

  detailSize = ""; detailColor = ""; detailQty = 1; detailImg = 0; detailTabActive = "desc";

  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);

  const renderDetail = () => {
    const wished = isWishlisted(p.id);
    const savings = (p.originalPrice - p.price) * detailQty;
    document.getElementById('app').innerHTML = `
    <div class="detail-wrap">
      <div class="breadcrumb">
        <a href="#home">Home</a><span class="sep">›</span>
        <a href="#shop">Shop</a><span class="sep">›</span>
        <a href="#shop?category=${p.category}">${p.category}</a><span class="sep">›</span>
        <span style="color:#111">${p.name}</span>
      </div>
      <div class="detail-grid">
        <!-- Gallery -->
        <div class="gallery-wrap">
          <div class="thumb-col" id="thumbCol">
            ${p.images.map((img,i) => `<div class="thumb${i===detailImg?' active':''}" data-thumb="${i}"><img src="${img}" alt="thumb ${i+1}" loading="lazy" /></div>`).join('')}
          </div>
          <div class="main-img-wrap" id="mainImgWrap">
            <img class="main-img" id="mainImg" src="${p.images[detailImg]}" alt="${p.name}" />
            ${p.badge ? `<div class="detail-badge">${p.badge}</div>` : ''}
            <div class="detail-discount">-${p.discount}%</div>
            <div class="zoom-hint">🔍 Click to zoom</div>
          </div>
        </div>

        <!-- Info -->
        <div>
          <div class="detail-sub">${p.sub}</div>
          <h1 class="detail-name">${p.name}</h1>
          <div class="detail-rating">
            <span class="rating-badge">${p.rating} ★</span>
            <span class="rating-sep">|</span>
            <span class="rating-count">${p.reviews.toLocaleString()} Ratings</span>
          </div>
          <hr class="detail-divider">
          <div class="detail-price-row">
            <span class="detail-price">₹${p.price.toLocaleString()}</span>
            <span class="detail-mrp">MRP ₹${p.originalPrice.toLocaleString()}</span>
            <span class="detail-pct">(${p.discount}% off)</span>
          </div>
          <div class="tax-note">inclusive of all taxes</div>
          ${savings > 0 ? `<div class="savings-note">You save ₹${savings.toLocaleString()} on this order</div>` : ''}

          <hr class="detail-divider">

          <!-- Color -->
          <div class="variant-label">Color: <span id="colorLabel">${detailColor||'Select Color'}</span></div>
          <div class="color-btns" id="colorBtns">
            ${p.colors.map(c => `<button class="color-btn${detailColor===c?' active':''}" data-color="${c}">${c}</button>`).join('')}
          </div>
          <div class="error-msg" id="colorErr" style="display:none;margin-bottom:10px">Please select a color</div>

          <!-- Size -->
          <div class="variant-label">Size: <span id="sizeLabel">${detailSize||'Select Size'}</span></div>
          <div class="size-btns" id="sizeBtns">
            ${p.sizes.map(s => `<button class="size-btn${detailSize===s?' active':''}" data-size="${s}">${s}</button>`).join('')}
          </div>
          <div class="error-msg" id="sizeErr" style="display:none;margin-bottom:10px">Please select a size</div>

          <!-- Qty -->
          <div class="qty-row">
            <span style="font-size:13px;font-weight:700">Quantity</span>
            <div class="qty-ctrl">
              <button class="qty-btn" id="qtyMinus">−</button>
              <div class="qty-num" id="qtyNum">${detailQty}</div>
              <button class="qty-btn" id="qtyPlus">+</button>
            </div>
          </div>

          <!-- CTAs -->
          <div class="cta-row">
            <button class="cta-add" id="addBagBtn">
              🛍 ADD TO BAG
            </button>
            <button class="cta-wish${wished?' active':''}" id="wishDetailBtn" title="Wishlist">
              <svg width="20" height="20" fill="${wished?'#ef4444':'none'}" stroke="${wished?'#ef4444':'currentColor'}" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>

          <!-- Delivery -->
          <div class="delivery-strip">
            <div class="delivery-item"><span>🚚</span><p>Free Delivery on ₹499+</p></div>
            <div class="delivery-item"><span>🔄</span><p>30-day Returns</p></div>
            <div class="delivery-item"><span>🔒</span><p>Secure Payment</p></div>
          </div>

          <!-- Tabs -->
          <div class="detail-tabs">
            <div class="tab-nav">
              <button class="tab-nav-btn${detailTabActive==='desc'?' active':''}" data-tab="desc">Product Details</button>
              <button class="tab-nav-btn${detailTabActive==='size'?' active':''}" data-tab="size">Size Guide</button>
            </div>
            <div class="tab-content">
              <div class="tab-panel${detailTabActive==='desc'?' active':''}" id="tabDesc">
                <p>${p.description}</p>
              </div>
              <div class="tab-panel${detailTabActive==='size'?' active':''}" id="tabSize">
                <table class="size-table">
                  <thead><tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th><th>Shoulder (in)</th></tr></thead>
                  <tbody>
                    ${[["XS","34-36","26","15"],["S","36-38","27","16"],["M","38-40","28","17"],["L","40-42","29","18"],["XL","42-44","30","19"],["XXL","44-46","31","20"]].map(([sz,...v]) => `<tr><td>${sz}</td>${v.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related -->
      ${related.length ? `
      <div class="section">
        <div class="sec-header"><h2 class="sec-title">Similar Products</h2></div>
        <div class="product-grid" id="relatedGrid">${related.map(productCardHTML).join('')}</div>
      </div>` : ''}
    </div>
    ${renderFooter()}
    `;

    // Thumbnails
    document.querySelectorAll('[data-thumb]').forEach(thumb => {
      thumb.addEventListener('mouseenter', () => {
        detailImg = Number(thumb.dataset.thumb);
        document.getElementById('mainImg').src = p.images[detailImg];
        document.querySelectorAll('[data-thumb]').forEach(t => t.classList.toggle('active', t === thumb));
      });
      thumb.onclick = () => {
        detailImg = Number(thumb.dataset.thumb);
        document.getElementById('mainImg').src = p.images[detailImg];
        document.querySelectorAll('[data-thumb]').forEach(t => t.classList.toggle('active', t === thumb));
      };
    });

    // Lightbox
    document.getElementById('mainImgWrap').onclick = () => {
      const lb = document.getElementById('lightbox');
      document.getElementById('lightboxImg').src = p.images[detailImg];
      lb.style.display = 'flex';
    };
    document.getElementById('lightboxClose').onclick = () => {
      document.getElementById('lightbox').style.display = 'none';
    };
    document.getElementById('lightbox').onclick = e => {
      if (e.target === e.currentTarget) document.getElementById('lightbox').style.display = 'none';
    };

    // Color
    document.querySelectorAll('[data-color]').forEach(btn => {
      btn.onclick = () => {
        detailColor = btn.dataset.color;
        document.getElementById('colorLabel').textContent = detailColor;
        document.getElementById('colorErr').style.display = 'none';
        document.querySelectorAll('[data-color]').forEach(b => b.classList.toggle('active', b === btn));
      };
    });

    // Size
    document.querySelectorAll('[data-size]').forEach(btn => {
      btn.onclick = () => {
        detailSize = btn.dataset.size;
        document.getElementById('sizeLabel').textContent = detailSize;
        document.getElementById('sizeErr').style.display = 'none';
        document.querySelectorAll('[data-size]').forEach(b => b.classList.toggle('active', b === btn));
      };
    });

    // Qty
    document.getElementById('qtyMinus').onclick = () => { detailQty = Math.max(1, detailQty-1); document.getElementById('qtyNum').textContent = detailQty; };
    document.getElementById('qtyPlus').onclick = () => { detailQty++; document.getElementById('qtyNum').textContent = detailQty; };

    // Add to bag
    document.getElementById('addBagBtn').onclick = () => {
      let err = false;
      if (!detailColor) { document.getElementById('colorErr').style.display='block'; err=true; }
      if (!detailSize) { document.getElementById('sizeErr').style.display='block'; err=true; }
      if (err) return;
      for (let i=0; i<detailQty; i++) addToCart(p, detailSize, detailColor);
      showToast(`${p.name} added to bag!`);
    };

    // Wishlist
    document.getElementById('wishDetailBtn').onclick = () => {
      toggleWish(p);
      const w = isWishlisted(p.id);
      const btn = document.getElementById('wishDetailBtn');
      btn.classList.toggle('active', w);
      const svg = btn.querySelector('svg');
      svg.setAttribute('fill', w ? '#ef4444' : 'none');
      svg.setAttribute('stroke', w ? '#ef4444' : 'currentColor');
      showToast(w ? 'Saved to wishlist!' : 'Removed from wishlist');
    };

    // Tabs
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.onclick = () => {
        detailTabActive = btn.dataset.tab;
        document.querySelectorAll('.tab-nav-btn').forEach(b => b.classList.toggle('active', b === btn));
        document.getElementById('tabDesc').classList.toggle('active', detailTabActive === 'desc');
        document.getElementById('tabSize').classList.toggle('active', detailTabActive === 'size');
      };
    });

    // Related
    const rg = document.getElementById('relatedGrid');
    if (rg) bindCardEvents(rg);
  };

  renderDetail();
}

// ── Cart Page ─────────────────────────────────────────────────────
function renderCart() {
  const total = cartTotal();
  const discount = appliedCode ? Math.round(total * (PROMO_CODES[appliedCode]/100)) : 0;
  const shipping = total >= 499 ? 0 : 79;
  const finalTotal = total - discount + shipping;

  if (cart.length === 0) {
    document.getElementById('app').innerHTML = `
    <div class="cart-wrap">
      <div class="wishlist-empty">
        <div class="empty-icon">🛍</div>
        <h2>Your bag is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="#shop" class="btn-orange">Start Shopping</a>
      </div>
    </div>
    ${renderFooter()}`;
    return;
  }

  document.getElementById('app').innerHTML = `
  <div class="cart-wrap">
    <div class="breadcrumb">
      <a href="#home">Home</a><span class="sep">›</span>
      <span style="color:#111">Shopping Bag (${cart.reduce((s,i)=>s+i.qty,0)} item${cart.reduce((s,i)=>s+i.qty,0)!==1?'s':''})</span>
    </div>
    <h1 class="sec-title" style="margin-bottom:20px">Shopping Bag</h1>
    <div class="cart-grid">
      <!-- Items -->
      <div>
        <div id="cartItems">
          ${cart.map(item => `
          <div class="cart-item" data-key="${item.key}">
            <img class="cart-item-img" src="${item.product.images[0]}" alt="${item.product.name}" data-goto="${item.product.id}" />
            <div class="cart-item-body">
              <div class="cart-item-sub">${item.product.sub}</div>
              <div class="cart-item-name" data-goto="${item.product.id}">${item.product.name}</div>
              <div class="cart-meta">
                <span class="meta-tag">Size: ${item.size}</span>
                <span class="meta-tag">${item.color}</span>
              </div>
              <div class="cart-item-bottom">
                <div class="cart-qty-ctrl">
                  <button class="cart-qty-btn" data-qminus="${item.key}">−</button>
                  <div class="cart-qty-num">${item.qty}</div>
                  <button class="cart-qty-btn" data-qplus="${item.key}">+</button>
                </div>
                <div class="cart-price-col">
                  <div class="cart-price">₹${(item.product.price*item.qty).toLocaleString()}</div>
                  <div class="cart-orig">₹${(item.product.originalPrice*item.qty).toLocaleString()}</div>
                </div>
              </div>
            </div>
            <button class="remove-btn" data-remove="${item.key}">✕</button>
          </div>`).join('')}
        </div>
        <button class="clear-cart-btn" id="clearCartBtn">🗑 Clear bag</button>
      </div>

      <!-- Summary -->
      <div>
        <!-- Promo -->
        <div class="summary-card">
          <div class="summary-card-title">🏷 Promo Code</div>
          <div class="promo-row">
            <input type="text" class="promo-input" id="promoInput" placeholder="Enter code" value="" />
            <button class="btn-orange" id="applyPromo">Apply</button>
          </div>
          <div id="promoMsg" class="${appliedCode?'promo-success':'promo-hint'}">
            ${appliedCode ? `${appliedCode} applied — ${PROMO_CODES[appliedCode]}% off!` : 'Try: SOULED10 · FLAT20 · NEWUSER15'}
          </div>
        </div>

        <!-- Payment -->
        <div class="summary-card">
          <div class="summary-card-title">💳 Payment Method</div>
          ${PAYMENT_METHODS.map(pm => `
          <label class="payment-option${selectedPayment===pm.id?' selected':''}">
            <input type="radio" name="pay" value="${pm.id}" ${selectedPayment===pm.id?'checked':''} />
            <span class="payment-icon">${pm.icon}</span>
            <div>
              <div class="payment-label">${pm.label}</div>
              <div class="payment-sub">${pm.sub}</div>
            </div>
          </label>`).join('')}
        </div>

        <!-- Price summary -->
        <div class="summary-card">
          <div class="summary-card-title">💰 Price Details</div>
          <div class="price-row">
            <span>Price (${cart.reduce((s,i)=>s+i.qty,0)} items)</span>
            <span>₹${total.toLocaleString()}</span>
          </div>
          ${discount > 0 ? `<div class="price-row green"><span>Promo Discount</span><span>− ₹${discount.toLocaleString()}</span></div>` : ''}
          <div class="price-row">
            <span>Delivery</span>
            <span style="color:${shipping===0?'#15803d':'#111'};font-weight:${shipping===0?700:400}">${shipping===0?'FREE':'₹'+shipping}</span>
          </div>
          ${shipping > 0 ? `<div class="free-ship">Add ₹${(499-total).toLocaleString()} more for free delivery</div>` : ''}
          <div class="price-row big">
            <span>Total Amount</span>
            <span>₹${finalTotal.toLocaleString()}</span>
          </div>
          ${discount > 0 ? `<div class="save-note">You're saving ₹${discount.toLocaleString()} on this order!</div>` : ''}
          <button class="btn-orange" style="width:100%;padding:14px;margin-top:16px;font-size:14px;border-radius:6px" id="placeOrder">Place Order →</button>
          <div class="secure-note">Safe & secure payments. Easy returns.</div>
        </div>

        <a href="#shop"><button class="btn-outline" style="width:100%;padding:12px">🛍 Continue Shopping</button></a>
      </div>
    </div>
  </div>
  ${renderFooter()}
  `;

  // Events
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.style.cursor = 'pointer';
    el.onclick = () => location.hash = `product?id=${el.dataset.goto}`;
  });
  document.querySelectorAll('[data-remove]').forEach(btn => {
    btn.onclick = () => { removeFromCart(btn.dataset.remove); renderCart(); };
  });
  document.querySelectorAll('[data-qminus]').forEach(btn => {
    btn.onclick = () => { updateCartQty(btn.dataset.qminus, -1); renderCart(); };
  });
  document.querySelectorAll('[data-qplus]').forEach(btn => {
    btn.onclick = () => { updateCartQty(btn.dataset.qplus, 1); renderCart(); };
  });
  document.getElementById('clearCartBtn').onclick = () => { clearCart(); renderCart(); };

  document.querySelectorAll('input[name="pay"]').forEach(radio => {
    radio.onchange = () => { selectedPayment = radio.value; document.querySelectorAll('.payment-option').forEach(o => o.classList.toggle('selected', o.querySelector('input').value === selectedPayment)); };
  });

  document.getElementById('applyPromo').onclick = () => {
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    const msg = document.getElementById('promoMsg');
    if (PROMO_CODES[code]) {
      appliedCode = code; promoDiscount = PROMO_CODES[code];
      msg.className = 'promo-success'; msg.textContent = `${code} applied — ${PROMO_CODES[code]}% off!`;
      showToast(`${PROMO_CODES[code]}% discount applied!`);
      renderCart();
    } else {
      msg.className = 'promo-error'; msg.textContent = 'Invalid code. Try: SOULED10, FLAT20, NEWUSER15';
    }
  };

  document.getElementById('placeOrder').onclick = () => {
    showToast('Order placed successfully! 🎉');
    clearCart(); appliedCode = null; promoDiscount = 0;
    setTimeout(() => renderCart(), 300);
  };
}

// ── Wishlist Page ─────────────────────────────────────────────────
function renderWishlist() {
  if (wishlist.length === 0) {
    document.getElementById('app').innerHTML = `
    <div class="wishlist-wrap">
      <div class="wishlist-empty">
        <div class="empty-icon">🤍</div>
        <h2>Your wishlist is empty</h2>
        <p>Save items you love for later</p>
        <a href="#shop" class="btn-orange">Browse Products</a>
      </div>
    </div>
    ${renderFooter()}`;
    return;
  }
  document.getElementById('app').innerHTML = `
  <div class="wishlist-wrap">
    <h1 class="sec-title" style="margin-bottom:24px">My Wishlist (${wishlist.length})</h1>
    <div class="product-grid" id="wishGrid">
      ${wishlist.map(productCardHTML).join('')}
    </div>
  </div>
  ${renderFooter()}`;
  bindCardEvents(document.getElementById('wishGrid'));
}

// ── Footer ────────────────────────────────────────────────────────
function renderFooter() {
  return `
  <footer>
    <div class="footer-newsletter">
      <div class="newsletter-inner">
        <div>
          <div class="newsletter-title">Stay in the Know</div>
          <div class="newsletter-sub">New arrivals, exclusive deals — direct to your inbox.</div>
        </div>
        <form class="newsletter-form" onsubmit="return false">
          <input type="email" class="newsletter-input" placeholder="your@email.com" />
          <button class="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-main">
      <div class="footer-inner">
        <div>
          <div class="footer-logo">
            <div class="footer-logo-box">S</div>
            <div class="footer-logo-text">THE SOULED STORE</div>
          </div>
          <div class="footer-desc">India's favourite fashion destination. Style for everyone, every occasion.</div>
          <div class="pay-chips">
            <span class="pay-chip">COD</span>
            <span class="pay-chip">GPay</span>
            <span class="pay-chip">PhonePe</span>
            <span class="pay-chip">UPI</span>
            <span class="pay-chip">Net Banking</span>
          </div>
        </div>
        <div>
          <div class="footer-heading">Shop</div>
          ${["Men","Women","Footwear","Kids","Sports","Accessories"].map(c => `<a href="#shop?category=${c}" class="footer-link">${c}</a>`).join('')}
        </div>
        <div>
          <div class="footer-heading">Help</div>
          ${["Size Guide","Shipping Policy","Return & Exchange","Track My Order","FAQs","Contact Us"].map(l => `<a href="#" class="footer-link">${l}</a>`).join('')}
        </div>
        <div>
          <div class="footer-heading">Follow Us</div>
          ${["Instagram","Facebook","Twitter / X","YouTube","Pinterest"].map(l => `<a href="#" class="footer-link">${l}</a>`).join('')}
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2026 The Souled Store. All rights reserved.</div>
        <div class="footer-policy-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ── Navbar events ─────────────────────────────────────────────────
document.getElementById('searchToggle').onclick = () => {
  const bar = document.getElementById('searchBar');
  bar.style.display = bar.style.display === 'none' ? 'block' : 'none';
  if (bar.style.display === 'block') setTimeout(() => document.getElementById('searchInput').focus(), 50);
};
document.getElementById('searchBtn').onclick = () => {
  const q = document.getElementById('searchInput').value.trim();
  if (q) { location.hash = `shop?q=${encodeURIComponent(q)}`; document.getElementById('searchBar').style.display = 'none'; }
};
document.getElementById('searchInput').onkeydown = e => {
  if (e.key === 'Enter') document.getElementById('searchBtn').click();
};
document.getElementById('menuToggle').onclick = () => {
  const m = document.getElementById('mobileMenu');
  m.style.display = m.style.display === 'none' ? 'flex' : 'none';
};
document.querySelectorAll('.mob-link').forEach(l => l.onclick = () => {
  document.getElementById('mobileMenu').style.display = 'none';
});

updateBadges();
