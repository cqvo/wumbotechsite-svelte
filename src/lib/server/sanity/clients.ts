import { createClient, type ClientConfig } from '@sanity/client';
import { SANITY_API_PROJECT_ID, SANITY_API_DATASET } from '$env/static/private';

const resoomSanityConfig: ClientConfig = {
	projectId: 'feynu02w',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-02-06',
};

export const resoomSanityClient = createClient(resoomSanityConfig);

const clientConfig: ClientConfig = {
	projectId: SANITY_API_PROJECT_ID,
	dataset: SANITY_API_DATASET,
	useCdn: true,
	apiVersion: '2025-02-06',
}

export const sanityClient = createClient(clientConfig);