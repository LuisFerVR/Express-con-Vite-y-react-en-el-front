import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hola mundo desde express')
})

router.get('/ecommerce', (req, res) => {
    res.send('Hola mundo desde ecommerce')
})