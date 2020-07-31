<template>
  <div class="ed_box">
    <tr>
      <td width="247" height="10">
        <div align="left">
          <img src="../../../../img/DeTechLogo.jpg" width="246" height="62" />
        </div>
      </td>
      <td width="161" valign="middle">
        <div align="center">
          <h2 class="ed_title">电子倍增器</h2>
        </div>
      </td>
      <td width="185" height="10">
        <div align="right">
          <img
            src="../../../../img/detech_upperRight.jpg"
            width="184"
            height="62"
          />
        </div>
      </td>
    </tr>
    <tr>
      <td height="10" colspan="2">
        <div align="center">
          <router-link to="/products/detech_agilent">
            <img src="../../../../img/agilentlogo.gif" width="246" />
          </router-link>
        </div>
      </td>
    </tr>
    <tr>
      <td height="10">&nbsp;</td>
      <td height="10">&nbsp;</td>
      <td height="10">&nbsp;</td>
    </tr>
    <tr>
      <td height="10" colspan="2">
        <div align="center">
          <router-link to="/products/detech_thermo">
            <img src="../../../../img/thermologo.gif" width="136" />
          </router-link>
        </div>
      </td>
    </tr>
    <tr>
      <td height="10">&nbsp;</td>
      <td height="10">&nbsp;</td>
      <td height="10">&nbsp;</td>
    </tr>
    <tr>
      <td height="10" colspan="2">
        <div align="center">
          <router-link to="/products/detech_pe">
            <img src="../../../../img/perkinElmerLogo.jpg" width="75" />
          </router-link>
        </div>
      </td>
    </tr>
    <tr>
      <td height="10">&nbsp;</td>
      <td height="10">&nbsp;</td>
      <td height="10">&nbsp;</td>
    </tr>
    <tr>
      <td height="10" colspan="2">
        <div align="center">
          <router-link to="/products/detech_varian">
            <img src="../../../../img/varianlogo.gif" width="75" />
          </router-link>
        </div>
      </td>
    </tr>
    <p class="rvpdf">
      <a href="../products/detech_reference.pdf"
        >各厂商使用DeTech电子倍增器一览表</a
      >
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.ed_box {
  width: 79%;
  margin-left: 25px;
  .ed_title {
    font-size: 30px;
    color: rgb(255, 0, 0);
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
  }
  .p5 {
    width: 90%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
  }
  .ed_img {
    width: 40%;
    margin-left: 20px;
    img {
      width: 40%;
      margin-top: 5px;
      vertical-align: middle;
    }
  }
}
.rvpdf {
  margin-left: -12px;
  margin-top: 12px;
  letter-spacing: 2px;
  font-size: 18px;
}
.ed_table {
  width: 100%;
  text-align: center;
  tr {
    text-align: center;
    letter-spacing: 2px;
    td {
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
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
