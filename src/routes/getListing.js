import { fakeListing } from "./fake-data";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        const listing = fakeListing.find(listing => listing.id === id);
    }
}