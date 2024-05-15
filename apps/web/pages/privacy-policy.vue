<template>
  <div class="px-4 md:px-6 lg:px-10  max-w-screen-3xl mx-auto mt-10 overflow-x-auto"  v-html="pageHeading" />
  <div class="px-4 md:px-6 lg:px-10 pb-10 max-w-screen-3xl mx-auto overflow-x-auto" v-html="getHTMLTexts()" />
</template>

<script setup lang="ts">
const { data, getLegalTexts } = useLegalInformation();

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'PrivacyPolicy',
});

const pageHeading = "<h1>Datenschutzerklärung</h1><hr class='mt-5 mb-5'>"

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};
</script>
