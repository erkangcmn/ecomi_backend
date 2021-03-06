const express = require('express')
const router = express.Router()
const {
    getOmiMetrics,
    getOmiBurn,
    getOmiBurnTotal,
    getUserGrowthData,
    getStoreRevenueData,
    getStoreRevenueTotal,
    getVeveMetrics,
    getOmiBurnHeatMap,
    getBrandRevenueData,
    getLicensorRevenueData,
    getCollectibleRevenueData,
    getMarketplaceData,
    getMarketPriceHistoricData,
    getMarketplaceComicData,
    getCollectiblesValuation,
    getComicsValuation,
    getMarketPriceComicHistoricData,
    getSingleMarketCollectibleData
} = require('../../controllers/metrics/index')

// Get OMI metrics
router.get('/metrics/omi', getOmiMetrics)

// Get OMI burn history
router.get('/metrics/burns', getOmiBurn)

// Get OMI burn total
router.get('/metrics/burns/total', getOmiBurnTotal)

// Get OMI burn data for heatmap
router.get('/metrics/burns/heatmap', getOmiBurnHeatMap)

// Get store revenue history
router.get('/metrics/revenue', getStoreRevenueData)

// Get store revenue total
router.get('/metrics/revenue/total', getStoreRevenueTotal)

// Get veve metrics
router.get('/metrics/veve', getVeveMetrics)

// Get veve user growth data
router.get('/metrics/user/growth', getUserGrowthData)

// Get brand revenue data
router.get('/metrics/brands', getBrandRevenueData)

// Get licensor revenue data
router.get('/metrics/licensor', getLicensorRevenueData)

// Get collectible revenue data
router.get('/metrics/collectibles', getCollectibleRevenueData)

// Get secondary marketplace data for collectibles
router.get('/metrics/marketplace/collectibles', getMarketplaceData)

// Get secondary marketplace data for single (collectible)
router.get('/metrics/marketplace/collectible/:slug', getSingleMarketCollectibleData)

// Get secondary marketplace historical sale data (collectible)
router.get('/metrics/marketplace/collectible/history/:slug', getMarketPriceHistoricData)

// Get secondary marketplace data for comics
router.get('/metrics/marketplace/comics', getMarketplaceComicData)

// Get secondary marketplace historical sale data (comic)
router.get('/metrics/marketplace/comic/history/:slug', getMarketPriceComicHistoricData)

// Get collectibles valuation
router.post('/metrics/account/collectibles/valuation', getCollectiblesValuation)

// Get comics valuation
router.post('/metrics/account/comics/valuation', getComicsValuation)

module.exports = router