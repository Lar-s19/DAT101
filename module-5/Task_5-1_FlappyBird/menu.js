"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 237, 175); 
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;

    // Whenever Spacebar is pressed starts the game
    this._onKeydown = (e) => {
      if (e.code === "Space") this.spPlayBtnClick();
    };
    window.addEventListener("keydown", this._onKeydown);
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);
    }
    if(this.#spCountDown.value === 0){
      startGame();
      this.#spCountDown.visible = false;
    }
  }

  spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    this.#sfCountDown.play();
    setTimeout(this.countDown.bind(this), 1000);
    this.#spTitle.hidden = true;
    // Removes Spacebar so it doesnt start each time
    window.removeEventListener("keydown", this._onKeydown);
  }

  setSoundMute(aIsMuted) {
    if (aIsMuted) { console.log("Sound muted");
      // Pause the running sound if it exists
      if (this.#sfRunning) {
        this.#sfRunning.pause();
      }
    } else { console.log("Sound unmuted");
      // Play the running sound if it exists
      if (this.#sfRunning) { 
        this.#sfRunning.play();
      }
    }
  }
}