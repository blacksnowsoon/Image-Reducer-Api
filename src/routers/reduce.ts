import express, { Router } from 'express'
import sharp from 'sharp'

const reduce: Router = express.Router()

reduce.post('/reduce', async (req, res) => {
  try {
    // get the width and height from the query
    const { width, height }: { width: string; height: string } = {
      width: req.query.width as string,
      height: req.query.height as string,
    };
    const uploadedImage = req.body?.image;
    if (!uploadedImage || !width || !height) {
      return res.status(400).send('no image was uploaded or width or height was not provided');
    }
    const strippedImage = uploadedImage.replace(/^data:image\/\w+;base64,/, '');
    const buffred = Buffer.from(strippedImage, 'base64');
    const file: sharp.Sharp = sharp(buffred, {
      failOnError: false,
    }).resize(Number.parseInt(width), Number.parseInt(height), {
      fit: 'fill',
    });
    const newBuffer = await file.toBuffer();
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(newBuffer))
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(`data:image/png;base64,${base64String}`);
  } catch (error) {
    res.status(500).send(error);
  }
})
reduce.get('/reduce', (req, res) => {
  return res.send('you can not use get on this route :(')
})


export default reduce