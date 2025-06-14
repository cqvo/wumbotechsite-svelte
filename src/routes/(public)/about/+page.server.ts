import type { PageServerLoad } from './$types';

import resumeData from '$lib/assets/resumeData.json';

export const load: PageServerLoad = async () => {
	return {
		resumeData
	}
}