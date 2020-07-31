<template>
  <div class="ed_box">
    <h2 class="ed_title">ITO20K入口液体捕集罐</h2>
    <span class="ed_img">
      <img src="../../../../../img/SMALL PUMP ACCESSORIES.jpg" width="283" />
    </span>
    <ul class="ed_xnlist">
      <ul class="ed_xnlist2">
        <li>
          <router-Link to="/products/small_pump_mist"
            >1. 出口油雾过滤器</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_return"
            >2. 回油组件</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_liquid"
            >3. 小体积入口液体捕捉罐</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_ito20k"
            >4. ITO20K 入口液体捕集罐</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_itc20k"
            >5. ITC20K 入口化学吸附阱</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_itf20k"
            >6. ITF20K 入口灰尘过滤器</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_fl20k"
            >7. FL20K 前置阱</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_vibration"
            >8. 减震器</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_drain">9. 排油组件</router-Link>
        </li>
        <li>
          <router-Link to="/products/small_pump_ob20"
            >10. OB20 油箱净化转换器</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_tag"
            >11. 换油提示卡</router-Link
          >
        </li>
        <li>12. RV 气镇转换器（ EM 泵没此项）</li>
        <li>
          <router-Link to="/products/small_pump_ebv20"
            >13. EBV20 电磁气镇阀</router-Link
          >
        </li>
        <li>
          <router-Link to="/products/small_pump_water"
            >14. 水泵（ WATER JET PUMP ） 0.23 m 3 h -1</router-Link
          >
        </li>
      </ul>
    </ul>
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
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .ed_xnlist {
    li {
      color: #000066;
      a {
        color: #000066;
      }
      a:hover {
        color: orange;
      }
    }
  }
  .ed_xnlist2 {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-edrif;
    letter-spacing: 2px;
    margin-left: 15px;
    margin-top: 20px;
    li {
      line-height: 36px;
    }
  }
}
.ed_img {
  width: 60%;
  margin-right: -165px;
  float: right;
  img {
    width: 60%;
    margin-top: 5px;
    vertical-align: middle;
  }
}
</style>
