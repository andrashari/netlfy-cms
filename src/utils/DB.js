import {
    StitchClientFactory
} from 'mongodb-stitch';

// Google and Facebook Auth
const appIdWebsite = 'alfreskowebsite-jxjsg';
export const stitchClientPromiseWebsite = StitchClientFactory.create(appIdWebsite);