const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');
const path = require ('path')
module.exports = override(
        fixBabelImports('import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        }),
        addWebpackAlias({
            'assets': path.join(__dirname,'src/assets'),
            'components': path.join(__dirname,'src/components'),
            'common': path.join( __dirname, 'src/components/common' ),
            'layout': path.join( __dirname,'src/components/layout'),
            'pages': path.join( __dirname,'src/pages'),
            'store': path.join( __dirname,'src/store'),
            'utils': path.join( __dirname,'src/utils'),
            'lib': path.join( __dirname,'src/lib'),
            'style': path.join( __dirname, 'src/assets/stylesheets'),
            'img': path.join( __dirname,'src/assets/img'),
            'components':path.join(__dirname,'src/components')
           
          })
      );