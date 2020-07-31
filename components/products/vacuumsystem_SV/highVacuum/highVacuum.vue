<template>
  <div>
        <div class="se_box">
        <h2 class="se_4title">SV型高真空抽气系统</h2>
       <span class="se_imge">
            <img src='../../../../../img/vacuumsystem_SV-75.jpg' width="300"/>
       </span> 
                <p class="p5" height="10">
                   SV-75型高真空抽气系统采用涡轮分子泵和隔膜真空泵两级抽真空，具有小型便携的特点，适合于实验室以及室外等需要高真空的领域。
                </p>
                  <h4 class="se_ztile">技术指标</h4>
                  <ul class="se_xnlist2">
                    <li>● 极限真空：&lt;5×10-6Pa；</li>
                    <li>● 抽气速率：61L/S（N2）；</li>
                    <li>● 抽气接口：KF25；</li>
                    <li>● 功率：&lt;200W；</li>
                    <li>● 几何尺寸：350mm×380mm×450mm；</li>
                    <li>● 重量：15kg</li>
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
    .se_4title {
       width: 70%;
        font-size: x-large;
        color: #FF0000;
        margin-left: 122px;
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
     .se_ztile {
        height: 25px;
       width: 64%;
        vertical-align: left;
        font-size: x-large;
        letter-spacing: 2px;
        margin-left: 10px;
        margin-top: 15px;
        color: rgb(255, 0, 0);
    }
    .se_xnlist2 {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
        margin-left: -5px;
        margin-top:20px;
        li {
            line-height: 26px;
        }
    }
}
    .se_imge {
    width: 46%;
    margin-left: 120px;
    img{
      width: 46%;
      margin-top: 5px;
      vertical-align: middle;
    }
}
</style>