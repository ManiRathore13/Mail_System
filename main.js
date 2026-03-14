// Auth Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const submitBtn = e.target.querySelector('button[type="submit"]');

            // Simulate loading state
            submitBtn.innerHTML = `
                <svg class="btn-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
            `;
            submitBtn.disabled = true;

            setTimeout(() => {
                // Simulate login validation
                if (email === 'test@odnest.com' && password === 'password') {
                    window.location.href = 'dashboard.html';
                } else if (email && password) {
                    // For demo purposes, any non-empty credential works
                    window.location.href = 'dashboard.html';
                } else {
                    errorMessage.textContent = 'Invalid email or password.';
                    errorMessage.classList.remove('hidden');
                    // Reset button
                    submitBtn.innerHTML = `
                        <span>Log in</span>
                        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    `;
                    submitBtn.disabled = false;
                }
            }, 800);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const submitBtn = e.target.querySelector('button[type="submit"]');
            
            // Simulate loading
            submitBtn.innerHTML = `
                <svg class="btn-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
            `;
            submitBtn.disabled = true;

            setTimeout(() => {
                if (email.endsWith('@odnest.com')) {
                    window.location.href = 'dashboard.html';
                } else {
                    errorMessage.textContent = 'Signup restricted to odNest company members only.';
                    errorMessage.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>Signup restricted to odNest company members only.</span>
                    `;
                    errorMessage.classList.remove('hidden');
                    
                    submitBtn.innerHTML = `
                        <span>Create Account</span>
                        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    `;
                    submitBtn.disabled = false;
                }
            }, 800);
        });
    }
});
