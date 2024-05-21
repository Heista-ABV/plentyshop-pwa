<template>
  <transition
    enter-active-class="transition duration-500 ease-in-out"
    leave-active-class="transition duration-500 ease-in-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <SfDrawer
      v-show="isOpen"
      :model-value="true"
      :disable-click-away="true"
      :disable-esc="true"
      class="w-full shadow-none md:translate-x-0 z-[1500] md:z-[100] md:static md:!block -translate-x-full bg-white outline-0"
      data-testid="category-sidebar"
    >
      <div >
        <div class="p-4 flex justify-between items-center md:hidden">
          <span class="font-bold text-lg">{{ $t('filters') }}</span>
          <SfButton variant="tertiary" @click="$emit('close')" :aria-label="$t('closeListSettings')" class="!px-2 group active:!bg-primary-700 active:!text-white">
            <template #prefix>
              <SfIconClose class="text-neutral-500 group-active:text-white" />
            </template>
          </SfButton>
        </div>
        <slot class="overflow-y-auto md:overflow-y-visible py-4 md:p-0" />
        <div class="p-4 md:mt-2 flex flex-wrap justify-between border-t border-t-neutral-200 md:border-0 gap-3 md:hidden">
          <SfButton class="md:hidden whitespace-nowrap flex flex-1" variant="primary" @click="$emit('close')">
            {{ $t('showProducts') }}
          </SfButton>
        </div>
      </div>
    </SfDrawer>
  </transition>
</template>

<script setup lang="ts">
import { SfDrawer, SfButton, SfIconClose } from '@storefront-ui/vue';
import type { CategorySidebarEmits, CategorySidebarProps } from '~/components/CategorySidebar/types';

defineProps<CategorySidebarProps>();
defineEmits<CategorySidebarEmits>();
</script>
