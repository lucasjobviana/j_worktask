const express = require('express');

const router = express.Router();

const HTTP_STATUS_OK = 200;

router.get('/work', async (_req, res) => {
    return res.status(HTTP_STATUS_OK).json({ OK: 'heheheheheh' });
});