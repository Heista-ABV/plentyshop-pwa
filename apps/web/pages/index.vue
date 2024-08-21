<template>
  <div> 
    <div class="heroSection relative">
        <!--<div class="heroSectionGradient hidden md:block"></div>-->
        <div class=" max-w-screen-3xl mx-auto  3xl:px-10">
            <div class="relative">
                <NuxtImg
                    :src="$t('homeTwo.heroSectionImage')"
                    :alt="$t('homeTwo.categoryText1')"
                    class="img-fluid w-full"                   
                />
                <div class="heroSectionContent">
                    <h1 class="text-left text-white font-bold leading-loose">
                        {{ $t('homeTwo.heroSectionHeading') }}
                    </h1>            
                </div>
            </div>
        </div>
    </div>
    <div class="new-image-collection-widget h-image-collection-widget mt-10 xl:mt-[50px]">
        <div class=" max-w-screen-3xl mx-auto md:px-6 lg:px-10">
            <div class="homeGalleryWrapper px-3 md:px-0">
                <div class="md:flex"> 
                    <div class="min-w-[100%] md:min-w-[50%] galleryGroup group-1 md:flex flex-col justify-between md:pr-[20px] xl:pr-[25px]">
                         <div>
                            <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.newGallerCategory1'))" class="imageBox w-100">
                                <div> 
                                    <div class="imgWrapper">
                                        <NuxtImg :src="$t('homeTwo.newGallerImage1')" :alt="$t('homeTwo.newGallerName1')" :title="$t('homeTwo.newGallerName1')" loading="lazy" />
                                        <div class="h2 text-left contentWrapper">
                                            <p>
                                                {{ $t('homeTwo.newGallerName1') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>                  
                    </div>
                    <div class="min-w-[100%] md:min-w-[50%] relative galleryGroup mt-10 md:mt-0 group-2 md:flex flex-col justify-between md:pl-[20px] xl:pl-[25px]">
                        <div class="imageWrapper">
                            <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.newGallerCategory2'))" class="imageBox w-100">
                                <div> 
                                    <div class="imgWrapper">
                                        <NuxtImg :src="$t('homeTwo.newGallerImage2')" :alt="$t('homeTwo.newGallerName2')" :title="$t('homeTwo.newGallerName2')" loading="lazy" />
                                        <div class="h2 text-left contentWrapper">
                                            <p>
                                                {{ $t('homeTwo.newGallerName2') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                        <div class="imageWrapper hidden md:block">
                            <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.newGallerCategory3'))" class="imageBox w-100">
                                <div> 
                                    <div class="imgWrapper relative">
                                        <NuxtImg :src="$t('homeTwo.newGallerImage3')" :alt="$t('homeTwo.newGallerName3')" :title="$t('homeTwo.newGallerName3')" loading="lazy" />
                                        <div class="h2 text-left contentWrapper">
                                            <p>
                                                {{ $t('homeTwo.newGallerName3') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--
    <div class="widget h-image-collection-widget heista-widget">
      <div class=" max-w-screen-3xl mx-auto md:px-6 lg:px-10">
        <div class="homeGalleryWrapper px-3 md:px-0">
          <div class="lg:flex"> 
            <div class="min-w-[100%] lg:min-w-[50%] galleryGroup group-1 lg:flex flex-col justify-between">
              <div>
                <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.galleryCategory1'))" class="imageBox w-100">
                  <div> 
                    <div class="imgWrapper">
                      <NuxtImg :src="$t('homeTwo.galleryImage1')" :alt="$t('homeTwo.galleryName1')" :title="$t('homeTwo.galleryName1')" />
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
                </NuxtLink>
              </div>
              <div class="hidden lg:block">
                <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.galleryCategory2'))" class="imageBox w-100">
                  <div>
                    <div class="imgWrapper">
                      <NuxtImg :src="$t('homeTwo.galleryImage2')" :alt="$t('homeTwo.galleryName2')" :title="$t('homeTwo.galleryName2')" />
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
                </NuxtLink>
              </div>
            </div>
            <div class="min-w-[100%] lg:min-w-[50%]">
              <div class="md:flex">
                <div class="min-w-[100%] md:min-w-[50%] galleryGroup group-2 md:flex flex-col justify-between px-3">
                  <div>
                    <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.galleryCategory3'))" class="imageBox w-100">
                      <div>
                        <div class="imgWrapper">
                          <NuxtImg :src="$t('homeTwo.galleryImage3')" :alt="$t('homeTwo.galleryName3')" :title="$t('homeTwo.galleryName3')" />
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
                    </NuxtLink>
                  </div>
                  <div class="hidden lg:block">
                    <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.galleryCategory4'))" class="imageBox w-100">
                      <div>
                        <div class="imgWrapper">
                          <NuxtImg :src="$t('homeTwo.galleryImage4')" :alt="$t('homeTwo.galleryName4')" :title="$t('homeTwo.galleryName4')" />
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
                    </NuxtLink>
                  </div>
                </div>
                <div class="min-w-[100%] md:min-w-[50%] galleryGroup group-3 lg:flex flex-col justify-between">
                    <div class="hidden lg:block">
                      <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.galleryCategory5'))" class="imageBox w-100">
                        <div >
                          <div class="imgWrapper">
                            <NuxtImg :src="$t('homeTwo.galleryImage5')" :alt="$t('homeTwo.galleryName5')" :title="$t('homeTwo.galleryName5')" />
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
                      </NuxtLink>
                    </div>
                    <div >
                      <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.galleryCategory6'))" class="imageBox w-100">
                        <div>
                          <div class="imgWrapper">
                            <NuxtImg :src="$t('homeTwo.galleryImage6')" :alt="$t('homeTwo.galleryName6')" :title="$t('homeTwo.galleryName6')" />
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
                      </NuxtLink>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
    <!--
    <div class="relative homeParallaxContainer my-10 py-5"> 
      <div class="bgContainer"  >
        <div class="bgImage bg-cover absolute inset-x-0 inset-y-0 h-100 bg-no-repeat bg-fixed opacity-75 bg-center" v-bind:style="{ 'background-image': 'url(' + $t('homeTwo.parallaxImage') + ')' }">
        </div>       
      </div>
      <div class="max-w-screen-3xl mx-auto md:px-6 lg:px-10 relative z-10">
          <div class="text-center pt-10   pr-5 pb-10 pl-5 homeHeadline ">
            <h1 class="text-center pt-10 pb-10 text-secondary-700  uppercase font-bold leading-loose">
              {{ $t('homeTwo.parallaxText') }}
            </h1>
          </div>
      </div>
    </div>
    --> 
    <div class="relative homeParallaxContainer my-10 xl:my-[50px]">
      <div class="max-w-screen-3xl mx-auto px-5">
        <h2 class="text-center mb-5 xl:mb-[25px] text-secondary-700 typography-headline-3 lg:typography-headline-2 uppercase font-bold leading-loose tracking-widest break-words">
          {{ $t('homeTwo.mainHeading') }}
        </h2>     
      </div>
      <div class="max-w-screen-lg mx-auto px-5 md:px-10">
          <p  class="text-left mb-10 xl:mb-[50px] text-secondary-700 leading-normal lg:px-5">
            {{ $t('homeTwo.mainText') }}
          </p>
      </div>
    </div>
    <div class="relative mb-10 xl:mb-[50px] max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div class="categorySnippetHeadingWrapper">
        <h3 class="uppercase tracking-[5px] mb-5 xl:mb-[25px] xl:tracking-[10px] text-center font-bold">
          {{ $t('homeTwo.categoryHeading1') }}
        </h3>
      </div>
      <div class="md:flex items-center categorySnippet">
        <div class="snippetContent min-w-[100%] md:min-w-[75%]">          
            <section class="mx-[15px] lg:mr-[24px] lg:ml-0 mb-5 md:mb-0 overflow-hidden">        
              <ProductRecommendedProducts category-id="29" :max-item-count="3" />
            </section>          
        </div>
        <div class="categorySnippetImaage relative min-w-[100%] md:min-w-[25%]">
          <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.categoryCat1'))">
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
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="relative mb-10 xl:mb-[50px] max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div class="categorySnippetHeadingWrapper">
        <h3 class="uppercase tracking-[5px] mb-5 xl:mb-[25px] xl:tracking-[10px] text-center font-bold">
          {{ $t('homeTwo.categoryHeading2') }}
        </h3>
      </div>
      <div class="md:flex flex-row-reverse items-center categorySnippet">        
        <div class="snippetContent min-w-[100%] md:min-w-[75%]">
          <NuxtLazyHydrate when-idle>
            <section class="mx-[15px] lg:ml-[24px] lg:mr-0 mb-5 md:mb-0 overflow-hidden">        
              <ProductRecommendedProducts category-id="27" :max-item-count="3"/>
            </section>
          </NuxtLazyHydrate>
        </div>
        <div class="categorySnippetImaage  relative min-w-[100%] md:min-w-[25%]">
          <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.categoryCat2'))">
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
          </NuxtLink>
        </div>    
      </div>
    </div>
    <div class="relative mb-10 xl:mb-[50px] max-w-screen-3xl mx-auto md:px-6 lg:px-10">
      <div class="categorySnippetHeadingWrapper">
        <h3 class="uppercase tracking-[5px] mb-5 xl:mb-[25px] xl:tracking-[10px] text-center font-bold">
          {{ $t('homeTwo.categoryHeading3') }}
        </h3>
      </div>
      <div class="md:flex items-center categorySnippet">
        <div class="snippetContent min-w-[100%] md:min-w-[75%]">
          <NuxtLazyHydrate when-visible>
            <section class="mx-[15px] lg:mr-[24px] lg:ml-0  mb-5 md:mb-0 overflow-hidden">        
              <ProductRecommendedProducts  category-id="24" :max-item-count="3"/>
            </section>
          </NuxtLazyHydrate>
        </div>
        <div class="categorySnippetImaage relative min-w-[100%] md:min-w-[25%]">
          <NuxtLink :tag="NuxtLink" :to="localePath($t('homeTwo.categoryCat3'))">
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
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template> 

<script lang="ts" setup>
const viewport = useViewport();
const { t } = useI18n();
const { data: categoryTree } = useCategoryTree();
const recommendedProductsCategoryId = ref('');
definePageMeta({ pageType: 'static', shadow: false });
const localePath = useLocalePath();
const NuxtLink = resolveComponent('NuxtLink'); 

type Size = {
  width: string;
  height: string;
};
type Sizes = {
  lg: Size;
  md: Size;
  sm: Size;
};
type SizeKey = keyof Sizes;

const getSizeForViewport = (sizes: Sizes) => {
  const breakpoint = viewport.breakpoint.value as SizeKey;
  return sizes[breakpoint];
};

watch(
  () => categoryTree.value,
  async () => {
    const firstCategoryId = categoryTree.value?.[0]?.id;
    if (firstCategoryId) recommendedProductsCategoryId.value = firstCategoryId.toString();
  },
  { immediate: true },
);
const displayDetails = computed(() => {
  return [
    {
      image: `/images/${viewport.breakpoint.value}/homepage-display-1.avif`,
      title: t('homepage.displayDetails.detail1.title'),
      subtitle: t('homepage.displayDetails.detail1.subtitle'),
      description: t('homepage.displayDetails.detail1.description'),
      buttonText: t('homepage.displayDetails.detail1.buttonText'),
      reverse: false,
      backgroundColor: 'bg-negative-200',
      titleClass: 'md:typography-display-2',
      subtitleClass: 'md:typography-headline-6',
      descriptionClass: 'md:typography-text-lg',
      sizes: {
        lg: {
          width: '728',
          height: '728',
        },
        md: {
          width: '488',
          height: '488',
        },
        sm: {
          width: '320',
          height: '320',
        },
      },
    },
    {
      image: `/images/${viewport.breakpoint.value}/homepage-display-2.avif`,
      title: t('homepage.displayDetails.detail2.title'),
      subtitle: t('homepage.displayDetails.detail2.subtitle'),
      description: t('homepage.displayDetails.detail2.description'),
      buttonText: t('homepage.displayDetails.detail2.buttonText'),
      reverse: true,
      backgroundColor: 'bg-warning-200', 
      sizes: {
        lg: {
          width: '358',
          height: '358',
        },
        md: {
          width: '472',
          height: '472',
        },
        sm: {
          width: '320',
          height: '320',
        },
      },
    },
    {
      image: `/images/${viewport.breakpoint.value}/homepage-display-3.avif`,
      title: t('homepage.displayDetails.detail3.title'),
      subtitle: t('homepage.displayDetails.detail3.subtitle'),
      description: t('homepage.displayDetails.detail3.description'),
      buttonText: t('homepage.displayDetails.detail3.buttonText'),
      reverse: false,
      backgroundColor: 'bg-secondary-50',
      sizes: {
        lg: {
          width: '358',
          height: '358',
        },
        md: {
          width: '238',
          height: '238',
        },
        sm: {
          width: '320',
          height: '320',
        },
      },
    },
  ];
});
const headPhones = {
  image: `/images/${viewport.breakpoint.value}/homepage-hero-headphones.avif`,
  sizes: {
    lg: {
      width: '800',
      height: '600',
    },
    md: {
      width: '800',
      height: '600',
    },
    sm: {
      width: '640',
      height: '480',
    },
  },
};
const background = {
  image: `/images/${viewport.breakpoint.value}/homepage-hero-bg.avif`,
  sizes: {
    lg: {
      width: '4000',
      height: '600',
    },
    md: {
      width: '1024',
      height: '600',
    },
    sm: {
      width: '640',
      height: '752',
    },
  },
};
const categories = [
  {
    title: t('homepage.women'),
    image: '/images/homepage-women-category.avif',
  },
  {
    title: t('homepage.men'),
    image: '/images/homepage-men-category.avif',
  },
  {
    title: t('homepage.kid'),
    image: '/images/homepage-kid-category.avif',
  },
];

useHead({
  link: [
    {
      rel: 'preload',
      href: background.image,
      as: 'image',
    },
    {
      rel: 'preload',
      href: headPhones.image,
      as: 'image',
    },
  ],
});

</script>
