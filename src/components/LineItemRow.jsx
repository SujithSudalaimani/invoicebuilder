import { lineAmount } from '../utils/calc'


export default function LineItemRow({ item, onChange, onRemove }) {
const set = (key, val) => onChange(item.id, { [key]: val })
const amount = lineAmount(item.quantity, item.rate)
return (
<tr className="border-b">
<td className="p-2 w-[40%]"><input className="w-full p-2 rounded-lg border" placeholder="Description" value={item.description} onChange={e=>set('description', e.target.value)} /></td>
<td className="p-2 w-[15%]"><input type="number" className="w-full p-2 rounded-lg border" value={item.quantity} onChange={e=>set('quantity', e.target.value)} /></td>
<td className="p-2 w-[15%]"><input type="number" className="w-full p-2 rounded-lg border" value={item.rate} onChange={e=>set('rate', e.target.value)} /></td>
<td className="p-2 w-[20%] text-right">{amount.toFixed(2)}</td>
<td className="p-2 w-[10%] text-right">
<button className="text-red-600 hover:underline" onClick={() => onRemove(item.id)}>Remove</button>
</td>
</tr>
)
}