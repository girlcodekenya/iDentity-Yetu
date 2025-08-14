document.addEventListener("DOMContentLoaded", function () {
  console.log("Font Awesome icons loaded");
});

// Global state
let cartCount = 0;

/* ---------------------------
     Quiz functions
     --------------------------- */
let currentQ = 1;
let totalScore = 0;
let userAnswers = {};

// Mobile menu toggle functionality
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");

      // Toggle menu icon
      const icon = mobileMenuBtn.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fas fa-bars";
      } else {
        icon.className = "fas fa-times";
      }
    });

    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        const icon = mobileMenuBtn.querySelector("i");
        icon.className = "fas fa-bars";
      });
    });
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Cart functionality
function updateCartCount() {
  const cartCountElements = document.querySelectorAll(
    "#cart-count, #mobile-cart-count"
  );
  cartCountElements.forEach((element) => {
    if (element) {
      element.textContent = cartCount;
    }
  });
}

function setupCartButtons() {
  const cartButtons = document.querySelectorAll(".cart-btn, .mobile-cart-btn");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Cart functionality would be implemented here");
    });
  });
}

// Hero button functionality
function setupHeroButtons() {
  const primaryBtn = document.querySelector(".btn-primary");
  const secondaryBtn = document.querySelector(".btn-secondary");

  if (primaryBtn) {
    primaryBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecting to ID registration process...");
    });
  }

  if (secondaryBtn) {
    secondaryBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecting to movement registration...");
    });
  }
}

// Ticker functionality
function setupTicker() {
  const tickerLink = document.querySelector(".ticker-link");
  if (tickerLink) {
    tickerLink.addEventListener("click", function () {
      alert("Opening full event map...");
    });
  }
}

// Navbar background on scroll
function setupScrollEffects() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Initialize page animations
function setupPageAnimations() {
  // Add fade-in animation to main sections
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(section);
  });
}

// Error handling
function setupErrorHandling() {
  window.addEventListener("error", function (e) {
    console.error("JavaScript error:", e.error);
  });

  // Handle image loading errors
  document.addEventListener(
    "error",
    function (e) {
      if (e.target.tagName === "IMG") {
        e.target.src =
          "https://via.placeholder.com/300x150/059669/ffffff?text=Image+Not+Available";
        e.target.alt = "Image not available";
      }
    },
    true
  );
}

// Main initialization function
function initializePage() {
  setupMobileMenu();
  setupSmoothScrolling();
  setupCartButtons();
  setupHeroButtons();
  setupTicker();
  setupScrollEffects();
  setupPageAnimations();
  setupErrorHandling();
  updateCartCount();
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializePage();

  // Font Awesome loads automatically, no additional initialization needed
  console.log("Page initialized with Font Awesome icons");
});

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* DONATE PAGE SCRIPT */
document.addEventListener("DOMContentLoaded", function () {
  const mpesaForm = document.querySelector("#mpesa-donate-form");

  if (mpesaForm) {
    mpesaForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const phone = document.querySelector("#mpesa-phone").value.trim();
      const amount = parseFloat(document.querySelector("#mpesa-amount").value);

      if (amount < 1) {
        alert("Minimum donation is 1 KES.");
        return;
      }

      // Placeholder STK Push simulation
      alert(`STK Push sent to ${phone} for KES ${amount}.
(Integration with Safaricom API goes here.)`);

      mpesaForm.reset();
    });
  }
});

/* EVENTS PAGE */
// Simple search functionality
      document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const eventCards = document.querySelectorAll('.event-card');
        
        eventCards.forEach(card => {
          const text = card.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });

      // Filter functionality
      document.getElementById('countySelect').addEventListener('change', function(e) {
        // Add your county filtering logic here
        console.log('County filter:', e.target.value);
      });

      document.getElementById('constSelect').addEventListener('change', function(e) {
        const filterValue = e.target.value;
        const eventCards = document.querySelectorAll('.event-card');
        
        eventCards.forEach(card => {
          const statusBadge = card.querySelector('.status-badge');
          if (filterValue === '') {
            card.style.display = 'block';
          } else if (filterValue === 'upcoming' && statusBadge.textContent.toLowerCase().includes('upcoming')) {
            card.style.display = 'block';
          } else if (filterValue === 'completed' && statusBadge.textContent.toLowerCase().includes('completed')) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });

      // Mobile menu toggle
      document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        // Add mobile menu functionality here
        console.log('Mobile menu clicked');
      });

