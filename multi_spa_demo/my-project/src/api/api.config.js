const curEnv = process.env.NODE_ENV;
let baseUrl;
// 开发环境URL--本地代理转发api
let devUrl = '/api/mockdata/v1';
// 生产环境URL（测试环境、线上）
let proUrl = 'https://node.haha.com/mockdata/v1';
// 根据环境判断路径
(curEnv == "production") ? (baseUrl = proUrl) :( baseUrl = devUrl);


  exports.apiUrl = {
    login: {
        query: baseUrl + "/juzi/v1/demo/login",
    },
}
