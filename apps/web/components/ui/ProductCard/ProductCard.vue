<template>
  <div
    class="flex flex-col flex-auto flex-shrink-0 catProduct group !flex-col"
    data-testid="product-card"
  >
    <div class="relative catImageWrapper">
      <!--
      <UiBadges
        :class="['absolute', isFromWishlist ? 'mx-2' : 'm-2']"
        :product="product"
        :use-availability="isFromWishlist"
      />
      -->
      <SfLink :tag="NuxtLink" rel="preload" :to="localePath(`${path}/${productSlug}`)" as="image" class="">
        <NuxtImg
          ref="img"
          :src="imageUrl"
          :alt="imageAlt"
          :loading="lazy && !priority ? 'lazy' : 'eager'"
          :fetchpriority="priority ? 'high' : undefined"
          :preload="priority || false"
          class="object-contain rounded-md aspect-square w-full h-fit transition duration-500 md:group-hover:!scale-100 md:scale-90 "
          data-testid="image-slot"
        />
        <!--
        <SfLoaderCircular v-if="!imageLoaded" class="absolute" size="sm" />
        -->
      </SfLink>

      <slot name="wishlistButton">
        <WishlistButton
          square
          class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full hover:!bg-primary-700 active:!bg-primary-700 hover:!text-white active:!text-white"
          :product="product"
        />
      </slot>
    </div>
    <div class="categoryContentWrapper ">
      <div class="thumb-content catContentTopSide"> 
        <div class="prices flex !flex-row !gap-3 !items-center !justify-between">          
          <span
            v-if="oldPrice && oldPrice !== mainPrice"
            class="text-primary-200 line-through price-view-port typography-text-md crossPrice"
          >
            {{ n(oldPrice, 'currency') }}
          </span>
          <span class="font-bold typography-text-md price text-primary-700 catPrice" data-testid="product-card-vertical-price">
            <span v-if="!productGetters.canBeAddedToCartFromCategoryPage(product)" class="mr-1">
              {{ t('account.ordersAndReturns.orderDetails.priceFrom') }}
            </span>
            <span>{{ n(cheapestPrice ?? mainPrice, 'currency') }}</span>
          </span>
        </div>
      </div>
      <div class="catContentMid hidden md:flex justify-center align-items-center" v-if="manufName">        
        <SfLink :tag="NuxtLink" :to="localePath(`${path}/${productSlug}`)" class="no-underline" variant="secondary">
          {{ manufName }} {{ getVarPropName(productGetters.getPropertyGroupById(11, product)) }}   
        </SfLink>
      </div>
      {{ productGetters.getPropertyGroupById(11, product) }}
      <div class="catContentBotSide">
        <div class="bottomWrapper md:flex !flex-row !justify-center !items-end gap-3 md:!h-auto">
          <div class="sizeCont">
            <div class="sizeWrapper md:flex justify-center flex-col">
               <template v-if="product.variationProperties">
								<template v-for="propGroup in product.variationProperties">
									<template v-if="propGroup.id == 10">
										<template v-for="prop in propGroup.properties">
											<template v-if="prop.id == 82"> 
                        <div class="sizeWrapper"> 
													<p class="sizesHeading mb-0">{{ $t('cat.catVarItemPropsName82') }}</p>
													<div class="availableSizes md:!justify-center">
														<template v-for="vals in prop.values">													
															<div class="availableSize">
																{{ vals.value }}
															</div>							 						
														</template>
													</div>
												</div>
                      </template>
                    </template>
                  </template>
                </template>
              </template>
            </div>
          </div>
          <div class="hv-category-item-properties">
            <template v-if="product.variationProperties">
              <template v-for="propGroup in product.variationProperties">
                <template v-for="prop in propGroup.properties">
                  <template v-if="iconPropIds.includes(prop.id)">
                    <div :class="'propertyWrapper property'+prop.id">
                      <div class="iconBox">
                        <div class="imageWrapper">
                          <NuxtImg
                            ref="img"
                            :src="productPropertyGetters.getPropertyNameDescription(prop)"
                            :alt="productPropertyGetters.getPropertyValue(prop)"
                            :loading="lazy && !priority ? 'lazy' : 'eager'"
                            :fetchpriority="priority ? 'high' : undefined"
                            :preload="priority || false"
                            class="iconImg"
                            data-testid="image-slot"
                            width="35"
                            height="35"
                          />
                        </div>
                      </div>
                      <div class="valueBox leading-4 text-left ml-1">
                        <template v-if="iconPropOPValueIds.includes(prop.id)">
                          <span class="value">
                            {{ prop.values.value  }} 
                            <br> mm
                          </span>
                        </template>   
                        <template v-else>
                          <span class="valueName">
                              {{ $t('cat.catVarItemPropsName'+prop.id) }}
                          </span>
                        </template>               
                      </div>                  
                    </div>

                  </template>
                </template>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="p-2 typography-text-sm flex flex-col flex-auto">
     
      
      <!--
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="rating ?? 0" :max="5" />
        <SfLink to="#" variant="secondary" :tag="NuxtLink" class="ml-1 no-underline">
          <SfCounter size="xs">{{ ratingCount }}</SfCounter>
        </SfLink>
      </div>
      <p class="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">
        {{ description }}
      </p>
      
      <LowestPrice :product="product" />
      <div v-if="showBasePrice" class="mb-2">
        <BasePriceInLine :base-price="basePrice" :unit-content="unitContent" :unit-name="unitName" />
      </div>
      <SfButton
        v-if="productGetters.canBeAddedToCartFromCategoryPage(product) || isFromWishlist"
        size="sm"
        class="min-w-[80px] w-fit"
        data-testid="add-to-basket-short"
        @click="addWithLoader(Number(productGetters.getId(product)))"
        :disabled="loading"
      >
        <template #prefix v-if="!loading">
          <SfIconShoppingCart size="sm" />
        </template>
        <SfLoaderCircular v-if="loading" class="flex justify-center items-center" size="sm" />
        <span v-else>
          {{ t('addToCartShort') }}
        </span>
      </SfButton>
      <SfButton v-else type="button" :tag="NuxtLink" :to="localePath(`${path}/${productSlug}`)" size="sm" class="w-fit">
        <span>{{ t('showArticle') }}</span>
        <template #prefix>
          <SfIconChevronRight size="sm" />
        </template>
      </SfButton>
    </div>
    -->
  </div>
