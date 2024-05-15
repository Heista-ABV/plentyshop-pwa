<template>
  <div class="px-4 md:px-6 lg:px-10 pb-10 max-w-screen-3xl mx-auto mt-10 overflow-x-auto" v-html="getHTMLTexts()" />
</template>

<script setup lang="ts">
const { data, getLegalTexts } = useLegalInformation();

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'WithdrawalForm',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};
</script>
