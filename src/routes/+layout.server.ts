import { ANALYTICS_ID } from '$env/static/private';

export async function load () {
  return { ANALYTICS_ID };
}