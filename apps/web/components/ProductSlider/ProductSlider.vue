<template>
  <SfScrollable buttons-placement="floating" class="pb-4 !gap-0 productSlide" :wrapper-class="wrapperClass" data-testid="product-slider" totalItems="4">
    <template v-if="maxItemCount && items">
      <template  v-if="maxItemCount == 3">
        <UiProductCard
          v-for="product in items.slice(0, maxItemCount)"
          :product="product"
          :key="productGetters.getId(product)"
          class="max-w-[100%] w-[100%] md:max-w-[50%] lg:max-w-[33%]"
          :name="productGetters.getName(product)"
          :slug="productGetters.getSlug(product) + `-${productGetters.getId(product)}`"
          :image-url="addModernImageExtension(getImageForViewport(product, 'ItemList'))"
          :image-alt="productGetters.getName(product)"
          :price="productGetters.getSpecialPrice(product)"
          :rating-count="productGetters.getTotalReviews(product)"
          :rating="productGetters.getAverageRating(product)"
          is-from-slider
        />
      </template>
      <template v-else>
        <UiProductCard
          v-for="product in items.slice(0, maxItemCount)"
          :product="product"
          :key="productGetters.getId(product)"
          class="max-w-[100%] w-[100%] md:max-w-[50%] lg:max-w-[25%]"
          :name="productGetters.getName(product)"
          :slug="productGetters.getSlug(product) + `-${productGetters.getId(product)}`"
          :image-url="addModernImageExtension(getImageForViewport(product, 'ItemList'))"
          :image-alt="productGetters.getName(product)"
          :price="productGetters.getSpecialPrice(product)"
          :rating-count="productGetters.getTotalReviews(product)"
          :rating="productGetters.getAverageRating(product)"
          is-from-slider
        />
      </template>
    </template>
    <template v-else>
      <UiProductCard
        v-for="product in items"
        :product="product"
        :key="productGetters.getId(product)"
        class="max-w-[25%]"
        :name="productGetters.getName(product)"
        :slug="productGetters.getSlug(product) + `-${productGetters.getId(product)}`"
        :image-url="addModernImageExtension(getImageForViewport(product, 'ItemList'))"
        :image-alt="productGetters.getName(product)"
        :price="productGetters.getSpecialPrice(product)"
        :rating-count="productGetters.getTotalReviews(product)"
        :rating="productGetters.getAverageRating(product)"
        is-from-slider
      />
    </template>
  </SfScrollable>
  <!--
  <div class="mt-4 typography-text-xs flex gap-1">
    <span>{{ $t('asterisk') }}</span>
    <span v-if="showNetPrices">{{ $t('itemExclVAT') }}</span>
    <span v-else>{{ $t('itemInclVAT') }}</span>
    <span>{{ $t('excludedShipping') }}</span>
  </div>-->
</template>

<script setup lang="ts">
import { productGetters } from '@plentymarkets/shop-sdk';
import { SfScrollable } from '@storefront-ui/vue';
import type { ProductSliderProps } from '~/components/ProductSlider/types';


const { addModernImageExtension, getImageForViewport } = useModernImage();
const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;


defineProps<ProductSliderProps>();
</script>
