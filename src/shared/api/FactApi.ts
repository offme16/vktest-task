import axios from 'axios';
import axiosRetry from 'axios-retry';

const baseUrl = 'https://catfact.ninja/fact';
export const $factapi = axios.create({
    baseURL: baseUrl,
});

axiosRetry($factapi, {
    retries: 1,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => error.response!.status > 400,
});