import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const samplePrompts = [
  'What screenings should a 35-year-old consider?',
  'How can I improve heart health this month?',
  'Are my symptoms worth a check-up?',
];

const AISearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    // Mock local inference for demo purposes
    setTimeout(() => {
      const suggestions = [
        `Personalized guidance for: "${query}"`,
        'Consider routine vitals, lipid panel, and lifestyle assessment.',
        'Talk to a licensed clinician if symptoms persist or worsen.'
      ];
      setResults(suggestions);
      setLoading(false);
    }, 800);
  };

  return (
    <section id="ai-search" className="py-20 bg-[#0a0f1a]">
      <div className="container mx-auto px-6 sm:px-10 max-w-5xl">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">Ask our AI about your wellness</h2>
          <p className="mt-3 text-white/70">Natural language search tuned for preventive care and everyday health questions.</p>
        </div>

        <form onSubmit={handleSearch} className="relative">
          <div className="flex items-stretch bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="pl-4 flex items-center text-white/60">
              <Search className="w-5 h-5" />
            </div>
            <input
              className="flex-1 bg-transparent outline-none px-4 py-4 placeholder-white/40"
              placeholder={samplePrompts[Math.floor(Math.random() * samplePrompts.length)]}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-5 text-white font-medium transition flex items-center gap-2"
              disabled={loading}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
            </button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="mt-6 space-y-3">
            {results.map((r, idx) => (
              <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/90">
                {r}
              </div>
            ))}
          </div>
        )}

        <p className="mt-4 text-xs text-white/50">This is informational and not a diagnosis. For medical emergencies, call 911.</p>
      </div>
    </section>
  );
};

export default AISearch;
