"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Navigation items and SVG icons
const navItems = [
    {
        label: "Dashboard",
        href: "/",
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
        ),
    },
    {
        label: "Profile",
        href: "/Profile",
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        label: "Courses",
        href: "/Courses",
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            </svg>
        ),
    },
    {
        label: "Assignments",
        href: "/Assignments",
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="8" height="4" x="8" y="2" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
            </svg>
        ),
    },
    {
        label: "Exams",
        href: "/Exams",
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8M16 13H8M16 17H8" />
            </svg>
        ),
    },
    {
        label: "Attendance",
        href: "/Attendance",
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 2v4M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
            </svg>
        ),
    },
    {
        label: "Fees",
        href: "/Fees",
        icon: (
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
        ),
    },
    {
        label: "Results",
        href: "/Results",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
    },
    {
        label: "Leave Requests",
        href: "/LeaveRequests",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path></svg>
        ),
    },
    {
        label: "Notifications",
        href: "/Notifications",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
        ),
    },
    {
        label: "Help & Support",
        href: "/Help&Support",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
        ),
    }

];

const DashboardSidebar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(true);

    const toggleSidebar = () => setOpen(!open);

    return (
                <div className={`bg-[#1f1e1e] text-[#FFFFFFB2] flex flex-col transition-all border-r border-[#333333] ${open ? "w-64" : "w-20"}`}>
            {/* Header */}
            <div className="flex items-center justify-between h-20 px-4 border-b border-[#333333]">
                {open && (
                    <h1 className="text-xl font-bold text-white">
                        <span className="text-[#FC4F00]">A</span>cademic
                    </h1>
                )}
                <button
                    onClick={toggleSidebar}
                    className="text-white hover:text-[#FFFFFFB2] hover:bg-[#333333] h-11 w-11 rounded-full ml-auto flex items-center justify-center"
                >
                    <svg width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-grow flex flex-col px-4 py-4 space-y-1 text-sm">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? "bg-[#333333] text-white" : "hover:bg-[#333333] hover:text-white"
                                }`}
                        >
                            {item.icon}
                            {open && <span>{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div className="px-4 py-4 border-t border-[#333333]">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-[#333333] hover:text-white">
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" x2="9" y1="12" y2="12" />
                    </svg>
                    {open && <span>Logout</span>}
                </button>
            </div>
        </div>

    );
};

export default DashboardSidebar;
