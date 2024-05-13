import React from 'react'

const Print = ({ children }) => {

  const imprimir = () => {
    const html2pdf = require('html2pdf.js');
    const content = document.getElementById('imprimir');

    const opt = {
      margin: [0, 0],
      filename: `Presupuesto.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'em', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(content).set(opt).save();

  }


  return (
    <>
      <div id="imprimir">{children}</div>
      <button onClick={() => { imprimir() }}> click</button>

    </>
  )
}

export default Print