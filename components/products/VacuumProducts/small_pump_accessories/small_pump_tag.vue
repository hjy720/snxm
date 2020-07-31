<template>
  <div class="ed_box">
    <h2 class="ed_title">换油提示卡</h2>
    <span class="ed_img">
      <img src="../../../../../img/OIL-TAG.jpg" width="150" />
    </span>
    <p class="p5">
      当泵油开始变成棕色时，利用换油提示卡可以提示用户换油。棕色表示泵油已经污染，油质下降，这时应该更换泵油，否则将会引起机械磨损，甚至导致故障。将换油标签系在排气口上就可。
    </p>
    <h4 class="ed_ztile">订货信息</h4>
    <table
      class="ed_table"
      width="433"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
        <tr>
          <th>描述</th>
          <th>货号</th>
        </tr>
        <tr>
          <td>换油提示卡，PK10</td>
          <td>A200-03-017</td>
        </tr>
      </tbody>
    </table>
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
  .rvpdf {
    margin-left: 65px;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: 600;
    a {
      color: green;
    }
  }
  .ed_title {
    width: 80%;
    font-size: x-large;
    color: #ff0000;
    margin-left: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .p5 {
    width: 90%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 15px;
    font-family: Arial, Helvetica, sans-edrif;
    letter-spacing: 2px;
  }
  .ed_img {
    width: 35%;
    margin-left: 50px;
    img {
      width: 35%;
      margin-top: 5px;
      vertical-align: middle;
    }
  }
  .ed_ztile {
    height: 25px;
    width: 64%;
    vertical-align: bottom;
    font-size: x-large;
    letter-spacing: 2px;
    margin-left: 140px;
    margin-top: 15px;
    color: rgb(255, 0, 0);
  }
}
.ed_table {
  width: 100%;
  margin-left: -10px;
  margin-top: 25px;
  text-align: center;
  tr {
    letter-spacing: 2px;
    td {
      text-align: center;
      font-family: Arial, Helvetica, sans-edrif;
    }
  }
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
</style>
