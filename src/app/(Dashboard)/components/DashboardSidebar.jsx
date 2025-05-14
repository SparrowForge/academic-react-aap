"use client";
import { useState } from "react";

const DashboardSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleToggle = () => {
        setSidebarOpen(!isSidebarOpen);  
    };

    return (
        <div className={`bg-[#1f1e1e] text-[#FFFFFFB2] flex flex-col transition-all duration-300 border-r border-[#333333] ${isSidebarOpen ? 'w-64' : 'w-20'} h-auto`}>
          
            <div className="flex items-center justify-between gap-2 h-20 px-4 border-b border-[#333333]">
                <h1 className={`text-xl pl-2 font-bold transition-all text-white leading-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <span className="text-xl font-extrabold">
                        <span className="text-[#FC4F00]">A</span>cademic
                    </span>
                </h1>
            {/* menu toggle  */}
                <button
                    onClick={handleToggle}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 text-white hover:text-[#FFFFFFB2] h-11 w-11 ml-auto  hover:bg-[#333333]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col flex-1 overflow-y-auto py-4 px-4 text-md">
                <nav className="space-y-1">
             
                    <a
                        className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white "
                        href="/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-house"
                        >
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                        {isSidebarOpen && <span>Dashboard</span>}
                    </a>
                    <a
                        className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white "
                        href="/profile"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-user"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        {isSidebarOpen && <span>Profile</span>}
                    </a>

                    <a
                        className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white "
                        href="/Courses"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-book"
                        >
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                        </svg>
                        {isSidebarOpen && <span>Courses</span>}
                    </a>

                    
                    <a
                        className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white "
                        href="/assignments"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-clipboard-check"
                        >
                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <path d="m9 14 2 2 4-4"></path>
                        </svg>
                        {isSidebarOpen && <span>Assignments</span>}
                    </a>

                  
                    <a
                        className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white "
                        href="/exams"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-file-text"
                        >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                        </svg>
                        {isSidebarOpen && <span>Exams</span>}
                    </a>

                    <a className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white " 
                    href="/attendance">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        {isSidebarOpen && <span>Attendance</span>}
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white " href="/Fees">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-book-open">
                                <path d="M12 7v14"></path>
                                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                </svg>
                        {isSidebarOpen && <span>Fees</span>}
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white " href="/results">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>

                        {isSidebarOpen && <span>Results</span>}
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white " href="/leave">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        {isSidebarOpen && <span>Leave Requests</span>}
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white " href="/notifications">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24" 
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                        {isSidebarOpen && <span>Notifications</span>}
                    </a>
                    <a className="flex items-center gap-3 rounded-md px-3 py-2  transition-colors hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white " href="/support">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                        {isSidebarOpen && <span>Help &amp; Support</span>}
                    </a>

                </nav>
            </div>

            {/* Logout Button */}
            <div className="p-2 border-t border-[#333333]">
                <button className="inline-flex items-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 h-10 px-4 py-2 w-full justify-start gap-3 hover:bg-[#333333] hover:text-white active:bg-[#333333] active:text-white text-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-log-out"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                    {isSidebarOpen && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default DashboardSidebar;
