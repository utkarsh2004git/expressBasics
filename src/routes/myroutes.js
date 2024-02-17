import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'I am Root!'
  });
});

router.get('/create', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'Create wala page!'
  });
});

router.get('/update', (req, res, next) => {
  console.log('Received request');
  res.json({
    message: 'Update wala page!'
  });
});

export default router;