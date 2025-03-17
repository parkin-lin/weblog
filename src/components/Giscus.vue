<script setup lang="ts">
  import Giscus from '@giscus/vue'
</script>

<template>
  <div class="comments-container">
    <Giscus
      id="comments"
      repo="parkin-lin/weblog"
      repoId="R_kgDOOHL2Sg"
      category="Giscus"
      categoryId="DIC_kwDOOHL2Ss4Cn9YY"
      mapping="url"
      term="Welcome!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  </div>
</template>

<style>
  #comments::part(iframe) {
    max-width: 640px;
    margin: auto;
    display: flex;
  }

  .comments-container {
    max-height: 640px;
    overflow-y: scroll;
  }
</style>
