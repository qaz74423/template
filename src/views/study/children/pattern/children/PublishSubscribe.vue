<script lang="ts" setup>import { indexOf } from 'lodash';

const _Event = (function () {
    type fn = (...args: any[]) => any
    type ListTpe = { [key: string]: fn[] }
    let clientlist: ListTpe = {};
    // 增加订阅者
    const addlisten = (key: string, fn: fn) => {
        if (!clientlist[key]) {
            clientlist[key] = []
        }
        clientlist[key].push(fn)
    }
    // 发布消息
    const trigger = (...args: any[]) => {

        let key = args.shift()
        const fns = clientlist[key]

        if (!fns || fns.length == 0) {
            return false
        }

        for (const fn of fns) {
            fn.apply(null, args)
        }
    }

    const remove = (key: string, fn?: fn) => {
        // 拿到引用
        let fns = clientlist[key];
        if (!fns) {
            return false
        }
        if (!fn) {
            fns && (fns.length = 0)
        } else {
            fns.forEach((item: fn) => {
                if (fn === item)
                    fns.splice(fns.indexOf(fn), 1)
            })
        }
    }
    return {
        addlisten,
        trigger,
        remove
    }

})()

const a = (d: string, all: string) => {
    console.log(`发布消息来自:${d},具体信息:${all}`);
}
const b = () => {
    console.log('jc发来的消息');
}

_Event.addlisten("jc", a)
_Event.addlisten("jc", b)

_Event.remove("jc", a)

_Event.addlisten("chen", () => {
    console.log('chen发来的消息');
})

_Event.trigger("jc", "jc", "前端工程师")
</script>

<template>
    <div>Publish–subscribe pattern</div>
</template>