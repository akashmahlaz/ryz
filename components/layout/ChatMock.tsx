import React from "react";
import { Plus, Search, Archive, MessageCircle, FileText, Settings, ChevronDown, Paperclip, ArrowUp } from "lucide-react";

const tabs = [
  { label: "Account Audit", active: true },
  { label: "Campaign Creation" },
  { label: "Task Scheduling" },
  { label: "Budget Optimizer" },
  { label: "Keyword Research" },
  { label: "Performance Report" },
];

export default function ChatMock() {
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden bg-[#F7F5F0] shadow-2xl ring-1 ring-black/10">
      {/* Tabs bar */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#EFECE4] border-b border-black/5 overflow-x-auto">
        <div className="flex gap-1.5 pr-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {tabs.map((t) => (
          <div
            key={t.label}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] whitespace-nowrap rounded-t-md ${
              t.active ? "bg-[#F7F5F0] text-black font-medium" : "text-black/60"
            }`}
          >
            <span className="w-2.5 h-2.5 text-[#D97757]">✳</span>
            {t.label}
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="flex min-h-[420px]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col items-center gap-4 py-4 px-2 border-r border-black/5 text-black/40">
          <Plus className="w-4 h-4" />
          <Search className="w-4 h-4" />
          <Archive className="w-4 h-4" />
          <MessageCircle className="w-4 h-4" />
          <FileText className="w-4 h-4" />
          <Settings className="w-4 h-4" />
        </div>

        {/* Chat area */}
        <div className="flex-1 p-4 md:p-6 flex flex-col">
          <div className="flex items-center justify-center gap-2 text-[11px] text-black/50 mb-4">
            <span className="font-medium">Ryze AI · MCP Claude ↔ Google/Meta Ads</span>
            <ChevronDown className="w-3 h-3" />
          </div>

          <div className="flex justify-end mb-4">
            <div className="bg-white rounded-2xl px-3 py-1.5 text-xs shadow-sm ring-1 ring-black/5">
              Yes, do a full audit of my Google Ads account
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-black/60 text-xs flex items-center gap-1">
              Orchestrated comprehensive audit with consistent data and sidebar layouts
              <span>›</span>
            </p>
            <h3 className="font-semibold text-[15px] leading-snug">
              $11,840/mo in recoverable spend across 14 findings — 14.1% of your Google budget is leaking
            </h3>
            <p className="text-black/50 text-xs italic flex items-center gap-2 pt-2">
              <span className="inline-block w-3 h-3 rounded-full border-2 border-[#D97757] border-t-transparent animate-spin" />
              Tallying the damage
            </p>
          </div>

          <div className="mt-auto pt-6">
            <div className="rounded-lg bg-[#FFF3DC] text-[11px] text-black/70 px-3 py-1.5 flex items-center justify-between mb-2">
              <span>You've used 75% of your weekly limit</span>
              <a className="underline">Get more usage</a>
            </div>
            <div className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2.5 flex items-center gap-2">
              <Paperclip className="w-4 h-4 text-black/40" />
              <span className="text-xs text-black/40 flex-1">Reply...</span>
              <span className="text-[10px] text-black/50">Opus 4.6 Extended</span>
              <button className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
            <p className="text-[10px] text-black/40 text-center mt-2">
              Claude is AI and can make mistakes. Please double check responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}