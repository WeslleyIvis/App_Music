<template>
    <form method="post">
        <input type="text">
        <button @click="requestApi">Search</button>
    </form>
</template>

<script lang="ts">

import { defineComponent } from 'vue';



export default defineComponent({
    name: "FormRequest",
    data() {
        return {
            
        }
    }, 

    methods: {
        requestApi() {
            console.log('a')
        }
    }
})

</script>