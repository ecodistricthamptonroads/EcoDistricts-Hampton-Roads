import axios from "axios";

//export function getStrapiURL(path = "") {
//   return `${
//     process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
//   }${path}`;
//}

export function getStrapiURL(path = "") {
  const DOMAIN =
    process.env.NODE_ENV === "production"
      ? "https://api.ecodistricthamptonroads.org"
      : "http://localhost:1337";
  return `${DOMAIN}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export function getStrapiMedia(media) {
  if (media){
    const imageUrl = media.url.startsWith("/")
      ? getStrapiURL(media.url)
      : media.url;
    return imageUrl;
  }
  return null;
}

export const IMAGE_TYPE = {
  THUMBNAIL: "thumbnail",
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

export function getSpecificImage( image_obj) {
  return getStrapiMedia(image_obj);
}

const SURVEY_PATH = "/Surveys";
export async function getSurveys() {
  return axios.get(getStrapiURL(SURVEY_PATH));
}
const NEWS_PATH = "/Articles";
export async function getNews() {
  return axios.get(getStrapiURL(NEWS_PATH));
}
const EVENTS_PATH = "/Events";
export async function getEvents() {
  console.log(getStrapiURL(EVENTS_PATH));
  return axios.get(getStrapiURL(EVENTS_PATH));
}
const JOBS_PATH = "/Jobs";
export async function getJobs() {
  return axios.get(getStrapiURL(JOBS_PATH));
}
const PROJECTS_PATH = "/Projects";
export async function getProjects() {
  return axios.get(getStrapiURL(PROJECTS_PATH));
}

const JOBS_SCHEMA_PATH = "/content-type-builder/content-types/application::job.job";
export async function getJobParameters() {
  return axios.get(getStrapiURL(JOBS_SCHEMA_PATH));
}
