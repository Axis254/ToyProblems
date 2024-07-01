function checkSpeed() {
    // Retrieve the speed from the input field and convert it to an integer
    const speed = parseInt(document.getElementById('speed').value);

    // Define constants for the speed limit, kilometers per demerit point, and maximum demerit points
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    // Initialize the result variable
    let result;

    // Check if the speed is below the speed limit
    if (speed < speedLimit) {
        // If speed is below the limit, set result to 'Ok'
        result = 'Ok';
    } else {
        // Calculate the number of demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        // Check if the number of demerit points exceeds the maximum allowed
        if (demeritPoints > maxDemeritPoints) {
            // If demerit points exceed the maximum, set result to 'License suspended'
            result = 'License suspended';
        } else {
            // If demerit points are within the allowed limit, set result to the number of points
            result = `Points: ${demeritPoints}`;
        }
    }

    // Display the result in the result element
    document.getElementById('result').textContent = result;
}
