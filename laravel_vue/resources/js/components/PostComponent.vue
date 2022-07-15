<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <div>Name {{ name }}</div>
        <div>Age {{ age }}</div>
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
            boolean: false,
            someNull: null,
            arr: [
                [

                ]
            ],
            someObj: {
                personName: 'Ivan'
            }
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
