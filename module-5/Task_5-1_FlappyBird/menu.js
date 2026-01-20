"use strict";
import { TSprite, TSpriteButton } from "libSprite";
import { startGame } from "./FlappyBird.mjs";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 237, 175); 
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

    this._onKeydown = (e) => {
      if (e.code === "Space") this.spPlayBtnClick();
    };
    window.addEventListener("keydown", this._onKeydown);
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
  }

  spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    window.removeEventListener("keydown", this._onKeydown);
    
    startGame();
  }
}