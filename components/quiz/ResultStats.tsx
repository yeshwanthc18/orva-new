interface ResultStatsProps {
  ukPercent: number;
  usPercent: number;
}

export function ResultStats({ ukPercent, usPercent }: ResultStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="text-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
        <div className="text-4xl font-bold text-white mb-2">{ukPercent}%</div>
        <div className="text-white/70 font-medium">UK Fit</div>
      </div>
      <div className="text-center p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300">
        <div className="text-4xl font-bold text-white mb-2">{usPercent}%</div>
        <div className="text-white/70 font-medium">US Fit</div>
      </div>
    </div>
  );
}
