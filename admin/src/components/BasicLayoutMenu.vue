<template>
  <el-menu
    :router="true"
    default-active="defaultActive"
    class="el-menu-vertical-demo"
    background-color="#D3DCE6"
    text-color="#000"
    active-text-color="#55AA00"
  >
    <el-menu-item index="/stack">
      <i class="el-icon-collection-tag"></i>
      <span slot="title">技能管理</span>
    </el-menu-item>
    <el-menu-item index="/question">
      <i class="el-icon-collection-tag"></i>
      <span slot="title">题库管理</span>
    </el-menu-item>
    <el-menu-item index="/course">
      <i class="el-icon-collection-tag"></i>
      <span slot="title">课程管理</span>
    </el-menu-item>
    <el-menu-item index="/zhiye">
      <i class="el-icon-collection-tag"></i>
      <span slot="title">职业管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {};
</script>
