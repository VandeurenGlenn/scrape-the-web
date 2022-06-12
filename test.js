import scrape from './scrape-the-web.js';


const scraped = await scrape('https://coinmarketcap.com/')
console.log(scraped.html());
