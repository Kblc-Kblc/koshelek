<template>
  <v-container>
    <div class="current-pair mb-4">
      <h2>Текущая валютная пара: {{ currentPair }}</h2>
    </div>

    <div class="row">
      <div class="row__columns mb-4">
        <v-card>
          <v-card-title>
            Asks
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="orderBookAsks"
            :search="searchAsk"
            :items-per-page="rowsPerPage"
            :items-per-page-options="itemsPerPageOptions"
            :class="{ 'hide-inputs': !mdAndUp }"
            class="elevation-1"
            fixed-header
            :height="tableHeight"
            @update:items-per-page="updateRowsPerPage"
          ></v-data-table>
        </v-card>
      </div>

      <div class="row__columns">
        <v-card>
          <v-card-title>
            Bids
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="orderBookBids"
            :search="searchBid"
            :items-per-page="rowsPerPage"
            :items-per-page-options="itemsPerPageOptions"
            :class="{ 'hide-inputs': !mdAndUp }"
            class="elevation-1"
            fixed-header
            :height="tableHeight"
            @update:items-per-page="updateRowsPerPage"
          ></v-data-table>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useCurrencyPairStore } from '@/stores/currencyPairStore';
import { useDisplay } from 'vuetify';

const store = useCurrencyPairStore();
const { mdAndUp } = useDisplay();

const tableHeight = computed(() => {
  return mdAndUp.value ? 'calc(32vh - 48px)' : 'calc(22vh - 48px)';
});

const currentPair = computed(() => {
  const pair = store.currentPair;

  if (pair && pair.length > 3) {
    const base = pair.slice(0, 3);
    const quote = pair.slice(3);
    return `${base}/${quote}`;
  }
  return pair;
});

const rowsPerPage = ref(store.rowsPerPage);

const searchAsk = ref('');
const searchBid = ref('');

const itemsPerPageOptions = [
  { title: '100', value: 100 },
  { title: '500', value: 500 },
  { title: '1000', value: 1000 }
];

function updateRowsPerPage(newVal) {
  rowsPerPage.value = newVal;
  store.setRowsPerPage(newVal);
}

const headers = [
  { title: 'Price', value: 'price', key: 'price' },
  { title: 'Quantity', value: 'quantity', key: 'quantity' },
  { title: 'Total', value: 'total', key: 'total' }
];

const orderBookAsks = computed(() => {
  if (!store.orderBook.asks || !Array.isArray(store.orderBook.asks)) {
    return [];
  }
  return store.orderBook.asks.map(ask => ({
    price: parseFloat(ask[0]).toFixed(2),
    quantity: parseFloat(ask[1]),
    total: (parseFloat(ask[0]) * parseFloat(ask[1])).toFixed(2)
  }));
});

const orderBookBids = computed(() => {
  if (!store.orderBook.bids || !Array.isArray(store.orderBook.bids)) {
    return [];
  }
  return store.orderBook.bids.map(bid => ({
    price: parseFloat(bid[0]).toFixed(2),
    quantity: parseFloat(bid[1]),
    total: (parseFloat(bid[0]) * parseFloat(bid[1])).toFixed(2)
  }));
});
</script>

<style lang="scss" scoped>
  :deep(.hide-inputs) {
    .v-data-table__td {
      height: auto;
    }
    .v-data-table-header__content {
      .v-input--horizontal {
        display: none;
      }
    }

  }
</style>
