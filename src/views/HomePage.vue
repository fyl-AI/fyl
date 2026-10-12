<template>
  <div class="home">
    <div class="top-bar">
      <button @click="showLogin = true" class="btn-login">登录</button>
      <button @click="showRegister = true" class="btn-register">注册</button>
      <button @click="startTimer" class="btn-timer">开始计时</button>
    </div>

    <div class="clock">{{ currentTime }}</div>

    <!-- 登录弹窗 -->
    <div v-if="showLogin" class="modal-overlay" @click.self="showLogin = false">
      <div class="modal-content">
        <span class="close" @click="showLogin = false">&times;</span>
        <h2>登录</h2>
        <input type="text" v-model="loginForm.username" placeholder="用户名" />
        <input type="password" v-model="loginForm.password" placeholder="密码" />
        <button @click="handleLogin" class="btn-submit">登录</button>
      </div>
    </div>

    <!-- 注册弹窗 -->
    <div v-if="showRegister" class="modal-overlay" @click.self="showRegister = false">
      <div class="modal-content">
        <span class="close" @click="showRegister = false">&times;</span>
        <h2>注册</h2>
        <form @submit.prevent="handleRegister">
          <input type="text" v-model="registerForm.username" placeholder="用户名" required />
          <input type="password" v-model="registerForm.password" placeholder="密码" required />
          <input type="password" v-model="registerForm.confirmPassword" placeholder="确认密码" required />
          <input type="email" v-model="registerForm.email" placeholder="邮箱" required />
          <input type="tel" v-model="registerForm.phone" placeholder="手机号" required />
          <button type="submit" class="btn-submit">注册</button>
        </form>
      </div>
    </div>

   <div class="spot-row">
  <SpotCard
    title="龙门石窟"
    image="/img/1.png"
    desc="位于河南省洛阳市，是中国四大石窟之一，被誉为中国雕刻艺术的瑰宝。"
    link="/longmen"
    hoverClass="scale"
  />
  <SpotCard
    title="少林寺"
    image="/img/3.png"
    desc="位于河南省郑州市，是中国佛教祖庭之一，有着丰富的文化内涵。"
    link="/shaolin"
    hoverClass="skew"
  />
</div>

<div class="carousel" :style="{ backgroundImage: `url(${currentSlide})` }"></div>

<div class="spot-row">
  <SpotCard
    title="云台山"
    image="/img/2.png"
    desc="位于河南省焦作市，是中国著名的风景名胜区，被誉为华夏神奇地标。"
    link="/yuntai"
    hoverClass="matrix"
  />
  <SpotCard
    title="老君山"
    image="/img/6.png"
    desc="位于河南省洛阳，是中国历史文化名城，'天下第一仙山，世界第一仙山'。"
    link="/laojun"
    hoverClass="rotateY"
  />
</div>
    <footer class="footer">
      <p>2023河南5A级景点&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;郑州工商学院</p>
    
    </footer>
  </div>
</template>

<script>
import SpotCard from '@/components/SpotCard.vue'


  
export default {
  components: { SpotCard },
  name: 'HomePage',
  data() {
    return {
      showLogin: false,
      showRegister: false,
      loginForm: { username: '', password: '' },
      registerForm: { username: '', password: '', confirmPassword: '', email: '', phone: '' },
      currentTime: '00:00:00',
      timer: null,
      slides: ['/img/1.png', '/img/2.png', '/img/3.png', '/img/4.png', '/img/5.png', '/img/6.png', '/img/7.png', '/img/8.png'],
      slideIndex: 0
    }
  },
  computed: {
    currentSlide() {
      return this.slides[this.slideIndex] || '/img/8.jpg'
    }
  },
  mounted() {
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length
    }, 3000)
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer)
  },
  methods: {
    startTimer() {
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        const now = new Date()
        this.currentTime = String(now.getHours()).padStart(2, '0') + ':' +
                          String(now.getMinutes()).padStart(2, '0') + ':' +
                          String(now.getSeconds()).padStart(2, '0')
      }, 1000)
    },
    handleLogin() {
      alert('登录成功')
      this.showLogin = false
      this.loginForm = { username: '', password: '' }
    },
    handleRegister() {
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        alert('密码不一致')
        return
      }
      alert('注册成功')
      this.showRegister = false
      this.registerForm = { username: '', password: '', confirmPassword: '', email: '', phone: '' }
    }
  }
}
</script>

<style scoped>
.home { max-width: 1700px; margin: 0 auto; padding: 20px; }
.top-bar { display: flex; justify-content: flex-end; gap: 12px; margin-bottom: 10px; }
.top-bar button { padding: 8px 24px; font-size: 18px; border: none; border-radius: 6px; cursor: pointer; transition: all 0.3s; }
.btn-login { background: #2eb2e2; color: #fff; }
.btn-login:hover { background: #1a8ab0; }
.btn-register { background: #f5a623; color: #fff; }
.btn-register:hover { background: #d48c1a; }
.btn-timer { background: #4CAF50; color: #fff; }
.btn-timer:hover { background: #45a049; }
.clock { text-align: right; font-size: 32px; font-weight: bold; color: #2eb2e2; margin-bottom: 10px; font-family: "Courier New", monospace; }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-content { background: #fff; padding: 30px 40px; border-radius: 10px; width: 400px; max-width: 90%; position: relative; }
.modal-content .close { position: absolute; top: 12px; right: 18px; font-size: 28px; cursor: pointer; color: #999; }
.modal-content h2 { text-align: center; margin-bottom: 20px; color: #2eb2e2; }
.modal-content input { width: 100%; padding: 10px 14px; margin-bottom: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; }
.btn-submit { width: 100%; padding: 10px; background: #2eb2e2; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer; }
.btn-submit:hover { background: #1a8ab0; }
.main-title { text-align: center; font-family: "STXingkai", "STKaiti", "KaiTi", sans-serif; color: #4CAF50; font-size: 48px; margin-bottom: 30px; }
.spot-row { display: flex; justify-content: center; gap: 80px; flex-wrap: wrap; margin-bottom: 20px; }
.spot-card { text-align: center; padding: 10px; }
.spot-card h2 { font-size: 28px; color: #2eb2e2; margin-bottom: 12px; }
.spot-card p { font-size: 18px; color: #555; margin-top: 12px; line-height: 1.6; }
.spot-image { width: 400px; height: 250px; object-fit: cover; border-radius: 12px; transition: all 0.4s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.12); cursor: pointer; }
.scale:hover { transform: scale(1.08); }
.skew:hover { transform: skew(8deg); }
.matrix:hover { transform: matrix(1.05, 0, 0.05, 1.05, 0, 0); }
.rotateY:hover { transform: perspective(800px) rotateY(25deg); }
.carousel { width: 900px; height: 600px; margin: 20px auto; background-size: cover; background-position: center; border-radius: 16px; transition: background-image 0.8s ease; box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
.footer { margin-top: 60px; padding: 30px 0; text-align: center; font-size: 20px; font-family: "华文行楷", "STKaiti", "微软雅黑", serif; color: #0b5aa8; border-top: 2px solid #e0d5c8; line-height: 1.8; }
</style>