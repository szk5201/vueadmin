export default {
    managerSysUserConfig: {
        tableFormConfig: [
            { field: 'name', title: '名称', itemRender: { name: 'input', attrs: { placeholder: '请输入名称' } } },
            {
                field: 'userLockStatus',
                title: '锁定状态',
                itemRender: {
                    name: '$select',
                    options: [{ value: '', label: '' },
                        { value: '0', label: '未锁定' },
                        { value: '1', label: '锁定' }]
                }
            },
            { itemRender: { name: '$button', props: { content: '查询', type: 'submit', status: 'primary' } } },
            { itemRender: { name: '$button', props: { content: '重置', type: 'reset' } } }
        ]

    }

}
