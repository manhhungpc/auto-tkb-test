import { readFileSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config();
// import {} from "dotenv"
// import {GITUB_PAT} from "$env/static/private"
const repoOwner = 'manhhungpc';
const repoName = 'auto-tkb-test';
const token = process.env.GITUB_PAT;
async function createGitHubIssue(title: string, body: any) {
	console.log('🚀 ~ file: create-issue.ts:9 ~ token:', token);

	const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/pulls`;

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ title, body })
	});

	console.log(response.body, response.status);

	if (response.status === 201) {
		const issue = await response.json();
		console.log(`Issue created with number: ${issue.number}`);
	} else {
		console.error('Failed to create GitHub issue');
	}
}

async function uploadJson() {
	const jsonFile = readFileSync('static/DSDK/subject_formated.json');
	const uploadPath = 'static/test.json';

	const upload = await fetch(
		`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${uploadPath}`,
		{
			method: 'PUT',
			headers: {
				Authorization: `${token}`
			}
		}
	);
}

createGitHubIssue('What is this 2?', 'Test second issue');