/* ---------------------------
     Quiz functions
     --------------------------- */

function startQuiz() {
  document.getElementById("quiz").classList.add("show");
  document.querySelector(".quiz-btn").style.display = "none";
  document.getElementById("description").style.display = "none";
  reset();
}

function selectAnswer(qNum, element, isCorrect) {
  // Clear previous selections
  const question = document.getElementById("q" + qNum);
  const options = question.querySelectorAll(".answer-option");
  options.forEach((opt) => opt.classList.remove("selected"));

  // Select current option
  element.classList.add("selected");

  // Store answer
  userAnswers[qNum] = isCorrect;

  // Enable next button
  const nextBtn = document.getElementById("next" + qNum);
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function nextQuestion(qNum) {
  document.getElementById("q" + qNum).classList.remove("active");
  if (qNum < 5) {
    currentQ = qNum + 1;
    document.getElementById("q" + currentQ).classList.add("active");
  } else {
    showResults();
  }
}

function prevQuestion(qNum) {
  document.getElementById("q" + qNum).classList.remove("active");
  currentQ = qNum - 1;
  document.getElementById("q" + currentQ).classList.add("active");
}

function showResults() {
  document.getElementById("q5").classList.remove("active");

  // Calculate score
  totalScore = 0;
  for (let i = 1; i <= 5; i++) {
    if (userAnswers[i] === true) {
      totalScore++;
    }
  }

  // Show results
  document.getElementById("score").textContent = totalScore + "/5";

  let message = "";
  if (totalScore === 5) {
    message = "Excellent! You have mastered the Constitution!";
  } else if (totalScore >= 3) {
    message = "Good job! You have a solid understanding.";
  } else {
    message = "Keep learning! Review the materials and try again.";
  }

  document.getElementById("msg").textContent = message;
  document.getElementById("results").classList.add("show");
}

function restart() {
  document.getElementById("results").classList.remove("show");
  document.getElementById("quiz").classList.remove("show");
  document.querySelector(".quiz-btn").style.display = "inline-block";
  document.getElementById("description").style.display = "block";
  reset();
}

function reset() {
  currentQ = 1;
  totalScore = 0;
  userAnswers = {};

  // Reset all questions
  for (let i = 1; i <= 5; i++) {
    document.getElementById("q" + i).classList.remove("active");
    document.getElementById("next" + i).disabled = true;

    const options = document
      .getElementById("q" + i)
      .querySelectorAll(".answer-option");
    options.forEach((opt) => opt.classList.remove("selected"));
  }

  // Show first question
  document.getElementById("q1").classList.add("active");
}

// Simple Gallery JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
});

