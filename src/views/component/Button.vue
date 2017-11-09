<template>
  <div>
    <is-static>is-static</is-static>
    <com-pre>
      &lt;is-static&gt;is-static&lt;/is-static&gt;
    </com-pre>
  </div>
</template>

<script>
  import IsStatic from "../../component/Button/isStatic.vue";
  import ComPre from "../../component/memo/comPre.vue";

  export default {
    components: {
      ComPre,
      IsStatic
    },
    name: 'Button'
  }
</script>
