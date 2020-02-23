# Dice Roller Idea
Originally based on an idea tweeted out by Dean Oest, I was curious to see if I could implement this type of idea using CloudFlare Workers and an embed into Notion. I have no doubt, this could be much better, but it was done very quickly as a proof of concept.

[Example CloudFlare Worker Embed URL](https://autumn-snowflake-6518.listekconsulting.workers.dev/)

## Process
- Create a CloudFlare Worker with the code in `cloudflare-worker.js`
- Embed this URL into your Notion page

## Notes
I have included an `index.html` which is basically the same thing as the CloudFlare Worker output but without the JavaScript around it.