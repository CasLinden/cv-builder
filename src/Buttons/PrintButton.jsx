import "/src/css/print.css"

export default function PrintButton() {

    const PrintElement = (e) => {
        let cloned = e.cloneNode(true);
        document.body.appendChild(cloned);
        cloned.classList.add("printable");
        window.print();
        document.body.removeChild(cloned);
      }
      
      const printCv = () => {
        PrintElement(document.getElementById("cv"));
      }
      
    return (
        <button className='print-button' onClick={printCv}> Print/Save </button>
    )
}