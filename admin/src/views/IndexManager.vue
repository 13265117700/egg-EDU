<template>
  <div class="main-container">
    <el-button type="primary" class="create-button" @click="handAdd">创建题库</el-button>
    <el-table
      ref="singleTable"
      class="form-list"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column label="ID" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号码">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          <span>{{ scope.row.role_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-view">
                <el-button type="text" @click="handleItem(scope.$index, scope.row)">内容</el-button>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-edit">
                <el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-folder-delete">
                <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
  },
  methods: {
    handAdd() {
      this.$router.push({ path: "/question/create" });
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleEdit(index, row) {
      this.$router.push({ path: "/question/edit/" + row.id });
    },
    handleDelete(index, row) {
      console.log(index, row);
      console.log(this.tableData)
    }
  }
};
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
  height: 100%;
  .create-button {
    float: left;
    margin-bottom: 10px;
  }
}
</style>
