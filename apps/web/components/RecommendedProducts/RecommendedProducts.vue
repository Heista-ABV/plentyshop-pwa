<template>
  <ProductSlider v-if="products?.length" :items="products" :max-item-count="maxItemCount" />
</template>

<script setup lang="ts">
import type { RecommendedProductsProps } from '~/components/RecommendedProducts/types';

defineProps<RecommendedProductsProps>();
</script>
