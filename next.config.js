module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/list',
                permanent: true
            },
            {
                source: '/list/:slug((?!new$)[^/]+)',
                destination: '/list/:slug/settings',
                permanent: false
            }
        ];
    }
};