import {userinfo, games} from './header'

import keys from './header'

require('../css/home.less')

const say = require('./common')

say('this is home')

say(userinfo)

say(games)

say(keys)

let vim =	new Vue({
				el:'#app',
				data:{
					topCarouselIndex: 0,

					topCarouselHeight:'300px',

					navdata:[
						{text:'首页', href:'home.html', active: true},
						{text:'新秀', href:'news.html', active: false},
						{text:'排行榜', href:'https://mlxiu.com', active: false}],

					formValidate: {
	                    name: '',
	                    mail: '',
	                    city: '',
	                    gender: '',
	                    interest: [],
	                    date: '',
	                    time: '',
	                    desc: ''
	                },

	                ruleValidate: {
	                    name: [
	                        { required: true, message: '姓名不能为空', trigger: 'blur' }
	                    ],
	                    mail: [
	                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
	                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
	                    ],
	                    city: [
	                        { required: true, message: '请选择城市', trigger: 'change' }
	                    ],
	                    gender: [
	                        { required: true, message: '请选择性别', trigger: 'change' }
	                    ],
	                    interest: [
	                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
	                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
	                    ],
	                    date: [
	                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
	                    ],
	                    time: [
	                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
	                    ],
	                    desc: [
	                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
	                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
	                    ]
	                }
				},

		        methods: {
		            handleSubmit (name) {
		                this.$refs[name].validate((valid) => {
		                    if (valid) {
		                        this.$Message.success('提交成功!');
		                    } else {
		                        this.$Message.error('表单验证失败!');
		                    }
		                })
		            },
		            handleReset (name) {
		                this.$refs[name].resetFields();
		            }
		        }
			})


if (vim && vim.navdata)
{
    vim.navdata.forEach(function (value, index)
    {
        if (index == 0)
        {
            value.active = true
        }
        else
        {
            value.active = false
        }
    })
}

resizeWH()

window.onresize = resizeWH

function resizeWH ()
{
    if (vim)
        vim.topCarouselHeight = (window.innerHeight - 62) + 'px'
}


