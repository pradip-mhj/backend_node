import  express from 'express';

const router = express.Router();

// Define your routes here
router.get('/example', (req, res) => {
  res.send('This is an example route!');
});

router.get('/test', (req, res) => {
  res.send('This is a test route!');
});
export default router;