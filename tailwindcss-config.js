module.exports = {
    purge: {
        enable: true,
        content: ['src/**/*.js'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                body: '#FFFFFF',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
