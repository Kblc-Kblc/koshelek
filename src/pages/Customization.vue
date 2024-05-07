<template>
  <v-container>
    <v-select
      v-model="selectedPair"
      :items="pairs"
      label="Выберите валютную пару"
    ></v-select>

    <div>
      <h3 class="mb-2">Лог изменений</h3>
      <ul style="list-style-type: none;">
        <li v-for="log in changeLogs" :key="log.timestamp" class="mb1">
          {{ log.message }}
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useCurrencyPairStore } from '@/stores/currencyPairStore';

const store = useCurrencyPairStore();

const selectedPair = computed({
  get: () => store.currentPair,
  set: (value) => {
    if (store.currentPair !== value) {
      store.logChange(store.currentPair, value); // Запись лога изменений
      store.currentPair = value; // Обновление текущей пары в store
      store.saveCurrentPairToLocalStorage(); // Сохранение в localStorage
      store.fetchOrderBook(value); // Запрос данных ордербука
      store.subscribeToWebSocket(value); // Подписка на WebSocket
    }
  }
});

const pairs = [
  {title: 'BTC/USDT', value: 'BTCUSDT'},
  {title: 'BNB/BTC', value: 'BNBBTC'},
  {title: 'ETH/BTC', value: 'ETHBTC'}
];

const changeLogs = computed(() => store.changeLogs);
</script>

