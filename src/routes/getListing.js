import { Boom, boomify, isBoom } from "@hapi/boom";
import {  fakeListings } from "./fake-data";



export const getListingRoute ={
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const listing =  fakeListings.find(listing => listing.id === id);
        if(!listing) {
            return h.response({"statusCode": "404", error: "Not Found", message: `Listing Not Found for id ${id}` }).code(404);
        }else{
            return listing
        }
    }
}