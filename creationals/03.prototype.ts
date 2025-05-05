/*
  Patron Prototype:

  Es un patron de diseño creacional que nos permite copiar objetos existentes sin hacer el codigo dependa de sus clases.

  *Es util cuando queremos duplicar el contenido,
  *el titulo y el autor de un documento, por ejemplo o cualquier objeto complejo.

*/


class Document1 {
  public title: string;
  public content: string;
  public author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  clone(): Document1 {
    return new Document1(this.title, this.content, this.author);
  }

  displayInfo(): void {
    console.log(`
      Título: ${this.title}
      Contenido: ${this.content}
      Autor: ${this.author}
    `);
  }


}


function main() {
  const document = new Document1("Mi documento", "Contenido del documento", "Autor del documento");
  console.log({document});
  document.displayInfo();

  const clonedDocument = document.clone();
  console.log({clonedDocument});
  clonedDocument.displayInfo();
}

main();


class Pokemon {
  name: string;
  type: string;
  level: number;
  attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.attacks = attacks;
  }

  clone(): Pokemon {
    return new Pokemon(this.name, this.type, this.level, this.attacks);
  }

  displayInfo(): void {
    console.log(`
      Nombre: ${this.name}
      Tipo: ${this.type}
      Nivel: ${this.level}
      Ataques: ${this.attacks}
    `);
  }

}


function main2() {
  const charmander = new Pokemon("Charmander", "Fuego", 1, ["Llamarada", "Arañazo"]);
  charmander.displayInfo();

  const charmeleon = charmander.clone();
  charmeleon.name = "Charmeleon";
  charmeleon.level = 16;
  charmeleon.attacks.push("Lanzallamas");
  charmeleon.displayInfo();
}

main2();
