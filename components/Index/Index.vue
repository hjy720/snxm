<template>
  <div>
    <!-- 左栏 -->
    <div class="yoly_main">
      <h2 class="gw_titley">应用领域</h2>
      <p class="p5">
        真空技术无处不在—实际上，每天我们都能够接触到众多使用帅恩科技真空
        技术的产品和情形。它使我们能够应用到我们的生活方面等领域上，观看到多彩
        的LED显示，使用更清洁的能源，研制更精密的产品，享受信息科技带来的便捷
        ，探索宇宙空间的奥秘…真空技术让我们的生活更加美好，让我们的工作更加高
        效作为中国真空技术的领导者，北京帅恩科技有限责任公司致力于为广大客户提
        供集真空获得、真空检测、真空计量为一体的真空应用解决方案。凭借多年的真
        空设备研制经验，通过对客户需求的深刻理解，我们为镀膜、工程学、照明、太阳能、分析产品、电子与半导体及其它行业的客户提供了众多定制化的解决方案。
      </p>
      <div class="clearfix yoly_tuqu">
        <div class="yoly_pic_warp">
          <h2 class="gw_titley">生物燃料</h2>
          <div class="yoly_pic yoly_huang">
            <img src="../../../img/timg.jpg" />
            <div class="yoly_r">
              <p>
                随着人们开始使用生物燃料作为各种设备（从卡车到飞机）的动力，
                在石油燃料生产中发挥重要作用的真空技术等
              </p>
            </div>
          </div>
        </div>
        <div class="yoly_pic_warp">
          <h2 class="gw_titley">摄影技术</h2>
          <div class="yoly_pic yoly_huang">
            <img src="../../../img/timg2.jpg" />
            <div class="yoly_r">
              <p>
                看一看相机或手机镜头上的色彩，这就是真空镀膜形成的。处理呼叫或捕获图像的芯片，是在真空中制造的等；
              </p>
            </div>
          </div>
        </div>
        <div class="yoly_pic_warp">
          <h2 class="gw_titley">工程学</h2>
          <div class="yoly_pic yoly_huang">
            <img src="../../../img/timg3.jpg" />
            <div class="yoly_r">
              <p>
                特洛&nbsp;A&nbsp;钻井平台是世界上最高的人工结构之一，即是用真空技术“吸附”到海床上的。从储层开采石油，需要使用真空技术，海水脱氧是泵油的关键过程
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右栏 -->
    <h5 class="titleNav">维修业绩</h5>
    <table
      width="600"
      class="sed_table"
      border="1"
      bordercolorlight="#FFFFFF"
      bordercolor="#8CC6FF"
      bgcolor="#EEF7FF"
      align="center"
    >
      <tbody>
        <tr>
          <th height="23">
            <div align="center">产品名称</div>
          </th>
          <th>
            <div align="center">产品型号</div>
          </th>
          <th>
            <div align="center">生产厂家</div>
          </th>
          <th>
            <div align="center">单位</div>
          </th>
          <th>
            <div align="center">维修时间</div>
          </th>
        </tr>

        <tr>
          <td>涡旋干泵</td>
          <td>nXDS6i</td>
          <td>Edwards</td>
          <td>太原理工大学</td>
          <td>2019/9/27</td>
        </tr>

        <tr>
          <td>涡旋干泵</td>
          <td>nXDS10i</td>
          <td>Edwards</td>
          <td>北京化工大学</td>
          <td>2019/9/23</td>
        </tr>

        <tr>
          <td>涡旋干泵</td>
          <td>PTS03101UN1V</td>
          <td>Varian</td>
          <td>中国科学院化学研究所</td>
          <td>2019/9/23</td>
        </tr>

        <tr>
          <td>机械真空泵</td>
          <td>E2M28</td>
          <td>Edwards</td>
          <td>中国科学院青藏高原研究所</td>
          <td>2018-10-18</td>
        </tr>

        <tr>
          <td>涡旋干泵</td>
          <td>nXDS10iR</td>
          <td>Edwards</td>
          <td>北京大学物理学院</td>
          <td>2018-10-15</td>
        </tr>
      </tbody>
    </table>
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
.ivu-layout-content {
  padding: 0 10px;
}
.yoly_main {
  float: left;
  width: 90%;
  margin-left: 50px;
  .yoly_tuqu {
    padding-left: 10px;
    padding: -15px 10px 102px 0;
  }

  .yoly_pic_warp {
    float: left;
    width: 80%;
    margin-top: -20px;
    margin-bottom: 10px;
    margin-right: -80px;
  }

  .yoly_pic {
    margin-top: 20px;
    width: 80%;
    height: 300px;
    margin-left: -15px;
    position: relative;
    img {
      width: 90%;
      height: 100%;
    }
  }

  .yoly_huang div {
    background: #f1b14d;
  }

  .yoly_pic div {
    position: absolute;
    top: 0;
    right: -55px;
    width: 50%;
    height: 100%;
    p {
      font-size: 14px;
      letter-spacing: 2px;
      color: green;
      margin: 10px 12px;
      line-height: 22px;
      font-weight: 600;
      text-indent: 32px;
    }
  }
  .title_nav a {
    color: green;
  }

  .title_nav a:hover {
    color: red;
  }

  .title_nav {
    width: 10%;
    height: 40px;
    line-height: 40px;
    border: 1px solid rgb(192, 25, 170);
    background: #f5f5f5;
    border-radius: 10px;
    position: absolute;
    text-align: center;
    margin-left: 65px;
    margin-top: 75px;
    li {
      width: 100px;
      float: left;
    }
  }
  .gw_titley {
    width: 50%;
    font-size: 18px;
    letter-spacing: 2px;
    margin-left: 140px;
    margin-top: 20px;
    color: red;
    font-weight: 600;
  }
}
.p5 {
  width: 90%;
  font-size: 14px;
  text-indent: 36px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 2px;
}
.titleNav {
  width: 13%;
  color: red;
  font-weight: 600;
  margin-left: 250px;
  font-size: 18px;
  letter-spacing: 2px;
}
.sed_table {
  width: 90%;
  text-align: center;
  margin-left: 25px;
  tr {
    letter-spacing: 2px;
    td {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
}
</style>
