import { Octokit } from "@octokit/core";
import mockResponse from '../consts';


// Blocker: 
// https://github.com/community/community/discussions/40619
// as a temporary "solution" I went with some random generated names 

const useRequest = async () => {
    // const octokit = new Octokit({
    //     auth: process.env.GITHUB_TOCKEN
    // });

    // const res = await octokit.request('GET /search/users', {
    //     mode: 'no-cors',
    //     q: 'ivakhiv',
    //     headers: {
    //         'X-GitHub-Api-Version': '2022-11-28',
    //     },
    // });
    const result = await setTimeout(() => mockResponse, 1500);
    return result;
}

export default useRequest;