<template>
    <div>
        hello info compontent
        <button type="button" @click="add()">添加</button>
    </div>
</template>
<script>
import store from '@/store'
export default {
    name: 'Info',
    store,
    data () {
        return {
            msg: 'hello vue'
        }
    },
    mounted () {
        window.vue = this
    },
    methods: {
        add () {
            console.log('add Envent from info!')
            debugger
            store.commit('increase')
        }
    }
}
</script>
<style scoped>

</style>
