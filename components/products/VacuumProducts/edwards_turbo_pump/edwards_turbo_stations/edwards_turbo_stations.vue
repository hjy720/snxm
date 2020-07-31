<template>
  <div class="ed_box">
    <h2 class="ed_title">Edwards EXPT泵组</h2>
    <span class="ed_img">
      <img src="../../../../../../img/Ed_trubo_TIC_Cart1.gif" width="200" />
      <img src="../../../../../../img/Ed_trubo_TIC_Cart2.gif" width="200" />
    </span>
    <p class="p5">
      EXPT泵组将分子泵和前级泵组合在一起，其中的控制器还兼容Edwards真<br />空规，与真空规连接，即可测量显示真空度。
    </p>
    <h4 class="ed_ztile">性能特点</h4>
    <ul class="ed_xnlist2">
      <li>● 配置齐全，操作简单。</li>
      <li>● 前级泵有旋片泵和干泵可选。</li>
      <li>● 内嵌控制器，兼容Edwards真空规。</li>
      <li>● 满足用户要求，无需安装，打开包装即可使用。</li>
    </ul>
    <h4 class="ed_ztile">典型应用</h4>
    <ul class="ed_xnlist2">
      <li>● 超高真空（UHV）系统</li>
      <li>● Beam lines</li>
      <li>● Load Locks</li>
      <li>● 表面科学</li>
      <li>● 高能物理</li>
    </ul>
    <h4 class="ed_ztile">订货信息</h4>
    <table
      class="ed_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
      align="center"
    >
      <tbody>
        <tr>
          <td width="79">
            <div align="center"><strong>分子泵</strong></div>
          </td>
          <td width="96">
            <div align="center"><strong>泵速（L/s）</strong></div>
          </td>
          <td width="76">
            <div align="center"><strong>入口法兰</strong></div>
          </td>
          <td width="86">
            <div align="center"><strong>前级泵</strong></div>
          </td>
          <td width="105">
            <div align="center"><strong>前级泵类型</strong></div>
          </td>
          <td width="103">
            <div align="center"><strong>货号</strong></div>
          </td>
        </tr>
        <tr>
          <td width="79"><div align="center">EXT75DX</div></td>
          <td width="96"><div align="center">65</div></td>
          <td width="76"><div align="center">NW40</div></td>
          <td width="86"><div align="center">E2M1.5</div></td>
          <td width="105"><div align="center">旋片泵</div></td>
          <td width="103"><div align="center">TM1211404</div></td>
        </tr>
        <tr>
          <td colspan="6">说明：仅是涡轮控制，UK电源插头。</td>
        </tr>
        <tr>
          <td width="79"><div align="center">EXT75DX</div></td>
          <td width="96"><div align="center">65</div></td>
          <td width="76"><div align="center">CF63</div></td>
          <td width="86"><div align="center">XDS5</div></td>
          <td width="105"><div align="center">干泵</div></td>
          <td width="103"><div align="center">TM3B22331</div></td>
        </tr>
        <tr>
          <td colspan="6">
            说明：涡轮和仪表控制、干泵（前级泵）、脚轮、隔断阀，欧洲电源插头。
          </td>
        </tr>
        <tr>
          <td><div align="center">EXT255DX</div></td>
          <td><div align="center">220</div></td>
          <td><div align="center">DN100ISO-K</div></td>
          <td><div align="center">RV8</div></td>
          <td><div align="center">旋片泵</div></td>
          <td><div align="center">TN4523514</div></td>
        </tr>
        <tr>
          <td colspan="6">
            说明：涡轮控制、油雾过滤器、脚轮、放气阀，UK电源插头。
          </td>
        </tr>
        <tr>
          <td><div align="center">EXT255DX</div></td>
          <td><div align="center">220</div></td>
          <td><div align="center">DN100CF</div></td>
          <td><div align="center">XDS10</div></td>
          <td><div align="center">干泵</div></td>
          <td><div align="center">TN5C24851</div></td>
        </tr>
        <tr>
          <td colspan="6">
            说明：涡轮和仪表控制、干泵（前级泵）、脚轮、消音器、前级阀、隔断阀，欧洲电源插头。
          </td>
        </tr>
      </tbody>
    </table>
    <span class="ed_OrderingInformation">
      <router-link to="/products/edwards_turbo_stationsm"
        >更多订货信息...</router-link
      >
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
.ed_box {
  width: 90%;
  margin-left: 50px;
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
    width: 30%;
    margin-left: 50px;
    img {
      width: 30%;
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
        line-height: 16px;
        text-indent: 18px;
      }
    }
    .rs {
      margin-top: -5px;
    }
  }
  .ed_OrderingInformation {
    float: right;
    letter-spacing: 1px;
    margin-right: 370px;
  }
}
.ed_table {
  width: 62%;
  margin-left: 10px;
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
