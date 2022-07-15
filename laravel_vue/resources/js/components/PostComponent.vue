<template>
    <div>
        <SinglePostComponent></SinglePostComponent>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons" v-if="person.age > 20">    <!-- foreach analog -->
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>@{{ person.job }}</td>
            </tr>
            </tbody>
        </table>
        <h5>Another table</h5>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in olderPersons">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>@{{ person.job }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent";
export default {
    name: "PostComponent",

    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: 'Vasya',
                    age: 20,
                    job: 'coach',

                },
                {
                    id: 2,
                    name: 'Elena',
                    age: 17,
                    job: 'rest',
                },
                {
                    id: 3,
                    name: 'Petr',
                    age: 34,
                    job: 'seller',
                },
                {
                    id: 4,
                    name: 'Ksenia',
                    age: 32,
                    job: 'traveller',
                },
                {
                    id: 5,
                    name: 'John',
                    age: 29,
                    job: 'teacher',
                }
            ]
        }
    },

    methods: {

    },

    computed: {
        olderPersons() {
            return this.persons.filter(function(person) {

                return person.age > 20

                // if (person.age > 20) {
                //     return person
                // }
            })
        },
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
