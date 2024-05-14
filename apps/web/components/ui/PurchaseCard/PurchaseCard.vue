<template>
  <form
    @submit.prevent="handleAddToCart"
    class="p-4 xl:p-6 md:border  md:border-t-0 md:border-neutral-100 md:shadow-lg md:rounded-br-md md:rounded-bl-md md:sticky md:top-[80px]"
    data-testid="purchase-card"
  >
    <div class="relative">
      <div class="flex items-center justify-end absolute top-0 right-0">
        <WishlistButton :product="product" :quantity="quantitySelectorValue" >
          <!--
          <template v-if="!isWishlistItem(productGetters.getVariationId(product))">
            {{ t('addToWishlist') }}
          </template>
          <template v-else>
            {{ t('removeFromWishlist') }}
          </template>-->
        </WishlistButton>
      </div>
      <div v-if="manufLogo">
        <NuxtImg            
          :alt="manufName"
          class="manufImg max-h-[40px]" 
          :src="manufLogo" 
        />
      </div>
      <div class="mt-4 mb-4">
        <h1 class="font-bold" data-testid="product-name">        
          <template v-if="productGetters.getPropertyById(85, product).values.value">
            {{ productGetters.getPropertyById(85, product).values.value }}
          </template>
          <template v-else>
            {{ productGetters.getName(product) }}
          </template>
        </h1>      
      </div>
      <div class="itemPropContainer " v-if="product.variationProperties">
        <div class="flex flex-wrap">
          <template v-for="propGroup in product.variationProperties">
            <template v-for="prop in propGroup.properties">
              <template v-if="showPropIcons.includes(prop.id)">
                <template v-if="prop.values">
                    <div class="propContainer">
                      <template v-if="prop.cast == 'text'">
                          <div class="textProperty propWrapper textProp">
                              <template v-if="prop.names.description.length > 0">
                                  <div class="iconWrapper">
                                      <img  class="propIcon img-fluid"  :src="prop.names.description" :alt="prop.names.name" :title="prop.names.name"  >
                                  </div>
                              </template>
                              <div class="textWrapper">
                                  <span>
                                      {{ prop.values.value }}
                                      <template v-if="prop.id == 71 || prop.id == 86 ">
                                          mm
                                      </template>
                                  </span>
                              </div>

                          </div>
                      </template>
                      <template v-else-if="prop.cast == 'int'">
                          <div class="numberProperty propWrapper intProp">
                              <template v-if="prop.names.description.length > 0">
                                  <div class="iconWrapper">
                                      <img  class="propIcon img-fluid"  :src="prop.names.description" :alt="prop.names.name" :title="prop.names.name"  >
                                  </div>
                              </template>
                              <div class="textWrapper">
                                  <span>
                                      {{ prop.values.value }}
                                      <template v-if="productGetters.getPropertyById(prop.id, product).options.units[0] == 'GRM'">
                                          g
                                      </template>
                                      <template v-else>
                                          {{ productGetters.getPropertyById(prop.id, product).options.units[0] }}
                                      </template>
                                  </span>
                              </div>
                          </div>
                      </template>
                      <template v-else-if="prop.cast == 'selection'">
                          <div class="iconProperty propWrapper selectionProp">
                              <template v-if="prop.values.description.length > 0">
                                  <div class="iconWrapper">
                                      <img class="propIcon img-fluid"  :src="prop.values.description" :alt="prop.values.value" :title="prop.values.value"  >
                                  </div>
                              </template>
                              <div class="textWrapper">
                                  <span>
                                      {{ prop.values.value }}
                                  </span>
                              </div>
                          </div>
                      </template>
                      <template v-else>
                          <div class="iconProperty propWrapper  " :class="{'openInfoModal': prop.id == 87 }" :data-modaltitle="'modalTitleVP' + prop.id " :data-modaltext="'modalTextVP' + prop.id">
                              <template v-if="prop.names.description.length > 0">
                                  <div class="iconWrapper">
                                      <img class="propIcon img-fluid"  :src="prop.names.description" :alt="prop.names.name" :title="prop.names.name"  >
                                      <!--
                                      <span class="propInfo" v-if="prop.id == 87">                                                    
                                          <img  class=""  src="https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Icons/Kosmetikspiegel_Attributeinfo.svg" :alt="prop.values.value" :title="prop.values.value"  >
                                      </span>
                                      -->
                                  </div> 
                              </template>
                              <div class="textWrapper"> 
                                  <span>
                                      {{ prop.names.name }}
                                  </span>
                              </div>           
                          </div>
                      </template>                        
                  </div>
                </template>
              </template>
            </template> 
          </template>
        </div>
      </div>
      <div class="flex space-x-2 mb-2">
        <Price
          :price="currentActualPrice"
          :normal-price="normalPrice"
          :old-price="productGetters.getPrice(product).regular ?? 0"
        />
        <div v-if="(productBundleGetters?.getBundleDiscount(product) ?? 0) > 0" class="m-auto">
          <UiTag :size="'sm'" :variant="'secondary'">{{
            $t('procentageSavings', { percent: productBundleGetters.getBundleDiscount(product) })
          }}</UiTag>
        </div>
      </div>
      <LowestPrice :product="product" />
      <BasePrice
        v-if="productGetters.showPricePerUnit(product)"
        :base-price="basePriceSingleValue"
        :unit-content="productGetters.getUnitContent(product)"
        :unit-name="productGetters.getUnitName(product)"
      />
      <!--
      <UiBadges class="mt-4" :product="product" :use-availability="true" />
      -->
      <!--
      <div class="inline-flex items-center mt-4 mb-2">
        <SfRating size="xs" :value="reviewGetters.getAverageRating(reviewAverage)" :max="5" />
        <SfCounter class="ml-1" size="xs">{{ reviewGetters.getTotalReviews(reviewAverage) }}</SfCounter>
        <SfLink variant="secondary" @click="scrollToReviews" class="ml-2 text-xs text-neutral-500 cursor-pointer">
          {{ t('showAllReviews') }}
        </SfLink>
      </div>
      -->
      <!--
      <div
        class="mb-4 font-normal typography-text-sm"
        data-testid="product-description"
        v-html="productGetters.getShortDescription(product)"
      ></div>
      -->

      <BundleOrderItems v-if="product.bundleComponents" :product="product" />
      <OrderProperties v-if="product" :product="product" />
      <ProductAttributes v-if="product" :product="product" />
      <GraduatedPriceList v-if="product" :product="product" :count="quantitySelectorValue" />

      <div class="py-4">
        <div class="flex flex-col md:flex-row flex-wrap gap-4">
          <!--
          <UiQuantitySelector
            :value="quantitySelectorValue"
            @change-quantity="changeQuantity"
            class="min-w-[145px] flex-grow flex-shrink-0 basis-0"
          />
          -->
          <SfTooltip
            show-arrow
            placement="top"
            :label="isNotValidVariation || isSalableText"
            class="flex-grow-[2] flex-shrink basis-auto whitespace-nowrap"
          >
            <SfButton
              type="submit"
              data-testid="add-to-cart"
              size="lg"
              class="w-full"
              :disabled="loading || !productGetters.isSalable(product)"
            >
              <SfLoaderCircular v-if="loading" class="flex justify-center items-center" size="sm" />
              <template v-else>
                {{ t('addToCart') }}
              </template>
            </SfButton>
          </SfTooltip>
        </div>
        <!--
        <div class="mt-4 typography-text-xs flex gap-1">
          <span>{{ t('asterisk') }}</span>
          <span v-if="showNetPrices">{{ t('itemExclVAT') }}</span>
          <span v-else>{{ t('itemInclVAT') }}</span>
          <span>{{ t('excludedShipping') }}</span>
        </div>
        -->
        <PayPalExpressButton
          v-if="getCombination()"
          :value="{ product: product, quantity: quantitySelectorValue, basketItemOrderParams: getPropertiesForCart() }"
          class="mt-4"
          type="SingleItem"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { productGetters, productPropertyGetters, reviewGetters, productBundleGetters } from '@plentymarkets/shop-sdk';
