<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-xs-3 p-2" v-for="shop in this.$store.state.shops"
      v-if="shop.status == 'liked'"
      :key="shop.id">
      <div class="card text-center">
        <div class="card-block">
          <h6 class="card-title">{{ shop.name }}</h6>
        </div>
        <div class="card-block">
          <img 
            :src="shop.picture"
            class="img m-2">
        </div>
        <div class="card-block pl-1 pr-1 pb-1 ml-1 mr-1">
          <div class="float-center">
            <button class="btn btn-danger" @click="remove(shop.id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  methods: {
    remove (id) {
      const shop = {
        id: id,
        status: 'liked'
      }
      this.$store.dispatch('RemoveLikedShop', shop)
    }
  }
}
</script>
