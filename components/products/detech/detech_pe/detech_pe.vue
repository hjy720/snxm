<template>
  <div class="ed_box">
<tr>
    <td width="247" height="10">
        <div align="left">
            <img src="../../../../../img/DeTechLogo.jpg" width="246" height="62">
        </div>
    </td>
    <td width="161" valign="middle">
        <div align="center">
            <p>&nbsp;</p>
        </div>
    </td>
    <td width="185" height="10">
        <div align="right"><img src="../../../../../img/perkinElmerLogo.jpg" width="136" height="68"></div>
    </td>
</tr>
<tr>
      <td height="10" colspan="3">
        <div align="center">
          <p>
              <h2 class="ed_title">用于PE的DeTech电子倍增器</h2>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td height="10" colspan="3">
        <div align="center">
          <img
            src="../../../../../img/detech_486.gif"
            width="73"
            height="76"
          /><img
            src="../../../../../img/detech_402ah3.gif"
            width="73"
            height="76"
          /><img
            src="../../../../../img/detech_489.gif"
            width="73"
            height="76"
          /><img
            src="../../../../../img/detech_471.gif"
            width="73"
            height="76"
          />
        </div>
      </td>
    </tr>
    <table width="800" border="1" class="ed_table" bordercolorlight="#FFFFFF" bordercolor="#8CC6FF" bgcolor="#EEF7FF" align="center">
    <tbody>
        <tr>
            <th>PE仪器型号</th>
            <th width="22%" colspan="2">DeTech电子倍增器型号</th>
        </tr>
        <tr>
            <td width="24%" valign="top">
                <div align="center">API III LCMS
                </div>
            </td>
            <td colspan="2">
                <div align="center">402A-H3</div>
            </td>
        </tr>
        <tr>
            <td width="24%" valign="top">
                <div align="center">API 4000, 3000, 100, 200 &amp; 300 Series</div>
            </td>
            <td colspan="2">
                <div align="center"> 486</div>
            </td>
        </tr>
        <tr>
            <td width="24%" valign="top">
                <div align="center">API 2000 </div>
            </td>
            <td colspan="2">
                <div align="center"> 489 </div>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <div align="center">Elan 5000 (unmounted), 500 &amp; 250</div>
            </td>
            <td colspan="2">
                <div align="center"> 201</div>
            </td>
        </tr>
        <tr>
            <td width="24%" valign="top">
                <div align="center">Elan 5000A (mounted)
                </div>
            </td>
            <td colspan="2">
                <div align="center"> 471 </div>
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
  methods: {},
};
</script>
<style lang="less" scoped>
.ed_box {
  width: 90%;
  margin-top: 15px;
  margin-left: 22px;
  .rvpdf {
    margin-left: 65px;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: 600;
    a {
      color: green;
    }
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
    width: 40%;
    margin-left: 50px;
    img {
      width: 40%;
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
  .ed_xnlist {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    margin-left: 35px;
    li {
      line-height: 26px;
    }
  }
  .ed_xnlist2 {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-edrif;
    letter-spacing: 2px;
    margin-left: 50px;
    margin-top: 20px;
    li {
      line-height: 26px;
      p {
        margin-top: 6px;
        line-height: 22px;
        text-indent: 18px;
      }
    }
    .rs {
      margin-top: -5px;
    }
  }
}
.ed_table {
  width:70%;
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
.ed_title {
  width: 80%;
  margin-top: 10px;
  font-size: x-large;
  color: #ff0000;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
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
