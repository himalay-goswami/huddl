import logo from "@/assets/logo.jpg";

export function PublicHeader() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Huddl Logo" className="h-10 w-10 object-contain rounded" />
        <h2 className="text-2xl font-bold">Huddl</h2>
      </div>
    </header>
  );
}
