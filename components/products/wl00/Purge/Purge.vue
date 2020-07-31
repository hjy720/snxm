<template>
  <div>
        <div class="se_box">
        <h2 class="se_5title">MPMT-MCT 吹扫-微捕集浓缩系统</h2>
       <span class="se_img">
            <img src='../../../../../img/wl04.jpg'/>
       </span> 
                <p class="p5" height="10">
                   PMT-MCT吹扫-微捕集浓缩系统与市场上常用的吹扫-捕集仪器相比，采用容积较小的样品瓶直接地处理样品，无需专用的吹扫瓶，这样就避免了样品处理过程中的交叉污染。还有，捕集管尺寸也比较小，可与高分辨GCMS中的毛细管分析柱匹配，无需柱前“冷聚焦”和柱前分流，即可获得较好的测定分辨结果。
                </p>
              <h4 class="se_ftile">结构原理</h4>
                  <p class="p5" height="10">如下图所示，是PMT-MCT吹扫-微捕集浓缩系统的结构和原理图。</p>
                   <span class="se_img">
                  <img src='../../../../../img/wl04-T.jpg'/>
              </span>
                <p class="p5" height="10">吹扫样品瓶的容积通常可选择4mL或8mL的玻璃样品瓶。吹扫气体直接吹扫样品，样品中可吹扫的物质经冷凝除水后，进入微捕集管被浓缩。然后，应用干燥的纯气体吹扫微捕集管以除去管内残余的水分。然后，加热微捕集管将浓缩的目标物质热解吸出来，由吹扫气体直接地注入到GC或者GCMS仪器中进行分析测定。与此同时，加热冷凝除水管，将冷凝的水分汽化后由吹扫气体送出仪器外；微捕集管热解吸2-3分钟，随后升高至260℃并保持10-15分钟，再降至30-40℃准备下一个样品的处理。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PMT-MCT吹扫-微捕集浓缩系统通过LW-01操作软件编辑的操作程序控制。通过编辑的操作方法可实现一个样品的整个处理过程，并准备好进行下一个样品的处理。
                </p>
                  <h4 class="se_ztile">技术指标</h4>
                  <ul class="se_xnlist2">
                    <li>● 温度控制/测定范围：常温～350℃</li>
                    <li>● 温度控制精度：± 1℃（热解吸）</li>
                    <li>● 热解吸升温速度：60-800℃/min</li>
                    <li>● 加压和吹扫载气调节范围：0 ~ 50 psi (He / N2)和3.0 ~ 60 mL/min</li>
                    <li>● 工作条件：
                    <p>（1）电源：220V，50Hz</p>
                    <p>（2）环境温度：0 ～ 40℃</p>
                    <p>（3）相对湿度：&lt;85 % RH</p>
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
  width: 40%;
  margin-left: 50px;
  img {
    width: 40%;
    margin-top: 5px;
    vertical-align: middle;
  }
}
</style>