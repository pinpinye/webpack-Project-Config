import axios from 'axios';
// import {Loading, Message} from 'element-ui'
// import {mobileW,initLoading} from '#/util/devices';
// const error_tip = '网络繁忙，请稍后重试！';
// let isMobile = mobileW(),loadingInstance = null;
// let loadingStyle = initLoading(isMobile);
// 创建axios实例
// const service = axios.create({
//baseURL: process.env.baseUrl,       // api的base_url
// timeout: 20000,                     // 请求超时时间
// headers: {}
// });



	// 通用ajax请求方法
	// export const commonAjax = (url, params) => {
	// let loadingInstance1 = Loading.service({   //待定需要自定义loading
	// 	fullscreen: false,
	// 	target: "content"
	// });
	// console.log(params);
	// 创建axios实例
	export const  service = axios.create({
		timeout: 20000,                    // 请求超时时间
		headers: {
			"Content-Type": "application/json",
		},
	});

	// request拦截器
	service.interceptors.request.use(config => {
		console.log('config',config);
			console.log("嘻嘻嘻嘻");
		return config;
	}, error => {
	console.log(error);     // for debug
	Promise.reject(error);
})

	// respone拦截器
	service.interceptors.response.use(
		async ({data}) => {
			let response = data;
			let code = response.code;
			setTimeout(()=>{
			// loadingInstance && loadingInstance.close(); //待定需要自定义loading
		},0);
			if (code === 0) {
				return response || '';
			} else {
			// Message.error(data.msg || error_tip);
			return Promise.reject(response);
		}
	},
	error => {
		setTimeout(()=>{
			// loadingInstance && loadingInstance.close();
			// Message.error(error_tip);
		},0);
		return Promise.reject(error);
	}
	)

	// 发送请求
	// return service.post(url, params).then(res => {
	// 	return res
	// })
// }


// export default service;
