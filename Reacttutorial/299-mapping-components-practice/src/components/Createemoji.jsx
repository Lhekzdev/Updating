import React from "react";
import Newemoji from "./newEmoji";
function Createemoji(emojiTerm){
    return(
      <Newemoji
      key={emojiTerm.id}
  emoji={emojiTerm.emoji}
  name={emojiTerm.name}
  meaning={emojiTerm.meaning}
   />
    )
  }

  export default Createemoji;