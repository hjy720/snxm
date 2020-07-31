<template>
  <div>
    <!-- 面包屑导航区域 -->
    <Breadcrumb class="Breadcrumb_box">
      <Breadcrumb-item :to="{ path: '/App' }">首页</Breadcrumb-item>
      <Breadcrumb-item :to="{ path: '/products/IndustrialPumps' }"
        >工业用泵</Breadcrumb-item
      >
    </Breadcrumb>
    <!-- 卡片视图区域 -->
    <Card>
      <Row>
        <i-col>
          <label>
            <!-- 产品添加分类区域 -->
            <span class="model_title">类型：</span>
            <input type="text" class="control" v-model="model" />
          </label>
          <label>
            <span class="name_title">品名：</span>
            <input type="text" class="control2" v-model="name" />
          </label>
          <i-button type="primary" class="table_box" size="large" @click="add()"
            >添加分类</i-button
          >
        </i-col>
      </Row>
      <br />
      <!-- 表格数据区域 -->
      <a-table bordered :dataSource="proLists" :columns="columns">
        <template
          v-for="col in ['model', 'name']"
          :slot="col"
          slot-scope="text, record"
        >
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <span v-else
              ><span class="drtext">{{ text }}</span></span
            >
          </div>
        </template>
        <!-- 功能区域 -->
        <span slot="操作" slot-scope="text, record">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <i-button
                type="primary"
                size="large"
                @click="() => save(record.model)"
                >保存</i-button
              >
              <a-popconfirm
                title="确定取消吗?"
                @confirm="() => cancel(record.model)"
              >
                <i-button type="warning" size="large" ghost class="cancel"
                  >取消</i-button
                >
              </a-popconfirm>
            </span>
            <span v-else>
              <i-button
                type="primary"
                class="btn1"
                size="large"
                @click="() => edit(record.model)"
                >编辑</i-button
              >
              <a-popconfirm
                v-if="proLists.length"
                title="确定删除吗?"
                @confirm="() => onDelete(record.model)"
              >
                <i-button type="error" class="btn2" size="large">删除</i-button>
              </a-popconfirm>
            </span>
          </div>
        </span>
      </a-table>
    </Card>
  </div>
</template>
<script>
const columns = [
  {
    title: "model",
    dataIndex: "model",
    align: "center",
    width: "1%",
    scopedSlots: { customRender: "model" }
  },
  {
    title: "name",
    dataIndex: "name",
    width: "1%",
    align: "center",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "操作",
    dataIndex: "操作",
    width: "1%",
    align: "center",
    scopedSlots: { customRender: "操作" }
  }
];
const proLists = [
  {
    model: "EH250",
    name: "机械增压泵"
  },
  {
    model: "EH500",
    name: "机械增压泵"
  },
  {
    model: "EH1200",
    name: "机械增压泵"
  },
  {
    model: "EH2600",
    name: "机械增压泵"
  },
  {
    model: "EH4200",
    name: "机械增压泵"
  },
  {
    model: "Diffstak",
    name: "扩散泵"
  },
  {
    model: "EDC",
    name: "干式爪型真空泵"
  },
  {
    model: "EOSi",
    name: "油封螺旋杆真空泵"
  }
];
export default {
  data() {
    this.cacheData = proLists.map(item => ({ ...item }));
    return {
      proLists,
      columns,
      name: "",
      model: "",
      index: ""
    };
  },
  methods: {
    add() {
      let car = { name: this.name, model: this.model };
      this.proLists.push(car);
      this.id = this.name = this.model = "";
    },
    handleChange(value, model, column) {
      const newData = [...this.proLists];
      const target = newData.filter(item => model === item.model)[0];
      if (target) {
        target[column] = value;
        this.proLists = newData;
      }
    },
    edit(model) {
      const newData = [...this.proLists];
      const target = newData.filter(item => model === item.model)[0];
      if (target) {
        target.editable = true;
        this.proLists = newData;
      }
    },
    save(model) {
      const newData = [...this.proLists];
      const target = newData.filter(item => model === item.model)[0];
      if (target) {
        delete target.editable;
        this.proLists = newData;
        this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(model) {
      const newData = [...this.proLists];
      const target = newData.filter(item => model === item.model)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => model === item.model)[0]
        );
        delete target.editable;
        this.proLists = newData;
      }
    },
    onDelete(model) {
      const newData = [...this.proLists];
      this.proLists = newData.filter(item => item.model !== model);
    }
  }
};
</script>
<style lang="less" scoped>
.Page1 {
  padding-top: 20px;
  margin-left: 230px;
}

.ivu-table-cell span {
  font-size: 16px;
  text-align: center;
}

.table_box {
  margin-left: 12px;
}

.Breadcrumb_box {
  padding-bottom: 10px;
}

.page-container {
  width: 63%;
  border: 1px solid #000;
  margin: 50px auto 0 auto;
  overflow: hidden;
}

.page-content {
  margin: 50px 0;
}

.editable-row-operations a {
  margin-right: 8px;
}

.btn1 {
  width: 60px;
}

.btn2 {
  width: 60px;
  margin-left: 15px;
}

.ant-table-pagination.ant-pagination {
  float: left;
  margin-left: 100px;
}

.control {
  width: 150px;
  letter-spacing: 1px;
  vertical-align: middle;
}

.control2 {
  width: 200px;
  letter-spacing: 1px;
  vertical-align: middle;
}

.model_title {
  font-size: 16px;
  color: red;
  letter-spacing: 1px;
  margin-left: 50px;
  font-weight: 600;
}

.name_title {
  font-size: 16px;
  color: red;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 15px;
}

.cancel {
  margin-left: 10px;
}

.data_box {
  width: 900px;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0 auto;
}
.drtext {
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
