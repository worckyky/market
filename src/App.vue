<template>
  <div class="app">
    <iframe class="frame-header" width="100%" height="116px" scrolling="no" src="https://timerman.org/"></iframe>
    <div class="head-main">
      <div class="inform-wrapper">
        <h1>Витрина</h1>
        <p>В точках общественного питания, расположенных на территории проведения соревнований.</p>
        <p>Вы можете приобрести напитки и иную продукцию.</p>
      </div>
    </div>

    <div class="wrapper">
<!--      <div class="product-filter">-->
<!--        <p>Фильтры:</p>-->
<!--        <div class="product-filter-buttons">-->
<!--          <button @click="filterByLabel('Все')" :class="{'active': isSelected('Все')}">Все</button>-->
<!--          <button @click="filterByLabel('Напитки')" :class="{'active': isSelected('Напитки')}">Напитки</button>-->
<!--          <button @click="filterByLabel('Снеки')" :class="{'active': isSelected('Снеки')}">Снеки</button>-->
<!--          <button @click="filterByLabel('Еще что-то')" :class="{'active': isSelected('Еще что-то')}">Бургеры</button>-->
<!--        </div>-->
<!--      </div>-->
      <div class="product-list">
        <div v-for="product in products" :key="product.id">
          <ProductItem
              :title="product.title"
              :description="product.description"
              :price="product.price"
              :img="product.img"
              :label="product.label"
          />
        </div>
      </div>
      <div class="product-empty" v-if="isEmpty">
        <h2>Ничего не найдено</h2>
      </div>
      <div class="product-info">
        <p>
          «Не является публичной офертой. Точную стоимость необходимо узнавать в торговой точке, реализующей продукцию.»
          и «Реклама ООО «ПепсиКо Холдингс.»
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./components/ProductItem.vue";
import {goods} from "../public/products";

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products: [...goods],
      selected: 'Все'
    }
  },
  computed: {
    isEmpty() {
      return !this.products.length
    }
  },
  methods: {
    filterByLabel(label) {
      if (label === 'Все') {
        this.selected = 'Все'
        this.products = [...goods]
      } else {
        this.selected = label
        this.products = [...goods].filter(product => product.label === label)
      }
    },
    isSelected(label) {
      return this.selected === label
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

.app {
  height: 100%;
}

.head-main {
  background-image: url("@/assets/images/bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 520px;
  text-align: center;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.head-main::before {
  content: '';
  position: absolute;
  background: rgba(0, 0, 0, 0.72);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  z-index: 1;
}

.frame-header {
  border: none;
}

.inform-wrapper {
  z-index: 3;
  position: relative;
  padding: 32px;
}

.inform-wrapper h1 {
  font-size: 3.5rem;
  text-transform: uppercase;
  color: white;
  line-height: 52px;
  margin-bottom: 24px;
}

.inform-wrapper p {
  font-size: 16px;
  color: white;
  line-height: 32px;
}

.wrapper {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 30px;
  height: 100%;
}

.product-list {
  margin: 80px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 32px;
}

.product-info {
  min-height: 100px;
  margin: 40px 0;
  border: 1px solid #c92631;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.product-info p {
  font-size: 18px;
  text-align: center;
  line-height: 24px;
}

.product-filter {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 24px;
}
.product-filter-buttons {
  padding-bottom: 16px;
  gap: 16px;
  display: flex;
  align-items: center;
  overflow-y: auto;
  width: 100%;
}
.product-filter button {
  border: 1px solid #c92631;
  padding: 8px 16px;
  color: #201c21;
  font-size: 16px;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
}
.product-filter p {
  padding-bottom: 16px;
}

.active {
  border: 1px solid #c92631 !important;
  background: #c92631 !important;
  color: #ffffff !important;
}

.product-empty {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  text-align: center;
}

@media (max-width: 480px) {
  .product-filter {
    flex-direction: column;
  }
}


</style>
