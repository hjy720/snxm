<template>
  <div class="se_box">
    <div id="l-map"></div>
    <div id="r-result"></div>
  </div>
</template>
<script>
// 百度地图API功能
var map = new BMap.Map("l-map");
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
var walking = new BMap.WalkingRoute(map, {
  renderOptions: { map: map, panel: "r-result", autoViewport: true },
});
walking.search("北京帅恩科技有限责任公司", "农大社区警务工作室");
</script>
<style lang="less" scoped>
.se_box {
  width: 90%;
  margin-top: 20px;
  margin-left: 50px;
}
</style>
