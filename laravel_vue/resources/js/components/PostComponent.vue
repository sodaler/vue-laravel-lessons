<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name {{ name }}</div>
        <div>Age {{ age }}</div>
        <button @click="sayHello">Hello</button>
        <button @click="sayHi">Hi</button>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",

    data() {
        return {
            name: 'Victor',
            age: 20,
        }
    },

    methods: {
        sayHello() {
            console.log('hello')
        },
        sayHi() {
            console.log('hi')
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
