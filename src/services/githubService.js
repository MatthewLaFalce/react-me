import http from "./httpService";
import configInfo from "../config.json";

const apiEndpoint = configInfo.githubUrl;

export async function getUser(login) {
  return http.get(`${apiEndpoint}/users/${login}`);
}

export async function getUserRepos(login) {
  return http.get(`${apiEndpoint}/users/${login}/repos`);
}
