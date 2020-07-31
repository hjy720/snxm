<template>
  <div class="se_box">
    <h2 class="se_title">质谱仪维护保养</h2>
    <p class="p5">
      北京帅恩科技有限责任公司承接各种磁质谱仪、四极杆质谱仪、色谱质谱联用仪的维修改造、升级、搬<br />家等技术服务。
    </p>
    <h4 class="se_ztile">公司业绩</h4>
    <li>一、中科院大连化物所的UTI在线质谱仪</li>
    <li>二、北京航天医学工程研究所的医用质谱仪</li>
    <li>三、北京东方化工厂的orbit质谱仪</li>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.se_box {
  width: 90%;
  margin-left: 50px;
  .se_title {
    width: 70%;
    font-size: x-large;
    color: #ff0000;
    margin-left: 100px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .p5 {
    width: 90%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
  }
  a {
    font-size: 16px;
    color: #000066;
    margin-left: 170px;
    letter-spacing: 2px;
  }
  a:hover {
    color: orange;
  }
  .se_ztile {
    height: 25px;
    width: 64%;
    vertical-align: bottom;
    font-size: 22px;
    letter-spacing: 2px;
    margin-left: 50px;
    margin-top: 15px;
    color: rgb(0, 0, 255);
  }
}
.se_img {
  width: 30%;
  margin-left: 25px;
  img {
    width: 30%;
    margin-top: 10px;
    vertical-align: middle;
  }
}
</style>
