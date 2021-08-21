module.exports = {
// rem
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*']
    }
  }
}
