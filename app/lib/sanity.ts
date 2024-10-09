import {createClient} from 'next-sanity'

const projectId = "6cguho0s";
const dataset = "project";
const apiVersion = "2022-03-07"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
