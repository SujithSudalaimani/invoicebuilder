import { useRef, useState } from 'react'
import useInvoice from '../hooks/userInvoice'
import InvoiceHeader from '../components/InvoiceHeader'
import ClientDetailsForm from '../components/ClientDetailsForm'
import LineItemsTable from '../components/LineItemsTable'
import TotalsPanel from '../components/TotalsPanel'
import InvoiceActions from '../components/InvoiceActions'
import InvoicePreview from '../components/InvoicePreview'

export default function InvoiceBuilder() {
  const {
    client, setClient,
    items, addItem, updateItem, removeItem,
    taxRate, setTaxRate,
    subTotal, tax, total,
  } = useInvoice()

  const previewRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="space-y-6">
      <InvoiceHeader />

      <div className="max mx-auto space-y-6">
        {/* Forms section */}
        <ClientDetailsForm client={client} onChange={setClient} />\
        

        <LineItemsTable
          items={items}
          addItem={addItem}
          updateItem={updateItem}
          removeItem={removeItem}
        />

        <TotalsPanel
          subTotal={subTotal}
          tax={tax}
          total={total}
          taxRate={taxRate}
          setTaxRate={setTaxRate}
        />

        {/* Button to open modal */}
        <button
          onClick={() => setShowModal(true)}
          className="rounded-xl bg-black text-white px-6 py-3 shadow hover:opacity-90 cursor-pointer"
        >
          View Invoice
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            {/* Invoice Preview */}
            <InvoicePreview
              ref={previewRef}
              client={client}
              items={items}
              taxRate={taxRate}
            />

            {/* Actions */}
            <div className="mt-4 flex justify-end">
              <InvoiceActions targetRef={previewRef} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
