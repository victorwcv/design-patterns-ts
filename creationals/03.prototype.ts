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
