<template>
  <div>
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
        <Breadcrumb-item :to="{ path: '/techService' }"
          >技术服务</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <hr />
    <div class="se_box">
      <h4 class="se_title">一、真空泵维修保养</h4>
      <p class="p5">
        北京帅恩科技有限责任公司专修Edwards生产的各种真空泵，如机械真空泵、涡轮分子泵，同时维修莱<br />
        宝、巴尔塞思等进口真空泵，以及各种国产真空泵。
      </p>
      <span class="se_img">
        <img src="../../../img/edwards-jx1.jpg" width="227" />
      </span>
      <span class="se_img">
        <img src="../../../img/edwards-jx2.jpg" width="227" />
      </span>
      <span class="se_img">
        <img src="../../../img/edwards-wl.jpg" width="227" />
      </span>
      <br />
      <br />
      <span class="information">
        <router-link to="/techService/vacuumBump">更多信息</router-link>
      </span>
      <h4 class="se_title">二、质谱仪维修保养</h4>
      <p class="p5">
        北京帅恩科技有限责任公司承接各种磁质谱仪、四极杆质谱仪、色谱质谱联用仪的维修改造、升级、搬<br />家等技术服务。
      </p>
      <span class="information">
        <router-link to="/techService/msService">更多信息</router-link> </span
      ><br />
      <h4 class="se_title">三、其它仪器维修保养</h4>
      <p class="p5">
        北京帅恩科技有限责任公司以科技为本，服务于科技，还从事其它科学仪器的维修保养，尤其是质谱仪<br />器，分析仪器。
      </p>
      <span class="information">
        <router-link to="/techService/qtService">更多信息</router-link> </span
      ><br />
      <h4 class="se_title">四、几何量计量测试检定服务</h4>
      <p class="p5">
        北京帅恩科技有限责任公司几何量计量测试检定实验室长期从事专业几何量（长度）计量测试和检定工<br />作，开展的主要业务包括：三坐标检测、形位公差评定、数控加工零件的综合检测、空间复杂几何形状的<br />检测、计量仲裁以及精密几何零件的测绘等。
      </p>
      <span class="information">
        <router-link to="/techService/metrology">更多信息</router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {};
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
  .se_xnlist2 {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    margin-left: 50px;
    margin-top: 20px;
    li {
      line-height: 26px;
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
  margin-left: 50px;
  img {
    width: 30%;
    margin-top: 10px;
    vertical-align: middle;
  }
}
.information {
  margin-left: 250px;
}
.informationd {
  margin-left: -150px;
  a {
    font-size: 16px;
    color: red;
    margin-left: 170px;
    letter-spacing: 2px;
  }
  a:hover {
    color: green;
  }
}
</style>
