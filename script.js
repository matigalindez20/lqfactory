// ══════════════════════════════════════════════════════
//  LQ FACTORY — script.js  (v3)
// ══════════════════════════════════════════════════════

const products = [
  {
    id: 1, num: 1,
    name: "Refrigerante Anticongelante Rosa",
    vol: "5 LTS", price: 1490, cat: "refrigerante", color: "pb-pink", img: "./8.png",
    desc: "Refrigerante orgánico (OAT) de alta tecnología. Compatible con motores nafteros, diésel y a gas. Formulado con inhibidores de corrosión de larga duración.",
    specs: [
      { l: "Norma",       v: "IRAM 113043"      },
      { l: "Tipo",        v: "Orgánico OAT"      },
      { l: "Dilución",    v: "Sin diluir (100%)" },
      { l: "Temperatura", v: "Hasta −40 °C"      }
    ]
  },
  {
    id: 2, num: 2,
    name: "Refrigerante Anticongelante Verde",
    vol: "5 LTS", price: 1490, cat: "refrigerante", color: "pb-green", img: "./1.png",
    desc: "Refrigerante convencional (IAT) ideal para vehículos con motores de fundición ferrosa. Excelente protección anticorrosión y anticongelante.",
    specs: [
      { l: "Norma",       v: "IRAM 113043"      },
      { l: "Tipo",        v: "Convencional IAT"  },
      { l: "Dilución",    v: "Sin diluir (100%)" },
      { l: "Temperatura", v: "Hasta −37 °C"      }
    ]
  },
  {
    id: 3, num: 3,
    name: "Refrigerante Anticongelante Amarillo",
    vol: "5 LTS", price: 1490, cat: "refrigerante", color: "pb-yellow", img: "./2.png",
    desc: "Refrigerante híbrido (HOAT) de última generación. Compatible con motores modernos de aluminio y aleaciones mixtas.",
    specs: [
      { l: "Norma",       v: "IRAM 113043"      },
      { l: "Tipo",        v: "Híbrido HOAT"      },
      { l: "Dilución",    v: "Sin diluir (100%)" },
      { l: "Temperatura", v: "Hasta −38 °C"      }
    ]
  },
  {
    id: 4, num: 4,
    name: "Refrigerante 30% Rosa",
    vol: "5 LTS", price: 4240, cat: "refrigerante", color: "pb-white", img: "./10.png",
    desc: "Mezcla lista para usar al 30% con agua desmineralizada. Protección anticongelante y anticorrosión sin necesidad de dilución adicional.",
    specs: [
      { l: "Concentración", v: "30% anticongelante" },
      { l: "Tipo",          v: "Orgánico OAT"       },
      { l: "Dilución",      v: "Listo para usar"    },
      { l: "Temperatura",   v: "Hasta −16 °C"       }
    ]
  },
  {
    id: 5, num: 5,
    name: "Refrigerante 30% Verde",
    vol: "5 LTS", price: 4240, cat: "refrigerante", color: "pb-white", img: "./9.png",
    desc: "Mezcla al 30% lista para usar. Formulación convencional para vehículos con sistemas de refrigeración estándar.",
    specs: [
      { l: "Concentración", v: "30% anticongelante" },
      { l: "Tipo",          v: "Convencional IAT"   },
      { l: "Dilución",      v: "Listo para usar"    },
      { l: "Temperatura",   v: "Hasta −16 °C"       }
    ]
  },
  {
    id: 6, num: 6,
    name: "Refrigerante 30% Amarillo",
    vol: "5 LTS", price: 4240, cat: "refrigerante", color: "pb-white", img: "./13.png",
    desc: "Mezcla al 30% lista para usar con tecnología híbrida. Ideal para el clima templado argentino.",
    specs: [
      { l: "Concentración", v: "30% anticongelante" },
      { l: "Tipo",          v: "Híbrido HOAT"       },
      { l: "Dilución",      v: "Listo para usar"    },
      { l: "Temperatura",   v: "Hasta −16 °C"       }
    ]
  },
  {
    id: 7, num: 7,
    name: "Agua Desmineralizada LQ",
    vol: "5 LTS", price: 1240, cat: "agua", color: "pb-clear", img: "./5.png",
    desc: "Agua desmineralizada de alta pureza para dilución de refrigerantes y relleno de baterías. Libre de minerales, cloro e impurezas.",
    specs: [
      { l: "Conductividad", v: "< 10 μS/cm"            },
      { l: "pH",            v: "6.5 – 7.5"              },
      { l: "Uso",           v: "Refrigerantes/baterías" },
      { l: "Contenido",     v: "Sin aditivos"            }
    ]
  },
  {
    id: 8, num: 8,
    name: "Líquido de Frenos DOT 3",
    vol: "500 CC", price: 3100, cat: "frenos", color: "pb-orange", img: "./7.png",
    desc: "Líquido de frenos a base de glicol éter que cumple la norma DOT 3. Apto para sistemas de frenos hidráulicos convencionales y embragues.",
    specs: [
      { l: "Norma",               v: "DOT 3 / FMVSS 116"   },
      { l: "Punto de ebullición",  v: "≥ 205 °C"            },
      { l: "Base",                v: "Glicol éter"           },
      { l: "Compatibilidad",      v: "ABS / sistemas conv." }
    ]
  },
  {
    id: 9, num: 9,
    name: "Líquido de Frenos DOT 4 Plus",
    vol: "500 CC", price: 4000, cat: "frenos", color: "pb-red", img: "./15.png",
    desc: "Formulación avanzada DOT 4 con punto de ebullición superior. Recomendado para ABS, ESP y frenos de disco de alto rendimiento.",
    specs: [
      { l: "Norma",               v: "DOT 4 / FMVSS 116"     },
      { l: "Punto de ebullición",  v: "≥ 230 °C"              },
      { l: "Base",                v: "Glicol éter borado"      },
      { l: "Compatibilidad",      v: "ABS / ESP / alto rend." }
    ]
  },
  {
    id: 10, num: 10,
    name: "Resaltador de Caucho Siliconado",
    vol: "500 CC", price: 2100, cat: "limpieza", color: "pb-blue", img: "./4.png",
    desc: "Producto siliconado para proteger y resaltar gomas, burletes, paragolpes y plásticos. Acabado brillante con protección UV.",
    specs: [
      { l: "Contenido",     v: "Silicona activa"   },
      { l: "Aplicación",    v: "Gomas / plásticos" },
      { l: "Acabado",       v: "Brillante"          },
      { l: "Protección UV", v: "Sí"                 }
    ]
  },
  {
    id: 11, num: 11,
    name: "Lava Cristales",
    vol: "500 CC", price: 2100, cat: "limpieza", color: "pb-blue", img: "./6.png",
    desc: "Limpiador concentrado para limpiaparabrisas. Elimina insectos, polvo y grasa del parabrisas. Formulación antiespumante para el depósito.",
    specs: [
      { l: "Dilución",      v: "1:10 con agua" },
      { l: "Rendimiento",   v: "≈ 5 L finales"  },
      { l: "Antiespumante", v: "Sí"              },
      { l: "Temperatura",   v: "Hasta −5 °C"     }
    ]
  },
  {
    id: 12, num: 12,
    name: "Shampoo Siliconado",
    vol: "500 CC", price: 2700, cat: "limpieza", color: "pb-magenta", img: "./12.png",
    desc: "Shampoo automotriz con silicona activa. Limpia y protege la pintura generando una capa hidrofóbica que repele el agua y el barro.",
    specs: [
      { l: "Con silicona", v: "Sí"               },
      { l: "Dilución",     v: "1:50 recomendado" },
      { l: "pH",           v: "Neutro 7"          },
      { l: "Acabado",      v: "Hidrofóbico"       }
    ]
  },
  {
    id: 13, num: 13,
    name: "Silicona Protectora",
    vol: "250 CC", price: 2100, cat: "limpieza", color: "pb-lime", img: "./11.png",
    desc: "Silicona multiuso para proteger plásticos, gomas y superficies internas. Ideal para tableros, cintas transportadoras y mecanismos.",
    specs: [
      { l: "Presentación", v: "Líquido"                  },
      { l: "Aplicación",   v: "Interior / exterior"       },
      { l: "Acabado",      v: "Semimate"                   },
      { l: "Superficie",   v: "Plástico / goma / metal"   }
    ]
  }
];

