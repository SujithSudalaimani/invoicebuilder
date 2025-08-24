import { money } from '../utils/format'


export default function TotalsPanel({ subTotal, tax, total, taxRate, setTaxRate }) {
return (
<div className="bg-white p-4 rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium">Tax Rate (%)</label>
<input type="number" className="mt-1 w-full rounded-xl border p-2" value={taxRate} onChange={e=>setTaxRate(e.target.value)} />
</div>
<div className="md:text-right space-y-1">
<div>Subtotal: <span className="font-semibold">{money(subTotal)}</span></div>
<div>Tax: <span className="font-semibold">{money(tax)}</span></div>
<div className="text-lg">Grand Total: <span className="font-bold">{money(total)}</span></div>
</div>
</div>
)
}