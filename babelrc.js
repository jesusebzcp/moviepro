

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        [
            'module-resolver',
            {
                alias: {
                    '@': './src',
                },
            },
        ],
    ],
};