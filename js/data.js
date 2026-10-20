// InformatikaKu - Data Materi & Bank Soal
const MATERI_DATA = {
  bab1: {
    id: 'bab1',
    judul: 'Berpikir Komputasi',
    icon: '🧠',
    warna: 'blue',
    deskripsi: 'Pelajari cara berpikir seperti komputer: struktur data, logika, dan algoritma.',
    submateri: [
      {
        id: 'bab1a',
        judul: 'Struktur Data',
        icon: '📦',
        konten: `
<h2>A. Struktur Data</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami pengertian, jenis, dan penerapan struktur data dalam kehidupan sehari-hari serta dalam pemrograman dasar.</div>

<h3>Pengertian Struktur Data</h3>
<p>Struktur data adalah cara mengorganisasi, menyimpan, dan mengelola data di dalam komputer agar dapat diakses dan diproses secara efisien. Pemilihan struktur data yang tepat sangat mempengaruhi kecepatan dan efisiensi sebuah program.</p>
<p>Bayangkan kamu punya 1000 kontak di HP. Jika tersimpan acak, kamu perlu waktu lama untuk menemukan satu nama. Tapi jika disusun alfabetis (terstruktur), pencarian jadi cepat. Itulah fungsi struktur data — bukan sekadar menyimpan data, tapi menyimpannya dengan cara yang <em>cerdas</em>.</p>

<h3>Mengapa Struktur Data Penting di Era Aplikasi Modern?</h3>
<p>Setiap aplikasi yang kamu pakai sehari-hari — mulai dari TikTok, Instagram, Shopee, hingga game Mobile Legends — semuanya menggunakan struktur data di balik layar. Tanpa struktur data yang tepat, fitur "For You Page" di TikTok tidak bisa memuat ratusan video dengan cepat, fitur pencarian di Shopee tidak bisa menemukan produk dari jutaan pilihan dalam hitungan detik, dan game online tidak bisa mengelola ratusan pemain secara bersamaan.</p>
<p>Di dunia nyata, programmer memilih struktur data berdasarkan kebutuhan: seberapa cepat data perlu diakses, seberapa sering data berubah, dan seberapa besar memori yang tersedia. Keputusan ini sangat menentukan apakah sebuah aplikasi terasa cepat atau lambat bagi penggunanya.</p>
<ul>
<li>Mempercepat proses pencarian dan pengolahan data</li>
<li>Menghemat penggunaan memori komputer</li>
<li>Membuat program lebih terorganisir dan mudah dipahami</li>
<li>Menjadi fondasi pembuatan algoritma yang efisien</li>
<li>Digunakan di semua aplikasi: dari game, media sosial, hingga sistem perbankan</li>
</ul>

<h3>Jenis-Jenis Struktur Data Dasar</h3>
<p>Terdapat beberapa jenis struktur data yang paling sering digunakan dalam pemrograman. Masing-masing memiliki kelebihan dan kasus penggunaan yang berbeda. Berikut penjelasan lengkap setiap jenisnya.</p>

<h3>1. Array (Larik)</h3>
<p>Array adalah kumpulan data bertipe sama yang disimpan secara berurutan di memori dan diakses menggunakan indeks. Indeks array selalu dimulai dari angka <strong>0</strong>, bukan 1. Artinya, elemen pertama ada di posisi indeks ke-0, elemen kedua di indeks ke-1, dan seterusnya.</p>
<p>Bayangkan array seperti daftar kontak di HP kamu. Kontak pertama ada di posisi 0, kontak kedua di posisi 1, dan seterusnya. Kamu bisa langsung mengakses kontak di posisi mana saja tanpa harus membaca dari awal.</p>
<div class="info-box"><strong>Contoh Array — Daftar Kontak HP:</strong><br><code>kontak = ["Ayah", "Bunda", "Adik", "Guru", "Teman"]</code><br>kontak[0] = "Ayah" &nbsp;|&nbsp; kontak[2] = "Adik" &nbsp;|&nbsp; kontak[4] = "Teman"<br><br><strong>Contoh nyata lain:</strong> Daftar nilai 40 siswa, playlist lagu di Spotify, daftar harga menu di GoFood.</div>
<p><strong>Kelebihan:</strong> Akses data sangat cepat karena langsung pakai indeks. <strong>Kekurangan:</strong> Ukurannya tetap saat dibuat, dan sulit menambah atau menghapus data di tengah.</p>

<h3>2. List (Daftar Dinamis)</h3>
<p>List mirip array, tapi ukurannya <strong>dinamis</strong> — bisa bertambah dan berkurang sesuai kebutuhan tanpa harus menentukan ukuran dari awal. List juga bisa menyimpan tipe data yang berbeda dalam satu wadah.</p>
<p>List cocok digunakan saat kamu tidak tahu pasti berapa banyak data yang akan disimpan. Misalnya, daftar anggota grup WhatsApp yang bisa bertambah atau berkurang kapan saja.</p>
<div class="info-box"><strong>Contoh List — Anggota Grup WhatsApp:</strong><br><code>anggota = ["Budi", "Ani", "Citra", "Dian"]</code><br>Tambah anggota: anggota.append("Eko")<br>Hapus anggota: anggota.remove("Ani")<br><br><strong>Hasilnya:</strong> ["Budi", "Citra", "Dian", "Eko"]</div>

<h3>3. Stack (Tumpukan)</h3>
<p>Stack bekerja dengan prinsip <strong>LIFO — Last In, First Out</strong>. Data yang terakhir masuk adalah yang pertama keluar, persis seperti tumpukan buku di meja. Buku yang paling terakhir kamu taruh di atas tumpukan adalah yang paling mudah diambil.</p>
<p>Di dunia nyata, Stack hadir dalam banyak fitur yang kamu pakai setiap hari tanpa sadar. Setiap kali kamu menekan Ctrl+Z di dokumen Word, komputer mengambil aksi terakhirmu dari sebuah Stack dan membatalkannya. Makin banyak kali kamu tekan Ctrl+Z, makin banyak aksi yang di-pop dari Stack.</p>
<p>Berikut operasi-operasi utama pada Stack:</p>
<table>
<thead><tr><th>Operasi</th><th>Fungsi</th><th>Analogi Sehari-hari</th></tr></thead>
<tbody>
<tr><td>Push</td><td>Memasukkan data ke tumpukan paling atas</td><td>Naruh buku baru di atas tumpukan</td></tr>
<tr><td>Pop</td><td>Mengeluarkan data dari posisi paling atas</td><td>Ambil buku paling atas</td></tr>
<tr><td>Peek/Top</td><td>Melihat data teratas tanpa menghapusnya</td><td>Lihat judul buku paling atas tanpa mengambilnya</td></tr>
<tr><td>isEmpty</td><td>Memeriksa apakah stack dalam keadaan kosong</td><td>Apakah tumpukan buku sudah habis?</td></tr>
</tbody>
</table>
<div class="info-box"><strong>Contoh nyata Stack dalam aplikasi:</strong><br>• <strong>Ctrl+Z (Undo)</strong> di Word/Photoshop — setiap ketikan atau edit tersimpan di Stack, Ctrl+Z mem-pop satu per satu<br>• <strong>Tombol Back di browser</strong> — halaman yang terakhir dikunjungi disimpan di Stack, klik Back = Pop<br>• <strong>Riwayat navigasi di Instagram</strong> — setiap profil yang kamu kunjungi masuk Stack, tombol kembali mengambil yang terakhir<br>• <strong>Undo di CapCut</strong> — setiap edit video tersimpan di Stack sehingga bisa dibatalkan satu per satu</div>

<h3>4. Queue (Antrian)</h3>
<p>Queue bekerja dengan prinsip <strong>FIFO — First In, First Out</strong>. Data yang pertama masuk adalah yang pertama keluar, seperti antrian di kasir minimarket atau loket bank. Orang yang datang lebih dulu dilayani lebih dulu — fair dan teratur.</p>
<p>Queue sangat penting di sistem yang harus menangani banyak permintaan secara berurutan dan adil. Sistem antrian online tiket konser, misalnya, menggunakan Queue agar pembeli yang masuk lebih awal mendapat kesempatan membeli lebih dulu.</p>
<p>Berikut operasi-operasi utama pada Queue:</p>
<table>
<thead><tr><th>Operasi</th><th>Fungsi</th><th>Analogi Antrian</th></tr></thead>
<tbody>
<tr><td>Enqueue</td><td>Memasukkan data ke belakang antrian</td><td>Orang baru masuk antrian dari belakang</td></tr>
<tr><td>Dequeue</td><td>Mengeluarkan data dari depan antrian</td><td>Orang paling depan selesai dilayani dan keluar</td></tr>
<tr><td>Front</td><td>Melihat data paling depan tanpa menghapus</td><td>Siapa yang paling depan dalam antrian?</td></tr>
<tr><td>isEmpty</td><td>Memeriksa apakah antrian sudah kosong</td><td>Masih ada orang yang antri?</td></tr>
</tbody>
</table>
<div class="info-box"><strong>Contoh nyata Queue dalam kehidupan digital:</strong><br>• <strong>Antrian cetak printer</strong> — dokumen yang dikirim pertama dicetak lebih dulu<br>• <strong>Buffer video YouTube/Netflix</strong> — data video yang diunduh lebih awal diputar lebih dulu<br>• <strong>Notifikasi HP yang menunggu</strong> — notif pertama yang masuk ditampilkan pertama<br>• <strong>Antrian chat customer service Tokopedia</strong> — pelanggan yang menghubungi lebih awal dilayani lebih dulu</div>

<h3>5. Tree (Pohon)</h3>
<p>Tree adalah struktur data hierarkis yang menyerupai pohon terbalik. Ada satu <strong>root</strong> (akar) di bagian paling atas, lalu bercabang ke bawah membentuk <strong>node-node</strong> anak. Setiap node bisa punya beberapa anak, tapi setiap anak hanya punya satu induk (parent).</p>
<p>Tree sangat cocok untuk menyimpan data yang memiliki hubungan hierarki atau berjenjang. Marketplace seperti Shopee dan Tokopedia menggunakan Tree untuk sistem kategori produknya: dari "Semua Kategori" di root, bercabang ke "Fashion", "Elektronik", "Makanan", dan seterusnya. Di bawah "Elektronik" ada cabang "HP dan Tablet", "Laptop", "Aksesoris", dan masing-masing masih bercabang lagi ke sub-kategori yang lebih spesifik.</p>
<div class="info-box"><strong>Contoh nyata Tree:</strong><br>• <strong>Struktur folder</strong> di komputer: C: &rarr; Users &rarr; Nama &rarr; Documents &rarr; Sekolah<br>• <strong>Kategori di Shopee/Tokopedia</strong>: Semua &rarr; Elektronik &rarr; HP &rarr; Samsung<br>• <strong>Struktur organisasi sekolah</strong>: Kepala Sekolah &rarr; Wakasek &rarr; Guru &rarr; Siswa<br>• <strong>Komentar berjenjang di YouTube</strong>: Komentar utama &rarr; Balasan komentar &rarr; Balasan dari balasan</div>

<h3>Perbandingan Lengkap Struktur Data</h3>
<p>Setiap struktur data memiliki kekuatan masing-masing. Tabel berikut membantu kamu memilih struktur data yang tepat sesuai kebutuhan, termasuk contoh nyata di aplikasi yang sering kamu pakai.</p>
<table>
<thead><tr><th>Struktur Data</th><th>Prinsip Kerja</th><th>Kelebihan</th><th>Kekurangan</th><th>Contoh di Aplikasi Populer</th></tr></thead>
<tbody>
<tr><td>Array</td><td>Indeks urut, ukuran tetap</td><td>Akses data sangat cepat via indeks</td><td>Ukuran tidak bisa diubah</td><td>Daftar lagu di Spotify playlist, papan skor game</td></tr>
<tr><td>List</td><td>Dinamis, bisa berubah ukuran</td><td>Fleksibel, mudah tambah/hapus</td><td>Akses lebih lambat dari Array</td><td>Keranjang belanja Shopee, daftar anggota grup WA</td></tr>
<tr><td>Stack</td><td>LIFO — terakhir masuk, pertama keluar</td><td>Sempurna untuk fitur undo/redo</td><td>Hanya bisa akses data teratas</td><td>Ctrl+Z di Word, tombol Back di Chrome</td></tr>
<tr><td>Queue</td><td>FIFO — pertama masuk, pertama keluar</td><td>Menjamin urutan yang adil</td><td>Hanya bisa akses data terdepan</td><td>Buffer YouTube, antrian notifikasi HP</td></tr>
<tr><td>Tree</td><td>Hierarki bercabang dari root</td><td>Cocok untuk data berjenjang</td><td>Lebih kompleks untuk diimplementasikan</td><td>Kategori Tokopedia, struktur folder Windows</td></tr>
</tbody>
</table>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Sebutkan 3 contoh penggunaan Stack dalam aplikasi smartphone yang kamu gunakan sehari-hari! Jelaskan mengapa masing-masing menggunakan Stack.<br>2. Jelaskan perbedaan Array dan List. Kapan sebaiknya menggunakan Array dan kapan menggunakan List? Berikan masing-masing satu contoh kasus nyata.<br>3. Aplikasi streaming musik membutuhkan fitur "play next" (diputar setelah lagu ini selesai). Struktur data apa yang paling tepat? Jelaskan alasanmu!<br>4. Gambarkan struktur Tree dari kategori produk di marketplace (minimal 3 tingkat dengan 2 cabang di setiap tingkat)!<br>5. Mengapa prinsip FIFO pada Queue dianggap "adil"? Berikan contoh situasi nyata di mana jika tidak menggunakan FIFO, sistem menjadi tidak adil!</div>`
      },
      {
        id: 'bab1b',
        judul: 'Ekspresi dan Operasi Logika',
        icon: '⚡',
        konten: `
<h2>B. Ekspresi dan Operasi Logika</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami ekspresi logika, operator perbandingan, operator logika, dan menerapkannya dalam situasi nyata.</div>

<h3>Apa itu Ekspresi Logika?</h3>
<p>Ekspresi logika adalah pernyataan yang hanya menghasilkan dua kemungkinan nilai: <strong>BENAR (True/1)</strong> atau <strong>SALAH (False/0)</strong>. Komputer menggunakan ekspresi logika untuk setiap keputusan yang dibuatnya — mulai dari hal sekecil "apakah baterai sudah penuh?" hingga hal sebesar "apakah transaksi perbankan ini aman?"</p>
<p>Logika bukan hanya milik komputer. Dalam kehidupan sehari-hari, kamu selalu menggunakan logika tanpa sadar. Saat hujan deras, otakmu berpikir: "Apakah saya bawa payung?" — True atau False. Berdasarkan jawaban itu, kamu memutuskan tindakan berbeda. Inilah yang juga dilakukan komputer, hanya jauh lebih cepat dan untuk jutaan kondisi sekaligus.</p>

<h3>Operator Perbandingan</h3>
<p>Operator perbandingan digunakan untuk membandingkan dua nilai dan menghasilkan True atau False. Hasil inilah yang kemudian digunakan untuk membuat keputusan di dalam program.</p>
<table>
<thead><tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th><th>Contoh Nyata di Aplikasi</th></tr></thead>
<tbody>
<tr><td>==</td><td>Sama dengan</td><td>5 == 5</td><td>True</td><td>Password yang diketik == password tersimpan &rarr; login berhasil</td></tr>
<tr><td>!=</td><td>Tidak sama dengan</td><td>5 != 3</td><td>True</td><td>Username != "admin" &rarr; tolak akses halaman admin</td></tr>
<tr><td>&gt;</td><td>Lebih besar dari</td><td>7 &gt; 3</td><td>True</td><td>Usia &gt; 17 &rarr; boleh membuat SIM</td></tr>
<tr><td>&lt;</td><td>Lebih kecil dari</td><td>2 &lt; 8</td><td>True</td><td>Stok &lt; 5 &rarr; tampilkan label "hampir habis" di Shopee</td></tr>
<tr><td>&gt;=</td><td>Lebih besar atau sama</td><td>75 &gt;= 75</td><td>True</td><td>Nilai &gt;= 75 &rarr; siswa dinyatakan lulus</td></tr>
<tr><td>&lt;=</td><td>Lebih kecil atau sama</td><td>3 &lt;= 4</td><td>True</td><td>Berat paket &lt;= 20kg &rarr; bisa kirim dengan tarif reguler</td></tr>
</tbody>
</table>

<h3>Operator Logika</h3>
<p>Operator logika menggabungkan beberapa ekspresi perbandingan menjadi satu keputusan yang lebih kompleks. Ada tiga operator logika dasar: AND, OR, dan NOT.</p>

<h3>1. AND (Dan) — Semua kondisi harus benar</h3>
<p>Operator AND menghasilkan True <strong>hanya jika SEMUA kondisi bernilai True</strong>. Jika salah satu saja bernilai False, maka seluruh ekspresi menjadi False. AND cocok digunakan saat kamu butuh semua syarat terpenuhi sekaligus.</p>
<p>Bayangkan sistem login Instagram. Kamu bisa masuk hanya jika username benar DAN password benar DAN akun tidak diblokir. Ketiga syarat itu harus terpenuhi bersamaan. Jika salah satu saja salah, login gagal.</p>
<div class="info-box"><strong>Contoh AND dalam aplikasi sehari-hari:</strong><br>• Login Instagram: username benar AND password benar AND akun aktif &rarr; masuk berhasil<br>• Transfer bank: saldo cukup AND PIN benar AND rekening tujuan valid &rarr; transfer berhasil<br>• Game Mobile Legends: nyawa &gt; 0 AND waktu belum habis AND tidak disconnect &rarr; game lanjut<br>• Tiket konser gratis: pelajar AND belum pernah dapat tiket AND daftar sebelum kuota habis</div>

<h3>2. OR (Atau) — Cukup satu kondisi yang benar</h3>
<p>Operator OR menghasilkan True jika <strong>SETIDAKNYA SATU kondisi bernilai True</strong>. Hanya menghasilkan False jika semua kondisi False. OR cocok digunakan saat ada beberapa cara berbeda untuk memenuhi syarat.</p>
<p>Contoh: notifikasi HP berbunyi jika ada pesan masuk OR ada alarm OR ada panggilan masuk. Cukup satu dari ketiga kondisi itu yang True, HP sudah berbunyi.</p>
<div class="info-box"><strong>Contoh OR dalam aplikasi sehari-hari:</strong><br>• Login Tokopedia: pakai email OR pakai nomor HP OR pakai akun Google<br>• Notifikasi HP bunyi: ada pesan WA OR ada alarm OR ada panggilan masuk<br>• Sekolah libur: hari Sabtu OR hari Minggu OR hari libur nasional<br>• Alarm keamanan bunyi: sensor gerak aktif OR pintu terbuka paksa OR tombol darurat ditekan</div>

<h3>3. NOT (Bukan) — Membalik nilai logika</h3>
<p>Operator NOT membalik nilai logika: True menjadi False, dan False menjadi True. NOT digunakan saat kamu ingin bertindak ketika sesuatu <em>tidak</em> terjadi.</p>
<p>Fitur "Do Not Disturb" di HP menggunakan logika NOT. HP akan memblokir semua notifikasi JIKA NOT (mode darurat aktif) — artinya, selama mode darurat tidak aktif, semua notif diblokir. Begitu mode darurat aktif, NOT menghasilkan False, sehingga blokir dihentikan dan notifikasi penting bisa masuk.</p>
<div class="info-box"><strong>Contoh NOT dalam aplikasi sehari-hari:</strong><br>• Mode Do Not Disturb: blokir notif JIKA NOT (kontak VIP)<br>• Tampilkan iklan JIKA NOT (pengguna berlangganan premium)<br>• Kunci layar aktif JIKA NOT (ada aktivitas selama 30 detik)<br>• Video diputar JIKA NOT (koneksi internet terputus)</div>

<h3>Tabel Kebenaran Lengkap</h3>
<p>Tabel kebenaran (truth table) menunjukkan semua kemungkinan hasil dari setiap kombinasi nilai A dan B untuk ketiga operator logika. Ini adalah alat fundamental dalam logika digital dan pemrograman.</p>
<table>
<thead><tr><th>A</th><th>B</th><th>A AND B</th><th>A OR B</th><th>NOT A</th><th>NOT B</th></tr></thead>
<tbody>
<tr><td>True</td><td>True</td><td>True</td><td>True</td><td>False</td><td>False</td></tr>
<tr><td>True</td><td>False</td><td>False</td><td>True</td><td>False</td><td>True</td></tr>
<tr><td>False</td><td>True</td><td>False</td><td>True</td><td>True</td><td>False</td></tr>
<tr><td>False</td><td>False</td><td>False</td><td>False</td><td>True</td><td>True</td></tr>
</tbody>
</table>

<h3>Kombinasi Operator Logika</h3>
<p>Dalam dunia nyata, kondisi sering kali lebih kompleks dan membutuhkan kombinasi dari beberapa operator logika sekaligus. Urutan evaluasi: NOT dikerjakan lebih dulu, lalu AND, baru OR — mirip perkalian sebelum penjumlahan dalam matematika.</p>
<div class="info-box"><strong>Contoh Kombinasi dalam Aplikasi Nyata:</strong><br>Sistem absensi sekolah:<br>siswa "hadir" JIKA (waktu masuk &gt;= 07:00) AND (waktu masuk &lt;= 07:30) AND NOT (hari libur)<br><br>Promo Shopee — dapat diskon 50%:<br>dapat diskon JIKA (member Gold AND total belanja &gt;= 100.000) OR (punya kode promo valid)</div>

<h3>Penerapan Ekspresi Logika dalam Pemrograman</h3>
<p>Berikut contoh bagaimana ekspresi logika digunakan dalam program yang kamu pakai sehari-hari:</p>
<table>
<thead><tr><th>Situasi Program</th><th>Ekspresi Logika yang Digunakan</th></tr></thead>
<tbody>
<tr><td>Cek login akun</td><td>username == "siswa" AND password == "pass123"</td></tr>
<tr><td>Nilai lulus ujian</td><td>nilaiUTS &gt;= 70 AND nilaiUAS &gt;= 70</td></tr>
<tr><td>Akses konten 17+</td><td>usia &gt;= 17 OR sudahVerifikasi == True</td></tr>
<tr><td>Mode gelap otomatis</td><td>jam &gt;= 19 OR jam &lt;= 6</td></tr>
<tr><td>Tampilkan tombol Admin</td><td>isLoggedIn AND (role == "admin" OR role == "guru")</td></tr>
</tbody>
</table>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Tentukan nilai True/False dari ekspresi berikut, jelaskan langkah demi langkah: (10 &gt; 5) AND (3 &lt; 2)<br>2. Buatlah ekspresi logika lengkap untuk kondisi: "Siswa mendapat beasiswa JIKA nilai rata-rata di atas 85 DAN tidak pernah absen DAN bukan penerima bantuan dari program lain"<br>3. Aplikasi ojek online menampilkan driver terdekat. Sebutkan minimal 4 kondisi (ekspresi logika) yang harus True agar driver tersebut muncul di daftar pencarianmu!<br>4. Jelaskan dengan kata-katamu sendiri perbedaan AND dan OR. Berikan masing-masing satu contoh situasi nyata di mana kamu akan memilih AND dan satu situasi untuk OR.<br>5. Hitung hasil dari NOT (True AND False) secara bertahap. Tulis urutannya: langkah 1, langkah 2, dan hasil akhir!</div>`
      },
      {
        id: 'bab1c',
        judul: 'Algoritma',
        icon: '🔄',
        konten: `
<h2>C. Algoritma</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami konsep algoritma, menyusun algoritma dalam berbagai bentuk representasi, dan menganalisis efisiensi algoritma sederhana.</div>

<h3>Apa itu Algoritma?</h3>
<p>Algoritma adalah <strong>urutan langkah-langkah yang logis, sistematis, terbatas, dan jelas</strong> untuk menyelesaikan suatu masalah. Setiap langkah harus spesifik, dapat dilaksanakan, dan menghasilkan output yang jelas.</p>
<p>Kata "algoritma" berasal dari nama ilmuwan Arab abad ke-9: <strong>Muhammad ibn Musa al-Khwarizmi</strong>. Beliau adalah matematikawan dari Baghdad (sekarang Irak) yang hidup sekitar tahun 780-850 Masehi. Bukunya yang berjudul "Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala" menjadi dasar ilmu aljabar. Nama al-Khwarizmi kemudian diterjemahkan ke Latin menjadi "Algoritmi", dan dari situlah kata "algoritma" berasal. Jadi setiap kali kamu menyebut kata algoritma, kamu sebenarnya sedang menghormati seorang ilmuwan Muslim dari 1200 tahun yang lalu!</p>

<h3>5 Ciri Algoritma yang Baik</h3>
<p>Tidak semua urutan langkah bisa disebut algoritma. Ada lima ciri yang harus dipenuhi agar suatu prosedur layak disebut algoritma yang baik:</p>
<table>
<thead><tr><th>Ciri</th><th>Penjelasan</th><th>Contoh pada Resep Masak</th></tr></thead>
<tbody>
<tr><td>Finiteness (Terbatas)</td><td>Harus berhenti setelah sejumlah langkah yang terbatas</td><td>Resep masak pasti punya langkah terakhir "Sajikan"</td></tr>
<tr><td>Definiteness (Pasti)</td><td>Setiap langkah harus jelas dan tidak ambigu</td><td>"Tambahkan garam secukupnya" terlalu ambigu — "1/2 sendok teh" lebih baik</td></tr>
<tr><td>Input</td><td>Ada data masukan (nol atau lebih)</td><td>Resep butuh bahan-bahan sebagai masukan</td></tr>
<tr><td>Output</td><td>Ada minimal satu hasil keluaran yang jelas</td><td>Resep menghasilkan makanan jadi</td></tr>
<tr><td>Effectiveness (Efektif)</td><td>Setiap langkah harus bisa dilaksanakan</td><td>Setiap instruksi dapat dikerjakan oleh manusia atau komputer</td></tr>
</tbody>
</table>

<h3>Struktur Dasar Algoritma</h3>
<p>Semua algoritma di dunia, seberapapun kompleksnya, tersusun dari tiga struktur dasar berikut ini. Memahami ketiganya adalah fondasi utama untuk belajar pemrograman.</p>

<h3>1. Sequence (Urutan)</h3>
<p>Langkah dikerjakan satu per satu dari atas ke bawah secara berurutan. Tidak ada percabangan, tidak ada pengulangan — setiap langkah pasti dikerjakan tepat satu kali.</p>
<p>Contoh sederhana: proses charging HP. Langkahnya selalu berurutan — colok kabel, layar menyala menampilkan ikon charging, persentase baterai naik satu per satu, lalu notifikasi "Charging complete" muncul ketika penuh. Urutan ini tidak bisa dibalik.</p>
<div class="info-box"><strong>Contoh Sequence — Proses Charging HP:</strong><br>1. Hubungkan kabel charger ke adaptor<br>2. Colokkan adaptor ke stopkontak<br>3. Hubungkan kabel ke port HP<br>4. HP mendeteksi arus listrik masuk<br>5. Layar menampilkan ikon baterai sedang mengisi<br>6. Persentase baterai bertambah secara bertahap<br>7. Saat 100%, tampilkan notifikasi "Baterai penuh"</div>

<h3>2. Selection (Percabangan)</h3>
<p>Program memilih jalur yang berbeda berdasarkan kondisi. Ada satu titik keputusan (decision point) — jika kondisi True maka kerjakan A, jika False maka kerjakan B. Ini membuat program bisa "pintar" dan merespons situasi yang berbeda secara berbeda.</p>
<p>Contoh: fitur notifikasi baterai lemah di HP. Sistem terus memeriksa level baterai. Jika baterai lebih dari 20%, tidak ada notifikasi. Jika baterai 20% atau kurang, tampilkan peringatan. Jika baterai 5% atau kurang, aktifkan mode hemat daya otomatis. Inilah Selection bertingkat.</p>
<div class="info-box"><strong>Contoh Selection — Notifikasi Baterai HP:</strong><br>JIKA baterai &lt;= 5% MAKA<br>&nbsp;&nbsp;&nbsp;aktifkan mode hemat daya otomatis<br>&nbsp;&nbsp;&nbsp;tampilkan "Baterai kritis!"<br>JIKA TIDAK, jika baterai &lt;= 20% MAKA<br>&nbsp;&nbsp;&nbsp;tampilkan "Baterai hampir habis"<br>JIKA TIDAK<br>&nbsp;&nbsp;&nbsp;tidak tampilkan notifikasi apapun<br>AKHIR JIKA</div>

<h3>3. Repetition (Perulangan)</h3>
<p>Langkah yang sama diulang berkali-kali selama kondisi tertentu masih terpenuhi. Ini membuat program bisa menangani tugas berulang tanpa harus menulis kode yang sama ratusan kali.</p>
<p>Contoh yang kamu lakukan setiap hari: scroll feed Instagram atau TikTok. Algoritma yang berjalan di balik layar terus mengulang proses "muat konten baru" setiap kali kamu mendekati akhir feed — ini Repetition. Aplikasi terus mengulang proses memuat, menampilkan, memuat, menampilkan — sampai kamu berhenti scrolling atau tidak ada konten baru.</p>
<div class="info-box"><strong>Contoh Repetition — Scroll Feed Instagram:</strong><br>SELAMA pengguna masih scrolling DAN ada konten tersedia LAKUKAN<br>&nbsp;&nbsp;&nbsp;Muat 10 postingan berikutnya dari server<br>&nbsp;&nbsp;&nbsp;Tampilkan postingan di layar<br>&nbsp;&nbsp;&nbsp;Catat postingan mana yang sudah dilihat<br>&nbsp;&nbsp;&nbsp;Perbarui rekomendasi konten berdasarkan interaksi<br>AKHIR SELAMA</div>

<h3>Bentuk Penyajian Algoritma</h3>
<p>Algoritma bisa dituliskan dalam berbagai bentuk tergantung audiens dan kebutuhan. Ketiga bentuk berikut masing-masing punya kelebihan tersendiri.</p>

<h3>1. Narasi (Bahasa Sehari-hari)</h3>
<p>Algoritma ditulis dalam bahasa manusia yang mudah dipahami. Cocok untuk menjelaskan alur kepada orang awam atau mendiskusikan konsep sebelum masuk ke kode.</p>
<div class="info-box"><strong>Contoh Narasi — Transfer Uang di ATM:</strong><br>1. Masukkan kartu ATM ke mesin<br>2. Pilih bahasa yang diinginkan<br>3. Masukkan PIN 4-6 digit<br>4. Pilih menu "Transfer"<br>5. Pilih jenis transfer (sesama bank / beda bank)<br>6. Masukkan nomor rekening tujuan<br>7. Masukkan jumlah uang yang akan ditransfer<br>8. Periksa dan konfirmasi detail transfer<br>9. Masukkan PIN kembali untuk otorisasi<br>10. Tunggu konfirmasi "Transfer Berhasil"<br>11. Ambil struk sebagai bukti<br>12. Keluarkan kartu ATM</div>

<h3>2. Pseudocode</h3>
<p>Menyerupai bahasa pemrograman tapi lebih mudah dibaca manusia dan tidak terikat aturan bahasa pemrograman tertentu. Pseudocode adalah jembatan antara ide dan kode program sesungguhnya.</p>
<div class="info-box"><strong>Contoh Pseudocode — Mencari Lagu Terpopuler di Playlist:</strong><br><code>MULAI<br>  BACA daftar_lagu beserta jumlah_putar masing-masing<br>  lagu_terpopuler = lagu_pertama<br>  putar_terbanyak = jumlah_putar lagu_pertama<br>  UNTUK setiap lagu di daftar_lagu LAKUKAN<br>&nbsp;&nbsp;&nbsp;&nbsp;JIKA jumlah_putar lagu ini &gt; putar_terbanyak MAKA<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lagu_terpopuler = lagu ini<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;putar_terbanyak = jumlah_putar lagu ini<br>&nbsp;&nbsp;&nbsp;&nbsp;AKHIR JIKA<br>  AKHIR UNTUK<br>  TAMPILKAN "Lagu terpopuler:", lagu_terpopuler<br>  TAMPILKAN "Diputar sebanyak:", putar_terbanyak, "kali"<br>SELESAI</code></div>

<h3>3. Flowchart (Diagram Alir)</h3>
<p>Representasi visual algoritma menggunakan simbol-simbol standar yang disepakati secara internasional (ISO). Flowchart sangat efektif untuk memahami alur program secara keseluruhan.</p>
<table>
<thead><tr><th>Simbol</th><th>Nama</th><th>Fungsi dalam Flowchart</th></tr></thead>
<tbody>
<tr><td>⬭ Oval/Kapsul</td><td>Terminal</td><td>Menandai titik MULAI dan SELESAI algoritma</td></tr>
<tr><td>▱ Jajar Genjang</td><td>Input/Output</td><td>Memasukkan data dari pengguna atau menampilkan hasil</td></tr>
<tr><td>▭ Persegi Panjang</td><td>Proses</td><td>Operasi perhitungan, penugasan variabel, atau tindakan</td></tr>
<tr><td>◇ Belah Ketupat</td><td>Keputusan</td><td>Percabangan kondisi — keluar dua jalur: Ya atau Tidak</td></tr>
<tr><td>&rarr; Panah</td><td>Alur/Flow</td><td>Menunjukkan arah aliran proses dari satu langkah ke langkah berikutnya</td></tr>
<tr><td>⬭ Lingkaran kecil</td><td>Konektor</td><td>Menghubungkan alur yang terputus karena pindah halaman</td></tr>
</tbody>
</table>

<h3>Efisiensi Algoritma: Mengapa Penting?</h3>
<p>Dua algoritma bisa menyelesaikan masalah yang sama tapi dengan cara yang sangat berbeda — dan perbedaannya bisa sangat signifikan di aplikasi nyata. Algoritma yang lebih efisien berarti aplikasi yang lebih cepat, hemat baterai, dan lebih murah untuk dioperasikan.</p>
<p>Bayangkan TikTok harus mencari satu video dari miliaran video yang ada. Jika menggunakan algoritma yang buruk (cek satu per satu), proses itu bisa memakan waktu berjam-jam. Dengan algoritma pencarian yang tepat, hasilnya muncul dalam milidetik. Di sinilah efisiensi algoritma menjadi sangat penting di dunia industri.</p>
<div class="info-box"><strong>Perbandingan Efisiensi — Mencari nama di daftar 1000 siswa:</strong><br><strong>Pencarian Linear (satu per satu):</strong><br>Cek nama ke-1, ke-2, ke-3, ... hingga ketemu — maksimal 1000 langkah<br><br><strong>Pencarian Biner (bagi dua terus):</strong><br>Daftar harus urut. Cek nama di tengah (ke-500), jika target lebih kecil cari di bagian kiri, jika lebih besar cari di kanan. Ulangi.<br>Cukup sekitar 10 langkah saja untuk 1000 data!<br><br>Di Google, perbedaan ini berarti memberikan hasil pencarian dalam 0,0001 detik vs 10 menit.</div>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Buatlah algoritma narasi minimal 10 langkah untuk "Memesan makanan lewat aplikasi GoFood mulai dari buka aplikasi sampai makanan datang"!<br>2. Tuliskan pseudocode untuk menentukan apakah suatu bilangan ganjil atau genap, kemudian tampilkan pesan yang sesuai!<br>3. Berikan masing-masing dua contoh nyata penggunaan Sequence, Selection, dan Repetition dalam aplikasi yang kamu gunakan sehari-hari (total 6 contoh)!<br>4. Mengapa flowchart lebih mudah dipahami dibandingkan pseudocode untuk orang yang belum pernah belajar pemrograman? Apa kelebihan dan kekurangan masing-masing?<br>5. Algoritma A menyelesaikan tugas dalam 50 langkah, Algoritma B dalam 20 langkah. Apakah Algoritma B selalu lebih baik? Jelaskan situasi di mana Algoritma A mungkin lebih baik!</div>`
      }
    ]
  },

  bab2: {
    id: 'bab2',
    judul: 'Teknologi Informasi dan Komunikasi',
    icon: '💻',
    warna: 'purple',
    deskripsi: 'Pelajari integrasi aplikasi perkantoran, cara membuat blog, dan vlog.',
    submateri: [
      {
        id: 'bab2a',
        judul: 'Integrasi Konten Aplikasi Perkantoran',
        icon: '📄',
        konten: `
<h2>A. Integrasi Konten Aplikasi Perkantoran</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami dan menerapkan integrasi antaraplikasi perkantoran untuk menghasilkan dokumen yang profesional dan efisien.</div>

<h3>Pengertian Integrasi Aplikasi Perkantoran</h3>
<p>Integrasi aplikasi perkantoran adalah kemampuan menggabungkan atau menghubungkan data dari satu aplikasi ke aplikasi lain sehingga pekerjaan menjadi lebih efisien. Dengan integrasi, kamu tidak perlu memasukkan data yang sama berulang kali di setiap aplikasi — cukup masukkan sekali, lalu bagikan ke aplikasi lain.</p>
<p>Bayangkan kamu membuat laporan nilai kelas. Data nilai ada di Excel, perlu ditampilkan sebagai grafik, lalu dimasukkan ke dokumen Word, dan terakhir dipresentasikan di PowerPoint. Tanpa integrasi, kamu harus membuat ulang grafik di setiap aplikasi. Dengan integrasi yang benar, cukup buat sekali di Excel, lalu sambungkan ke Word dan PowerPoint secara otomatis.</p>

<h3>Jenis Aplikasi Perkantoran</h3>
<p>Ada empat jenis aplikasi perkantoran utama yang saling melengkapi. Masing-masing memiliki kekuatan berbeda dan dapat saling berbagi data.</p>
<table>
<thead><tr><th>Jenis Aplikasi</th><th>Fungsi Utama</th><th>Versi Gratis</th><th>Versi Berbayar</th></tr></thead>
<tbody>
<tr><td>Pengolah Kata</td><td>Membuat dan mengedit dokumen teks, laporan, surat</td><td>Google Docs, LibreOffice Writer</td><td>Microsoft Word</td></tr>
<tr><td>Pengolah Angka</td><td>Mengelola data numerik, rumus matematika, grafik</td><td>Google Sheets, LibreOffice Calc</td><td>Microsoft Excel</td></tr>
<tr><td>Presentasi</td><td>Membuat slide presentasi yang visual dan menarik</td><td>Google Slides, Canva</td><td>Microsoft PowerPoint</td></tr>
<tr><td>Database</td><td>Menyimpan dan mengelola data dalam jumlah besar secara terstruktur</td><td>Google Forms + Sheets</td><td>Microsoft Access</td></tr>
</tbody>
</table>

<h3>Cara Mengintegrasikan Data Antaraplikasi</h3>
<p>Ada tiga cara utama untuk memindahkan atau menghubungkan data dari satu aplikasi ke aplikasi lain, dengan tingkat koneksi yang berbeda-beda.</p>

<h3>1. Salin-Tempel Biasa (Copy-Paste)</h3>
<p>Cara paling sederhana. Salin data (Ctrl+C) dari satu aplikasi, lalu tempel (Ctrl+V) ke aplikasi lain. Kekurangan utamanya: data yang sudah ditempel <strong>tidak terhubung</strong> ke sumber aslinya. Jika data di Excel berubah, kamu harus menyalin ulang secara manual ke Word dan PowerPoint.</p>

<h3>2. Paste Special (Tempel Khusus)</h3>
<p>Paste Special memberi kamu kontrol penuh tentang <em>bagaimana</em> data ditempel. Kamu bisa memilih format yang sesuai dengan kebutuhan. Cara membuka: setelah menyalin data, tekan <strong>Ctrl+Alt+V</strong> atau klik kanan &rarr; Paste Special.</p>
<p>Berikut pilihan format yang tersedia di Paste Special:</p>
<table>
<thead><tr><th>Pilihan Format</th><th>Hasil</th><th>Kapan Digunakan</th></tr></thead>
<tbody>
<tr><td>Paste as Text/Unformatted Text</td><td>Teks tanpa format apapun</td><td>Saat ingin menyesuaikan format dengan dokumen tujuan</td></tr>
<tr><td>Paste as Picture/Image</td><td>Tabel atau grafik menjadi gambar statis</td><td>Saat tidak ingin orang lain mengubah data</td></tr>
<tr><td>Paste as Table/Worksheet Object</td><td>Tabel yang masih bisa diedit</td><td>Saat ingin data tetap bisa diubah di dokumen tujuan</td></tr>
<tr><td>Paste Link</td><td>Tautan langsung ke file sumber</td><td>Saat ingin data otomatis diperbarui jika sumber berubah</td></tr>
</tbody>
</table>

<h3>3. Link/Embed (Tautan Langsung)</h3>
<p>Data di dokumen tujuan <strong>terhubung langsung</strong> ke file sumber. Jika data di file sumber diubah, dokumen tujuan otomatis ikut diperbarui. Fitur ini sangat berguna untuk laporan rutin, misalnya laporan nilai bulanan atau laporan keuangan.</p>

<h3>Studi Kasus: Membuat Laporan Nilai Kelas</h3>
<p>Berikut contoh lengkap alur kerja integrasi aplikasi untuk membuat laporan nilai yang profesional — tugas yang sangat relevan bagi seorang ketua kelas atau pengurus OSIS:</p>
<div class="info-box"><strong>Langkah 1 — Masukkan Data ke Excel:</strong><br>Buat tabel nilai siswa di Excel dengan kolom: Nama, Nilai UTS, Nilai UAS, Rata-rata, dan Keterangan (Lulus/Tidak Lulus). Gunakan rumus =AVERAGE() untuk rata-rata otomatis.<br><br><strong>Langkah 2 — Buat Grafik di Excel:</strong><br>Pilih kolom Nama dan Rata-rata &rarr; Insert &rarr; Chart &rarr; pilih Bar Chart atau Column Chart. Beri judul grafik yang jelas.<br><br><strong>Langkah 3 — Salin Grafik ke Word:</strong><br>Klik grafik di Excel &rarr; Ctrl+C. Buka Word &rarr; Ctrl+Alt+V &rarr; pilih "Paste Link: Microsoft Excel Chart Object" &rarr; OK. Grafik kini terhubung ke data asli di Excel.<br><br><strong>Langkah 4 — Buat Presentasi di PowerPoint:</strong><br>Salin grafik yang sama ke PowerPoint dengan cara yang sama. Tambahkan narasi singkat di setiap slide.<br><br><strong>Hasilnya:</strong> Jika ada koreksi nilai di Excel, grafik di Word dan PowerPoint otomatis diperbarui tanpa perlu copy-paste ulang!</div>

<h3>Tips Produktivitas dengan Keyboard Shortcut</h3>
<p>Menguasai shortcut keyboard bisa menghemat waktu kerjamu hingga 30-40%. Berikut shortcut paling penting di aplikasi perkantoran:</p>
<table>
<thead><tr><th>Shortcut</th><th>Fungsi</th><th>Berlaku di</th></tr></thead>
<tbody>
<tr><td>Ctrl+C</td><td>Salin (Copy) teks/objek yang dipilih</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+V</td><td>Tempel (Paste) konten dari clipboard</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+X</td><td>Potong (Cut) — salin lalu hapus dari tempat asal</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+Z</td><td>Batalkan (Undo) aksi terakhir</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+Y</td><td>Ulangi (Redo) aksi yang dibatalkan</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+S</td><td>Simpan (Save) file saat ini</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+Alt+V</td><td>Buka dialog Paste Special</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+P</td><td>Cetak (Print) dokumen</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+A</td><td>Pilih semua (Select All)</td><td>Word, Excel, PowerPoint</td></tr>
<tr><td>Ctrl+B / I / U</td><td>Tebal / Miring / Garis bawah</td><td>Word, Excel, PowerPoint</td></tr>
</tbody>
</table>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Jelaskan perbedaan antara Paste biasa, Paste as Picture, dan Paste Link. Berikan contoh situasi yang tepat untuk masing-masing!<br>2. Buatlah langkah-langkah lengkap untuk membuat grafik nilai di Excel kemudian menampilkannya di Word agar grafik otomatis diperbarui jika data Excel berubah!<br>3. Sebutkan 4 manfaat utama integrasi data antaraplikasi dalam pekerjaan seorang ketua kelas atau pengurus sekolah!<br>4. Kamu ingin membuat portofolio karya seni untuk ujian. Jelaskan bagaimana kamu akan mengintegrasikan aplikasi perkantoran untuk membuat portofolio yang rapi dan profesional!<br>5. Mengapa fitur Paste Link sangat berguna untuk laporan bulanan yang datanya selalu berubah? Apa yang terjadi jika kamu tidak menggunakan Paste Link?</div>`
      },
      {
        id: 'bab2b',
        judul: 'Blog',
        icon: '✍️',
        konten: `
<h2>B. Blog</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami pengertian blog, membuat blog, menulis artikel yang baik, dan menerapkan etika publikasi konten digital.</div>

<h3>Sejarah Blog: Dari Jurnal Online ke Profesi Jutaan Dolar</h3>
<p>Blog pertama kali muncul pada pertengahan 1990-an sebagai halaman web pribadi yang berisi catatan harian atau jurnal online. Istilah "weblog" pertama kali diciptakan oleh Jorn Barger pada tahun 1997. Lalu Peter Merholz mempersingkatnya menjadi "blog" pada 1999.</p>
<p>Kemudian pada tahun 2003, Google meluncurkan Blogger (setelah mengakuisisi platform tersebut), membuat siapa saja bisa membuat blog gratis tanpa perlu kemampuan coding. Ini menjadi titik balik besar — blog yang tadinya hanya untuk orang teknis, kini bisa dibuat oleh semua orang. Hari ini ada lebih dari 600 juta blog di internet, dan banyak blogger Indonesia yang berhasil menjadikan blog sebagai sumber penghasilan utama mereka.</p>

<h3>Pengertian dan Ciri Khas Blog</h3>
<p>Blog (singkatan dari <em>web log</em>) adalah situs web yang berisi tulisan atau artikel yang ditampilkan secara kronologis — artikel terbaru selalu tampil di bagian atas. Blog biasanya dikelola satu orang atau kelompok kecil dan bisa dibaca siapa saja secara gratis.</p>
<p>Ciri khas yang membedakan blog dari website biasa adalah adanya elemen personal, adanya komentar pembaca, dan pembaruan konten yang rutin. Blog bukan sekadar halaman informasi statis — ini adalah percakapan dua arah antara penulis dan pembaca.</p>

<h3>Perbedaan Blog dan Website</h3>
<p>Banyak orang bingung membedakan blog dengan website. Tabel berikut menjelaskan perbedaan utamanya:</p>
<table>
<thead><tr><th>Aspek</th><th>Blog</th><th>Website</th></tr></thead>
<tbody>
<tr><td>Frekuensi Update Konten</td><td>Rutin dan sering (harian atau mingguan)</td><td>Relatif statis, jarang berubah</td></tr>
<tr><td>Gaya Penulisan</td><td>Personal, mengalir, seperti jurnal atau cerita</td><td>Formal, terstruktur, profesional</td></tr>
<tr><td>Interaksi Pembaca</td><td>Ada kolom komentar untuk diskusi</td><td>Tidak selalu ada fitur komentar</td></tr>
<tr><td>Tujuan Utama</td><td>Berbagi pengalaman, pendapat, atau informasi</td><td>Promosi, penyediaan layanan, informasi resmi</td></tr>
<tr><td>Contoh</td><td>Blog traveling, blog kuliner, blog belajar</td><td>Website sekolah, website toko online, portal berita</td></tr>
</tbody>
</table>

<h3>Jenis-Jenis Blog</h3>
<ul>
<li><strong>Blog Pribadi:</strong> Cerita dan pengalaman sehari-hari penulis. Biasanya gaya bahasanya santai dan personal.</li>
<li><strong>Blog Pendidikan:</strong> Materi pelajaran, tutorial belajar, tips menghadapi ujian. Sangat cocok untuk siswa dan guru.</li>
<li><strong>Blog Teknologi:</strong> Review gadget terbaru, tips HP, berita dunia teknologi, tutorial software.</li>
<li><strong>Blog Kuliner:</strong> Resep masakan, review restoran, tips memasak. Populer di Instagram dan YouTube juga.</li>
<li><strong>Blog Perjalanan (Travel):</strong> Cerita wisata, panduan destinasi, tips perjalanan hemat.</li>
<li><strong>Blog Bisnis:</strong> Tips wirausaha, pemasaran digital, motivasi karir. Banyak diminati oleh profesional muda.</li>
</ul>

<h3>Langkah Membuat Blog di Blogger</h3>
<ol>
<li>Buka <strong>blogger.com</strong> di browser kamu</li>
<li>Klik tombol "Sign in" dan masukkan akun Google kamu</li>
<li>Klik tombol besar <strong>"Create Your Blog"</strong></li>
<li>Pilih nama tampilan (display name) yang akan muncul sebagai penulis</li>
<li>Isi <strong>judul blog</strong> (contoh: "Catatan Si Budi" atau "Belajar Bareng Kelas IX")</li>
<li>Isi <strong>alamat URL</strong> yang unik (contoh: namakamu.blogspot.com) — pastikan belum dipakai orang lain</li>
<li>Pilih <strong>template tampilan</strong> yang kamu sukai</li>
<li>Klik <strong>"Create Blog"</strong> — blog kamu sudah jadi!</li>
<li>Klik <strong>"New Post"</strong> untuk mulai menulis artikel pertamamu</li>
</ol>

<h3>Tips Menulis Artikel Blog yang Menarik dan Berkualitas</h3>
<p>Menulis blog yang baik adalah seni tersendiri. Artikel yang bagus bukan sekadar panjang, tapi harus relevan, mudah dibaca, dan memberikan nilai bagi pembaca. Berikut panduan lengkapnya:</p>
<ul>
<li><strong>Pilih topik yang kamu kuasai dan cintai</strong> — antusiasmemu akan terasa di tulisan</li>
<li><strong>Buat judul yang menarik dan spesifik</strong> — "5 Tips Belajar Informatika yang Menyenangkan" lebih menarik dari "Tips Belajar"</li>
<li><strong>Tulis paragraf pembuka yang kuat</strong> — mulai dengan fakta mengejutkan, pertanyaan, atau cerita singkat yang langsung menarik perhatian</li>
<li><strong>Gunakan subjudul (heading)</strong> — memecah artikel menjadi bagian-bagian kecil agar pembaca tidak lelah membaca</li>
<li><strong>Tambahkan gambar relevan</strong> — artikel dengan gambar dibaca 94% lebih banyak dari yang tidak ada gambarnya</li>
<li><strong>Tulis kesimpulan yang actionable</strong> — berikan tips langkah konkret atau ajakan kepada pembaca</li>
<li><strong>Periksa ejaan dan tata bahasa</strong> — artikel yang banyak typo terkesan tidak profesional</li>
</ul>

<h3>Contoh Ide Konten Blog untuk Siswa SMP</h3>
<p>Bingung mau menulis tentang apa? Berikut ide konten yang cocok untuk siswa kelas IX:</p>
<ul>
<li>Pengalaman selama masa persiapan ujian nasional</li>
<li>Review buku pelajaran yang membantu</li>
<li>Tips menggunakan HP secara produktif untuk belajar</li>
<li>Resep camilan favorit yang mudah dibuat saat belajar</li>
<li>Panduan wisata ke tempat bersejarah yang pernah kamu kunjungi</li>
<li>Review aplikasi belajar yang kamu gunakan</li>
</ul>

<h3>SEO Dasar: Agar Blogmu Mudah Ditemukan di Google</h3>
<p>SEO (Search Engine Optimization) adalah cara membuat artikel blog kamu lebih mudah ditemukan saat orang mencari di Google. Kamu tidak perlu jadi ahli teknis untuk menerapkan SEO dasar:</p>
<ul>
<li><strong>Gunakan kata kunci (keyword) di judul</strong> — pikirkan kata apa yang orang ketikkan di Google jika ingin menemukan artikelmu</li>
<li><strong>Tulis meta deskripsi yang menarik</strong> — deskripsi singkat yang muncul di hasil pencarian Google</li>
<li><strong>Beri nama gambar yang deskriptif</strong> — "foto-gunung-rinjani.jpg" lebih baik dari "IMG_0034.jpg"</li>
<li><strong>Buat konten yang benar-benar berguna</strong> — Google semakin pintar mendeteksi konten berkualitas vs. konten asal-asalan</li>
<li><strong>Update konten secara rutin</strong> — blog yang aktif lebih disukai Google</li>
</ul>

<h3>Tips Memilih Nama Blog yang Menarik</h3>
<ul>
<li><strong>Mudah diingat dan dieja</strong> — hindari nama yang terlalu panjang atau susah dieja</li>
<li><strong>Mencerminkan konten atau kepribadianmu</strong> — pembaca langsung tahu blog ini tentang apa</li>
<li><strong>Unik dan berbeda</strong> — cek dulu apakah nama tersebut sudah dipakai</li>
<li><strong>Hindari angka dan tanda hubung yang berlebihan</strong> — sulit diingat dan terkesan tidak profesional</li>
<li>Contoh nama blog yang baik: "DapurKreatifku", "CatatanSiswaXI", "ExploreNusantara", "TechForTeens"</li>
</ul>

<h3>Etika Publikasi dan Hak Cipta</h3>
<ul>
<li><strong>Hindari plagiarisme</strong> — jangan salin tulisan orang lain tanpa izin dan tanpa menyebut sumber. Ini bisa berakibat konten dihapus atau bahkan masalah hukum.</li>
<li><strong>Cantumkan sumber</strong> jika mengutip data, tulisan, atau gambar milik orang lain</li>
<li><strong>Gunakan gambar bebas hak cipta</strong> dari situs seperti Unsplash.com, Pexels.com, atau Pixabay.com</li>
<li><strong>Jangan share informasi pribadi</strong> orang lain tanpa izin eksplisit mereka</li>
<li><strong>Hindari konten SARA, hoaks, dan hasutan</strong> — selain melanggar etika, ini juga melanggar UU ITE</li>
</ul>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Apa perbedaan utama antara blog pribadi dan blog pendidikan? Berikan satu contoh nyata untuk masing-masing jenis blog!<br>2. Tuliskan langkah lengkap membuat akun blog di Blogger dari awal hingga artikel pertama dipublikasikan!<br>3. Mengapa plagiarisme sangat berbahaya bagi seorang blogger? Sebutkan minimal tiga konsekuensi yang bisa terjadi!<br>4. Buatlah rencana lengkap satu artikel blog (judul, topik, paragraf pembuka, 3 poin utama yang akan dibahas, dan cara menutup artikel) sesuai minat atau pengalamanmu sendiri!<br>5. Jelaskan apa itu SEO dengan bahasa yang mudah dipahami. Mengapa penting bagi seorang blogger pemula untuk memahami SEO?</div>`
      },
      {
        id: 'bab2c',
        judul: 'Vlog',
        icon: '🎬',
        konten: `
<h2>C. Vlog</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami konsep vlog, merencanakan konten video, menerapkan teknik dasar perekaman, dan menjaga etika dalam pembuatan konten.</div>

<h3>Apa itu Vlog?</h3>
<p>Vlog (video blog) adalah konten berupa video yang diunggah secara rutin di platform digital. Vlogger merekam kegiatan, pendapat, tutorial, atau cerita dalam format video — lalu mengedit dan membagikannya kepada penonton.</p>
<p>Di Indonesia, vlog mulai booming sekitar tahun 2015-2016 ketika koneksi internet di HP semakin cepat dan murah. Kini vlogging bukan sekadar hobi — banyak anak muda Indonesia yang berhasil menjadikannya karir dan sumber penghasilan yang signifikan.</p>

<h3>Inspirasi Vlogger Indonesia yang Sukses</h3>
<p>Melihat kisah sukses kreator konten Indonesia bisa menjadi motivasi yang kuat untuk memulai. Berikut beberapa nama yang memulai dari nol dan kini memiliki jutaan pengikut:</p>
<ul>
<li><strong>Ria Ricis</strong> — dengan jutaan subscriber, dikenal lewat konten keluarga, challenge, dan daily vlog. Membuktikan bahwa konten sederhana sekalipun bisa sangat diminati jika konsisten dan autentik.</li>
<li><strong>David GadgetIn</strong> — spesialis review teknologi dan gadget. Memulai dari kamar kos sederhana, kini kanalnya menjadi referensi utama teknologi di Indonesia.</li>
<li><strong>Jerome Polin</strong> — konten tentang kehidupan di Jepang dan matematika. Membuktikan bahwa konten edukasi pun bisa sangat menghibur jika dikemas dengan kreatif.</li>
<li><strong>Rachel Vennya</strong> — dikenal lewat daily vlog kehidupan keluarga dan gaya hidup. Konsistensi adalah kunci kesuksesannya.</li>
</ul>

<h3>Perbedaan Blog dan Vlog</h3>
<p>Blog dan Vlog sama-sama media berbagi konten, tapi dengan format yang berbeda. Masing-masing punya kelebihan tersendiri:</p>
<table>
<thead><tr><th>Aspek</th><th>Blog (Teks)</th><th>Vlog (Video)</th></tr></thead>
<tbody>
<tr><td>Format Utama</td><td>Teks dan gambar diam</td><td>Video bergerak dengan suara dan narasi</td></tr>
<tr><td>Cara Konsumsi</td><td>Dibaca, bisa di-skip dengan cepat</td><td>Ditonton dan didengar, lebih immersive</td></tr>
<tr><td>Peralatan Minimal</td><td>HP/laptop, koneksi internet</td><td>Kamera/HP, aplikasi editing, koneksi internet</td></tr>
<tr><td>Waktu Produksi</td><td>1-3 jam untuk artikel standar</td><td>Bisa memakan waktu berhari-hari untuk editing</td></tr>
<tr><td>Platform Utama</td><td>Blogger, WordPress, Medium</td><td>YouTube, TikTok, Instagram Reels</td></tr>
<tr><td>Potensi Pendapatan</td><td>Iklan, affiliate marketing</td><td>AdSense, sponsor, brand deal, merchandise</td></tr>
</tbody>
</table>

<h3>Perbandingan Platform Video: YouTube vs TikTok vs Instagram Reels</h3>
<p>Memilih platform yang tepat sangat penting sebelum mulai membuat konten. Setiap platform punya karakteristik audiens dan format yang berbeda:</p>
<table>
<thead><tr><th>Aspek</th><th>YouTube</th><th>TikTok</th><th>Instagram Reels</th></tr></thead>
<tbody>
<tr><td>Durasi Video</td><td>Hingga 12 jam (tanpa verifikasi: 15 menit)</td><td>15 detik hingga 10 menit</td><td>15 detik hingga 90 detik</td></tr>
<tr><td>Format Terbaik</td><td>Landscape (horizontal)</td><td>Portrait (vertikal)</td><td>Portrait (vertikal)</td></tr>
<tr><td>Jenis Konten Terbaik</td><td>Tutorial panjang, vlog, review mendalam</td><td>Hiburan cepat, tren, challenge</td><td>Behind the scenes, highlight singkat</td></tr>
<tr><td>Potensi Viral</td><td>Butuh subscriber untuk jangkauan besar</td><td>Konten baru pun bisa viral dengan cepat</td><td>Kuat di kalangan pengguna Instagram aktif</td></tr>
<tr><td>Monetisasi</td><td>1000 subs + 4000 jam tayang per tahun</td><td>Program TikTok Creator Fund (tersedia di beberapa negara)</td><td>Tidak ada program monetisasi langsung</td></tr>
</tbody>
</table>

<h3>Tahapan Produksi Vlog</h3>

<h3>1. Pra-Produksi (Perencanaan)</h3>
<p>Tahap ini sering diabaikan pemula, padahal inilah yang membedakan konten yang terasa terarah dengan konten yang acak-acakan. Perencanaan yang baik menghemat banyak waktu saat editing.</p>
<ul>
<li>Tentukan topik spesifik dan siapa target penontonmu</li>
<li>Buat outline atau skrip singkat — tidak perlu kaku, cukup poin-poin utama</li>
<li>Siapkan peralatan: kamera/HP (minimal 12 MP), tripod atau gimbal, mikrofon jika ada, lampu LED jika perlu</li>
<li>Pilih lokasi dengan cahaya alami yang cukup dan suasana tenang</li>
<li>Pastikan baterai penuh dan storage kamera/HP cukup</li>
</ul>

<h3>2. Produksi (Perekaman)</h3>
<p>Ini adalah tahap paling seru — tapi juga yang paling membutuhkan perhatian pada detail teknis. Kualitas rekaman yang baik menghasilkan konten yang enak ditonton:</p>
<ul>
<li><strong>Pencahayaan:</strong> Selalu hadap ke sumber cahaya (jendela atau lampu), hindari backlight (cahaya terang di belakangmu). Waktu terbaik untuk rekam outdoor adalah pagi hari (golden hour) atau sore sebelum maghrib.</li>
<li><strong>Stabilitas kamera:</strong> Gunakan tripod, gimbal, atau sandarkan HP di tempat yang stabil. Video yang goyang sangat mengganggu penonton dan membuat pusing.</li>
<li><strong>Komposisi Rule of Thirds:</strong> Bayangkan frame terbagi jadi 9 kotak (3x3). Tempatkan wajahmu di titik pertemuan garis — biasanya di 1/3 kanan atau kiri, 1/3 atas. Ini membuat gambar terasa lebih profesional.</li>
<li><strong>Kualitas suara:</strong> Rekam di tempat yang minim kebisingan. Suara yang buruk jauh lebih mengganggu daripada gambar yang kurang tajam. Mikrofon eksternal lapel (clip) bisa dibeli dengan harga terjangkau dan sangat meningkatkan kualitas audio.</li>
<li><strong>Rekam lebih panjang dari yang dibutuhkan</strong> — lebih mudah memotong di editing daripada harus rekam ulang.</li>
</ul>

<h3>3. Pasca-Produksi (Editing) dengan CapCut</h3>
<p>CapCut adalah aplikasi editing video mobile yang paling populer di Indonesia saat ini. Gratis, mudah digunakan, dan memiliki banyak fitur canggih. Berikut panduan editing dasar di CapCut:</p>
<ol>
<li>Buka CapCut, tap <strong>"New Project"</strong>, pilih semua klip yang akan digunakan</li>
<li><strong>Potong klip:</strong> Tap klip di timeline, geser garis putih di ujung kiri/kanan untuk memotong bagian yang tidak perlu</li>
<li><strong>Susun urutan klip</strong> dengan menekan lama lalu drag ke posisi yang diinginkan</li>
<li><strong>Tambahkan transisi:</strong> Tap ikon di antara dua klip, pilih efek transisi (fade, swipe, zoom). Jangan terlalu banyak variasi — pilih 1-2 jenis transisi dan konsisten.</li>
<li><strong>Tambahkan musik latar:</strong> Tap "Audio" &rarr; "Music" &rarr; pilih dari koleksi bebas hak cipta CapCut atau "Sounds" untuk musik yang sedang tren</li>
<li><strong>Tambahkan teks/subtitle:</strong> Tap "Text" &rarr; "Add Text". Gunakan fitur "Auto Captions" untuk subtitle otomatis dari suara</li>
<li><strong>Color grading:</strong> Tap "Filters" untuk warna preset instan, atau "Adjust" untuk mengatur manual (kecerahan, kontras, saturasi)</li>
<li><strong>Export:</strong> Tap ikon ekspor di kanan atas, pilih resolusi 1080p untuk kualitas terbaik, tap "Export"</li>
</ol>

<h3>Cara Upload ke YouTube dan Panduan Monetisasi</h3>
<ol>
<li>Buka aplikasi YouTube, tap ikon kamera (+)</li>
<li>Pilih "Upload a video", pilih file video dari galeri</li>
<li>Isi judul yang menarik (sertakan keyword yang orang cari), deskripsi detail, dan tag relevan</li>
<li>Buat atau unggah thumbnail yang eye-catching — thumbnail yang baik meningkatkan klik hingga 40%</li>
<li>Atur privasi: Public (semua bisa lihat), Unlisted (hanya yang punya link), Private (hanya kamu)</li>
<li>Tap "Upload" dan tunggu prosesnya selesai</li>
</ol>
<div class="info-box"><strong>Syarat Monetisasi YouTube (YouTube Partner Program):</strong><br>• Minimal <strong>1.000 subscriber</strong><br>• Minimal <strong>4.000 jam tayang</strong> dalam 12 bulan terakhir, ATAU 10 juta penayangan Shorts dalam 90 hari<br>• Channel harus sesuai kebijakan konten YouTube<br>• Akun AdSense yang terhubung dan disetujui<br><br>Setelah memenuhi syarat, kamu bisa mendapat penghasilan dari iklan yang ditayangkan di videomu. Rata-rata, kreator Indonesia mendapat Rp 10.000 - 50.000 per 1.000 penayangan, tergantung topik dan audiens.</div>

<h3>Etika Membuat Konten Video</h3>
<ul>
<li>Minta izin secara eksplisit sebelum merekam wajah orang lain, terutama anak-anak</li>
<li>Jangan merekam di tempat yang melarang pengambilan video (masjid, museum tertentu, rumah sakit)</li>
<li>Gunakan musik bebas hak cipta: YouTube Audio Library, CapCut Music Library, atau Epidemic Sound</li>
<li>Jangan tampilkan informasi sensitif seperti alamat rumah, nomor HP, atau data pribadi</li>
<li>Beri label konten yang sesuai — jika ada konten yang tidak cocok untuk anak, tandai dengan benar</li>
</ul>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Jelaskan tiga tahapan produksi vlog secara detail! Apa yang paling penting dilakukan di setiap tahapan?<br>2. Apa yang dimaksud "Rule of Thirds" dalam pengambilan gambar? Bagaimana cara menerapkannya saat selfie untuk konten vlog?<br>3. Buatlah rencana vlog singkat: topik, target penonton, peralatan yang akan digunakan, platform yang dipilih, dan satu poin unik yang membedakan vlogmu dari yang lain!<br>4. Bandingkan YouTube dan TikTok sebagai platform vlog. Jika kamu ingin membuat konten tentang tips belajar ujian nasional, mana yang akan kamu pilih dan mengapa?<br>5. Mengapa penting menggunakan musik bebas hak cipta di video YouTube? Apa yang bisa terjadi jika menggunakan musik berbayar tanpa izin?</div>`
      }
    ]
  },
  bab3: {
    id: 'bab3',
    judul: 'Sistem Komputer',
    icon: '🖥️',
    warna: 'green',
    deskripsi: 'Pelajari komponen komputer, cara kerjanya, manajemen file, perawatan, dan troubleshooting.',
    submateri: [
      {
        id: 'bab3a',
        judul: 'Komponen Sistem Komputer',
        icon: '🔧',
        konten: `
<h2>A. Komponen Sistem Komputer</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat mengidentifikasi komponen-komponen sistem komputer, menjelaskan fungsinya, dan memahami hubungan antarkomponennya.</div>

<h3>Pengertian Sistem Komputer</h3>
<p>Sistem komputer adalah kumpulan perangkat yang bekerja bersama untuk menerima data (input), mengolahnya (process), dan menghasilkan informasi (output). Sistem komputer terdiri dari tiga komponen utama yang saling bergantung dan tidak bisa berdiri sendiri: <strong>Hardware, Software, dan Brainware</strong>.</p>
<p>Ketiga komponen ini ibarat manusia yang lengkap: Hardware adalah tubuh (tangan, kaki, otak fisik), Software adalah pikiran dan pengetahuan, serta Brainware adalah jiwa atau niat yang menggerakkan semuanya. Tanpa salah satunya, sistem tidak bisa berfungsi.</p>

<h3>1. Hardware (Perangkat Keras)</h3>
<p>Hardware adalah semua komponen fisik komputer yang bisa dilihat, dipegang, dan disentuh secara langsung. Hardware dibagi menjadi beberapa kategori berdasarkan fungsinya dalam siklus kerja komputer.</p>
<table>
<thead><tr><th>Kategori</th><th>Contoh Perangkat</th><th>Fungsi Utama</th></tr></thead>
<tbody>
<tr><td>Perangkat Input</td><td>Keyboard, mouse, scanner, webcam, mikrofon, layar sentuh</td><td>Memasukkan data dan perintah ke komputer</td></tr>
<tr><td>Perangkat Proses</td><td>CPU, RAM, motherboard, GPU</td><td>Mengolah dan memproses data sesuai instruksi</td></tr>
<tr><td>Perangkat Output</td><td>Monitor, printer, speaker, proyektor, headphone</td><td>Menampilkan atau mengeluarkan hasil pengolahan</td></tr>
<tr><td>Penyimpanan Internal</td><td>HDD (Hard Disk Drive), SSD (Solid State Drive)</td><td>Menyimpan data dan program secara permanen di dalam komputer</td></tr>
<tr><td>Penyimpanan Eksternal</td><td>Flashdisk, hard disk eksternal, kartu SD, DVD</td><td>Menyimpan dan memindah data di luar komputer</td></tr>
</tbody>
</table>

<h3>Komponen Proses: CPU dan GPU</h3>
<p>CPU dan GPU adalah dua prosesor yang berbeda tujuan. Memahami perbedaannya membantu kamu mengerti mengapa spesifikasi komputer untuk gaming berbeda dengan komputer untuk mengetik.</p>
<p><strong>CPU (Central Processing Unit)</strong> adalah "otak" komputer. CPU unggul dalam mengerjakan tugas yang kompleks dan beragam satu per satu secara cepat — seperti manusia yang sangat pintar mengerjakan berbagai jenis soal. CPU modern biasanya punya 4-16 inti (core). Semakin banyak inti dan semakin tinggi kecepatannya (GHz), semakin cepat komputer bekerja untuk tugas umum.</p>
<p><strong>GPU (Graphics Processing Unit)</strong> adalah prosesor yang dirancang khusus untuk mengolah grafis. GPU unggul dalam mengerjakan ribuan tugas sederhana secara bersamaan (parallel processing) — seperti ribuan pekerja yang masing-masing mengerjakan satu pixel. GPU modern bisa punya ribuan hingga puluhan ribu "core" kecil. Inilah mengapa GPU sangat cepat untuk rendering video, desain 3D, dan gaming.</p>
<div class="info-box"><strong>Analogi CPU vs GPU yang Mudah Dipahami:</strong><br>CPU = Chef berbintang — satu orang yang sangat terampil, bisa masak berbagai hidangan kompleks, tapi melayani satu pesanan dalam satu waktu<br>GPU = Kantin sekolah — ratusan petugas yang masing-masing mengerjakan tugas sederhana, tapi bisa melayani ratusan orang sekaligus<br><br>Untuk gaming, kamu butuh keduanya: CPU untuk mengelola game logic (AI musuh, fisika, event), GPU untuk render tampilan visual yang mulus.</div>

<h3>Perbedaan HDD dan SSD</h3>
<p>HDD dan SSD sama-sama berfungsi sebagai penyimpanan permanen, tapi cara kerjanya sangat berbeda dan berdampak besar pada kecepatan komputer.</p>
<table>
<thead><tr><th>Aspek</th><th>HDD (Hard Disk Drive)</th><th>SSD (Solid State Drive)</th></tr></thead>
<tbody>
<tr><td>Cara Kerja</td><td>Piringan magnetik berputar, jarum baca bergerak</td><td>Chip memori elektronik, tidak ada bagian bergerak</td></tr>
<tr><td>Kecepatan Baca/Tulis</td><td>80-160 MB/s (lambat)</td><td>500-7000 MB/s (jauh lebih cepat)</td></tr>
<tr><td>Waktu Booting</td><td>1-3 menit</td><td>10-30 detik</td></tr>
<tr><td>Daya Tahan Benturan</td><td>Rentan rusak jika terjatuh (ada bagian bergerak)</td><td>Lebih tahan banting (tidak ada bagian bergerak)</td></tr>
<tr><td>Harga per GB</td><td>Lebih murah (cocok untuk storage besar)</td><td>Lebih mahal</td></tr>
<tr><td>Konsumsi Daya</td><td>Lebih boros (mempengaruhi baterai laptop)</td><td>Lebih hemat daya</td></tr>
<tr><td>Kebisingan</td><td>Ada suara berputar saat bekerja</td><td>Senyap total</td></tr>
</tbody>
</table>

<h3>RAM: Memori Kerja Komputer</h3>
<ul>
<li><strong>RAM (Random Access Memory)</strong> adalah memori sementara yang menyimpan data program yang sedang aktif berjalan. Semakin besar RAM, semakin banyak program yang bisa berjalan bersamaan tanpa lemot.</li>
<li>Data di RAM hilang saat komputer dimatikan — ini yang membedakannya dari HDD/SSD.</li>
<li>RAM 8GB sudah cukup untuk kebutuhan umum (browsing, Office, streaming). 16GB untuk gaming atau editing video. 32GB ke atas untuk editing video profesional atau pemrograman berat.</li>
</ul>

<h3>2. Software (Perangkat Lunak)</h3>
<p>Software adalah program atau kumpulan instruksi yang memberitahu hardware apa yang harus dilakukan. Software tidak bisa dipegang secara fisik, tapi merupakan komponen yang sama pentingnya dengan hardware.</p>
<table>
<thead><tr><th>Jenis Software</th><th>Fungsi</th><th>Contoh Populer</th></tr></thead>
<tbody>
<tr><td>Sistem Operasi</td><td>Mengelola semua hardware dan software, antarmuka pengguna</td><td>Windows 11, macOS Sonoma, Linux, Android 14, iOS 17</td></tr>
<tr><td>Aplikasi Produktivitas</td><td>Mendukung pekerjaan dan belajar sehari-hari</td><td>Microsoft 365, Google Workspace, LibreOffice</td></tr>
<tr><td>Aplikasi Multimedia</td><td>Memutar, membuat, dan mengedit konten media</td><td>VLC, CapCut, Photoshop, DaVinci Resolve</td></tr>
<tr><td>Browser</td><td>Mengakses dan menampilkan halaman internet</td><td>Chrome, Firefox, Edge, Safari</td></tr>
<tr><td>Driver</td><td>Penerjemah antara OS dan hardware spesifik</td><td>Driver printer Canon, driver GPU NVIDIA</td></tr>
<tr><td>Antivirus</td><td>Melindungi sistem dari ancaman malware</td><td>Windows Defender, Avast, Kaspersky</td></tr>
</tbody>
</table>

<h3>3. Brainware (Pengguna)</h3>
<p>Brainware adalah manusia yang mengoperasikan, mengembangkan, dan mengelola sistem komputer. Tanpa brainware, hardware dan software yang paling canggih sekalipun tidak akan berguna.</p>
<p>Brainware bukan sekadar "pengguna biasa" — ada berbagai tingkatan dan spesialisasi dalam dunia komputer:</p>
<ul>
<li><strong>Pengguna (User/End User):</strong> Menggunakan komputer untuk aktivitas sehari-hari — browsing, mengetik, game, media sosial. Tidak perlu memahami cara kerja internal.</li>
<li><strong>Programmer/Developer:</strong> Membuat, menulis, dan menguji program dan aplikasi. Harus menguasai bahasa pemrograman.</li>
<li><strong>Sistem Analis:</strong> Merancang dan menganalisis kebutuhan sistem informasi untuk organisasi atau perusahaan.</li>
<li><strong>Teknisi IT (IT Support/Technician):</strong> Merawat, memperbaiki, dan menginstal perangkat keras dan lunak. Berinteraksi langsung dengan mesin.</li>
<li><strong>Administrator Jaringan (Network Admin):</strong> Mengelola infrastruktur jaringan komputer — server, router, keamanan data.</li>
<li><strong>Database Administrator (DBA):</strong> Mengelola dan mengoptimalkan database organisasi agar data tersimpan dan dapat diakses secara efisien.</li>
</ul>

<h3>Contoh Spesifikasi Komputer yang Realistis</h3>
<p>Berikut perbandingan spesifikasi untuk berbagai kebutuhan, mulai dari yang paling sederhana hingga yang lebih tinggi:</p>
<table>
<thead><tr><th>Kebutuhan</th><th>CPU</th><th>RAM</th><th>Storage</th><th>Kisaran Harga</th></tr></thead>
<tbody>
<tr><td>Sekolah / Office dasar</td><td>Intel Core i3 / Ryzen 3</td><td>8 GB</td><td>256 GB SSD</td><td>Rp 4-6 juta</td></tr>
<tr><td>Gaming ringan / Desain</td><td>Intel Core i5 / Ryzen 5</td><td>16 GB</td><td>512 GB SSD</td><td>Rp 7-12 juta</td></tr>
<tr><td>Gaming serius / Editing video</td><td>Intel Core i7 / Ryzen 7 + GPU dedicated</td><td>32 GB</td><td>1 TB SSD + 2 TB HDD</td><td>Rp 15-25 juta</td></tr>
</tbody>
</table>

<div class="info-box"><strong>Analogi Sistem Komputer Lengkap:</strong><br>Bayangkan sebuah restoran mewah.<br>• Hardware = Dapur, kompor, peralatan masak (infrastruktur fisik)<br>• Software = Buku resep, sistem kasir, manajemen pesanan (instruksi dan program)<br>• Brainware = Chef, pelayan, kasir (manusia yang mengoperasikan)<br>Ketiga komponen ini harus ada dan bekerja sama dengan baik agar restoran bisa berjalan dan melayani pelanggan!</div>

<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Sebutkan 5 perangkat input dan 5 perangkat output yang ada di lab komputer atau di rumahmu! Jelaskan fungsi masing-masing secara singkat.<br>2. Apa perbedaan utama antara RAM dan SSD? Mengapa komputer modern membutuhkan keduanya, bukan hanya salah satunya?<br>3. Jelaskan perbedaan CPU dan GPU dengan analogi yang mudah dipahami. Mengapa gaming membutuhkan GPU yang kuat?<br>4. Kamu ingin membeli laptop baru untuk keperluan sekolah dan sesekali editing video. Spesifikasi apa saja yang akan kamu prioritaskan? Jelaskan alasanmu!<br>5. Kategorikan aplikasi berikut sebagai Sistem Operasi, Aplikasi, atau Driver: Chrome, Windows 11, CapCut, Driver Printer HP, WhatsApp, Android 14!</div>`
      },
      {
        id: 'bab3b',
        judul: 'Cara Kerja Komputer',
        icon: '⚙️',
        konten: `
<h2>B. Cara Kerja Komputer</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat menjelaskan siklus kerja komputer dari input hingga output dan memahami peran setiap komponen dalam proses tersebut.</div>
<h3>Siklus Kerja Komputer: IPO + S</h3>
<p>Semua komputer bekerja mengikuti siklus dasar: <strong>Input → Process → Output → Storage</strong>.</p>
<table>
<tr><th>Tahap</th><th>Penjelasan</th><th>Contoh (Mengetik Dokumen)</th></tr>
<tr><td>Input</td><td>Data dimasukkan ke komputer</td><td>Menekan tombol keyboard</td></tr>
<tr><td>Process</td><td>CPU mengolah data sesuai instruksi</td><td>CPU mengubah sinyal keyboard jadi karakter</td></tr>
<tr><td>Output</td><td>Hasil pengolahan ditampilkan</td><td>Huruf muncul di layar monitor</td></tr>
<tr><td>Storage</td><td>Data disimpan untuk digunakan lagi</td><td>File tersimpan di SSD saat klik Save</td></tr>
</table>
<h3>Cara Kerja CPU: Siklus Fetch-Decode-Execute</h3>
<p>CPU mengolah setiap instruksi program melalui tiga tahap berulang dalam hitungan milidetik:</p>
<ol>
<li><strong>Fetch (Ambil):</strong> CPU mengambil instruksi berikutnya dari RAM</li>
<li><strong>Decode (Terjemahkan):</strong> CPU mengartikan instruksi tersebut</li>
<li><strong>Execute (Jalankan):</strong> CPU menjalankan instruksi sesuai terjemahan</li>
</ol>
<div class="info-box"><strong>Fakta Menarik:</strong> CPU modern dapat menjalankan miliaran siklus per detik! Prosesor 3.0 GHz = 3 miliar siklus/detik. Semakin tinggi angka GHz, semakin cepat komputer memproses data.</div>
<h3>Peran RAM sebagai "Meja Kerja"</h3>
<p>RAM adalah tempat penyimpanan sementara untuk data yang sedang aktif digunakan. Analoginya seperti meja kerja:</p>
<ul>
<li>Meja luas (RAM besar) = bisa buka banyak buku sekaligus (banyak aplikasi berjalan)</li>
<li>Meja sempit (RAM kecil) = harus tutup buku lama untuk buka buku baru (lemot)</li>
<li>Meja dibersihkan saat pulang (RAM terhapus saat komputer mati)</li>
</ul>
<h3>Peran Sistem Operasi</h3>
<p>OS adalah "manajer" yang mengatur semua sumber daya komputer:</p>
<ul>
<li>Mengelola penggunaan CPU dan RAM agar adil antarprogram</li>
<li>Mengatur akses ke file dan folder di storage</li>
<li>Mengelola komunikasi antara hardware dan software</li>
<li>Menyediakan antarmuka pengguna (GUI: ikon, taskbar, menu)</li>
</ul>
<h3>Proses Membuka Aplikasi Step-by-Step</h3>
<ol>
<li>Pengguna klik dua kali ikon aplikasi (Input)</li>
<li>OS menerima perintah</li>
<li>OS mencari file aplikasi di HDD/SSD</li>
<li>OS memuat file ke RAM</li>
<li>CPU mulai menjalankan instruksi dari RAM</li>
<li>Jendela aplikasi tampil di monitor (Output)</li>
<li>Saat pengguna klik Save, data ditulis ke HDD/SSD (Storage)</li>
</ol>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Jelaskan siklus IPO+S dengan contoh penggunaan kalkulator di komputer!<br>2. Mengapa RAM penting? Apa yang terjadi jika komputer hanya punya 1GB RAM di era sekarang?<br>3. Apa peran sistem operasi dalam proses menjalankan game? Jelaskan secara urut!<br>4. Bedakan fungsi CPU dan GPU. Tugas mana yang lebih cocok dikerjakan GPU?</div>`
      },
      {
        id: 'bab3c',
        judul: 'Manajemen File dan Folder',
        icon: '📁',
        konten: `
<h2>C. Manajemen File dan Folder</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat mengelola file dan folder secara terstruktur, memahami jenis-jenis file, dan menerapkan kebiasaan organisasi data yang baik.</div>
<h3>Pengertian File dan Folder</h3>
<p><strong>File</strong> adalah kumpulan data yang disimpan dengan nama dan ekstensi tertentu di media penyimpanan. <strong>Folder</strong> (direktori) adalah wadah virtual untuk mengelompokkan file-file yang berkaitan, seperti amplop yang berisi surat-surat.</p>
<h3>Ekstensi File dan Fungsinya</h3>
<table>
<tr><th>Jenis File</th><th>Ekstensi</th><th>Aplikasi Pembuka</th></tr>
<tr><td>Dokumen teks</td><td>.docx, .pdf, .txt, .odt</td><td>Word, Adobe Reader, Notepad</td></tr>
<tr><td>Spreadsheet</td><td>.xlsx, .csv, .ods</td><td>Excel, Google Sheets</td></tr>
<tr><td>Presentasi</td><td>.pptx, .odp</td><td>PowerPoint, Google Slides</td></tr>
<tr><td>Gambar</td><td>.jpg, .png, .gif, .svg</td><td>Photo Viewer, Photoshop</td></tr>
<tr><td>Audio</td><td>.mp3, .wav, .ogg</td><td>VLC, Windows Media Player</td></tr>
<tr><td>Video</td><td>.mp4, .avi, .mkv</td><td>VLC, Windows Media Player</td></tr>
<tr><td>Arsip/Kompresi</td><td>.zip, .rar, .7z</td><td>WinRAR, 7-Zip</td></tr>
<tr><td>Program</td><td>.exe, .apk, .dmg</td><td>Langsung dijalankan</td></tr>
</table>
<h3>Operasi Dasar File dan Folder</h3>
<table>
<tr><th>Operasi</th><th>Cara Windows</th><th>Cara Mac</th></tr>
<tr><td>Buat Folder Baru</td><td>Klik kanan → New → Folder</td><td>File → New Folder</td></tr>
<tr><td>Salin</td><td>Ctrl+C lalu Ctrl+V</td><td>Cmd+C lalu Cmd+V</td></tr>
<tr><td>Pindah</td><td>Ctrl+X lalu Ctrl+V</td><td>Cmd+X lalu Cmd+V</td></tr>
<tr><td>Ganti Nama</td><td>F2 atau klik kanan → Rename</td><td>Enter atau klik kanan → Rename</td></tr>
<tr><td>Hapus</td><td>Delete (ke Recycle Bin)</td><td>Cmd+Delete</td></tr>
<tr><td>Hapus Permanen</td><td>Shift+Delete</td><td>Cmd+Option+Delete</td></tr>
<tr><td>Cari File</td><td>Ctrl+F di File Explorer</td><td>Cmd+F di Finder</td></tr>
</table>
<h3>Struktur Folder yang Rapi</h3>
<div class="info-box"><strong>Contoh Struktur Folder Siswa Kelas IX:</strong><br>📁 Sekolah<br>├── 📁 Kelas IX-A<br>│   ├── 📁 Semester Gasal 2026<br>│   │   ├── 📁 Informatika<br>│   │   ├── 📁 Matematika<br>│   │   └── 📁 Bahasa Indonesia<br>│   └── 📁 Semester Genap 2027<br>├── 📁 Ekstrakurikuler<br>└── 📁 Tugas Akhir</div>
<h3>Tips Penamaan File yang Baik</h3>
<ul>
<li>Gunakan nama yang deskriptif: <code>Tugas_Informatika_Bab3_Ahmad.docx</code></li>
<li>Tambahkan tanggal jika perlu: <code>Laporan_Praktikum_2026-11-15.pdf</code></li>
<li>Hindari karakter khusus: ! @ # $ % ^ &amp; * ( )</li>
<li>Gunakan underscore (_) atau tanda hubung (-) sebagai pemisah kata</li>
<li>Jangan beri nama file hanya "tugas.docx" atau "dokumen1.pdf"</li>
</ul>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Buatlah rancangan struktur folder untuk menyimpan semua tugas sekolahmu selama satu semester! Gambarkan strukturnya!<br>2. Apa perbedaan menghapus file dengan Delete vs Shift+Delete? Kapan sebaiknya menggunakan masing-masing?<br>3. Mengapa penamaan file yang deskriptif penting? Berikan contoh nama file yang baik dan buruk untuk 3 jenis tugas berbeda!<br>4. Apa itu ekstensi file? Mengapa kita tidak boleh sembarangan mengubah ekstensi file?</div>`
      },
      {
        id: 'bab3d',
        judul: 'Perawatan Komputer',
        icon: '🛠️',
        konten: `
<h2>D. Perawatan Komputer</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat menerapkan prosedur perawatan komputer yang benar, melakukan pencadangan data, dan membangun kebiasaan penggunaan komputer yang aman.</div>
<h3>Mengapa Komputer Perlu Dirawat?</h3>
<p>Seperti kendaraan, komputer perlu dirawat agar bekerja optimal dan tahan lama. Komputer yang tidak dirawat bisa menjadi lambat, sering crash, rentan virus, bahkan rusak total dan kehilangan data berharga.</p>
<h3>Perawatan Hardware (Fisik)</h3>
<ul>
<li>Bersihkan debu dari keyboard dengan kuas kecil atau compressed air</li>
<li>Lap layar monitor dengan kain microfiber yang lembab (bukan basah)</li>
<li>Pastikan ventilasi/fan tidak terhalang agar tidak overheat</li>
<li>Hindari makan dan minum di dekat komputer</li>
<li>Gunakan UPS (Uninterruptible Power Supply) untuk mencegah kerusakan akibat mati listrik mendadak</li>
<li>Matikan komputer dengan benar: Start → Shutdown, bukan langsung cabut kabel</li>
</ul>
<h3>Perawatan Software</h3>
<table>
<tr><th>Kegiatan</th><th>Frekuensi</th><th>Cara</th></tr>
<tr><td>Update sistem operasi</td><td>Setiap ada update tersedia</td><td>Settings → Windows Update</td></tr>
<tr><td>Scan antivirus</td><td>Minimal seminggu sekali</td><td>Buka antivirus → Full Scan</td></tr>
<tr><td>Hapus file temporary</td><td>Sebulan sekali</td><td>Win+R → ketik %temp% → hapus semua</td></tr>
<tr><td>Bersihkan Recycle Bin</td><td>Seminggu sekali</td><td>Klik kanan Recycle Bin → Empty</td></tr>
<tr><td>Uninstall aplikasi tidak terpakai</td><td>Setiap beberapa bulan</td><td>Settings → Apps → Uninstall</td></tr>
<tr><td>Defragmentasi HDD</td><td>Sebulan sekali (HDD saja, bukan SSD)</td><td>Search → Defragment and Optimize</td></tr>
</table>
<h3>Pencadangan Data (Backup)</h3>
<p>Backup adalah membuat salinan data penting di tempat lain sebagai cadangan jika terjadi kerusakan, kehilangan, atau serangan virus.</p>
<div class="info-box"><strong>Aturan Backup 3-2-1:</strong><br>• <strong>3</strong> salinan data (1 asli + 2 cadangan)<br>• <strong>2</strong> media penyimpanan berbeda (misal: HDD + cloud)<br>• <strong>1</strong> salinan di lokasi berbeda (bukan di rumah yang sama)<br><br><strong>Opsi backup gratis:</strong> Google Drive (15GB), OneDrive (5GB), iCloud (5GB)</div>
<h3>Kebiasaan Aman Menggunakan Komputer</h3>
<ul>
<li>Jangan unduh software dari situs tidak resmi</li>
<li>Jangan klik tautan mencurigakan di email atau chat</li>
<li>Gunakan password yang kuat dan berbeda untuk setiap akun</li>
<li>Kunci komputer saat ditinggal: Windows+L</li>
<li>Logout dari akun setelah menggunakan komputer umum/lab sekolah</li>
<li>Aktifkan firewall dan pastikan antivirus selalu update</li>
</ul>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Buatlah jadwal perawatan komputer selama 1 bulan, lengkap dengan kegiatan hariannya!<br>2. Jelaskan aturan backup 3-2-1 dengan contoh konkret yang bisa kamu terapkan!<br>3. Apa yang terjadi jika komputer dimatikan langsung (cabut listrik) tanpa Shutdown? Mengapa berbahaya?<br>4. Sebutkan 5 tanda komputer yang butuh perawatan segera!</div>`
      },
      {
        id: 'bab3e',
        judul: 'Troubleshooting Sederhana',
        icon: '🔍',
        konten: `
<h2>E. Troubleshooting Sederhana</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat mengidentifikasi masalah umum komputer, mendiagnosis penyebabnya, dan menerapkan solusi awal yang tepat dan aman.</div>
<h3>Apa itu Troubleshooting?</h3>
<p>Troubleshooting adalah proses sistematis untuk mengidentifikasi, mendiagnosis, dan menyelesaikan masalah pada komputer. Pendekatan yang baik: <strong>amati gejala → identifikasi penyebab → coba solusi bertahap → verifikasi</strong>.</p>
<h3>Masalah Umum dan Solusinya</h3>
<table>
<tr><th>Masalah</th><th>Kemungkinan Penyebab</th><th>Solusi</th></tr>
<tr><td>Komputer tidak menyala</td><td>Kabel power lepas, tombol power rusak</td><td>Cek kabel, pastikan stop kontak berfungsi</td></tr>
<tr><td>Komputer sangat lambat</td><td>RAM penuh, virus, storage penuh</td><td>Tutup aplikasi, scan virus, hapus file tidak perlu</td></tr>
<tr><td>Layar biru (BSOD)</td><td>Driver rusak, hardware bermasalah</td><td>Restart, update driver, bawa ke teknisi jika berulang</td></tr>
<tr><td>Wifi tidak terkoneksi</td><td>Driver wifi, setting jaringan</td><td>Restart router, lupakan jaringan lalu reconnect</td></tr>
<tr><td>Aplikasi not responding</td><td>Bug, RAM kurang, konflik program</td><td>Ctrl+Alt+Del → Task Manager → End Task</td></tr>
<tr><td>Suara tidak keluar</td><td>Volume mute, driver audio</td><td>Cek volume, cek kabel speaker, update driver audio</td></tr>
</table>
<h3>Menggunakan Task Manager</h3>
<p>Task Manager adalah alat bawaan Windows untuk memantau dan mengelola proses yang berjalan:</p>
<ul>
<li>Buka dengan: <code>Ctrl + Alt + Del</code> → Task Manager, atau <code>Ctrl + Shift + Esc</code></li>
<li>Tab <strong>Processes</strong>: lihat semua program yang berjalan dan konsumsi CPU/RAM-nya</li>
<li>Tab <strong>Performance</strong>: monitor penggunaan CPU, RAM, disk, dan jaringan secara real-time</li>
<li>Untuk menutup aplikasi yang macet: klik aplikasi → End Task</li>
</ul>
<h3>Langkah Troubleshooting Sistematis</h3>
<ol>
<li><strong>Identifikasi masalah:</strong> Apa yang terjadi? Kapan mulai terjadi?</li>
<li><strong>Kumpulkan informasi:</strong> Ada perubahan apa sebelum masalah muncul?</li>
<li><strong>Buat hipotesis:</strong> Apa kemungkinan penyebabnya?</li>
<li><strong>Uji solusi:</strong> Mulai dari solusi paling sederhana dulu</li>
<li><strong>Verifikasi:</strong> Apakah masalah sudah teratasi?</li>
<li><strong>Dokumentasi:</strong> Catat masalah dan solusinya untuk referensi ke depan</li>
</ol>
<div class="info-box"><strong>Tips Penting:</strong> Jika solusi sederhana tidak berhasil setelah 2-3 percobaan, <strong>jangan coba-coba yang lebih ekstrem</strong> (seperti menghapus file sistem atau format ulang) tanpa panduan. Lebih baik minta bantuan teknisi ahli untuk menghindari kerusakan lebih lanjut.</div>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Komputer kamu tiba-tiba mati sendiri dan saat dinyalakan lagi berjalan sangat lambat. Apa langkah troubleshooting yang akan kamu lakukan secara berurutan?<br>2. Jelaskan cara menggunakan Task Manager untuk menutup aplikasi yang tidak merespons!<br>3. Apa perbedaan restart dan shutdown? Kapan sebaiknya melakukan restart?<br>4. Buatlah tabel berisi 5 masalah komputer yang pernah kamu alami beserta solusinya!</div>`
      }
    ]
  },
  bab4: {
    id: 'bab4',
    judul: 'Jaringan Komputer dan Internet',
    icon: '🌐',
    warna: 'orange',
    deskripsi: 'Pelajari jaringan komputer, internet, keamanan siber, dan etika digital.',
    submateri: [
      {
        id: 'bab4a',
        judul: 'Jaringan Komputer',
        icon: '🔗',
        konten: `
<h2>A. Jaringan Komputer</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami konsep jaringan komputer, jenis-jenisnya, komponen penyusun, dan manfaatnya dalam kehidupan sehari-hari.</div>
<h3>Pengertian Jaringan Komputer</h3>
<p>Jaringan komputer adalah kumpulan dua atau lebih komputer yang saling terhubung untuk berbagi data, sumber daya (printer, internet), dan berkomunikasi. Bayangkan jaringan seperti jalan raya — menghubungkan berbagai tempat agar informasi bisa berpindah.</p>
<h3>Jenis-Jenis Jaringan Berdasarkan Luas Area</h3>
<table>
<tr><th>Jenis</th><th>Kepanjangan</th><th>Jangkauan</th><th>Contoh</th></tr>
<tr><td>PAN</td><td>Personal Area Network</td><td>Sekitar tubuh (1-10 meter)</td><td>Bluetooth HP ke earphone, smartwatch</td></tr>
<tr><td>LAN</td><td>Local Area Network</td><td>Gedung/area kecil</td><td>Jaringan lab komputer sekolah, warnet</td></tr>
<tr><td>MAN</td><td>Metropolitan Area Network</td><td>Kota/wilayah</td><td>Jaringan antar kampus kota, TV kabel</td></tr>
<tr><td>WAN</td><td>Wide Area Network</td><td>Negara/benua/dunia</td><td>Internet, jaringan bank nasional</td></tr>
</table>
<h3>Topologi Jaringan</h3>
<p>Topologi adalah bentuk atau pola hubungan antarkomputer dalam jaringan:</p>
<ul>
<li><strong>Star (Bintang):</strong> Semua komputer terhubung ke satu perangkat pusat (switch/hub). Paling umum digunakan di sekolah dan kantor. Jika satu komputer rusak, yang lain tetap berjalan.</li>
<li><strong>Ring (Cincin):</strong> Komputer terhubung membentuk lingkaran. Data bergerak satu arah. Jika satu putus, seluruh jaringan terganggu.</li>
<li><strong>Bus:</strong> Semua komputer terhubung ke satu kabel utama. Murah tapi jika kabel utama rusak, semua terganggu.</li>
<li><strong>Mesh:</strong> Setiap komputer terhubung ke semua komputer lain. Paling handal tapi mahal. Digunakan di jaringan kritis (militer, backbone internet).</li>
</ul>
<h3>Komponen Jaringan Komputer</h3>
<table>
<tr><th>Komponen</th><th>Fungsi</th></tr>
<tr><td>Router</td><td>Menghubungkan jaringan berbeda, membagi koneksi internet ke banyak perangkat</td></tr>
<tr><td>Switch</td><td>Menghubungkan banyak komputer dalam satu jaringan LAN</td></tr>
<tr><td>Access Point (AP)</td><td>Memancarkan sinyal WiFi agar perangkat bisa terhubung nirkabel</td></tr>
<tr><td>Kabel LAN (UTP)</td><td>Media transmisi data berbasis kabel tembaga</td></tr>
<tr><td>NIC (Network Interface Card)</td><td>Kartu jaringan di komputer untuk terhubung ke jaringan</td></tr>
<tr><td>Modem</td><td>Mengubah sinyal digital komputer menjadi sinyal yang bisa dikirim via kabel telepon/fiber</td></tr>
</table>
<h3>Keunggulan Jaringan Komputer</h3>
<ul>
<li>Berbagi file dan data dengan cepat tanpa flashdisk</li>
<li>Berbagi satu printer untuk banyak komputer</li>
<li>Berbagi koneksi internet</li>
<li>Komunikasi real-time (chat, video call)</li>
<li>Backup data terpusat</li>
</ul>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Gambarkan dan jelaskan topologi Star! Mengapa topologi ini paling banyak digunakan di sekolah?<br>2. Bedakan fungsi Router dan Switch. Bisakah sebuah jaringan hanya punya salah satunya?<br>3. Jaringan WiFi di rumahmu termasuk jenis jaringan apa? Jelaskan komponen-komponen yang terlibat!<br>4. Apa yang dimaksud dengan topologi Mesh? Mengapa digunakan di jaringan militer?</div>`
      },
      {
        id: 'bab4b',
        judul: 'Internet dan Layanannya',
        icon: '🌍',
        konten: `
<h2>B. Internet dan Layanannya</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami cara kerja internet, berbagai layanan yang tersedia, dan memanfaatkannya secara produktif dan bijak.</div>
<h3>Apa itu Internet?</h3>
<p>Internet (Interconnected Network) adalah jaringan komputer terbesar di dunia yang menghubungkan miliaran perangkat di seluruh dunia menggunakan protokol standar TCP/IP. Internet bukan dimiliki satu pihak — ini adalah jaringan jaringan yang saling terhubung.</p>
<h3>Cara Kerja Internet Secara Sederhana</h3>
<ol>
<li>Kamu ketik alamat website (contoh: google.com) di browser</li>
<li>Browser mengirim permintaan ke <strong>DNS Server</strong> untuk mencari alamat IP dari google.com</li>
<li>DNS menjawab: IP google.com adalah 142.250.x.x</li>
<li>Browser mengirim permintaan ke server Google di IP tersebut</li>
<li>Server Google mengirim balik halaman web</li>
<li>Browser menampilkan halaman tersebut di layarmu</li>
</ol>
<h3>Layanan-Layanan Internet</h3>
<table>
<tr><th>Layanan</th><th>Protokol</th><th>Fungsi</th><th>Contoh</th></tr>
<tr><td>World Wide Web (WWW)</td><td>HTTP/HTTPS</td><td>Mengakses halaman web</td><td>Website, berita online</td></tr>
<tr><td>Email</td><td>SMTP, POP3, IMAP</td><td>Surat elektronik</td><td>Gmail, Outlook</td></tr>
<tr><td>Streaming</td><td>HTTP, RTMP</td><td>Tonton/dengar media online</td><td>YouTube, Spotify, Netflix</td></tr>
<tr><td>VoIP</td><td>SIP, WebRTC</td><td>Telepon/video call via internet</td><td>WhatsApp call, Zoom, Google Meet</td></tr>
<tr><td>Cloud Storage</td><td>HTTPS</td><td>Simpan data di server online</td><td>Google Drive, OneDrive, iCloud</td></tr>
<tr><td>Media Sosial</td><td>HTTPS</td><td>Interaksi sosial digital</td><td>Instagram, TikTok, Twitter</td></tr>
<tr><td>E-commerce</td><td>HTTPS</td><td>Jual beli online</td><td>Tokopedia, Shopee, Lazada</td></tr>
</table>
<h3>Memahami URL (Alamat Website)</h3>
<div class="info-box"><strong>Anatomi URL: https://www.sekolah.sch.id/info/kelas9</strong><br>• <strong>https://</strong> → Protokol (aman/terenkripsi)<br>• <strong>www</strong> → Subdomain<br>• <strong>sekolah</strong> → Nama domain<br>• <strong>.sch.id</strong> → Domain: .sch = sekolah, .id = Indonesia<br>• <strong>/info/kelas9</strong> → Path/halaman yang dituju</div>
<h3>Jenis Domain Indonesia</h3>
<ul>
<li><strong>.go.id</strong> — Instansi pemerintah (kemdikbud.go.id)</li>
<li><strong>.sch.id</strong> — Sekolah (smpnegeri1.sch.id)</li>
<li><strong>.ac.id</strong> — Perguruan tinggi (ui.ac.id)</li>
<li><strong>.or.id</strong> — Organisasi non-profit</li>
<li><strong>.co.id</strong> — Perusahaan komersial (tokopedia.co.id)</li>
</ul>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Jelaskan apa yang terjadi step-by-step saat kamu mengklik tautan di WhatsApp!<br>2. Apa perbedaan HTTP dan HTTPS? Mengapa HTTPS lebih aman untuk transaksi online?<br>3. Identifikasi jenis domain dari URL berikut: kemdikbud.go.id, ui.ac.id, shopee.co.id, pmii.or.id<br>4. Sebutkan 3 layanan internet yang kamu gunakan setiap hari. Untuk apa masing-masing kamu gunakan?</div>`
      },
      {
        id: 'bab4c',
        judul: 'Keamanan Siber dan Etika Digital',
        icon: '🛡️',
        konten: `
<h2>C. Keamanan Siber dan Etika Digital</h2>
<div class="info-box"><strong>Tujuan Pembelajaran:</strong> Siswa dapat memahami ancaman keamanan siber, menerapkan langkah-langkah perlindungan, dan berperilaku etis di dunia digital.</div>
<h3>Ancaman Keamanan Siber</h3>
<table>
<tr><th>Ancaman</th><th>Penjelasan</th><th>Cara Menghindari</th></tr>
<tr><td>Malware</td><td>Software berbahaya: virus, trojan, ransomware</td><td>Antivirus update, jangan download sembarangan</td></tr>
<tr><td>Phishing</td><td>Penipuan dengan meniru identitas resmi untuk mencuri data</td><td>Verifikasi pengirim, jangan klik link mencurigakan</td></tr>
<tr><td>Social Engineering</td><td>Manipulasi psikologis untuk mendapatkan informasi rahasia</td><td>Jangan share password/OTP ke siapapun</td></tr>
<tr><td>Cyberbullying</td><td>Perundungan/pelecehan di dunia digital</td><td>Blokir, laporkan, simpan bukti, beritahu orang tua/guru</td></tr>
<tr><td>Pencurian Identitas</td><td>Menggunakan data pribadi orang lain untuk kejahatan</td><td>Jaga privasi data pribadi online</td></tr>
</table>
<h3>Membuat Password yang Kuat</h3>
<ul>
<li>Minimal <strong>8 karakter</strong> (idealnya 12+)</li>
<li>Kombinasi <strong>huruf besar</strong>, <strong>huruf kecil</strong>, <strong>angka</strong>, dan <strong>simbol</strong></li>
<li>Jangan gunakan informasi pribadi (tanggal lahir, nama) </li>
<li>Gunakan password berbeda untuk setiap akun</li>
<li>Aktifkan <strong>Two-Factor Authentication (2FA)</strong> jika tersedia</li>
</ul>
<div class="info-box"><strong>Contoh Password:</strong><br>❌ Buruk: 123456, password, tanggallahir, namapacar<br>✅ Baik: Sk0l@hKu2026!, M@t1nfOrm@t1k4, InfoKu#IX-2026</div>
<h3>Etika Digital (Netiquette)</h3>
<p>Etika digital adalah aturan tidak tertulis tentang perilaku yang sopan dan bertanggung jawab di dunia digital:</p>
<ul>
<li><strong>Jangan menyebar hoaks:</strong> Verifikasi informasi sebelum share. Cek di Kominfo atau Turnbackhoax.id</li>
<li><strong>Hormati privasi orang lain:</strong> Jangan unggah foto/video orang lain tanpa izin</li>
<li><strong>Gunakan bahasa yang sopan:</strong> Pesan digital juga bisa menyakiti perasaan orang</li>
<li><strong>Hargai hak cipta:</strong> Jangan gunakan karya orang lain tanpa izin atau tanpa kredit</li>
<li><strong>Jaga reputasi digital:</strong> Apa yang kamu posting online bisa dilihat semua orang dan sulit dihapus</li>
</ul>
<h3>Melindungi Privasi Online</h3>
<ul>
<li>Atur privasi akun media sosial agar hanya teman yang bisa melihat</li>
<li>Jangan share lokasi real-time ke orang asing</li>
<li>Hati-hati dengan informasi yang kamu isi di formulir online</li>
<li>Gunakan VPN jika mengakses WiFi publik</li>
<li>Periksa izin aplikasi — apakah benar-benar perlu akses kamera/mikrofon?</li>
</ul>
<h3>Digital Footprint (Jejak Digital)</h3>
<p>Setiap aktivitasmu di internet meninggalkan jejak digital yang bisa dilacak. Postingan, komentar, foto, dan like-mu tersimpan di server dan bisa ditemukan bahkan bertahun-tahun kemudian.</p>
<div class="info-box"><strong>Prinsip Penting:</strong> "Sebelum posting, tanya dirimu: Apakah aku nyaman jika postingan ini dilihat guru, orang tua, atau calon pemberi kerja di masa depan?" Jika ragu — jangan diposting.</div>
<div class="warning-box"><strong>Latihan Mandiri:</strong><br>1. Jelaskan apa itu phishing dan berikan contoh konkret yang mungkin kamu temui di WhatsApp atau email!<br>2. Buatlah sebuah password yang kuat untuk akun media sosialmu. Jelaskan mengapa password itu kuat!<br>3. Apa yang dimaksud jejak digital? Mengapa jejak digital bisa berbahaya di masa depan?<br>4. Kamu menerima pesan WhatsApp berisi berita mengejutkan dengan tautan. Apa langkah-langkah yang kamu lakukan sebelum memutuskan share atau tidak?<br>5. Sebutkan 3 contoh pelanggaran etika digital yang sering terjadi di kalangan remaja, beserta dampak negatifnya!</div>`
      }
    ]
  }
};

