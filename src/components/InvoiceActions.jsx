import { exportInvoice } from '../services/pdf'
import { useRef } from 'react'


export default function InvoiceActions({ targetRef }) {
const busyRef = useRef(false)
const handleExport = async () => {
if (busyRef.current) return
busyRef.current = true
try { await exportInvoice(targetRef.current) } finally { busyRef.current = false }
}
return (
<div className="flex gap-2">
<button onClick={handleExport} className="rounded-xl bg-black text-white px-4 py-2 shadow hover:opacity-90 cursor-pointer">Export PDF</button>
<button onClick={() => window.print()} className="rounded-xl border px-4 py-2 hover:bg-gray-100 cursor-pointer">Print</button>
</div>
)
}