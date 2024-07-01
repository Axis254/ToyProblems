function calculateGrade() {
    // Retrieve the marks from the input field and convert it to an integer
    const marks = parseInt(document.getElementById('marks').value);

    // Initialize the grade variable
    let grade;

    // Determine the grade based on the marks
    if (marks > 79) {
        // If marks are greater than 79, the grade is 'A'
        grade = 'A';
    } else if (marks >= 60) {
        // If marks are between 60 and 79 (inclusive), the grade is 'B'
        grade = 'B';
    } else if (marks >= 50) {
        // If marks are between 50 and 59 (inclusive), the grade is 'C'
        grade = 'C';
    } else if (marks >= 40) {
        // If marks are between 40 and 49 (inclusive), the grade is 'D'
        grade = 'D';
    } else {
        // If marks are below 40, the grade is 'E'
        grade = 'E';
    }

    // Display the grade in the result element
    document.getElementById('result').textContent = `The grade is: ${grade}`;
}
