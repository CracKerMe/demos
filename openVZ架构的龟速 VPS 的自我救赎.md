# openVZ架构的龟速 VPS 的自我救赎

我曾一度觉得 搬瓦工，一个一年18.99刀的 VPS 能在需要查询资料的时候 连上网 搜索一下资料 就满足我对他的期待了。虽然我用他 能够相对 不卡的速度看下油管的480P，但是 总感觉少了点什么，尤其是我的套餐里面 每个月可是有2Tb的 流量的人啊。



12月10号，周一，我的搬瓦工down了，本以为他连使命都没完成好就要弃我而去的时候，有个朋友给我支招说，你咋不考虑使用 ``kcptun``来加速你的VPS网络体验呢？



### what? 

#### kcptun是什么？

* Kcptun 是一个非常简单和快速的，基于 KCP 协议的 UDP 隧道，它可以将 TCP 流转换为 KCP+UDP 流。而 KCP 是一个快速可靠协议，能以比 TCP 浪费10%-20%的带宽的代价，换取平均速度提高 30%-40%，且最大延迟降低三倍的传输效果。
* Kcptun 是 KCP 协议的一个简单应用，可以用于任意 TCP 网络程序的传输承载，以提高网络流畅度，降低掉线情况。由于 Kcptun 使用 Go 语言编写，内存占用低，而且适用于所有平台，甚至 Arm 平台。
* Kcptun内存占用好，加速效果也比较明显，作者也在进行维护，并且还能设置路由器客户端

#### vps还可以非硬件方式提升网速？

这种大便宜不占 铁定说不过去了。反正宕机了，文件该备份也备份好了，那就索性 彻底的搞一搞这个 KCPTUN  吧

<!--more-->

## VPS 提速 准备

1. 一台 openVZ 的VPS（kvm 的我没有）
2. cent OS6 的系统 （x86/x6都可以）
3. xshell



### 步骤：

一、关闭重装操作系统 并记录你的 服务器 密码

​	只在你重装操作系统操作后出现一次，如果丢失或者没记住，等系统安装好之后 服务器STOP 状态下 `Root password modification` 点选重新生成密码



二、开启 shadowsocks 翻墙代理

KiwiVM 界面左侧工具栏 `Shadowsocks Server` 傻瓜式 开启 翻墙代理，默认端口 `443`







https://github.com/xtaci/kcptun/releases

https://github.com/dfdragon/kcptun_gclient/releases