const express = require('express')
const router = express.Router()
const { create, list, read, remove, update, listRelated, listSearch } = require('../../controllers/collectibles/collectible')
const { requireSignin, adminMiddleware } = require('../../controllers/auth/auth')

// Create blog
router.post('/collectible', requireSignin, adminMiddleware, create)
router.get('/collectibles', list)
router.get('/collectible/:slug', read)
router.delete('/collectible/:slug', requireSignin, adminMiddleware, remove)
// router.put('/collectible/:slug', requireSignin, adminMiddleware, update)
// router.get('/collectible/photo/:slug', photo)
// router.post('/collectibles/related', listRelated)
// router.get('/collectibles/search', listSearch)

module.exports = router