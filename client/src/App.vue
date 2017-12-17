<template>
  <div id="app">
    <div class="container pt-2">
      <div class="row">
        <div class="col-12 text-right">
          <ul class="nav justify-content-right float-right">
            <li class="nav-item">
              <router-link tag="a" :to="{name: 'Home'}" class="nav-link active">
              Nearby Shops
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" :to="{name: 'FavoriteShops'}" class="nav-link">
              My prefered Shops
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container p-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  button {
    cursor: pointer;
  }
</style>