const swatchColors = {
  'pb-pink':    'linear-gradient(160deg,#e84d6e,#c8192e)',
  'pb-green':   'linear-gradient(160deg,#2d8a4e,#1a5c32)',
  'pb-yellow':  'linear-gradient(160deg,#c8a900,#9a7f00)',
  'pb-white':   'linear-gradient(160deg,#c0cdd6,#96a8b2)',
  'pb-clear':   'linear-gradient(160deg,#aabbc9,#7a93a6)',
  'pb-orange':  'linear-gradient(160deg,#f08000,#b85c00)',
  'pb-red':     'linear-gradient(160deg,#e84d6e,#c8192e)',
  'pb-blue':    'linear-gradient(160deg,#1e6ca8,#0d4070)',
  'pb-magenta': 'linear-gradient(160deg,#d44090,#a0206e)',
  'pb-lime':    'linear-gradient(160deg,#90b800,#668500)',
};

let cart = {};

// ─── HELPERS ──────────────────────────────────────────
function fmt(n) {
  return '$' + n.toLocaleString('es-AR');
}
function catLabel(c) {
  return { refrigerante: 'Refrigerante', frenos: 'Frenos', limpieza: 'Estética', agua: 'Agua' }[c] || c;
}
function padNum(n) {
  return String(n).padStart(3, '0');
}

