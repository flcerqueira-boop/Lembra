// Service worker das notificações. Cole aqui a MESMA firebaseConfig do index.html.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3EZ8zzKpVrOSTFPJAGRYtD_LS9QdXcDA",
  authDomain: "lembra-4cf32.firebaseapp.com",
  projectId: "lembra-4cf32",
  storageBucket: "lembra-4cf32.firebasestorage.app",
  messagingSenderId: "232760812927",
  appId: "1:232760812927:web:5fba9b42e83f3b4c21264a"
});

// O SDK exibe a notificação sozinho e abre o app ao tocar.
firebase.messaging();

// Atualiza o número no ícone quando chega um lembrete, mesmo com o app fechado
self.addEventListener("push", (e) => {
  try {
    const p = e.data.json();
    const n = Number(p.data && p.data.count);
    if (!Number.isNaN(n) && self.navigator.setAppBadge) {
      e.waitUntil((n ? self.navigator.setAppBadge(n) : self.navigator.clearAppBadge()).catch(() => {}));
    }
  } catch (_) {}
});
