const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const parsedId = parseInt(userId);
  if (isNaN(parsedId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parsedId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  } else {
    res.json(user);
  }
});