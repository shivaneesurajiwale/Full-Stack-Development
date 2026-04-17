function Login({ onLogin }) {
    const [prn, setPrn] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!prn.trim() || !password.trim()) {
                setError('Please enter both PRN and password.');
                return;
            }
            if (prn.length < 5) {
                setError('PRN must be at least 5 characters long.');
                return;
            }

            setIsLoading(true);
            setError('');
            const data = await apiRequest('/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    prn: prn.trim(),
                    password: password.trim()
                })
            });
            onLogin(data.prn);
        } catch (err) {
            setError(err.message || 'Unable to login.');
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4" data-name="login-view" data-file="components/Login.js">
            <div className="card w-full max-w-md p-8 shadow-lg">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="icon-book-open text-3xl text-[var(--primary-color)]"></i>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Student Portal Login</h1>
                    <p className="text-slate-500 mt-2">CE Feedback System</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 flex items-center">
                        <i className="icon-circle-alert mr-2"></i>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Student PRN</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="icon-user text-slate-400"></i>
                            </div>
                            <input 
                                type="text" 
                                className="input-field pl-10" 
                                placeholder="Enter your PRN"
                                value={prn}
                                onChange={(e) => setPrn(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="icon-lock text-slate-400"></i>
                            </div>
                            <input 
                                type="password" 
                                className="input-field pl-10" 
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full mt-2 disabled:opacity-70" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login securely'}
                    </button>
                </form>
            </div>
        </div>
    );
}