</template>

<script setup lang="ts">
import { productGetters, productPropertyGetters   } from '@plentymarkets/shop-sdk';
import {
  SfLink,
  SfButton,
  SfIconShoppingCart,
  SfIconChevronRight,
  SfRating,
  SfCounter,
} from '@storefront-ui/vue';
import type { ProductCardProps } from '~/components/ui/ProductCard/types';

const localePath = useLocalePath();
const { t, n } = useI18n();
const { product } = withDefaults(defineProps<ProductCardProps>(), {
  lazy: true,
  imageAlt: '',
  isFromWishlist: false,
  isFromSlider: false,
});

const { data: categoryTree } = useCategoryTree();

const { addToCart } = useCart();
const { send } = useNotification();
const loading = ref(false);
const imageLoaded = ref(false);
const img = ref();
const emit = defineEmits(['load']);
const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;

onMounted(() => {
  const imgElement = (img.value?.$el as HTMLImageElement) || null;

  if (imgElement) {
    if (!imageLoaded.value) {
      if (imgElement.complete) imageLoaded.value = true;
      imgElement.addEventListener('load', () => (imageLoaded.value = true));
    }

    nextTick(() => {
      if (!imgElement.complete) emit('load');
    });
  }
});

const addWithLoader = async (productId: number) => {
  loading.value = true;

  try {
    await addToCart({
      productId: productId,
      quantity: 1,
    });
    send({ message: t('addedToCart'), type: 'positive' });
  } finally {
    loading.value = false;
  }
};

const mainPrice = computed(() => {
  const price = productGetters.getPrice(product);
  if (!price) return 0;

  if (price.special) return price.special;
  if (price.regular) return price.regular;

  return 0;
});


function getVarPropName(variationProperties) {
  if(variationProperties){    
    for (let property of variationProperties.properties) {
      if (productPropertyGetters.getPropertyId(property) === 93) {
        return productPropertyGetters.getPropertyValue(property);
      }
    }    
  }
  return undefined;
}

const manufacturer = product.item.manufacturer as { name: string };
const manufName = manufacturer.externalName;


const cheapestPrice = productGetters.getCheapestGraduatedPrice(product);
const oldPrice = productGetters.getRegularPrice(product);
const path = computed(() => productGetters.getCategoryUrlPath(product, categoryTree.value));
const productSlug = computed(() => productGetters.getSlug(product) + `_${productGetters.getItemId(product)}`);
const NuxtLink = resolveComponent('NuxtLink');

const iconPropIds = [71,86,41,39,36]
const iconPropOPValueIds = [71,86]
</script>
