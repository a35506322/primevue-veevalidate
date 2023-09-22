<script setup>
import { useForm } from 'vee-validate';

const schema = {
  name: { required: true },
  email: { required: true, email: true }
};

const { values, errors, defineInputBinds } = useForm({
  validationSchema: schema
});

const name = defineInputBinds('name', {
  validateOnInput: true
});

const email = defineInputBinds('email', {
  validateOnInput: true
});
</script>

<template>
  <div class="field">
    <label for="name">姓名</label>
    <InputText
      type="text"
      v-bind="name"
      placeholder="請輸入name"
      id="name"
      class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
    />
  </div>
  <div class="field">
    <label for="email">電子信箱</label>
    <InputText
      type="text"
      v-bind="email"
      placeholder="請輸入email"
      id="email"
      class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
    />
  </div>
  <div>
    <p class="text-red-500 font-bold">錯誤訊息</p>
    <p v-for="(value, key) in errors" class="text-red-500 font-bold" :key="value">
      {{ value }}
    </p>
  </div>
</template>
