<template>
  <div class="ed_box">
    <h2 class="ed_title">EXT406PX涡轮分子泵</h2>
    <h4 class="ed_ztile">安装尺寸</h4>
    <p class="ed_img">
      <img
        src="../../../../../../../../img/Ed_trubo_ext406px_d.jpg"
        width="590"
      />
    </p>
    <br />
    <table
      class="ed_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
        <tr>
          <td>A EXDC控制器</td>
          <td>D 吹扫净化口</td>
        </tr>
        <tr>
          <td>B 前级泵口</td>
          <td>E 放气口</td>
        </tr>
        <tr>
          <td>C 罗茨泵口</td>
          <td>F 接地</td>
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
.ed_img {
  width: 80%;
  margin-left: 50px;
  img {
    width: 80%;
    margin-top: 25px;
    vertical-align: middle;
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