function initializeGallery() {
    const modal = document.getElementById('mediaModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalMedia = document.getElementById('modalMedia');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Gallery item click handlers
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            openModal(this);
        });
    });

    // Modal close handlers
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Keyboard close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function openModal(item) {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        const isVideo = item.querySelector('.video-item');
        
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        if (isVideo) {
            // Create video element
            modalMedia.innerHTML = `
                <video controls autoplay style="max-width: 100%; max-height: 100%;">
                    <source src="${img.src.replace('.jpg', '.mp4')}" type="video/mp4">
                    <p>Video not available</p>
                </video>
            `;
        } else {
            // Show image
            modalMedia.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Stop any playing videos
        const videos = modalMedia.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Donate Page JavaScript Functions

// M-PESA Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const mpesaForm = document.getElementById('mpesa-donate-form');
    const phoneInput = document.getElementById('mpesa-phone');
    const amountInput = document.getElementById('mpesa-amount');
    const submitBtn = mpesaForm?.querySelector('.mpesa-btn');

    // Phone number formatting and validation
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
            
            // Ensure it starts with 07
            if (value.length > 0 && !value.startsWith('07')) {
                if (value.startsWith('7')) {
                    value = '0' + value;
                } else if (value.startsWith('2547')) {
                    value = '0' + value.substring(3);
                } else if (value.length > 2) {
                    value = '07' + value.substring(2);
                }
            }
            
            // Limit to 10 digits
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            
            e.target.value = value;
            
            // Validate phone number format
            const isValid = /^07[0-9]{8}$/.test(value);
            if (value.length === 10 && !isValid) {
                e.target.setCustomValidity('Please enter a valid Kenyan mobile number (07XXXXXXXX)');
            } else {
                e.target.setCustomValidity('');
            }
        });

        // Real-time validation feedback
        phoneInput.addEventListener('blur', function(e) {
            const value = e.target.value;
            if (value && !/^07[0-9]{8}$/.test(value)) {
                e.target.classList.add('error');
                showNotification('Please enter a valid phone number (07XXXXXXXX)', 'error');
            } else {
                e.target.classList.remove('error');
            }
        });
    }

    // Amount formatting
    if (amountInput) {
        amountInput.addEventListener('input', function(e) {
            const value = parseInt(e.target.value);
            if (value < 1 && e.target.value !== '') {
                e.target.setCustomValidity('Minimum amount is 1 KES');
            } else {
                e.target.setCustomValidity('');
            }
        });
    }

    // Form submission
    if (mpesaForm) {
        mpesaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = phoneInput.value;
            const amount = parseInt(amountInput.value);
            
            // Validation
            if (!phone || !/^07[0-9]{8}$/.test(phone)) {
                showNotification('Please enter a valid phone number (07XXXXXXXX)', 'error');
                phoneInput.focus();
                return;
            }
            
            if (!amount || amount < 1) {
                showNotification('Please enter a valid amount (minimum 1 KES)', 'error');
                amountInput.focus();
                return;
            }
            
            // Simulate M-PESA STK push
            processMpesaDonation(phone, amount, submitBtn);
        });
    }

    // Amount suggestion clicks
    const amountTags = document.querySelectorAll('.amount-tag');
    amountTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            amountTags.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            this.classList.add('active');
        });
    });
});

// Process M-PESA Donation
function processMpesaDonation(phone, amount, button) {
    // Set loading state
    button.classList.add('loading');
    button.disabled = true;
    
    // Simulate API call to M-PESA
    // In real implementation, this would be a call to your backend
    setTimeout(() => {
        // Simulate successful STK push
        const success = Math.random() > 0.2; // 80% success rate for demo
        
        button.classList.remove('loading');
        button.disabled = false;
        
        if (success) {
            showNotification(
                `STK push sent to ${phone}. Please check your phone and enter your M-PESA PIN to complete the donation of KES ${amount.toLocaleString()}.`,
                'success',
                8000
            );
            
            // Reset form after successful submission
            setTimeout(() => {
                document.getElementById('mpesa-donate-form').reset();
            }, 1000);
            
            // Track donation attempt (for analytics)
            trackDonationAttempt('mpesa', amount);
            
        } else {
            showNotification(
                'Failed to send STK push. Please check your phone number and try again.',
                'error'
            );
        }
    }, 2000); // Simulate 2-second processing time
}

// Notification System
function showNotification(message, type = 'info', duration = 5000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Set icon based on type
    let icon = '';
    switch(type) {
        case 'success':
            icon = 'fas fa-check-circle';
            break;
        case 'error':
            icon = 'fas fa-exclamation-circle';
            break;
        case 'warning':
            icon = 'fas fa-exclamation-triangle';
            break;
        default:
            icon = 'fas fa-info-circle';
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icon}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, duration);
}

// Track donation attempts (for analytics)
function trackDonationAttempt(method, amount) {
    // In real implementation, this would send data to your analytics service
    console.log(`Donation attempt tracked: ${method}, KES ${amount}`);
    
    // Example: Send to Google Analytics, Facebook Pixel, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', 'donation_attempt', {
            'event_category': 'donations',
            'event_label': method,
            'value': amount
        });
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES'
    }).format(amount);
}

