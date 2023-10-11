<template>
    <div>
        <h1>TESTE</h1>
        <button @click="somar">Somar</button>
        <p>{{ somarValor }}</p>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "TesteComponent",

    data() {
        return {
            count: 1,
            somarValor: 0,
        }
    },
    methods: {
        somar() {
            this.somarValor++
        }
    }
})

</script>