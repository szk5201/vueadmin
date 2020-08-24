<template>

    <el-menu :collapse="isSidebarNavCollapse" background-color="#304156" text-color="#eee" active-text-color="#4dbcff"
        :default-active="currentMenu">
        <div class="menuTitle"> <!-- <img src="../../../assets/image/logo.jpg"> -->跃科聚管理系统 </div>
        <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
    </el-menu>
</template>

<script>
import DynamicMenu from '@/components/dynamic-menu'
import {
    mapState
} from 'vuex'

export default {
    data() {
        return {
            isCollapse: true
        }
    },
    computed: {
        ...mapState(['isSidebarNavCollapse']),
        ...mapState('permission', ['sidebarMenu', 'currentMenu'])
    },
    methods: {},
    components: {
        DynamicMenu
    }
}
</script>
<style>
    .menuTitle {
        position: relative;
        -webkit-box-sizing: border-box;
        white-space: nowrap;
        font-size: 23px;
        text-align: center;
        color: white;
        padding: 21px 0px;
    }
</style>
