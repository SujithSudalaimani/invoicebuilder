import { forwardRef } from 'react'
import { money } from '../utils/format'
import { lineAmount } from '../utils/calc'

const InvoicePreview = forwardRef(({ client, items, taxRate }, ref) => {
  const subTotal = items.reduce((s, it) => s + lineAmount(it.quantity, it.rate), 0)
  const tax = (subTotal * (Number(taxRate) || 0)) / 100
  const total = subTotal + tax

  return (
<div
  ref={ref}
  className="bg-white p-6 rounded-2xl shadow print:shadow-none print:p-0 print:m-0 w-full"
>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">INVOICE</h2>
          <p className="text-sm text-gray-600">#{client.invoiceNumber}</p>
        </div>
        <div className="text-right text-sm">
          <p className="font-medium">Bill To</p>
          <p>{client.name || '—'}</p>
          <p className="whitespace-pre-line">{client.address || ''}</p>
          <p>Date: {client.date}</p>
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full text-sm border-t border-b">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="text-left p-2">Description</th>
            <th className="text-right p-2">Qty</th>
            <th className="text-right p-2">Rate</th>
            <th className="text-right p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id} className="border-b last:border-b-0">
              <td className="p-2">{it.description || '—'}</td>
              <td className="p-2 text-right">{it.quantity || 0}</td>
              <td className="p-2 text-right">{money(Number(it.rate) || 0)}</td>
              <td className="p-2 text-right">{money(lineAmount(it.quantity, it.rate))}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="mt-6 flex flex-col items-end gap-1">
        <div>Subtotal: <span className="font-semibold">{money(subTotal)}</span></div>
        <div>Tax ({taxRate}%): <span className="font-semibold">{money(tax)}</span></div>
        <div className="text-lg">Grand Total: <span className="font-bold">{money(total)}</span></div>
      </div>
    </div>
  )
})

export default InvoicePreview
