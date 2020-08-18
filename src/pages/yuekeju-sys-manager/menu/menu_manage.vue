<template lang="html">
    <el-card class="box-card">
        <div class="tools-bar">
            <el-button type="success" icon="el-icon-plus"  size="small" @click="insertMenu" >新增权限</el-button>
            <el-button type="primary" icon="el-icon-edit" size="small" @click="updateMenu">修改权限</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteMenu">删除角色</el-button>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%;margin-bottom: 20px;"
          ref="multipleTable"
          row-key="yuekejuCode"
          border
          default-expand-all
          :tree-props="{children: 'list'}">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            prop="permissionName"
            label="菜单名称"
            sortable
            width="200">
          </el-table-column>
          <el-table-column
            prop="permissionParentName"
            label="上级菜单名称"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="permissionIcon"
            label="图标" width="100">
          </el-table-column>
              <el-table-column
                prop="permissionType"
                label="类型"
                width="100"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                   <el-tag disable-transitions v-if="scope.row.permissionType == '0'">目录</el-tag>
                   <el-tag  type="success" disable-transitions v-if="scope.row.permissionType == '1'">菜单</el-tag>
                   <el-tag type="warning" disable-transitions v-if="scope.row.permissionType == '2'">按钮</el-tag>
                </template>
              </el-table-column>
          <el-table-column
            prop="pemissionOrderNum"
            label="排序号" width="100">
          </el-table-column>
          <el-table-column
            prop="permissionUrl"
            label="菜单URL" width="300">
          </el-table-column>
          <el-table-column
            prop="permissionPerms"
            label="授权标识">
          </el-table-column>
        </el-table>
    </el-card>

</template>

<script>
import { findMenuAll, deletePermission } from '@/api/permission'
export default {
    data() {
        return {
            tableData: [],
            radio: ''
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init: function() {
            var that = this
            findMenuAll().then(res => {
                that.tableData = res
                console.log(res)
            })
        },
        handleSizeChange: function() {

        },
        handleCurrentChange: function() {

        },
        insertMenu: function() {
            this.$router.push({ name: 'insertMenu', params: { yuekejuCode: null } })
        },
        updateMenu: function() {
            var length = this.$refs.multipleTable.selection.length
            if (length === 0) {
                this.$message.error('请选择一条需要修改数据!')
                return
            }
            if (length > 1) {
                this.$message.error('修改数据时只能勾选一条数据!')
                return
            }
            var yuekejuCode = this.$refs.multipleTable.selection[0].yuekejuCode
            // this.$refs.multiple
            this.$router.push({ name: 'insertMenu', params: { yuekejuCode: yuekejuCode } })
        },
        deleteMenu: function() {
            var length = this.$refs.multipleTable.selection.length
            if (length === 0) {
                this.$message.error('请选择一条需要修改数据!')
                return
            }
            var selection = this.$refs.multipleTable.selection
            var arrayList = new Array()
            for (let i = 0; i < selection.length; i++) {
                if (typeof (selection[i].yuekejuCode) !== 'undefined') {
                    arrayList.push(selection[i].yuekejuCode)
                }
            }
            var object = {}
            object.id = arrayList
            deletePermission(arrayList).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang="scss">
.fr{
    float:right;
}
.fl{
    float:left;
}
.search-bar{
    overflow: hidden;
}
</style>

<style>
.tools-bar{
  margin-bottom:20px;
}
</style>
