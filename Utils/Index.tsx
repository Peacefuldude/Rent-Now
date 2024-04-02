export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "134a2c3be5msh94dde51244b2bebp112e9fjsn7a1d8c64ec3e",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
}
