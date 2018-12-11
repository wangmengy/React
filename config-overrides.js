
const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config.resolve.alias = {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'images': resolve('src/assets/images'),
        'styles': resolve('src/assets/styles'),
        "components": resolve('src/components'),
        "pages": resolve('src/pages')
    }
    return config;
};