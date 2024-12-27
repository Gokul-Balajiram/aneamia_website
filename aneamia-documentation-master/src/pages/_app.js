import Layout from '@/components/layout';
import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import "@/styles/footer.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