// ─── PRODUCT GRID ─────────────────────────────────────
function renderGrid(filter) {
  const grid = document.getElementById('productGrid');
  const list = filter === 'all' ? products : products.filter(p => p.cat === filter);
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-card-top">
        <span class="product-num-tag">№ ${padNum(p.num)}</span>
        <span class="product-cat-tag">${catLabel(p.cat)}</span>
      </div>
      <div class="product-visual" onclick="openModal(${p.id})">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" class="product-real-img">`
          : `<div class="pb ${p.color}"></div>`}
        ${p.img ? `<button class="product-eye-btn" onclick="event.stopPropagation();openViewer(${p.id})" title="Vista 3D">👁</button>` : ''}
      </div>
      <div class="product-info" onclick="openModal(${p.id})">
        <div class="product-name">${p.name}</div>
        <div class="product-volume">Envase × ${p.vol}</div>
      </div>
      <div class="product-footer">
        <div class="product-price">${fmt(p.price)}<span> / ${p.vol}</span></div>
        <button class="add-btn" onclick="addToCart(${p.id})" title="Agregar al carrito">+</button>
      </div>
    </div>`).join('');
}

// ─── MODAL ────────────────────────────────────────────
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalRef').textContent   = `REF. ${padNum(p.num)} · ${catLabel(p.cat).toUpperCase()}`;
  document.getElementById('modalName').textContent  = p.name;
  document.getElementById('modalVol').textContent   = `Envase × ${p.vol}`;
  document.getElementById('modalPrice').innerHTML   = fmt(p.price) + '<small> / unidad</small>';
  document.getElementById('modalDesc').textContent  = p.desc;

  const existing = document.getElementById('modalBottle');
  if (p.img) {
    const img = document.createElement('img');
    img.id = 'modalBottle';
    img.src = p.img;
    img.alt = p.name;
    img.className = 'modal-real-img';
    existing.replaceWith(img);
  } else {
    if (existing.tagName === 'IMG') {
      const div = document.createElement('div');
      div.id = 'modalBottle';
      div.className = 'pb ' + p.color;
      existing.replaceWith(div);
    } else {
      existing.className = 'pb ' + p.color;
    }
  }

  document.getElementById('modalSpecs').innerHTML = p.specs.map(s =>
    `<div class="modal-spec">
       <div class="modal-spec-label">${s.l}</div>
       <div class="modal-spec-value">${s.v}</div>
     </div>`
  ).join('');

  document.getElementById('modalAddBtn').onclick = () => { addToCart(p.id); closeModal(); };
  const btn3D = document.getElementById('modal3DBtn');
  if (p.img) {
    btn3D.style.display = 'block';
    btn3D.onclick = () => { closeModal(); openViewer(p.id); };
  } else {
    btn3D.style.display = 'none';
  }
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleModalOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ─── CART ─────────────────────────────────────────────
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  cart[id] = cart[id] ? { ...cart[id], qty: cart[id].qty + 1 } : { ...p, qty: 1 };
  updateCartUI();
  showToast('Agregado — ' + p.name);
}

function updateCartUI() {
  const total = Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0);
  const count = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (count === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Tu carrito está vacío.<br>Agregá productos del catálogo.</p></div>';
    footerEl.style.display = 'none';
  } else {
    footerEl.style.display = 'block';
    document.getElementById('cartTotal').textContent = fmt(total);
    itemsEl.innerHTML = Object.values(cart).map(i => `
      <div class="cart-item">
        <div class="cart-item-swatch" style="background:${swatchColors[i.color]}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-vol">× ${i.vol}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button>
            <span class="qty-num">${i.qty}</span>
            <button class="qty-btn" onclick="changeQty(${i.id},1)">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <span class="cart-item-price">${fmt(i.price * i.qty)}</span>
          <button class="cart-remove" onclick="removeItem(${i.id})">✕</button>
        </div>
      </div>`).join('');
  }
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}

function removeItem(id) {
  delete cart[id];
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkout() {
  const lines = Object.values(cart)
    .map(i => `• ${i.name} (${i.vol}) x${i.qty} = ${fmt(i.price * i.qty)}`)
    .join('%0A');
  const total = Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `Hola LQ Factory! Quiero hacer el siguiente pedido:%0A%0A${lines}%0A%0A*Total: ${fmt(total)}*%0A%0AQuedo a la espera de confirmación.`;
  window.open(`https://wa.me/5493517075757?text=${msg}`, '_blank');
}

