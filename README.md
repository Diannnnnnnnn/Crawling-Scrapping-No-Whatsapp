# Crawling-Scrapping-No-Whatsapp
Dokumentasi WhatsApp Number Crawler
Langkah-Langkah Penggunaan

Buka WhatsApp WebBuka browser Anda dan kunjungi situs WhatsApp Web di https://web.whatsapp.com. Pastikan Anda sudah login dengan memindai kode QR menggunakan aplikasi WhatsApp di ponsel Anda.

Inspect HalamanKlik kanan di mana saja pada halaman WhatsApp Web, lalu pilih opsi Inspect (atau tekan Ctrl+Shift+I pada Windows/Linux, atau Cmd+Option+I pada Mac) untuk membuka Developer Tools.

Buka Tab ConsoleDi Developer Tools, klik tab Console untuk masuk ke konsol JavaScript.

salin seluruh code pada script.js pada repository ini. lalu tempel (paste) ke dalam konsol:  

Jalankan dan TungguTekan tombol Enter untuk menjalankan kode. Tunggu hingga JavaScript selesai berjalan. Proses ini akan mengumpulkan nomor telepon dari daftar chat yang terlihat di WhatsApp Web. Anda akan melihat log di konsol yang menunjukkan jumlah nomor sementara dan hasil akhir.


Alur Proses (Flow)

Inisialisasi:  

Fungsi dimulai dengan membuat Set untuk menyimpan nomor unik dan mendefinisikan fungsi delay untuk penundaan.
Mencari elemen div#pane-side sebagai kontainer scroll. Jika tidak ditemukan, proses berhenti dengan pesan error.


Proses Pengumpulan:  

Memulai loop yang menggulirkan konten ke bawah sebanyak 1500 piksel setiap 2000ms.
Mengumpulkan nomor dari elemen dengan title atau href yang mengandung pola + diikuti oleh digit menggunakan regex.
Memeriksa tinggi konten untuk mendeteksi apakah sudah mencapai akhir (stabil 5 kali).


Penutup:  

Setelah loop selesai, mencetak total nomor unik dan daftarnya ke konsol.
Mengembalikan array nomor yang dikumpulkan.





