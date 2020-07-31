<template>
  <div class="se_box">
    <tr>
      <td width="92%"><b>首贴</b></td>
    </tr>
    <br />
    <tr>
      <td width="92%">
        <form name="form2" method="post" onsubmit="return  Validate();">
          <tr>
            <td width="14%">主题：</td>
            <td width="89%">
              <input
                type="text"
                rows="5"
                name="title"
                size="45"
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
              <textarea v-model="content"></textarea>
            </td>
          </tr>
          <tr>
            <td width="89%">
              <input type="hidden" name="id" value="" />
              <input
                type="button"
                name="Submit2"
                value="确定"
                @click="postComment"
              />
              <input type="reset" name="Submit2" value="重置" />
            </td>
          </tr>
        </form>
      </td>
    </tr>
    <br />
    <tr>
      <td width="92%">
        <b
          >本班网站论坛主要是为了更好与大家交流，所以在此发言都是免费的！<br />但你在发言前必须遵守以下的规则，请仔细阅读下列条款。</b
        ><br />
        1.发表的内容要与我班有关；<br />
        2.遵守中华人民共和国的各项有关法律法规； <br />
        3.不得在发布任何色情、非法、以及危害国家安全的言论； <br />
        4.严禁链接有关政治、色情、宗教、迷信等违法信息； <br />
        5.承担一切因您的行为而直接或间接导致的民事或刑事法律责任； <br />
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