// ─── TOAST ────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ─── FILTROS ──────────────────────────────────────────
document.getElementById('filters').addEventListener('click', e => {
  if (!e.target.matches('.filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderGrid(e.target.dataset.filter);
});

// ─── SCROLL ANIMATIONS ────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    // animated counter — supports both .why-block-num and .why-stat-big
    if (entry.target.classList.contains('stat-anim')) {
      entry.target.querySelectorAll('.why-block-num[data-target], .why-stat-big[data-target], .why-stat-num[data-target]').forEach(el => {
        if (el.dataset.done) return;
        el.dataset.done = '1';
        const target   = +el.dataset.target;
        const prefix   = el.dataset.prefix  || '';
        const suffix   = el.dataset.suffix  || '';
        const duration = 1400;
        const start    = performance.now();
        const tick = (now) => {
          const p    = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const val  = Math.round(ease * target);
          el.textContent = prefix + val + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }

    // animated counter for contact right column
    if (entry.target.classList.contains('contact-anim-r')) {
      entry.target.querySelectorAll('.contact-r-num[data-target]').forEach(el => {
        if (el.dataset.done) return;
        el.dataset.done = '1';
        const target = +el.dataset.target;
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.reveal, .why-header-anim, .stat-anim, .card-anim, .why-img-anim, .contact-anim, .contact-anim-r'
).forEach(el => observer.observe(el));

// ─── INIT ─────────────────────────────────────────────
renderGrid('all');
updateCartUI();

// ─── 3D VIEWER ────────────────────────────────
let viewerActive = false;
let rotX = 0, rotY = 0;
let startX = 0, startY = 0;
let isDragging = false;
let velX = 0, velY = 0;
let lastX = 0, lastY = 0;
let rafId = null;

function openViewer(id) {
  const p = products.find(x => x.id === id);
  if (!p || !p.img) return;

  document.getElementById('viewerImg').src   = p.img;
  document.getElementById('viewerImg').alt   = p.name;
  document.getElementById('viewerName').textContent = p.name;
  document.getElementById('viewerRef').textContent  = `REF. ${padNum(p.num)} · Vista 360°`;

  rotX = 0; rotY = 15; velX = 0; velY = 0;
  applyRotation();

  document.getElementById('viewerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  viewerActive = true;
  startIdleFloat();
}

function closeViewer() {
  document.getElementById('viewerOverlay').classList.remove('open');
  document.body.style.overflow = '';
  viewerActive = false;
  cancelAnimationFrame(rafId);
}

function handleViewerOverlayClick(e) {
  if (e.target === document.getElementById('viewerOverlay')) closeViewer();
}

function applyRotation() {
  const obj = document.getElementById('viewerObject');
  rotX = Math.max(-38, Math.min(38, rotX));
  obj.style.transform = `rotateX(${-rotX}deg) rotateY(${rotY}deg)`;
}

function startIdleFloat() {
  if (!viewerActive) return;
  if (!isDragging) {
    velY += 0.04;
    rotY += velY * 0.06;
    velY *= 0.98;
    rotX += Math.sin(Date.now() / 2200) * 0.015;
    applyRotation();
  }
  rafId = requestAnimationFrame(startIdleFloat);
}

const stage = document.getElementById('viewerStage');
stage.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.clientX; startY = e.clientY;
  lastX = e.clientX; lastY = e.clientY;
  velX = 0; velY = 0;
  e.preventDefault();
});
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  velX = dy * 0.4;
  velY = dx * 0.4;
  rotX += velX;
  rotY += velY;
  lastX = e.clientX; lastY = e.clientY;
  applyRotation();
});
window.addEventListener('mouseup', () => { isDragging = false; });

stage.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].clientX; startY = e.touches[0].clientY;
  lastX = startX; lastY = startY;
  velX = 0; velY = 0;
}, { passive: true });
window.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - lastX;
  const dy = e.touches[0].clientY - lastY;
  velX = dy * 0.4;
  velY = dx * 0.4;
  rotX += velX;
  rotY += velY;
  lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
  applyRotation();
}, { passive: true });
window.addEventListener('touchend', () => { isDragging = false; });

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeViewer(); closeModal(); } });


// ─── NAV scroll behaviour ─────────────────────────────
(function() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    
    if (window.scrollY > 20) {
      nav.style.background = 'rgba(10,12,15,.96)';
      nav.style.backdropFilter = 'blur(8px)';
      nav.style.borderBottom = '1px solid rgba(255,255,255,.06)';
      nav.style.position = 'fixed';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = '';
      nav.style.borderBottom = 'none';
      nav.style.position = 'absolute';
    }
  }, { passive: true });
})();


// ─── WHY SECTION — image switcher ─────────────────────
function switchWhyImg(btn) {
  const img = document.getElementById('whySceneImg');
  const tag = document.querySelector('.why-scene-tag');
  if (!img || !btn) return;

  // Update active tab
  document.querySelectorAll('.why-prod-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Animate out
  img.classList.add('switching');
  setTimeout(() => {
    img.src = btn.dataset.img;
    if (tag) tag.textContent = btn.dataset.label;
    img.onload = () => img.classList.remove('switching');
    // fallback if already cached
    setTimeout(() => img.classList.remove('switching'), 50);
  }, 320);
}