// Smooth scroll to donation section
function scrollToDonation() {
    const donationSection = document.querySelector('.donation-methods');
    if (donationSection) {
        donationSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Every.org donation tracking
window.addEventListener('message', function(event) {
    // Listen for Every.org donation completion
    if (event.origin === 'https://embeds.every.org') {
        if (event.data.type === 'DONATION_COMPLETE') {
            const amount = event.data.amount || 0;
            showNotification(
                `Thank you for your donation! Your contribution of ${amount} helps us continue our mission.`,
                'success',
                10000
            );
            
            // Track Every.org donation
            trackDonationAttempt('every_org', amount * 100); // Convert to KES approximately
            
            // Optional: redirect to thank you page
            setTimeout(() => {
                // window.location.href = 'thank-you.html';
            }, 3000);
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe donation cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const donationCards = document.querySelectorAll('.donation-card');
    const impactCards = document.querySelectorAll('.impact-card');
    
    donationCards.forEach(card => {
        observer.observe(card);
    });
    
    impactCards.forEach(card => {
        observer.observe(card);
    });
});

// Form validation helpers
function validatePhoneNumber(phone) {
    // Kenyan mobile number validation
    const kenyaMobileRegex = /^(?:\+254|254|0)?([71][0-9]{8})$/;
    return kenyaMobileRegex.test(phone);
}

function formatPhoneNumber(phone) {
    // Format to standard Kenyan format (07XXXXXXXX)
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.startsWith('254')) {
        return '0' + cleaned.substring(3);
    } else if (cleaned.startsWith('07') || cleaned.startsWith('01')) {
        return cleaned;
    } else if (cleaned.length === 9 && (cleaned.startsWith('7') || cleaned.startsWith('1'))) {
        return '0' + cleaned;
    }
    
    return phone;
}

// Donation form enhancements
function enhanceDonationForms() {
    const forms = document.querySelectorAll('.donate-form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input');
        
        inputs.forEach(input => {
            // Add floating label effect
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input has value on page load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    });
}

// Call enhancement function when DOM is loaded
document.addEventListener('DOMContentLoaded', enhanceDonationForms);

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Close notification with Escape key
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.remove();
        });
    }
});

// Donation progress tracker (optional)
function updateDonationProgress(currentAmount, targetAmount) {
    const progressBar = document.querySelector('.donation-progress-bar');
    const progressText = document.querySelector('.donation-progress-text');
    
    if (progressBar && progressText) {
        const percentage = Math.min((currentAmount / targetAmount) * 100, 100);
        progressBar.style.width = percentage + '%';
        progressText.textContent = `${formatCurrency(currentAmount)} of ${formatCurrency(targetAmount)} raised (${Math.round(percentage)}%)`;
    }
}

// Volunteer Page JavaScript

// Initialize volunteer page functionality
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('volunteer-form')) {
        initializeVolunteerPage();
    }
});

function initializeVolunteerPage() {
    populateCounties();
    setupCountyConstituencyHandler();
    setupRoleSelectionLimit();
    setupFormSubmission();
}

// Limit role selection to maximum 2
function setupRoleSelectionLimit() {
    const roleCheckboxes = document.querySelectorAll('input[name="roles"]');
    const warningElement = createWarningElement();
    
    roleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedRoles = document.querySelectorAll('input[name="roles"]:checked');
            
            if (checkedRoles.length > 2) {
                this.checked = false;
                showRoleWarning(warningElement);
            } else {
                hideRoleWarning(warningElement);
            }
        });
    });
}

function createWarningElement() {
    const roleGroup = document.querySelector('.checkbox-group');
    const warning = document.createElement('div');
    warning.className = 'role-limit-warning';
    warning.innerHTML = '<i class="fas fa-exclamation-triangle"></i> You can select maximum 2 roles';
    roleGroup.parentNode.appendChild(warning);
    return warning;
}

function showRoleWarning(element) {
    element.classList.add('show');
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000);
}

function hideRoleWarning(element) {
    element.classList.remove('show');
}

// Handle form submission with Brevo integration
function setupFormSubmission() {
    const form = document.getElementById('volunteer-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const formData = collectFormData();
        
        try {
            setLoadingState(true);
            await submitToBrevo(formData);
            showSuccessMessage();
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            showErrorMessage('Failed to submit registration. Please try again.');
        } finally {
            setLoadingState(false);
        }
    });
}

