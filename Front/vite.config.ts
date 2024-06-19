import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [react()],
   server: {
      port: 3001,
   },
   resolve: {
      alias: {
         // Définissez ici vos alias d'import
         '@': path.resolve(__dirname, './src/'),
         '@components': path.resolve(__dirname, 'src/components/'),
         '@pages': path.resolve(__dirname, 'src/pages/'),
         '@assets': path.resolve(__dirname, 'src/assets/'),
         '@type': path.resolve(__dirname, 'src/type.tsx/'),
         '@hooks': path.resolve(__dirname, 'src/hooks/'),
         '@lib': path.resolve(__dirname, 'src/lib/'),
         '@context': path.resolve(__dirname, 'src/context/'),
      },
   },
   define: {
      'process.env': process.env,
   },
});
