
// Filter button Best Product Landing Page
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        
        document.querySelectorAll('.filter-btn').forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter').toLowerCase();
        
        
        document.querySelectorAll('.product-card').forEach(card => {
            if (card.getAttribute('data-filter').toLowerCase() === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
})


// View More ke Product Delay Page
// document.getElementById('btn-view-more').addEventListener('click', function() {
    
//     // Tampilkan section productPageDelay
//     document.getElementById('product-page-delayy').style.display = 'block';
    
//     // Sembunyikan konten utama halaman jika diperlukan
//     document.querySelector('main').style.display = 'none';
    
//     // Tunggu selama durasi delay
//     setTimeout(function() {
//         // Alihkan ke Product Page 2 setelah delay
//         window.location.href = 'ProductsPage2.html';
//     }, 2000); 
// });

// console.log(document.querySelector(".filter-btn"))
document.querySelector(".filter-btn").addEventListener("click", () => {
    let allBtn = document.querySelectorAll(".filter-btn")
    for (let i = 0 ; i < allBtn.length ; i++){
        allBtn[i].classList.remove("active")
    }

    // btn.classList.add("active")
    console.log("tst")
})

// Contact Us Page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;

        const firstName = document.getElementById('first-name').value.trim();
        if (firstName === "") {
            alert('First Name is required');
            isValid = false;
        }

        const lastName = document.getElementById('last-name').value.trim();
        if (lastName === "") {
            alert('Last Name is required');
            isValid = false;
        }

        const email = document.getElementById('email').value.trim();
        if (email === "") {
            alert('Email is required');
            isValid = false;
        }

        const phoneNumber = document.getElementById('phone-number').value.trim();
        if (phoneNumber === "") {
            alert('Phone Number is required');
            isValid = false;
        }

        const inquiryType = document.querySelector('input[name="inquiry-type"]:checked');
        if (!inquiryType) {
            alert('Please select an Inquiry Type');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    });
});


