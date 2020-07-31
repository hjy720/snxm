<template>
  <div>
        <div class="se_box">
        <h2 class="se_5title">SHS-MT 静态顶空-微捕集浓缩系统</h2>
       <span class="se_img">
            <img src='../../../../../img/wl01.jpg'/>
       </span> 
                <p class="p5">
                 HSMT-01静态顶空-微捕集浓缩系统是在静态顶空技术上发展起来的，一种较新的应用于液体或者固体样品中挥发性物质的分离和浓缩技术。由于此技术在静态顶空中增加了微捕集浓缩技术，可以对静态顶空中的样品进行多次的提取，每次提取的样品均被浓缩在微捕集管内，由此可获得更大的目标物质的浓缩倍数，提高了静态顶空技术的样品提取效率。
                </p>
              <h4 class="se_ftile">结构原理</h4>
                  <p class="p5">如下图所示，是HSMT-01静态顶空-微捕集浓缩系统的结构和原理。</p>
                   <span class="se_img">
                  <img src='../../../../../img/wl01-T.jpg'/>
              </span>
              <p class="p5" height="10">HSMT-01静态顶空-微捕集浓缩系统主要采用40mL或者20mL的样品瓶，可分别盛装最多20mL或者10mL的液体样品。<br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HSMT-01静态顶空-微捕集浓缩系统通过LW-01操作软件编辑的操作程序控制。通过编辑的操作方法可实现多次对样品瓶中气体的加压和释放过程，达到对样品的一次顶空萃取、两次顶空萃取、三次顶空萃取和多次顶空萃取，每次萃取的样品均被微捕集管浓缩。此外，在一次顶空萃取模式中，也可以通过设定时间（10秒-50秒）进行较高浓度样品的直接顶空进样。在多次顶空萃取的模式下，进样GCMS之前，通常需要应用载气干吹扫微捕集管以除去捕集的水分，提高GCMS测定的效果。
              </p>
                  <h4 class="se_ftile">技术指标</h4>
                  <ul class="se_xnlist2">
                    <li>● 温度控制/测定范围： 常温～350℃</li>
                    <li>● 温度控制精度：± 1℃（热解吸）</li>
                    <li>● 热解吸升温速度： 60-800℃/min</li>
                    <li>● 加压和吹扫载气调节范围： 0 ~ 50 psi (He / N2)和3.0 ~ 60 mL/min</li>
                    <li>● 工作条件：
                    <p>（1）电源：220V，50Hz</p>
                    <p>（2）环境温度：0 ～ 40℃</p>
                    <p>（3）相对湿度：< 85 % RH</p>
                    </li>
                    <li>● 整机尺寸(包括微捕集管)：
                     <p>（1）微捕集管：1.4 mm（id）× 110 mm（L）</p>
                     <p>（2）整机：250 × 200 × 120 (mm3)</p>
                    </li>
                    <li>● 整机总重量：0.8 kg</li>
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
    .se_xnlist2 {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
        margin-left: 50px;
        li {
            line-height: 26px;
        }
    }
}
.se_img {
  width: 40%;
  margin-left: 50px;
  img {
    width: 40%;
    margin-top: 5px;
    vertical-align: middle;
  }
}
</style>