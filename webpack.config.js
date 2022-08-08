//引入一个包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//webpack所有的配置信息都应该写在module.exports中
module.exports = {
    //通过选择 development, production 或 none 之中的一个，来设置 mode 参数
    mode: 'production',
    //指定入口文件  
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        //指定打包文件所在的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件
        filename: 'my-first-webpack.bundle.js',
        //告诉webpack编译不使用箭头函数
        environment:{
            arrowFunction:false
        }
    },
    //指定webpack打包时要使用的模块
    module: {

        //指定要加载的规则
        rules: [
            {
                //test指定规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置bable    
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置bable
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    {
                                        //要兼容的目标游览器
                                        targets: {
                                            "chrome": "88",
                                            // "ie":'11'
                                        },
                                        //指定corejs的版本
                                        "corejs": 3,
                                        //使用corejs的方法usage，表示按需加载
                                        "useBuiltIns": "usage"
                                    },
                                ],
                            ],

                        }
                    },
                    'ts-loader'],
                //要排除的文件
                exclude: '/node_modules/'
            },
            //设置less文件处理
            {
              test:/\.less$/,
              use:[
                "style-loader",
                "css-loader",
                //引入postcss
                {
                  loader:'postcss-loader',
                  options:{
                    postcssOptions:{
                        plugins:[
                            'postcss-preset-env',
                            // {
                            //     browsers:'last 2 versions'
                            // }
                        ]
                    }
                  }
                },
                "less-loader"
              ]
            }

        ],
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}