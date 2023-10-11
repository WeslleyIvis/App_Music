<template>
  <div>
    <button @click="comentar">Comentar</button>
    <p>{{ internalComentario }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentComponent',
  props: {
    comentario: String,
    msg: { type: String, required: true },
  },
  data() {
    return {
      count: 1,
      internalComentario: this.comentario,
    };
  },
  methods: {
    comentar() {
      this.internalComentario = Math.random() * 10 + '';
    },
  },

  mounted() {
    // this.msg e this.count estão disponíveis aqui
  },
});
</script>
