<template>
  <div class="se_box">
    <p class="se_st"><b>首贴</b></p>
    <tr>
      <td width="4%" bgcolor="eef4f7"></td>
      <td width="92%" bgcolor="eef4f7">
        <p>
          <b
            ><img src="../../../../img/7.gif" width="15" height="15" />
            RV12泵可以使用任何种类的真空泵油吗？&nbsp;&nbsp;</b
          ><font color="#999999">(&nbsp;回贴数:0)</font>
        </p>
        <blockquote>
          <span class="st"
            >首贴内容：回答：在旋片真空泵中真空泵油有多种功能：</span
          ><br />
          <p class="p5">
            在正常操作下旋片泵通常是极其可靠的，不容易出故障。因此，请确认是不是真空故障，例如真空不良、抽真空速度下降或完全没有真空。泵性能不佳的原因有多种。在拆泵进行维修以前先做以下初步检查是很好的做法。
            1. 润滑：真空泵油润滑叶轮（叶片）周围的滑动面和轴承区域。<br />
            2.
            冷却：产生真空时泵压缩气体产生热量，真空泵油是散发泵部件的热量并将热量传到泵外壳的关键，然后在泵外壳利用空气冷却散发热量。<br />
            3.密封：真空泵油密封泵装置内部的间隙，以确保入口/出口之间达到良好的压差。<br />
            4.抗腐蚀：优质真空泵油连续覆盖了泵内部部件，防止泵送的水或化学蒸汽的腐蚀。<br />
            <span class="p5">
              通常更换机油或以合适等级的机油冲洗泵数次以清除受污染物质有助于使泵恢复初始性能。如果在进行所有检查后仍然不能解决问题，可以将泵送至授权服务中心维修。请确保在维修泵时使用原厂配件，因为旋片泵的良好性能在很大程度上取决于良好的表面加工以及有效密封。
            </span>
          </p>
        </blockquote>
      </td>
      <td width="4%" bgcolor="eef4f7">&nbsp;</td>
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
