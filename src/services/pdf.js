import html2pdf from "html2pdf.js";

export async function exportInvoice(element) {
  const opt = {
    // margin: 0.5,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      onclone: (doc) => {
        // fallback all oklch to rgb(0,0,0) or black
        doc.querySelectorAll("*").forEach((el) => {
          const color = getComputedStyle(el).color;
          if (color.includes("oklch")) {
            el.style.color = "black";
          }
          const bg = getComputedStyle(el).backgroundColor;
          if (bg.includes("oklch")) {
            el.style.backgroundColor = "white";
          }
        });
      },
    },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  await html2pdf().set(opt).from(element).save();
}