// ─── BANK SOAL KUIS ───────────────────────────────────────────────────────────
const QUIZ_DATA = {
  bab1: [
    { soal: 'Struktur data yang menggunakan prinsip LIFO adalah...', opsi: ['Queue', 'Array', 'Stack', 'Tree'], jawaban: 2, pembahasan: 'Stack (tumpukan) menggunakan prinsip LIFO — Last In, First Out. Data yang terakhir masuk akan pertama kali keluar.' },
    { soal: 'Operasi pada Stack yang digunakan untuk memasukkan data disebut...', opsi: ['Enqueue', 'Push', 'Pop', 'Dequeue'], jawaban: 1, pembahasan: 'Push adalah operasi untuk memasukkan data ke dalam Stack. Sedangkan Pop digunakan untuk mengeluarkan data.' },
    { soal: 'Antrian cetak dokumen printer menggunakan prinsip...', opsi: ['LIFO', 'FILO', 'FIFO', 'LILO'], jawaban: 2, pembahasan: 'Printer queue menggunakan FIFO (First In, First Out) — dokumen yang dikirim pertama akan dicetak lebih dahulu.' },
    { soal: 'Indeks pertama pada Array dimulai dari...', opsi: ['1', '0', '-1', '2'], jawaban: 1, pembahasan: 'Dalam hampir semua bahasa pemrograman, indeks Array dimulai dari 0. Jadi elemen pertama ada di indeks 0.' },
    { soal: 'Struktur data Tree sering digunakan untuk merepresentasikan...', opsi: ['Antrian printer', 'Struktur folder komputer', 'Daftar belanja', 'Playlist musik'], jawaban: 1, pembahasan: 'Tree cocok untuk data hierarkis seperti struktur folder (C: → Program Files → subfolder) atau silsilah keluarga.' },
    { soal: 'Tombol Undo (Ctrl+Z) memanfaatkan struktur data...', opsi: ['Queue', 'Array', 'Tree', 'Stack'], jawaban: 3, pembahasan: 'Tombol Undo menggunakan Stack. Aksi terakhir yang dilakukan disimpan di tumpukan, dan Undo mengambil (Pop) aksi teratas.' },
    { soal: 'Perbedaan Array dan List yang paling tepat adalah...', opsi: ['Array lebih lambat dari List', 'Array berukuran dinamis, List berukuran tetap', 'Array berukuran tetap, List berukuran dinamis', 'Keduanya sama saja'], jawaban: 2, pembahasan: 'Array memiliki ukuran tetap yang ditentukan saat dibuat. List bersifat dinamis, artinya ukurannya bisa bertambah atau berkurang.' },
    { soal: 'Operasi Dequeue pada Queue berarti...', opsi: ['Menambah data di belakang antrian', 'Melihat data terdepan', 'Mengeluarkan data dari depan antrian', 'Mengosongkan antrian'], jawaban: 2, pembahasan: 'Dequeue adalah operasi mengeluarkan data dari bagian depan antrian (Queue), sesuai prinsip FIFO.' },
    { soal: 'Manakah yang bukan termasuk struktur data dasar?', opsi: ['Array', 'Stack', 'Queue', 'Algoritma'], jawaban: 3, pembahasan: 'Algoritma adalah urutan langkah untuk menyelesaikan masalah, bukan struktur data. Array, Stack, dan Queue adalah struktur data.' },
    { soal: 'Buffer video streaming YouTube menggunakan struktur data...', opsi: ['Stack', 'Queue', 'Tree', 'Array'], jawaban: 1, pembahasan: 'Buffer streaming menggunakan Queue (FIFO). Data video yang pertama diunduh akan pertama kali diputar.' }
  ],
  bab2: [
    { soal: 'Blog adalah singkatan dari...', opsi: ['Web Blog', 'Web Log', 'Wide Log', 'Web Location'], jawaban: 1, pembahasan: 'Blog adalah singkatan dari "web log" — semacam jurnal atau catatan harian yang dipublikasikan di web.' },
    { soal: 'Platform berikut yang digunakan untuk membuat blog adalah...', opsi: ['YouTube', 'TikTok', 'Blogger', 'Spotify'], jawaban: 2, pembahasan: 'Blogger (blogger.com) adalah platform blog milik Google yang populer dan gratis untuk membuat blog.' },
    { soal: 'Perbedaan Paste biasa dengan Paste Special adalah...', opsi: ['Tidak ada perbedaan', 'Paste Special memungkinkan memilih format data yang ditempel', 'Paste Special hanya bisa di Word', 'Paste biasa lebih lambat'], jawaban: 1, pembahasan: 'Paste Special memungkinkan pengguna memilih format tempel: sebagai teks, gambar, atau link yang terhubung ke sumber.' },
    { soal: 'Vlog adalah singkatan dari...', opsi: ['Video Log', 'Visual Blog', 'Video Blog', 'Virtual Log'], jawaban: 2, pembahasan: 'Vlog adalah singkatan dari "video blog" — konten blog yang disajikan dalam format video.' },
    { soal: 'Menyalin konten orang lain ke blog tanpa izin disebut...', opsi: ['Sharing', 'Repost', 'Plagiarisme', 'Kuotasi'], jawaban: 2, pembahasan: 'Plagiarisme adalah tindakan menggunakan karya orang lain (teks, gambar, ide) tanpa izin dan tanpa menyebut sumber.' },
    { soal: 'Aplikasi editing video yang populer untuk pemula di HP adalah...', opsi: ['Photoshop', 'CapCut', 'Notepad', 'Excel'], jawaban: 1, pembahasan: 'CapCut adalah aplikasi editing video mobile yang populer, mudah digunakan, dan memiliki banyak fitur menarik.' },
    { soal: 'Saat mengintegrasikan grafik Excel ke Word agar otomatis update, gunakan...', opsi: ['Paste biasa', 'Copy saja', 'Paste Special dengan Link', 'Screenshot'], jawaban: 2, pembahasan: 'Paste Special dengan opsi "Paste Link" menghubungkan grafik di Word dengan data sumber di Excel, sehingga update otomatis.' },
    { soal: 'Rule of thirds dalam pengambilan video vlog berarti...', opsi: ['Rekam video 3 menit saja', 'Objek utama diletakkan di 1/3 bagian frame', 'Gunakan 3 kamera sekaligus', 'Edit video dalam 3 tahap'], jawaban: 1, pembahasan: 'Rule of thirds adalah teknik komposisi fotografi/videografi: objek utama ditempatkan di titik persimpangan garis yang membagi frame menjadi 9 bagian sama besar.' },
    { soal: 'Manakah ekstensi file yang merupakan format video?', opsi: ['.docx', '.mp4', '.xlsx', '.png'], jawaban: 1, pembahasan: '.mp4 adalah format file video yang paling umum digunakan. .docx untuk dokumen Word, .xlsx untuk Excel, .png untuk gambar.' },
    { soal: 'Urutan tahapan produksi vlog yang benar adalah...', opsi: ['Produksi → Pra-produksi → Pasca-produksi', 'Pasca-produksi → Produksi → Pra-produksi', 'Pra-produksi → Produksi → Pasca-produksi', 'Produksi → Pasca-produksi → Pra-produksi'], jawaban: 2, pembahasan: 'Tahapan produksi yang benar: Pra-produksi (perencanaan) → Produksi (perekaman) → Pasca-produksi (editing dan publikasi).' }
  ],
  bab3: [
    { soal: 'CPU singkatan dari...', opsi: ['Central Program Unit', 'Computer Processing Unit', 'Central Processing Unit', 'Computer Program Utility'], jawaban: 2, pembahasan: 'CPU (Central Processing Unit) adalah "otak" komputer yang menjalankan semua instruksi program.' },
    { soal: 'RAM berfungsi sebagai...', opsi: ['Penyimpanan permanen data', 'Memori sementara untuk program yang sedang berjalan', 'Kartu grafis komputer', 'Penghubung semua komponen'], jawaban: 1, pembahasan: 'RAM (Random Access Memory) adalah memori sementara. Data di RAM hilang saat komputer dimatikan, berbeda dengan HDD/SSD.' },
    { soal: 'Siklus kerja CPU yang benar adalah...', opsi: ['Execute-Fetch-Decode', 'Decode-Execute-Fetch', 'Fetch-Decode-Execute', 'Fetch-Execute-Decode'], jawaban: 2, pembahasan: 'Siklus CPU: Fetch (ambil instruksi dari RAM) → Decode (terjemahkan instruksi) → Execute (jalankan instruksi).' },
    { soal: 'Manakah yang termasuk perangkat output?', opsi: ['Keyboard', 'Scanner', 'Mouse', 'Monitor'], jawaban: 3, pembahasan: 'Monitor adalah perangkat output karena menampilkan hasil pengolahan data. Keyboard, scanner, dan mouse adalah perangkat input.' },
    { soal: 'Sistem Operasi termasuk jenis software...', opsi: ['Aplikasi', 'Driver', 'Sistem', 'Antivirus'], jawaban: 2, pembahasan: 'Sistem Operasi (Windows, macOS, Linux, Android) adalah software sistem yang mengelola semua hardware dan software lain.' },
    { soal: 'Shortcut untuk mengunci komputer Windows adalah...', opsi: ['Ctrl+L', 'Alt+L', 'Windows+L', 'Shift+L'], jawaban: 2, pembahasan: 'Windows+L adalah shortcut untuk mengunci komputer Windows dengan cepat, berguna saat meninggalkan komputer sejenak.' },
    { soal: 'Aturan backup 3-2-1 berarti...', opsi: ['Backup 3 kali sehari', '3 salinan, 2 media berbeda, 1 di lokasi berbeda', '3 folder, 2 file, 1 cloud', 'Backup setiap 3-2-1 hari'], jawaban: 1, pembahasan: 'Aturan 3-2-1: buat 3 salinan data, simpan di 2 media berbeda (misal HDD + cloud), dengan 1 salinan di lokasi fisik berbeda.' },
    { soal: 'Cara membuka Task Manager di Windows adalah...', opsi: ['Ctrl+Alt+F4', 'Ctrl+Shift+Esc', 'Alt+Delete', 'Ctrl+F4'], jawaban: 1, pembahasan: 'Ctrl+Shift+Esc langsung membuka Task Manager. Alternatifnya bisa Ctrl+Alt+Del lalu pilih Task Manager.' },
    { soal: 'Ekstensi file .exe adalah...', opsi: ['File gambar', 'File dokumen', 'File program yang bisa dijalankan', 'File audio'], jawaban: 2, pembahasan: '.exe (executable) adalah format file program di Windows yang bisa langsung dijalankan oleh sistem operasi.' },
    { soal: 'Motherboad berfungsi sebagai...', opsi: ['Menyimpan data permanen', 'Mengolah grafis', 'Papan sirkuit yang menghubungkan semua komponen', 'Mendinginkan komputer'], jawaban: 2, pembahasan: 'Motherboard adalah papan sirkuit utama yang menghubungkan semua komponen komputer: CPU, RAM, storage, dan lainnya.' }
  ],
  bab4: [
    { soal: 'LAN adalah singkatan dari...', opsi: ['Large Area Network', 'Local Area Network', 'Long Area Network', 'Linked Area Network'], jawaban: 1, pembahasan: 'LAN (Local Area Network) adalah jaringan komputer yang mencakup area kecil seperti sekolah, kantor, atau rumah.' },
    { soal: 'Perangkat yang memancarkan sinyal WiFi disebut...', opsi: ['Router', 'Switch', 'Access Point', 'Modem'], jawaban: 2, pembahasan: 'Access Point (AP) adalah perangkat yang memancarkan sinyal WiFi agar perangkat bisa terhubung ke jaringan secara nirkabel.' },
    { soal: 'Topologi jaringan yang paling banyak digunakan di sekolah adalah...', opsi: ['Ring', 'Bus', 'Mesh', 'Star'], jawaban: 3, pembahasan: 'Topologi Star paling populer karena jika satu komputer rusak tidak mempengaruhi yang lain, dan mudah dikonfigurasi.' },
    { soal: 'HTTPS berbeda dengan HTTP karena...', opsi: ['HTTPS lebih lambat', 'HTTPS mengenkripsi data sehingga lebih aman', 'HTTPS hanya untuk email', 'HTTPS tidak bisa diakses dari HP'], jawaban: 1, pembahasan: 'HTTPS menggunakan enkripsi SSL/TLS untuk mengamankan data yang dikirim antara browser dan server, sehingga lebih aman.' },
    { soal: 'Phishing adalah...', opsi: ['Virus komputer yang merusak file', 'Penipuan dengan meniru identitas resmi untuk mencuri data', 'Jaringan WiFi palsu', 'Program yang memperlambat komputer'], jawaban: 1, pembahasan: 'Phishing adalah teknik penipuan siber dengan meniru tampilan website atau pesan dari institusi resmi untuk mencuri data pribadi.' },
    { soal: 'Domain .sch.id digunakan untuk...', opsi: ['Instansi pemerintah', 'Perguruan tinggi', 'Sekolah', 'Perusahaan komersial'], jawaban: 2, pembahasan: '.sch.id adalah domain khusus untuk sekolah di Indonesia. Contoh: smpnegeri1jakarta.sch.id' },
    { soal: 'Jejak digital adalah...', opsi: ['Virus yang merusak data', 'Semua data dan aktivitas yang ditinggalkan seseorang di internet', 'Cara menghapus riwayat browser', 'Fitur keamanan di media sosial'], jawaban: 1, pembahasan: 'Digital footprint (jejak digital) adalah semua rekam jejak aktivitas online: postingan, komentar, like, riwayat pencarian, dll.' },
    { soal: 'Two-Factor Authentication (2FA) berguna untuk...', opsi: ['Mempercepat loading website', 'Menambah lapisan keamanan akun dengan verifikasi kedua', 'Membuat password dua kali', 'Mengakses dua akun sekaligus'], jawaban: 1, pembahasan: '2FA menambahkan lapisan keamanan: selain password, diperlukan kode verifikasi (via SMS atau app) untuk masuk ke akun.' },
    { soal: 'Jaringan Bluetooth di HP termasuk jenis...', opsi: ['WAN', 'MAN', 'LAN', 'PAN'], jawaban: 3, pembahasan: 'Bluetooth termasuk PAN (Personal Area Network) karena jangkauannya sangat kecil, hanya sekitar 1-10 meter di sekitar tubuh.' },
    { soal: 'Langkah pertama yang benar saat menerima berita mengejutkan di WhatsApp adalah...', opsi: ['Langsung share ke semua grup', 'Verifikasi kebenarannya terlebih dahulu', 'Like dan komentari', 'Minta teman menyebarkan'], jawaban: 1, pembahasan: 'Selalu verifikasi informasi sebelum menyebarkannya. Cek di sumber terpercaya atau situs anti-hoaks seperti Turnbackhoax.id.' }
  ],
  evaluasi: [
    { soal: 'Manakah yang merupakan contoh penerapan Stack dalam kehidupan?', opsi: ['Antrian tiket bioskop', 'Tombol Back di browser', 'Daftar nama siswa', 'Struktur folder'], jawaban: 1, pembahasan: 'Tombol Back di browser menggunakan Stack (LIFO) — halaman yang terakhir dikunjungi adalah yang pertama kembali ditampilkan.' },
    { soal: 'Software yang bertugas mengelola semua hardware komputer adalah...', opsi: ['Aplikasi', 'Driver', 'Sistem Operasi', 'Antivirus'], jawaban: 2, pembahasan: 'Sistem Operasi (OS) bertugas mengelola semua hardware dan menyediakan platform untuk menjalankan aplikasi.' },
    { soal: 'Jaringan yang mencakup area seluruh dunia disebut...', opsi: ['LAN', 'MAN', 'WAN', 'PAN'], jawaban: 2, pembahasan: 'WAN (Wide Area Network) mencakup area sangat luas, bahkan seluruh dunia. Internet adalah contoh WAN terbesar.' },
    { soal: 'Algoritma yang baik harus memiliki sifat...', opsi: ['Terbuka dan tidak terbatas', 'Terbatas, pasti, dan efektif', 'Bebas dan fleksibel', 'Hanya bisa dijalankan komputer'], jawaban: 1, pembahasan: 'Algoritma yang baik harus: terbatas (finite), pasti (definite), ada input/output, dan efektif — semua langkahnya dapat dilaksanakan.' },
    { soal: 'Ekspresi logika (True AND False) menghasilkan...', opsi: ['True', 'False', 'Error', 'Null'], jawaban: 1, pembahasan: 'AND menghasilkan True hanya jika KEDUA operan bernilai True. Karena salah satunya False, hasilnya adalah False.' }
  ]
};

