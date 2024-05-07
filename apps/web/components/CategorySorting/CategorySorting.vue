<template>
  <div class="w-full lg:max-w-[50%] typography-text-sm !mt-3 lg:!mt-0" data-testid="category-sorting">
    <!--
    <h6 class="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest select-none">
      {{ $t('sortBy') }}
    </h6>
    -->
    <div>
      <select v-model="selected" :aria-label="$t('sortBy')" id="sortBy" @change="sortingChanged" class="!static w-full appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 ring-inset focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200 py-2 !static">
        <option v-for="{ value, label } in options" :key="value" :value="value"> 
          {{ $t(`sortType.${label}`) }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { SfSelect } from '@storefront-ui/vue';

const { getFacetsFromURL, updateSorting } = useCategoryFilter();
const route = useRoute();
const options = ref([
  {
    label: 'nameA-Z',
    value: 'texts.name1_asc',
  },
  {
    label: 'nameZ-A',
    value: 'texts.name1_desc',
  },
  {
    label: 'priceUp',
    value: 'sorting.price.avg_asc',
  },
  {
    label: 'priceDown',
    value: 'sorting.price.avg_desc',
  },
]);
const selected = ref(options.value[0].value);

function sortingChanged() {
  updateSorting(selected.value);
}

function sortQueryChanged() {
  const facets = getFacetsFromURL();
  selected.value = facets.sort ?? options.value[0].value;
}

sortQueryChanged();

watch(
  () => route.query.sort,
  () => {
    sortQueryChanged();
  },
);
</script>
