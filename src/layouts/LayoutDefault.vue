<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { RouterView } from 'vue-router';

const router = useRouter();
const route = useRoute();

const actvie = ref(0);

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    route: '/'
  }
]);

onMounted(() => {
  actvie.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
});

watch(
  route,
  () => {
    actvie.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
  },
  { immediate: true }
);
</script>

<template>
  <TabMenu v-model:activeIndex="active" :model="items">
    <template #item="{ label, item, props }">
      <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
        <a
          :href="routerProps.href"
          v-bind="props.action"
          @click="($event) => routerProps.navigate($event)"
          @keydown.enter.space="($event) => routerProps.navigate($event)"
        >
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ label }}</span>
        </a>
      </router-link>
    </template>
  </TabMenu>
  <RouterView></RouterView>
</template>