// ─── KAMUS ISTILAH ────────────────────────────────────────────────────────────
const KAMUS_DATA = [
  { istilah: 'Algoritma', definisi: 'Urutan langkah-langkah logis, sistematis, dan terbatas untuk menyelesaikan suatu masalah.', bab: 'Bab 1' },
  { istilah: 'Array', definisi: 'Struktur data berupa kumpulan elemen bertipe sama yang disimpan berurutan dan diakses menggunakan indeks mulai dari 0.', bab: 'Bab 1' },
  { istilah: 'Stack', definisi: 'Struktur data yang bekerja dengan prinsip LIFO (Last In, First Out) — data terakhir masuk adalah yang pertama keluar.', bab: 'Bab 1' },
  { istilah: 'Queue', definisi: 'Struktur data yang bekerja dengan prinsip FIFO (First In, First Out) — data pertama masuk adalah yang pertama keluar.', bab: 'Bab 1' },
  { istilah: 'LIFO', definisi: 'Last In, First Out — prinsip kerja Stack, elemen terakhir yang masuk akan pertama kali dikeluarkan.', bab: 'Bab 1' },
  { istilah: 'FIFO', definisi: 'First In, First Out — prinsip kerja Queue, elemen pertama yang masuk akan pertama kali dikeluarkan.', bab: 'Bab 1' },
  { istilah: 'Flowchart', definisi: 'Diagram alir berupa simbol-simbol standar yang menggambarkan urutan langkah dalam sebuah algoritma secara visual.', bab: 'Bab 1' },
  { istilah: 'Pseudocode', definisi: 'Penulisan algoritma menggunakan bahasa yang menyerupai kode pemrograman tetapi lebih mudah dipahami manusia.', bab: 'Bab 1' },
  { istilah: 'Operator Logika', definisi: 'Operator yang menggabungkan ekspresi boolean: AND, OR, dan NOT.', bab: 'Bab 1' },
  { istilah: 'Boolean', definisi: 'Tipe data yang hanya memiliki dua nilai: True (benar) atau False (salah).', bab: 'Bab 1' },
  { istilah: 'Blog', definisi: 'Singkatan web log, situs web berisi tulisan yang ditampilkan secara kronologis dan biasanya dikelola satu orang.', bab: 'Bab 2' },
  { istilah: 'Vlog', definisi: 'Singkatan video blog, konten blog dalam format video yang dipublikasikan di platform seperti YouTube atau TikTok.', bab: 'Bab 2' },
  { istilah: 'Plagiarisme', definisi: 'Tindakan menggunakan karya (tulisan, gambar, ide) orang lain tanpa izin dan tanpa menyebutkan sumbernya.', bab: 'Bab 2' },
  { istilah: 'Hak Cipta', definisi: 'Hak eksklusif pencipta atas karya yang dihasilkannya, melindungi karya dari penggunaan tanpa izin.', bab: 'Bab 2' },
  { istilah: 'Paste Special', definisi: 'Fitur di aplikasi perkantoran untuk menempel data dengan format tertentu, termasuk opsi link yang terhubung ke sumber.', bab: 'Bab 2' },
  { istilah: 'CPU', definisi: 'Central Processing Unit, komponen utama komputer yang menjalankan semua instruksi program, disebut juga "otak" komputer.', bab: 'Bab 3' },
  { istilah: 'RAM', definisi: 'Random Access Memory, memori sementara komputer yang menyimpan data program yang sedang aktif berjalan.', bab: 'Bab 3' },
  { istilah: 'Hardware', definisi: 'Perangkat keras komputer yang bisa dilihat dan disentuh secara fisik, seperti keyboard, monitor, dan CPU.', bab: 'Bab 3' },
  { istilah: 'Software', definisi: 'Perangkat lunak, program atau instruksi yang memberitahu hardware komputer apa yang harus dilakukan.', bab: 'Bab 3' },
  { istilah: 'Sistem Operasi', definisi: 'Software utama yang mengelola semua hardware dan software komputer. Contoh: Windows, macOS, Linux, Android.', bab: 'Bab 3' },
  { istilah: 'Troubleshooting', definisi: 'Proses sistematis mengidentifikasi, mendiagnosis, dan menyelesaikan masalah pada komputer atau perangkat teknologi.', bab: 'Bab 3' },
  { istilah: 'Backup', definisi: 'Proses membuat salinan data penting di tempat lain sebagai cadangan untuk mencegah kehilangan data.', bab: 'Bab 3' },
  { istilah: 'Driver', definisi: 'Software yang memungkinkan sistem operasi berkomunikasi dengan perangkat keras tertentu.', bab: 'Bab 3' },
  { istilah: 'LAN', definisi: 'Local Area Network, jaringan komputer yang mencakup area kecil seperti sekolah, kantor, atau rumah.', bab: 'Bab 4' },
  { istilah: 'WAN', definisi: 'Wide Area Network, jaringan komputer yang mencakup area sangat luas hingga seluruh dunia. Internet adalah WAN terbesar.', bab: 'Bab 4' },
  { istilah: 'Router', definisi: 'Perangkat jaringan yang menghubungkan jaringan berbeda dan mendistribusikan koneksi internet ke banyak perangkat.', bab: 'Bab 4' },
  { istilah: 'Internet', definisi: 'Interconnected Network, jaringan komputer terbesar di dunia yang menghubungkan miliaran perangkat menggunakan protokol TCP/IP.', bab: 'Bab 4' },
  { istilah: 'Phishing', definisi: 'Teknik penipuan siber dengan meniru identitas resmi (bank, pemerintah) untuk mencuri data pribadi korban.', bab: 'Bab 4' },
  { istilah: 'Malware', definisi: 'Malicious Software, perangkat lunak berbahaya yang dirancang untuk merusak atau mengakses sistem komputer tanpa izin.', bab: 'Bab 4' },
  { istilah: 'Enkripsi', definisi: 'Proses mengubah data menjadi format yang tidak bisa dibaca tanpa kunci khusus, untuk menjaga keamanan data.', bab: 'Bab 4' },
  { istilah: 'Topologi Jaringan', definisi: 'Pola atau bentuk hubungan antarkomputer dalam jaringan. Contoh: Star, Ring, Bus, Mesh.', bab: 'Bab 4' },
  { istilah: 'Jejak Digital', definisi: 'Semua rekam jejak aktivitas seseorang di internet: postingan, komentar, riwayat pencarian, dan data lainnya.', bab: 'Bab 4' },
  { istilah: 'Etika Digital', definisi: 'Aturan dan norma perilaku yang baik, sopan, dan bertanggung jawab dalam menggunakan teknologi digital.', bab: 'Bab 4' }
];
