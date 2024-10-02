<template>
  <nav class="p-2">
    <div v-for="item in list" :key="item.id">
      <div class="mb-2 upper fw-bold text-gray fw-7">{{ item.name }}</div>
      <div v-for="navItem in item.nav" :key="navItem.id" class="ps-3 mb-2">
        <router-link class="nav-link text-decoration-none fw-bold fs-7 d-block" :to="navItem.path"
          :class="[$route.path === navItem.path ? 'text-purple' : 'text-dark']">
          <span class="w-100 d-flex align-items-center">
            <i :class="`pi ${navItem.icon} me-2`"></i>
            {{ navItem.name }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const list = [
  {
    id: 'l-0',
    name: 'Main',
    nav: [
      {
        id: 'main-1',
        name: 'Dashboard',
        path: '/',
        icon: 'pi-th-large'
      }
    ]
  },
  {
    id: 'l-1',
    name: 'Lists',
    nav: [
      {
        id: 'lists-01',
        name: 'Users',
        path: '/users',
        icon: 'pi-user'
      },
      {
        id: 'lists-02',
        name: 'Products',
        path: '/products',
        icon: 'pi-mobile'
      },
      {
        id: 'lists-03',
        name: 'Orders',
        path: '/orders',
        icon: 'pi-barcode'
      }
    ]
  },
  // {
  //   id: 'l-2',
  //   name: 'New',
  //   nav: [
  //     {
  //       id: 'new-01',
  //       name: 'New Product',
  //       path: '/new-product',
  //     }
  //   ]
  // }
]
</script>

<style scoped lang="scss">
@import '../../assets/scss/style.scss';

.nav-link {
  &:hover {
    color: $purple !important;
  }
}
</style>