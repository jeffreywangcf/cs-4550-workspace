// @ts-nocheck

export default function BootstrapGrids() {
  return (
    <div id="wd-tw-grid-system">
      <h2 className="text-2xl font-bold">Grid system</h2>
      <div className="grid grid-cols-2">
        <div className="bg-red-500 text-white">
          <h3 className="text-lg font-semibold">Left half</h3>
        </div>
        <div className="bg-blue-500 text-white">
          <h3 className="text-lg font-semibold">Right half</h3>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-yellow-500">
          <h3 className="text-lg font-semibold">One third</h3>
        </div>
        <div className="col-span-8 bg-green-500 text-white">
          <h3 className="text-lg font-semibold">Two thirds</h3>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-gray-900 text-white">
          <h3 className="text-lg font-semibold">Sidebar</h3>
        </div>
        <div className="col-span-8 bg-gray-600 text-white">
          <h3 className="text-lg font-semibold">Main content</h3>
        </div>
        <div className="col-span-2 bg-cyan-500">
          <h3 className="text-lg font-semibold">Sidebar</h3>
        </div>
      </div>

      <div id="wd-tw-responsive-grids" className="mt-8">
        <h2 className="text-2xl font-bold">Responsive grid system</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="bg-yellow-500">
            <h3 className="text-lg font-semibold">Column A</h3>
          </div>
          <div className="bg-blue-500 text-white">
            <h3 className="text-lg font-semibold">Column B</h3>
          </div>
          <div className="bg-red-500 text-white">
            <h3 className="text-lg font-semibold">Column C</h3>
          </div>
          <div className="bg-green-500 text-white">
            <h3 className="text-lg font-semibold">Column D</h3>
          </div>
        </div>
      </div>

      <div id="wd-tw-responsive-dramatic" className="mt-8">
        <h2 className="text-2xl font-bold">Responsive dramatic grid system</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`p-4 ${getBgClass(i)} text-white`}>
              <h4 className="text-lg font-semibold">{i + 1}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const getBgClass = index => {
  const colors = ["bg-yellow-500", "bg-blue-500", "bg-red-500", "bg-green-500"];
  return colors[index % colors.length];
};
