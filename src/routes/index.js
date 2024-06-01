import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { updateListingRoute } from "./updateListings";

export default [
  addViewToListingRoute,
  createNewListingRoute,
  getAllListingsRoute,
  getListingRoute,
  getUserListingsRoute,
  updateListingRoute,
  deleteListingRoute
];
