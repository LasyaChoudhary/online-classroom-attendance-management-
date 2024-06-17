document.addEventListener("DOMContentLoaded", function () {
    populateClasses();
        showStudentsList();
    // Populate existing attendance data from local storage
    // This data will normally be fetched from a server in a real-world application
});


function populateClasses() {
    // Retrieve classes from local storage
    const savedClasses = JSON.parse
        (localStorage.getItem('classes')) || [];
    const classSelector =
        document.getElementById('classSelector');

    savedClasses.forEach(className => {
        const newClassOption =
            document.createElement('option');
        newClassOption.value = className;
        newClassOption.text = className;
        classSelector.add(newClassOption);
    });
}

function studentLogin() {
    const rollNumber = document.getElementById('rollNumber').value.trim();
    if (!rollNumber) {
        alert('Please enter your roll number.');
        return;
    }

    const attendanceRecord = getAttendanceRecord(rollNumber);
    if (attendanceRecord) {
        displayAttendanceRecord(attendanceRecord);
    } else {
        alert('No attendance record found for the entered roll number.');
    }
}

function getAttendanceRecord(rollNumber) {
    const savedAttendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    return savedAttendanceData.find(record => record.rollNumber === rollNumber);
}

function displayAttendanceRecord(record) {
    document.getElementById('attendanceRecord').style.display = 'block';
    document.getElementById('attendanceDate').innerText = record.date;
    document.getElementById('attendanceStatus').innerText = record.status.charAt(0).toUpperCase() + record.status.slice(1);
}