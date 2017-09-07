module.exports = {
  type: 'react-app',
  webpack: {
    rules: {
      babel: {
        test: /\.jsx?/
      }
    },
    extra: {
      resolve: {
        extensions: ['.js', 'index.js', '.jsx'],
      }
    }
  },

}