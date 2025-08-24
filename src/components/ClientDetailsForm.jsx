export default function ClientDetailsForm({ client, onChange }) {
const set = (key, val) => onChange({ ...client, [key]: val })
return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-2xl shadow">
<div>
<label className="block text-sm font-medium">Client Name</label>
<input className="mt-1 w-full rounded-xl border p-2" value={client.name} onChange={e=>set('name', e.target.value)} />
</div>
<div>
<label className="block text-sm font-medium">Invoice #</label>
<input className="mt-1 w-full rounded-xl border p-2" value={client.invoiceNumber} onChange={e=>set('invoiceNumber', e.target.value)} />
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium">Address</label>
<textarea className="mt-1 w-full rounded-xl border p-2" rows={3} value={client.address} onChange={e=>set('address', e.target.value)} />
</div>
<div>
<label className="block text-sm font-medium">Date</label>
<input type="date" className="mt-1 w-full rounded-xl border p-2" value={client.date} onChange={e=>set('date', e.target.value)} />
</div>
</div>
)
}