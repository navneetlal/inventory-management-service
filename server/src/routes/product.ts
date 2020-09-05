import express from 'express';
const router = express.Router();

import mysqlConnection from '../dbContext/mysql';
import { IProduct } from '../interface/product';

router.get('/product', (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products",
    (err, result) => {
      if (err) res.status(500).send({ message: 'No product found' })
      else res.status(200).send({ ...result })
    }
  )
})

router.post('/product', (req, res) => {
  const product: IProduct = req.body;
  mysqlConnection.query(
    "INSERT INTO Products VALUES (?,?,?,?)",
    [product.productId, product.productName, product.productDescription, product.productPrice],
    (err, result) => {
      if (err) res.status(500).send({ message: err.message })
      else res.status(201).send({ ...product })
    }
  )
})

router.get('/product/:id', (req, res) => {
  const id = req.params.id
  mysqlConnection.query(
    "SELECT * FROM Products WHERE productId=?", id,
    (err, result) => {
      if (err) res.status(500).send({ message: 'No product found' })
      else res.status(200).send({ ...result })
    }
  )
})

export default router;