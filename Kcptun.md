恭喜! Kcptun 服务端安装成功。
服务器IP:  45.62.118.206 
端口:  29900 
加速地址:  127.0.0.1:443
key:  123456 
crypt:  aes-128 
mode:  fast 
mtu:  1350 
sndwnd:  512 
rcvwnd:  512 
datashard:  10 
parityshard:  3 
dscp:  0 
nocomp:  false 
quiet:  false 

当前安装的 Kcptun 版本为: 20181114
请自行前往:
  https://github.com/xtaci/kcptun/releases/tag/v20181114
手动下载客户端文件

可使用的客户端配置文件为:
{
  "localaddr": ":443",
  "remoteaddr": "45.62.118.206:29900",
  "key": "123456",
  "crypt": "aes-128",
  "mode": "fast",
  "mtu": 1350,
  "sndwnd": 512,
  "rcvwnd": 512,
  "datashard": 10,
  "parityshard": 3,
  "dscp": 0,
  "nocomp": false,
  "quiet": false
}

手机端参数可以使用:
  key=123456;crypt=aes-128;mode=fast;mtu=1350;sndwnd=512;rcvwnd=512;datashard=10;parityshard=3;dscp=0

Kcptun 安装目录: /usr/local/kcptun

已将 Supervisor 加入开机自启,
Kcptun 服务端会随 Supervisor 的启动而启动

更多使用说明: ./kcptun.sh help

如果这个脚本帮到了你，你可以请作者喝瓶可乐:
  https://blog.kuoruan.com/donate
