<template>
  <template v-if="category.details[0].imagePath.length > 0">
    <div class="w-full h-category-top-banner py-10">
      <div class="max-w-screen-3xl mx-auto lg:px-10  px-4 md:px-6">
        <div class="md:flex">
          <div class="hidden md:block max-w-[33.33%]" v-if="category.details[0].imagePath.length > 0">
            <div class="aspect-square catHeaderBg">
              <div class="px-5 py-5">
                <div class="catImgWrapper">
                  <NuxtImg
                    :src="'https://www.kosmetikspiegel.shop/documents/'+category.details[0].imagePath"
                    :alt="category.details[0].name"
                    class="headerIcon"
                    loading="lazy" 
                  /> 
                </div>
              </div>
            </div>
          </div>
          <div class="categoryDescWrapper " :class="{ 'md:max-w-[66.66%]': category.details[0].imagePath.length > 0 }">
            <h1 class=" font-bold typography-headline-3 md:typography-headline-2 text-center md:text-left">{{ title }}</h1>
            <template v-if="$t('cat.catSubline'+category.id).length > 1">
              <div class="subHeadingWrapper text-center md:text-left">
                <h2>
                  <span class="d-none d-md-inline subHeadingLine"></span>
                  {{ $t('cat.catSubline'+category.id) }}
                </h2>
              </div>
            </template>
            <div v-html="category.details[0].description" class="catBannerDesc text-center md:text-left"></div>
            <div class="catDescLink text-center md:text-left">
              <a href="#description2" class="smoothScroll">
               {{ $t('cat.moreToThisCat') }}
              <i class="fa fa-arrow-down"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="w-full h-category-top-banner py-10">
      <div class="max-w-screen-3xl mx-auto lg:px-10  px-4 md:px-6">
        <div class="md:flex">
          <div class="">
            <h1 class=" font-bold typography-headline-3 md:typography-headline-2">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <div class="list-wrapper filterWrapper">
    <span class="hidden md:inline md:mr-5 filterOpenerText">
      {{ $t('cat.filterText1') }}
    </span>
    <button class="btn openFilter !flex !md:hidden w-100"  @click="open">
      <img src="https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Icons/filter.svg" class="hidden md:inline">
      <span>{{ $t('cat.filterBtnText') }}</span>
    </button>
    <button class="btn scrollFilter !hidden !md:flex w-100">
        <img src="https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Icons/filter.svg" class="hidden md:inline">
        <span>{{ $t('cat.filterBtnText') }}</span>
    </button>
    <span class="hidden lg:inline lg:ml-5 filterOpenerText">
      {{ $t('cat.filterText2') }}
    </span>
  </div>

  <NarrowContainer class="mb-20 px-4 md:px-0" data-testid="category-layout">    
    <div class="md:flex flex-col" data-testid="category-page-content">
      <CategorySidebar :is-open="isOpen" @close="close">
        <NuxtLazyHydrate when-visible>
          <slot name="sidebar" />
        </NuxtLazyHydrate>
      </CategorySidebar>
      <div class="flex-1">
        <div class="flex flex-wrap lg:flex-row lg:flex-nowrap justify-between items-center mb-6 mt-3">
          <div class="flex flex-wrap w-full justify-between items-center" >
            <span class="font-bold font-headings md:text-lg">
              {{ $t('numberOfProducts', { count: products?.length ?? 0, total: totalProducts }) }}
            </span>
            <!--
            <SfButton @click="open" variant="tertiary" class="md:hidden whitespace-nowrap">
              <template #prefix>
                <SfIconTune />
              </template>
            </SfButton>
            -->
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
          <!--
          <div class="mt-4 mb-4 typography-text-xs flex gap-1" v-if="totalProducts > 0">
            <span>{{ $t('asterisk') }}</span>
            <span v-if="showNetPrices">{{ $t('itemExclVAT') }}</span>
            <span v-else>{{ $t('itemInclVAT') }}</span>
            <span>{{ $t('excludedShipping') }}</span>
          </div>
          -->
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
  <template v-if="category.details[0].description2.length > 0">
    <div class="max-w-screen-3xl mx-auto md:px-6 lg:px-10 mb-20 px-4 md:px-0">
      <div id="description2" class="category-description mb-3 text-left" v-html="category.details[0].description2">
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { Product, Category } from '@plentymarkets/shop-api';
import { productGetters, categoryGetters } from '@plentymarkets/shop-sdk';
import { SfButton, SfIconTune, useDisclosure } from '@storefront-ui/vue';
import { whenever } from '@vueuse/core';
import type { CategoryPageContentProps } from '~/components/CategoryPageContent/types';
import $ from "jquery";


withDefaults(defineProps<CategoryPageContentProps>(), {
  itemsPerPage: 24,
});

const { getFacetsFromURL } = useCategoryFilter();
const { addWebpExtension } = useImageUrl();

const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;

const { isOpen, open, close } = useDisclosure();
const { isTablet, isDesktop } = useBreakpoints();



function openMobileFilter(className: string, objectName: string) {
  const classToAdd = className;
  const objectToAddTo = objectName;
  $(''+objectToAddTo).toggleClass(classToAdd)
}

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
