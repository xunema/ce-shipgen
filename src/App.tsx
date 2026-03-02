import { useState } from 'react'
import { Smartphone, Monitor, Settings, Plus, Library } from 'lucide-react'
import StartupScreen from './components/screens/StartupScreen'
import SettingsScreen from './components/screens/SettingsScreen'
import LibraryView from './components/screens/LibraryView'
import ShipDesignView from './components/screens/ShipDesignView'

type View = 'startup' | 'design' | 'library' | 'settings'
type LayoutMode = 'desktop' | 'phone'

function App() {
  const [currentView, setCurrentView] = useState<View>('startup')
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('desktop')

  const toggleLayout = () => {
    setLayoutMode(prev => prev === 'desktop' ? 'phone' : 'desktop')
  }

  const renderView = () => {
    switch (currentView) {
      case 'startup':
        return (
          <StartupScreen 
            onGenerate={() => setCurrentView('design')}
            onLibrary={() => setCurrentView('library')}
            onSettings={() => setCurrentView('settings')}
          />
        )
      case 'design':
        return (
          <ShipDesignView 
            layoutMode={layoutMode}
          />
        )
      case 'library':
        return (
          <LibraryView 
            onBack={() => setCurrentView('startup')}
            onLoad={() => setCurrentView('design')}
          />
        )
      case 'settings':
        return (
          <SettingsScreen 
            layoutMode={layoutMode}
            onLayoutChange={setLayoutMode}
            onBack={() => setCurrentView('startup')}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-space-900">
      {/* Header - Always visible except on startup */}
      {currentView !== 'startup' && (
        <header className="h-14 bg-space-800 border-b border-space-700 flex items-center justify-between px-4 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentView('startup')}
              className="text-accent-cyan hover:text-cyan-300 transition-colors font-semibold text-lg"
            >
              CE ShipGen
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Layout Toggle */}
            <button
              onClick={toggleLayout}
              className="flex items-center gap-2 px-3 py-1.5 bg-space-700 rounded-lg hover:bg-space-600 transition-colors"
              title={`Switch to ${layoutMode === 'desktop' ? 'Phone' : 'Desktop'} mode`}
            >
              {layoutMode === 'desktop' ? (
                <><Smartphone size={18} /><span className="hidden sm:inline text-sm">Phone</span></>
              ) : (
                <><Monitor size={18} /><span className="hidden sm:inline text-sm">Desktop</span></>
              )}
            </button>

            {/* View Buttons */}
            <button
              onClick={() => setCurrentView('design')}
              className={`p-2 rounded-lg transition-colors ${currentView === 'design' ? 'bg-accent-cyan text-space-900' : 'hover:bg-space-700'}`}
              title="Design Ship"
            >
              <Plus size={20} />
            </button>
            <button
              onClick={() => setCurrentView('library')}
              className={`p-2 rounded-lg transition-colors ${currentView === 'library' ? 'bg-accent-cyan text-space-900' : 'hover:bg-space-700'}`}
              title="Library"
            >
              <Library size={20} />
            </button>
            <button
              onClick={() => setCurrentView('settings')}
              className={`p-2 rounded-lg transition-colors ${currentView === 'settings' ? 'bg-accent-cyan text-space-900' : 'hover:bg-space-700'}`}
              title="Settings"
            >
              <Settings size={20} />
            </button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="h-[calc(100vh-3.5rem)]">
        {renderView()}
      </main>
    </div>
  )
}

export default App
