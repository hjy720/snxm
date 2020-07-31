<template>
  <div>
    <h3 class="rlan">公司介绍</h3>
    <a-menu :defaultSelectedKeys="['1']" mode="inline" theme="dark">
      <a-menu-item key="5">
        <router-link to="/other/intro">公司简介</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/BusinessScope">经营范围</router-link>
      </a-menu-item>
    </a-menu>
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
.rlan {
  width: 80%;
  font-size: 22px;
  color: #004a82;
  padding-bottom: 10px;
  letter-spacing: 2px;
  text-align: center;
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
</style>
