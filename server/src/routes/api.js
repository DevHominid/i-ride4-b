import express from 'express';

// Init router
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({});
});

export default router;
