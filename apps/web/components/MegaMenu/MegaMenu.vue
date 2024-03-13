<template>
  <div class="w-full h-full z-50 md:sticky shadow-md">
    <header ref="referenceRef" class="relative">
      <div
        class="flex justify-between items-center flex-wrap md:flex-nowrap px-2 md:px-10 py-2 md:py-5 w-full h-full border-0 border-neutral-200 md:h-20 md:z-10"
        data-testid="navbar-top"
      >
        <div class="flex items-center">
          <SfButton
            variant="tertiary"
            square
            aria-label="Close menu"
            class="block lg:hidden mr-5 text-secondary-700 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-800 active:text-white"
            @click="openMenu([])"
          >
            <SfIconMenu class="text-secondary-700 hover:bg-primary-800 hover:text-white active:bg-primary-800 active:text-white" />
          </SfButton>

          <NuxtLink
            :to="localePath(paths.home)"
            aria-label="Sf Homepage"
            class="w-full items-center  text-white  focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <UiVsfLogo />
          </NuxtLink>
        </div>

        <div class="navigationWrapper">
          <!-- Desktop dropdown -->
          <nav ref="floatingRef">
            <ul
              class="hidden lg:flex px-6 py-2"
              @blur="
                (event) => {
                  if (!(event.currentTarget as Element).contains(event.relatedTarget as Element)) {
                    close();
                  }
                }
              "
            >
              <li v-for="(menuNode, index) in categoryTree" :key="index">
                <button
                  ref="triggerReference"
                  data-testid="category-button"
                  class="group mr-5 uppercase font-bold text-secondary-700  hover:!text-primary-700 active:!text-primary-700 bg-white"
                  @mouseenter="menuNode.childCount > 0 ? openMenu([menuNode.id]) : openMenu([])"
                  @click="menuNode.childCount > 0 ? openMenu([menuNode.id]) : openMenu([])"
                >
                  <NuxtLink :to="localePath(generateCategoryLink(menuNode))">
                    <span>{{ categoryTreeGetters.getName(menuNode) }}</span>
                    <SfIconChevronRight
                      v-if="menuNode.childCount > 0"
                      class="rotate-90 text-secondary-700 group-hover:text-primary-700 group-active:text-primary-700 bg-white"
                    />
                  </NuxtLink>
                </button>

                <div
                  v-if="
                    isOpen &&
                    activeMenu &&
                    activeNode.length === 1 &&
                    activeNode[0] === menuNode.id &&
                    menuNode.childCount > 0
                  "
                  :key="activeMenu.id"
                  ref="megaMenuReference"
                  :style="style"
                  class="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none z-[1000]"
                  tabindex="0"
                  @mouseleave="close()"
                  @keydown.esc="focusTrigger(index)"
                >
                  <template v-for="node in activeMenu.children" :key="node.key">
                    <template v-if="node.childCount === 0">
                      <ul>
                        <SfListItem
                          :tag="NuxtLink"
                          size="sm"
                          :href="localePath(generateCategoryLink(node))"
                          class="typography-text-sm mb-2"
                        >
                          {{ categoryTreeGetters.getName(node) }}
                        </SfListItem>
                      </ul>
                    </template>
                    <div v-else>
                      <p
                        class="typography-text-base font-medium text-secondary-700 whitespace-nowrap px-4 py-1.5 "
                      >
                        {{ categoryTreeGetters.getName(node) }}
                      </p>
                      <ul class="mt-2">
                        <li v-for="child in node.children" :key="child.id">
                          <SfListItem
                            v-if="categoryTreeGetters.getName(child)"
                            :tag="NuxtLink"
                            size="sm"
                            :href="localePath(generateCategoryLink(child))"
                            class="typography-text-sm py-1.5"
                          >
                            {{ categoryTreeGetters.getName(child) }}
                          </SfListItem>
                        </li>
                      </ul>
                    </div>
                  </template>
                </div>
              </li>
              <li>
                <button
                  ref="triggerReference"
                  data-testid="category-button"
                  class="group mr-5 uppercase font-bold text-secondary-700  hover:!text-primary-700 active:!text-primary-700 bg-white"
                  @mouseenter="openMenu([4])"
                  @click="openMenu([4])"
                >
                  <a :href="$t('header.allMirrorsMenuURL')">
                    <span>{{ $t('header.allMirrorsMenuText') }}</span>
                    <SfIconChevronRight                     
                      class="rotate-90 text-secondary-700 group-hover:text-primary-700 group-active:text-primary-700 bg-white"
                    />
                  </a>
                </button>
                <div                   
                    :key="4"
                    ref="megaMenuReference"
                    :style="style"
                    class="hidden md:block bg-white shadow-lg p-6 left-0 right-0 outline-none z-[1000]  topSearchDropper"
                    tabindex="0"
                    @mouseleave="close()"
                    @keydown.esc="focusTrigger(4)"
                  >      
                  <div class="w-100 my-5 text-center"> 
                    <p>
                        {{ $t('header.allMirrorsChooseText') }}
                    </p>
                  </div>
                  <div class="flex">
                    <div class="min-w-[50%]">
                      <div class="topSearchUrls anwendungURL">
                        <ul>
                          <template v-for="index in 4">
                            <SfListItem
                              :tag="NuxtLink"
                              size="sm"
                              :href="$t('header.aMCat1Category'+index)"
                              class="typography-text-sm mb-2"
                              > 
                              <div class="imgRow flex flex-row gap-3 items-center">
                                <div class="imgWrapper text-center">
                                  <NuxtImg
                                      :src="$t('header.aMCat1Icon'+index)"
                                      :alt="$t('header.aMCat1Text'+index)"
                                      class="headerIcon"
                                      loading="lazy"
                                    /> 
                                </div>
                                <span>
                                  {{ $t('header.aMCat1Text'+index) }}
                                </span>
                              </div>
                            </SfListItem>
                          </template>
                        </ul> 
                      </div>
                    </div>     

                    <div class="min-w-[50%]">
                      <div class="topSearchUrls functionURL">
                        <ul>
                          <template v-for="index in 5">
                            <SfListItem
                              :tag="NuxtLink"
                              size="sm"
                              :href="$t('header.aMCat2Category'+index)"
                              class="typography-text-sm mb-2"
                              > 
                              <div class="imgRow flex flex-row gap-3 items-center">
                                <div class="imgWrapper text-center">
                                  <NuxtImg
                                      :src="$t('header.aMCat2Icon'+index)"
                                      :alt="$t('header.aMCat2Text'+index)"
                                      class="headerIcon"
                                      loading="lazy"
                                    /> 
                                </div>
                                <span>
                                  {{ $t('header.aMCat2Text'+index) }}
                                </span>
                              </div>
                            </SfListItem>
                          </template>
                        </ul> 
                      </div>
                    </div> 

                    <div class="min-w-[50%]">
                      <div class="topSearchUrls designURL">
                        <ul>
                          <template v-for="index in 4">
                            <SfListItem
                              :tag="NuxtLink"
                              size="sm"
                              :href="$t('header.aMCat3Category'+index)"
                              class="typography-text-sm mb-2"
                              > 
                              <div class="imgRow flex flex-row gap-3 items-center">
                                <div class="imgWrapper text-center">
                                  <NuxtImg
                                      :src="$t('header.aMCat3Icon'+index)"
                                      :alt="$t('header.aMCat3Text'+index)"
                                      class="headerIcon"
                                      loading="lazy"
                                    /> 
                                </div>
                                <span>
                                  {{ $t('header.aMCat3Text'+index) }}
                                </span>
                              </div>
                            </SfListItem>
                          </template>
                        </ul> 
                      </div>
                    </div> 

                    <div class="min-w-[50%]">
                      <div class="topSearchUrls montageURL">
                        <ul>
                          <template v-for="index in 1">
                            <SfListItem
                              :tag="NuxtLink"
                              size="sm"
                              :href="$t('header.aMCat4Category'+index)"
                              class="typography-text-sm mb-2"
                              > 
                              <div class="imgRow flex flex-row gap-3 items-center">
                                <div class="imgWrapper text-center">
                                  <NuxtImg
                                      :src="$t('header.aMCat4Icon'+index)"
                                      :alt="$t('header.aMCat4Text'+index)"
                                      class="headerIcon"
                                      loading="lazy"
                                    /> 
                                </div>
                                <span>
                                  {{ $t('header.aMCat4Text'+index) }}
                                </span>
                              </div>
                            </SfListItem>
                          </template>
                        </ul> 
                      </div>
                    </div>                                 
                  </div>                  
                </div>
              
              </li>
            </ul>
          </nav>
        </div>

        <slot />
      </div>
      

      <!-- Mobile drawer -->
      <div v-if="isOpen" class="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
      <SfDrawer
        ref="drawerReference"
        v-model="isOpen"
        placement="left"
        class="md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto z-[1000]"
      >
        <nav>
          <div class="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid">
            <p class="typography-text-base font-medium">Unsere Kategorien</p>
            <SfButton variant="tertiary" square aria-label="Close menu" class="ml-2" @click="close()">
              <SfIconClose class="text-neutral-500" />
            </SfButton>
          </div>
          <ul class="mt-2 mb-6" v-if="activeMenu">
            <li v-if="activeMenu.id !== 0">
              <SfListItem
                size="lg"
                tag="button"
                type="button"
                class="border-b border-b-neutral-200 border-b-solid"
                @click="goBack()"
              >
                <div class="flex items-center">
                  <SfIconArrowBack class="text-neutral-500" />
                  <p class="ml-5 font-medium">{{ categoryTreeGetters.getName(activeMenu) }}</p>
                </div>
              </SfListItem>
            </li>
            <template v-for="node in activeMenu.children" :key="node.id">
              <li v-if="node.childCount === 0">
                <SfListItem size="lg" :tag="NuxtLink" :href="localePath(generateCategoryLink(node))" @click="close()">
                  <div class="flex items-center">
                    <p class="text-left">{{ categoryTreeGetters.getName(node) }}</p>
                    <SfCounter class="ml-2">{{ categoryTreeGetters.getCount(node) }}</SfCounter>
                  </div>
                </SfListItem>
              </li>
              <li v-else>
                <SfListItem size="lg" tag="button" type="button" class="!p-0">
                  <div class="flex items-center w-100">
                    <NuxtLink class="flex-1 m-0 p-4 pr-0" :to="localePath(generateCategoryLink(node))" @click="close()">
                      <div class="flex items-center">
                        <p class="text-left">{{ categoryTreeGetters.getName(node) }}</p>
                        <SfCounter class="ml-2">{{ categoryTreeGetters.getCount(node) }}</SfCounter>
                      </div>
                    </NuxtLink>
                    <div class="flex justify-center items-center h-8 w-16" @click="goNext(node.id)">
                      <SfIconChevronRight class="text-neutral-500" />
                    </div>
                  </div>
                </SfListItem>
              </li>
            </template>
          </ul>
          <div class="mobileNavFooter">

          </div>
        </nav>
      </SfDrawer>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { CategoryTreeItem } from '@plentymarkets/shop-api';
