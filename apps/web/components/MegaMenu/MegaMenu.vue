<template>
  <div class="w-full h-full z-50 md:sticky shadow-md">
    <header ref="referenceRef" class="relative">
      <div
        class="flex justify-between items-center flex-wrap md:flex-nowrap px-2 md:px-10 w-full h-full border-0 border-neutral-200 md:h-20 md:z-10"
        data-testid="navbar-top"
      >
        <div class="flex items-center  py-2 md:py-5">
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

        <div class="navigationWrapper h-full">
          <!-- Desktop dropdown -->
          <nav ref="floatingRef" class="h-full">
            <ul
              class="hidden lg:flex px-6 h-full items-center"
              @blur="
                (event) => {
                  if (!(event.currentTarget as Element).contains(event.relatedTarget as Element)) {
                    close();
                  }
                }
              "
            >
              <li v-for="(menuNode, index) in categoryTree" :key="index" class="h-full flex">
                <button
                  ref="triggerReference"
                  data-testid="category-button"
                  class="group mr-5 uppercase font-bold text-secondary-700  hover:!text-primary-700 active:!text-primary-700 bg-white"
                  @mouseenter="menuNode.childCount > 0 ? openMenu([menuNode.id]) : openMenu([])"
                  @click="menuNode.childCount > 0 ? openMenu([menuNode.id]) : openMenu([])"
                >
                  <NuxtLink :to="localePath(generateCategoryLink(menuNode))" class="h-full">
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
              <li class="topSearchWrapper h-full flex">
                <button
                  ref="triggerReference"
                  data-testid="category-button"
                  class="group mr-5 uppercase font-bold text-secondary-700  hover:!text-primary-700 active:!text-primary-700 bg-white"
                  @mouseenter="openMenu([4])"
                  @click="openMenu([4])"
                >
                  <a :href="$t('header.allMirrorsMenuURL')" class="h-full">
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
                    class="hidden bg-white max-w-[600px]  xl:max-w-[800px] min-w-[600px] xl:min-w-[800px] !right-1/2 translate-x-1/2 shadow-lg p-6   outline-none z-[1000]  topSearchDropper"
                    tabindex="0"
                    @mouseleave="close()"
                    @keydown.esc="focusTrigger(4)"
                  >      
                  <div class="w-100 my-5 text-center"> 
                    <p>
                        {{ $t('header.allMirrorsChooseText') }}
                    </p>
                  </div>
                  <div class="flex flex-wrap">                    
                    <template v-for="i in 4">         
                      <div class="min-w-[50%] max-w-[50%]">         
                        <div class="topSearchUrls ">
                          
                          <ul>
                            <template v-for="index in 5">
                              <template v-if="$t('header.aMCat'+i+'Text'+index).length > 0">
                                <li class="py-1 text-secondary-700 hover:!text-primary-700 active:!text-primary-700">
                                  <a
                                    :href="$t('header.aMCat'+i+'Category'+index)"
                                    class="typography-text-md mb-2"
                                    > 
                                    <div class="imgRow flex flex-row gap-3 items-center">
                                      <div class="imgWrapper text-center">
                                        <NuxtImg
                                            :src="$t('header.aMCat'+i+'Icon'+index)"
                                            :alt="$t('header.aMCat'+i+'Text'+index)"
                                            class="headerIcon"
                                            loading="lazy"
                                          /> 
                                      </div>
                                      <span>
                                        {{ $t('header.aMCat'+i+'Text'+index) }}
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </template>
                            </template>
                          </ul> 
                        </div> 
                      </div>
                    </template>                              
                  </div>                  
                </div>
              
              </li>
            </ul>
          </nav>
        </div>

        <slot />
      </div>
      

      <!-- Mobile drawer -->
      <div v-if="isOpen" class="lg:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
      <SfDrawer
        ref="drawerReference"
        v-model="isOpen"
        placement="left"
        class="lg:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto z-[1000]"
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
                <SfListItem size="lg" :tag="NuxtLink" :href="localePath(generateCategoryLink(node))" @click="close()" class="px-4 py-2 hover:bg-white active:bg-white hover:!text-primary-700 active:!text-primary-700">
                  <div class="flex items-center">
                    <p class="text-left">{{ categoryTreeGetters.getName(node) }}</p>
                    <SfCounter class="ml-2">{{ categoryTreeGetters.getCount(node) }}</SfCounter>
                  </div>
                </SfListItem>
              </li>
              <li v-else>
                <SfListItem size="lg" tag="button" type="button" class="!p-0">
                  <div class="flex items-center w-100">
                    <NuxtLink class="flex-1 m-0 p-2 px-4 pr-0" :to="localePath(generateCategoryLink(node))" @click="close()">
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
            <li  class="mobileAllMirrorsDropper">
              <div class="inline-flex items-center gap-2 w-full cursor-pointer hover:!text-primary-700 active:!text-primary-700 focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 px-4 py-2 mobileAllMirrorOpener">
                <span @click="addClassToObject('openMenu', 'mobileAllMirrorsDropper')">
                  <a :href="$t('header.allMirrorsMenuURL')"  >
                    <span>{{ $t('header.allMirrorsMenuText') }}</span>
                  </a>
                </span>
                <div @click="addClassToObject('openMenu', 'mobileAllMirrorsDropper')" class="w-100 flex-1">
                  <SfIconChevronRight                     
                    class="rotate-90  group-hover:!text-primary-700 group-active:!text-primary-700 bg-white"
                    
                  />    
                </div>
              </div>
              <ul id="mobileTopSearch" class="mobileAllMirrorsContent">
                <li>
                  <template v-for="i in 4">                  
                    <div class="topSearchUrls anwendungURL">
                      <div class="nameWrapper px-4 ">
                        <span class="underline typography-text-sm md:typography-text-md">
                          <b>
                            {{ $t('header.allMirrorsCat'+i) }} 
                          </b>
                        </span>
                      </div>
                      <ul>
                        <template v-for="index in 5">
                          <template v-if="$t('header.aMCat'+i+'Text'+index).length > 0">
                            <li class="py-1 pr-4 pl-6 text-secondary-700 hover:!text-primary-700 active:!text-primary-700">
                              <a
                                :href="$t('header.aMCat'+i+'Category'+index)"
                                class="typography-text-sm mb-2"
                                > 
                                <div class="imgRow flex flex-row gap-3 items-center">
                                  <span>
                                    {{ $t('header.aMCat'+i+'Text'+index) }}
                                  </span>
                                </div>
                              </a>
                            </li>
                          </template>
                        </template>
                      </ul> 
                    </div> 
                  </template>
                </li>
              </ul>
            </li>
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
import $ from "jquery";

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

function addClassToObject(className: string, objectName: string) {
  const classToAdd = className;
  const objectToAddTo = objectName;
  $('.'+objectToAddTo).toggleClass(classToAdd)
}

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
