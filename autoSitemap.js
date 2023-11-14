// generateSitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');

const createSitemap = async () => {
    const sitemap = new SitemapStream({ hostname: 'https://leviqin.top' });

    // Add URLs to the sitemap
    sitemap.write({ url: '/page1', changefreq: 'weekly', priority: 0.8 });
    sitemap.write({ url: '/page2', changefreq: 'weekly', priority: 0.7 });
    // Add more URL entries as needed

    sitemap.end();

    try {
        // Wait for the promise to resolve
        const xmlString = await streamToPromise(sitemap).then((data) => data.toString());

        // Save the XML string to a file
        const fs = require('fs');
        fs.writeFileSync('./sitemap.xml', xmlString);

        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

createSitemap();
