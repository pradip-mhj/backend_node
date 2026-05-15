
import express from 'express';
import route from './router/index.js';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my Express server. This is the root route. This is another sample of the root route. This is yet another sample of the root route. This is the last sample of the root route. This is the final sample of the root route. This is the end of the root route samples. This is the conclusion of the root route samples. This is the summary of the root route samples. This is the overview of the root route samples. This is the introduction to the root route samples. This is the background of the root route samples. This is the context of the root route samples. This is the information about the root route samples. This is th+etails of the root route samples. This is the explanation of the root route samples. This is the description of the root route samples. This is the analysis of the root route samples. This is the review of the root route samples. This is the critique of the root route samples. This is the evaluation of the root route samples. This is the assessment of the root route samples. This is the judgment of the root route samples. This is the opinion on the root route samples. This is my thoughts on the root route samples. This is my perspective on the root route samples. This is my view on the root route samples. This is my stance on the root route samples. This is my position on the root route samples. This is my take on the root route samples. This is my interpretation of the root route samples. This is my understanding of the root route samples. This is my insight into the root route samples. This is my knowledge about the root route samples.');


  
});
app.use('/api/v1', route);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

