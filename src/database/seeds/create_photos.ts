import { Knex } from 'knex';

export async function seed(knex: Knex){
 await knex('photos').insert([
    {image_url: 'img1.jpg'},
    {image_url: 'img2.jpg'},
    {image_url: 'img3.jpg'}
]);
}