<template>
  <div class="se_box">
    <h2 class="se_title">其它仪器维护保养</h2>
    <p class="p5">
      北京帅恩科技有限责任公司以科技为本，服务于科技，还从事其它科学仪器的维修保养，尤其是质谱仪<br />器，分析仪器。
    </p>
    <p class="kyky">修复的KYKY抽真空系统</p>
    <span class="se_img">
      <img src="../../../../img/kyky.jpg" width="227" />
    </span>
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
  .kyky {
    margin-left: 120px;
    letter-spacing: 2px;
    color: rgb(0, 0, 255);
  }
}
.se_img {
  width: 30%;
  margin-left: 25px;
  img {
    width: 30%;
    margin-top: 6px;
    vertical-align: middle;
  }
}
</style>
