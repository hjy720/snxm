<template>
  <div class="ed_box">
    <table
      class="se_table"
      width="593"
      border="0"
      cellspacing="0"
      cellpadding="0"
      align="center"
    >
      <tbody>
        <tr valign="bottom">
          <td height="25">
            <div align="center">
              <font size="5" color="#FF0000"
                ><span class="style1">EX</span
                ><strong><span class="style3">T70</span></strong></font
              ><strong><font size="5" color="#FF0000">涡轮分子泵</font></strong>
            </div>
          </td>
        </tr>
        <tr>
          <td height="10">
            <strong><font size="5" color="#FF0000">特性曲线</font></strong>
          </td>
        </tr>
        <tr>
          <td height="10">
            <div align="center" class="style4">泵速与入口压力关系曲线</div>
          </td>
        </tr>
        <tr>
          <td height="10">
            <div class="se_img" align="center">
              <img
                src="../../../../../../../../img/Ed_trubo_ext70_G_N2.jpg"
                width="590"
                height="272"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="se_img" align="center">
              <img
                src="../../../../../../../../img/Ed_trubo_ext70_G_He.jpg"
                width="590"
                height="272"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="se_img" align="center">
              <img
                src="../../../../../../../../img/Ed_trubo_ext70_G_H2.jpg"
                width="590"
                height="272"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="center">
              <span class="style4">抽气量与入口压力关系曲线</span><br />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="center" class="se_img">
              <img
                src="../../../../../../../../img/Ed_trubo_ext70_T_He.jpg"
                width="590"
                height="507"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="center" class="se_img">
              <img
                src="../../../../../../../../img/Ed_trubo_ext70_T_N2 .jpg"
                width="590"
                height="507"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="center" class="se_img">
              <img
                src="../../../../../../../../img//Ed_trubo_ext70-ext70h_G.jpg"
                width="590"
                height="824"
              />
            </div>
          </td>
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
  img {
    width: 80%;
    margin-top: 15px;
    margin-left: -40px;
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
  width: 70%;
  margin-left: 30px;
  margin-top: 10px;
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
  color: #ff0000;
}
</style>
