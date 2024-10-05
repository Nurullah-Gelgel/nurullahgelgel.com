import {createClient} from 'next-sanity'

const projectId = "6cguho0s";
const dataset = "project";
const apiVersion = "2021-10-21"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
