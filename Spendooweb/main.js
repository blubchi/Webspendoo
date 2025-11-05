import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js";

// Ambil elemen
const userName = document.getElementById("userName");
const profilePic = document.getElementById("profilePic");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Nama pengguna
    userName.textContent = user.displayName || user.email.split("@")[0];

    // Foto profil (default user.png jika kosong)
    if (user.photoURL) {
      profilePic.src = user.photoURL;
    } else {
      profilePic.src = "assets/img/user.png";
    }

    // Simpan agar tidak reload lagi
    localStorage.setItem("userPhoto", profilePic.src);
    localStorage.setItem("userName", userName.textContent);

  } else {
    // Jika belum login, kembali ke halaman login
    window.location.href = "index.html";
  }
});

// Tombol logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await signOut(auth);
    localStorage.clear();
    window.location.href = "index.html";
  });
}
