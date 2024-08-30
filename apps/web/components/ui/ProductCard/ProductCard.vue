<template>
  <div
    class="flex flex-col flex-auto flex-shrink-0 catProduct group !flex-col "
    data-testid="product-card"
  >
    <SfLink 
        :tag="NuxtLink" 
        rel="preload" 
        :to="productPath" 
        as="image" 
        class="stretched-link"
        :aria-label="name"
      >
    </SfLink>
    <div class="relative catImageWrapper">
        <div class="hidden md:flex percentSavings justify-center w-[45px]" v-if="getPercentSavings">
            <span>-{{ getPercentSavings }}%</span>
        </div>
        <div class="hidden md:flex desktopMagnifyVals">
            <div class="sizeCont ">
                <div class="sizeWrapper justify-center flex-col">
                    <template v-if="getMagnifyValues">
                        <div class="sizeWrapper">
                            <!--
                                <p class="sizesHeading mb-0">{{ $t('cat.catVarItemPropsName82') }}</p>
                            -->
                            <div class="availableSizes justify-center">
                                <template v-for="magnifyNumber in getMagnifyValues">													
                                    <div class="availableSize">
                                        {{ magnifyNumber.value }}
                                    </div>							 						
                                </template>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="catImageSwapper">
            <SfLink 
                :tag="NuxtLink" 
                rel="preload" 
                :to="productPath" 
                as="image"
                class="catImg0"
                :aria-label="name"
            >   
                <NuxtImg
                :src="getImgGallery[0].urlSecondPreview"
                :alt="imageAlt"
                :loading="lazy && !priority ? 'lazy' : 'eager'"
                :fetchpriority="priority ? 'high' : 'auto'"
                :preload="priority || false"
                class="object-contain rounded-md aspect-square w-full h-fit transition duration-500 md:group-hover:!scale-100 md:scale-90 "
                :width="imageWidth"
                :height="imageHeight"
                data-testid="image-slot"
                />
            
            </SfLink>
            <template v-if="getImgGallery && getImgGallery.length > 1">       
                <template v-for="(thumb, index) in getImgGallery">
                    <template v-if="index > 0 && index < 5">
                        <SfLink :tag="NuxtLink" rel="preload" :to="productPath" as="image" :class="'catImgFS catImg'+index" :aria-label="name">
                            <NuxtImg
                                :src="thumb.urlSecondPreview"
                                :alt="imageAlt"
                                :loading="lazy && !priority ? 'lazy' : 'eager'"
                                :fetchpriority="priority ? 'high' : 'auto'"
                                :preload="priority || false"
                                class="object-contain rounded-md aspect-square w-full h-fit transition duration-500"
                                :width="imageWidth"
                                :height="imageHeight"
                                data-testid="image-slot"
                            />                        
                        </SfLink>
                    </template>
                </template>
            </template>
        </div>

      <slot name="wishlistButton">
        <WishlistButton
          square
          class="absolute bottom-0 right-0 mr-[10px] mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full hover:!bg-primary-700 active:!bg-primary-700 hover:!text-white active:!text-white z-[20]"
          :product="product"
        />
      </slot>
    </div>
    <div class="thumbImageWrapper hidden md:block">
        <template v-if="getImgGallery">            
            <div class="flex items-center justify-center py-2 h-[66px] gap-2.5">
                <template v-for="(thumb, index) in getImgGallery">
                    <template v-if="index <= 4"> 
                        <div class="max-w-[50px] w-[50px] max-h-full h-full previewImg" :class="'previewImg'+index" @mouseover="addClassToParent('showPreview'+index, 'catProduct')" @mouseleave="removeClassFromParent('showPreview'+index, 'catProduct')">
                            <NuxtImg
                                :src="thumb.urlPreview"
                                :alt="thumb.names.alternate"
                                :loading="'lazy'"
                                :fetchpriority="priority ? 'high' : 'auto'"
                                :preload="priority || false"
                                class=" rounded-md aspect-square w-full h-full transition duration-500"     
                                data-testid="image-slot-preview"
                                />
                        </div>
                    </template>
                </template>
            </div>
        </template>
    </div>
    <div class="categoryContentWrapper ">
        <div class="catContentMid hidden md:flex justify-center align-items-center" v-if="manufName">        
            <SfLink :tag="NuxtLink" :to="productPath" class="no-underline w-full text-center" variant="secondary" :aria-label="name">
                <template v-if="getVarPropName && getVarPropName.length > 0">
                    {{ manufName }} {{ getVarPropName }}   
                </template>
                <template v-else> 
                    {{ manufName }} Kosmetikspiegel
                </template>
            </SfLink> 
        </div>  
        <div class="catMainContent">
            <div class="catContentBotSide">
                <SfLink :tag="NuxtLink" :to="productPath" class="no-underline hover:text-secondary-700" variant="secondary" :aria-label="name">
                    <div class="bottomWrapper md:flex !flex-row !justify-center !items-end gap-2 md:gap-0 md:!h-auto">
                        <div class="sizeCont ">
                            <div class="sizeWrapper md:hidden justify-center flex-col">
                                <template v-if="getMagnifyValues">
                                    <div class="sizeWrapper">
                                        <p class="sizesHeading mb-0">{{ $t('cat.catVarItemPropsName82') }}</p>
                                        <div class="availableSizes justify-center">
                                        <template v-for="magnifyNumber in getMagnifyValues">													
                                            <div class="availableSize">
                                                {{ magnifyNumber.value }}
                                            </div>							 						
                                            </template>
                                        </div>
                                    </div>
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
                                                            :alt="productPropertyGetters.getPropertyName(prop)"
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
                                                            {{ prop.values.value  }} mm
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
                </SfLink>
            </div>
            <div class="thumb-content catContentTopSide"> 
                <SfLink :tag="NuxtLink" :to="productPath" class="no-underline" variant="secondary" :aria-label="name">
                    <div class="prices flex !flex-row !gap-3 !items-center md:!items-end !justify-between">          
                        <span 
                        v-if="oldPrice && oldPrice > mainPrice"
                        class="text-primary-400 line-through price-view-port typography-text-md crossPrice"
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
                </SfLink>
            </div>
        </div>
    </div>    
  </div>
