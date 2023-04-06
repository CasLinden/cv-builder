import React from 'react';
import "/src/css/print.css"

export default function PrintButton() {

    // requires print.css to work
    function printElement(e) {
        let cloned = e.cloneNode(true);
        document.body.appendChild(cloned);
        cloned.classList.add("printable");
        window.print();
        document.body.removeChild(cloned);
      }

      function printCv() {
        printElement(document.getElementById("cv"));
      }
    
    return (
        <button className='print-button' onClick={printCv}> Print/Save </button>
    )
}