<template>
  <div>
    <div class="column">
      <figure class="highlight">
        <button class="button is-small copy-code" @click="text_copy">Copy</button>
        <pre id="pagelink">
          <slot></slot>
        </pre>
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Com-pre'
  }
</script>

<style scoped>
  .highlight {
    position: relative;
  }
  .highlight .copy-code {
    position:absolute;
    top:0;
    right:0;
  }
  .highlight pre {
    max-height:150px;
  }
</style>
