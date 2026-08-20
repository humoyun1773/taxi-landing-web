/* ==========================================================================
   TaxiGo - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            
            // If wasn't open, open it
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // 3. Tariff Select Price Estimator
    const tariffSelect = document.getElementById('tariffSelect');
    const priceText = document.getElementById('priceText');

    const basePrices = {
        standard: '15 000 so\'m',
        comfort: '22 000 so\'m',
        business: '38 000 so\'m',
        delivery: '12 000 so\'m'
    };

    if (tariffSelect && priceText) {
        tariffSelect.addEventListener('change', (e) => {
            const selectedTariff = e.target.value;
            priceText.textContent = basePrices[selectedTariff] || '15 000 so\'m';
        });
    }

    // 4. Booking Form Handling
    const bookingForm = document.getElementById('quickBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pickup = document.getElementById('pickupLocation').value;
            const drop = document.getElementById('dropLocation').value;
            const phone = document.getElementById('phoneNumber').value;
            const tariff = tariffSelect.options[tariffSelect.selectedIndex].text;

            alert(`✅ Buyurtmangiz qabul qilindi!\n\n📍 Qayerdan: ${pickup}\n🏁 Qayerga: ${drop}\n🚕 Tarif: ${tariff}\n📞 Telefon: ${phone}\n\nHaydovchi tez orada siz bilan bog'lanadi.`);
            bookingForm.reset();
            priceText.textContent = '15 000 so\'m';
        });
    }

    // 5. Active Link Highlight on Scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
