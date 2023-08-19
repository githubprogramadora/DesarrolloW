// Función para simular la selección de un archivo
function seleccionarArchivo() {
    return new Promise(resolve => {
        const files = ['archivo1.mp4', 'archivo2.png', 'archivo3.jpg'];
        const randomIndex = Math.floor(Math.random() * files.length);
        const selectedFile = files[randomIndex];
        
        setTimeout(() => {
            console.log(`Archivo seleccionado: ${selectedFile}`);
            resolve(selectedFile);
        }, 1000); // Simulando la demora de la selección del archivo
    });
}

// Función para simular la verificación de formato
function verificarFormato(nombreArchivo) {
    return new Promise(resolve => {
        const formatosPermitidos = ['.mp4', '.mov'];
        const formatoValido = formatosPermitidos.some(formato => nombreArchivo.endsWith(formato));
        
        setTimeout(() => {
            console.log(`Formato válido: ${formatoValido}`);
            resolve(formatoValido);
        }, 1500); // Simulando la demora de la verificación de formato
    });
}

// Función para simular la verificación de tamaño
function verificarTamaño(nombreArchivo, formatoValido) {
    return new Promise(resolve => {
        // Simulamos que archivos multimedia no deben superar 100MB
        const tamañoValido = formatoValido && Math.random() <= 0.8;
        
        setTimeout(() => {
            console.log(`Tamaño válido: ${tamañoValido}`);
            resolve(tamañoValido);
        }, 2000); // Simulando la demora de la verificación de tamaño
    });
}

// Función para simular la carga del archivo
function cargarArchivo(nombreArchivo, tamañoValido) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (tamañoValido) {
                console.log(`Archivo "${nombreArchivo}" cargado exitosamente.`);
                resolve();
            } else {
                console.log(`Error: No se pudo cargar el archivo "${nombreArchivo}".`);
                reject(new Error(`Error en la carga del archivo "${nombreArchivo}".`));
            }
        }, 2500); // Simulando la demora de la carga del archivo
    });
}

// Manejo de la carga de archivo al hacer clic en el botón
document.getElementById('loadButton').addEventListener('click', async () => {
    try {
        const nombreArchivo = await seleccionarArchivo();
        const formatoValido = await verificarFormato(nombreArchivo);
        const tamañoValido = await verificarTamaño(nombreArchivo, formatoValido);
        await cargarArchivo(nombreArchivo, tamañoValido);
        document.getElementById('status').textContent = 'Archivo cargado exitosamente.';
    } catch (error) {
        document.getElementById('status').textContent = 'Error en la carga del archivo.';
        console.error(error);
    }
});
