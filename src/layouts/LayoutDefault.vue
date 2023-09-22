<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { RouterView } from 'vue-router';

const router = useRouter();
const route = useRoute();

const actvie = ref(0);

const items = ref([
  {
    label: 'Base',
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
  <div class="container p-5">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.container {
  width: 1024px;
  margin: 0 auto;
}
</style>
