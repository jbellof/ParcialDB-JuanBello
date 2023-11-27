const apiUrl = 'https://us-east-1.aws.data.mongodb-api.com/app/data-jlcpc/endpoint/data/v1/action/findOne';
const apiKey = 'HhhCNTLBCoQLZuPaEj4JUMxc2jsAFkbS25CVHxPTM2yd2r3crjqczurOuoSBiIQO';

// Función para realizar una solicitud HTTP
async function makeRequest(method, endpoint, data = null) {
    const url = `${apiUrl}/${endpoint}`;
    
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': apiKey,
    };

    const config = {
        method: method,
        headers: headers,
    };

    // Solo incluir el cuerpo (body) si no es una solicitud GET o HEAD
    if (method !== 'GET' && method !== 'HEAD' && data) {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);
    return response.json();
}

// Función para obtener datos (GET)
// Función para obtener datos (GET)
async function getData() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    try {
        const data = await makeRequest('GET', 'findOne/find', { collection: 'nomina', database: 'ParcialDB', dataSource: 'Cluster0' });
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
        console.error('Error al realizar la solicitud:', error);
    }
}

// Función para crear datos (POST)
async function createData() {
    // Implementa la lógica para enviar datos al servidor
}

// Función para actualizar datos (PUT)
async function updateData() {
    // Implementa la lógica para enviar datos al servidor
}

// Función para eliminar datos (DELETE)
async function deleteData() {
    // Implementa la lógica para enviar datos al servidor
}
