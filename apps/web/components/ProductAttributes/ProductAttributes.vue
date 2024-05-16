<template>
  <div data-testid="product-attributes" class="mb-2" v-if="attributes.length">
    <div class="attributesHeaderWrapper">
      <span class="attributesHeader">{{ $t('item.attributeHeader') }}</span>
      <span class="attributesHeaderLine"></span>      
    </div>
    <div v-for="(attribute, index) in attributes" :key="index" class="mb-2 variationSelect" :class="'attribute'+attribute.attributeId">
      <ClientOnly>
        <Component
          v-if="componentsMapper[productAttributeGetters.getAttributeType(attribute)]"
          :attribute="attribute" 
          :is="componentsMapper[productAttributeGetters.getAttributeType(attribute)]"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductAttributesProps, ComponentsMapper } from './types';
import AttributeDropdown from './AttributeDropdown/AttributeDropdown.vue';
import AttributeBox from './AttributeBox/AttributeBox.vue';
import AttributeImage from './AttributeImage/AttributeImage.vue';
import { productAttributeGetters } from '@plentymarkets/shop-sdk';

const componentsMapper: ComponentsMapper = {
  dropdown: AttributeDropdown,
  box: AttributeBox,
  image: AttributeImage,
};

const { attributes, setAttribute } = useProductAttributes();
const props = defineProps<ProductAttributesProps>();
const route = useRoute();

const lastSegment = route.path.split('/').pop() ?? '';
const selectAttributes = lastSegment.split('_').length > 2;

setAttribute(props.product, selectAttributes);
</script>
