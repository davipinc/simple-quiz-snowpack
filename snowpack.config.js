/* eslint-disable no-undef */

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    [
      'snowpack-plugin-unicode',
      {
        inputExtensions: ['.md', '.csv', '.txt'],
        inputEncoding: 'utf-8'
      }
    ],
    [
      '@snowpack/plugin-webpack'
    ]    
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  }
};
