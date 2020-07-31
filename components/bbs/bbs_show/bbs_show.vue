<template>
  <div class="se_box">
    <p class="se_st"><b>首贴</b></p>
    <tr>
      <td width="4%" bgcolor="eef4f7"></td>
      <td width="92%" bgcolor="eef4f7">
        <p>
          <b
            ><img src="../../../../img/8.gif" width="15" height="15" />
            问：我的旋片泵性能不佳。这种问题的可能原因是什么？&nbsp;&nbsp;</b
          ><font color="#999999">(&nbsp;回贴数:0)</font>
        </p>
        <blockquote>
          <span class="st">首贴内容：答：</span><br />
          <p class="p5">
            在正常操作下旋片泵通常是极其可靠的，不容易出故障。因此，请确认是不是真空故障，例如真空不良、抽真空速度下降或完全没有真空。泵性能不佳的原因有多种。在拆泵进行维修以前先做以下初步检查是很好的做法。
            <br />1、检查真空计，确定真空计是否存在故障或需要校准。检查真空计进气口区域是否有任何污染物。<br />2、检查前级管并确保所有管件和管接头拧紧，查看系统是否漏气。如果前级管有波纹管或挠性管接头，请检查装置中是否有导致漏气的裂缝。<br />3、检查系统污染。如果系统被一些工艺物质污染，则该物质可能导致泵内部的机油降解。机油颜色可能变暗，在一些情况下甚至为“乳状”。<br />
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
        <img src="../../../../img/add.gif" /><span class="fxt"
          ><router-link to="/bbs/bbs_fayan">发新帖</router-link>&nbsp;</span
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
    letter-spacing: 3px;
  }
  a:hover {
    letter-spacing: 3px;
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
  margin-left: 140px;
}
.fxt {
  margin-left: -160px;
  margin-top: 5px;
}
</style>
