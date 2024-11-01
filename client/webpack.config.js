const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
    // Other Webpack configuration

    plugins: [
        new webpack.DefinePlugin({
            // Inject each variable separately
            'process.env.REACT_APP_BASE_URL': JSON.stringify(process.env.REACT_APP_BASE_URL)
        })
    ]
};
