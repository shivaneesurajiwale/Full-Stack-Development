function Navbar({ prn, onLogout, onNavChange, currentView }) {
    try {
        return (
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50" data-name="navbar" data-file="components/Navbar.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Left: Brand */}
                        <div className="flex items-center cursor-pointer" onClick={() => onNavChange('courses')}>
                            <i className="icon-book-open text-2xl text-[var(--primary-color)] mr-2"></i>
                            <span className="font-bold text-lg hidden sm:block text-slate-800">CE Feedback System</span>
                            <span className="font-bold text-lg sm:hidden text-slate-800">CEFS</span>
                        </div>

                        {/* Middle: Navigation */}
                        <div className="flex items-center space-x-1 sm:space-x-4">
                            <button 
                                onClick={() => onNavChange('courses')}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    currentView === 'courses' 
                                    ? 'bg-blue-50 text-[var(--primary-color)]' 
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                Courses
                            </button>
                            <button 
                                onClick={() => onNavChange('college')}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    currentView === 'college' 
                                    ? 'bg-blue-50 text-[var(--primary-color)]' 
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                College
                            </button>
                        </div>

                        {/* Right: Profile & Logout */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full">
                                <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    {prn.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-slate-700 hidden sm:block">{prn}</span>
                            </div>
                            <button 
                                onClick={onLogout}
                                className="text-slate-400 hover:text-red-500 transition-colors p-2"
                                title="Logout"
                            >
                                <i className="icon-log-out text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar error:', error);
        return null;
    }
}