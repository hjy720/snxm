<template>
  <div clss="se_box">
    <tr>
      <td width="92%" bgcolor="eef4f7">
        <p>
          <b
            ><img src="../../../../img/1.gif" width="15" height="15" />
            <router-link to="/bbs/bbs_show"
              >问题：我在我的实验室应用中采用了旋片泵，应用中有一些蒸汽，尽管做了更换机油等处理我觉得泵的性能却正在下降。我能在这个应用中使用干式泵吗？</router-link
            ></b
          ><font color="#999999">(作者:&nbsp;回贴数:0)</font>
        </p>
        <blockquote>
          <span class="st">首贴内容：回答：</span><br />
          <p class="p7">
            在旋片泵中，机油在泵装置的润滑、冷却和密封中起到了关键的作用。因此保持机油状态良好是至关重要的。蒸汽在泵油中冷凝会导致润滑变差，增加移动部件的磨损，真空性能整体下降。减少冷凝的一些建议包括1）在处理前后加热泵，2）在温热状态下运行泵，3)
            利用气镇稀释可冷凝气体。<br />
            <span class="p7">
              因此，在一些含蒸汽的应用中采用油封泵是可能的，但是必须非常小心地维护，而且这些情况下维护成本可能较高。</span
            ><br />
            <span class="p7">
              此外，这类应用还可考虑干式泵方案，这种方案实现了安全、洁净的真空、优良的真空性能，而且维护极少。涡旋式干泵为要求10－3毫巴真空水平的工艺提供了经济的干式抽真空方案。涡旋泵采用两个互相啮合的涡盘产生抽真空作用。一个涡盘是固定的，另一个运动涡盘围绕固定涡盘的中心旋转。随着旋转涡盘的转动，会形成月牙形的气体容积并不断减小。被捕集的气体也因此不断被压缩，直至气体负荷最终被泵中心的排气口完全排出。涡盘具有非金属的轴向密封片，
              1年左右需要更换一次。真空部件中没有轴承等关键部件，因此泵是完全无油的。</span
            ><br />
            <span class="p7">
              因此涡旋泵可用于处理少量蒸汽和化学品应用，还具有其它优点，例如与油封旋片泵相比性能更好、运行时间更长、维护更少。
            </span>
          </p>
        </blockquote>
      </td>
    </tr>
    <tr>
      <td width="92%"><b>回复本贴</b></td>
    </tr>
    <tr>
      <td width="92%">
        <form name="form2" method="post" onsubmit="return  Validate();">
          <tr>
            <td width="14%">主题：</td>
            <td width="89%">
              <input
                type="text"
                name="title"
                size="45"
                value="回复:问题：我在我的实验室应用中采用了旋片泵，应用中有一些蒸汽，尽管做了更换机油等处理我觉得泵的性能却正在下降。我能在这个应用中使用干式泵吗？"
                v-model="user"
              />
            </td>
          </tr>
          <tr>
            <td width="11%">表情：</td>
            <td width="89%">
              <input type="radio" name="biaoqing" value="1" checked="" />
              <img src="../../../../img/1.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="2" />
              <img src="../../../../img/2.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="3" />
              <img src="../../../../img/3.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="4" />
              <img src="../../../../img/4.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="5" />
              <img src="../../../../img/5.gif" width="15" height="15" />
              <br />
              <input type="radio" name="biaoqing" value="6" />
              <img src="../../../../img/6.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="7" />
              <img src="../../../../img/7.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="8" />
              <img src="../../../../img/8.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="9" />
              <img src="../../../../img/9.gif" width="15" height="15" />
              <input type="radio" name="biaoqing" value="10" />
              <img src="../../../../img/10.gif" width="15" height="15" />
            </td>
          </tr>
          <tr>
            <td width="11%">正文：</td>
            <td width="89%">
              <textarea rows="5" name="content" cols="45"></textarea>
            </td>
          </tr>
          <tr>
            <td width="89%">
              <input type="hidden" name="id" value="975" />
              <input
                type="button"
                name="Submit2"
                value="确定"
                @click="postComment"
              />
              <input type="reset" name="Submit2" value=" 重置 " />
            </td>
          </tr>
        </form>
      </td>
    </tr>
    <br />
    <tr>
      <td width="92%">
        <b
          >我班网站论坛主要是为了更好与大家交流，所以在此发言都是免费的！但你在发言前必须遵守以下的规则，请仔细阅读下列条款。</b
        ><br />
        1.发表的内容要与我班有关；<br />
        2.遵守中华人民共和国的各项有关法律法规；<br />
        3.不得在发布任何色情、非法、以及危害国家安全的言论；<br />
        4.严禁链接有关政治、色情、宗教、迷信等违法信息；<br />
        5.承担一切因您的行为而直接或间接导致的民事或刑事法律责任；<br />
        6.互相尊重，遵守互联网络道德；严禁互相恶意攻击、漫骂；<br />
        7.管理员及版主有权保留或删除论坛中的任意内容； <br />
        8.网管拥有管理的一切权利。
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      content: ""
    };
  },
  methods: {
    postComment() {
      // 发表评论的方法
      let comment = { id: Date.now(), user: this.user, content: this.content };
      let list = JSON.parse(localStorage.getItem("cmts") || "[]");
      list.unshift(comment);
      localStorage.setItem("cmts", JSON.stringify(list));
      this.user = this.content = "";
      this.$emit("func");
      console.log(this.content);
    },
    loadComments() {
      // 从本地的 localStorage 中，加载评论列表
      let list = JSON.parse(localStorage.getItem("cmts") || "[]");
    }
  }
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
}
.p7 {
  width: 60%;
  font-size: 16px;
  text-indent: 36px;
  margin-left: 50px;
  margin-top: 5px;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
}
.st {
  font-size: 16px;
  letter-spacing: 2px;
  margin-left: 54px;
  color: #000;
}
a {
  font-size: 16px;
  color: #000066;
  letter-spacing: 1px;
}
a:hover {
  color: orange;
}
</style>
