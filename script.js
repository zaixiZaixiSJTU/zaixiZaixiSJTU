// 漂浮气泡
function createBubble() {
  const bubble = document.createElement('div');
  bubble.style.position = 'absolute';
  bubble.style.bottom = '-50px';
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.width = bubble.style.height = Math.random() * 40 + 20 + 'px';
  bubble.style.background = 'rgba(255, 182, 193, 0.6)';
  bubble.style.borderRadius = '50%';
  bubble.style.opacity = Math.random() * 0.6 + 0.4;
  bubble.style.zIndex = 1;
  document.querySelector('.bubbles').appendChild(bubble);

  const duration = Math.random() * 8 + 7;
  bubble.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;

  setTimeout(() => {
    bubble.style.transform = `translateY(-${window.innerHeight + 100}px)`;
    bubble.style.opacity = '0';
  }, 100);

  setTimeout(() => bubble.remove(), duration * 1000);
}

setInterval(createBubble, 300);

// 点击按钮效果
function sayHi() {
  const messages = [
    "mua~ 💕",
    "今天也要开心哦！",
    "欢迎来到我的主页～",
    "一起 coding 吗？💻",
    "❤️ 感谢来访，记得 star~",
    "来 GitHub 找我玩呀 🐙"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.top = '30px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#ff9ece';
  toast.style.color = 'white';
  toast.style.padding = '15px 30px';
  toast.style.borderRadius = '50px';
  toast.style.boxShadow = '0 10px 30px rgba(255,156,206,0.5)';
  toast.style.zIndex = 999;
  toast.style.whiteSpace = 'nowrap';
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.6s';
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, -50px)';
    setTimeout(() => toast.remove(), 600);
  }, 1800);
}

// 初始化气泡
for (let i = 0; i < 12; i++) {
  setTimeout(createBubble, i * 200);
}