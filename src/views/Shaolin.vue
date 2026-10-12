<template>
  <div class="page-container">
    <button class="back-btn" @click="$router.push('/')">← 返回首页</button>

    <div class="banner">
      <img src="/img/1-1.jpg" alt="登封" />
      <div class="banner-content">
        <h1 class="welcome">欢迎来到河南登封</h1>
        <p class="sub">Welcome to Dengfeng, Henan</p>
      </div>
    </div>

    <div class="intro-section">
      <div class="city-info">
        <div class="city-name-box">
          <span class="name-vertical">登<br />封</span>
          <span class="name-en">DENGFENG</span>
        </div>
        <p class="city-desc">秦朝，置阳城县和颍阳县（今东华镇）；唐天册万岁二年（696年），改嵩阳县为登封县。1958年，登封县划归郑州市。1994年5月，登封县撤县设市。登封市拥有"天地之中"历史建筑群世界文化遗产、"二十四节气"世界非物质文化遗产、中岳嵩山世界地质公园、少林功夫等众多世界级名片。</p>
        <img src="/img/1-2.jfif" alt="登封" class="side-img" />
      </div>
    </div>

    <div class="section-title">
      <h1>少林寺</h1>
      <img src="/img/1-3.jpg" alt="少林寺" />
    </div>

    <div class="info-grid">
      <div class="info-item">
        <h3>布局结构</h3>
        <p>少林寺常住院建筑在郑州登封少溪河北岸，从山门到千佛殿，共七进院落，总面积约57600平方米。主要包括常住院、塔林和初祖庵等。寺西有塔林，北有初祖庵、达摩洞、甘露台，西南有二祖庵，东北有广慧庵。</p>
      </div>
      <div class="info-item">
        <h3>地理位置</h3>
        <p>少林寺位于郑州市登封市区西北13公里的中岳嵩山南麓，与古都洛阳隔山相望。少林寺背依五乳峰，周围山峦环抱、峰峰相连，形成了少林寺的天然屏障。</p>
      </div>
      <div class="info-item">
        <h3>历史文化</h3>
        <p>少林功夫是中国武术中体系最庞大的门派，武功套路高达七百种以上，又因以禅入武，习武修禅，又有"武术禅"之称。少林寺是佛教禅宗的祖庭，禅宗以明心见性、顿悟成佛为要旨。</p>
      </div>
    </div>

    <div class="gallery">
      <h2>少林寺照片</h2>
      <div class="gallery-grid">
        <img v-for="(img, i) in galleryImages" :key="i" :src="img" :alt="'少林寺' + (i+1)" />
      </div>
    </div>

    <div class="video-section">
      <h2>少林寺视频</h2>
      <video src="/img/sp.mp4" controls class="main-video"></video>
    </div>

    <div class="carousel-section">
      <div class="carousel-container">
        <img v-for="(img, i) in carouselImages" :key="i" v-show="carouselIndex === i" :src="img" :alt="'少林寺风光' + (i+1)" />
      </div>
    </div>

    <footer class="footer">
      <p>2023河南5A级景点之嵩山少林寺&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;郑州工商学院</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Shaolin',
  data() {
    return {
      carouselIndex: 0,
      galleryImages: ['/img/1-4.jpg', '/img/1-5.png', '/img/1-6.png', '/img/1-7.png', '/img/1-8.png', '/img/1-9.png'],
      carouselImages: ['/img/03.jpg', '/img/04.jpg', '/img/05.jpg']
    }
  },
  mounted() {
    setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % this.carouselImages.length
    }, 2000)
  }
}
</script>

<style scoped>
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}
.back-btn {
  padding: 8px 20px;
  font-size: 16px;
  background: #f5a623;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
}
.back-btn:hover {
  background: #d48c1a;
}
.banner {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}
.banner img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}
.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0,0,0,0.6);
}
.welcome {
  font-size: 52px;
  font-weight: bold;
  letter-spacing: 4px;
}
.sub {
  font-size: 28px;
  letter-spacing: 2px;
}
.intro-section {
  background: #fcf8f0;
  padding: 30px;
  border-radius: 12px;
  margin: 20px 0;
}
.city-info {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}
.city-name-box {
  text-align: center;
  padding: 10px 20px;
  background: #f5a623;
  border-radius: 8px;
  color: #fff;
}
.name-vertical {
  font-size: 28px;
  writing-mode: vertical-rl;
  letter-spacing: 6px;
}
.name-en {
  font-size: 16px;
  letter-spacing: 2px;
}
.city-desc {
text-indent: 2em; 
 flex: 1;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
}
.side-img {
  width: 300px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}
.section-title {
  text-align: center;
  padding: 30px 0;
  background: #fcf8f0;
  margin: 20px 0;
  border-radius: 12px;
}
.section-title h1 {
  font-size: 48px;
  color: #d48c1a;
}
.section-title img {
  height: 770px;
  width: 100%;
  margin-top: 10px;
  border-radius: 12px;
}
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 30px 0;
}
.info-item {
  background: #fcf8f0;
  padding: 20px;
  border-radius: 12px;
}
.info-item h3 {
  font-size: 24px;
  color: #d48c1a;
  margin-bottom: 12px;
}
.info-item p {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
}
.gallery h2, .video-section h2 {
  text-align: center;
  font-size: 36px;
  color: #d48c1a;
  padding: 20px 0;
  background: #fcf8f0;
  border-radius: 12px;
  margin: 20px 0;
}
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.gallery-grid img {
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}
.gallery-grid img:hover {
  transform: scale(1.03);
}
.main-video {
  width: 100%;
  border-radius: 12px;
}
.carousel-section {
  margin: 30px 0;
}
.carousel-container {
  width: 100%;
  height: 700px;
  overflow: hidden;
  border-radius: 12px;
}
.carousel-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.8s;
}
.footer {
  margin-top: 40px;
  padding: 30px 0;
  text-align: center;
  font-size: 18px;
  color: #0b5aa8;
  border-top: 2px solid #e0d5c8;
  font-family: "华文行楷", "STKaiti", "微软雅黑", serif;
  background: #fcf8f0;
  border-radius: 12px;
}
</style>