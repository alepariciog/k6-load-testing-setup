import http from 'k6/http';
import { check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
    scenarios: {
        sampleTest: {
            executor: 'constant-arrival-rate',
            duration: '5s',
            rate: 1,
            timeUnit: `1s`,
            preAllocatedVUs: 1,
            maxVUs: 1,
        },
        shared_iter_scenario: {
          executor: 'shared-iterations',
          vus: 10,
          iterations: 100,
          startTime: '5s',
        },
        per_vu_scenario: {
          executor: 'per-vu-iterations',
          vus: 10,
          iterations: 1000,
          startTime: '30s'
        },
      },
};

export default function sampleTest() {
    let res = http.get("https://swapi.dev/api/people/100/", {headers: {Accepts: "application/json"}});
    let checkRes = check(res, {
        'status is 200': (r) => r.status === 200,
    });
}