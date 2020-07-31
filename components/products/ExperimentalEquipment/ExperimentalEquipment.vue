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
        <Breadcrumb-item :to="{ path: '/products/ExperimentalEquipment' }"
          >实验设备</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <br />
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
          <router-link to="/products/VacuumProducts"
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
    <div class="index_proimgd">
      <ul class="clearfix">
        <li>
          <span class="proimg_bk">
            <router-link
              to="/products/GPC"
              title="自动凝胶色谱净化仪"
              class="proimg"
            >
              <img src="../../../../img/gpc.jpg" alt="自动凝胶色谱净化仪" />
            </router-link>
          </span>
          <p>
            <router-link to="/products/GPC">自动凝胶色谱净化仪</router-link>
          </p>
        </li>
        <li>
          <span class="proimg_bk">
            <router-link to="/products/ks" title="超声波清洗器" class="proimg">
              <img src="../../../../img/ks01.jpg" alt="超声波清洗器" />
            </router-link>
          </span>
          <p>
            <router-link to="/products/ks">超声波清洗器</router-link>
          </p>
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
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.index_proimgd {
  float: right;
  position: relative;
  margin-right: -54px;
  width: 80%;
  margin-top: 20px;
  ul li {
    width: 268px;
    float: left;
    margin-bottom: 30px;
    height: 399px;
  }
  .clearfix {
    zoom: 1;
    p {
      width: 93%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      background: #666;
      margin-top: 10px;
      letter-spacing: 2px;
      margin-left: -1px;
      a:hover {
        color: orange;
      }
    }
    .proimg_bk {
      width: 254px;
      height: 349px;
      position: relative;
      display: table-cell;
      text-align: center;
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
      .gimg {
        width: 220px;
        margin-left: -20px;
      }
    }
  }
}

.fz_maidLp {
  float: left;
  width: 26%;
  margin-left: -5px;
  margin-top: -18px;
  .rlan {
    font-size: 18px;
    color: #004a82;
    padding-bottom: 10px;

    letter-spacing: 1px;
  }
  .siderbar {
    background: skyblue;
  }
  span {
    margin-left: -20px;
  }
}

.router_color {
  color: springgreen;
}

@media screen and(min-width: 1024px) {
  .index_proimgd {
    float: right;
    position: relative;
    margin-right: -51px;
    width: 75%;
    margin-top: 20px;
    ul li {
      width: 260px;
      float: left;
      margin-bottom: 30px;
      height: 399px;
    }
    .clearfix {
      zoom: 1;
      p {
        width: 93%;
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
      .proimg_bk {
        width: 244px;
        height: 349px;
        position: relative;
        display: table-cell;
        text-align: center;
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
  .fz_maidLp {
    float: left;
    width: 26%;
    margin-left: 10px;
    margin-top: 18px;
    .rlan {
      font-size: 18px;
      color: #004a82;
      padding-bottom: 10px;
      letter-spacing: 2px;
    }
    .siderbar {
      background: skyblue;
    }
    span {
      margin-left: -20px;
    }
  }
}

/*>=1024的设备屏幕*/
</style>
