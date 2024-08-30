// webpack.server.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';
import Dotenv from 'dotenv-webpack';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/server/server.mjs',
  target: 'node',
  mode: 'production',
  output: {
    filename: 'server.mjs',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module',
    chunkFormat: 'module', // Explicitly set chunkFormat
    module: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
    },
  },
  externals: [nodeExternals({
    allowlist: [
      'react-markdown',
      'vfile',
      'unist-util-stringify-position',
    ],
  })],
  plugins: [
    new Dotenv({
      path: './.env.local',
    }),
  ],
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },
};
