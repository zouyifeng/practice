### 移动端1px问题产生原因以及解决方法

#### 产生原因
移动端有个`dpr`的概念，`window.devicePixelRatio=物理像素/CSS像素`。假如一个dpr为2的机型要呈现1px的样式，则在x轴和y轴方向上，都要2个物理像素来渲染。

设计稿提供了750px的宽度，则1px代表1/750，「1px」即是一个物理像素的距离，非一个逻辑像素的距离。所以逻辑像素1px（1*dpr）看起来会「粗」

#### 解决方法

1. 缩放+伪类
```

// 单条border
.scale::after {
  display: block;
  content: '';
  border-bottom: 1px solid #000;
  transform: scaleY(.5);
}

// 四条border
&:after {
  content:" ";
  position:absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: left top;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
}


// 媒体查询dpr，dpr=2缩放值0.5，dpr=3缩放值0.333
.min-device-pixel-ratio(@scale2, @scale3) {
  @media screen and (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) {
    transform: @scale2;
  }
  @media screen and (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3) {
    transform: @scale3;
  }
}
```

2. linear-gradient 根据渐变构建1px

```
.linear::after {
  display: block;
  content: '';
  height: 1px;
  background: linear-gradient(0, #fff, #000);
}
```


3. box-shadow

box-shadow: 属性可设置的值分别为阴影的X轴偏移量、Y轴偏移量、模糊半径（模糊）、扩散半径（实心）和颜色。

box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
            1px  0  1px -1px #e5e5e5,   //右边线
            0  1px  1px -1px #e5e5e5,   //下边线
            -1px 0  1px -1px #e5e5e5;   //左边线

```
.box-shadow-1px {
  box-shadow: inset 0px -1px 1px -1px #000;
}
```

box-shadow控制为无扩散半径，一个单位的模糊半径，以及绝对值为1的偏移量，模拟出一个px的边框。原理与linear-gradient类似。缺点是颜色有明显误差。

4. change viewport

[页面地址](https://zouyifeng.github.io/practice/css-demo/1px-border/viewport-1pxborder.html)

5. border-image、background-image
这两种方法依赖到图片，无法变更颜色

