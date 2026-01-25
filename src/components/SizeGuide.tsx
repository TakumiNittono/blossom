import { FC } from 'react';

const SizeGuide: FC = () => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const measurements = [
    { label: 'Chest (A)', xs: '86', s: '91', m: '96', l: '101', xl: '106', xxl: '111' },
    { label: 'Length (B)', xs: '66', s: '68', m: '70', l: '72', xl: '74', xxl: '76' },
    { label: 'Shoulder (C)', xs: '42', s: '44', m: '46', l: '48', xl: '50', xxl: '52' },
  ];

  return (
    <div className="space-y-8">
      {/* Size Chart Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-2 uppercase tracking-wide font-medium">Size</th>
              {sizes.map((size) => (
                <th key={size} className="text-center py-3 px-2 uppercase tracking-wide font-medium">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {measurements.map((measurement, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-2 font-medium">{measurement.label}</td>
                <td className="text-center py-3 px-2">{measurement.xs}cm</td>
                <td className="text-center py-3 px-2">{measurement.s}cm</td>
                <td className="text-center py-3 px-2">{measurement.m}cm</td>
                <td className="text-center py-3 px-2">{measurement.l}cm</td>
                <td className="text-center py-3 px-2">{measurement.xl}cm</td>
                <td className="text-center py-3 px-2">{measurement.xxl}cm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Measurement Diagram */}
      <div className="flex justify-center py-8">
        <div className="relative w-full max-w-md">
          <svg viewBox="0 0 200 300" className="w-full h-auto">
            {/* Simple shirt outline */}
            <rect x="50" y="20" width="100" height="260" fill="none" stroke="black" strokeWidth="2" rx="5" />
            <line x1="50" y1="80" x2="150" y2="80" stroke="black" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="140" x2="150" y2="140" stroke="black" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="200" x2="150" y2="200" stroke="black" strokeWidth="1" strokeDasharray="4,4" />
            
            {/* Labels */}
            <text x="160" y="85" fontSize="10" fill="black">A</text>
            <text x="160" y="145" fontSize="10" fill="black">B</text>
            <text x="30" y="145" fontSize="10" fill="black">C</text>
          </svg>
        </div>
      </div>

      {/* Notes */}
      <div className="text-sm text-gray-600 space-y-2">
        <p>• Measurements are approximate and may vary by ±2cm</p>
        <p>• A: Chest width (measured 1cm below armhole)</p>
        <p>• B: Length (from shoulder to hem)</p>
        <p>• C: Shoulder width (from shoulder seam to shoulder seam)</p>
        <p>• For best fit, measure a garment you already own</p>
      </div>
    </div>
  );
};

export default SizeGuide;
