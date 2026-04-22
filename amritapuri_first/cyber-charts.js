 const cyberChartConfig = {
    colors: {
        primary: '#00ff8c', // Neon green
        secondary: '#0a84ff', // Electric blue
        accent: '#ff00ff', // Magenta
        danger: '#ff3b30', // Bright red
        warning: '#ffcc00', // Bright yellow
        success: '#34c759', // Green
        neutral: '#8e8e93', // Gray
        grid: 'rgba(0, 255, 140, 0.1)',
        text: '#ffffff',
        background: 'rgba(18, 18, 18, 0.7)'
    },
    
    emotionCategories: {
        'stress': { color: '#ffcc00', label: 'Stressful' },
        'drunk': { color: '#8e8e93', label: 'Drunk' },
        'prank': { color: '#0a84ff', label: 'Prank' },
        'abusive': { color: '#ff3b30', label: 'Abusive' },
        'pain': { color: '#34c759', label: 'Pain' },
        'mental': { color: '#ff00ff', label: 'Mental Condition' },
        'neutral': { color: '#b4a0ff', label: 'Neutral' }
    },
    
    commonOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff',
                    font: {
                        family: "'Share Tech Mono', monospace",
                        size: 11
                    },
                    boxWidth: 15,
                    padding: 15
                }
            },
            title: {
                color: '#00ff8c',
                font: {
                    family: "'Orbitron', sans-serif",
                    size: 16,
                    weight: 'bold'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                titleColor: '#00ff8c',
                bodyColor: '#ffffff',
                borderColor: '#00ff8c',
                borderWidth: 1,
                titleFont: {
                    family: "'Orbitron', sans-serif",
                    size: 14
                },
                bodyFont: {
                    family: "'Share Tech Mono', monospace",
                    size: 12
                },
                padding: 12,
                boxPadding: 6,
                usePointStyle: true,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += Math.round(context.raw) + '%';
                        return label;
                    }
                }
            }
        }
    },
    
    doughnutOptions: {
        cutout: '70%',
        borderWidth: 2,
        borderColor: '#121212',
        hoverBorderColor: '#00ff8c',
        hoverBorderWidth: 4,
        hoverOffset: 5
    },
    
    radarOptions: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    display: false,
                    stepSize: 20
                },
                pointLabels: {
                    color: '#ffffff',
                    font: {
                        family: "'Share Tech Mono', monospace",
                        size: 11
                    }
                },
                grid: {
                    color: 'rgba(0, 255, 140, 0.2)',
                    circular: true
                },
                angleLines: {
                    color: 'rgba(0, 255, 140, 0.3)'
                }
            }
        },
        elements: {
            point: {
                radius: 4,
                hoverRadius: 6,
                backgroundColor: '#00ff8c',
                borderColor: '#000000',
                borderWidth: 1,
                hoverBorderColor: '#ffffff'
            },
            line: {
                tension: 0.2,
                borderWidth: 2,
                borderColor: '#00ff8c',
                backgroundColor: 'rgba(0, 255, 140, 0.3)',
                fill: true
            }
        }
    },
    
    lineOptions: {
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 255, 140, 0.1)',
                    borderColor: 'rgba(0, 255, 140, 0.3)',
                    tickColor: 'rgba(0, 255, 140, 0.3)'
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        family: "'Share Tech Mono', monospace",
                        size: 10
                    }
                },
                title: {
                    display: true,
                    text: 'Time (seconds)',
                    color: '#00ff8c',
                    font: {
                        family: "'Share Tech Mono', monospace",
                        size: 12
                    }
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(0, 255, 140, 0.1)',
                    borderColor: 'rgba(0, 255, 140, 0.3)',
                    tickColor: 'rgba(0, 255, 140, 0.3)'
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        family: "'Share Tech Mono', monospace",
                        size: 10
                    }
                },
                title: {
                    display: true,
                    text: 'Confidence (%)',
                    color: '#00ff8c',
                    font: {
                        family: "'Share Tech Mono', monospace",
                        size: 12
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 2,
                hoverRadius: 5,
                borderWidth: 1
            },
            line: {
                tension: 0.4,
                borderWidth: 2,
                fill: false
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        }
    },
    
    // Chart animations
    animations: {
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 0.2,
            to: 0.4,
            loop: true
        },
        backgroundColor: {
            duration: 2000,
            easing: 'easeInOutQuart',
            from: 'rgba(0, 255, 140, 0.2)',
            to: 'rgba(0, 255, 140, 0.3)',
            loop: true
        }
    },
    
    createGradient: function(ctx, startColor, endColor) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);
        return gradient;
    },
    
    applyCyberTheme: function() {
        Chart.defaults.color = this.colors.text;
        Chart.defaults.borderColor = 'rgba(0, 255, 140, 0.1)';
        Chart.defaults.font.family = "'Share Tech Mono', monospace";
        
        const cyberGridPlugin = {
            id: 'cyberGrid',
            beforeDraw: function(chart) {
                const ctx = chart.ctx;
                const chartArea = chart.chartArea;
                
                if (chart.config.type === 'radar') return;
                
                ctx.save();
                ctx.strokeStyle = 'rgba(0, 255, 140, 0.05)';
                ctx.lineWidth = 1;
                
                for (let i = 0; i < chartArea.width; i += 20) {
                    ctx.beginPath();
                    ctx.moveTo(chartArea.left + i, chartArea.top);
                    ctx.lineTo(chartArea.left + i, chartArea.bottom);
                    ctx.stroke();
                }
                
                for (let i = 0; i < chartArea.height; i += 20) {
                    ctx.beginPath();
                    ctx.moveTo(chartArea.left, chartArea.top + i);
                    ctx.lineTo(chartArea.right, chartArea.top + i);
                    ctx.stroke();
                }
                
                ctx.restore();
            }
        };
        
        const cyberGlowPlugin = {
            id: 'cyberGlow',
            beforeDatasetsDraw: function(chart, args, options) {
                const ctx = chart.ctx;
                
                ctx.shadowColor = 'rgba(0, 255, 140, 0.5)';
                ctx.shadowBlur = 10;
            },
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                ctx.shadowBlur = 0;
            }
        };
        
        Chart.register(cyberGridPlugin);
        Chart.register(cyberGlowPlugin);
    }
};

cyberChartConfig.applyCyberTheme();
