import express from 'express';
import knex from './database/connection';
const routes = express.Router();

routes.get('/photos', async (request, response) =>{
  const photos = await knex('photos').select('*');
  const serializedPhotos = photos.map(photo =>{
    return{
      image_url: `http://localhost:3333/uploads/${photo.image_url}`,
    };
  });
  return response.json(serializedPhotos);
});

routes.post('/salvar', async(request, response) => {
  const {
    image_url,
  } = request.body;
  await knex('photos').insert({
    image_url: 'image-fake',
  });
  return response.json({ success: true});
});
export default routes;