<template>
  <div class="w-full h-category-top-banner py-10">
    <div class="max-w-screen-3xl mx-auto lg:px-10  px-4 md:px-6">
      <div class="md:flex">
        <div class="hidden md:block">
          <div class="aspect-square">
            <div class="px-3 py-3">
              <!--
              <NuxtImg
                :src="$t('header.aMCat'+i+'Icon'+index)"
                :alt="$t('header.aMCat'+i+'Text'+index)"
                class="headerIcon"
                loading="lazy"
              /> 
              -->
            </div>
          </div>
        </div>
        <div class="">
          <h1 class=" font-bold typography-headline-3 md:typography-headline-2">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>

  <NarrowContainer class="mb-20 px-4 md:px-0" data-testid="category-layout">    
    <div class="md:flex flex-col gap-6" data-testid="category-page-content">
      <CategorySidebar :is-open="isOpen" @close="close">
        <NuxtLazyHydrate when-visible>
          <slot name="sidebar" />
        </NuxtLazyHydrate>
      </CategorySidebar>
      <div class="flex-1">
        <div class="flex flex-wrap lg:flex-row lg:flex-nowrap justify-between items-center mb-6">
          <div class="flex flex-wrap w-full justify-between items-center">
            <span class="font-bold font-headings md:text-lg">
              {{ $t('numberOfProducts', { count: products?.length ?? 0, total: totalProducts }) }}
            </span>
            <SfButton @click="open" variant="tertiary" class="md:hidden whitespace-nowrap">
              <template #prefix>
                <SfIconTune />
              </template>
            </SfButton>
          </div>          
          <NuxtLazyHydrate when-visible>
            <slot name="sorting" />
          </NuxtLazyHydrate>          
        </div>
        <section
          v-if="products"
          class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10 md:mb-5"
          data-testid="category-grid"
        >
          <NuxtLazyHydrate when-visible v-for="(product, index) in products" :key="productGetters.getId(product)">
            <UiProductCard
              :product="product"
              :name="productGetters.getName(product) ?? ''"
              :rating-count="productGetters.getTotalReviews(product)"
              :rating="productGetters.getAverageRating(product)"
              :price="actualPrice(product)"
              :image-url="addWebpExtension(productGetters.getCoverImagePreview(product))"
              :image-alt="productGetters.getName(product) ?? ''"
              :slug="productGetters.getSlug(product) + `-${productGetters.getId(product)}`"
              :priority="index === 0"
              :base-price="productGetters.getDefaultBaseSinglePrice(product)"
              :unit-content="productGetters.getUnitContent(product)"
              :unit-name="productGetters.getUnitName(product)"
              :show-base-price="productGetters.showPricePerUnit(product)"
            />
          </NuxtLazyHydrate>
        </section>
        <LazyCategoryEmptyState v-else />
        <NuxtLazyHydrate when-visible>
          <div class="mt-4 mb-4 typography-text-xs flex gap-1" v-if="totalProducts > 0">
            <span>{{ $t('asterisk') }}</span>
            <span v-if="showNetPrices">{{ $t('itemExclVAT') }}</span>
            <span v-else>{{ $t('itemInclVAT') }}</span>
            <span>{{ $t('excludedShipping') }}</span>
          </div>
          <UiPagination
            v-if="totalProducts > 0"
            :current-page="getFacetsFromURL().page ?? 1"
            :total-items="totalProducts"
            :page-size="itemsPerPage"
            :max-visible-pages="maxVisiblePages"
          />
        </NuxtLazyHydrate>
      </div>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import type { Product } from '@plentymarkets/shop-api';
import { productGetters } from '@plentymarkets/shop-sdk';
import { SfButton, SfIconTune, useDisclosure } from '@storefront-ui/vue';
import { whenever } from '@vueuse/core';
import type { CategoryPageContentProps } from '~/components/CategoryPageContent/types';

withDefaults(defineProps<CategoryPageContentProps>(), {
  itemsPerPage: 24,
});

const { getFacetsFromURL } = useCategoryFilter();
const { addWebpExtension } = useImageUrl();

const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;

const { isOpen, open, close } = useDisclosure();
const { isTablet, isDesktop } = useBreakpoints();

const maxVisiblePages = computed(() => (isDesktop.value ? 5 : 1));

whenever(isTablet, close);

const actualPrice = (product: Product): number => {
  const price = productGetters.getPrice(product);
  if (!price) return 0;

  if (price.special) return price.special;
  if (price.regular) return price.regular;

  return 0;
};
</script>
