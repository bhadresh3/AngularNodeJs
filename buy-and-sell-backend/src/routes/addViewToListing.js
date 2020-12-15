import { db } from '../database';
export const addToViewListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async(req, h) => {
        const id = req.params.id;
        await db.query(
            'UPDATE listing SET views = views + 1 WHERE id = ?',
            [id],
        );

        const { results } = await db.query(
            'SELECT * FROM listings WHERE id = ?',
            [id],
        )

        const updatedListings = results[0];
        return updatedListings;

    }
}