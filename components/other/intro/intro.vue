<template>
  <div>
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
        <Breadcrumb-item :to="{ path: '/other/intro' }"
          >公司简介</Breadcrumb-item
        >
      </Breadcrumb>
    </div>
    <hr />
    <!-- 左栏 -->
    <span class="fz_titlewL">
      <h1 class="rtitley">公司简介</h1>
      <h2 class="titley_f">公司宗旨：科技服务，服务科技。</h2>
      <span class="jianjied_p">
        <p>
          北京帅恩科技有限责任公司成立于2005年3月，是一家立足于分析行业和真空行业，尤其是质谱分析技术行业，以专业技术服务为主的高科技技术企业。北京帅恩科技有限责任公司拥有很强的科技服务人才队伍，特聘原中国质谱学会常务理事、仪器专业组刘学博教授为技术总顾问兼技术指导，刘学博教授衷心希望利用其多年从事质谱仪器研制、质谱仪器维护改造升级以及其它分析仪器维护改造的经验，通过公司的技术服务团队服务于质谱事业、分析事业、真空事业，解决科技工作者的后顾之忧，提高进口仪器的使用频率，延长进口仪器的使用寿命，促进质谱事业、分析事业、真空事业的仪器发展，提高质谱仪器、分析仪器、真空仪器的国产化水平。
        </p>
      </span>
    </span>
    <!-- 右栏 -->
    <span class="fz_maideR">
      <h3 class="rlan">公司简介</h3>
      <a-menu :defaultSelectedKeys="['1']" mode="inline" theme="dark">
        <a-menu-item key="2"
          ><router-link to="/other/intro">公司介绍</router-link></a-menu-item
        >
        <a-menu-item key="3"
          ><router-link to="/other/BusinessScope"
            >经营范围</router-link
          ></a-menu-item
        >
      </a-menu>
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
.fz_titlewL {
  width: 50%;
  margin-left: 50px;
  padding-bottom: 114px;
  .rtitley {
    font-size: 22px;
    color: red;
    padding-bottom: 10px;
    margin-left: 160px;
    letter-spacing: 2px;
  }
  .titley_f {
    width: 100%;
    font-size: 18px;
    color: green;
    padding-bottom: 10px;
    margin-left: 85px;
    letter-spacing: 1px;
  }
  .jianjied_p {
    p {
      width: 60%;
      font-size: 16px;
      line-height: 26px;
      margin-left: 25px;
      text-indent: 36px;
      padding-top: 6px;
      letter-spacing: 2px;
    }
  }
}
.fz_maideR {
  float: right;
  width: 30%;
  margin-top: -416px;
  margin-right: 40px;
  .rlan {
    width: 80%;
    font-size: 22px;
    color: #004a82;
    padding-bottom: 10px;
    letter-spacing: 2px;
    text-align: center;
    margin-top: 130px;
    margin-left: 30px;
  }
  .ant-menu {
    width: 100%;
    font-weight: 600;
    margin-left: 10px;
    text-align: center;
    margin-right: -40px;
    letter-spacing: 2px;
  }
}
</style>