function validateForm() {
    const requiredFields = [
        'fullName', 'phone', 'email', 'ageBracket', 'county', 
        'constituency', 'registeredVoter', 'availability', 'reason', 'whyJoining'
    ];
    
    let isValid = true;
    
    // Check required fields
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
        }
    });
    
    // Check email format
    const email = document.getElementById('email').value;
    if (email && !isValidEmail(email)) {
        showFieldError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
    }
    
    // Check phone format (Kenya format)
    const phone = document.getElementById('phone').value;
    if (phone && !isValidKenyanPhone(phone)) {
        showFieldError(document.getElementById('phone'), 'Please enter a valid Kenyan phone number (e.g., 0712345678)');
        isValid = false;
    }
    
    // Check if at least one role is selected
    const roles = document.querySelectorAll('input[name="roles"]:checked');
    if (roles.length === 0) {
        showErrorMessage('Please select at least one role preference');
        isValid = false;
    }
    
    // Check if all pledges are checked
    const pledges = document.querySelectorAll('input[name="pledges"]');
    const checkedPledges = document.querySelectorAll('input[name="pledges"]:checked');
    if (checkedPledges.length !== pledges.length) {
        showErrorMessage('Please accept all commitments to proceed');
        isValid = false;
    }
    
    return isValid;
}

function collectFormData() {
    const form = document.getElementById('volunteer-form');
    const formData = new FormData(form);
    
    // Collect selected roles
    const roles = [];
    document.querySelectorAll('input[name="roles"]:checked').forEach(checkbox => {
        roles.push(checkbox.value);
    });
    
    // Collect pledges
    const pledges = [];
    document.querySelectorAll('input[name="pledges"]:checked').forEach(checkbox => {
        pledges.push(checkbox.value);
    });
    
    const data = {
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        ageBracket: formData.get('ageBracket'),
        county: formData.get('county'),
        constituency: formData.get('constituency'),
        registeredVoter: formData.get('registeredVoter'),
        availability: formData.get('availability'),
        reason: formData.get('reason'),
        whyJoining: formData.get('whyJoining'),
        roles: roles,
        pledges: pledges,
        submissionDate: new Date().toISOString()
    };
    
    return data;
}

async function submitToBrevo(data) {
    // Brevo API integration
    // Replace with your Brevo API endpoint and key
    const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';
    const BREVO_API_KEY = 'YOUR_BREVO_API_KEY'; 
    
    const payload = {
        email: data.email,
        attributes: {
            FIRSTNAME: data.fullName.split(' ')[0],
            LASTNAME: data.fullName.split(' ').slice(1).join(' '),
            SMS: data.phone,
            AGE_BRACKET: data.ageBracket,
            COUNTY: data.county,
            CONSTITUENCY: data.constituency,
            REGISTERED_VOTER: data.registeredVoter,
            AVAILABILITY: data.availability,
            REASON: data.reason,
            WHY_JOINING: data.whyJoining,
            ROLES: data.roles.join(', '),
            PLEDGES: data.pledges.join(', ')
        },
        listIds: [1], // Replace with Brevo list ID
        updateEnabled: true
    };
    
    // For demo purposes, simulate the API call
    // In production, uncomment and use the actual API call:
    /*
    const response = await fetch(BREVO_API_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        throw new Error('Failed to submit to Brevo');
    }
    */
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data that would be sent to Brevo:', payload);
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidKenyanPhone(phone) {
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    return phoneRegex.test(phone);
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    field.style.borderColor = '#e74c3c';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '#e1e5e9';
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message show';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Registration Successful!</strong> 
        Thank you for joining Identity Yetu. You will receive a confirmation email and WhatsApp group invitation shortly.
    `;
    
    const form = document.getElementById('volunteer-form');
    form.parentNode.insertBefore(message, form);
    
    // Scroll to success message
    message.scrollIntoView({ behavior: 'smooth' });
    
    // Remove message after 10 seconds
    setTimeout(() => {
        message.remove();
    }, 10000);
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message show';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <strong>Error:</strong> ${message}
    `;
    
    const form = document.getElementById('volunteer-form');
    form.parentNode.insertBefore(errorDiv, form);
    
    // Remove message after 8 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 8000);
}

function setLoadingState(loading) {
    const form = document.getElementById('volunteer-form');
    const submitButton = form.querySelector('.donate-submit-btn');
    
    if (loading) {
        form.classList.add('form-loading');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    } else {
        form.classList.remove('form-loading');
        submitButton.innerHTML = '<i class="fas fa-hand-holding-heart"></i> Join the Movement';
    }
}