
import { Database } from 'lucide-react';

export function DatabasePlaceholder() {
    return (
        <div className="w-full h-48 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
            <Database className="w-8 h-8 text-emerald-400 mb-2 animate-pulse" />
            <span className="text-xs font-mono text-slate-400">Database Schema Visualizer</span>
        </div>
    );
}