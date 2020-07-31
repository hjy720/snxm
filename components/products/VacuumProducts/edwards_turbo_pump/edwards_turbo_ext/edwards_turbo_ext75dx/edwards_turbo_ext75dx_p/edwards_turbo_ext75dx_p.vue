<template>
  <div class="ed_box">
    <h2 class="ed_title">EXT75DX涡轮分子泵</h2>
    <h4 class="se_ztile">特性曲线</h4>
    <p class="se_img">
     <p align="center" class="style4"> 泵速与入口压力关系曲线</p>
      <img
        src="../../../../../../../../img/Ed_trubo_ext75dx_g.jpg"
        width="590"
      />
         <table
      class="se_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
      <tr>
          <td>1 N2</td>
          <td>2 He</td>
          <td>3 H2</td>
        </tr>
        </tbody>
    </table>
    </p>
    <p class="se_img">
     <p align="center" class="style4"> 抽气量与入口压力关系曲线</p>
      <img
        src="../../../../../../../../img/Ed_trubo_ext75dx_T.jpg"
        width="590"
      />
         <table
      class="se_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
      <tr>
          <td>1 N2</td>
          <td>2 He</td>
        </tr>
        </tbody>
    </table>
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
    .se_img {
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
.se_ztile {
  height: 25px;
  width: 64%;
  vertical-align: bottom;
  font-size: x-large;
  letter-spacing: 2px;
  margin-left: 50px;
  margin-top: 15px;
  color: rgb(255, 0, 0);
}
.se_table {
  width: 70%;
  margin-left: 60px;
  margin-top: 10px;
  text-align: center;
  tr {
    letter-spacing: 2px;
    td {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
}
.style4 {
  letter-spacing: 1px;
  margin-left: -25px;
    color: #FF0000;
}
</style>
