const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middlware.js")
const reviewController = require("../controllers/reviews.js")



// post route
router.post("/", 
    validateReview,isLoggedIn,
    wrapAsync(reviewController.createRview));

//delete reviews router
router.delete("/:reviewId",isReviewAuthor ,wrapAsync(reviewController.destroyReviews));

module.exports = router;