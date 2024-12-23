import http from 'k6/http';
import { check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  stages: [
    { duration: '5m', target: 100 },
    { duration: '5m', target: 200 }, 
    { duration: '30m', target: 300 },
    { duration: '5m', target: 0 }, 
  ],
};

export default function sampleTest() {
  let res = http.get("https://test-api.k6.io/public/crocodiles/1/");
  check(res, { "status was 200": (r) => r.status == 200 });
}
