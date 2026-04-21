"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { EGameStatus, startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOver;
  #spMedal;
  #isMuted = false;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 220);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGameScore.digits = 0;
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 200, 150);
    this.#spGetReady.visible = false;
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 180, 150);
    this.#spGameOver.visible = false;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 206, 192);
    this.#spMedal.visible = false;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  getScore(){
    return this.#spGameScore.value;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGetReady.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spGetReady.visible = false;
      this.#sfRunning = new TSoundFile(fnRunning);
      if (!this.#isMuted) {
        this.#sfRunning.play();
      }
      EGameStatus.state = EGameStatus.countDown;
      startGame();
    }
    
  }

  spPlayBtnClick(){
    console.log("Click!");
    this.#spGameScore.value = 0;
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spGameOver.visible = false;
    this.#spMedal.visible = false;
    this.#spGetReady.visible = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!this.#isMuted) {
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }

  setSoundMute(aIsMuted) {
    this.#isMuted = aIsMuted;
    if (aIsMuted) {
      if (this.#sfCountDown) {
        this.#sfCountDown.pause();
      }
      if (this.#sfRunning) {
        this.#sfRunning.pause();
      }
    } else {
      if (this.#sfCountDown) {
        this.#sfCountDown.play();
      }
      if (this.#sfRunning) {
        this.#sfRunning.play();
      }
    }
  }

  showGameOver(aFinalScore = 0) {
    console.log(`Game Over! Final Score: ${aFinalScore}`);
    if (this.#sfRunning) {
      this.#sfRunning.stop();
    }
    this.#spCountDown.visible = false;
    this.#spGetReady.visible = false;
    this.#spGameOver.visible = true;
    this.#spPlayBtn.hidden = false;
    
    // Display medal based on score
    console.log(`Score: ${aFinalScore}, Medal visible: ${aFinalScore >= 1}`);
    if (aFinalScore >= 1) {
      this.#spMedal.visible = true;
      
      let medalType = "";
      if (aFinalScore >= 20) {
        this.#spMedal.index = 0; // Platinum
        medalType = "Platinum";
      } else if (aFinalScore >= 10) {
        this.#spMedal.index = 1; // Gold
        medalType = "Gold";
      } else if (aFinalScore >= 5) {
        this.#spMedal.index = 2; // Silver
        medalType = "Silver";
      } else {
        this.#spMedal.index = 3; // Bronze
        medalType = "Bronze";
      }
      console.log(`Medal awarded: ${medalType} (index ${this.#spMedal.index}) for score ${aFinalScore}`);
    } else {
      this.#spMedal.visible = false;
      console.log("No Score, No medal.");
    }
  }

}