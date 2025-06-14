import type { PageServerLoad } from './$types';
import { resoomSanityClient as client } from '$lib/server/sanity';

const userId = "1";

const query = `*[_type == "resume" && userId == "${userId}"] {`
+ `education[]{ ...education->{ institution, degree, field, graduationDate, gpa, honors }, order },`
+ `experiences[]{ ...experience->{ company, position, location, startDate, endDate, current, description, achievements, skills }, order },`
+ `}`

export const load: PageServerLoad = () => {
	return {
		resumeData: client.fetch(query),
	}
}