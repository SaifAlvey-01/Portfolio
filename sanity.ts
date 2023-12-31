import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATESET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);