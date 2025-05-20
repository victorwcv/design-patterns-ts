
export class LocalLogger {
  constructor(
    private file: string
  ) {}

  writeLog(message: string): void {
    console.log(`[${this.file} Log] %c${message}`);
  }

  writeError(message: string): void {
    console.log(`[${this.file} Error] %c${message}`);
  }

  writeWarning(message: string): void {
    console.log(`[${this.file} Warning] %c${message}`);
  }
}
