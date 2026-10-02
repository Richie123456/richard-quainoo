const https = require('https');

https.get('https://www.youtube.com/@TheRQStudio', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const videoIds = [...data.matchAll(/"videoId":"([^"]+)"/g)].map(m => m[1]);
    const uniqueIds = [...new Set(videoIds)];
    console.log('Video IDs:', uniqueIds.slice(0, 5));
  });
});
