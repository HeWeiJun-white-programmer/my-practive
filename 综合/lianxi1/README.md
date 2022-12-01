- 轮廓:outline
- 拖拽:resize
- vartical-align 行内和块级的位置 解决了空白间隙问题
- 单行文本省略
- `white-space: nowrap;overflow:hidden;text-overflow:hidden`
- 多行文本省略:
- `overflow: hidden; text-overflow: ellipsis; /* 弹性盒子模型显示 */ display: -webkit-box; /* 子元素排列方式 */ -webkit-box-orient: vertical; /* 限制显示文本行数 */ -webkit-line-clamp: 2;`

* 新增表单:email,url,tel,search,color
* video 属性:controls(控制键) muted(静音)poster:(预加载图片)
* source 标签
* 新增表单属性:placehodler;autofocus;autocomplete;required

#### CSS3

- 滤镜 filter
- buler()图片模糊度
- transfrom:translate(x,y)移动
- transfrom:rotat(数字 deg)旋转 小三角实例
- transfrom:scale(x,y)缩放
- animation:名字 延长时间  线性方式  开始时间   循环次数    