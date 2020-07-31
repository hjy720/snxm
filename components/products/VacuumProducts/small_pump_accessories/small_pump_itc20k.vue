<template>
  <div class="ed_box">
    <h2 class="ed_title">ITC20K 入口化学吸附阱</h2>
    <span class="ed_img">
      <img src="../../../../../img/ITO20K.jpg" width="150" />
    </span>
    <h4 class="ed_ztile">性能特点</h4>
    <ul class="ed_xnlist">
      <ul class="ed_xnlist2">
        <li>● 吸附腐蚀性气体，以免侵蚀泵和泵油 。</li>
        <li>
          ● 吸附大分子气体（如用于抽涂有树脂的设备），以免附着而引起堵塞 。
        </li>
        <li>
          ● 标准吸附剂（活性炭），高吸附性，可吸附本身重量的 25%
          左右，即使抽大量水汽 。
        </li>
        <li>● 在两级泵上使用时，使用活性氧化铝做吸附剂还可防止返油 。</li>
        <li>● 也具有 ITO20K 捕集罐的特点 。</li>
      </ul>
    </ul>
    <h4 class="ed_ztile">安装尺寸</h4>
    <span class="ed_img">
      <img src="../../../../../img/ITO20K-Dimensions.jpg" width="150" />
    </span>
    <h4 class="ed_ztile">订货信息</h4>
    <table
      class="ed_table"
      width="100%"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
        <tr>
          <th width="447">描述</th>
          <th width="140">货号</th>
        </tr>
        <tr>
          <td>
            ITC20K 入口化学吸附阱（ 3.5 kg 重，可装活性炭填料 0.4 kg ），
            不含吸附剂，但 提供 NW25 卡箍、中心支架和 O 圈。
          </td>
          <td>A444-10-000</td>
        </tr>
        <tr>
          <th colspan="2">吸附剂</th>
        </tr>
        <tr>
          <td>0.5 kg 活性炭</td>
          <td>H122-05-001</td>
        </tr>
        <tr>
          <td>3 kg 活性炭</td>
          <td>H122-05-002</td>
        </tr>
        <tr>
          <td>0.45 kg 活性氧化铝</td>
          <td>H026-00-050</td>
        </tr>
        <tr>
          <td>0.2 kg 活性氧化铝</td>
          <td>H026-00-056</td>
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
  .ed_img {
    width: 40%;
    margin-left: 50px;
    img {
      width: 40%;
      margin-top: 5px;
      vertical-align: middle;
    }
  }
  .ed_imge {
    width: 100%;
    margin-left: 20px;
    img {
      width: 170px;
      margin-top: 5px;
      vertical-align: middle;
    }
    li {
      width: 180px;
      float: left;
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
  .ed_OrderingInformation {
    float: right;
    letter-spacing: 1px;
    margin-right: 370px;
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
