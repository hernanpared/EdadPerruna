document.getElementById('calculateButton').addEventListener('click', function() {
    const humanAge = parseInt(document.getElementById('humanAge').value);
    const dogSize = document.getElementById('dogSize').value;

    if (isNaN(humanAge) || humanAge < 1) {
        alert("Por favor, introduce una edad válida.");
        return;
    }

    const ageTable = {
        small: [15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
        medium: [15, 24, 28, 32, 36, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87],
        large: [15, 24, 28, 32, 36, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 99],
        giant: [12, 22, 31, 38, 45, 49, 56, 64, 71, 79, 86, 93, 100, 107, 114, 121]
    };

    let dogAge;
    if (humanAge <= 16) {
        dogAge = ageTable[dogSize][humanAge - 1];
    } else {
        const extraYears = humanAge - 16;
        dogAge = ageTable[dogSize][15] + (extraYears * 7); // Assuming 7 human years per year beyond 16
    }

    document.getElementById('result').innerText = `La edad de tu perro en años caninos es: ${dogAge} años.`;

    // Agregar animación a la imagen del perro
    const dogImage = document.getElementById('dogImage');
    dogImage.style.transform = 'rotate(10deg)';

    setTimeout(() => {
        dogImage.style.transform = 'rotate(-10deg)';
    }, 100);

    setTimeout(() => {
        dogImage.style.transform = 'rotate(0deg)';
    }, 200);
});