import { categoryTreeGetters } from '@plentymarkets/shop-sdk';
import {
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfCounter,
  SfIconArrowBack,
  SfIconMenu,
  useTrapFocus,
  useDropdown,
} from '@storefront-ui/vue';
import { unrefElement } from '@vueuse/core';
import type { MegaMenuProps } from '~/components/MegaMenu/types';

const localePath = useLocalePath();
const NuxtLink = resolveComponent('NuxtLink');
const props = defineProps<MegaMenuProps>();
const { close, open, isOpen, activeNode, category, setCategory } = useMegaMenu();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [],
});
const categoryTree = ref(categoryTreeGetters.getTree(props.categories));

const findNode = (keys: number[], node: CategoryTreeItem): CategoryTreeItem => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.id === currentKey) || node);
  } else {
    return node.children?.find((child) => child.id === keys[0]) || node;
  }
};

const generateCategoryLink = (category: CategoryTreeItem) => {
  return categoryTreeGetters.generateCategoryLink(categoryTree.value, category);
};

const drawerReference = ref();
const megaMenuReference = ref();
const triggerReference = ref();

const activeMenu = computed(() => (category.value ? findNode(activeNode.value, category.value) : null));

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
} as const;
useTrapFocus(
  computed(() => megaMenuReference.value?.[0]),
  trapFocusOptions,
);
useTrapFocus(drawerReference, trapFocusOptions);

const openMenu = (menuType: number[]) => {
  activeNode.value = menuType;
  open();
};

const goBack = () => {
  activeNode.value = activeNode.value.slice(0, -1);
};

const goNext = (key: number) => {
  activeNode.value = [...activeNode.value, key];
};

const focusTrigger = (index: number) => {
  unrefElement(triggerReference.value[index]).focus();
};

setCategory(categoryTree.value);

watch(
  () => props.categories,
  async (categories: CategoryTreeItem[]) => {
    categoryTree.value = categoryTreeGetters.getTree(categories);
    setCategory(categoryTree.value);
  },
);
</script>
