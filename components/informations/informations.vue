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
        <Breadcrumb-item :to="{ path: '/informations' }"
          >技术资料</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <hr />
    <div align="left">
      <h4 class="se_title">一、产品技术资料</h4>
      </div>
  <table width="500" border="1" class="ed_table" bordercolorlight="#FFFFFF" bordercolor="#8CC6FF" bgcolor="#EEF7FF" >
<tbody>
    <tr>
        <td><a href="../../../informations/SE812-1.pdf">SE812氮吹仪使用说明书</a></td>
        <td><a href="../../../informations/SE812-2.pdf">SE812氮吹仪装箱清单</a></td>
    </tr>
    <tr>
        <td><a href="../../../informations/SE812-4.pdf">氮吹仪对不同溶剂的蒸发速率</a></td>
        <td><a href="../../../informations/SE812-3.pdf">SE812氮吹仪保修卡</a></td>
    </tr>
    <tr>
        <td><a href="../../../informations/PQ-2manual.pdf">PQ-2型气体标准物质配制装置</a></td>
        <td><a href="../../../informations/wl00.pdf">无溶剂萃取装置系列</a></td>
    </tr>
    <tr>
        <a href="../../../informations/EM_Pumps.pdf"></a><a href="../../../informations/RV Rotary Vane Pumps.pdf">Edwards 
            RV系列机械真空泵</a></td>
        <td><a href="../../../informations/EM_Pumps.pdf">Edwards EM系列机械真空泵</a></td>
    </tr>
    <tr>
        <td colspan="2" ><a href="../../../informations/EM_small.doc">E2M0.7、E2M1和E2M1.5系列旋片真空泵电机电容需要升级</a></td>
    </tr>
    <tr>
        <td colspan="2"><a href="../../../informations/P120-01-010.pdf">Edwards 
            Ultragrade15、19、20、70机械真空泵油技术数据（英文）</a></td>
    </tr>
    <tr>
        <td colspan="2"><a href="../../../informations/P120-01-010-c.pdf">Edwards 
            Ultragrade15、19、20、70机械真空泵油技术数据（中文）</a></td>
    </tr>
    <tr>
        <td colspan="2" >
            <a href="../../../informations/P120-01-000.pdf">Edwards 
            45#机械真空泵油技术参数</a></td>
    </tr>
</tbody>
</table>
 <p align="left">
      <h4 class="se_title">二、维修保养资料</h4>
      </p>
       <table width="500" border="1" class="ed_table" bordercolorlight="#FFFFFF" bordercolor="#8CC6FF" bgcolor="#EEF7FF" >
<tbody>
    <tr>
        <td><a href="../../../informations/pump_maitance0.pdf">爱德华真空泵的维修与改进</a></td>
        <td><a href="../../../informations/mass_maitance0.pdf">UTI在线质谱仪的维护翻新</a></td>
    </tr>
    <tr>
        <td><a href="../../../informations/pump_maitance1.pdf">机械真空泵的维修1</a></td>
        <td><a href="../../../informations/mass_maitance1.pdf">VG_ZAB色质联用仪中快速放大器的维修</a></td>
    </tr>
    <tr>
        <td><a href="../../../informations/pump_maitance2.pdf">机械真空泵的维修2</a></td>
        <td><a href="../../../informations/mass_maitance2.pdf">ZhT-1302型质谱仪的改装与分析操作方法的改进</a></td>
    </tr>
    <tr>
      <td colspan="2">
        <a href="../../../informations/pump_maitance3.pdf">旋片真空泵的漏油成因与防止</a></td>
    </tr>
</tbody>
</table>
  <span class="ed_ztile">油色检查判断</span>
<p class="yst">
    <tr>
        <td height="18">&nbsp;</td>
        <td rowspan="3" valign="middle">
            <div align="right"><img src="../../../img/oil-colour.jpg" width="142" height="134"></div>
        </td>
        <td valign="middle">正常，无须更换</td>
    </tr>
    <tr>
        <td height="18">&nbsp;</td>
        <td valign="middle">立即更换</td>
    </tr>
    <tr>
        <td height="18">&nbsp;</td>
        <td valign="middle">停止运行，检查泵并换油</td>
    </tr>
</p>
 <p align="left">
      <h4 class="se_title">三、产品应用资料</h4>
      </p>
        <table width="500" border="1" class="ed_table" bordercolorlight="#FFFFFF" bordercolor="#8CC6FF" bgcolor="#EEF7FF" >
<tbody>
    <tr>
        <td colspan="2">
          <a href="../../../informations/dcy-yingyong1.pdf">氮吹仪应用资料1——固相萃取气相色谱法测定水中六六六和滴滴涕</a>
          </td>
    </tr>
    <tr>
        <td colspan="2">
          <a href="../../../informations/dcy-yingyong2.pdf">氮吹仪应用资料2——花生中菊酯类农药残留量的气相色谱法测定</a>
          </td>
    </tr>
    <tr>
        <td colspan="2">
          <a href="../../../informations/dcy-yingyong3.pdf">氮吹仪应用资料3——新鲜蔬菜水果的农药多残留快速检测</a>
          </td>
    </tr>
    <tr>
      <td colspan="2">
        <a href="../../../informations/dcy-yingyong4.pdf">氮吹仪（SE812）应用资料4——土壤中半挥发性有机物前处理方法研究</a>
        </td>
    </tr>
      <tr>
      <td colspan="2">
        <a href="../../../informations/dcy-yingyong5.pdf">氮吹仪（SE812）应用资料5——无锡市饮用水嗅味突发事件致嗅原因及潜在问题分析</a>
        </td>
    </tr>
</tbody>
</table>
<p align="left">
      <h4 class="se_title">四、其他资料</h4>
      </p>
      <span class="rvpdf">
        <a href="../../../informations/Conversion Charts.pdf">真空单位换算表</a>
      </span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.se_box {
  width: 80%;
  margin-left: 25px;
  .rvpdf {
    margin-left: 50px;
    letter-spacing: 2px;
    font-size: 18px;
  }
  .se_title {
    width: 80%;
    font-size: x-large;
    color: #ff0000;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
  }
   .ed_ztile {
    height: 25px;
    width: 64%;
    vertical-align: bottom;
    font-size: 16px;
    letter-spacing: 2px;
    margin-left: 50px;
    margin-top: 15px;
    color: rgb(255, 0, 0);
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
.ed_table {
  width: 100%;
  margin-left: 20px;
  margin-top: 25px;
  tr {
    text-align: center;
    letter-spacing: 2px;
    td {
      font-family: Arial, Helvetica, sans-edrif;
    }
  }
  a{
    margin-left: 24px;
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
</style>
