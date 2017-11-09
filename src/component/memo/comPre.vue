<template>
  <div>
    <div class="column">
      <figure class="highlight">
        <pre id="pagelink">
          <slot></slot>
        </pre>
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comPre'
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
