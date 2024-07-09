import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio-app',

  projectId: '6cguho0s',
  dataset: 'project',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
