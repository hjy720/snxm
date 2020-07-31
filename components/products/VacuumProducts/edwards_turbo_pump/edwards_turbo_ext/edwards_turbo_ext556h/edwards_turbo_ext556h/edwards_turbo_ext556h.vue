<template>
  <div class="ed_box">
    <h2 class="ed_title">Edwards EXT556H 复合涡轮分子泵</h2>
    <span class="se_img">
      <img src="../../../../../../../../img/Ed_trubo_ext556h.jpg" width="200" />
    </span>
    <h4 class="se_ztile">性能特点</h4>
    <ul class="se_xnlist2">
      <li>高临界前级压力。</li>
      <li>
        ● 高体积流速：
        <p>* 抽速快。</p>
      </li>
      <li class="rs">● 多级Holweck分子拖曳结构，对轻气体产生高压缩比。</li>
      <li>● 极限真空 &lt;10E-10 mbar 。</li>
      <li>● 提高了EXT的性能和可靠性。</li>
      <li>● 复合轴承。</li>
      <li>● 免维护。</li>
      <li>● 机加工整体转子。</li>
      <li>● 直流电机驱动。</li>
    </ul>
    <h4 class="se_ztile">技术数据</h4>
    <table
      class="se_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
      align="center"
    >
      <tbody>
        <tr>
          <td colspan="3">主入口法兰</td>
          <td width="259">DN160ISO-K</td>
        </tr>
        <tr>
          <td colspan="3">出口法兰</td>
          <td width="259">DN25NW</td>
        </tr>
        <tr>
          <td colspan="3">放气口</td>
          <td width="259">1/8 inch BSP</td>
        </tr>
        <tr>
          <td colspan="3">吹扫净化口</td>
          <td width="259">1/8 inch BSP</td>
        </tr>
        <tr>
          <td colspan="4">入口泵速*</td>
        </tr>
        <tr>
          <td colspan="3">N2</td>
          <td width="259">540 l/s</td>
        </tr>
        <tr>
          <td colspan="3">He</td>
          <td width="259">580 l/s</td>
        </tr>
        <tr>
          <td colspan="3">H2</td>
          <td width="259">500 l/s</td>
        </tr>
        <tr>
          <td colspan="3">Ar</td>
          <td width="259">510 l/s</td>
        </tr>
        <tr>
          <td colspan="4">压缩比</td>
        </tr>
        <tr>
          <td colspan="3">N2</td>
          <td width="259">>10E10</td>
        </tr>
        <tr>
          <td colspan="3">He</td>
          <td width="259">10E8</td>
        </tr>
        <tr>
          <td colspan="3">H2</td>
          <td width="259">10E6</td>
        </tr>
        <tr>
          <td colspan="3">Ar</td>
          <td width="259">>10E10</td>
        </tr>
        <tr>
          <td colspan="3">前级泵（推荐）</td>
          <td width="259">RV12</td>
        </tr>
        <tr>
          <td colspan="4">最高入口压力（ N2, He, H2 ）**</td>
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
    margin-left: 20px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .p5 {
    width: 90%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 15px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
  }
  .se_img {
    width: 30%;
    margin-left: 130px;
    img {
      width: 30%;
      margin-top: 5px;
      vertical-align: middle;
    }
  }
  .se_ztile {
    height: 25px;
    width: 64%;
    vertical-align: bottom;
    font-size: x-large;
    letter-spacing: 2px;
    margin-left: 140px;
    margin-top: 15px;
    color: rgb(255, 0, 0);
  }
  .se_xnlist2 {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    margin-left: 50px;
    margin-top: 20px;
    li {
      line-height: 28px;
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
}
.se_table {
  width: 92%;
  margin-left: 10px;
  margin-top: 25px;
  text-align: center;
  tr {
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
