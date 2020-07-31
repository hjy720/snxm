<template>
  <div>
        <div class="se_box">
        <h2 class="se_5title">LW-01控制操作系统</h2>
                <p class="p5" height="10">
                  LW-01控制系统是静态顶空系统和吹扫-微捕集浓缩系统的操作系统软件。此软件必须与对应的控制硬件系统联合使用。在进行一个样品处理之前，首先需要应用LW-01控制系统编辑一个操作方法，通过此方法控制和运行对应的系统并完成一个样品处理的全过程。
                </p>
              <h4 class="se_ftile">结构与应用</h4>
                  <p class="p5" height="10">LW-01控制系统可实现静态顶空系统和吹扫-微捕集浓缩系统中的5个加热区域和4个电动阀所组成的对应组件和对应气体流路的功能，每个加热区域和每个电动阀可编辑至少3个台阶程序或者变化程序。LW-01控制系统与对应主机系统、静态顶空系统或者吹扫-微捕集浓缩系统的联接，结构图示如下。</p>
                   <span class="se_img">
                  <img src='../../../../../img/wl07-T.jpg'/>
              </span>
                  <p class='p5' height='10'>图示说明：&nbsp;&nbsp;&nbsp;&nbsp;表电源电缆线； 
            &nbsp;表信号电缆线 
            ； &nbsp;&nbsp;表计算机通讯电缆线（串口） 
            。</p>
                  <h4 class="se_ztile">技术指标</h4>
                  <ul class="se_xnlist2">
                    <li>● 可编程最短时间：1秒</li>
                    <li>● 阀：24V DC驱动</li>
                    <li>● 可编程温度：-160 ℃- 400 ℃</li>
                    <li>● 软件操作系统要求：Win XP/Win 2000</li>
                    <li>● 通讯接口：485串口</li>
                    <li>● 工作条件：
                    <p>（1）电源：220V，50Hz</p>
                    <p>（2）环境温度：0 ～ 40℃</p>
                    <p>（3）相对湿度：< 85 % RH</p>
                    </li>
                  </ul>
            </span>
</div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>
<style lang="less" scoped>
  .se_box {
    width:90%;
    margin-left: 50px;
    .se_5title {
       width: 70%;
        font-size: x-large;
        color: #FF0000;
        margin-left: 100px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .p5 {
        width: 90%;
        font-size: 16px;
        text-indent: 36px;
        margin-top:10px;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
    }
    .se_ftile {
        height: 25px;
       width: 64%;
        vertical-align: bottom;
        font-size: x-large;
        letter-spacing: 2px;
        margin-left: 100px;
        margin-top: -10px;
        color: rgb(255, 0, 0);
    }
     .se_ytile {
        height: 25px;
       width: 64%;
        vertical-align: bottom;
        font-size: x-large;
        letter-spacing: 2px;
        margin-left: 100px;
        margin-top: 15px;
        color: rgb(255, 0, 0);
    }
     .se_ztile {
        height: 25px;
       width: 64%;
        vertical-align: bottom;
        font-size: x-large;
        letter-spacing: 2px;
        margin-left: 100px;
        margin-top: 15px;
        color: rgb(255, 0, 0);
    }
    .se_xnlist2 {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
        margin-left: 50px;
        margin-top:20px;
        li {
            line-height: 26px;
        }
    }
}
.se_img {
    width: 100%;
}
</style>