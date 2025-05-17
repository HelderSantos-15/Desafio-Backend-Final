// eslint-disable-next-line no-unused-vars
function cacheMiddleware(req, res, next){
    const chaveCache = 'produtos';
    // eslint-disable-next-line no-undef
    const produtosCache = cache.get(chaveCache);
    if (produtosCache !== undefined) {
        console.log('Produtos recuperados do cache');
        return res.json(produtosCache);
    }else{
        console.log('Produtos não encontrados');
        // eslint-disable-next-line no-undef
        cache.set(chaveCache, produtosCache, 300);
        // eslint-disable-next-line no-undef
        return res.json(produtos);
    }
}