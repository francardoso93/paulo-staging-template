import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const redirectTestBasePlugin = {
  name: 'redirect-test-base',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/test') {
        res.statusCode = 302
        res.setHeader('Location', '/test/')
        res.end()
        return
      }
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  base: '/test/',
  plugins: [react(), redirectTestBasePlugin],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: true,
    hmr: false,
  },
})
