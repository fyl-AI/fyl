<template>
  <div class="page-container">
    <button class="back-btn" @click="$router.push('/')">← 返回首页</button>

    <div class="video-box">
      <h3>一分钟了解老君山</h3>
      <video src="/img/1.mp4" controls></video>
    </div>

    <div class="desc-box">
      <p>老君山（The Laojun Mountain），"天下无双圣境，世界第一仙山"。原名景室山，位于十三朝古都洛阳的栾川县县城东南三千米处。八百里伏牛山脉的主峰，玉皇顶海拔2217米。距今已有两千多年人文历史，是道教中历史最长的山脉。</p>
      <p>春秋时期，被公认为道教始祖的老子李耳到此归隐修炼，使之成为"道源"和"祖庭"。北魏始于其上建老君庙以纪念。贞观十一年（637年），唐太宗重修景室山铁顶老君庙，赐名"老君山"，成为道教主流全真派圣地。万历三十一年（1603年），明神宗诏谕老君山为"天下名山"，并发帑金建殿，成为历史上唯一被皇封为"天下名山"的中国山脉。</p>
      <p>老君山景观区6处、有景点179个，太清宫、十方院、灵官殿、淋醋殿、牧羊圈、救苦殿、传经楼、观音殿、三清殿、老君庙等庙宇16处。马鬃岭南侧有三千余亩石林景观对游人开放，被地质学者称为"北国石林"。</p>
      <p>老君山现为世界地质公园、国家AAAAA级旅游景区、国家地质公园、国家级自然保护区、省级重点文物保护单位、省级风景名胜区，中国北方道教信众拜谒圣地，中原山水文化杰出代表。2014年，老君山老子铜像被世界基尼斯总部输录为"大世界基尼斯之最——世界最高的老子铜像"。</p>
    </div>

    <div class="photo-section">
      <h3>老君山的美景</h3>
      <div class="photo-row">
        <img src="/img/p9.jpg" alt="老君山美景1" />
        <img src="/img/p10.jpg" alt="老君山美景2" />
      </div>
    </div>

    <div class="gallery-grid">
      <img v-for="(img, i) in galleryImages" :key="i" :src="img" :alt="'老君山' + (i+1)" />
    </div>

    <footer class="footer">
      <p>2023河南5A级景点之洛阳老君山&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;郑州工商学院</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Laojun',
  data() {
    return {
      galleryImages: ['/img/p1.jpg', '/img/p2.jpg', '/img/p3.jpg', '/img/p4.jpg', '/img/p5.jpg', '/img/p6.webp', '/img/p7.jpg', '/img/p8.jpg']
    }
  }
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.back-btn {
  padding: 8px 20px;
  font-size: 16px;
  background: #6c799d;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
}
.back-btn:hover {
  background: #4a5670;
}
.video-box {
  background: #2a3143;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.video-box h3 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 12px;
}
.video-box video {
  width: 100%;
  max-height: 480px;
  border-radius: 8px;
}
.desc-box {
  background: #6c799d;
  padding: 24px 30px;
  border-radius: 12px;
  margin: 20px 0;
  color: #fff;
}
.desc-box p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 10px;
}
.photo-section {
  background: #6c799d;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
}
.photo-section h3 {
  text-align: center;
  color: #c8e6c9;
  font-size: 28px;
  margin-bottom: 16px;
}
.photo-row {
  display: flex;
  gap: 20px;
}
.photo-row img {
  width: 50%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}
.photo-row img:hover {
  transform: scale(1.02);
}
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  margin: 20px 0;
  background: #6c799d;
  padding: 20px;
  border-radius: 12px;
}
.gallery-grid img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s;
}
.gallery-grid img:hover {
  transform: scale(1.05);
}
.footer {
  margin-top: 40px;
  padding: 30px 0;
  text-align: center;
  font-size: 18px;
  color: #0b5aa8;
  border-top: 2px solid #e0d5c8;
  font-family: "华文行楷", "STKaiti", "微软雅黑", serif;
  background: #6c799d;
  border-radius: 12px;
  color: #fff;
}
</style>