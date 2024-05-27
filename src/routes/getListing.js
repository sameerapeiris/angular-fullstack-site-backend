import { Boom, boomify, isBoom } from "@hapi/boom";
import {  fakeListings } from "./fake-data";



export const getListingRoute ={
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id],
        );
        const listing = results[0];
        if(!listing) {
            return h.response({"statusCode": "404", error: "Not Found", message: `Listing Not Found for id ${id}` }).code(404);
        }else{
            return listing
        }
    }
}