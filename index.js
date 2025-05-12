const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const postCallRoutes = require('./routes/postCall');
const chatbotRoutes = require('./routes/chatbot');
const knowledgeBaseRoutes = require('./routes/knowledgeBase');
const stateManagerRoutes = require('./routes/stateManager');
app.use('/api/state', stateManagerRoutes);
app.use('/api/postcall', postCallRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/knowledgebase', knowledgeBaseRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
