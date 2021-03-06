import { createVirtualTextNode } from './util.js';

export default function hyperscript(nodeName, attributes, ...children) {
    
    if (children) {
        // 如果传入的是纯字符串，包装一层虚拟文本节点
        children = children.map(item => 
            typeof item !== 'string' ? item : createVirtualTextNode(item)
        );
    }
    console.log(2, 'nodeName',  nodeName, attributes, children)
    // console.log('{ nodeName, attributes, children }: ', { nodeName, attributes, children });
    // 返回虚拟dom对象
    return { nodeName, attributes, children };
}