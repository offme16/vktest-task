import axios from 'axios';
import axiosRetry from 'axios-retry';

const baseUrl = 'https://api.agify.io/';
export const $nameapi = axios.create({
    baseURL: baseUrl,
});

axiosRetry($nameapi, {
    retries: 1,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => error.response!.status > 400,
});