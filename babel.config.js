module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { ie: '11' },
      debug: false
    }],
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
};
