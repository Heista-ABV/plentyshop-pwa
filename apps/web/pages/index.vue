<template>
  <div> 
    <div class="widget h-image-collection-widget heista-widget">
      <div class=" max-w-screen-3xl mx-auto">
        <div class="homeGalleryWrapper px-3">
          <div class="lg:flex"> 
            <div class="min-w-[100%] lg:min-w-[50%] galleryGroup group-1 lg:flex flex-col justify-between">
              <div>
                <a :href="$t('homeTwo.galleryCategory1')" class="imageBox w-100">
                  <div> 
                    <div class="imgWrapper">
                      <img :src="$t('homeTwo.galleryImage1')" :alt="$t('homeTwo.galleryName1')" :title="$t('homeTwo.galleryName1')">
                    </div>
                    <div class="h2 text-center">
                      <p>
                        {{ $t('homeTwo.galleryName1') }}
                      </p>
                    </div>
                    <div class="h4 text-center">
                      <p>
                        {{ $t('homeTwo.gallerySubText1') }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="hidden lg:block">
                <a :href="$t('homeTwo.galleryCategory2')" class="imageBox w-100">
                  <div>
                    <div class="imgWrapper">
                      <img :src="$t('homeTwo.galleryImage2')" :alt="$t('homeTwo.galleryName2')" :title="$t('homeTwo.galleryName2')">
                    </div>
                    <div class="h2 text-center">
                      <p>
                        {{ $t('homeTwo.galleryName2') }}
                      </p>
                    </div>
                    <div class="h4 text-center">
                      <p>
                        {{ $t('homeTwo.gallerySubText2') }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="min-w-[100%] lg:min-w-[50%]">
              <div class="md:flex">
                <div class="min-w-[100%] md:min-w-[50%] galleryGroup group-2 md:flex flex-col justify-between px-3">
                  <div>
                    <a :href="$t('homeTwo.galleryCategory3')" class="imageBox w-100">
                      <div>
                        <div class="imgWrapper">
                          <img :src="$t('homeTwo.galleryImage3')" :alt="$t('homeTwo.galleryName3')" :title="$t('homeTwo.galleryName3')">
                        </div>
                        <div class="h2 text-center">
                          <p>
                            {{ $t('homeTwo.galleryName3') }}
                          </p>
                        </div>
                        <div class="h4 text-center">
                          <p>
                            {{ $t('homeTwo.gallerySubText3') }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="hidden lg:block">
                    <a :href="$t('homeTwo.galleryCategory4')" class="imageBox w-100">
                      <div>
                        <div class="imgWrapper">
                          <img :src="$t('homeTwo.galleryImage4')" :alt="$t('homeTwo.galleryName4')" :title="$t('homeTwo.galleryName4')">
                        </div>
                        <div class="h2 text-center">
                          <p>
                            {{ $t('homeTwo.galleryName4') }}
                          </p>
                        </div>
                        <div class="h4 text-center">
                          <p>
                            {{ $t('homeTwo.gallerySubText4') }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="min-w-[100%] md:min-w-[50%] galleryGroup group-3 lg:flex flex-col justify-between">
                    <div class="hidden lg:block">
                      <a :href="$t('homeTwo.galleryCategory5')" class="imageBox w-100">
                        <div >
                          <div class="imgWrapper">
                            <img :src="$t('homeTwo.galleryImage5')" :alt="$t('homeTwo.galleryName5')" :title="$t('homeTwo.galleryName5')">
                          </div>
                          <div class="h2 text-center">
                            <p>
                              {{ $t('homeTwo.galleryName5') }}
                            </p>
                          </div>
                          <div class="h4 text-center">
                            <p>
                              {{ $t('homeTwo.gallerySubText5') }}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div >
                      <a :href="$t('homeTwo.galleryCategory6')" class="imageBox w-100">
                        <div>
                          <div class="imgWrapper">
                            <img :src="$t('homeTwo.galleryImage6')" :alt="$t('homeTwo.galleryName6')" :title="$t('homeTwo.galleryName6')">
                          </div>
                          <div class="h2 text-center">
                            <p>
                              {{ $t('homeTwo.galleryName6') }}
                            </p>
                          </div>
                          <div class="h4 text-center">
                            <p>
                              {{ $t('homeTwo.gallerySubText6') }}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative homeParallaxContainer my-10 py-5"> 
      <div class="bgContainer"  >
        <div class="bgImage bg-cover absolute inset-x-0 inset-y-0 h-100 bg-no-repeat bg-fixed opacity-75 bg-center" v-bind:style="{ 'background-image': 'url(' + $t('homeTwo.parallaxImage') + ')' }">
        </div>       
      </div>
      <div class="max-w-screen-3xl mx-auto relative z-10">
          <div class="text-center pt-10   pr-5 pb-10 pl-5 homeHeadline ">
            <h1 class="text-center pt-10 pb-10 text-secondary-700  uppercase font-bold leading-loose">
              {{ $t('homeTwo.parallaxText') }}
            </h1>
          </div>
      </div>
    </div>
    <div class="relative  homeParallaxContainer my-10 pt-5">
      <div class="max-w-screen-3xl mx-auto px-5">
        <h2 class="text-center mb-10  text-secondary-700 typography-headline-3 lg:typography-headline-2 uppercase font-bold leading-loose tracking-widest break-words">
          {{ $t('homeTwo.mainHeading') }}
        </h2>     
      </div>
      <div class="max-w-screen-lg mx-auto px-5 md:px-10">
          <p  class="text-left mb-10 text-secondary-700 leading-normal lg:px-5">
            {{ $t('homeTwo.mainText') }}
          </p>
      </div>
    </div>
    <div class="relative md:flex gap-4 items-center categorySnippet mb-5 max-w-screen-3xl  mx-auto">
      <div class="snippetContent mb-5 min-w-[100%] md:min-w-[75%]">
        <NuxtLazyHydrate when-visible>
          <section class="mx-4 mt-28 mb-20 overflow-hidden">        
            <ProductRecommendedProducts cache-key="homepage" :category-id="$t('homeTwo.categoryCatID1')" :max-item-count="4" />
          </section>
        </NuxtLazyHydrate>
      </div>
      <div class="categorySnippetImaage relative min-w-[100%] md:min-w-[25%]">
        <a :href="$t('homeTwo.categoryCat1')">
          <NuxtImg
                :src="$t('homeTwo.categoryImage1')"
                :alt="$t('homeTwo.categoryText1')"
                class="img-fluid"
                loading="lazy"
              />
          <div class="captionWrapper">
            <div>
              <p>
                {{ $t('homeTwo.categoryText1') }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="relative md:flex gap-4 items-center categorySnippet mb-5 max-w-screen-3xl  mx-auto">
      <div class="categorySnippetImaage relative min-w-[100%] md:min-w-[25%]">
        <a :href="$t('homeTwo.categoryCat2')">
          <NuxtImg
                :src="$t('homeTwo.categoryImage2')"
                :alt="$t('homeTwo.categoryText2')"
                class="img-fluid"
                loading="lazy"
              />
          <div class="captionWrapper">
            <div>
              <p>
                {{ $t('homeTwo.categoryText2') }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="snippetContent mb-5 min-w-[100%] md:min-w-[75%]">
        <NuxtLazyHydrate when-visible>
          <section class="mx-4 mt-28 mb-20 overflow-hidden">        
            <ProductRecommendedProducts cache-key="homepage" :category-id="$t('homeTwo.categoryCatID2')" :max-item-count="4"/>
          </section>
        </NuxtLazyHydrate>
      </div>    
    </div>
    <div class="relative md:flex gap-4 items-center categorySnippet mb-5 max-w-screen-3xl mx-auto">
      <div class="snippetContent mb-5 min-w-[100%] md:min-w-[75%]">
        <NuxtLazyHydrate when-visible>
          <section class="mx-4 mt-28 mb-20 overflow-hidden">        
            <ProductRecommendedProducts cache-key="homepage" :category-id="$t('homeTwo.categoryCatID3')" :max-item-count="4"/>
          </section>
        </NuxtLazyHydrate>
      </div>
      <div class="categorySnippetImaage relative min-w-[100%] md:min-w-[25%]">
        <a :href="$t('homeTwo.categoryCat3')">
          <NuxtImg
                :src="$t('homeTwo.categoryImage3')"
                :alt="$t('homeTwo.categoryText3')"
                class="img-fluid"
                loading="lazy"
              />
          <div class="captionWrapper">
            <div>
              <p>
                {{ $t('homeTwo.categoryText3') }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!--
    <div class="relative min-h-[600px]">
      <picture>
        <source srcset="/images/homepage-hero-bg.webp" media="(min-width: 768px)" />
        <img
          src="/images/homepage-hero-bg-mobile.webp"
          alt="Hero mobile background"
          class="absolute w-full h-full z-[-1] md:object-cover"
        />
      </picture>
      <div class="md:flex md:flex-row-reverse md:justify-center max-w[1536px] mx-auto md:min-h-[600px]">
        <div class="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img src="/images/homepage-hero-headphones.webp" alt="Headphones" class="h-full object-cover object-left" />
        </div>
        <div class="p-4 md:p-10 md:max-w-[768px] md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            {{ $t('shipping.heading') }}
          </p>
          <h1 class="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            New Wireless Pro
          </h1>
          <p class="typography-text-base md:typography-text-lg">
            Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
          </p>
          <div class="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg"> Order now </SfButton>
            <SfButton size="lg" variant="secondary" class="bg-white"> Show more </SfButton>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-no-wrap justify-center my-10">
        <div
          v-for="{ title, image } in categories"
          :key="title"
          role="img"
          :aria-label="title"
          :aria-labelledby="`image-${title}`"
          class="relative flex-col min-w-[140px] max-w-[360px] justify-center group"
        >
          <img
            class="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
            :src="image"
            :alt="title"
            width="360"
            height="360"
          />
          <div :id="`image-${title}`" class="flex justify-center">
            <div
              class="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal"
            >
              {{ title }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap gap-6 mt-max-w-[1540px]">
        <div
          v-for="{
            image,
            title,
            subtitle,
            description,
            buttonText,
            backgroundColor,
            reverse,
            titleClass,
            subtitleClass,
          } in displayDetails"
          :key="title"
          :class="[
            'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
            backgroundColor,
          ]"
        >
          <a
            class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
            :aria-label="title"
            href="#"
          />
          <div :class="['flex justify-between overflow-hidden grow', { 'flex-row-reverse': reverse }]">
            <div class="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
              <p :class="['uppercase typography-text-xs block font-bold tracking-widest', subtitleClass]">
                {{ subtitle }}
              </p>
              <h2 :class="['mb-4 mt-2 font-bold typography-display-3', titleClass]">
                {{ title }}
              </h2>
              <p class="typography-text-base block mb-4">
                {{ description }}
              </p>
              <SfButton class="!bg-black">{{ buttonText }}</SfButton>
            </div>
            <img :src="image" :alt="title" class="w-1/2 self-end object-contain" />
          </div>
        </div>
      </div>
      <NuxtLazyHydrate when-visible>
        <NewsletterSubscribe />
      </NuxtLazyHydrate>
      
    </div>
    -->
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

definePageMeta({
  pageType: 'static',
});

const { data: categoryTree } = useCategoryTree();
const recommendedProductsCategoryId = ref('');

watch(
  () => categoryTree.value,
  async () => {
    const firstCategoryId = categoryTree.value?.[0]?.id;

    if (firstCategoryId) {
      recommendedProductsCategoryId.value = firstCategoryId.toString();
    }
  },
  { immediate: true },
);

const displayDetails = [
  {
    image: '/images/homepage-display-1.webp',
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
    titleClass: 'md:typography-display-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
  },
  {
    image: '/images/homepage-display-2.webp',
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
  },
  {
    image: '/images/homepage-display-3.webp',
    title: 'Fresh and Bold',
    subtitle: 'New collection',
    description: 'Add a pop up color to your outfit',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-secondary-200',
  },
];

const categories = [
  {
    title: `Women`,
    image: '/images/homepage-women-category.webp',
  },
  {
    title: `Men`,
    image: '/images/homepage-men-category.webp',
  },
  {
    title: `Kid`,
    image: '/images/homepage-kid-category.webp',
  },
];
</script>
