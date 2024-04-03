<template>
  <div class="w-full lg:max-w-[50%] typography-text-sm !mt-3 lg:!mt-0" data-testid="category-items-per-page">   
    <div>
      <select
        v-model="selected"
        :aria-label="$t('perPage')"
        id="perPage"
        @change="updateItemsPerPage(Number(selected))"
        class="!static w-full appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 ring-inset focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200 py-2 !static"
      >
        <option v-for="{ value, label, disabled } in options" :key="value" :value="value" :disabled="disabled">
          {{ label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfSelect } from '@storefront-ui/vue';
import type { CategoryItemsPerPageProps, Option } from '~/components/CategoryItemsPerPage/types';
import { defaults } from '~/composables';

const props = defineProps<CategoryItemsPerPageProps>();

const { updateItemsPerPage, getFacetsFromURL } = useCategoryFilter();

const options = ref(
  defaults.PER_PAGE_STEPS.map((o: number) => ({ label: o.toString(), value: o.toString(), disabled: false })),
);

let firstHigherValueOptionFound = false;

options.value = options.value.map((option) => {
  if (Number(option.value) < props.totalProducts || !firstHigherValueOptionFound) {
    if (Number(option.value) > props.totalProducts) {
      firstHigherValueOptionFound = true;
    }
    return { ...option, disabled: false };
  } else {
    return { ...option, disabled: true };
  }
});

const lastDisabledValue =
  options.value.findLast((op: Option) => !op.disabled)?.value || defaults.DEFAULT_ITEMS_PER_PAGE.toString();

const facetsFromURL = getFacetsFromURL();
const selectedValue =
  facetsFromURL.itemsPerPage && facetsFromURL.itemsPerPage > Number(lastDisabledValue)
    ? lastDisabledValue
    : facetsFromURL.itemsPerPage?.toString() || lastDisabledValue;

const selected = ref(selectedValue);
</script>
