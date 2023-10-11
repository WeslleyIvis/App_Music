<template>
    <header class="header">
        <!-- <Coment :comentario="comentario" :msg="msg" /> -->
        <div class="search-component">
            <h3>LOGO</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <form class="search-form" @submit="handleSubmit">
                <input type="text" placeholder="Search your music">
                <button type="submit"><img src="../assets/icons/lupa.png"></button>
            </form>
        </div>
    </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

interface DataJson {
    url: string;
}

export default defineComponent({
    components: {
        // Coment
    },
    name: 'HeaderContent',
    props: {},
    methods: {
        async handleSubmit(event: Event) {
            event.preventDefault()
            if(event.target instanceof HTMLElement) {
                console.dir((event.target.childNodes[0] as HTMLInputElement).value);

                const input = event.target.querySelector('input') as HTMLInputElement | null

                if(input)
                {
                    const url = input.value;
                    const jsonObject: DataJson = { url };

                    try {
                        const resp = await fetch('http://localhost:5555/te', 
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
                            console.log(data)
                        } else {
                            console.log('erro')
                        }
                    } catch (err) {
                        console.log({error: err})
                    }
                }
            }
        } 
    }
})

</script>

<style lang="scss">
    .header {
        height: 500px;
        position: relative;
        background-image: url('../assets/bg.jpg');
        background-position: center;
        color: white;

        &::before {
            background: rgba(1, 0, 13, 0.76);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .search-component {
            position: absolute;
            display: grid;          
            gap: 50px;
            max-width: 600px;
            top: 5%;
            left: 50%;
            transform: translate(-50%, 0);

            p {
                text-align: start;
                font-size: 1.5em;
            }

            .search-form {
                position: relative;
                display: flex;
                
                input[type="text"] {
                    flex-grow: 3;
                    max-width: 600px;
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
    }
</style>