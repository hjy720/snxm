<template>
  <div>
    <!-- 面包屑导航区域 -->
    <div class="ivu-breadcrumb">
      <Breadcrumb
        :style="{
          marginLeft: '25px',
          marginTop: '14px',
          fontSize: '16px',
          fontWeight: '600'
        }"
      >
        <Breadcrumb-item :to="{ path: '/' }">首页</Breadcrumb-item>
        <Breadcrumb-item :to="{ path: '/other/intro' }"
          >公司简介</Breadcrumb-item
        >
        <Breadcrumb-item :to="{ path: '/other/BusinessScope' }"
          >经营范围</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <hr />
    <!-- 左栏 -->
    <span class="fz_titleL">
      <h2 class="titley">经营范围</h2>
      <span class="title_p">
        <p>
          1. 生产、现货销售SE812型、SE506型、SE606型氮吹仪和SE812J型数控恒<br />温水浴,
          SE812成套销售价7800.00，SE506成套销售价1800.00，SE606成套<br />销售价2800.00。SE812氮吹仪具有12位、可转动、可升降、针阀控制氮气<br />流量、数控恒温水浴等特点。到目前为止，该氮吹仪已在市场销售500台，<br />用户反应良好，国产价格，性能却达到进口氮吹仪Organomation的水平。
        </p>
        <p>
          2. 专业维修保养Edwards机械真空泵、涡轮分子泵、隔膜真空泵，以及其<br />它进口、国产机械真空泵、涡轮分子泵。
        </p>
        <p>
          3. 销售Edwards RV系列机械真空泵（RV3、RV5、RV8、RV12）、EM系列<br />机械真空泵（E2M0.7、E2M1.5、E1M/E2M18、E1M/E2M28、E1M/E2M40<br />、E1M/E2M80、E1M/E2M175
          、E1M/E2M275等）、D-LAB系列隔膜真空泵<br />（10-100、20-100、34-100、10-8、20-8、34-8）、EXT系列涡轮分子泵（<br />EXT70、EXT250、EXT255、EXT555）及其控制电源、真空规及显示控制仪、<br />真空泵泵油和配件等。
        </p>
        <p>
          4. 质谱技术咨询，质谱仪器、色质联机等分析设备的搬家、维护保养。维护<br />保养和订做。
        </p>
        <p>
          5. 根据用户需求设计定做各种真空系统，尤其是小型、无油真空系统。进行<br />维修保养真空系统。
        </p>
        <p>6. 加工各种陶瓷部件、机械部件等。</p>
      </span>
    </span>
    <!-- 右栏 -->
    <span class="fz_maidqR">
      <siderbar />
    </span>
  </div>
</template>
<script>
import Siderbar from "../siderbar/Siderbar.vue";
export default {
  components: {
    Siderbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.fz_titleL {
  width: 50%;
  margin-left: 50px;
  padding-bottom: 114px;
  .titley {
    font-size: 22px;
    color: red;
    font-weight: 600;
    padding-bottom: 10px;
    margin-left: 160px;
    letter-spacing: 2px;
  }
  .titley_f {
    width: 100%;
    font-size: 18px;
    color: green;
    padding-bottom: 10px;
    margin-left: 85px;
    letter-spacing: 1px;
  }
  .jianjied_p {
    p {
      width: 50%;
      font-size: 16px;
      line-height: 26px;
      margin-left: 25px;
      text-indent: 36px;
      padding-top: 6px;
      letter-spacing: 2px;
    }
  }
}
.fz_maidqR {
  float: right;
  width: 30%;
  margin-top: -510px;
  margin-right: 40px;
}
</style>
