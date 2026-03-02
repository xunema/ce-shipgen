import { ArrowLeft, Monitor, Smartphone, Save, RotateCcw, FileJson, Moon, Sun, Laptop } from 'lucide-react'

interface SettingsScreenProps {
  layoutMode: 'desktop' | 'phone'
  onLayoutChange: (mode: 'desktop' | 'phone') => void
  onBack: () => void
}

export default function SettingsScreen({ layoutMode, onLayoutChange, onBack }: SettingsScreenProps) {
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
        <div className="max-w-2xl mx-auto space-y-6">
          
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

          {/* JSON Table Editor */}
          <section className="bg-space-800 rounded-xl border border-space-700 overflow-hidden">
            <div className="p-4 border-b border-space-700">
              <h3 className="font-semibold text-white">Data Tables</h3>
              <p className="text-sm text-gray-400 mt-1">Edit ship component data</p>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between p-3 bg-space-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileJson size={20} className="text-accent-cyan" />
                  <div>
                    <div className="font-medium text-white">ship_hulls.json</div>
                    <div className="text-sm text-gray-500">18 hull definitions</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-sm bg-space-700 hover:bg-space-600 rounded-lg transition-colors">
                  Edit
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-space-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileJson size={20} className="text-accent-cyan" />
                  <div>
                    <div className="font-medium text-white">ship_drives.json</div>
                    <div className="text-sm text-gray-500">26 drive codes</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-sm bg-space-700 hover:bg-space-600 rounded-lg transition-colors">
                  Edit
                </button>
              </div>

              <div className="flex gap-3 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-space-700 hover:bg-space-600 rounded-lg transition-colors">
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-space-700 hover:bg-space-600 rounded-lg transition-colors">
                  <RotateCcw size={18} />
                  <span>Reset All</span>
                </button>
              </div>
            </div>
          </section>

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

          {/* Version */}
          <div className="text-center text-sm text-gray-500 pt-4">
            CE ShipGen v0.1.0 (Milestone 1)
          </div>
        </div>
      </div>
    </div>
  )
}
