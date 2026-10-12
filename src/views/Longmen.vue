<template>
  <div class="page-container">
    <button class="back-btn" @click="$router.push('/')">← 返回首页</button>

    <div class="banner">
      <img src="/img/2.jpg" alt="洛阳" />
      <div class="banner-overlay">
        <div class="city-name">洛<br />阳</div>
        <div class="city-desc">
          <p>洛阳居天下之中，因地处洛水之阳而得名，有5000多年文明史、4000多年城市史、1500多年建都史，
            是华夏文明的发祥地之一、丝绸之路的东方起点、隋唐大运河的中心。历史上先后有13个王朝在此建都，
            是中国建都最早、历时最长、朝代最多的城市。<p>洛阳市有二里头遗址、偃师商城遗址、东周王城遗址、汉魏洛阳城遗址、
            隋唐洛阳城遗址等五大都城遗址，龙门石窟、中国大运河、丝绸之路等3项6处世界文化遗产。</p></p>
        </div>
        <img src="/img/3.jpg" alt="洛阳" class="side-img" />
      </div>
    </div>

    <div class="section-title">
      <h1>龙门石窟</h1>
      <img src="/img/6.jpg" alt="龙门石窟" />
    </div>

    <div class="info-grid">
      <div class="info-item">
        <h3>石窟介绍</h3>
        <p>龙门石窟是中国石刻艺术宝库之一，位于洛阳市南郊伊河两岸的龙门山与香山上。龙门石窟开凿于北魏孝文帝迁都洛阳（公元493年）前后，之后历经东魏、西魏、北齐、隋、唐、五代、宋等朝代连续大规模营造达1400余年之久。2000年11月龙门石窟列入《世界遗产名录》。</p>
      </div>
      <div class="info-item">
        <h3>地理环境</h3>
        <p>"洛都四郊，山水之胜，龙门首焉。"——唐·白居易。龙门石窟位于古都洛阳南郊。这里两山对峙，伊水中流，佛光山色，风景秀丽，是宋代苏过所描绘"峥嵘两山门，共挹一水秀"的天阙奇观。</p>
      </div>
      <div class="info-item">
        <h3>名称由来</h3>
        <p>据《水经注》记载："昔大禹疏龙门以通水，两山相对，望之若阙，伊水历其间，故谓之伊阙。"到了隋朝，隋炀帝杨广认为这里是"真龙天子的门户"，从此伊阙便被人们习惯地称为龙门。</p>
      </div>
    </div>

    <div class="gallery">
      <h2>石窟照片</h2>
      <div class="gallery-grid">
        <img v-for="(img, i) in galleryImages" :key="i" :src="img" :alt="'龙门石窟' + (i+1)" />
      </div>
    </div>

    <div class="video-section">
      <h2>石窟视频</h2>
      <video src="/img/66.mp4" controls class="main-video"></video>
    </div>

    <!-- 轮播背景图 -->
    <div class="carousel-bg"></div>

    <footer class="footer">
      <p>2023河南5A级景点之洛阳龙门石窟&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;郑州工商学院</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Longmen',
  data() {
    return {
      galleryImages: [
        '/img/8.jpg', '/img/9.jpg', '/img/10.jpg',
        '/img/11.jpg', '/img/12.jpg', '/img/13.jpg'
      ]
    }
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
  background: #2eb2e2;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
}
.back-btn:hover {
  background: #1a8ab0;
}
.banner {
  background: #f0ebe5;
  border-radius: 16px;
  overflow: hidden;
}
.banner > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.banner-overlay {
  display: flex;
  padding: 30px;
  gap: 30px;
  background: #f5f0eb;
}
.city-name {
  font-size: 32px;
  font-weight: bold;
  color: #2e7d32;
  letter-spacing: 8px;
  padding: 10px;
}
.city-desc {
  text-indent: 2em;
  flex: 1;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
}
.side-img {
  width: 399px;
  height: 290px;
  object-fit: cover;
  border-radius: 12px;
}
.section-title {
  text-align: center;
  padding: 30px 0;
  background: #f5f0eb;
  margin: 20px 0;
  border-radius: 12px;
}
.section-title h1 {
  font-size: 48px;
  color: #2e7d32;
}
.section-title img {
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
  background: #faf8f5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.info-item h3 {
  font-size: 24px;
  color: #2e7d32;
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
  color: #2e7d32;
  padding: 20px 0;
  background: #f5f0eb;
  border-radius: 12px;
  margin: 20px 0;
}
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.gallery-grid img {
  width: 100%;
  height: 280px;
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
.carousel-bg {
  width: 100%;
  height: 800px;
  margin: 30px 0;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  animation: zrn 10s infinite step-end;
  background-image: url('/img/14.jpg');
}
@keyframes zrn {
  0% { background-image: url('/img/14.jpg'); }
  30% { background-image: url('/img/15.jpg'); }
  45% { background-image: url('/img/16.jpg'); }
  70% { background-image: url('/img/17.jpg'); }
  100% { background-image: url('/img/14.jpg'); }
}
.footer {
  margin-top: 40px;
  padding: 30px 0;
  text-align: center;
  font-size: 18px;
  color: #0b5aa8;
  border-top: 2px solid #e0d5c8;
  font-family: "华文行楷", "STKaiti", "微软雅黑", serif;
  background: #f5f0eb;
  border-radius: 12px;
}
</style>