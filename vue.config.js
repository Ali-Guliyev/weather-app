module.exports = {
  pwa: {
    manifestOptions: {
      name: 'Weather App',
      short_name: 'Weather App',
      start_url: './',
      display: 'standalone',
      theme_color: '#78bff7',
      msTileColor: '#6dade1',
      icons: [
        {
          src: './src/img/icons/icon192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './src/img/icons/icon512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
  },
};
