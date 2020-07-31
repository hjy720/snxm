<template>
  <div class="se_box">
    <h2 class="se_title">真空泵维修保养</h2>
    <p class="p5">
      北京帅恩科技有限责任公司专修Edwards生产的各种真空泵，如机械真空泵、涡轮分子泵，同时维修莱宝、巴尔塞思等进口真空泵，以及各种国产真空泵。
    </p>
    <h4 class="se_ztile">一、Edwards机械真空泵</h4>
    <span class="se_img">
      <img src="../../../../img/edwards-jx1.jpg" width="227" />
      &nbsp;&nbsp;&nbsp;
      <img src="../../../../img/edwards-jx2.jpg" width="227" />
    </span>
    <p class="p5">
      <span> 常见故障：</span>
      <br />
      <span class="rs">
        漏油、噪音大、真空度抽不上去或抽上去稳不住、不能运转、电机发热等。
      </span>
    </p>
    <h4 class="se_ztile">二、Edwards涡轮分子泵</h4>
    <ul class="se_list">
      <li>
        <img src="../../../../img/edwards-wl.jpg" width="227" />
        <p>EXT70</p>
      </li>
      <li class="ext">
        <img src="../../../../img/EXT200-200-30.jpg" width="227" />
        <p>EXT200/200/30</p>
      </li>
    </ul>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p class="p5">
      <span class="gz"> 常见故障：</span>
      <br />
      <span class="rs">
        噪音大、不能运转、真空度抽不上去或抽上去稳不住等。
      </span>
    </p>
    <h4 class="se_ztile">三、公司业绩</h4>

    <table
      width="573"
      class="se_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
      align="center"
    >
      <tbody>
        <tr>
          <td>北京大学化学系</td>
          <td>北京微量化学研究所</td>
        </tr>
        <tr>
          <td>防化兵研究院</td>
          <td>河南省分析测试中心</td>
        </tr>
        <tr>
          <td>国家标准物质研究中心</td>
          <td>北京东方化工厂</td>
        </tr>
        <tr>
          <td>上海复旦大学</td>
          <td>中国科学院物理研究所</td>
        </tr>
        <tr>
          <td>协和医院</td>
          <td>中国科学院高能物理研究所</td>
        </tr>
        <tr>
          <td>北京红惠新医药科技有限公司</td>
          <td>上海思百吉仪器系统有限公司北京分公司</td>
        </tr>
        <tr>
          <td>中国农业大学</td>
          <td>中国石油化工股份有限公司北京燕山分公司</td>
        </tr>
        <tr>
          <td>清华大学化学系</td>
          <td>中国科学院生态环境研究中心</td>
        </tr>
        <tr>
          <td>沈阳市疾病控制中心</td>
          <td>北京工业大学环能学院</td>
        </tr>
        <tr>
          <td>北京燕山石化研究院分析中心</td>
          <td>中国科学院地质与地球物理研究所</td>
        </tr>
        <tr>
          <td>路易公司</td>
          <td>浙江省纤维检验局</td>
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
.se_box {
  width: 90%;
  margin-left: 50px;
  .se_title {
    width: 70%;
    font-size: x-large;
    color: #ff0000;
    margin-left: 100px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .p5 {
    width: 90%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
  }
  .se_ztile {
    height: 25px;
    width: 64%;
    vertical-align: bottom;
    font-size: 22px;
    letter-spacing: 2px;
    margin-left: 50px;
    margin-top: 15px;
    color: rgb(0, 0, 255);
  }
  .se_table {
    width: 80%;
    text-align: center;
    tr {
      letter-spacing: 2px;
      td {
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  .se_list {
    width: 75%;
    li {
      width: 245px;
      float: left;
      p {
        text-align: center;
        margin-left: -20px;
        letter-spacing: 2px;
      }
    }
    .ext {
      margin-top: 50px;
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
}
.se_img {
  width: 30%;
  margin-left: 25px;
  img {
    width: 30%;
    margin-top: 10px;
    vertical-align: middle;
  }
}
.rs {
  margin-left: 55px;
}
.gz {
  margin-left: -245px;
}
</style>
