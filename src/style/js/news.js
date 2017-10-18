
import newstemplate from '../../components/template.js'

require('../css/news.less')

const say = require('./common')

say('this is home')

var tpl = newstemplate.tpl({
		name:'vini123',
		list:['荣耀王者', '最强王者', '至尊星耀', '钻石', '铂金', '黄金', '白银', '青铜']
	});

document.getElementById('tpl').innerHTML = tpl;

document.getElementById('html').innerHTML = newstemplate.tpl;

let vim  =	new Vue({
				el:'#app',
				data:{
					topCarouselIndex: 0,

					topCarouselHeight:'300px',

					navdata:[
						{text:'首页', href:'home.html', active: false},
						{text:'新秀', href:'news.html', active: true},
						{text:'排行榜', href:'https://mlxiu.com', active: false}]
					}
				});


