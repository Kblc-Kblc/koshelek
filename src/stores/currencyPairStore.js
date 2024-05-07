import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCurrencyPairStore = defineStore('currencyPair', () => {
  const currentPair = ref('BTCUSDT');
  const orderBook = ref({});
  const changeLogs = ref([]);
  const rowsPerPage = ref(100);


  let websocket = null;

  function setRowsPerPage(newValue) {
    rowsPerPage.value = newValue;
  }

  function updateOrderBook(data) {
    // Обновление asks
    if (data.a && data.a.length) {
      orderBook.value.asks = [...orderBook.value.asks || [], ...data.a].slice(-rowsPerPage.value);
    }
    // Обновление bids
    if (data.b && data.b.length) {
      orderBook.value.bids = [...orderBook.value.bids || [], ...data.b].slice(-rowsPerPage.value);
    }
  }


  async function fetchOrderBook(pair) {
    const url = `https://api.binance.com/api/v3/depth?symbol=${pair}&limit=5`;
    const response = await fetch(url);
    const data = await response.json();
    updateOrderBook(data);
  }

  function logChange(oldValue, newValue) {
    const now = new Date().toLocaleString();
    const newLog = {
      message: `Валютная пара изменена с ${oldValue} на ${newValue} в ${now}`,
      timestamp: Date.now()
    };
    changeLogs.value.push(newLog);
    saveLogsToLocalStorage();
  }

  function subscribeToWebSocket(pair) {
    if (websocket) {
      websocket.close();
    }
    websocket = new WebSocket(`wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@depth`);
    websocket.onmessage = (event) => {
      const depthUpdate = JSON.parse(event.data);
      updateOrderBook(depthUpdate);
    };
    websocket.onerror = (event) => {
      console.error('WebSocket Error:', event);
    };
  }

  function saveLogsToLocalStorage() {
    localStorage.setItem('changeLogs', JSON.stringify(changeLogs.value));
  }

  function loadLogsFromLocalStorage() {
    const savedLogs = localStorage.getItem('changeLogs');
    if (savedLogs) {
      changeLogs.value = JSON.parse(savedLogs);
    }
  }

  function saveCurrentPairToLocalStorage() {
    localStorage.setItem('currentPair', currentPair.value);
  }

  function loadCurrentPairFromLocalStorage() {
    const savedPair = localStorage.getItem('currentPair');
    if (savedPair) {
      currentPair.value = savedPair;
    }
  }

  loadLogsFromLocalStorage();
  loadCurrentPairFromLocalStorage();
  fetchOrderBook(currentPair.value);
  subscribeToWebSocket(currentPair.value);

  return { currentPair, orderBook, changeLogs, fetchOrderBook, subscribeToWebSocket, logChange, saveCurrentPairToLocalStorage, rowsPerPage, setRowsPerPage };
});
