<template>
  <div class="ed_box">
    <h2 class="ed_title">EXT406PX涡轮分子泵</h2>
    <h4 class="ed_ztile">特性曲线</h4>
    <p class="ed_img">
     <p class="style4">ISO100</p>
      <img
        src="../../../../../../../../img/Ed_trubo_ext406px_ISO100.jpg"
        width="590"
      />
    </p>
    <p class="ed_img">
     <p class="style4">ISO160</p>
      <img
        src="../../../../../../../../img/Ed_trubo_ext406px_ISO160.jpg"
        width="590"
      />
    </p>
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
.ed_box {
  width: 90%;
  margin-left: 50px;
  .ed_title {
    width: 80%;
    font-size: x-large;
    color: #ff0000;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
    .ed_img {
      width: 30%;
      margin-left: 50px;
      img {
        width: 30%;
        margin-top: 15px;
        vertical-align: middle;
      }
    }
  }
}
.ed_ztile {
  height: 25px;
  width: 64%;
  vertical-align: bottom;
  font-size: x-large;
  letter-spacing: 2px;
  margin-left: 50px;
  margin-top: 15px;
  color: rgb(255, 0, 0);
}
.ed_table {
  width: 50%;
  margin-left: 60px;
  margin-top: 10px;
  text-align: center;
  tr {
    letter-spacing: 2px;
    td {
      font-family: Arial, Helvetica, sans-edrif;
    }
  }
}
.style4 {
  letter-spacing: 1px;
  margin-left: 250px;
    color: #FF0000;
}
</style>
