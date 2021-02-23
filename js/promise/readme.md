> 术语

1. promise 是一个有then方法的对象或者是函数，行为遵循本规范
2. thenable 是一个有then方法的对象或者是函数
3. value 是promise状态成功时的值，包括 undefined/thenable或者是 promise
4. exception 是一个使用throw抛出的异常值
5. reason 是promise状态失败时的值
> 要求

1. Promise States
Promise 必须处于以下三个状态之一: pending, fulfilled 或者是 rejected

    - 如果promise在pending状态 
        - 可以变成 fulfilled 或者是 rejected

    - 如果promise在fulfilled状态 
        - 不会变成其它状 
        - 必须有一个value值

    - 如果promise在rejected状态 
        - 不会变成其它状态 
        - 必须有一个promise被reject的reason
    - 概括即是:promise的状态只能从pending变成fulfilled，或者从pending变成rejected。promise成功，有成功的value。promise失败的话，有失败的原因


2. then方法
promise必须提供一个then方法，来访问最终的结果，promise的then方法接收两个参数，promise.then(onFulfilled, onRejected)

    - onFulfilled 和 onRejected 都是可选参数
        - onFulfilled 必须是函数类型 
        - onRejected 必须是函数类型

    - 如果 onFulfilled 是函数: 
        - 必须在promise变成 fulfilled 时，调用 onFulfilled，参数是promise的value 
        - 在promise的状态不是 fulfilled 之前，不能调用 
        - onFulfilled 只能被调用一次

    - 如果 onRejected 是函数: 
        - 必须在promise变成 rejected 时，调用 onRejected，参数是promise的reason 
        - 在promise的状态不是 rejected 之前，不能调用 
        - onRejected 只能被调用一次

    - onFulfilled 和 onRejected 应该是微任务

    - onFulfilled 和 onRejected 必须作为函数被调用

    - then方法可能被多次调用 
        - 如果promise变成了 fulfilled态，所有的onFulfilled回调都需要按照then的顺序执行 
        - 如果promise变成了 rejected态，所有的onRejected回调都需要按照then的顺序执行

    - then必须返回一个promise promise2 = promise1.then(onFulfilled, onRejected); 
        - onFulfilled 或 onRejected 执行的结果为x,调用 resolvePromise 
        - 如果 onFulfilled 或者 onRejected 执行时抛出异常e,promise2需要被reject 
        - 如果 onFulfilled 不是一个函数，promise2 以promise1的值fulfilled 
        - 如果 onRejected 不是一个函数，promise2 以promise1的reason rejected

3. resolvePromise，resolvePromise(promise2, x, resolve, reject)

    - 如果 promise2 和 x 相等，那么 reject promise with a TypeError

    - 如果 x 是一个 promsie 
        - 如果x是pending态，那么promise必须要在pending,直到 x 变成 fulfilled or rejected. 
        - 如果 x 被 fulfilled, fulfill promise with the same value. 
        - 如果 x 被 rejected, reject promise with the same reason.

    - 如果 x 是一个 object 或者 是一个 function
        - let then = x.then.
        - 如果 x.then 这步出错，那么 reject promise with e as the reason..
        - 如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)
            - resolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);
            - rejectPromise 的 入参是 r, reject promise with r.
            - 如果 resolvePromise 和 rejectPromise 都调用了，那么第一个调用优先，后面的调用忽略。
            - 如果调用then抛出异常e 
                - 如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略
                - 否则，reject promise with e as the reason
        - 如果 then 不是一个function. fulfill promise with x.
        - 如果 x 不是一个 object 或者 function，fulfill promise with x.

[参考](https://promisesaplus.com/)