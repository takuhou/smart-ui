const presets =  [
  ["@babel/preset-env", {
    "useBuiltIns": "entry"
  }]
];
const plugins = ["@babel/plugin-proposal-class-properties"];
module.exports = { presets, plugins };
