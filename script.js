// ══════════════════════════════════════════════════════
//  LQ FACTORY — script.js
// ══════════════════════════════════════════════════════

// ─── DATOS DE PRODUCTOS ───────────────────────────────
const products = [
  {
    id: 1, num: 1,
    name: "Refrigerante Anticongelante Rosa",
    vol: "5 LTS", price: 10000, cat: "refrigerante", color: "pb-pink",
    desc: "Refrigerante orgánico (OAT) de alta tecnología. Compatible con motores nafteros, diésel y a gas. Formulado con inhibidores de corrosión de larga duración.",
    specs: [
      { l: "Norma",       v: "IRAM 113043"       },
      { l: "Tipo",        v: "Orgánico OAT"       },
      { l: "Dilución",    v: "Sin diluir (100%)"  },
      { l: "Temperatura", v: "Hasta −40 °C"       }
    ]
  },
  {
    id: 2, num: 2,
    name: "Refrigerante Anticongelante Verde",
    vol: "5 LTS", price: 1490, cat: "refrigerante", color: "pb-green", img: "./prd1.png",
    desc: "Refrigerante convencional (IAT) ideal para vehículos con motores de fundición ferrosa. Excelente protección anticorrosión y anticongelante.",
    specs: [
      { l: "Norma",       v: "IRAM 113043"       },
      { l: "Tipo",        v: "Convencional IAT"   },
      { l: "Dilución",    v: "Sin diluir (100%)"  },
      { l: "Temperatura", v: "Hasta −37 °C"       }
    ]
  },
  {
    id: 3, num: 3,
    name: "Refrigerante Anticongelante Amarillo",
    vol: "5 LTS", price: 1490, cat: "refrigerante", color: "pb-yellow",
    desc: "Refrigerante híbrido (HOAT) de última generación. Compatible con motores modernos de aluminio y aleaciones mixtas.",
    specs: [
      { l: "Norma",       v: "IRAM 113043"       },
      { l: "Tipo",        v: "Híbrido HOAT"       },
      { l: "Dilución",    v: "Sin diluir (100%)"  },
      { l: "Temperatura", v: "Hasta −38 °C"       }
    ]
  },
  {
    id: 4, num: 4,
    name: "Refrigerante Anticongelante 30% Rosa",
    vol: "5 LTS", price: 4240, cat: "refrigerante", color: "pb-white",
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
    name: "Refrigerante Anticongelante 30% Verde",
    vol: "5 LTS", price: 4240, cat: "refrigerante", color: "pb-white",
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
    name: "Refrigerante Anticongelante 30% Amarillo",
    vol: "5 LTS", price: 4240, cat: "refrigerante", color: "pb-white",
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
    vol: "5 LTS", price: 1240, cat: "agua", color: "pb-clear",
    desc: "Agua desmineralizada de alta pureza para dilución de refrigerantes y relleno de baterías. Libre de minerales, cloro e impurezas que dañan el sistema de enfriamiento.",
    specs: [
      { l: "Conductividad", v: "< 10 μS/cm"           },
      { l: "pH",            v: "6.5 – 7.5"             },
      { l: "Uso",           v: "Refrigerantes/baterías" },
      { l: "Contenido",     v: "Sin aditivos"           }
    ]
  },
  {
    id: 8, num: 8,
    name: "Líquido de Frenos DOT 3",
    vol: "500 CC", price: 3100, cat: "frenos", color: "pb-orange",
    desc: "Líquido de frenos a base de glicol éter que cumple la norma DOT 3. Apto para sistemas de frenos hidráulicos convencionales y embragues.",
    specs: [
      { l: "Norma",              v: "DOT 3 / FMVSS 116"    },
      { l: "Punto de ebullición", v: "≥ 205 °C"            },
      { l: "Base",               v: "Glicol éter"           },
      { l: "Compatibilidad",     v: "ABS / sistemas conv."  }
    ]
  },
  {
    id: 9, num: 9,
    name: "Líquido de Frenos DOT 4 Plus",
    vol: "500 CC", price: 4000, cat: "frenos", color: "pb-red",
    desc: "Formulación avanzada DOT 4 con punto de ebullición superior. Recomendado para vehículos con exigencia mayor: ABS, ESP, frenos de disco de alto rendimiento.",
    specs: [
      { l: "Norma",              v: "DOT 4 / FMVSS 116"      },
      { l: "Punto de ebullición", v: "≥ 230 °C"              },
      { l: "Base",               v: "Glicol éter borado"      },
      { l: "Compatibilidad",     v: "ABS / ESP / alto rend."  }
    ]
  },
  {
    id: 10, num: 10,
    name: "Resaltador de Caucho Siliconado",
    vol: "500 CC", price: 2100, cat: "limpieza", color: "pb-blue", img: "./prod2.png",
    desc: "Producto siliconado para proteger y resaltar gomas, burletes, paragolpes y plásticos. Deja un acabado brillante y protege contra la decoloración por UV.",
    specs: [
      { l: "Contenido",      v: "Silicona activa"  },
      { l: "Aplicación",     v: "Gomas / plásticos" },
      { l: "Acabado",        v: "Brillante"          },
      { l: "Protección UV",  v: "Sí"                 }
    ]
  },
  {
    id: 11, num: 11,
    name: "Lava Cristales",
    vol: "500 CC", price: 2100, cat: "limpieza", color: "pb-blue",
    desc: "Limpiador concentrado para limpiaparabrisas. Elimina insectos, polvo y grasa del parabrisas sin rayar. Formulación antiespumante apta para el depósito del vehículo.",
    specs: [
      { l: "Dilución",      v: "1:10 con agua"   },
      { l: "Rendimiento",   v: "≈ 5 L finales"   },
      { l: "Antiespumante", v: "Sí"               },
      { l: "Temperatura",   v: "Hasta −5 °C"      }
    ]
  },
  {
    id: 12, num: 12,
    name: "Shampoo Siliconado",
    vol: "500 CC", price: 2700, cat: "limpieza", color: "pb-magenta",
    desc: "Shampoo automotriz con silicona activa que limpia y protege la pintura al mismo tiempo. Genera una capa hidrofóbica que repele el agua y el barro.",
    specs: [
      { l: "Con cera",    v: "No"              },
      { l: "Con silicona", v: "Sí"             },
      { l: "Dilución",    v: "1:50 recomendado" },
      { l: "pH",          v: "Neutro 7"         }
    ]
  },
  {
    id: 13, num: 13,
    name: "Silicona Protectora",
    vol: "250 CC", price: 2100, cat: "limpieza", color: "pb-lime",
    desc: "Silicona multiuso en formato spray/líquido para proteger plásticos, gomas y superficies internas. Ideal para tableros, cintas transportadoras y mecanismos.",
    specs: [
      { l: "Presentación", v: "Líquido"                 },
      { l: "Aplicación",   v: "Interior / exterior"      },
      { l: "Acabado",      v: "Semimate"                  },
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

// ─── GRILLA DE PRODUCTOS ──────────────────────────────
function renderGrid(filter) {
  const grid = document.getElementById('productGrid');
  const list = filter === 'all' ? products : products.filter(p => p.cat === filter);
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-card-header">
        <div class="product-num">${p.num}</div>
        <div class="product-category-tag">${catLabel(p.cat)}</div>
      </div>
      <div class="product-visual" onclick="openModal(${p.id})">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" class="product-real-img">`
          : `<div class="pb ${p.color}"></div>`}
      </div>
      <div class="product-info" onclick="openModal(${p.id})">
        <div class="product-name">${p.name}</div>
        <div class="product-volume">Envase × ${p.vol}</div>
      </div>
      <div class="product-footer">
        <div class="product-price">${fmt(p.price)}<span> ×${p.vol}</span></div>
        <button class="add-btn" onclick="addToCart(${p.id})" title="Agregar">+</button>
      </div>
    </div>`).join('');
}

// ─── MODAL ────────────────────────────────────────────
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalNum').textContent  = p.num;
  document.getElementById('modalCat').textContent  = catLabel(p.cat);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalVol').textContent  = 'Envase × ' + p.vol;
  document.getElementById('modalPrice').innerHTML  = fmt(p.price) + '<small> / unidad</small>';
  document.getElementById('modalDesc').textContent = p.desc;

  const bottle = document.getElementById('modalBottle');
  if (p.img) {
    bottle.outerHTML = `<img id="modalBottle" src="${p.img}" alt="${p.name}" class="modal-real-img">`;
  } else {
    const existing = document.getElementById('modalBottle');
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

// ─── CARRITO ──────────────────────────────────────────
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  cart[id] = cart[id] ? { ...cart[id], qty: cart[id].qty + 1 } : { ...p, qty: 1 };
  updateCartUI();
  showToast('✔ ' + p.name + ' agregado');
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
          <button class="cart-remove" onclick="removeItem(${i.id})">🗑</button>
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
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ─── FILTROS ──────────────────────────────────────────
document.getElementById('filters').addEventListener('click', e => {
  if (!e.target.matches('.filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderGrid(e.target.dataset.filter);
});

// ─── ANIMACIONES AL HACER SCROLL ─────────────────────
const animTargets = document.querySelectorAll(
  '.why-header-anim, .stat-anim, .card-anim, .contact-anim, .contact-anim-r'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    // Contador animado en stats
    if (entry.target.classList.contains('stat-anim')) {
      const el = entry.target.querySelector('.why-stat-num');
      if (el && !el.dataset.done) {
        el.dataset.done = '1';
        const target   = +el.dataset.target;
        const duration = 1400;
        const start    = performance.now();
        const tick = (now) => {
          const p    = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(ease * target);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }

    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

animTargets.forEach(el => observer.observe(el));

// ─── INIT ─────────────────────────────────────────────
renderGrid('all');
updateCartUI();