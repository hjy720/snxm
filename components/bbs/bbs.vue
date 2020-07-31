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
        <Breadcrumb-item :to="{ path: '/bbs' }"
          >技术论坛</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <hr />
    <p>
    <ul
      class="infinite-list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
      style="overflow:auto"
    >
      <div v-for="i in count" class="infinite-list-item">
        <b class="se_bg"
          ><img src="../../../img/8.gif" width="15" height="15" />
          <span class="xp"
            ><router-link to="/bbs/bbs_show"
              >问：我的旋片泵性能不佳。这种问题的可能原因是什么？</router-link
            ></span
          >
          <font color="#999999"
            >(&nbsp;回贴数:0&nbsp;时间:2011/11/17 18:24:25)</font
          >
        </b>
        <p class="p5">
          <span>首贴内容：答：</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在正常操作下旋片泵通常是极其可靠的，不容易出故障。因此，请确认是不是真空故障，例如真空不良、抽真空速度下降或完全没有真空。泵性能不佳的原因有多种。<br />在拆泵进行维修以前先做以下初步检查是很好的做法。<br />
          1、检查真空计，确定真空计是否存在故障或需要校准。检查真空计进气口区域是否有任何污染物。<br />
          2、检查前级管并确保所有管件和管接头拧紧，查看系统是否漏气。如果前级管有波纹管或挠性管接头，请检查装置中是否有导致漏气的裂缝。<br />
          3、检查系统污染。如果系统被一些工艺物质污染，则该物质可能导致泵内部的机油降解。机油颜色可能变暗，在一些情况下甚至为“乳状”。<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通常更换机油或以合适等级的机油冲洗泵数次以清除受污染物质有助于使泵恢复初始性能。如果在进行所有检查后仍然不能解决问题，可以将泵送至授权服务中心维修。请确保在维修泵时使用原厂配件，因为旋片泵的良好性能在很大程度上取决于良好的表面加工以及有效密封。
        </p>
        <b class="se_bg"
          ><img src="../../../img/7.gif" width="15" height="15" />
          <span class="xp"
            ><router-link to="/bbs/bbs_sw"
              >RV12泵可以使用任何种类的真空泵油吗？</router-link
            ></span
          >
          <font color="#999999"
            >(&nbsp;回贴数:0&nbsp;时间:2011/7/5 20:30:15)</font
          >
        </b>
        <p class="p5">
          <span>首贴内容：回答：在旋片真空泵中真空泵油有多种功能：</span><br />
          1. 润滑：真空泵油润滑叶轮（叶片）周围的滑动面和轴承区域。<br />
          2.
          冷却：产生真空时泵压缩气体产生热量，真空泵油是散发泵部件的热量并将热量传到泵外壳的关键，然后在泵外壳利用空气冷却散发热量。
          <br />
          3.密封：
          真空泵油密封泵装置内部的间隙，以确保入口/出口之间达到良好的压差。<br />
          4.抗腐蚀：优质真空泵油连续覆盖了泵内部部件，防止泵送的水或化学蒸汽的腐蚀。<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edwards致力于生产一系列真空泵油，即使在苛刻环境中使用寿命也很长。其它真空泵油能可以润滑，但是饱和蒸汽压可能会太高，从而使真空泵油在较低压力下放气而不能达到良好的真空度。另一个问题是真空泵油由于高温或进入泵体的腐蚀性蒸汽而氧化。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edwards
          Ultragrade真空泵油经过精心选择，饱和蒸汽压低，并包含抗氧化剂和腐蚀抑制剂，同时在正常操作温度范围内具有合适的粘度。这些真空泵油可能比其它产品价格要高，但是具有更长的使用寿命，防止真空泵损害的能力更强，所以长期来看将节省客户的成本。
        </p>
        <b class="se_bg"
          ><img src="../../../img/1.gif" width="15" height="15" />
          <span class="xp">
            <router-link to="/bbs/bbs_shw"
              >问题：我在我的实验室应用中采用了旋片泵，应用中有一些蒸汽，尽管做了更换机油等处理我觉得泵的性能却正在下降。我能在这个应用中使用干式泵吗？</router-link
            ></span
          >
          <font color="#999999"
            >(&nbsp;回贴数:0&nbsp;时间:2010/11/24 17:08:43)</font
          >
        </b>
        <p class="p5">
          <span>首贴内容：回答：</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在旋片泵中，机油在泵装置的润滑、冷却和密封中起到了关键的作用。因此保持机油状态良好是至关重要的。蒸汽在泵油中冷凝会导致润滑变差，增加移动部件的磨损，真空性能整体下降。减少冷凝的一些建议包括1）在处理前后加热泵，2）在温热状态下运行泵，3)
          利用气镇稀释可冷凝气体。
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，在一些含蒸汽的应用中采用油封泵是可能的，但是必须非常小心地维护，而且这些情况下维护成本可能较高。
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，这类应用还可考虑干式泵方案，这种方案实现了安全、洁净的真空、优良的真空性能，而且维护极少。涡旋式干泵为要求10－3毫巴真空水平的工艺提供了经济的干式抽真空方案。涡旋泵采用两个互相啮合的涡盘产生抽真空作用。一个涡盘是固定的，另一个运动涡盘围绕固定涡盘的中心旋转。随着旋转涡盘的转动，会形成月牙形的气体容积并不断减小。被捕集的气体也因此不断被压缩，直至气体负荷最终被泵中心的排气口完全排出。涡盘具有非金属的轴向密封片，1年左右需要更换一次。真空部件中没有轴承等关键部件，因此泵是完全无油的。
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此涡旋泵可用于处理少量蒸汽和化学品应用，还具有其它优点，例如与油封旋片泵相比性能更好、运行时间更长、维护更少。
        </p>
      </div>
      </ul>
      </p>
      <p v-if="noMore">没有更多了</p>
    <button @click="load">加载更多</button>
  </div>
</template>
<script>
export default {
  data() {
    return { count: 1, loading: false };
  },
  computed: {
    noMore() {
      return this.count >= 1;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 1;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.se_box {
  width: 90%;
  margin-left: 25px;
  .se_title {
    width: 70%;
    font-size: x-large;
    color: #ff0000;
    margin-left: 100px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .p5 {
    width: 75%;
    font-size: 16px;
    text-indent: 36px;
    margin-top: 10px;
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
.se_img {
  width: 30%;
  margin-left: 150px;
  img {
    width: 30%;
    margin-top: 6px;
    vertical-align: middle;
  }
}
.se_bg {
  width: 50%;
  height: auto;
  background: #eef4f7;
}
.xp {
  font-size: 12px;
  margin-left: -164px;
}
.idx {
  margin-left: -172px;
}
#showMore {
  width: 90%; /*调整显示区的宽*/
  height: 602px; /*调整显示区的高*/
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #000000;
  overflow-pageindex: hidden;
  overflow-y: hidden;
  word-break: break-all;
  display: none;
}
</style>
