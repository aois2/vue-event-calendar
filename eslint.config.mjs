import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    prettierConfig,
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    htmlWhitespaceSensitivity: 'ignore', // aタグの羅列などで変な風にならないように追記
                },
            ],
        },
    }
)
