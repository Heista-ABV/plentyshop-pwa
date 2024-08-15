<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <NarrowContainer>
      <div class="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section class="grid-in-left-top md:h-full">
          <NuxtLazyHydrate when-idle>
            <Gallery :images="addModernImageExtensionForGallery(productGetters.getGallery(product))" />
          </NuxtLazyHydrate>
        </section>
        <section class="grid-in-right ">
          <NuxtLazyHydrate when-idle>
            <UiPurchaseCard v-if="product" :product="product" :review-average="productReviewAverage" />
          </NuxtLazyHydrate>
        </section>
        <section class="grid-in-left-bottom md:mt-8"><!--
          <UiDivider class="mt-4 mb-2 md:mt-8" />
          <NuxtLazyHydrate when-visible>
            <ProductAccordion v-if="product" :product="product" />
          </NuxtLazyHydrate>
          -->
          <div class="px-4 md:px-0"> 
            <h2 class="font-bold uppercase text-primary-700 font-headings text-lg leading-6 md:text-2xl mb-3">
                <span class="pb-1 border-b-4 border-primary-700">
                  {{ $t('productDetails') }}
                </span>
            </h2>
            <div v-html="productGetters.getDescription(product)"></div>
          </div>
          <!--
          <NuxtLazyHydrate when-visible>
            <ReviewsAccordion
              v-if="product"
              :product="product"
              :total-reviews="reviewGetters.getTotalReviews(productReviewAverage)"
            />
          </NuxtLazyHydrate>
          -->
        </section>        
      </div>
      <section class="mx-4 md:!mx-0 mt-28 mb-20">
        <NuxtLazyHydrate when-visible>
          <ProductRecommendedProducts
            :category-id="productGetters.getCategoryIds(product)[0]" :max-item-count="4"
          ></ProductRecommendedProducts>
        </NuxtLazyHydrate>
      </section>
    </NarrowContainer>

    <UiReviewModal />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Product, productGetters, reviewGetters } from '@plentymarkets/shop-api';

definePageMeta({
  layout: false,
  path: '/:slug*_:itemId',
});

const route = useRoute();
const { setCurrentProduct } = useProducts();
const { buildProductLanguagePath } = useLocalization();
const { addModernImageExtensionForGallery } = useModernImage();
const { productParams, productId } = createProductParams(route.params);
const { data: product, fetchProduct, setProductMeta, setBreadcrumbs, breadcrumbs } = useProduct(productId);
const { data: productReviewAverage, fetchProductReviewAverage } = useProductReviewAverage(Number(productId));
const { fetchProductReviews } = useProductReviews(Number(productId));

await fetchProduct(productParams);
setCurrentProduct(product.value || ({} as Product));
setProductMeta();

async function fetchReviews() {
  const productVariationId = productGetters.getVariationId(product.value);
  await Promise.all([
    fetchProductReviews(Number(productId), productVariationId),
    fetchProductReviewAverage(Number(productId)),
  ]);
}
await fetchReviews();

setBreadcrumbs();

// eslint-disable-next-line unicorn/expiring-todo-comments
/* TODO: This should only be temporary.
 *  It changes the url of the product page while on the page and switching the locale.
 *  Should be removed when the item search is refactored.
 */
watch(
  () => product.value.texts.urlPath,
  (value, oldValue) => {
    if (value !== oldValue) {
      navigateTo({
        path: buildProductLanguagePath(
          `/${productGetters.getUrlPath(product.value)}_${productGetters.getItemId(product.value)}`,
        ),
        query: route.query,
      });
    }
  },
);
</script>
