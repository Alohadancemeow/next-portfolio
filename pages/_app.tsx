import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px36 xl:px-48">
        {/* //todo: sidebar */}
        <div className="h-full col-span-12 p-4 text-center bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 rounded-2xl lg:col-span-3">
          <Sidebar />
        </div>

        {/* //todo: navbar and component */}
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 rounded-2xl dark:text-white">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
