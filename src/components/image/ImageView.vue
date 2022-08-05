<template>
  <div class="flex column left">
    <div>
      <p class="paragraph">PLAYGROUND</p>
    </div>
    <div>
      <img
        alt="Quasar logo"
        src="~assets/image/image1.png"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageView"
};
</script>

<style scoped>
.left{
  width: 800px;
  height: 900px;
}
.paragraph{
  color: #003367;
  width: 370px;
  height: 32px;
  margin-top: 196px;
  margin-left: 215px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
}
img{
  width: 598px;
  height: 455px;
  margin-left: 122px;
  margin-top: 47px;
  margin-bottom: 140px;
}
</style>
