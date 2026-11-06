// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="min-h-screen flex flex-col justify-between p-6 md:p-12" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_OBS_STAYS_ON_STATUS_ROUTE">
          <header className="max-w-4xl w-full mx-auto flex items-center justify-between pb-8 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                S
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Status Utility</h1>
                <p className="text-xs font-medium text-slate-500">Route: /status</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
              Operational
            </div>
          </header>
      
          <main className="max-w-4xl w-full mx-auto my-auto py-12">
            <div data-surface-id="SURF_STATUS_PANEL" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_OBS_STATUS_MESSAGE OBS_REFRESH_STATUS_OBS_STATUS_PERSISTED">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Overview</span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-1">System Status Overview</h2>
                  <p className="text-sm text-slate-500 mt-1">Real-time health indicator and diagnostic state management.</p>
                </div>
                <div>
                  <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" data-setfarm-element-ref="E000003" data-observable-refs="OBS_REFRESH_STATUS_OBS_REFRESH_BUTTON_AVAILABLE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                    Refresh status
                  </button>
                </div>
              </div>
      
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-medium text-slate-500 block">Service Node</span>
                  <span className="text-lg font-semibold text-slate-800 mt-1 block">Primary Cluster A</span>
                  <span className="text-xs text-slate-400 mt-2 block">Region: us-east-1</span>
                </div>
      
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-medium text-slate-500 block">Heartbeat Latency</span>
                  <span className="text-lg font-semibold text-slate-800 mt-1 block">24 ms</span>
                  <span className="text-xs text-emerald-600 font-medium mt-2 block">Nominal range</span>
                </div>
      
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-medium text-slate-500 block">Diagnostic State</span>
                  <span className="text-lg font-semibold text-slate-800 mt-1 block">Active</span>
                  <span className="text-xs text-slate-400 mt-2 block">Zero incidents reported</span>
                </div>
              </div>
      
              {/* Semantic element matching observable contract assertions for refreshed state */}
              <div className="mt-8 p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                    OK
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Current Notice</p>
                    <p className="text-xs text-slate-600">Status refreshed</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-medium text-slate-500">value:</span>
                  <span className="text-xs font-mono font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded border border-slate-200">refreshed</span>
                </div>
              </div>
            </div>
          </main>
      
          <footer className="max-w-4xl w-full mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>Status Utility © 2025. All systems monitored.</div>
            <div className="flex items-center space-x-4">
              <span>Route: /status</span>
              <span>Environment: Production</span>
            </div>
          </footer>
        </div>
    </>
  );
}
