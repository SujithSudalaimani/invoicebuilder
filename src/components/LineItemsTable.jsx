import LineItemRow from './LineItemRow'


export default function LineItemsTable({ items, addItem, updateItem, removeItem }) {
return (
<div className="bg-white p-4 rounded-2xl shadow">
<div className="flex justify-between items-center mb-2">
<h2 className="font-semibold text-lg">Line Items</h2>
<button onClick={addItem} className="rounded-xl border px-3 py-1 hover:bg-gray-100">+ Add Item</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left border-b">
<th className="p-2">Description</th>
<th className="p-2">Qty</th>
<th className="p-2">Rate</th>
<th className="p-2 text-right">Amount</th>
<th className="p-2"></th>
</tr>
</thead>
<tbody>
{items.map(it => (
<LineItemRow key={it.id} item={it} onChange={updateItem} onRemove={removeItem} />
))}
</tbody>
</table>
</div>
</div>
)
}