import {
  SfButton,
  SfCounter,
  SfLink,
  SfRating,
  SfIconShoppingCart,
  SfLoaderCircular,
  SfTooltip,
} from '@storefront-ui/vue';
import type { PurchaseCardProps } from '~/components/ui/PurchaseCard/types';

const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;



const props = defineProps<PurchaseCardProps>();
const { product } = toRefs(props);

const viewport = useViewport();
const { getCombination } = useProductAttributes();
const { getPropertiesForCart, getPropertiesPrice } = useProductOrderProperties();
const { validateAllFields, invalidFields, resetInvalidFields } = useValidatorAggregator('properties');
const {
  validateAllFields: validateAllFieldsAttributes,
  invalidFields: invalidAttributeFields,
  resetInvalidFields: resetAttributeFields,
} = useValidatorAggregator('attributes');
const { send } = useNotification();
const { addToCart, loading } = useCart();
const { t } = useI18n();
const quantitySelectorValue = ref(1);
const { isWishlistItem } = useWishlist();
const { openQuickCheckout } = useQuickCheckout();

resetInvalidFields();
resetAttributeFields();

const currentActualPrice = computed(
  () =>
    (productGetters.getGraduatedPriceByQuantity(product.value, quantitySelectorValue.value)?.price.value ??
      productGetters.getPrice(product.value)?.special ??
      productGetters.getPrice(product.value)?.regular ??
      0) + getPropertiesPrice(product.value),
);

