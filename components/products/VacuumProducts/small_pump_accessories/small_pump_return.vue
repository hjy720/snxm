<template>
  <div class="ed_box">
    <h2 class="ed_title">回油组件</h2>
    <p class="p5">
      可以将油雾过滤器中过滤下的油回流到真空泵中，减少泵消耗。例如，气镇回油组件就可以安装在带气镇的真空泵上。
    </p>
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
          <td>回油组件 ( 适用于 RV 、 Speedivac 2 、 E2M0.7 、 E2M1.5 泵 )</td>
          <td>A504-19-000</td>
        </tr>
        <tr>
          <td>可调节气镇回油组件 ( 适用于 RV 泵 )</td>
          <td>A505-23-000</td>
        </tr>
        <tr>
          <td>回油组件 ( 适用于 E1M18 、 E2M28 泵 )</td>
          <td>A504-20-000</td>
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
  .p5 {
    width: 90%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 15px;
    font-family: Arial, Helvetica, sans-edrif;
    letter-spacing: 2px;
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
