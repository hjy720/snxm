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
        <Breadcrumb-item :to="{ path: '/products' }">产品展示</Breadcrumb-item>
        <Breadcrumb-item :to="{ path: '/products/wl00' }"
          >无溶剂萃取装置系列</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <hr />
    <!-- 左栏 侧边栏区域 -->
    <span class="fz_maidL">
      <h3 class="rlan">产品展示</h3>
      <a-menu :defaultSelectedKeys="['1']" mode="inline" class="siderbar">
        <a-menu-item key="2">
          <router-link to="/products">氮吹仪</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/products/GasStandard"
            >气体标准物质配置装置（静态）</router-link
          >
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/products/wl00">无溶剂萃取装置系列</router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link to="/products/vacuumsystem_SV">真空抽气系统</router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link to="products/VacuumProducts"
            >Edwards（爱德华）真空产品</router-link
          >
        </a-menu-item>
        <a-menu-item key="7">
          <router-link to="/products/VacuumProduction">
            <span>真空产品</span></router-link
          >
        </a-menu-item>
        <a-menu-item key="8">
          <router-link to="/products/ExperimentalEquipment">
            <span>实验设备</span></router-link
          >
        </a-menu-item>
        <a-menu-item key="9">
          <router-link to="/products/VacuumFitting">
            <span>质谱、真空配件</span></router-link
          >
        </a-menu-item>
      </a-menu>
    </span>
    <!-- 右栏 产品展示区域 -->
    <div class="index_proimg">
      <ul class="clearfix">
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/Extractor"
              title="无溶剂萃取装置系列"
              class="proimg"
            >
              <img
                src="../../../../../img/wl00-6.jpg"
                alt="无溶剂萃取装置系列"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/Extractor"
              >无溶剂萃取装置系列</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/MicroConcen"
              title="SHS-MT 静态顶空-微捕集浓缩系统"
              class="proimg"
            >
              <img
                src="../../../../../img/wl01.jpg"
                alt="SHS-MT 静态顶空-微捕集浓缩系统"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/MicroConcen"
              >SHS-MT静态顶空-微捕集浓缩系统</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/MicroColdTrap"
              title="MCT-01 微冷阱浓缩系统"
              class="proimg"
            >
              <img
                src="../../../../../img/wl02.jpg"
                alt="MCT-01 微冷阱浓缩系统"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/MicroColdTrap"
              >SHS-MT静态顶空-微捕集浓缩系统</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/MicroColdTrap"
              title="ME-MT-01 膜萃取-微捕集系统"
              class="proimg"
            >
              <img
                src="../../../../../img/wl03.jpg"
                alt="ME-MT-01 膜萃取-微捕集系统"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/MicroColdTrap"
              >ME-MT-01 膜萃取-微捕集系统</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/Purge"
              title="PMT-MCT 吹扫-微捕集浓缩系统"
              class="proimg"
            >
              <img
                src="../../../../../img/wl04.jpg"
                alt="PMT-MCT 吹扫-微捕集浓缩系统"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/Purge"
              >PMT-MCT 吹扫-微捕集浓缩系统</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/ThermalDesorption"
              title="CMT 400 A/B 热解吸装置"
              class="proimg"
            >
              <img
                src="../../../../../img/wl05.jpg"
                alt="CMT 400 A/B 热解吸装置"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/ThermalDesorption"
              >CMT 400 A/B 热解吸装置</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/ThermalDesorption"
              title="CMT 400 A/B 热解吸装置"
              class="proimg"
            >
              <img
                src="../../../../../img/wl05.jpg"
                alt="CMT 400 A/B 热解吸装置"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/ThermalDesorption"
              >CMT 400 A/B 热解吸装置</router-link
            >
          </p>
        </li>
        <li>
          <span class="proimg_bkg">
            <router-link
              to="/products/lowTemperature"
              title="CMT-01低温微捕集-热解吸系统"
              class="proimg"
            >
              <img
                src="../../../../../img/wl06.jpg"
                alt="CMT-01低温微捕集-热解吸系统"
              />
            </router-link>
          </span>
          <p>
            <router-link to="/products/lowTemperature"
              >CMT-01低温微捕集-热解吸系统</router-link
            >
          </p>
        </li>
        <li>
          <router-link
            to="/products/ControlSystem"
            title="LW-01控制操作系统"
            class="proimg"
          >
            <span class="p6"
              >LW-01控制系统是静态顶空系统和吹扫-微捕集浓缩系统的操作系统软件。此软件必须与对应的控制硬件系统联合使用。在进行一个样品处理之前，首先需要应用LW-01控制系统编辑一个操作方法，通过此方法控制和运行对应的系统并完成一个样品处理的全过程。</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.index_proimg {
  float: right;
  margin-right: -48px;
  width: 80%;
  margin-top: 28px;
  ul li {
    width: 280px;
    float: left;
    margin-bottom: 30px;
    height: 399px;
  }
  .clearfix {
    zoom: 1;
    p {
      width: 91%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      background: #666;
      margin-top: 10px;
      letter-spacing: 2px;
      margin-left: -1px;
      a {
        color: skyblue;
      }
    }
    .proimg_bkg {
      width: 254px;
      height: 349px;
      position: relative;
      display: table-cell;
      text-align: center;
      margin-right: -24px;
      border: 1px solid #000;
      vertical-align: middle;
      .proimg {
        width: 254px;
        line-height: 220px;
        height: 534px;
        font-size: 220px;
        text-align: center;
        position: static;

        top: 50%;
      }
      img {
        vertical-align: middle;
        position: static;
        top: -50%;
        left: -50%;
        width: 220px;
        height: 309px;
      }
    }
  }
}

.fz_maidL {
  float: left;
  width: 20%;
  margin-left: 20px;
  margin-top: 18px;
  .rlan {
    font-size: 22px;
    color: #004a82;
    padding-bottom: 10px;
    letter-spacing: 2px;
    text-align: center;
  }
  .siderbar {
    background: skyblue;
  }
}
.p6 {
  width: 90%;
  font-size: 16px;
  text-indent: 36px;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
}
.router_color {
  color: springgreen;
}
</style>
