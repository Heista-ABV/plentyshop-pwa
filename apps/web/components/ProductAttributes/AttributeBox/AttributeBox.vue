<template>
  <div class="attributeRow flex flex-row items-center flex-wrap">
    <div class="attributeInfoWrapper ">
      <p class="mb-0">
        {{ productAttributeGetters.getAttributeName(attribute) }}
      </p>
    </div>
    <div :id="'attribute-' + productAttributeGetters.getAttributeId(attribute)" class="varBoxes flex flex-wrap">
      <div
        v-for="item in productAttributeGetters.getAttributeValues(attribute)"
        :key="productAttributeGetters.getAttributeValueId(item)"
        class=" cursor-pointer varBox"
        :class="{
          'disabled': productAttributeGetters.isAttributeValueDisabled(item),
          'active': value === productAttributeGetters.getAttributeValueId(item),
          '': Boolean(errors['selectedValue']),
        }"
        @click="doUpdateValue(productAttributeGetters.getAttributeValueId(item))"
      >

        
        <div class="attrImgWrapper">
          <img :src="'https://www.kosmetikspiegel.shop'+productAttributeGetters.getAttributeValueImageUrl(item)" class="attrImg">
          <template v-if="productAttributeGetters.getAttributeId(attribute) == 1">
            <div class="activeArrow">
                <img ref="itemLazyImage" src="https://cdn02.plentymarkets.com/4tnz2nlw17zy/frontend/Icons/Kosmetikspiegel_Golden_Tick.svg" :alt="productAttributeGetters.getAttributeValueName(item)" :title="productAttributeGetters.getAttributeValueName(item)" role="option" >                
            </div>
            <div class="magnificationWrapper">
                <div>
                    <span>
                      <template v-if="productAttributeGetters.getAttributeValueId(item) == 1">
                          3
                      </template>
                      <template v-else-if="productAttributeGetters.getAttributeValueId(item) == 2">
                          5
                      </template>
                      <template  v-else-if="productAttributeGetters.getAttributeValueId(item) == 3">
                          7
                      </template>
                    </span>
                </div>
            </div>
        </template>
        </div>
        
        <SfTooltip :label="getLabel(item)" strategy="absolute" :show-arrow="true" placement="top">
          <div class="font-medium flex items-center">
            {{ productAttributeGetters.getAttributeValueName(item) }}
          </div>        
        </SfTooltip>
      </div>
    </div>
    <VeeErrorMessage as="span" name="selectedValue" class="flex text-negative-700 text-sm mt-2 mx-auto" />
  </div>
</template>

<script setup lang="ts">
import { SfTooltip } from '@storefront-ui/vue';
import type { AttributeSelectProps } from '../types';
import type { VariationMapProductAttributeValue } from '@plentymarkets/shop-api';
import { productAttributeGetters } from '@plentymarkets/shop-api';
import { object, number } from 'yup';
import { useForm } from 'vee-validate';

const { updateValue, getValue } = useProductAttributes();
const { registerValidator, registerInvalidFields } = useValidatorAggregator('attributes');
const props = defineProps<AttributeSelectProps>();
const value = computed(() => getValue(props.attribute.attributeId));
const { t } = useI18n();

const getLabel = (item: VariationMapProductAttributeValue): string => {
  return productAttributeGetters.isAttributeValueDisabled(item) ? t('productAttributes.seeAvailableOptions') : '';
};

const validationSchema = toTypedSchema(
  object({
    selectedValue: number().required(t('errorMessages.requiredField')),
  }),
);

const { errors, defineField, validate, meta } = useForm({
  validationSchema: validationSchema,
});

registerValidator(validate);

const [selectedValue] = defineField('selectedValue');

const doUpdateValue = (value: number) => {
  updateValue(props.attribute.attributeId, value);
  selectedValue.value = getValue(props.attribute.attributeId);
};

const setValue = (value: number | undefined) => {
  selectedValue.value = value;
};

setValue(value.value);

watch(
  () => value.value,
  () => {
    setValue(value.value);
  },
);

watch(
  () => meta.value,
  () => {
    registerInvalidFields(
      meta.value.valid,
      `prop-${productAttributeGetters.getAttributeId(props.attribute)}`,
      productAttributeGetters.getAttributeName(props.attribute),
    );
  },
);
</script>
