<template>
    <el-container>
        <el-aside>
            <el-tree
            ref="tree"
            :data="data"
            highlight-current
            node-key="yuekejuCode"
            :props="defaultProps"
            empty-text='组织机构暂无数据'
             @check-change="nodeClick"
             @current-change="currentChange" ></el-tree>
        </el-aside>
        <el-main>
           <basTable
           :tableColumnConfig="tableColumnConfig"
           :loading="loading"
           :border="border"
           :tableFormConfig="tableFormConfig"
           :tableFormData="formTableData"
           :tableData="tableData"
           @insertClick="insertClick"
           @formReset="reset"
           ref="reftable"
           >
           </basTable>
           <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            width="40%"
            :before-close="handleClose">
            <el-form :model="from" label-width="auto" :rules="rules" ref="froms">
              <el-form-item label="组织机构英文名" prop="deptEnName"><el-input v-model="from.deptEnName" /></el-form-item>
              <el-form-item label="组织机构中文名" prop="deptCnName"><el-input v-model="from.deptCnName" /></el-form-item>
              <el-form-item label="上级组织机构" prop="deptParentName"><el-input v-model="from.deptParentName" readonly  class="parentId"   /></el-form-item>
              <el-form-item label="组织机构代码" prop="deptCode"><el-input v-model="from.deptCode" /></el-form-item>
              <el-form-item label="排序" prop="deptOrderNumber"><el-input type="number" v-model="from.deptOrderNumber" /></el-form-item>
             <el-form-item label="是否启用">
                <el-radio-group v-model="from.deptDisable">
                    <el-radio label="0">禁用</el-radio>
                    <el-radio label="1">启用</el-radio>
                </el-radio-group>
            </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitClick">确 定</el-button>
            </span>
            </el-dialog>

        </el-main>
    </el-container>
</template>
<style>

</style>
<script>
import { findSearchDept, findSearchDeptTree, isRepeat, insertDept, deleteDept } from '@/api/dept/deptpermission'
export default {

    data() {
        return {
            tableColumnConfig: [
                //  type: seq 序号  checkbox复选框 radio单选框 expand展开行
                { type: 'seq', width: 60 },
                { type: 'checkbox', width: 60 },
                { field: 'deptEnName', title: '组织机构英文名', sortable: true },
                { field: 'deptCnName', title: '组织机构中文名' },
                { field: 'deptParentName', title: '上级组织机构' },
                { field: 'deptCode', title: '组织机构代码', formatter: this.userLockStatus },
                { field: 'createTime', title: '创建时间' },
                { field: 'creater', title: '创建人' },
                { field: 'updateTime', title: '修改时间' },
                { field: 'modified', title: '修改人' },
                { field: 'deptDisableStatus', title: '禁用/启用', cellRender: { name: '$switch', events: { change: this.disableChanageEvent } } }
            ],
            tableFormConfig: [
                { field: 'deptEnName', title: '英文名', itemRender: { name: 'input', attrs: { placeholder: '请输入英文名' } } },
                { field: 'deptCnName', title: '中文名', itemRender: { name: 'input', attrs: { placeholder: '请输入中文名' } } },
                { itemRender: { name: '$button', props: { content: '查询', type: 'submit', status: 'primary' } } },
                { itemRender: { name: '$button', props: { content: '重置', type: 'reset' } } }
            ],
            data: [],
            loading: false,
            dialogTitle: '新增组织机构',
            dialogVisible: false,
            tableData: [],
            from: {
                deptEnName: '',
                deptCnName: '',
                deptParentId: '1001',
                deptCode: '',
                deptDisable: '1',
                deptOrderNumber: 1,
                deptParentName: '全部',
                yuekejuCode: ''
            },
            rules: {
                deptEnName: [{ required: true, message: '请输入英文名称', trigger: 'blur' },
                    { pattern: /^[a-zA-Z]{1,30}$/, message: '只能字母组成，长度在1-30之间' },
                    { validator: this.validatorFunction, trigger: 'blur' }
                ],
                deptCnName: [{ required: true, message: '请输入中文名称', trigger: 'blur' },
                    { pattern: /^[\u4E00-\u9FA5]{2,30}$/, message: '只能中文组成，长度在2-30之间' },
                    { validator: this.validatorFunction, trigger: 'blur' }
                ],
                deptCode: [{ required: true, message: '请输入组织机构代码', trigger: 'blur' },
                    { pattern: /^[0-9]{2,30}$/, message: '只能数字组成，长度在1-30之间' },
                    { validator: this.validatorFunction, trigger: 'blur' }
                ]
            },
            search: {
                params: {
                    currentPage: 1,
                    pageSize: 20,
                    deptEnName: '',
                    deptCnName: '',
                    deptParentId: ''
                }
            },
            formTableData: {
                deptEnName: '',
                deptCnName: ''
            },
            defaultProps: {
                children: 'childer',
                label: 'deptCnName'
            },
            border: 'default'
        }
    },
    mounted: function() {
        this.init()
    },
    methods: {
        init: function() {
            this.initTreeData()
            this.initTableData()
        },
        initTreeData: function() {
            findSearchDeptTree(this.search).then(res => {
                this.data = res
            })
        },
        initTableData: function() {
            findSearchDept(this.search).then(res => {
                console.log(res)
                this.tableData = res.records
                this.$refs.reftable.tablePage.total = res.total
            })
        },
        insertClick: function() {
            this.dialogVisible = true
        },
        // 关闭dialog
        handleClose: function() {
            this.$confirm('确认关闭？')
                .then(_ => {
                    //
                    this.dialogVisible = false
                    this.formReset()
                })
                .catch(_ => {})
        },
        formReset: function() {
            this.$refs['froms'].resetFields()
        },
        submitClick: function() {
            this.dialogVisible = false
            this.formReset()
        },
        reset: function() {

        },
        nodeClick: function(e) {
            console.log(e)
        },
        currentChange: function(data, e) {
            this.search.params = data.yuekejuCode
            this.from.deptParentId = data.yuekejuCode
            this.from.deptParentName = data.deptCnName
        },
        validatorFunction: function(rule, value, callback) {
            let search = {}
            search.params = {}
            if (this.from.yuekejuCode !== '') {
                search.params.yuekejuCode = this.from.yuekejuCode
            }
            if (rule.field === 'deptEnName') {
                search.params.deptEnName = value
            } else if (rule.field === 'deptCnName') {
                search.params.deptCnName = value
            } else if (rule.field === 'deptCode') {
                search.params.deptCode = value
            }
            isRepeat(search).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
