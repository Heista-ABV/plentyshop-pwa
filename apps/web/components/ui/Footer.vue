<template>
  <footer class="pt-10 border-t-2 border-primary-700 bg-white mb-[58px] lg:mb-0" data-testid="footer">
    <div
      class="flex flex-wrap  px-4 md:px-6 lg:px-10 pb-10 max-w-screen-3xl mx-auto footerWrapper"
      data-testid="section-top"
    >
      <div v-for="{ key, subcategories } in categories" :key="key" class="min-w-[100%] md:min-w-[50%] lg:min-w-[25%]  flex flex-col mb-4 ">
        <div class="text-lg font-medium leading-7 text-neutral-900 mb-3">
          {{ $t(`${key}`) }}
        </div>
        <ul>
          <li
            v-for="{ key: subcategoryKey, link } in subcategories"
            :key="subcategoryKey"
            class="py-1 !bg-transparent typography-text-sm"
          >
            <a             
              v-if="$t(`footer.${link}`).length > 0" 
              class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
              :href="$t(`footer.${link}`)"
            >              
              <span>
                {{ $t(`footer.${subcategoryKey}`) }}
              </span>
            </a>
            <template v-else>             
              <span>
                {{ $t(`footer.${subcategoryKey}`) }}
              </span>
            </template>
          </li>
        </ul>
      </div>
      <div  class="min-w-[100%] sm:min-w-[50%] lg:min-w-[25%]  flex flex-col mb-4">
        <div class="text-lg font-medium leading-7 text-neutral-900 mb-3">
          {{ $t(`footer.rowHeading3`) }}
        </div>
        <ul class="footerCompanyLogos flex gap-4">         
          <li
            v-for="i in 2" :key="i"
            class="py-1 !bg-transparent typography-text-sm"
          > 
            <a      
               v-if="$t(`footer.row3ListLink${i}`).length > 0" 
              class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
              :href="$t(`footer.row3ListLink${i}`)">       
              <template v-if="$t(`footer.row3ListImage${i}`).length > 0 && $t(`footer.row3ListImage${i}`) != 'undefined'">
                <img :src="$t(`footer.row3ListImage${i}`)" class="footerImg" title="{{ $t(`footer.row3ListImageText${i}`) }}" alt="{{ $t(`footer.row3ListImageText${i}`) }}">
              </template>
              <template v-else>
                <span>
                  {{ $t(`footer.row3ListImageText${i}`) }}
                </span>
              </template>
            </a>
            <template v-else>
              <template v-if="$t(`footer.row3ListImage${i}`).length > 0 && $t(`footer.row3ListImage${i}`) != 'undefined'">
                <img :src="$t(`footer.row3ListImage${i}`)" class="footerImg" title="{{ $t(`footer.row3ListImageText${i}`) }}" alt="{{ $t(`footer.row3ListImageText${i}`) }}">
              </template>
              <template v-else>
                <span>
                  {{ $t(`footer.row3ListImageText${i}`) }}
                </span>
              </template>
            </template>
          </li>
        </ul>
      </div>
      <div  class="min-w-[100%] sm:min-w-[50%] lg:min-w-[25%]  flex flex-col mb-4">
        <template v-for="index in 2">
          <div class="text-lg font-medium leading-7 text-neutral-900 mb-3">
            {{ $t(`footer.rowHeading4${index}`) }}
          </div>
          <ul class="footerCompanyLogos flex gap-4 mb-4">         
            <li
              v-for="i in 2" :key="i"
              class="py-1 !bg-transparent typography-text-sm"
            > 
              <a      
                v-if="$t(`footer.row4${index}ListLink${i}`).length > 0" 
                class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
                :href="$t(`footer.row4${index}ListLink${i}`)">       
                <template v-if="$t(`footer.row4${index}ListImage${i}`).length > 0 && $t(`footer.row4${index}ListImage${i}`) != 'undefined'">
                  <img :src="$t(`footer.row4${index}ListImage${i}`)" class="footerImg" title="{{ $t(`footer.row4${index}ListImageText${i}`) }}" alt="{{ $t(`footer.row4${index}ListImageText${i}`) }}">
                </template>
                <template v-else>
                  <span>
                    {{ $t(`footer.row4${index}ListImageText${i}`) }}
                  </span>
                </template>
              </a>
              <template v-else>
                <template v-if="$t(`footer.row4${index}ListImage${i}`).length > 0 && $t(`footer.row4${index}ListImage${i}`) != 'undefined'">
                  <img :src="$t(`footer.row4${index}ListImage${i}`)" class="footerImg" title="{{ $t(`footer.row4${index}ListImageText${i}`) }}" alt="{{ $t(`footer.row4${index}ListImageText${i}`) }}">
                </template>
                <template v-else>
                  <span>
                    {{ $t(`footer.row4${index}ListImageText${i}`) }}
                  </span>
                </template>
              </template>
            </li>
          </ul>
        </template>
      </div>
    </div>
    <hr />
    <div  data-testid="section-bottom">
      <div class="justify-center px-4 py-2 md:flex max-w-screen-3xl mx-auto text-center">
        <p class="typography-text-xs">       
          <span>{{ $t('asterisk') }}</span>
          <span >{{ $t('itemInclVAT') }}</span>
          <span>{{ $t('excludedShipping') }}</span>
        </p>
        <p class="flex items-center justify-center leading-5 text-center typography-text-xs md:ml-6">
          {{ companyName }}
        </p> 
      </div>
    </div> 
    
 
  </footer>
 
</template>

<script setup lang="ts">
import { SfLink, SfListItem } from '@storefront-ui/vue';
import { categories, companyName } from '~/mocks';

const localePath = useLocalePath();

const NuxtLink = resolveComponent('NuxtLink');
</script>
