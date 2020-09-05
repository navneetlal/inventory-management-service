import express from 'express';
const router = express.Router();

router.get('/product', (req, res) => {
  res.send("get product")
})

router.post('/product', (req, res) => {
  res.send("post product")
})

router.get('/product/:id', (req, res) => {
  res.send("get product by id")
})

export default router;