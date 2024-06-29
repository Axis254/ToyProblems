function checkSpeed() {
    const speed = parseInt(document.getElementById('speed').value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
    let result;

    if (speed < speedLimit) {
        result = 'Ok';
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > maxDemeritPoints) {
            result = 'License suspended';
        } else {
            result = `Points: ${demeritPoints}`;
        }
    }

    document.getElementById('result').textContent = result;
}
