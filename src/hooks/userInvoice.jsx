import { useMemo, useState } from 'react'


const EMPTY_CLIENT = { name: '', address: '', invoiceNumber: 'INV-001', date: new Date().toISOString().slice(0,10) }
const NEW_ITEM = () => ({ id: crypto.randomUUID(), description: '', quantity: 1, rate: 0 })


export default function useInvoice(initial = {}) {
const [client, setClient] = useState({ ...EMPTY_CLIENT, ...(initial.client || {}) })
const [items, setItems] = useState(initial.items || [NEW_ITEM()])
const [taxRate, setTaxRate] = useState(initial.taxRate ?? 18)


const addItem = () => setItems(prev => [...prev, NEW_ITEM()])
const updateItem = (id, patch) => setItems(prev => prev.map(it => it.id === id ? { ...it, ...patch } : it))
const removeItem = (id) => setItems(prev => prev.filter(it => it.id !== id))


const numbers = useMemo(() => {
const subTotal = items.reduce((sum, it) => sum + (Number(it.quantity)||0) * (Number(it.rate)||0), 0)
const tax = (subTotal * (Number(taxRate)||0)) / 100
const total = subTotal + tax
return { subTotal, tax, total }
}, [items, taxRate])


return {
client, setClient,
items, addItem, updateItem, removeItem,
taxRate, setTaxRate,
...numbers,
}
}