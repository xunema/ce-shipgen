import { useState, useEffect } from 'react'
import { ArrowLeft, Monitor, Smartphone, Moon, Sun, Laptop, RefreshCw } from 'lucide-react'
import JsonTableEditor from '../settings/JsonTableEditor'
import RuleSettings from '../settings/RuleSettings'
import SettingsSnapshots from '../settings/SettingsSnapshots'
import { useVersionCheck } from '../../hooks/useVersionCheck'

interface SettingsScreenProps {
  layoutMode: 'desktop' | 'phone'
  onLayoutChange: (mode: 'desktop' | 'phone') => void
  onBack: () => void
  needRefresh: boolean
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
}

export default function SettingsScreen({
  layoutMode,
  onLayoutChange,
  onBack,
  needRefresh,
  updateServiceWorker
}: SettingsScreenProps) {
  const [snapshotVersion, setSnapshotVersion] = useState(0)
  const [showChangelog, setShowChangelog] = useState(false)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const { info, loading } = useVersionCheck()

  useEffect(() => {
    const onOnline = () => setIsOnline(true)
    const onOffline = () => setIsOnline(false)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  return (
    <div className="h-full flex flex-col bg-space-900">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-space-700 bg-space-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h2 className="text-xl font-semibold text-white">Settings</h2>
      </div>

      {/* Settings Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Layout Settings */}
          <section className="bg-space-800 rounded-xl border border-space-700 overflow-hidden">
            <div className="p-4 border-b border-space-700">
              <h3 className="font-semibold text-white">Layout</h3>
              <p className="text-sm text-gray-400 mt-1">Choose your preferred display mode</p>
            </div>
            <div className="p-4">
              <div className="flex gap-3">
                <button
                  onClick={() => onLayoutChange('desktop')}
                  className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    layoutMode === 'desktop'
                      ? 'border-accent-cyan bg-accent-cyan/10'
                      : 'border-space-600 hover:border-space-500'
                  }`}
                >
                  <Monitor size={32} className={layoutMode === 'desktop' ? 'text-accent-cyan' : 'text-gray-400'} />
                  <span className={`font-medium ${layoutMode === 'desktop' ? 'text-accent-cyan' : 'text-gray-300'}`}>
                    Desktop
                  </span>
                  <span className="text-xs text-gray-500">Horizontal tiling</span>
                </button>

                <button
                  onClick={() => onLayoutChange('phone')}
                  className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    layoutMode === 'phone'
                      ? 'border-accent-cyan bg-accent-cyan/10'
                      : 'border-space-600 hover:border-space-500'
                  }`}
                >
                  <Smartphone size={32} className={layoutMode === 'phone' ? 'text-accent-cyan' : 'text-gray-400'} />
                  <span className={`font-medium ${layoutMode === 'phone' ? 'text-accent-cyan' : 'text-gray-300'}`}>
                    Phone
                  </span>
                  <span className="text-xs text-gray-500">Vertical tiling</span>
                </button>
              </div>
            </div>
          </section>

          {/* Rule Settings */}
          <RuleSettings />

          {/* Snapshots */}
          <SettingsSnapshots onSnapshotLoad={() => setSnapshotVersion(v => v + 1)} />

          {/* JSON Table Editor */}
          <JsonTableEditor key={snapshotVersion} />

          {/* Theme Settings */}
          <section className="bg-space-800 rounded-xl border border-space-700 overflow-hidden">
            <div className="p-4 border-b border-space-700">
              <h3 className="font-semibold text-white">Theme</h3>
              <p className="text-sm text-gray-400 mt-1">Choose your color scheme</p>
            </div>
            <div className="p-4">
              <div className="flex gap-3">
                <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-accent-cyan bg-accent-cyan/10">
                  <Moon size={24} className="text-accent-cyan" />
                  <span className="font-medium text-accent-cyan">Dark</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-space-600 hover:border-space-500">
                  <Sun size={24} className="text-gray-400" />
                  <span className="font-medium text-gray-300">Light</span>
                </button>
                <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-space-600 hover:border-space-500">
                  <Laptop size={24} className="text-gray-400" />
                  <span className="font-medium text-gray-300">Auto</span>
                </button>
              </div>
            </div>
          </section>

          {/* Updating Instructions */}
          <section className="bg-space-800 rounded-xl border border-space-700 overflow-hidden">
            <div className="p-4 border-b border-space-700">
              <h3 className="font-semibold text-white">Updating</h3>
              <p className="text-sm text-gray-400 mt-1">How app updates work</p>
            </div>
            <div className="p-4 space-y-3 text-sm text-gray-300">
              <div className="space-y-2">
                <p className="flex gap-2">
                  <span className="text-accent-cyan flex-shrink-0 mt-0.5">1.</span>
                  <span>Updates download automatically in the background when you are online. <strong className="text-white">You are never forced to update.</strong></span>
                </p>
                <p className="flex gap-2">
                  <span className="text-accent-cyan flex-shrink-0 mt-0.5">2.</span>
                  <span>When a new version is ready, an <strong className="text-accent-orange">orange dot</strong> appears on the Settings icon in the header, and a pill button appears on the startup screen.</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-accent-cyan flex-shrink-0 mt-0.5">3.</span>
                  <span>Come here to the <strong className="text-white">Version</strong> section below and click <strong className="text-white">Update Now</strong> when you are ready. The app will reload with the new version.</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-accent-cyan flex-shrink-0 mt-0.5">4.</span>
                  <span>All your settings, snapshots, rules, and table customisations are stored locally and are <strong className="text-white">never affected by updates</strong>.</span>
                </p>
              </div>
              <p className="text-xs text-gray-500 pt-1 border-t border-space-700">
                If you are offline, updates are queued until you reconnect. You can keep using the app normally while offline.
              </p>
            </div>
          </section>

          {/* Version Control */}
          <section className="bg-space-800 rounded-xl border border-space-700 overflow-hidden">
            <div className="p-4 border-b border-space-700">
              <h3 className="font-semibold text-white">Version</h3>
            </div>
            <div className="p-4 space-y-3">
              {loading ? (
                <p className="text-sm text-gray-500">Loading version info…</p>
              ) : info ? (
                <>
                  <div>
                    <p className="text-sm text-gray-400">Current Version</p>
                    <p className="text-white font-mono">{info.version} ({info.channel})</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Build: {new Date(info.buildTimestamp).toUTCString()}
                    </p>
                  </div>

                  {needRefresh && (
                    <div className="p-3 bg-accent-orange/10 border border-accent-orange/30 rounded-lg space-y-2">
                      <p className="text-sm font-medium text-accent-orange flex items-center gap-2">
                        <RefreshCw size={14} />
                        Update Available
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => setShowChangelog(v => !v)}
                          className="text-xs text-gray-300 hover:text-white px-3 py-1.5 bg-space-700 rounded-lg transition-colors"
                        >
                          {showChangelog ? 'Hide' : 'View'} Changelog
                        </button>
                        {isOnline ? (
                          <button
                            onClick={() => void updateServiceWorker(true)}
                            className="text-xs font-medium text-space-900 bg-accent-orange hover:bg-orange-400 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            Update Now
                          </button>
                        ) : (
                          <span className="text-xs text-gray-500 px-3 py-1.5">
                            Connect to internet to update
                          </span>
                        )}
                      </div>
                      {showChangelog && (
                        <ul className="pt-1 space-y-1">
                          {info.changelog.map((item, i) => (
                            <li key={i} className="text-xs text-gray-300 flex gap-2">
                              <span className="text-accent-cyan flex-shrink-0">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {!isOnline && !needRefresh && (
                    <p className="text-xs text-gray-500">Offline — version check unavailable</p>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-500">Version information unavailable</p>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
