import { db } from "../database"

export const getAllListingsRoute ={
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        const { reuslts } = await db.query(
            'SELECT * FROM listings'
        );
        return reuslts
    }
}