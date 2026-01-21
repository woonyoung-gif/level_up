document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('worksheetForm');

    // Set default date to today
    const dateInput = document.getElementById('readDate');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Values
        const name = document.getElementById('studentName').value.trim();
        const grade = document.getElementById('studentGrade').value.trim();
        const title = document.getElementById('bookTitle').value.trim();
        const date = document.getElementById('readDate').value;
        const content = document.getElementById('activityContent').value.trim();

        if (!name || !title || !content) {
            alert('필수 항목을 모두 입력해주세요.');
            return;
        }

        // Create Data Object
        const submission = {
            id: Date.now(), // timestamp as unique ID
            name: name,
            grade: grade,
            title: title,
            date: date,
            content: content,
            submittedAt: new Date().toLocaleString()
        };

        // Save to LocalStorage
        // 1. Get existing data
        const existingDataJSON = localStorage.getItem('studentWorksheets');
        let submissions = [];

        if (existingDataJSON) {
            try {
                submissions = JSON.parse(existingDataJSON);
            } catch (err) {
                console.error('Error parsing localStorage', err);
                submissions = [];
            }
        }

        // 2. Add new submission
        submissions.push(submission);

        // 3. Save back
        localStorage.setItem('studentWorksheets', JSON.stringify(submissions));

        // Feedback
        alert('성공적으로 제출되었습니다!');

        // Reset Form
        form.reset();

        // Restore Date
        dateInput.valueAsDate = new Date();

        // Optional: Redirect or just stay
        // window.location.href = 'index.html'; 
    });
});
