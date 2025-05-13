
import "./globals.css";
import DashboardNavbar from "./(Dashboard)/DashboardNavbar";
import DashboardSidebar from "./(Dashboard)/DashboardSidebar";
import Providers from "./lib/Providers";


export const metadata = {
  title: "Academic Next App",
  description: "School app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >  <Providers>
          <div className="flex bg-white" >
          <DashboardSidebar />
          <div className="flex flex-col w-full">
            <DashboardNavbar />
            {children}
          </div>

        </div>
     </Providers>
      </body>
    </html>
  );
}






