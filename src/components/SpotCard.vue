<template>
  <div class="spot-card">
    <h2>{{ title }}</h2>
    <router-link :to="link">
      <img :src="image" :alt="title" :class="['spot-image', hoverClass]" />
    </router-link>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'SpotCard',
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true },
    hoverClass: { type: String, default: 'scale' }
  }
}
</script>

<style scoped>
.spot-card {
  text-align: center;
  padding: 10px;
}
.spot-card h2 {
  font-size: 28px;
  color: #2eb2e2;
  margin-bottom: 12px;
}
.spot-card p {
  font-size: 18px;
  color: #555;
  margin-top: 12px;
  line-height: 1.6;
}
.spot-image {
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.4s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.scale:hover {
  transform: scale(1.08);
}
.skew:hover {
  transform: skew(8deg);
}
.matrix:hover {
  transform: matrix(1.05, 0, 0.05, 1.05, 0, 0);
}
.rotateY:hover {
  transform: perspective(800px) rotateY(25deg);
}
</style>