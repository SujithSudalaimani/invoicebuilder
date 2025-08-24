// import "./app.css";
import InvoiceBuilder from "./pages/InvoiceBuilder";

export default function App() {
  return (
    <div className="min-h-screen bg-cyan-800">
      <div className="mx-auto max-w-6xl p-4 md:p-8">
        <InvoiceBuilder />
      </div>
    </div>
  );
}
