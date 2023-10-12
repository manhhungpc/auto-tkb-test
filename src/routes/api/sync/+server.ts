import { errorMsg } from 'src/utils/error-msg';
import type { RequestHandler } from '../$types';
import { json } from '@sveltejs/kit';
import { getHTMLContent } from '$lib/sync-dsdk';

export const POST: RequestHandler = async ({ request }) => {
	let response: any;
	const formData = await request.formData();
	const dsdk = formData.get('dsdk') as Blob;
	const dsdkBuffer = await dsdk.arrayBuffer();

	const dsdkData = await getHTMLContent('static/DSDK/subject_formated.html');
	return json(response);
};
