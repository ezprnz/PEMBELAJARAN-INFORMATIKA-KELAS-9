// InformatikaKu - Progress Manager
const Progress = {
  key: 'informatikaku_progress',

  get() {
    const d = localStorage.getItem(this.key);
    if (d) return JSON.parse(d);
    return { selesai: {}, nilaiKuis: {}, poin: 0, badges: [] };
  },

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },

  tandaiSelesai(subId) {
    const d = this.get();
    if (!d.selesai[subId]) {
      d.selesai[subId] = true;
      d.poin = (d.poin || 0) + 10;
      this.save(d);
      this.cekBadge();
    }
  },

  sudahSelesai(subId) {
    return !!this.get().selesai[subId];
  },

  simpanNilai(babId, nilai, total) {
    const d = this.get();
    const persen = Math.round((nilai / total) * 100);
    if (!d.nilaiKuis[babId] || persen > d.nilaiKuis[babId].persen) {
      d.nilaiKuis[babId] = { nilai, total, persen, waktu: new Date().toLocaleDateString('id-ID') };
      d.poin = (d.poin || 0) + Math.round(persen / 10);
    }
    this.save(d);
    this.cekBadge();
  },

  getNilai(babId) {
    return this.get().nilaiKuis[babId] || null;
  },

  getPersenBab(babId) {
    const bab = MATERI_DATA[babId];
    if (!bab) return 0;
    const d = this.get();
    const total = bab.submateri.length;
    const selesai = bab.submateri.filter(s => d.selesai[s.id]).length;
    return total > 0 ? Math.round((selesai / total) * 100) : 0;
  },

  getPersenTotal() {
    const semua = Object.values(MATERI_DATA).flatMap(b => b.submateri);
    const d = this.get();
    const selesai = semua.filter(s => d.selesai[s.id]).length;
    return semua.length > 0 ? Math.round((selesai / semua.length) * 100) : 0;
  },

  cekBadge() {
    const d = this.get();
    const badges = d.badges || [];
    const persen = this.getPersenTotal();
    const daftarBadge = [
      { id: 'mulai', label: '🚀 Pemula', syarat: () => Object.keys(d.selesai).length >= 1 },
      { id: 'bab1', label: '🧠 Ahli Logika', syarat: () => this.getPersenBab('bab1') === 100 },
      { id: 'bab2', label: '💻 Kreator Digital', syarat: () => this.getPersenBab('bab2') === 100 },
      { id: 'bab3', label: '🖥️ Teknisi Komputer', syarat: () => this.getPersenBab('bab3') === 100 },
      { id: 'bab4', label: '🌐 Netizen Bijak', syarat: () => this.getPersenBab('bab4') === 100 },
      { id: 'setengah', label: '⭐ Setengah Jalan', syarat: () => persen >= 50 },
      { id: 'selesai', label: '🏆 Master Informatika', syarat: () => persen === 100 },
      { id: 'kuis100', label: '💯 Nilai Sempurna', syarat: () => Object.values(d.nilaiKuis || {}).some(n => n.persen === 100) }
    ];
    let berubah = false;
    daftarBadge.forEach(b => {
      if (!badges.includes(b.id) && b.syarat()) {
        badges.push(b.id);
        berubah = true;
      }
    });
    if (berubah) { d.badges = badges; this.save(d); }
    return badges;
  },

  getBadgeList() {
    const d = this.get();
    const badges = d.badges || [];
    return [
      { id: 'mulai', label: '🚀 Pemula', desc: 'Selesaikan 1 materi', unlocked: badges.includes('mulai') },
      { id: 'bab1', label: '🧠 Ahli Logika', desc: 'Selesaikan semua materi Bab 1', unlocked: badges.includes('bab1') },
      { id: 'bab2', label: '💻 Kreator Digital', desc: 'Selesaikan semua materi Bab 2', unlocked: badges.includes('bab2') },
      { id: 'bab3', label: '🖥️ Teknisi Komputer', desc: 'Selesaikan semua materi Bab 3', unlocked: badges.includes('bab3') },
      { id: 'bab4', label: '🌐 Netizen Bijak', desc: 'Selesaikan semua materi Bab 4', unlocked: badges.includes('bab4') },
      { id: 'setengah', label: '⭐ Setengah Jalan', desc: 'Selesaikan 50% materi', unlocked: badges.includes('setengah') },
      { id: 'selesai', label: '🏆 Master Informatika', desc: 'Selesaikan semua materi', unlocked: badges.includes('selesai') },
      { id: 'kuis100', label: '💯 Nilai Sempurna', desc: 'Raih nilai 100 di kuis manapun', unlocked: badges.includes('kuis100') }
    ];
  },

  reset() {
    localStorage.removeItem(this.key);
  },

  // Catatan belajar
  keyNotes: 'informatikaku_notes',
  getNotes() {
    const d = localStorage.getItem(this.keyNotes);
    return d ? JSON.parse(d) : [];
  },
  saveNote(teks) {
    const notes = this.getNotes();
    notes.unshift({ id: Date.now(), teks, waktu: new Date().toLocaleString('id-ID') });
    localStorage.setItem(this.keyNotes, JSON.stringify(notes));
  },
  deleteNote(id) {
    const notes = this.getNotes().filter(n => n.id !== id);
    localStorage.setItem(this.keyNotes, JSON.stringify(notes));
  }
};
