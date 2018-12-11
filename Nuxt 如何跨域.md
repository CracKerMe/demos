Nuxt 如何跨域？

1. 安装了 `@nuxtjs/axios @nuxtjs/proxy ` 插件

   ```shell
   npm i @nuxtjs/axios @nuxtjs/proxy -D
   ```

   然后在 nuxt.config.js 中添加修改如下代码

   ```shell
   module.exports = {
       build:{
           vendor: ['axios']
       }
       modules: [
           '@nuxtjs/axios',
           '@nuxtjs/proxy'
       ],
       proxy: [
           ['/app', { target: 'http://xxx.com:8080' }]
       ]
   }
   ```

   ​

2. 如果只想使用axios

```
module.exports = {
    axios: {
    	proxy: true
  	},
  	proxy: {
    	'/api': {
      	target: 'http://xxx.com:8080',
      	pathRewrite: { '^/api': '' }
    }
}
```

