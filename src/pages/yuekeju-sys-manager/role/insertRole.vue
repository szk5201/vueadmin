<template>
    <el-container>
        <el-aside>
            <el-tree  ref="tree" :data="data" highlight-current show-checkbox node-key="yuekejuCode" :props="defaultProps" @check-change="nodeClick" ></el-tree>
        </el-aside>
        <el-main>
            <el-form ref="form"  :rules="rules"  :model="submitForm" label-width="auto">
                <el-form-item label="角色英文名称" prop="roleEnName"><el-input  style="width: 60%;" v-model="submitForm.roleEnName"></el-input></el-form-item>
                <el-form-item label="角色中文名称" prop="roleCnName"><el-input style="width: 60%;" v-model="submitForm.roleCnName"></el-input></el-form-item>
                <el-form-item label="角色描述" prop="roleDescription"><el-input style="width: 60%;" type="textarea"  v-model="submitForm.roleDescription"></el-input></el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button @click="close">取消</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
import { findMenuAll, insertRole } from '@/api/permission'
export default {
    data() {
        return {
            data: [

            ],
            defaultProps: {
                children: 'list',
                label: 'permissionName'
            },
            submitForm: {
                roleEnName: '',
                roleCnName: '',
                roleDescription: '',
                rolePermisionList: []
            },
            rules: {
                roleEnName: [{ required: true, message: '请输入活动英文名称', trigger: 'blur' }, { pattern: /^[a-zA-Z]{3,15}$/, message: '只能输入3-15个字母' }, { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }],
                roleCnName: [{ required: true, message: '请输入活动中文名称', trigger: 'blur' }, { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }],
                roleDescription: [{ required: true, message: '请输入角色描述', trigger: 'blur' }]
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init: function() {
            var that = this
            findMenuAll().then(res => {
                that.data = res
            })
        },
        nodeClick: function(data, checked, indeterminate) {
            console.log(data, checked, indeterminate)
        },
        submit: function() {
            var that = this
            this.$refs['form'].validate((valid) => {
                if (valid) {
                    var permission = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
                    if (permission === null || typeof (permission) === 'undefined') {
                        this.$message.error('请选择角色需要的权限菜单！')
                        return
                    }
                    for (var i = 0; i < permission.length; i++) {
                        var object = {}
                        object.permissionId = permission[i]
                        that.submitForm.rolePermisionList[i] = object
                    }
                    insertRole(that.submitForm).then(res => {
                        this.$message.success(res.message)
                        this.$router.push('../permission/yuekeju-role-manage')
                    })
                }
            })

        // this.$router.push('../permission/yuekeju-role-manage')
        },
        close: function() {
            this.$router.push('../permission/yuekeju-role-manage')
        }
    }
}
</script>

<style>
/* .el-input__inner {
    width: 60% !important;
}
.el-textarea__inner {
    width: 60% !important;
} */
</style>
