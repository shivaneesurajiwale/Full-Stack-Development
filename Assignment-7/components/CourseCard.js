function CourseCard({ course, onGiveFeedback }) {
    try {
        return (
            <div className="card p-6 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-md" data-name="course-card" data-file="components/CourseCard.js">
                <div className="flex-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                        <i className="icon-book text-2xl text-[var(--primary-color)]"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-snug">
                        {course.name}
                    </h3>
                    <div className="flex items-center text-slate-500 mb-6">
                        <i className="icon-user text-sm mr-2"></i>
                        <span className="text-sm">{course.faculty}</span>
                    </div>
                </div>
                <button 
                    onClick={() => onGiveFeedback(course)}
                    className="w-full py-2.5 bg-slate-50 text-[var(--primary-color)] font-medium rounded-lg border border-slate-200 hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all duration-200"
                >
                    Give Feedback
                </button>
            </div>
        );
    } catch (error) {
        console.error('CourseCard error:', error);
        return null;
    }
}