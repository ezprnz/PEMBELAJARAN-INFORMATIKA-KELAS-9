// InformatikaKu - Quiz System
const Quiz = {
  state: { soal: [], index: 0, skor: 0, selesai: false, jawaban: [], babId: '' },

  mulai(babId) {
    const soalList = QUIZ_DATA[babId] || [];
    this.state = {
      soal: [...soalList].sort(() => Math.random() - 0.5).slice(0, Math.min(10, soalList.length)),
      index: 0, skor: 0, selesai: false, jawaban: [], babId
    };
    this.render();
  },

  jawab(idx) {
    const s = this.state;
    if (s.selesai || s.jawaban[s.index] !== undefined) return;
    const soal = s.soal[s.index];
    const benar = idx === soal.jawaban;
    s.jawaban[s.index] = idx;
    if (benar) s.skor++;

    const opts = document.querySelectorAll('.q-opt');
    opts.forEach((el, i) => {
      el.disabled = true;
      if (i === soal.jawaban) el.classList.add('ok');
      else if (i === idx && !benar) el.classList.add('no');
    });

    document.getElementById('quiz-pembahasan').innerHTML = `
      <div style="margin-top:14px;padding:13px 16px;border-radius:8px;
        border:1px solid ${benar ? 'var(--green)' : 'var(--red)'};
        background:${benar ? 'var(--greenbg)' : 'var(--redbg)'};
        font-size:14px;line-height:1.65">
        <strong style="color:${benar ? 'var(--green)' : 'var(--red)'}">
          ${benar ? '✓ Benar!' : '✗ Salah!'}
        </strong>
        &nbsp;${soal.pembahasan}
      </div>`;

    document.getElementById('quiz-next-btn').style.display = 'inline-flex';
  },

  next() {
    const s = this.state;
    if (s.index < s.soal.length - 1) {
      s.index++;
      this.render();
    } else {
      s.selesai = true;
      Progress.simpanNilai(s.babId, s.skor, s.soal.length);
      this.renderHasil();
    }
  },

  render() {
    const s = this.state;
    const soal = s.soal[s.index];
    const persen = Math.round((s.index / s.soal.length) * 100);

    document.getElementById('quiz-pilih').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-container').innerHTML = `
      <div style="max-width:600px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <span style="font-size:13px;color:var(--txt2);font-weight:600">
            Soal ${s.index + 1} dari ${s.soal.length}
          </span>
          <span style="font-size:12px;font-weight:700;color:var(--txt3)">
            Skor: ${s.skor}
          </span>
        </div>
        <div class="pbar" style="margin-bottom:20px">
          <div class="pfill" style="width:${persen}%"></div>
        </div>
        <div style="font-size:15px;font-weight:600;color:var(--txt1);margin-bottom:18px;line-height:1.65">
          ${soal.soal}
        </div>
        <div id="quiz-options">
          ${soal.opsi
            ? soal.opsi.map((p, i) => `<button class="q-opt" onclick="Quiz.jawab(${i})">${String.fromCharCode(65 + i)}. ${p}</button>`).join('')
            : (soal.pilihan || []).map((p, i) => `<button class="q-opt" onclick="Quiz.jawab(${i})">${String.fromCharCode(65 + i)}. ${p}</button>`).join('')
          }
        </div>
        <div id="quiz-pembahasan"></div>
        <button id="quiz-next-btn" class="btn btn-primary btn-sm"
          style="display:none;margin-top:16px"
          onclick="Quiz.next()">
          ${s.index < s.soal.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
        </button>
      </div>`;
    lucide.createIcons();
  },

  renderHasil() {
    const s = this.state;
    const persen = Math.round((s.skor / s.soal.length) * 100);
    const pesan = persen >= 80
      ? '🎉 Luar biasa! Kamu menguasai materi ini dengan sangat baik.'
      : persen >= 60
      ? '👍 Bagus! Terus belajar untuk hasil yang lebih baik.'
      : '📚 Jangan menyerah! Pelajari kembali materinya dan coba lagi.';
    const warna = persen >= 80 ? 'var(--green)' : persen >= 60 ? 'var(--amber)' : 'var(--red)';

    document.getElementById('quiz-container').innerHTML = `
      <div style="padding:32px 0;max-width:480px">
        <div style="font-size:56px;font-weight:800;letter-spacing:-2px;color:${warna};margin-bottom:6px;line-height:1">
          ${persen}%
        </div>
        <div style="font-size:14px;color:var(--txt2);margin-bottom:6px;font-weight:500">
          ${s.skor} dari ${s.soal.length} soal benar
        </div>
        <div style="font-size:15px;color:var(--txt1);margin-bottom:28px;line-height:1.6">
          ${pesan}
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn-primary btn-sm" onclick="Quiz.ulangi()">Ulangi Kuis</button>
          <button class="btn btn-line btn-sm" onclick="Quiz.kembali()">Pilih Kuis Lain</button>
        </div>
      </div>`;
  },

  ulangi() {
    this.mulai(this.state.babId);
  },

  kembali() {
    document.getElementById('quiz-pilih').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-pilih').innerHTML = this.renderPilihBab();
    lucide.createIcons();
  },

  renderPilihBab() {
    const babs = Object.values(MATERI_DATA);
    return `<div class="bab-list">
      ${babs.map((b, i) => {
        const nilai = Progress.getNilai(b.id);
        const jml = QUIZ_DATA[b.id]?.length || 0;
        return `<div class="bab-row" onclick="Quiz.mulai('${b.id}')">
          <div class="bab-info">
            <div class="bab-name">Bab ${i + 1} — ${b.judul}</div>
            <div class="bab-sub-count">${jml} soal tersedia</div>
          </div>
          ${nilai
            ? `<span class="badge b-green">Terbaik: ${nilai.persen}%</span>`
            : '<span class="badge b-gray">Belum dikerjakan</span>'}
          <i data-lucide="chevron-right" class="bab-arrow" style="width:15px;height:15px"></i>
        </div>`;
      }).join('')}
      <div class="bab-row" onclick="Quiz.mulai('evaluasi')">
        <div class="bab-info">
          <div class="bab-name">⭐ Evaluasi Akhir</div>
          <div class="bab-sub-count">${QUIZ_DATA.evaluasi?.length || 0} soal dari semua bab</div>
        </div>
        ${Progress.getNilai('evaluasi')
          ? `<span class="badge b-blue">Terbaik: ${Progress.getNilai('evaluasi').persen}%</span>`
          : '<span class="badge b-gray">Belum dikerjakan</span>'}
        <i data-lucide="chevron-right" class="bab-arrow" style="width:15px;height:15px"></i>
      </div>
    </div>`;
  }
};
