import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login/login'
import NotFound from '@/pages/errorPage/404'
import Forbidden from '@/pages/errorPage/403'
import Layout from '@/pages/layout/index'
import Home from '@/pages/home/index'
import insertRole from '@/pages/yuekeju-sys-manager/role/insertRole'
import insertMenu from '@/pages/yuekeju-sys-manager/menu/menu_insert'
import insertmanagerSysUser from '@/pages/yuekeju-sys-manager/manager-user/insertmanagerSysUser'
Vue.use(Router)

/* 初始路由 */
export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '',
        component: Layout,
        name: 'container',
        redirect: 'home',
        meta: {
            requiresAuth: true,
            name: '首页'
        },
        children: [
            {
                id: 1,
                path: 'home',
                component: Home,
                name: 'home',
                meta: {
                    name: '首页',
                    icon: 'tree'
                }
            }
        ]
    },
    {
        path: '/403',
        component: Forbidden
    },
    {
        path: '/permission',
        component: Layout,
        name: 'role',
        children: [
            {
                id: 1,
                path: 'insertRole',
                component: insertRole,
                name: 'insertRole',
                meta: {
                    name: '添加角色页面',
                    icon: 'tree'
                }
            },
            {
                id: 2,
                path: 'insertMenu',
                component: insertMenu,
                name: 'insertMenu',
                meta: {
                    name: '添加权限页面',
                    icon: 'tree'
                }
            }, {
                id: 2,
                path: 'insertmanagersysuser',
                component: insertmanagerSysUser,
                name: 'insertmanagersysuser',
                meta: {
                    name: '添加权限页面',
                    icon: 'tree'
                }
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }

]
