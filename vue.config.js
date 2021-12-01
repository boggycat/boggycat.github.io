module.exports = {
  pages: {
    index: {
      entry: 'src/views/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Boggy Cat',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
  },
}
