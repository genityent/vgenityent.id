setTimeout(() => {
  // Tambahkan efek fade-out
  document.body.style.opacity = "0";

  // Setelah animasi selesai, pindah halaman
  setTimeout(() => {
    window.location.href = "home.html"; // ganti ke file tujuanmu
  }, 1000); // tunggu 1 detik fade-out
}, 4000); // tunggu 5 detik sebelum fade
