<template>
    <header class="header">
        <div class="search-component" v-if="onSearch">
            <div>
                <h3>LOGO</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <form class="search-form" @submit="handleSubmit">
                    <input type="text" placeholder="Search your music">
                    <button type="submit"><img src="../assets/icons/lupa.png"></button>
                </form>
                <p v-if="showError" class="error">URL not found</p>
            </div>
            
        </div>
        <VideoInfo v-if="showError" :info="infVideo"/>
    </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import VideoInfo from '../components/VideoInfo.vue'

interface DataJson {
    url: string;
}

export default defineComponent({
    components: {
        VideoInfo
    },
    name: 'HeaderContent',
    data() {
        return {
            video: Object,
            infVideo: {},
            infVideoTypes: {},
            onSearch: true,
            showError: false,
        }
    },
    methods: {
        async handleSubmit(event: Event) {
            event.preventDefault()
            if(event.target instanceof HTMLElement) {
                event.target.classList.toggle('loading')
                

                const input = event.target.querySelector('input') as HTMLInputElement | null

                if(input)
                {
                    const url = input.value;
                    const jsonObject: DataJson = { url };

                    try {
                        const resp = await fetch('http://localhost:5555/api/ytdl', 
                        {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jsonObject)
                        })

                        if(resp.ok)
                        {
                            const data = await resp.json()
                            this.infVideo = data.infVideo[1];
                            this.onSearch = false;
                            this.showError = false;
                            console.log(data.infVideo)
                        } else {
                            this.showError = true;
                        }
                        
                    } catch (err) {
                        console.log({error: err})
                    }
                }
                event.target.classList.toggle('loading')
            }
        } 
    }
})

</script>

<style lang="scss">
    .header {
        position: relative;
        color: white;
        background: rgba(1, 0, 13, 0.76);
        
        height: 700px;
        
        &::before {
            background-position: center;
            background-image: url('../assets/bg.jpg');
            z-index: -1;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .search-component {         
            p {
                text-align: start;
                font-size: 1.5em;
            }
        
            div {
                display: grid;          
                gap: 50px;
                padding: 1em 1em 0 1em;
                max-width: 600px;
                margin: 0 auto;
            }             

            .search-form {
                display: flex;

                input[type="text"] {
                    max-width: 100%;
                    flex-grow: 1;
                    padding: 1.4em;
                    border-radius: 10px 0 0 10px;
                    border: none;
                    outline: none;
                }

                input[type="text"]::placeholder {
                    padding: 10px;
                }

                button {
                    padding: 1em 1.5em;
                    border: none;
                    border-radius: 0 10px 10px 0;
                    cursor: pointer;
                    transition: .5s;

                    &:hover {
                        background-color: rgb(38, 45, 102);
                    }

                    img {
                        max-width: 25px;
                    }
                }
            }          
        }

        .error {
            color: rgb(255, 156, 156);
        }

        .loading::after {
            position: absolute;
            top: 120%;
            left: 0;
            content: ' ';
            margin: 10px;
            width: 20px;
            height: 20px;
            border: 4px solid #f3f3f3;
            border-top: 5px solid darkcyan;
            border-radius: 50%;
            background: transparent;
            animation: spin 1s infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            } to {
                transform: rotate(360deg);
            }
        }
    }
</style>