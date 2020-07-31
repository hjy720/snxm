<template>
  <div class="ed_box">
    <h2 class="ed_title">油箱排油组件</h2>
    <ul class="ed_xnlist">
      <ul class="ed_xnlist2">
        <li>
          有两种排油组件可选：
          <p>
            ● RV 油箱排油组件：包括1个加长排油管，适用于E2M0.7、E2M1.5、
            RV、E1M18、E2M18、E2M28。
          </p>
          <p>
            ● ODP20
            油箱排油组件：适用于E1M18、E2M18、E2M28。当接近真空泵排油塞比较困难或无法放置接油容器时，可以选用排油组件。组件包括
            1 个排油加长管和 1 个加压排油装置（可以在高油位时排油）。
          </p>
        </li>
      </ul>
    </ul>
    <h4 class="ed_ztile">订货信息</h4>
    <table
      class="ed_table"
      width="600"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
    >
      <tbody>
        <tr>
          <th>描述</th>
          <th>货号</th>
        </tr>
        <tr>
          <td>RV 油箱排油组件</td>
          <td>A505-03-000</td>
        </tr>
        <tr>
          <td>ODP20 油箱排油组件</td>
          <td>A500-02-000</td>
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
    text-align: center;
    letter-spacing: 2px;
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
  }
}
.ed_table {
  width: 90%;
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
