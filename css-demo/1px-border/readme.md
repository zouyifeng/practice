### 移动端1px问题产生原因以及解决方法

#### 产生原因
移动端有个`dpr`的概念，`window.devicePixelRatio=物理像素/CSS像素`。假如一个dpr为2的机型要呈现1px的样式，则在x轴和y轴方向上，都要2个物理像素来渲染。

设计稿提供了750px的宽度，则1px代表1/750，「1px」即是一个物理像素的距离，非一个逻辑像素的距离。所以逻辑像素1px（1*dpr）看起来会「粗」

#### 解决方法

1. 缩放+伪类
```
.scale::after {
  display: block;
  content: '';
  border-bottom: 1px solid #000;
  transform: scaleY(.5);
}
```

2. linear-gradient
```
div.linear::after {
  display: block;
  content: '';
  height: 1px;
  background: linear-gradient(0, #fff, #000);
}
```

3. background-image


4. change viewport + rem

