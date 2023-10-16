<template>
    <div class="iframe" :class="{ 'animation': onComp}">
        <iframe :src="info?.embed?.iframeUrl" :title="info?.title" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <div class="tes">
            <h2> {{ info?.title }} </h2>

        </div>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "VideoInfo",
    
    props: {
        info: {
            type: Object,
            require: true,
        },
    },

    data() {
        return {
            onComp: false,
        }
    }

})
</script>

<style lang="scss">
    .d-none {
        display: none;
    }
    
    .iframe {  
     
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
        
        iframe {
 
            max-width: 600px;
            height: 400px;
            width: 90%;

            padding: 2em 1em;
        }
    }

    .animation {
        animation: enter 1s alternate;
    }

    @keyframes enter {
        from {
            padding-left: 1em;
            opacity: 0;
        }
        to {
            padding-left: 0;
            opacity: 1;
        }
    }
    
</style>