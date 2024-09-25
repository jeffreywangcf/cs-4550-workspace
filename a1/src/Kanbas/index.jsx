import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kanbas() {
    return (
        <div id="wd-kanbas" className="flex min-h-screen bg-base-100">
            <aside className="w-1/6 p-4 bg-base-200 shadow-lg">
                <KanbasNavigation />
            </aside>
            <main className="flex-grow p-6">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Account"/>} />
                    <Route path="/Account/*" element={<Account/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                    <Route path="/Courses" element={<Dashboard/>} />
                    <Route path="/Courses/:cid/*" element={<Courses/>} />
                    <Route path="/Calendar" element={<h1 id="wd-calendar" className="text-3xl font-bold">Calendar</h1>} />
                    <Route path="/Inbox" element={<h1 id="wd-inbox" className="text-3xl font-bold">Inbox</h1>} />
                </Routes>
            </main>
        </div>
    );
}

