import { useState, useEffect } from 'react'

export interface VersionInfo {
  version: string
  buildTimestamp: string
  channel: string
  changelog: string[]
  minimumCompatibleVersion: string
}

export function useVersionCheck() {
  const [info, setInfo] = useState<VersionInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/ce-shipgen/version.json?t=${Date.now()}`)
      .then(r => r.json() as Promise<VersionInfo>)
      .then(data => setInfo(data))
      .catch(() => { /* leave null — version unavailable */ })
      .finally(() => setLoading(false))
  }, [])

  return { info, loading }
}
