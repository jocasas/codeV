import { Sidebar } from "./compo";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar />
      {children}
      <main className="flex-1 p-4"></main>
    </div>
  );
}
