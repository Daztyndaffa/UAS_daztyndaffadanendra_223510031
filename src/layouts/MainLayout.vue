<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="text-white"></q-btn>
        <q-toolbar-title class="text-white">
          <q-icon name="cloud" size="md" class="q-mr-sm"></q-icon>
          Weather & Tasks
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay class="bg-dark text-white">
      <q-list>
        <q-item v-for="item in items" :key="item.route" clickable v-ripple :to="item.route" :class="{'text-vuejs-active': $route.path === item.route, 'text-white': $route.path !== item.route}">
          <q-item-section avatar>
            <q-icon :name="item.icon" :class="{'text-vuejs-active': $route.path === item.route, 'text-white': $route.path !== item.route}" />
          </q-item-section>
          <q-item-section :class="{'text-vuejs-active': $route.path === item.route, 'text-white': $route.path !== item.route}">{{ item.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-8">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { Dark } from 'quasar';

export default {
  data() {
    return {
      leftDrawerOpen: false,
      isDark: ref(Dark.isActive),
      items: [
        { title: 'Home', icon: 'home', route: '/' },
        { title: 'Weather', icon: 'cloud', route: '/weather' },
        { title: 'Tugas 1', icon: 'assignment', route: '/task1' },
        { title: 'Tugas 2', icon: 'assignment', route: '/task2' },
        { title: 'Tugas 3', icon: 'assignment', route: '/task3' },
        { title: 'Tugas 4', icon: 'assignment', route: '/task4' },
        { title: 'Tugas 5', icon: 'assignment', route: '/task5' },
        { title: 'Tugas 6', icon: 'assignment', route: '/task6' },
        { title: 'Tugas 7', icon: 'assignment', route: '/task7' }
      ]
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toggleDarkMode() {
      Dark.set(this.isDark);
    }
  }
};
</script>

<style scoped>
.q-header {
  background-color: var(--q-black);
}

.q-drawer {
  background-color: var(--q-dark);
}

.q-toolbar-title {
  display: flex;
  align-items: center;
  color: white; /* Warna teks putih */
}

.q-toolbar-title q-icon {
  margin-right: 10px;
}

.bg-dark {
  background-color: var(--q-dark);
}

.text-white {
  color: white; /* Warna teks putih */
}

.bg-grey-8 {
  background-color: var(--q-grey-8);
}

.text-vuejs-active {
  color: #41b883; /* Warna hijau Vue.js */
}
</style>
