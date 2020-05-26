<template>
  <el-menu
    :router="true"
    default-active="defaultActive"
    class="el-menu-vertical-demo"
    background-color="#D3DCE6"
    text-color="#000"
    active-text-color="#55AA00">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-collection-tag"></i>
        <span>技能评测</span>
      </template>
      <el-menu-item index="/stack">
        <span slot="title">技能管理</span>
      </el-menu-item>
      <el-menu-item index="/question">
        <span slot="title">题库管理</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-collection-tag"></i>
        <span>职业课程</span>
      </template>
      <el-menu-item index="/course">
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="/zhiye">
        <span slot="title">职业管理</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-collection-tag"></i>
        <span>企业项目</span>
      </template>
      <el-menu-item index="/companie">
        <span slot="title">企业管理</span>
      </el-menu-item>
      <el-menu-item index="/project">
        <span slot="title">项目管理</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>管理设置</span>
      </template>
      <el-menu-item index="/manager">
        <span slot="title">管理员</span>
      </el-menu-item>
      <el-menu-item index="/role">
        <span slot="title">角色</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>
