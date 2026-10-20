// InformatikaKu - Fitur Tambahan
const Features = {
  // TIMER BELAJAR
  timer: { interval: null, detik: 0, jalan: false },

  timerStart() {
    if (this.timer.jalan) return;
    this.timer.jalan = true;
    this.timer.interval = setInterval(() => {
      this.timer.detik++;
      this.timerUpdate();
    }, 1000);
    document.getElementById('timer-btn-start').textContent = '⏸ Jeda';
    document.getElementById('timer-btn-start').onclick = () => this.timerPause();
  },

  timerPause() {
    clearInterval(this.timer.interval);
    this.timer.jalan = false;
    document.getElementById('timer-btn-start').textContent = '▶ Lanjut';
    document.getElementById('timer-btn-start').onclick = () => this.timerStart();
  },

  timerReset() {
    clearInterval(this.timer.interval);
    this.timer = { interval: null, detik: 0, jalan: false };
    this.timerUpdate();
    document.getElementById('timer-btn-start').textContent = '▶ Mulai';
    document.getElementById('timer-btn-start').onclick = () => this.timerStart();
  },

  timerUpdate() {
    const el = document.getElementById('timer-display');
    if (!el) return;
    const j = Math.floor(this.timer.detik / 3600);
    const m = Math.floor((this.timer.detik % 3600) / 60);
    const s = this.timer.detik % 60;
    el.textContent = `${String(j).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  },

  renderTimer() {
    return `<div class="card" style="max-width:360px;padding:32px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:var(--c-text3);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:20px">Timer Belajar</div>
      <div class="timer-display" id="timer-display">00:00:00</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:24px">
        <button class="btn btn-primary btn-sm" id="timer-btn-start" onclick="Features.timerStart()">Mulai</button>
        <button class="btn btn-ghost btn-sm" onclick="Features.timerReset()">Reset</button>
      </div>
    </div>`;
  },

  // FLASHCARD
  flashIdx: 0,
  renderFlashcard() {
    const k = KAMUS_DATA;
    const item = k[this.flashIdx % k.length];
    return `<div style="max-width:480px">
      <div style="font-size:12px;color:var(--c-text2);margin-bottom:12px;text-align:center">${this.flashIdx + 1} / ${k.length}</div>
      <div class="flashcard" id="flashcard-el" onclick="this.classList.toggle('flipped')">
        <div class="flashcard-inner">
          <div class="flashcard-front">${item.istilah}<br><span style="font-size:11px;opacity:0.7;font-weight:400">${item.bab}</span></div>
          <div class="flashcard-back">${item.definisi}</div>
        </div>
      </div>
      <div style="font-size:12px;color:var(--c-text2);text-align:center;margin:12px 0">Klik kartu untuk melihat definisi</div>
      <div style="display:flex;gap:8px;justify-content:center">
        <button class="btn btn-ghost btn-sm" onclick="Features.flashPrev()">← Sebelumnya</button>
        <button class="btn btn-primary btn-sm" onclick="Features.flashNext()">Berikutnya →</button>
      </div>
    </div>`;
  },

  flashNext() {
    this.flashIdx = (this.flashIdx + 1) % KAMUS_DATA.length;
    document.getElementById('flashcard-area').innerHTML = this.renderFlashcard();
  },

  flashPrev() {
    this.flashIdx = (this.flashIdx - 1 + KAMUS_DATA.length) % KAMUS_DATA.length;
    document.getElementById('flashcard-area').innerHTML = this.renderFlashcard();
  },

  // KAMUS
  renderKamus(filter = '') {
    const data = filter
      ? KAMUS_DATA.filter(k => k.istilah.toLowerCase().includes(filter.toLowerCase()) || k.definisi.toLowerCase().includes(filter.toLowerCase()))
      : KAMUS_DATA;
    return data.map(k => `
      <div class="card" style="margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <span style="font-size:14px;font-weight:700;color:var(--c-blue)">${k.istilah}</span>
          <span class="badge badge-gray">${k.bab}</span>
        </div>
        <p style="font-size:13px;color:var(--c-text);line-height:1.6">${k.definisi}</p>
      </div>`).join('') || '<div style="padding:24px;text-align:center;font-size:13px;color:var(--c-text2)">Istilah tidak ditemukan.</div>';
  },

  // CATATAN
  renderCatatan() {
    const notes = Progress.getNotes();
    return `<div style="margin-bottom:16px">
        <textarea id="note-input" placeholder="Tulis catatan belajarmu di sini..." style="width:100%;padding:12px;border-radius:8px;border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:13.5px;resize:vertical;min-height:96px;outline:none;font-family:inherit;transition:border-color 0.1s" onfocus="this.style.borderColor='var(--c-blue)'" onblur="this.style.borderColor='var(--c-border)'"></textarea>
        <button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="Features.simpanCatatan()">Simpan Catatan</button>
      </div>
      <div id="notes-list">
        ${notes.length===0?'<div style="padding:24px;text-align:center;font-size:13px;color:var(--c-text2)">Belum ada catatan.</div>':notes.map(n=>`
          <div class="card" style="margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span style="font-size:11px;color:var(--c-text3)">${n.waktu}</span>
              <button class="btn btn-sm btn-danger" onclick="Features.hapusCatatan(${n.id})">Hapus</button>
            </div>
            <p style="font-size:13.5px;white-space:pre-wrap;line-height:1.6">${n.teks}</p>
          </div>`).join('')}
      </div>`;
  },

  simpanCatatan() {
    const input = document.getElementById('note-input');
    if (!input.value.trim()) return;
    Progress.saveNote(input.value.trim());
    input.value = '';
    App.showFitur('catatan');
  },

  hapusCatatan(id) {
    Progress.deleteNote(id);
    App.showFitur('catatan');
  },

  // SIMULASI LOGIKA
  renderSimulasiLogika() {
    return `<div class="card" style="max-width:520px">
      <div style="font-size:11px;font-weight:700;color:var(--c-text3);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:16px">Simulasi Operasi Logika</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
        <div>
          <label style="font-size:12px;font-weight:600;display:block;margin-bottom:6px;color:var(--c-text2)">Nilai A</label>
          <select id="sim-a" style="width:100%;padding:8px 10px;border-radius:7px;border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:13px;font-family:inherit">
            <option value="true">True (Benar)</option><option value="false">False (Salah)</option>
          </select>
        </div>
        <div>
          <label style="font-size:12px;font-weight:600;display:block;margin-bottom:6px;color:var(--c-text2)">Nilai B</label>
          <select id="sim-b" style="width:100%;padding:8px 10px;border-radius:7px;border:1px solid var(--c-border);background:var(--c-surface);color:var(--c-text);font-size:13px;font-family:inherit">
            <option value="true">True (Benar)</option><option value="false">False (Salah)</option>
          </select>
        </div>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;margin-bottom:16px" onclick="Features.hitungLogika()">Hitung</button>
      <div id="sim-hasil"></div>
    </div>`;
  },

  hitungLogika() {
    const a = document.getElementById('sim-a').value === 'true';
    const b = document.getElementById('sim-b').value === 'true';
    const hasil = [
      { op: 'A AND B', val: a && b },
      { op: 'A OR B', val: a || b },
      { op: 'NOT A', val: !a },
      { op: 'NOT B', val: !b },
      { op: 'A AND (NOT B)', val: a && !b },
      { op: '(NOT A) OR B', val: !a || b }
    ];
    document.getElementById('sim-hasil').innerHTML = `
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead><tr>
          <th style="padding:8px 12px;text-align:left;font-weight:600;border-bottom:2px solid var(--c-border2);color:var(--c-text2);font-size:11px;text-transform:uppercase">Operasi</th>
          <th style="padding:8px 12px;text-align:left;font-weight:600;border-bottom:2px solid var(--c-border2);color:var(--c-text2);font-size:11px;text-transform:uppercase">Hasil</th>
        </tr></thead>
        <tbody>${hasil.map(h=>`<tr>
          <td style="padding:8px 12px;border-bottom:1px solid var(--c-border);font-family:'JetBrains Mono',monospace">${h.op}</td>
          <td style="padding:8px 12px;border-bottom:1px solid var(--c-border)"><span class="badge ${h.val?'badge-green':'badge-red'}">${h.val?'True':'False'}</span></td>
        </tr>`).join('')}</tbody>
      </table>`;
  },

  // SIMULASI PASSWORD
  renderSimulasiPassword() {
    return `<div class="card" style="max-width:440px">
      <div style="font-size:11px;font-weight:700;color:var(--c-text3);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:16px">Cek Kekuatan Kata Sandi</div>
      <div class="search-wrap" style="margin-bottom:12px">
        <input type="password" id="pass-input" placeholder="Masukkan kata sandi..." oninput="Features.cekPassword()" style="padding-left:14px">
      </div>
      <div id="pass-hasil"></div>
      <div style="margin-top:16px;padding:12px;background:var(--c-surface);border-radius:7px;font-size:12.5px;line-height:1.7;color:var(--c-text2)">
        <strong style="color:var(--c-text)">Tips kata sandi kuat:</strong> minimal 8 karakter, kombinasi huruf besar, huruf kecil, angka, dan simbol.
      </div>
    </div>`;
  },

  cekPassword() {
    const pass = document.getElementById('pass-input').value;
    let skor = 0;
    const cek = [
      { label: 'Minimal 8 karakter', ok: pass.length >= 8 },
      { label: 'Huruf kecil', ok: /[a-z]/.test(pass) },
      { label: 'Huruf besar', ok: /[A-Z]/.test(pass) },
      { label: 'Angka', ok: /[0-9]/.test(pass) },
      { label: 'Simbol (!@#$%...)', ok: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass) }
    ];
    cek.forEach(c => { if (c.ok) skor++; });
    const level = skor <= 1 ? { label: 'Sangat Lemah', warna: 'var(--c-red)' } :
                  skor === 2 ? { label: 'Lemah', warna: '#f97316' } :
                  skor === 3 ? { label: 'Sedang', warna: 'var(--c-yellow)' } :
                  skor === 4 ? { label: 'Kuat', warna: 'var(--c-green)' } :
                               { label: 'Sangat Kuat', warna: 'var(--c-green)' };
    document.getElementById('pass-hasil').innerHTML = `
      <div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:13px">Kekuatan</span>
          <strong style="font-size:13px;color:${level.warna}">${level.label}</strong>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${skor*20}%;background:${level.warna}"></div></div>
      </div>
      ${cek.map(c=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;font-size:13px">
        <span style="color:${c.ok?'var(--c-green)':'var(--c-red)'};font-weight:700">${c.ok?'✓':'✗'}</span>
        <span style="color:var(--c-text)">${c.label}</span>
      </div>`).join('')}`;
  }
};
