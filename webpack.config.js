const path = require('path');


module.exports = {
  mode:'production',
  entry: {
    easter : './src/easter.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'miam-[name].js',
    library: 'miamEaster',
  },
  module: {
    rules: [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
    
  },
 
};
