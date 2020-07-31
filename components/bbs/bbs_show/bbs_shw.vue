<template>
  <div class="se_box">
    <p class="se_st"><b>首贴</b></p>
    <tr>
      <td width="4%" bgcolor="eef4f7"></td>
      <td width="92%" bgcolor="eef4f7">
        <p>
          <b
            ><img src="../../../../img/1.gif" width="15" height="15" />
            问题：我在我的实验室应用中采用了旋片泵，应用中有一些蒸汽，尽管做了更换机油等处理我觉得泵的性能却正在下降。我能在这个应用中使用干式泵吗？&nbsp;&nbsp;</b
          ><font color="#999999">(&nbsp;回贴数:0)</font>
        </p>
        <blockquote>
          <span class="st">首贴内容：回答：</span><br />
          <p class="p5">
            在旋片泵中，机油在泵装置的润滑、冷却和密封中起到了关键的作用。因此保持机油状态良好是至关重要的。蒸汽在泵油中冷凝会导致润滑变差，增加移动部件的磨损，真空性能整体下降。减少冷凝的一些建议包括1）在处理前后加热泵，2）在温热状态下运行泵，3)
            利用气镇稀释可冷凝气体。<br />
            <span class="p5">
              因此，在一些含蒸汽的应用中采用油封泵是可能的，但是必须非常小心地维护，而且这些情况下维护成本可能较高。 </span
            ><br />
            <span class="p5">
              此外，这类应用还可考虑干式泵方案，这种方案实现了安全、洁净的真空、优良的真空性能，而且维护极少。涡旋式干泵为要求10－3毫巴真空水平的工艺提供了经济的干式抽真空方案。涡旋泵采用两个互相啮合的涡盘产生抽真空作用。一个涡盘是固定的，另一个运动涡盘围绕固定涡盘的中心旋转。随着旋转涡盘的转动，会形成月牙形的气体容积并不断减小。被捕集的气体也因此不断被压缩，直至气体负荷最终被泵中心的排气口完全排出。涡盘具有非金属的轴向密封片，
              1年左右需要更换一次。真空部件中没有轴承等关键部件，因此泵是完全无油的。 </span
            ><br />
            <span class="p5">
              因此涡旋泵可用于处理少量蒸汽和化学品应用，还具有其它优点，例如与油封旋片泵相比性能更好、运行时间更长、维护更少。
            </span>
          </p>
        </blockquote>
      </td>
    </tr>
    <p class="se_st"><b>所有回贴</b></p>
    <div class="se_bgh">
      <span class="ht">
        <img src="../../../../img/add.gif" />&nbsp;<span class="fxt"
          ><router-link to="/bbs/bbs_fayan">发新帖</router-link></span
        >
        <img src="../../../../img/reply.gif" />&nbsp;<span class="fxt"
          ><router-link to="bbs_huifu">回复本贴</router-link></span
        >
      </span>
    </div>
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
    margin-left: 50px;
    margin-top: 5px;
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
  width: 84%;
  height: auto;
  background: rgb(238, 244, 247);
}
.se_bgh {
  width: 92%;
  height: 24px;
  margin-top: 20px;
  background: #f0fcff;
}
.se_st {
  margin-top: 10px;
}
.xp {
  font-size: 12px;
  margin-left: -164px;
}
b {
  color: #000;
  letter-spacing: 2px;
}
.st {
  font-size: 16px;
  letter-spacing: 2px;
  margin-left: 54px;
  color: #000;
}
.ht {
  float: right;
  margin-top: -2px;
  margin-left: 150px;
}
.fxt {
  margin-left: -160px;
  margin-top: 5px;
}
</style>
