<template>
  <div class="product">

    <div class="product-image-wrapper">
      <img class="product-image" :src="imageUrl" alt="product image"  >
    </div>
    <span class="product-label">{{label}}</span>
    <h3 class="product-title">{{ title }}</h3>
    <p v-if="description" class="product-description">{{ description }}</p>
    <div class="product-price">{{ price }}  ₽</div>
  </div>
</template>



<script>
import emptyStateImage from '@/assets/images/empty-state-image.png';

export default {
  props: {
    title: {
      required: true
    },
    description: {
      required: true
    },
    img: {
      required: true
    },
    price: {
      required: true
    },
    label: {
      required: true
    },
  },

  methods: {
    handleImageError(event) {
      event.target.src = emptyStateImage;
    },
  },
  computed: {
    imageUrl() {
      return require(`../assets/images/goods/${this.img}`)
    }
  },

}
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #f6f6f6;
}

.product-image {
  width: 90%;
  height: 90%;
  margin-bottom: 10px;
  object-fit: contain;
  position: relative;
  z-index: 3;
}
.product-label {
  font-size: 12px;
  line-height: 14px;
  margin: 16px 0;
  color: gray;
}

.product-image-wrapper {
  width: 100%;
  height: 240px;
  position: relative;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.product-image-wrapper::after {
  content: '';
  position: absolute;
  border: 1px solid #c92631;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.product-title {
  margin-top: 0;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 16px;
  min-height: 84px;
}

.product-description {
  margin-top: 24px;
  font-size: 1rem;
  font-weight: 400;
}

.product-price {
  font-size: 20px;
  color: #c92631;
  font-weight: 600;
}
</style>
