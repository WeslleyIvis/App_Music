<template>
    <form @submit.prevent="submitURL">
        <input type="text" name="url" v-model="formData.url">
        <button type="submit">Search</button>
    </form>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormURL',
    data() {
        return {
            formData: {
                url: String
            }
        }
    },
    methods: {
        async submitURL() {
            try {
                const response = await fetch('http://localhost:5555/api/ytdl', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                })

                if(response.ok)
                {
                    const data = await response.json();
                    console.log(data)
                } 
            } catch(err) {
                console.error({err: err})
            }
        }
    }
})

</script>