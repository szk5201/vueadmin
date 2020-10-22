<template>
    <el-container>
        <el-aside>
           <div>
             <el-tree
                ref="tree"
                :data="data"
                node-key="yuekejuCode"
                :props="defaultProps"
                highlight-current
                empty-text='组织机构暂无数据'
                @check-change="nodeClick"
                @current-change="currentChange" ></el-tree>
           </div>
        </el-aside>
        <el-main>
           <basTable
           :tableColumnConfig="tableColumnConfig"
           :loading="loading"
           :border="border"
           :height="height"
           :tableFormConfig="tableFormConfig"
           :tableFormData="formTableData"
           :tableData="tableData"
           @insertClick="insertClick"
           @deleteClick="deleteClick"
           @formReset="reset"
           @updateClick="updateClick"
           @loadtable="loadtable"
           @formSubmit="formSubmit"
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
              <el-form-item label="上级组织机构" prop="parentName"><el-input v-model="from.parentName" readonly  class="parentId"   /></el-form-item>
              <el-form-item label="上级组织机构代码" prop="parentCode"><el-input v-model="from.parentCode" readonly  class="parentId"   /></el-form-item>
              <el-form-item label="组织机构代码" prop="deptCode"><el-input v-model="from.deptCode" /></el-form-item>
              <el-form-item label="排序" prop="deptOrderNumber"><el-input type="number" v-model="from.deptOrderNum" /></el-form-item>
             <el-form-item label="是否启用">
                <el-radio-group v-model="from.deptDisable">
                    <el-radio label="0">禁用</el-radio>
                    <el-radio label="1">启用</el-radio>
                </el-radio-group>
            </el-form-item>
             <el-form-item label="是否底级">
                <el-radio-group v-model="from.isLeaf">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="描述" prop="deptDescription"><el-input type="textarea" v-model="from.deptDescription" /></el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitClick">确 定</el-button>
            </span>
            </el-dialog>
        </el-main>
    </el-container>
</template>
<style scoped>
.el-aside{
    height: calc(100vh - 100px)
}
</style>
<script>
import { findSearchDept, findSearchDeptTree, isRepeat, insertDept, deleteDept, disableFalseAndTrue } from '@/api/dept/deptpermission'
export default {

    data() {
        return {
            tableColumnConfig: [
                //  type: seq 序号  checkbox复选框 radio单选框 expand展开行
                { type: 'seq', width: 60 },
                { type: 'checkbox', width: 60 },
                { field: 'deptEnName', title: '组织机构英文名', sortable: true },
                { field: 'deptCnName', title: '组织机构中文名' },
                { field: 'parentName', title: '上级组织机构' },
                { field: 'deptCode', title: '组织机构代码', formatter: this.userLockStatus },
                { field: 'createTime', title: '创建时间' },
                { field: 'creater', title: '创建人' },
                { field: 'updateTime', title: '修改时间' },
                { field: 'modified', title: '修改人' },
                { field: 'deptDisableSwitch', title: '禁用/启用', cellRender: { name: '$switch', events: { change: this.disableChanageEvent } } }
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
                deptOrderNum: 1,
                parentName: '全部',
                yuekejuCode: '',
                isLeaf: '1',
                deptDescription: '',
                deptDisableSwitch: '',
                parentCode: ''
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
            border: 'default',
            height: '100%'
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
            console.log(this.search)
            findSearchDept(this.search).then(res => {
                this.$refs.reftable.tablePage.total = res.total
                this.tableData = res.records
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
        // 重置
        formReset: function() {
            this.$refs['froms'].resetFields()
        },
        // 新增
        submitClick: function() {
            insertDept(this.from).then(res => {
                this.dialogVisible = false
                this.$message({ type: 'success', message: res.message })
                this.search.params.deptParentId = ''
                this.search.params.currentPage = 1
                this.init()
                this.formReset()
            })
        },
        nodeClick: function(e) {
            console.log(e)
        },
        // 树节点改变
        currentChange: function(data, e) {
            this.search.params.deptParentId = data.yuekejuCode
            this.from.deptParentId = data.yuekejuCode
            this.from.parentName = data.deptCnName
            this.from.parentCode = data.deptCode
            this.initTableData()
        },
        // 数据验证
        isRepeatCheck: function(search) {
            isRepeat(search).then(res => {
                console.log(res)
            })
        },
        // toolbar
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
            this.isRepeatCheck(search)
        },
        // 删除
        deleteClick: function(data, e) {
            let check = this.$refs.reftable.getCheckboxRecords()
            if (check === null || typeof (check) === 'undefined' || check.length === 0) {
                this.$message({
                    type: 'error',
                    message: '请选择一条或多条数据！'
                })
            } else {
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let yuekejuCode = []
                    for (let i = 0; i < check.length; i++) {
                        yuekejuCode[i] = check[i].yuekejuCode
                    }
                    deleteDept(yuekejuCode).then(res => {
                        this.$message({ type: 'success', message: res.message })
                        this.search.params.deptParentId = ''
                        this.search.params.currentPage = 1
                        this.init()
                    })
                })
            }
        },
        // 修改点击
        updateClick: function() {
            let check = this.$refs.reftable.getCheckboxRecords()
            if (check === null || typeof (check) === 'undefined' || check.length === 0 || check.length > 1) {
                this.$message({
                    type: 'error',
                    message: '请选择一条数据！'
                })
            } else {
                this.dialogVisible = true
                this.from = check[0]
                this.from.isLeaf = this.from.isLeaf + ''
                this.from.deptDisable = this.from.deptDisable + ''
            }
        },
        // 重置
        reset: function() {
            this.search.params.currentPage = 1
            this.search.params.deptEnName = ''
            this.search.params.deptCnName = ''
            this.initTableData()
        },
        // 加载table
        loadtable: function (obj, self) {
            this.search.params.currentPage = obj.currentPage
            this.search.params.pageSize = obj.pageSize
            this.initTableData()
        },
        // 筛选查询
        formSubmit: function(data, e) {
            this.search.params.currentPage = 1
            this.search.params.deptEnName = this.formTableData.deptEnName
            this.search.params.deptCnName = this.formTableData.deptCnName
            this.initTableData()
        },
        disableChanageEvent: function({ row }) {
            let params = {
                yuekejuCode: row.yuekejuCode

            }
            debugger
            if (row.deptDisableSwitch) {
                params.deptDisable = 1
            } else {
                params.deptDisable = 0
            }
            disableFalseAndTrue(params).then(res => {
                console.log(res)
                this.initTableData()
            })
        }
    }
}
</script>
