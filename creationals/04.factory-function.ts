/*
!!Factory function
Es un patron de diseño que nos permite crear objetos o funciones de manera dinamica que serán usados posteriormente en el codigo

Es decir en tiempo de ejecucion y no en tiempo de compilacion.
*/

type Languege = 'es' | 'en' | 'fr'

// i18n
function createGreeter( lang: Languege ) {
  return function ( name: string ) {
    const messages = {
      es: `Hola, ${name}!!`,
      en: `Hello, ${name}!!`,
      fr: `Bonjour, ${name}!!`,
    }
    return console.log(messages[lang])
  }
}

function main() {
  const spanishGreeter = createGreeter('es')
  const englishGreeter = createGreeter('en')
  const frenchGreeter = createGreeter('fr')

  spanishGreeter('Jose');
  englishGreeter('Victor')
  frenchGreeter('Gustavo')
}

// main()

//! Salida esperada
//! Colocar colores de log según el nivel
//* [INFO:2025-10-21:07] Aplicación iniciada correctamente.
//* [WARNING:2025-10-21:07] El uso de memoria está alto.
//* [ERROR:2025-10-21:07] Error de conexión a la base de datos.

import { COLORS } from '../helpers/colors.ts';

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Función fábrica que crea un manejador de logs
type LogLevel = 'info' | 'warn' | 'error';

function createLogger(level: LogLevel) {
  // Retorna una función que recibe el "message" como argumento
  // Completar: implementar el logger con formato y color para cada nivel
  return ( message: string ) => {
    const date = formatDate(new Date())
    const logType = level.toUpperCase()
    const logColor: Record<LogLevel, string> = {
      info: COLORS.green,
      warn: COLORS.yellow,
      error: COLORS.red,
    }
    return console.log(`%c[${logType}: ${date}] ${message}`, logColor[level])
  }
}

// Ejemplo de uso
function main2(): void {
  const infoLogger = createLogger('info');
  const warnLogger = createLogger('warn');
  const errorLogger = createLogger('error');

  infoLogger('Aplicación iniciada correctamente.');
  warnLogger('El uso de memoria está alto.');
  errorLogger('Error de conexión a la base de datos.');
}

main2();
