<template>
    <el-container>
        <el-header><el-page-header @back="back" title="返回" content="新增菜单"></el-page-header></el-header>
        <el-main>
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="menu_form">
                <el-form-item label="类型">
                    <el-radio-group v-model="form.permissionType">
                        <el-radio label="0">目录</el-radio>
                        <el-radio label="1">菜单</el-radio>
                        <el-radio label="2">按钮</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="菜单名称" prop="permissionName"><el-input v-model="form.permissionName"></el-input></el-form-item>
                <el-form-item label="上级菜单"><el-input v-model="form.permissionParentName" @focus="menudialogShow()" class="parentId" readonly></el-input></el-form-item>
                <el-form-item label="菜单URL" v-if="form.permissionType == 1"><el-input v-model="form.permissionUrl"></el-input></el-form-item>
                <el-form-item label="授权标识" v-if="form.permissionType == 1 || form.permissionType == 2"><el-input v-model="form.permissionPerms"></el-input></el-form-item>
                <el-form-item label="排序号" v-if="form.permissionType == 0 || form.permissionType == 1">
                    <el-input-number size="medium" :min="1" :max="999" v-model="form.pemissionOrderNum"></el-input-number>
                </el-form-item>
                <el-form-item label="图标" v-if="form.permissionType == 0 || form.permissionType == 1"><el-input v-model="form.permissionIcon"></el-input></el-form-item>
                <el-form-item label="菜单描述"><el-input type="textarea" v-model="form.permissionDescription"></el-input></el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSumbit()">保存</el-button>
                    <el-button @click="back">取消</el-button>
                </el-form-item>
            </el-form>
            <el-dialog title="选择菜单" :visible.sync="menuVisible" width="20%" class="dialogmenu">
                <el-tree node-key="yuekejuCode" ref="tree" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="menuVisible = false">取 消</el-button>
                    <el-button type="primary" @click="findClickMenuNode()">确 定</el-button>
                </span>
            </el-dialog>
        </el-main>
    </el-container>
</template>

<script>
import { findAllByMenu, insertPermission, findByCode } from '@/api/permission'
export default {
    data() {
        return {
            form: {
                permissionType: '0',
                permissionName: '',
                permissionDescription: '',
                permissionUrl: '',
                permissionPerms: '',
                permissionParentId: '',
                pemissionOrderNum: 1,
                permissionIcon: '',
                permissionParentName: '',
                yuekejuCode: ''
            },
            menuVisible: false,
            data: [],
            defaultProps: {
                children: 'list',
                label: 'permissionName'
            },
            selectPermissionType: '',
            rules: {
                permissionName: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }],
                permissionDescription: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
            }
        }
    },
    mounted() {
        if (typeof this.$route.params.yuekejuCode === 'undefined') {
            this.back()
        } else if (this.$route.params.yuekejuCode !== null) {
            this.findByCodeInit(this.$route.params.yuekejuCode)
        }
        this.init()
    },
    methods: {
        init: function() {
            var that = this
            findAllByMenu().then(res => {
                that.data = res
                console.log(res)
            })
        },
        findByCodeInit: function(data) {
            var that = this
            findByCode(data).then(res => {
                that.form = res[0]
                that.form.permissionType = res[0].permissionType + ''

                console.log(that.form)
            })
        },
        back: function() {
            this.$router.push('menu_manage')
        },
        menudialogShow: function() {
            this.menuVisible = true
        },
        handleNodeClick: function(data) {
            console.log(data)
        },
        findClickMenuNode: function() {
            this.menuVisible = false
            var getCurrentNode = this.$refs.tree.getCurrentNode()
            this.form.permissionParentId = getCurrentNode.yuekejuCode
            this.form.permissionParentName = getCurrentNode.permissionName
            this.selectPermissionType = getCurrentNode.permissionType
        },
        onSumbit: function() {
            var that = this
            if (this.selectPermissionType === 0) {
                if (this.form.permissionType === '2') {
                    this.$message.error('只能添加目录或者菜单')
                    return
                }
            }
            if (this.selectPermissionType === 1) {
                if (this.form.permissionType !== '2') {
                    this.$message.error('只能添加按钮')
                    return
                }
            }
            if (this.selectPermissionType === 2) {
                this.$message.error('按钮节点下不能添加子节点')
            }
            if (this.form.permissionType === '0') {
                this.form.permissionPerms = ''
                this.form.permissionUrl = ''
            }
            if (this.form.permissionType === '1') {
            }
            if (this.form.permissionType === '2') {
                this.form.permissionIcon = ''
                this.form.pemissionOrderNum = ''
                this.form.permissionUrl = ''
            }

            insertPermission(that.form).then(res => {
                this.$message.success(res.message)
                that.$router.push('menu_manage')
            })
        }
    }
}
</script>

<style lang="scss">
.menu_form {
    width: 70%;
}
.parentId > .el-input__inner {
    background-color: #eee;
    cursor: pointer;
}
.dialogmenu .el-dialog__header {
    border-bottom: #ccc solid 1px !important;
    background-color: #409eff;
}
.dialogmenu .el-dialog__footer {
    border-top: #ccc solid 1px !important;
}
.dialogmenu .el-dialog__headerbtn .el-dialog__close {
    color: #ffffff;
}
.dialogmenu .el-dialog__title {
    color: #ffffff;
}
</style>
