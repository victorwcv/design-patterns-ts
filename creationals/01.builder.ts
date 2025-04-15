/* Usando el patron builder para crear el ensamblador de una computadora */

class Computer {
  public cpu: string = "not defined";
  public ram: string = "not defined";
  public hdd: string = "not defined";
  public gpu: string = "not defined";

  public displayConfig(): void {
    console.log(
      `
      Configuración de la computadora:
      CPU: ${this.cpu}
      RAM: ${this.ram}
      HDD: ${this.hdd}
      GPU: ${this.gpu}
      `
    );
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  public setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  public setHDD(hdd: string): ComputerBuilder {
    this.computer.hdd = hdd;
    return this;
  }

  public setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  public build(): Computer {
    return this.computer;
  }
}

function main() {
  const computerBuilder = new ComputerBuilder();
  const computer = computerBuilder
    .setCPU("Intel Core i7")
    .setRAM("16GB")
    .setHDD("1TB")
    .setGPU("RTX 3080")
    .build();

  computer.displayConfig();
}

main();
