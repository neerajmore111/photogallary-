import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import flowbiteReact from "flowbite-react/plugin/vite";import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()
  ],
})