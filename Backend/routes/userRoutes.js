const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

// Route to register a new user
router.post('/register', authenticate, registerUser);

// Route to login a user
router.post('/login', authenticate, loginUser);

router.post('/google-login', async (req, res) => {
    const { tokenId } = req.body;
    const ticket = await verifyIdToken(tokenId);
    const userData = ticket.getPayload();
    // Authenticate the user using the userData
    // ...
  });
  
  const verifyIdToken = async (tokenId) => {
    const client = new google.auth.GoogleAuthClient();
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: 'YOUR_CLIENT_ID',
    });
    return ticket;
  };
module.exports = router;
