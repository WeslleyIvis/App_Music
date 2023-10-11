import express from "express";
import ytdl from "ytdl-core";

const router = express.Router();

router.get('/', async (req, res) => {
    res.send({nome: 'Pedradada', poder: 10})
})

router.post('/te', async (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
})

var data = []

router.post('/api/ytdl', (req, res) => {
    const { url, types } = req.body
    console.log(req.body)

    if(ytdl.validateURL(url)) {
        async function ytInfo() 
        {
            await ytdl.getBasicInfo(url).then((inf) => 
            {
                data = [inf.formats, inf.videoDetails, types]
                res.status(200).json({infoVideo: data})
            })
        }
        ytInfo()
    } else {
        res.status(400).send('Not found')
    }
})

export default router

async function request() {
    const data = await fetch('http://localhost:5555').then(r => r.json()).then(r => console.log(r))
}

async function apReq() {
    try {
        const res = await fetch('http://localhost:5555/te', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({data: 'valor', nome: 'wes'}),
        })

        if(res.ok)
        {
            const data = await res.json()
            console.log(data);
        }
    }catch(err)
    {
        console.error({err: err});
    }    
}