<template>
  <div class="row justify-content-center align-items-center">
    <div 
      class="col-xs-3 p-2"
      v-for="shop in this.$store.state.shops"
      v-if="shop.status == null"
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
          <div class="float-left">
            <button class="btn btn-danger" @click="dislike(shop.id)">Dislike</button>
          </div>
          <div class="float-right">
            <button class="btn btn-success text-right" @click="like(shop.id)">Like</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line

import moment from 'moment'
import axios from 'axios'
import geolib from 'geolib'

export default {
  data () {
    return {
      CurrentPosition: {}
    }
  },
  async mounted () {
    if (!this.$store.state.shops.length) {
      let that = this

      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(position => {
          this.CurrentPosition.latitude = position.coords.latitude
          this.CurrentPosition.longitude = position.coords.longitude

          axios.get('http://localhost:8000/api/shops')
          .then(function (response) {
            let shops = response.data.shops
            shops.map((obj) => {
              var shopLocation = JSON.parse(obj.location_coordinates)
              var distance = geolib.getDistance(
                that.CurrentPosition, shopLocation
              )

              obj.distance = distance
              obj.status = null
              return obj
            })

            shops.sort((a, b) => {
              return a.distance - b.distance
            })

            that.$store.dispatch('SetShops', shops)
          })
          .catch(function (error) {
            console.log(error)
          })
        })
      }
    } else {
      var shops = this.$store.state.shops.map((obj) => {
        if (obj.status === 'disliked') {
          if (moment(obj.expire) < moment()) {
            obj.expire = null
            obj.status = null
          }
        }

        return obj
      })
      this.$store.dispatch('SetShops', shops)
    }
  },
  methods: {
    like (id) {
      const shop = {
        id: id,
        status: 'liked'
      }
      this.$store.dispatch('SetShopStatus', shop)
    },
    dislike (id) {
      const shop = {
        id: id,
        status: 'disliked',
        expire: moment().add(2, 'hours')
      }
      this.$store.dispatch('SetShopStatus', shop)
    }
  }
}
</script>
