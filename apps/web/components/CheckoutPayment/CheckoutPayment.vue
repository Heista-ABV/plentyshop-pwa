<template>
  <fieldset class="md:mx-4 my-6" data-testid="checkout-payment">
    <legend class="text-neutral-900 text-lg font-bold mb-4">{{ $t('checkoutPayment.heading') }}</legend>
    <div class="grid gap-4 grid-cols-2">
      <label v-for="{ id, icon, name, isSelectable } in paymentMethods.list" :key="id" class="relative">
        <input
          type="radio"
          name="payment_method"
          class="peer sr-only"
          :value="id"
          :data-testid="`payment-method-${id}`"
          :checked="id === cart.methodOfPaymentId"
          :disabled="!isSelectable || disabled"
          @change="emit('update:activePayment', id)"
        />
        <span
          class="h-20 flex flex-col items-center justify-center py-4 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-50 hover:bg-primary-50 peer-focus:border-primary-50 peer-focus:bg-primary-50 active:border-primary-100 active:bg-primary-50 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-500 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale"
        >
          <span v-if="id === -1">
            <SfIconCreditCard class="mr-2" />
            <span class="font-medium">{{ $t('checkoutPayment.creditCard') }}</span>
          </span>
          <NuxtImg v-else :src="icon" :alt="name" class="!h-[40px]" loading="lazy" />
          <span class="text-xs mt-2 text-neutral-500">{{ name }}</span>
        </span>
      </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { SfIconCreditCard } from '@storefront-ui/vue';
import { type CheckoutPaymentEmits, type CheckoutPaymentProps } from '~/components/CheckoutPayment/types';

const { disabled = false } = defineProps<CheckoutPaymentProps>();
const { data: cart } = useCart();
const emit = defineEmits<CheckoutPaymentEmits>();
</script>
