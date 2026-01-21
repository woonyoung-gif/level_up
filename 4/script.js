document.addEventListener('DOMContentLoaded', () => {
    
    // --- Admin Login Logic ---
    const loginBtn = document.getElementById('adminLoginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const loginForm = document.getElementById('loginForm');
    const adminIdInput = document.getElementById('adminId');
    const adminPwInput = document.getElementById('adminPw');

    // Open Modal
    loginBtn.addEventListener('click', () => {
        modal.classList.add('active');
        adminIdInput.focus();
    });

    // Close Modal
    const closeModal = () => {
        modal.classList.remove('active');
        loginForm.reset();
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Handle Login Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = adminIdInput.value.trim();
        const pw = adminPwInput.value.trim();

        // Validation Rule: ID (4 English Chars), PW (4 Digits)
        const idRegex = /^[a-zA-Z]{4}$/;
        const pwRegex = /^\d{4}$/;

        if (!idRegex.test(id)) {
            alert('아이디는 영문 4글자여야 합니다.');
            return;
        }

        if (!pwRegex.test(pw)) {
            alert('비밀번호는 숫자 4글자여야 합니다.');
            return;
        }

        // --- Success Simulation ---
        // allow any valid format credentials for this demo
        alert('관리자 로그인 성공!');
        
        // Save session flag
        sessionStorage.setItem('isAdmin', 'true');
        
        // Redirect to Admin Dashboard
        window.location.href = 'admin.html';
    });
});
