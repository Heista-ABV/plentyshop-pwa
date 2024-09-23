<template>
  <fieldset class="md:mx-4 my-6" data-testid="checkout-payment">
    <legend class="text-neutral-900 text-lg font-bold mb-4">{{ $t('checkoutPayment.heading') }}</legend>
    <div class="grid gap-4">
      <label v-for="{ id, icon, name, isSelectable } in paymentMethods.list" :key="id" class="relative">
        <input
          type="radio"
          name="payment_method"
          class="peer sr-only paymentPeer"
          :value="id"
          :data-testid="`payment-method-${id}`"
          :checked="id === cart.methodOfPaymentId"
          :disabled="!isSelectable || disabled"
          @change="emit('update:activePayment', id)"
        />
        <span
          class="h-20 paymentSelect flex flex -row items-center group justify-start py-4 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-700 hover:bg-white hover:text-primary-200 peer-focus:border-primary-700 peer-focus:bg-primary-700 peer-focus:text-primary-200 active:border-primary-700 active:bg-white peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale"
        > 
        
        <div class="activePayment">
            <SfIconCheckCircle class="text-success mr-2" />
        </div>
         <div class="inactivePayment">
            <SfIconRadioButtonUnchecked class="text-success mr-2" />
        </div>
          <span v-if="id === -1">
            <SfIconCreditCard class="mr-2" />
            <span class="font-medium">{{ $t('checkoutPayment.creditCard') }}</span>
          </span>
          <NuxtImg v-else :src="icon" :alt="name" class="!h-[40px] mr-2" loading="lazy" />
          <p class="text-xs mt-2 text-secondary-500  group-hover:text-primary-200">{{ name }}</p>
        </span>
      </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { SfIconCreditCard, SfIconCheckCircle, SfIconRadioButtonUnchecked } from '@storefront-ui/vue';
import { type CheckoutPaymentEmits, type CheckoutPaymentProps } from '~/components/CheckoutPayment/types';

withDefaults(defineProps<CheckoutPaymentProps>(), { disabled: false });
const { data: cart } = useCart();
const emit = defineEmits<CheckoutPaymentEmits>();
</script>
