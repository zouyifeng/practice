### diff算法与patch机制

> 操作model -> 触发Dep中的watcher -> watcher调用update -> 产生新的vnode，对比旧vnode -> 更新视图

diff 算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式，所以时间复杂度只有 O(n)

#### patch 过程
1. 有新节点，无旧节点，则添加新节点
2. 无新节点，有旧节点，则删除旧节点
3. 新节点和旧节点是samevnode，则patchVnode（比对）
4. 新节点和旧节点不是samevnode，则删除旧节点，添加新节点


#### patchVnode 过程情况
- old === new，则跳过比对
- 新旧节点都是静态节点并且key相同，则跳过比对
- 对比新旧节点的孩子节点
 1. 新旧节点孩子节点都存在，则updateChildren
 2. 新旧节点孩子节点缺失，则新增或删除孩子节点操作