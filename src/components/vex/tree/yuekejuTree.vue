<template>
  <div>
               <el-tree
                ref="tree"
                :data="data"
                :node-key="nodeKey"
                :props="defaultProps"
                highlight-current
                empty-text='emptyText'
                @check-change="nodeClick"
                @current-change="currentChange" ></el-tree>
  </div>
</template>
<style scoped></style>
<script>
</script>
