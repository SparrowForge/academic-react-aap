import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";



export const metadata = {
  title: "Academic Next App",
  description: "School app",
};

export default function DashboardLayout({ children }) {
  return (
    
          <div className="flex bg-white" >
          <DashboardSidebar />
          <div className="flex flex-col w-full">
            <DashboardNavbar />
            {children}
          </div>

        </div>
   
  );
}






