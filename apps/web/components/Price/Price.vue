<template>
  <div class="text-sm py-1 flex flex-col">
    <span v-if="oldPrice && oldPrice !== normalPrice" class="text-base font-normal text-primary-200  mr-2">
        <span class="bg-primary-700 text-white px-1 mr-2 whitespace-break-spaces font-bold">
            UVP
        </span>
        <span class="line-through">
            {{ $n(oldPrice, 'currency') }}
        </span>
    </span>
    <span class="text-primary-700 font-bold font-headings text-2xl" data-testid="price">
      {{ $n(price, 'currency') }}
      <span v-if="showNetPrices">{{ $t('asterisk') }} </span>
    </span>
    
  </div>
</template>

<script setup lang="ts">
import type { PriceProps } from '~/components/Price/types';

defineProps<PriceProps>();

const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;
</script>
