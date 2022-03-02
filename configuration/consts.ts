import { IWordle } from "../dtos/IWordle";

export const WORD_LENGTH = 4;
export const WORD_TRIES = 6;
export const STATE_WRONG = 3;
export const STATE_CLOSE = 2;
export const STATE_SUCCESS = 1;
export const TWITTER_SHARE_TEXT = (score: string) => {
  console.log("score" + score);
  return (
    "https://twitter.com/intent/tweet?text=WordofWordle%3A%0A" +
    score +
    "%0A" +
    "%0A&url=http://worldofwordle.s3-website.eu-west-2.amazonaws.com"
  );
};
export const WHATSAPP_SHARE_TEXT = (score: string) => {
  console.log("score" + score);
  return (
    "whatsapp://send?text= WORD OF WORDLE %0A" +
    score +
    "%0A" +
    "%0Ahttp://worldofwordle.s3-website.eu-west-2.amazonaws.com"
  );
};
