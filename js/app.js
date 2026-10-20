// InformatikaKu - App
const App = {
  page: 'beranda',
  dark: localStorage.getItem('ik_dark') === 'true',

  init() {
    document.getElementById('body').className = this.dark ? 'dark' : '';
    this.render();
    window.addEventListener('scroll', () => {
      const b = document.getElementById('btt');
      if (b) b.classList.toggle('on', window.scrollY > 300);
    });
  },

  setDark(v) {
    this.dark = v;
    localStorage.setItem('ik_dark', v);
    document.getElementById('body').className = v ? 'dark' : '';
    this.render();
  },

  render() {
    document.getElementById('app').innerHTML =
      this.nav() + this.pages() +
      `<button id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})">
        <i data-lucide="arrow-up" style="width:15px;height:15px"></i>
      </button>`;
    lucide.createIcons();
    this.go(this.page);
  },

  nav() {
    const links = [
      ['beranda','Beranda'],['materi','Materi'],['kuis','Kuis'],['tentang','Tentang']
    ];
    return `<nav class="nav">
      <div class="nav-in">
        <div class="nav-logo" onclick="App.go('beranda')">
          <div class="nav-logo-dot">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          InformatikaKu
        </div>
        <div class="nav-links" id="nl">
          ${links.map(([id,l])=>`<div class="nav-a${this.page===id?' on':''}" onclick="App.go('${id}')">${l}</div>`).join('')}
        </div>
        <div class="nav-right">
          <button class="icon-btn" onclick="App.setDark(${!this.dark})" title="${this.dark?'Terang':'Gelap'}">
            <i data-lucide="${this.dark?'sun':'moon'}" style="width:15px;height:15px"></i>
          </button>
          <button class="icon-btn" onclick="App.go('cari')" title="Cari">
            <i data-lucide="search" style="width:15px;height:15px"></i>
          </button>
          <button class="icon-btn hbg" onclick="document.getElementById('nl').classList.toggle('open')">
            <i data-lucide="menu" style="width:15px;height:15px"></i>
          </button>
        </div>
      </div>
    </nav>`;
  },

  go(id, extra) {
    this.page = id;
    const labels = { beranda:'Beranda', materi:'Materi', kuis:'Kuis', tentang:'Tentang' };
    document.querySelectorAll('.nav-a').forEach(el =>
      el.classList.toggle('on', el.textContent.trim() === (labels[id] || ''))
    );
    const nl = document.getElementById('nl');
    if (nl) nl.classList.remove('open');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
    let t = document.getElementById('p-' + id);
    if (!t) {
      const dp = document.getElementById('dp');
      if (id === 'detail') dp.innerHTML = this.pgDetail(extra);
      else if (id === 'cari') dp.innerHTML = this.pgCari();
      else if (id === 'fitur') dp.innerHTML = this.pgFitur(extra);
      t = document.getElementById('p-' + id);
    }
    if (t) { t.classList.add('on'); window.scrollTo(0, 0); lucide.createIcons(); }
  },

  pages() {
    return this.pgBeranda() + this.pgMateri() + this.pgKuis() +
           this.pgTentang() + `<div id="dp"></div>`;
  },

  // ─────────────────────────────────────────
  //  BERANDA
  // ─────────────────────────────────────────
  pgBeranda() {
    const babs = Object.values(MATERI_DATA);
    const totalM = babs.reduce((a, b) => a + b.submateri.length, 0);
    const totalS = Object.values(QUIZ_DATA).reduce((a, b) => a + b.length, 0);

    const babStyles = [
      { gradient: 'linear-gradient(135deg,#3b5bdb,#748ffc)', icon: '🧠' },
      { gradient: 'linear-gradient(135deg,#6741d9,#9775fa)', icon: '💻' },
      { gradient: 'linear-gradient(135deg,#0c8599,#22b8cf)', icon: '🖥️' },
      { gradient: 'linear-gradient(135deg,#c2620a,#fd7e14)', icon: '🌐' }
    ];

    return `<div class="page" id="p-beranda">

      <div class="hero">
        <div class="hero-inner" style="position:relative">
          <div class="hero-label">Informatika · Kelas IX SMP/MTs · Gasal 2026/2027</div>
          <h1>Belajar Informatika<br>jadi lebih <em>menyenangkan</em></h1>
          <p class="hero-desc">Materi lengkap, kuis interaktif, dan alat bantu belajar — semua tersimpan otomatis di browser kamu. Tanpa login.</p>
          <div class="hero-btns">
            <button class="btn btn-primary" onclick="App.go('materi')">
              <i data-lucide="book-open" style="width:15px;height:15px"></i>
              Mulai Belajar
            </button>
            <button class="btn btn-line" onclick="App.go('kuis')">
              <i data-lucide="pen-tool" style="width:15px;height:15px"></i>
              Kerjakan Kuis
            </button>
          </div>
          <div class="hero-cards">
            <div class="hero-card-mini">
              <div class="hero-card-mini-label">Submateri</div>
              <div class="hero-card-mini-val">${totalM}</div>
            </div>
            <div class="hero-card-mini">
              <div class="hero-card-mini-label">Soal Kuis</div>
              <div class="hero-card-mini-val">${totalS}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="w sec">
        <div class="sec-eyebrow">Materi Pembelajaran</div>
        <div class="sec-title">4 Bab yang Kamu Pelajari</div>
        <div class="sec-sub">Pilih bab untuk melihat semua submateri</div>
        <div class="bab-cards">
          ${babs.map((b, i) => {
            const s = babStyles[i] || babStyles[0];
            return `<div class="bab-card" onclick="App.go('materi');App.scrollTo('bab-${b.id}')"
                         style="--card-gradient:${s.gradient}">
              <div class="bab-card-header">
                <div class="bab-card-header-num">${String(i+1).padStart(2,'0')}</div>
                <div class="bab-card-icon">${s.icon}</div>
                <div class="bab-card-label">Bab ${i+1} · ${b.submateri.length} submateri</div>
                <div class="bab-card-title">${b.judul}</div>
              </div>
              <div class="bab-card-body">
                <div class="bab-card-desc">${b.deskripsi}</div>
                <div class="bab-card-footer">
                  <div class="bab-card-count">${b.submateri.map(s=>s.judul).slice(0,2).join(', ')}${b.submateri.length>2?'…':''}</div>
                  <div class="bab-card-btn">Buka <i data-lucide="arrow-right" style="width:12px;height:12px"></i></div>
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="w sec">
        <div class="sec-eyebrow">Alat Bantu Belajar</div>
        <div class="sec-title">Fitur Pendukung</div>
        <div class="sec-sub">Tools untuk belajar lebih efektif</div>
        <div class="tools-list">
          ${[
            { icon:'📖', name:'Kamus Istilah',   desc:'Cari definisi istilah Informatika',    key:'kamus' },
            { icon:'🃏', name:'Flashcard',        desc:'Hafal istilah dengan kartu bolak-balik', key:'flashcard' },
            { icon:'📝', name:'Catatan Belajar',  desc:'Simpan catatan pribadimu di browser',   key:'catatan' },
            { icon:'⏱',  name:'Timer Belajar',    desc:'Pantau durasi belajarmu setiap sesi',   key:'timer' },
            { icon:'⚡', name:'Simulasi Logika',  desc:'Coba AND, OR, NOT secara interaktif',   key:'logika' },
            { icon:'🔐', name:'Cek Kata Sandi',   desc:'Uji seberapa kuat kata sandimu',        key:'password' }
          ].map(f => `
            <div class="tool-row" onclick="App.goFitur('${f.key}')">
              <div class="tool-icon">${f.icon}</div>
              <div style="flex:1;min-width:0">
                <div class="tool-name">${f.name}</div>
                <div class="tool-desc">${f.desc}</div>
              </div>
              <i data-lucide="chevron-right" class="tool-arrow" style="width:14px;height:14px"></i>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="w" style="padding-bottom:64px">
        <div class="quote">
          <p>"Setiap ahli teknologi pernah menjadi pemula. Yang membedakan adalah mereka tidak berhenti belajar."</p>
          <cite>— Prinsip Belajar Informatika</cite>
        </div>
      </div>

      ${this.footer()}
    </div>`;
  },

  scrollTo(id) {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  },

  // ─────────────────────────────────────────
  //  MATERI
  // ─────────────────────────────────────────
  pgMateri() {
    const babs = Object.values(MATERI_DATA);
    const babColors = ['#3b5bdb','#6741d9','#0c8599','#c2620a'];
    return `<div class="page" id="p-materi">
      <div class="w" style="padding-top:40px;padding-bottom:64px">
        <div class="bc">
          <span class="bc-a" onclick="App.go('beranda')">Beranda</span>
          <span class="bc-s">/</span><span>Materi</span>
        </div>
        <div style="margin-bottom:32px">
          <div style="font-size:24px;font-weight:800;letter-spacing:-.5px;color:var(--txt1)">Daftar Materi</div>
          <div style="font-size:14px;color:var(--txt2);margin-top:5px">Pilih submateri yang ingin kamu pelajari</div>
        </div>
        ${babs.map((b, i) => `
          <div id="bab-${b.id}" style="margin-bottom:40px">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--border)">
              <div style="width:8px;height:8px;border-radius:50%;background:${babColors[i]||babColors[0]};flex-shrink:0"></div>
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--txt3)">Bab ${i+1}</span>
              <span style="font-size:17px;font-weight:800;letter-spacing:-.3px;color:var(--txt1)">${b.judul}</span>
            </div>
            <div class="bab-list">
              ${b.submateri.map((s, j) => `
                <div class="bab-row" onclick="App.bukaSub('${b.id}','${s.id}')">
                  <div class="bab-num-tag">${String.fromCharCode(65+j)}</div>
                  <div class="bab-info">
                    <div class="bab-name">${s.judul}</div>
                    <div class="bab-sub-count">${b.judul}</div>
                  </div>
                  <i data-lucide="chevron-right" class="bab-arrow" style="width:14px;height:14px"></i>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      ${this.footer()}
    </div>`;
  },

  bukaSub(babId, subId) {
    document.getElementById('dp').innerHTML = this.pgDetail(subId);
    this.go('detail', subId);
  },

  // ─────────────────────────────────────────
  //  DETAIL MATERI
  // ─────────────────────────────────────────
  pgDetail(subId) {
    let bab = null, sub = null, idx = 0, all = [];
    Object.values(MATERI_DATA).forEach(b => b.submateri.forEach(s => {
      all.push({ bab: b, sub: s });
      if (s.id === subId) { bab = b; sub = s; idx = all.length - 1; }
    }));
    if (!sub) return `<div class="page" id="p-detail"><div class="w"><p>Tidak ditemukan.</p></div></div>`;
    const prev = all[idx - 1], next = all[idx + 1];
    const totalSub = bab.submateri.length;
    const subIdx = bab.submateri.findIndex(s => s.id === subId) + 1;

    return `<div class="page" id="p-detail">
      <div class="w" style="padding-top:32px;padding-bottom:72px">
        <div class="bc">
          <span class="bc-a" onclick="App.go('beranda')">Beranda</span><span class="bc-s">/</span>
          <span class="bc-a" onclick="App.go('materi')">Materi</span><span class="bc-s">/</span>
          <span>${bab.judul}</span><span class="bc-s">/</span>
          <span>${sub.judul}</span>
        </div>
        <div class="m-layout">
          <aside class="m-sidebar">
            <div class="m-sidebar-head">${bab.judul}</div>
            ${bab.submateri.map((s, i) => `
              <div class="m-sidebar-item${s.id === subId ? ' on' : ''}" onclick="App.bukaSub('${bab.id}','${s.id}')">
                <span style="flex:1;min-width:0">${s.judul}</span>
              </div>
            `).join('')}
          </aside>

          <div class="m-content">
            <!-- Header artikel -->
            <div class="m-content-header">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--txt3)">${bab.judul}</span>
                <span style="color:var(--border2)">·</span>
                <span style="font-size:11px;font-weight:600;color:var(--txt3)">${subIdx} dari ${totalSub}</span>
              </div>
              <h1 style="font-size:24px;font-weight:800;letter-spacing:-.5px;line-height:1.25;color:var(--txt1);margin-bottom:8px">${sub.judul}</h1>
              <p style="font-size:13.5px;color:var(--txt2);line-height:1.6;margin:0">Baca materi dengan seksama, lalu kerjakan latihan mandiri di bagian akhir.</p>
            </div>

            <!-- Isi konten -->
            <div class="m-content-body">
              <div class="mc">${sub.konten}</div>

              <!-- Navigasi bawah -->
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:36px;padding-top:20px;border-top:1px solid var(--border);flex-wrap:wrap;gap:10px">
                ${prev
                  ? `<button class="btn btn-ghost btn-sm" onclick="App.bukaSub('${prev.bab.id}','${prev.sub.id}')">
                      <i data-lucide="arrow-left" style="width:13px;height:13px"></i>
                      ${prev.sub.judul}
                     </button>`
                  : '<div></div>'
                }
                ${next
                  ? `<button class="btn btn-primary btn-sm" onclick="App.bukaSub('${next.bab.id}','${next.sub.id}')">
                      ${next.sub.judul}
                      <i data-lucide="arrow-right" style="width:13px;height:13px"></i>
                     </button>`
                  : `<button class="btn btn-primary btn-sm" onclick="App.go('kuis')">
                      Kerjakan Kuis
                      <i data-lucide="arrow-right" style="width:13px;height:13px"></i>
                     </button>`
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      ${this.footer()}
    </div>`;
  },

  // ─────────────────────────────────────────
  //  KUIS
  // ─────────────────────────────────────────
  pgKuis() {
    return `<div class="page" id="p-kuis">
      <div class="w" style="padding-top:44px;padding-bottom:72px">
        <div class="bc">
          <span class="bc-a" onclick="App.go('beranda')">Beranda</span>
          <span class="bc-s">/</span><span>Kuis</span>
        </div>
        <div style="margin-bottom:36px">
          <div style="font-size:28px;font-weight:800;letter-spacing:-.6px">Kuis Interaktif</div>
          <div style="font-size:14px;color:var(--txt2);margin-top:6px">Pilih bab untuk mulai mengerjakan kuis</div>
        </div>
        <div id="quiz-pilih">${Quiz.renderPilihBab()}</div>
        <div id="quiz-container" style="display:none;max-width:600px"></div>
      </div>
      ${this.footer()}
    </div>`;
  },

  // ─────────────────────────────────────────
  //  TENTANG
  // ─────────────────────────────────────────
  pgTentang() {
    return `<div class="page" id="p-tentang">
      <div class="wm" style="padding-top:44px;padding-bottom:72px">
        <div class="bc">
          <span class="bc-a" onclick="App.go('beranda')">Beranda</span>
          <span class="bc-s">/</span><span>Tentang</span>
        </div>
        <div style="font-size:28px;font-weight:800;letter-spacing:-.6px;margin-bottom:32px">Tentang InformatikaKu</div>

        <div class="card" style="margin-bottom:16px">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--indigo);margin-bottom:12px">Tentang Platform</div>
          <p style="font-size:15px;line-height:1.8;color:var(--txt1)">InformatikaKu adalah media belajar mandiri untuk siswa kelas IX SMP/MTs. Dirancang agar materi mudah dipahami, dilengkapi kuis interaktif dan berbagai alat bantu belajar — semua tersimpan di browser tanpa perlu login.</p>
        </div>

        <div class="card" style="margin-bottom:16px">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--indigo);margin-bottom:16px">Daftar Materi</div>
          ${Object.values(MATERI_DATA).map((b, i) => `
            <div style="display:flex;gap:18px;padding:12px 0;border-bottom:1px solid var(--border)">
              <span style="font-size:11px;font-weight:800;color:var(--txt3);min-width:36px;padding-top:2px">Bab ${i+1}</span>
              <div>
                <div style="font-size:14px;font-weight:700">${b.judul}</div>
                <div style="font-size:12px;color:var(--txt2);margin-top:4px">${b.submateri.map(s => s.judul).join(' · ')}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="card">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--indigo);margin-bottom:16px">Informasi</div>
          ${[
            ['Mata Pelajaran','Informatika'],
            ['Kelas','IX SMP/MTs'],
            ['Semester','Gasal'],
            ['Tahun Pelajaran','2026/2027'],
            ['Kurikulum','Kurikulum Merdeka']
          ].map(([k, v]) => `
            <div style="display:flex;align-items:center;padding:10px 0;border-bottom:1px solid var(--border);font-size:14px">
              <span style="color:var(--txt2);min-width:150px;font-weight:600">${k}</span>
              <span style="font-weight:700">${v}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ${this.footer()}
    </div>`;
  },

  // ─────────────────────────────────────────
  //  CARI
  // ─────────────────────────────────────────
  pgCari() {
    return `<div class="page" id="p-cari">
      <div class="w" style="padding-top:44px;padding-bottom:72px">
        <div class="bc">
          <span class="bc-a" onclick="App.go('beranda')">Beranda</span>
          <span class="bc-s">/</span><span>Cari</span>
        </div>
        <div style="font-size:28px;font-weight:800;letter-spacing:-.6px;margin-bottom:20px">Cari Materi</div>
        <div class="s-wrap" style="max-width:520px;margin-bottom:28px">
          <i data-lucide="search" class="s-icon" style="width:16px;height:16px"></i>
          <input type="text" id="s-input" placeholder="Ketik judul atau kata kunci..." oninput="App.cari(this.value)" autofocus>
        </div>
        <div id="s-results">${this.hasilCari('')}</div>
      </div>
      ${this.footer()}
    </div>`;
  },

  cari(q) {
    document.getElementById('s-results').innerHTML = this.hasilCari(q);
    lucide.createIcons();
  },

  hasilCari(q) {
    const all = Object.values(MATERI_DATA).flatMap(b => b.submateri.map(s => ({ ...s, bab: b })));
    const res = q.trim()
      ? all.filter(s => s.judul.toLowerCase().includes(q.toLowerCase()) || s.konten.toLowerCase().includes(q.toLowerCase()))
      : all;
    if (!res.length) return `<div style="padding:32px 0;font-size:14px;color:var(--txt2)">Tidak ada hasil untuk "<strong>${q}</strong>"</div>`;
    return `<div class="bab-list">${res.map(s => `
      <div class="bab-row" onclick="App.bukaSub('${s.bab.id}','${s.id}')">
        <div class="bab-info">
          <div class="bab-name">${s.judul}</div>
          <div class="bab-sub-count">${s.bab.judul}</div>
        </div>
        <i data-lucide="chevron-right" class="bab-arrow" style="width:15px;height:15px"></i>
      </div>
    `).join('')}</div>`;
  },

  // ─────────────────────────────────────────
  //  FITUR
  // ─────────────────────────────────────────
  goFitur(nama) {
    document.getElementById('dp').innerHTML = this.pgFitur(nama);
    this.go('fitur', nama);
  },

  pgFitur(nama) {
    const map = {
      kamus: {
        judul: 'Kamus Istilah',
        body: () => `
          <div class="s-wrap" style="margin-bottom:20px">
            <i data-lucide="search" class="s-icon" style="width:15px;height:15px"></i>
            <input type="text" placeholder="Cari istilah..." oninput="document.getElementById('kl').innerHTML=Features.renderKamus(this.value)">
          </div>
          <div id="kl">${Features.renderKamus()}</div>`
      },
      flashcard: { judul: 'Flashcard',       body: () => `<div id="fa">${Features.renderFlashcard()}</div>` },
      catatan:   { judul: 'Catatan Belajar', body: () => Features.renderCatatan() },
      timer:     { judul: 'Timer Belajar',   body: () => Features.renderTimer() },
      logika:    { judul: 'Simulasi Logika', body: () => Features.renderSimulasiLogika() },
      password:  { judul: 'Cek Kata Sandi',  body: () => Features.renderSimulasiPassword() }
    };
    const f = map[nama] || map.kamus;
    return `<div class="page" id="p-fitur">
      <div class="wm" style="padding-top:44px;padding-bottom:72px">
        <div class="bc">
          <span class="bc-a" onclick="App.go('beranda')">Beranda</span>
          <span class="bc-s">/</span><span>${f.judul}</span>
        </div>
        <div style="font-size:28px;font-weight:800;letter-spacing:-.6px;margin-bottom:28px">${f.judul}</div>
        ${f.body()}
      </div>
      ${this.footer()}
    </div>`;
  },

  // ─────────────────────────────────────────
  //  FOOTER
  // ─────────────────────────────────────────
  footer() {
    return `<footer class="footer">
      <div class="footer-in">
        <div class="footer-grid">
          <div>
            <div class="f-brand">
              <div class="f-brand-dot"></div>
              InformatikaKu
            </div>
            <div class="f-desc">Media pembelajaran Informatika kelas IX SMP/MTs. Belajar mandiri, tanpa login, langsung pakai.</div>
          </div>
          <div class="f-col">
            <div class="f-col-title">Materi</div>
            ${Object.values(MATERI_DATA).map(b => `<span onclick="App.go('materi')">${b.judul}</span>`).join('')}
          </div>
          <div class="f-col">
            <div class="f-col-title">Alat Bantu</div>
            ${[['kamus','Kamus Istilah'],['flashcard','Flashcard'],['catatan','Catatan'],['timer','Timer'],['logika','Simulasi Logika']].map(([k,l]) => `<span onclick="App.goFitur('${k}')">${l}</span>`).join('')}
          </div>
          <div class="f-col">
            <div class="f-col-title">Info</div>
            <span style="cursor:default">Kelas IX SMP/MTs</span>
            <span style="cursor:default">Semester Gasal 2026/2027</span>
            <span style="cursor:default">Kurikulum Merdeka</span>
            <span onclick="App.go('tentang')">Tentang Platform</span>
          </div>
        </div>
        <div class="f-bottom">
          <span>© 2026 InformatikaKu</span>
          <span>Informatika · Kelas IX SMP/MTs · Semester Gasal 2026/2027</span>
        </div>
      </div>
    </footer>`;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
