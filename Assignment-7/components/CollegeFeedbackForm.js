function CollegeFeedbackForm() {
    const [issueType, setIssueType] = React.useState('');
    const [comments, setComments] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const issues = [
        "Infrastructure",
        "WiFi & Internet",
        "Labs & Equipment",
        "Library Facilities",
        "Teaching Quality",
        "Campus Cleanliness",
        "Other"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (!issueType) {
                alert('Please select an issue category.');
                return;
            }
            if (!comments.trim()) {
                alert('Please write your feedback details.');
                return;
            }

            // Save to localStorage simulation
            const allFeedback = JSON.parse(localStorage.getItem('ce_college_feedback') || '[]');
            allFeedback.push({
                issueType,
                comments,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('ce_college_feedback', JSON.stringify(allFeedback));

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setIssueType('');
                setComments('');
            }, 2500);
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-8" data-name="college-feedback" data-file="components/CollegeFeedbackForm.js">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">General College Feedback</h2>
                <p className="text-slate-600 mt-1">Help us improve the campus experience for everyone.</p>
            </div>

            <div className="card p-6 sm:p-8 relative overflow-hidden">
                {submitted && (
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <i className="icon-check text-3xl text-green-600"></i>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Feedback Received</h3>
                        <p className="text-slate-600">Thank you for helping us improve!</p>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                        <div className="relative">
                            <select 
                                className="input-field appearance-none pr-10"
                                value={issueType}
                                onChange={(e) => setIssueType(e.target.value)}
                            >
                                <option value="" disabled>Select an issue category</option>
                                {issues.map(issue => (
                                    <option key={issue} value={issue}>{issue}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                                <i className="icon-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Write your feedback</label>
                        <textarea 
                            className="input-field min-h-[150px] resize-y"
                            placeholder="Please describe the issue or suggestion in detail..."
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="btn-primary px-8 py-2.5 flex items-center">
                            <i className="icon-send mr-2 text-sm"></i>
                            Submit to Administration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}