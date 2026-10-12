<template>
  <div class="page-container">
    <button class="back-btn" @click="$router.push('/')">← 返回首页</button>

    <div class="header">
      <h2>焦作云台山</h2>
    </div>

    <div class="banner">
      <img src="/img/110.png" alt="云台山" />
    </div>

    <h1 class="section-title">美好风景</h1>

    <div class="season-grid">
      <div v-for="(item, i) in seasons" :key="i" class="season-item">
        <h3>{{ item.label }}</h3>
        <img :src="item.image" :alt="item.label" />
      </div>
    </div>

    <div class="season-grid">
      <div v-for="(item, i) in times" :key="i" class="season-item">
        <h3>{{ item.label }}</h3>
        <img :src="item.image" :alt="item.label" />
      </div>
    </div>

    <div class="intro-section">
      <h1>地方简介</h1>
      <div class="intro-content">
        <img src="/img/屏幕截图 2023-12-20 212521.png" alt="云台山" />
        <div class="intro-text">
          <p>云台山，属太行山系，古称覆釜山、女娲山，因山岳高峻，群峰间常见白云缭绕，故名云台山。位于河南省焦作市境内北部太行山东端，南临黄河，主峰为茱萸峰，海拔1297.6米。云台山属于峰林峡谷地貌，属暖温带大陆性季风性气候，四季分明。</p>
          <p>云台山的地表河流主要有纸坊沟河、山门河、清水河等季节性自然河流，大气降水是其主要补充水源，它们旱季无水或少水，汛期则水势汹涌。</p>
          <p>从云台山的生态现状、植被景观来看，其植被群落演替，处在年轻生态系统向顶极生态系统演化的中间类型状态，具有可观的发展潜力。</p>
          <p>云台山有维管束植物650余种，分属94科，其中木本植物约150多种。云台山有哺乳动物、鸟类爬行类、两栖类、鱼类及水生动物约400种，昆虫类近400种。其中，国家三级以上保护动物10余种。</p>
          <p>云台山景区总面积50平方千米，含红石峡、潭瀑峡、泉瀑峡、茱萸峰、叠彩洞、猕猴谷、子房湖、万善寺等八大景点，是一处以太行山岳丰富的水景为特色，以峡谷类地质地貌景观和悠久的历史文化为内涵，集科学价值和美学价值与一身的科普生态旅游精品景区。</p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <p>2023河南5A级景点之焦作云台山&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;郑州工商学院</p>
   </footer>
  </div>
</template>

<script>
export default {
  name: 'Yuntai',
  data() {
    return {
      seasons: [
        { label: '春季', image: '/img/chunji.png' },
        { label: '夏季', image: '/img/xiaji.png' },
        { label: '秋季', image: '/img/qiuji.png' },
        { label: '冬季', image: '/img/dongji.png' }
      ],
      times: [
        { label: '日出', image: '/img/zaoshang.png' },
        { label: '正午', image: '/img/zhongwu.png' },
        { label: '日落', image: '/img/bangwan.png' },
        { label: '夜晚', image: '/img/wanshang.png' }
      ]
    }
  }
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #fdf8f3;
}
.back-btn {
  padding: 8px 20px;
  font-size: 16px;
  background: #c0392b;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
}
.back-btn:hover {
  background: #a93226;
}
.header h2 {
  text-align: center;
  font-size: 36px;
  color: #c0392b;
  padding: 20px 0;
}
.banner img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}
.section-title {
  font-size: 32px;
  color: #c0392b;
  margin: 30px 0 20px;
}
.season-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 30px;
}
.season-item {
  text-align: center;
}
.season-item h3 {
  font-size: 20px;
  color: #c0392b;
  margin-bottom: 8px;
}
.season-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s;
}
.season-item img:hover {
  transform: scale(1.05);
}
.intro-section {
  margin-top: 30px;
}
.intro-section h1 {
  font-size: 32px;
  color: #c0392b;
  margin-bottom: 20px;
}
.intro-content {
  display: flex;
  gap: 30px;
}
.intro-content img {
  width: 350px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}
.intro-text {
  flex: 1;
}
.intro-text p {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 12px;
}
.footer {
  margin-top: 40px;
  padding: 30px 0;
  text-align: center;
  font-size: 18px;
  color: #0b5aa8;
  border-top: 2px solid #e0d5c8;
  font-family: "华文行楷", "STKaiti", "微软雅黑", serif;
  background: #fdf8f3;
  border-radius: 12px;
}
</style>