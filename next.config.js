module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/list',
                permanent: true
            },
            {
                source: '/list/:slug',
                destination: '/list/:slug/settings',
                permanent: true
            }
        ];
    }
};