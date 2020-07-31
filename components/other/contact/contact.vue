<template>
  <div class="se_box">
    <!-- 面包屑导航区域 -->
    <div class="ivu-breadcrumb">
      <Breadcrumb
        :style="{
          marginLeft: '25px',
          marginTop: '14px',
          fontSize: '16px',
          fontWeight: '600',
        }"
      >
        <Breadcrumb-item :to="{ path: '/' }">首页</Breadcrumb-item>
        <Breadcrumb-item :to="{ path: '/contact' }">联系我们</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <hr />
    <span>
      <iframe
        width="100%"
        height="850"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="http://j.map.baidu.com/s/wqxIFb"
      ></iframe>
    </span>
    <table
      class="se_table"
      border="1"
      width="800"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
      align="center"
    >
      <tbody>
        <tr>
          <td><span class="se_title">E-mail：</span></td>
          <td colspan="2">
            <span class="p5">
              <a href="mailto:ferrencn@sohu.com">ferrencn@sohu.com</a>
            </span>
          </td>
        </tr>
        <tr>
          <td colspan="3"><span class="se_title">维修</span></td>
        </tr>
        <tr>
          <td><span class="se_title">E-mail：</span></td>
          <td>
            <span class="p5">
              <a href="mailto:service@ferrencn.com">service@ferrencn.com</a>
            </span>
          </td>
          <td>
            <span class="p5">
              <a href="mailto:sepuke@sohu.com">sepuke@sohu.com</a>
            </span>
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
.se_box {
  width: 90%;
  margin-top: 20px;
  margin-left: 50px;
  .se_title {
    width: 80%;
    font-size: 18px;
    color: #ff0000;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .p5 {
    width: 75%;
    font-size: 16px;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
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
.se_table {
  width: 80%;
  text-align: center;
  tr {
    letter-spacing: 2px;
    td {
      font-family: Arial, Helvetica, sans-serif;
      a {
        margin-left: 10px;
      }
    }
  }
}
</style>
