<template>
    <div>
        <head-top></head-top>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            headTop,
        },
    }
</script>