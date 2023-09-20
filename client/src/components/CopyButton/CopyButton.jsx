/* eslint react/prop-types: 0 */
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard'

export default function CopyButton({ text }) {

     const [buttonText, setButtonText] = useState("(copy)");

     return (
          <CopyToClipboard text={text}>
               <p
                    className="copy"
                    onClick={() => {
                         setButtonText("Copied!")
                         setTimeout(() => {
                              setButtonText("(copy)");
                         }, 1200);
                    }}
               ><b>{buttonText}</b></p>
          </CopyToClipboard>
     )
}
