/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */


class Projector {
  turnOn() {
    console.log('Proyector encendido')
  }

  turnOff() {
    console.log('Proyector apagado')
  }

}

class SoundSystem {
  on() {
    console.log('Sistema de sonido encendido')
  }

  off() {
    console.log('Sistema de sonido apagado')
  }
}

class VideoPlayer {
  on() {
    console.log('Video player encendido')
  }

  play(movie: string) {
    console.log(`Reproduciendo ${movie}`)
  }

  stop() {
    console.log('Pelicula detenida')
  }

  off() {
    console.log('Reproductor apagado')
  }
}

class PopcornMaker {
  poppingPopcorn() {
    console.log('Haciendo palomitas')
  }

  stopPoppingPopcorn() {
    console.log('Deteniendo las palomitas')
  }
}

interface HomeTheaterFacadeOptions {
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcornMaker: PopcornMaker;
}

class HomeTeatherFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornMaker: PopcornMaker;

  constructor({projector, soundSystem, videoPlayer, popcornMaker}: HomeTheaterFacadeOptions) {
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
    this.popcornMaker = popcornMaker;
  }

  watchMovie(movie:string) {
    console.log('Preparando para ver las peliculas');
    this.projector.turnOn();
    this.soundSystem.on();
    this.popcornMaker.poppingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);

    console.log('Disfrute la pelicula')
  }

  endWatchingMovie() {
    console.log('Preparando para detener la pelicula')
    this.projector.turnOff();
    this.soundSystem.off();
    this.popcornMaker.stopPoppingPopcorn();
    this.videoPlayer.stop();
    this.videoPlayer.off();

    console.log('Sistema apagado')

  }

}

async function main() {
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const popcornMaker = new PopcornMaker();
  const videoPlayer = new VideoPlayer();

  const theater = new HomeTeatherFacade({projector, soundSystem, popcornMaker, videoPlayer})

  theater.watchMovie('Interestelar en IMAX 8k');
  await new Promise(r => setTimeout(r, 3000))
  theater.endWatchingMovie()
}

main();