</template>

<script setup lang="ts">
import { CategoryTreeItem, productGetters, productPropertyGetters } from '@plentymarkets/shop-api';
import { SfLink, SfIconShoppingCart, SfLoaderCircular, SfIconChevronRight, SfRating, SfCounter } from '@storefront-ui/vue';
import type { ProductCardProps } from '~/components/ui/ProductCard/types';
import $ from "jquery";

const localePath = useLocalePath();
const { t, n } = useI18n();
const {
  product,
  name,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  rating,
  ratingCount,
  priority,
  lazy,
  unitContent,
  unitName,
  basePrice,
  showBasePrice,
  isFromWishlist,
  isFromSlider,
} = withDefaults(defineProps<ProductCardProps>(), {
  lazy: true,
  imageAlt: '',
  isFromWishlist: false,
  isFromSlider: false,
});

const { data: categoryTree } = useCategoryTree();
const { openQuickCheckout } = useQuickCheckout();
const { addToCart } = useCart();
const { send } = useNotification();
const loading = ref(false);
const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;
const productPath = ref('');
const setProductPath = (categoriesTree: CategoryTreeItem[]) => {
  const path = productGetters.getCategoryUrlPath(product, categoriesTree);
  const productSlug = productGetters.getSlug(product) + `_${productGetters.getItemId(product)}`;
  productPath.value = localePath(`${path}/${productSlug}`);
};

setProductPath(categoryTree.value);

function addClassToParent(className: string, objectName: string) {
    const classToAdd = className;
    const objectToAddTo = objectName;  
    var target = $( event!.target! ) ;
    var catArticle = target.parents('.'+objectToAddTo);
    catArticle.addClass(classToAdd)
    
    
}  

function removeClassFromParent(className: string, objectName: string) {
    const classToAdd = className;
    const objectToAddTo = objectName;  
    var target = $( event!.target! );
    var catArticle = target.parents('.'+objectToAddTo);
    catArticle.removeClass(classToAdd)
} 

const addWithLoader = async (productId: number) => {
  loading.value = true;

  try {
    await addToCart({
      productId: productId,
      quantity: 1,
    });

    openQuickCheckout(product, 1);
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

const getImgGallery: any = computed(() => {
    var getImages  = productGetters.getGallery(product);
    return getImages;
});

const { addModernImageExtension } = useModernImage();

const getVarPropName = computed(() => {
  var getProp = productGetters.getPropertyById(93, product);
  if(getProp){
    return getProp.values.value; 
  }
});

const getPercentSavings: any = computed(() => {
    // UVP
    var regularPrice  = productGetters.getRegularPrice(product);
    // Verkaufspreis
    var specialPrice  = productGetters.getSpecialPrice(product);
    if(specialPrice){
        var priceDiff = regularPrice - specialPrice;
        var percentCalc = (priceDiff / regularPrice) * 100;
        var roundedPercent = Math.round(percentCalc);
        if(roundedPercent > 0){
            return roundedPercent;
        }      
    }
});

const getMagnifyValues: any = computed(() => {
  var getProp = productGetters.getPropertyById(82, product);
  if(getProp){
    return getProp.values;
  }
});

const manufacturer = product.item.manufacturer as { externalName: string };
const manufName = manufacturer.externalName;
const cheapestPrice = productGetters.getCheapestGraduatedPrice(product);
const oldPrice = productGetters.getRegularPrice(product);
const NuxtLink = resolveComponent('NuxtLink');

const iconPropIds = [71,86,41,39,36]
const iconPropOPValueIds = [71,86]
watch(
  () => categoryTree.value,
  (categoriesTree) => setProductPath(categoriesTree),
);
</script>
