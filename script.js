// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            // Close all FAQs
            faqItems.forEach(faq => faq.classList.remove('active'));
            // Open clicked FAQ if it wasn't open
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
}

// Grant Calculator
function calculateGrant() {
    const form = document.getElementById('calculator-form');
    const result = document.getElementById('calculator-result');
    
    const budget = parseFloat(form.budget.value) || 0;
    const duration = parseInt(form.duration.value) || 0;
    const impact = parseInt(form.impact.value) || 0;
    
    // Simple calculation formula (can be adjusted)
    const baseAmount = budget * 0.7;
    const durationMultiplier = duration <= 12 ? 1 : 1.2;
    const impactBonus = impact * 1000;
    
    const estimatedGrant = (baseAmount * durationMultiplier) + impactBonus;
    
    result.innerHTML = `
        <h3>Estimated Grant Amount</h3>
        <p class="grant-amount">$${estimatedGrant.toLocaleString()}</p>
        <p class="grant-note">This is an estimate based on your inputs. Actual grant amount may vary.</p>
    `;
}

// Animation on Scroll
function initAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });
    
    elements.forEach(element => observer.observe(element));
}

// Application Progress Tracker
function updateProgress(step) {
    const steps = document.querySelectorAll('.process-step');
    steps.forEach((s, index) => {
        if (index < step) {
            s.classList.add('completed');
        } else {
            s.classList.remove('completed');
        }
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initAnimations();
    
    // Init calculator form
    const calculatorForm = document.getElementById('calculator-form');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            calculateGrant();
        });
    }
});