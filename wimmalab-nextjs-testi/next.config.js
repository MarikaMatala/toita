const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: '/fonts/:slug*',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000'
          }
        ]
      }
    ];
  }
};