const normalPrice =
  productGetters.getGraduatedPriceByQuantity(product.value, quantitySelectorValue.value)?.price.value ??
  productGetters.getPrice(product.value)?.special ??
  productGetters.getPrice(product.value)?.regular ??
  0;

const basePriceSingleValue = computed(
  () =>
    productGetters.getGraduatedPriceByQuantity(product.value, quantitySelectorValue.value)?.baseSinglePrice ??
    productGetters.getDefaultBaseSinglePrice(product.value),
);

const handleAddToCart = async () => {
  await validateAllFieldsAttributes();
  await validateAllFields();
  if (invalidFields.value.length > 0 || invalidAttributeFields.value.length > 0) {
    const invalidFieldsNames = invalidFields.value.map((field) => field.name);
    const invalidAttributeFieldsNames = invalidAttributeFields.value.map((field) => field.name);
    send({
      message: [
        t('errorMessages.missingOrWrongProperties'),
        '',
        ...invalidAttributeFieldsNames,
        ...invalidFieldsNames,
        '',
        t('errorMessages.pleaseFillOutAllFields'),
      ],
      type: 'negative',
    });
    return;
  }

  if (!getCombination()) {
    send({ message: t('productAttributes.notValidVariation'), type: 'negative' });
    return;
  }

  const params = {
    productId: Number(productGetters.getId(product.value)),
    quantity: Number(quantitySelectorValue.value),
    basketItemOrderParams: getPropertiesForCart(),
  };

  if (await addToCart(params)) {
    openQuickCheckout(product.value);
    send({ message: t('addedToCart'), type: 'positive' });
  }
};

const changeQuantity = (quantity: string) => {
  quantitySelectorValue.value = Number(quantity);
};

const isReviewsAccordionOpen = () => {
  const customerReviewsAccordionDetailsElement = document.querySelector('#customerReviewsAccordion')
    ?.firstChild as HTMLDetailsElement;

  return customerReviewsAccordionDetailsElement.open;
};

const openReviewsAccordion = () => {
  const customerReviewsClickElement = document.querySelector('#customerReviewsClick') as HTMLElement;
  customerReviewsClickElement?.click();
};

const scrollToReviewsAccordion = () => {
  const customerReviewsAccordionElement = document.querySelector('#customerReviewsAccordion') as HTMLElement;
  const customerReviewsAccordionElementOffset = customerReviewsAccordionElement?.offsetTop ?? 0;

  const headerElement = document.querySelector('header') as HTMLElement;
  const headerElementOffset = headerElement.offsetHeight ?? 0;

  window.scrollTo({
    top: customerReviewsAccordionElementOffset - headerElementOffset,
    behavior: 'smooth',
  });
};

const prod = JSON.parse(JSON.stringify(product.value));

const manufacturer = prod.item.manufacturer as { name: string };
const manufacturerLogo = prod.item.manufacturer as { logo: string };
const manufName = manufacturer.name;
const manufLogo = manufacturerLogo.logo;

const showPropIcons = [36,37,38,39,40,41,42,43,44,61,62,71,86,72,87];
const isSalableText = computed(() => (productGetters.isSalable(product.value) ? '' : t('itemNotAvailable')));
const isNotValidVariation = computed(() => (getCombination() ? '' : t('productAttributes.notValidVariation')));

const scrollToReviews = () => {
  if (!isReviewsAccordionOpen()) {
    openReviewsAccordion();
  }

  scrollToReviewsAccordion();
};
</script>
