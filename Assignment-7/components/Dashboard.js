function Dashboard({ prn, onLogout }) {
    const [currentView, setCurrentView] = React.useState('courses'); // 'courses', 'feedback_form', 'college'
    const [selectedCourse, setSelectedCourse] = React.useState(null);

    const courses = [
        { id: 1, name: "Full Stack Development", faculty: "Dr. Rahul Sharma" },
        { id: 2, name: "Operating System", faculty: "Prof. Neha Patil" },
        { id: 3, name: "Design and Analysis of Algorithms", faculty: "Dr. Amit Kulkarni" },
        { id: 4, name: "Software Engineering", faculty: "Prof. Sneha Joshi" },
        { id: 5, name: "Image and Video Processing", faculty: "Dr. Kiran Deshmukh" }
    ];

    const handleGiveFeedback = (course) => {
        setSelectedCourse(course);
        setCurrentView('feedback_form');
    };

    const handleFormSubmitOrCancel = () => {
        setSelectedCourse(null);
        setCurrentView('courses');
    };

    const handleNavChange = (view) => {
        setSelectedCourse(null);
        setCurrentView(view);
    };

    try {
        return (
            <div className="min-h-screen bg-[var(--bg-color)] flex flex-col" data-name="dashboard" data-file="components/Dashboard.js">
                <Navbar 
                    prn={prn} 
                    onLogout={onLogout} 
                    onNavChange={handleNavChange} 
                    currentView={currentView === 'feedback_form' ? 'courses' : currentView} 
                />
                
                <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {currentView === 'courses' && (
                        <div className="animate-fade-in">
                            <div className="mb-8">
                                <h1 className="text-2xl font-bold text-slate-800">Current Semester Courses</h1>
                                <p className="text-slate-600 mt-1">Select a course below to submit your feedback.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.map(course => (
                                    <CourseCard 
                                        key={course.id} 
                                        course={course} 
                                        onGiveFeedback={handleGiveFeedback}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {currentView === 'feedback_form' && selectedCourse && (
                        <div className="animate-fade-in">
                            <CourseFeedbackForm 
                                course={selectedCourse} 
                                onCancel={handleFormSubmitOrCancel}
                                onSubmit={handleFormSubmitOrCancel}
                            />
                        </div>
                    )}

                    {currentView === 'college' && (
                        <div className="animate-fade-in">
                            <CollegeFeedbackForm />
                        </div>
                    )}
                </main>
                
                <footer className="bg-white border-t border-slate-200 mt-auto py-6">
                    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                        &copy; 2026 Department of Computer Engineering. All rights reserved.
                    </div>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('Dashboard error:', error);
        return null;
    }
}