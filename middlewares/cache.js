const NodeCache = require("node-cache");
const cache = new NodeCache({stdTTL: 30});

function cacheMiddleware(req,res, next){
    const key = "clientes_cache";
    const cache = cache.get(key);

    if(cache){
        console.log("[CACHE] Resposta vinda do cache");
        return res.status(200).json(cache);
    }

    res.sendResponse = res.json;
    res.json = (body) => {
        cache.set(key, body);
        console.log("[DB] Resposta vinda do banco. Cache salvo.");
        res.sendResponse(body);
    };

    next();
}

function invalidateClientesCache(){
    cache.del("clientes_cache");
    console.log("[CACHE] Cache de clientes invalidado");
}

module.exports = {
    cacheMiddleware,
    invalidateClientesCache
};