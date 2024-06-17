document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const attendanceForm = document.getElementById('attendance');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Dummy authentication for example purposes
            if (email === 'user@example.com' && password === 'password') {
                localStorage.setItem('token', 'dummyToken');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid login credentials');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            // Dummy registration for example purposes
            if (email && password) {
                alert('Registration successful, please login');
                window.location.href = 'index.html';
            } else {
                alert('Registration failed');
            }
        });
    }

    if (attendanceForm) {
        attendanceForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const classId = document.getElementById('classId').value;
            const studentId = document.getElementById('studentId').value;

            // Dummy attendance marking for example purposes
            if (classId && studentId) {
                alert('Attendance marked');
            } else {
                alert('Please provide valid Class ID and Student ID');
            }
        });
    }

    if (window.location.pathname.endsWith('dashboard.html')) {
        showDashboard();
    }
});

function showDashboard() {
    // Fetch dummy classes
    const classes = [
        { id: '1', name: 'c++' },
        { id: '2', name: 'python' },
        { id: '3', name: 'java' }
    ];

    const classesContainer = document.getElementById('classes');
    classesContainer.innerHTML = '';
    classes.forEach(cls => {
        const classElement = document.createElement('div');
        classElement.textContent = `${cls.name} (ID: ${cls.id})`;
        classesContainer.appendChild(classElement);
    });
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}