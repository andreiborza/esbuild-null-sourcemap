import * as esbuild from 'esbuild'
import { sentryEsbuildPlugin } from '@sentry/esbuild-plugin'


await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/out.js',
  sourcemap: true,
  plugins: [
    // Put the Sentry esbuild plugin after all other plugins
    sentryEsbuildPlugin({
      org: "sentry-sdks",
      project: "ab-esbuild"
    }),
  ],
})