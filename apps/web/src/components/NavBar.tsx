import { exo } from "../app/fonts";



export default function NavBar() {
  return (
    <nav>
      <div
        className={`ml-3 mt-3 text-4xl font-bold tracking-tight text-gray-900 ${exo.className}`}
      >
        exness
      </div>
      <div className="border-b border-gray-300 w-full mt-3"></div>
    </nav>
  );
}
