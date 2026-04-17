function CourseFeedbackForm({ course, onCancel, onSubmit }) {
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const [feedback, setFeedback] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (rating === 0) {
                alert('Please select a star rating.');
                return;
            }
            
            // Save to localStorage simulation
            const allFeedback = JSON.parse(localStorage.getItem('ce_course_feedback') || '[]');
            allFeedback.push({
                courseId: course.id,
                courseName: course.name,
                rating,
                feedback,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('ce_course_feedback', JSON.stringify(allFeedback));

            setSubmitted(true);
            setTimeout(() => {
                onSubmit();
            }, 1500);
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    if (submitted) {
        return (
            <div className="card p-8 text-center max-w-lg mx-auto mt-8 animate-fade-in" data-name="course-feedback-success" data-file="components/CourseFeedbackForm.js">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="icon-check text-3xl text-green-600"></i>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Feedback Submitted!</h2>
                <p className="text-slate-600">Thank you for your valuable feedback for {course.name}.</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto mt-8" data-name="course-feedback-form" data-file="components/CourseFeedbackForm.js">
            <div className="mb-6 flex items-center">
                <button onClick={onCancel} className="text-slate-500 hover:text-slate-800 mr-4">
                    <i className="icon-arrow-left text-xl"></i>
                </button>
                <h2 className="text-2xl font-bold text-slate-800">Course Feedback</h2>
            </div>

            <div className="card p-6 sm:p-8">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Subject Name</label>
                            <input 
                                type="text" 
                                className="input-field bg-slate-50 text-slate-500 cursor-not-allowed" 
                                value={course.name}
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Faculty Name</label>
                            <input 
                                type="text" 
                                className="input-field bg-slate-50 text-slate-500 cursor-not-allowed" 
                                value={course.faculty}
                                disabled
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className="focus:outline-none transition-transform hover:scale-110"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setRating(star)}
                                >
                                    <i className={`icon-star text-3xl ${
                                        star <= (hoverRating || rating) 
                                        ? 'text-yellow-400 fill-yellow-400' 
                                        : 'text-slate-300'
                                    }`}></i>
                                </button>
                            ))}
                        </div>
                        {rating === 0 && <p className="text-sm text-red-500 mt-1">Please provide a rating.</p>}
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Detailed Feedback (Optional)</label>
                        <textarea 
                            className="input-field min-h-[120px] resize-y"
                            placeholder="Share your thoughts about the teaching methodology, course content, etc."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button 
                            type="button" 
                            onClick={onCancel}
                            className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="btn-primary px-8"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}