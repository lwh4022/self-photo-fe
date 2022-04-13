
module.exports = (api) => {
  process.env.NODE_ENV === 'development' ? api.cache(false) : api.cache(true)
  
  return {
    presets: [
    [
      "@babel/preset-env", {
        targets : {
          node : "current"
        }
      }
    ],
    "@babel/preset-typescript",
    ["@babel/preset-react", {
      runtime : 'automatic'
    }]
  ]}
}