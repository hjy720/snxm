<template>
  <div class="ed_box">
    <h2 class="ed_title">EXT70涡轮分子泵</h2>
    <h4 class="se_ztile">安装尺寸</h4>
    <p class="se_img">
      <img src="../../../../../../../../img/Ed_trubo_ext70_d.jpg" width="590" />
    </p>
    <br />
    <table
      class="se_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
        <tr>
          <td>A 前级泵口（出口法兰）</td>
          <td>E 冷却水连接处</td>
        </tr>
        <tr>
          <td>C 电连接盒</td>
          <td>G 地线</td>
        </tr>
        <tr>
          <td colspan="2">D 放气阀</td>
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
  .ed_title {
    width: 80%;
    font-size: x-large;
    color: #ff0000;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
  }
}
.se_img {
  width: 80%;
  margin-left: 50px;
  img {
    width: 80%;
    margin-top: 15px;
    vertical-align: middle;
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
  width: 80%;
  margin-left: 10px;
  margin-top: 25px;
  text-align: center;
  tr {
    letter-spacing: 2px;
    td {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
}
</style>
