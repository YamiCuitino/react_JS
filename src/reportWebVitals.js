// reportWebVitals.js
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  // Aquí puedes enviar las métricas a tu sistema de análisis o registrarlas en la consola.
  console.log(name, delta, id);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
getFCP(sendToAnalytics);
getTTFB(sendToAnalytics);
