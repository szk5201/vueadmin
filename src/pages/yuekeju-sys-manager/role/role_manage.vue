<template lang="html">
    <el-card class="box-card">
        <div class="tools-bar">
            <el-button type="success" icon="el-icon-plus" size="small" @click="handleReset">新增角色</el-button>
            <el-button type="primary" icon="el-icon-edit" size="small" @click="handleReset">修改角色</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" >删除角色</el-button>
        </div>
        <div>
            <el-table v-loading.body="tableLoading" ref="singleTable" :data="tableData" border highlight-current-row
                style="width: 100%">
                 <el-table-column
                      type="selection"
                      width="55">
                </el-table-column>
                <el-table-column type="index" width="60">
                </el-table-column>
               <!-- <el-table-column prop="status" label="停用/启用" align="center" min-width="100">
                    <template slot-scope="scope">

                        <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" active-text=""
                            inactive-text="" @change="handleStatus(scope.row)">
                        </el-switch>
                    </template>
                </el-table-column> -->
                <el-table-column prop="roleEnName" label="角色英文名" min-width="120">
                </el-table-column>
                <el-table-column prop="roleCnName" label="角色中文名" min-width="120">
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="170">
                    <template slot-scope="scope">
                        <div>
                            <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-bar">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 25, 50, 100]"
                    :page-size="search.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalRecord">
                </el-pagination>
            </div>
        </div>
    </el-card>

</template>

<script>
import { findAllBySearchRole } from '@/api/permission'
export default {
    data() {
        return {
            totalRecord: 20,
            tableLoading: false,
            dialogVisible: false,
            defaultTreeProps: {
                children: 'childPermList',
                label: 'permissionName'
            },
            searchData: {
                loginName: ''
            },
            search: {
                pageSize: 10,
                curryPage: 1
            },
            tableData: []
        }
    },
    mounted: function() {
        this.init()
    },
    methods: {
        init: function() {
            console.log(this.search)
            var object = {}
            object.params = this.search
            findAllBySearchRole(object).then(res => {
                this.tableData = res.records
                console.log(res.records)
            })
        },
        handleSizeChange: function(val) {
            this.search.pageSize = val
            this.init()
        },
        handleCurrentChange: function(val) {
            this.search.curryPage = val
            this.init()
        },
        handleReset: function() {
            var length = this.$refs.singleTable.selection.length
            if (length === 0 || length > 1) {
                this.$message.error('请选择一条需要修改数据!')
                return
            }
            var selection = this.$refs.multipleTable.selection[0]
            this.$router.push({ name: 'insertRole', params: { 'yuekejuCode': selection.yuekejuCode } })
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
