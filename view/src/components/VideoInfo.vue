<template>
    <div>
        <iframe width="560" height="315" :src="info?.embed?.iframeUrl" :title="info?.title" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <h2> {{ info?.title }} </h2>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "VideoInfo",
    
    props: {
        info: {
            type: Object,
            require: true
        }
    }

})
</script>
