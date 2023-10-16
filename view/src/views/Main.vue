<template>
    <main>
        <section class="about">
            <h3>Sobre</h3>
            <p>
                O Wave Song é um aplicativo fácil de usar que permite aos usuários baixar músicas e vídeos diretamente do YouTube para seus dispositivos móveis.
            </p>

            <ol>
                <li>
                    Download de Vídeos em Diversos Formatos: O Wave Song oferece suporte para uma variedade de formatos de vídeo, permitindo que os usuários escolham a qualidade e o formato desejados antes de iniciar o download. Isso inclui opções como MP4, MKV e mais.
                </li>
                <li>
                    Extração de Áudio: Além de vídeos, os usuários podem extrair facilmente o áudio de vídeos do YouTube e salvá-lo como arquivos de áudio separados. Isso é perfeito para criar playlists de música offline.
                </li>
                <li>
                    Busca Integrada: O aplicativo inclui uma barra de busca integrada que permite aos usuários procurar vídeos ou músicas diretamente no YouTube. Basta digitar o título ou palavras-chave e o aplicativo exibirá os resultados.
                </li>
            </ol>
        </section>
    </main>    
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "MainComponent",

})

</script>

<style lang="scss">
    main {
        max-width: 1170px;
        margin: 0 auto;
        font-size: 1.2em;
        padding: 0 2em;

        h3 {
            margin-top: 2em;
        }

        p, h3 {
            text-align: start;    
            padding: 1em 0;
        }

        ol {
            text-align: start;

            li {
                margin: 1em 0;
            }
        }
    }
</style>
