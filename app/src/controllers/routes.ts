import express from "express";
import ytdl from "ytdl-core";

const router = express.Router();

router.post('/te', async (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
})


router.post('/api/ytdl', (req, res) => {
    const { url, types } = req.body

    console.log(ytdl.validateURL(url))

    if(ytdl.validateURL(url)) {
        async function ytInfo() 
        {
            try 
            {
                const inf = await ytdl.getBasicInfo(url)
                const data = [inf.formats, inf.videoDetails, types];
                res.status(200).send({infVideo: data});
            }
             catch(err)
            {
                res.status(400).send(false);
            }
        }
        ytInfo()
    } else {
        res.status(400).send(false)
    }
})

export default router
