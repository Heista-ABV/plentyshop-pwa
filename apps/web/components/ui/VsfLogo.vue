<template>
  <picture>
    <img src="/images/Logo-Animation_2.gif" 
    :alt="i18n.t('header.logoAltText')" 
    class="w-100 h-auto py-2" /> 
  </picture>
</template>
<script setup lang="ts">
const i18n = useI18n();
</script>
