<template>
   <el-container>
        <el-header><el-page-header @back="back" title="返回" content="新增用户"></el-page-header></el-header>
        <el-main>
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="menu_form">
            <el-form-item label="登陆名" prop="loginName"><el-input v-model="form.loginName"></el-input></el-form-item>
            <el-form-item label="用户名称" prop="name"><el-input v-model="form.name"></el-input></el-form-item>
            <el-form-item label="组织机构" prop="dept">
               <el-input v-model="form.dept" placeholder="请选择组织机构" readonly  class="parentId" ></el-input>
            </el-form-item>
            <el-form-item label="用户地址" prop="userAdress"><el-input v-model="form.userAdress"></el-input></el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                    <el-radio label="0">男</el-radio>
                     <el-radio label="1">女</el-radio>
                 </el-radio-group>
            </el-form-item>
            <el-form-item label="是否启用">
                <el-radio-group v-model="form.disableStatus">
                    <el-radio label="0">禁用</el-radio>
                    <el-radio label="1">启用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSumbit()">保存</el-button>
                <el-button @click="back">取消</el-button>
            </el-form-item>
            </el-form>
            <el-dialog title="选择组织机构" :visible.sync="menuVisible" width="20%" class="dialogmenu">

            </el-dialog>
        </el-main>
    </el-container>

</template>
<style>

</style>
<script>
export default {
    data () {
        return {
            form: {
                loginName: '',
                sex: '0',
                name: '',
                userAdress: '',
                disableStatus: '1',
                dept: ''
            },
            rules: {
                loginName: [{ required: true, message: '请输入登陆名', trigger: 'blur' },
                    { pattern: /^0?(13|14|15|18)[0-9]{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                name: [{ required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 3, max: 15, message: '请输入长度大于3小于15的字符串', trigger: 'blur' }]
            },
            menuVisible: false
        }
    },
    mounted: {
        onSumbit: function() {

        },
        back: function() {

        }
    },
    methods: {

    }
}
</script>
