document.addEventListener('DOMContentLoaded', () => {
    // Initialize Dashboard Chart
    const ctx = document.getElementById('deliveryChart');
    if (ctx) {
        // Create subtle gradient for chart fill
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                datasets: [{
                    label: 'Deliveries',
                    data: [0, 0, 0, 0, 0, 0, 0], // Empty state mimicking the screenshot
                    borderColor: '#6366f1',
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointBackgroundColor: '#09090b',
                    pointBorderColor: '#6366f1',
                    pointBorderWidth: 2,
                    pointRadius: 0, // Hidden points by default
                    pointHoverRadius: 4,
                    fill: true,
                    tension: 0.4 // Smooth curves
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: '#18181b',
                        titleColor: '#ffffff',
                        bodyColor: '#a1a1aa',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        intersect: false,
                        mode: 'index',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 4,
                        ticks: {
                            stepSize: 1,
                            color: '#52525b',
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)',
                            drawBorder: false,
                        },
                        border: { display: false }
                    },
                    x: {
                        ticks: {
                            color: '#52525b',
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)',
                            drawBorder: false,
                            borderDash: [5, 5]
                        },
                        border: { display: false }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            }
        });
    }

    // Interactive elements simulation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            
            // Subtle animation effect
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Launch Campaign Button animation
    const launchBtn = document.querySelector('.btn-launch');
    if (launchBtn) {
        launchBtn.addEventListener('click', () => {
            const originalHtml = launchBtn.innerHTML;
            launchBtn.innerHTML = `
                <svg class="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                <span>Preparing...</span>
            `;
            setTimeout(() => {
                launchBtn.innerHTML = originalHtml;
            }, 1000);
        });
    }
});
