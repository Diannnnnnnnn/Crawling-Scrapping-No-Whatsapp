async function scrollAndCollectWA() {
  const numbers = new Set();
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  // Cari kontainer chat dengan selektor yang lebih spesifik
  const scrollContainer = document.querySelector('div#pane-side');
  if (!scrollContainer) {
    console.error("❌ Tidak ditemukan elemen scroll chat (#pane-side).");
    return;
  }

  // Fungsi untuk scroll dan collect nomor secara bertahap
  async function scrollAndCollect() {
    let lastHeight = 0;
    let stableCount = 0;
    const maxStableCount = 5; // Berhenti jika stabil 5 kali
    const scrollStep = 1500; // Scroll lebih besar untuk efisiensi
    const scrollDelay = 2000; // Delay lebih lama untuk memastikan render

    while (stableCount < maxStableCount) {
      // Scroll ke bawah
      scrollContainer.scrollBy(0, scrollStep);
      await delay(scrollDelay);

      // Kumpulkan nomor secara bertahap selama scrolling
      document.querySelectorAll('span[title*="+"], div[title*="+"], a[href*="wa.me"]').forEach(element => {
        const title = element.getAttribute("title") || element.getAttribute("href") || "";
        // Cari nomor dengan regex untuk fleksibilitas
        const numberMatch = title.match(/\+[\d\s-]+/);
        if (numberMatch) {
          numbers.add(numberMatch[0]);
        }
      });

      // Cek apakah sudah sampai bawah
      const currentHeight = scrollContainer.scrollTop + scrollContainer.clientHeight;
      if (currentHeight === lastHeight) {
        stableCount++;
      } else {
        stableCount = 0;
        lastHeight = currentHeight;
      }

      console.log(`🔄 Sedang mengumpulkan... Nomor sementara: ${numbers.size}`);
    }
  }

  // Jalankan proses scrolling dan pengumpulan
  await scrollAndCollect();

  // Log hasil akhir
  console.log("✅ Proses selesai!");
  console.log("📱 Total nomor unik ditemukan:", numbers.size);
  console.log("📋 Daftar nomor:", Array.from(numbers));

  return Array.from(numbers); // Kembalikan array nomor jika diperlukan
}

// Jalankan fungsi
scrollAndCollectWA();