import { addViewToListingRoute, addToViewListingRoute } from './addViewToListing'
import { getAllListingsRoute } from './getAllListings'
import { getListingRoute } from './getListings'
import { getUserListingsRoute } from './getUserListings'
import { createNewListingRoute } from './createNewListing'
import { updateListingRoutes} from './updateListings'
import { deleteListingRoute } from './deleteListings'


export default[
    getAllListingsRoute,
    getListingRoute,
    addToViewListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoutes,
    deleteListingRoute,
]