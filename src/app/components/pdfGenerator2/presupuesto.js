const btn = document.getElementById("pdfOut");
const razonSocialValue = document.getElementById("razonSocial").innerText.trim();
const nPresupuestoValue = document.getElementById("nPresupuesto").innerText.trim();

var element = document.getElementById('mainTable');
var opt = {
    margin: [1, 1],
    filename: `Presupuesto${razonSocialValue}${nPresupuestoValue}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'em', format: 'a4', orientation: 'portrait' }
}

btn.onclick = () => {
    var worker = html2pdf().set(opt).from(element).save();
};
