const githubUsername = "janna-n";
const mediumUsername = "";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://pinned.berrysauce.dev/get/${username}`;
const gitContributionGraph = (username) => `https://ghchart.rshah.org/4F8CFF/${username}`;

export const URLs = {
  medium: createMediumURL(mediumUsername),
  gitConnected: createGitConnectedURL(githubUsername),
  gitRepo: gitRepos(githubUsername),
  gitContributionGraph: gitContributionGraph(githubUsername),
  githubProfile: `https://github.com/${githubUsername}`,
};

// Web3Forms (https://web3forms.com) — free, no backend required. Access key is meant to be public;
// it's rate-limited and domain-scoped on Web3Forms' side, not a secret.
export const CONTACT_FORM_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "a1148e9c-8086-4a2c-90df-3f7a3a2a5169";

export const RESUME_URL = "./assets/Janna_Nystrom_CV"; // TODO: add resume.pdf to /assets
