import { readFileSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config();
// import {} from "dotenv"
// import {GITUB_PAT} from "$env/static/private"
const repoOwner = 'manhhungpc';
const repoName = 'auto-tkb-test';
const token = process.env.GITUB_PAT;

const api_url = `https://api.github.com/repos/${repoOwner}/${repoName}`;
const headers = {
	'X-GitHub-Api-Version': '2022-11-28',
	Authorization: `Bearer ${token}`
};

interface PullRequest {
	title: string;
	body: string;
}

export async function createPRs(branchName: string, data: PullRequest) {
	const pullsApiUrl = `${api_url}/pulls`;

	await createBranch(branchName);
	await uploadDsdkData(branchName);
	const PRdata = {
		title: data.title,
		body: data.body,
		head: `${repoOwner}:${branchName}`,
		base: 'main'
	};
	const response = await fetch(pullsApiUrl, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(PRdata)
	});

	console.log(response.status);

	if (response.status === 201) {
		const issue = await response.json();
		console.log('🚀 ~ file: create-issue.ts:39 ~ issue:', issue);
		console.log(`Pulls created with number: ${issue.number}`);
	} else {
		console.error('Failed to create GitHub pulls');
	}
}

async function createBranch(name: string) {
	const baseBranch = await fetch(`${api_url}/git/refs/heads/main`, {
		method: 'GET'
	});
	const shaBase = (await baseBranch.json()).object.sha;

	const newBranchData = {
		ref: `refs/heads/${name}`,
		sha: shaBase
	};
	const response = await fetch(`${api_url}/git/refs`, {
		method: 'POST',
		headers,
		body: JSON.stringify(newBranchData)
	});

	const newBranch = await response.json();
	console.log(response.status);
	console.log('🚀 ~ file: create-issue.ts:81 ~ newBranch:', newBranch);
}

async function uploadDsdkData(branchName: string) {
	const jsonFile = readFileSync('static/DSDK/subject_formated_2.json').toString('base64');
	const uploadPath = `static/UET/test-created_at_[${new Date()}].json`;

	const upload = await fetch(`${api_url}/contents/${uploadPath}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({
			message: 'Create file',
			content: jsonFile,
			branch: branchName
		})
	});

	if (upload.status === 201) {
		const file = await upload.json();
		console.log(`Created file`, file, file.download_url);
	} else {
		console.error('Failed to create file');
	}
}

// uploadJson();
createPRs('test_3', {
	title: 'TKB HK1 2023-2024',
	body: 'Create new'
});
