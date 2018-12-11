今日头条当前可用API 

精彩图片 接口： https://www.toutiao.com/api/pc/hot_gallery/?widen=1



获取城市以及地区接口：https://www.toutiao.com/stream/widget/local_weather/city/



获取当前城市天气信息： https://www.toutiao.com/stream/widget/local_weather/data/?city=%E4%B8%8A%E6%B5%B7



热搜词：https://www.toutiao.com/2/wap/search/extra/pc_hot_search/



第一屏数据：https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&as=A1F5AC90D3FA7EF&cp=5C036A77DEAF7E1&_signature=uKo-qBAR5LcShX4omtjcRLiqPr

其中（ 

min_behot_time: 0
category: __all__
utm_source: toutiao
widen: 1
tadrequire: true
as: A1F5AC90D3FA7EF
cp: 5C036A77DEAF7E1
_signature: uKo-qBAR5LcShX4omtjcRLiqPr

）

``_signature`` 签名算法不详

通过返回数据的 next.max_behot_time 获取下一次的数据



顶部聚焦轮播图： https://www.toutiao.com/api/pc/focus/