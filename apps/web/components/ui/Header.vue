<template>
    <MegaMenu :categories="categoryTree">
        <template v-if="viewport.isGreaterOrEquals('md')">           
            <!--  Search Slot
            <UiSearch class="hidden md:block flex-1" />-->
            <nav class=" ml-4 hidden lg:flex flex-row flex-nowrap topControlWrapper justify-end" v-if="route.fullPath != '/checkout'">                   
                <UiButton
                    class="group hidden 2xs:inline-flex relative text-secondary-700 hover:text-secondary-700 active:text-secondary-700 hover:bg-white active:bg-white mr-1 -ml-0.5 rounded-md heartbeat"
                    :tag="NuxtLink"
                    :to="localePath(paths.wishlist)"
                    :aria-label="t('numberInWishlist', { count: wishlistItemIds.length })"
                    variant="tertiary"
                    square
                    data-testid="wishlist-page-navigation"
                >
                    <template #prefix> 
                    <SfIconFavorite />
                    <SfBadge
                        :content="wishlistItemIds.length"
                        class="outline outline-primary-700 bg-white !text-neutral-900 flex justify-center"
                        data-testid="wishlist-badge"
                    /> 
                    </template>
                </UiButton>
                <UiButton
                    class="group relative  text-secondary-700 hover:text-secondary-700 active:text-secondary-700 hover:bg-white active:bg-white rounded-md basketAnimation"
                    :tag="NuxtLink"
                    :to="localePath(paths.checkout)"
                    :aria-label="t('numberInCart', { count: cartItemsCount })"
                    variant="tertiary"
                    square
                >
                    <template #prefix>
                    <SfIconShoppingCart  />
                    <SfBadge
                        :content="cartItemsCount"
                        class="outline outline-primary-700 bg-white !text-neutral-900 flex justify-center"
                        data-testid="cart-badge"
                    />
                    </template>
                </UiButton>                    
            </nav>
        </template>       
        <UiButton
            v-if="showConfigurationDrawer"
            @click="open = true"
            class="group relative text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 mr-1 -ml-0.5 rounded-md"
            variant="tertiary"
            aria-label="Open configuration drawer"
            square
            ><SfIconTune />
        </UiButton>
    </MegaMenu>    
    <!--
    <UiNotifications />
    -->
    <UiModal
        v-if="viewport.isGreaterOrEquals('md') && isAuthenticationOpen"
        v-model="isAuthenticationOpen"
        tag="section"
        class="h-full md:w-[500px] md:h-fit m-0 p-0 overflow-y-auto"
        aria-labelledby="login-modal"
    >
        <header>
            <UiButton square variant="tertiary" class="absolute right-2 top-2" @click="closeAuthentication">
                <SfIconClose />
            </UiButton>
        </header>
        <LoginComponent v-if="isLogin" @change-view="isLogin = false" @logged-in="closeAuthentication" :is-modal="true" />
        <Register v-else @change-view="isLogin = true" @registered="closeAuthentication" :is-modal="true" />
    </UiModal>

    <NuxtLazyHydrate v-if="viewport.isLessThan('md')" when-idle>
        <SfModal
        v-model="isSearchModalOpen"
        class="w-full h-full z-50"
        tag="section"
        role="dialog"
        aria-labelledby="search-modal-title"
        >
            <header class="mb-4">
                <UiButton square variant="tertiary" class="absolute right-4 top-2" @click="searchModalClose">
                <SfIconClose class="text-neutral-500" />
                </UiButton>
                <h3 id="search-modal-title" class="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
                {{ t('search') }}
                </h3>
            </header>
            <UiSearch :close="searchModalClose" />
        </SfModal>
    </NuxtLazyHydrate>
    <LazyConfigurationDrawer v-if="showConfigurationDrawer" />
</template>

<script setup lang="ts">
import {
  SfBadge,
  SfDropdown,
  SfIconClose,
  SfIconLanguage,
  SfIconPerson,
  SfIconSearch,
  SfIconShoppingCart,
  SfIconTune,
  SfListItem,
  SfModal,
  SfIconFavorite,
  useDisclosure,
} from '@storefront-ui/vue';
import LanguageSelector from '~/components/LanguageSelector/LanguageSelector.vue';
import { paths } from '~/utils/paths';

const isLogin = ref(true);
const { data: cart } = useCart();
const { wishlistItemIds } = useWishlist();
const cartItemsCount = ref(0);

const NuxtLink = resolveComponent('NuxtLink');
const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
const { isOpen: isAccountDropdownOpen, toggle: accountDropdownToggle } = useDisclosure();
const { isOpen: isAuthenticationOpen, open: openAuthentication, close: closeAuthentication } = useDisclosure();
const { open: searchModalOpen, isOpen: isSearchModalOpen, close: searchModalClose } = useDisclosure();
const { open } = useConfigurationDrawer();
const { toggle: toggleLanguageSelect, isOpen: isLanguageSelectOpen } = useLocalization();
const { data: categoryTree } = useCategoryTree();
const { data: user, isAuthorized, logout } = useCustomer();
const viewport = useViewport();
const runtimeConfig = useRuntimeConfig();

const showConfigurationDrawer = runtimeConfig.public.showConfigurationDrawer;

onNuxtReady(() => {
  cartItemsCount.value = cart.value?.items?.reduce((price, { quantity }) => price + quantity, 0) ?? 0;
});

watch(
  () => cart.value?.items,
  (cartItems) => {
    cartItemsCount.value = cartItems?.reduce((price, { quantity }) => price + quantity, 0) ?? 0;
  },
);

watch(
  () => isAuthenticationOpen.value,
  async () => {
    isLogin.value = true;
  },
);

const logOut = async () => {
  accountDropdownToggle();
  await logout();
  navigateTo(localePath(paths.home));
};

const accountDropdown = computed(() => [
  {
    label: t('account.heading'),
    link: localePath(paths.account),
  },
  {
    label: t('account.ordersAndReturns.section.myOrders'),
    link: localePath(paths.accountMyOrders),
  },
  {
    label: t('account.ordersAndReturns.section.returns'),
    link: localePath(paths.accountReturns),
  },
  {
    label: t('account.logout'),
  },
]);
</script>
