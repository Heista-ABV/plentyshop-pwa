<template>
  <div>
    <picture>
      <NuxtImg 
        src="https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Logos/Logo-Animation_2.gif" 
        :alt="i18n.t('header.logoAltText')" 
        class="w-100 h-auto logoImg img-fluid "
        loading="lazy"
       /> 
    </picture>
  </div>
</template>
<script setup lang="ts">
const i18n = useI18n();
</script>
