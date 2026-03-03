# CE ShipGen

**CEpheus Engine Ship Generator** - A Progressive Web App for designing starships

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://justinaquino.github.io/ce-shipgen/)
[![Status](https://img.shields.io/badge/Status-M3%20Current-blue)](https://github.com/xunema/ce-shipgen#-milestone-status)

**Live Demo:** https://justinaquino.github.io/ce-shipgen/

---

## 📊 Milestone Status

| Milestone | Scope & Deliverables | Status |
|-----------|----------------------|--------|
| **M1: UI Layout & Tiling** | Tile-based layout system, focus mode, desktop/phone modes, PWA scaffolding, service worker, offline support | ✅ Complete |
| **M2: Settings & Data Tables** | JSON editor + spreadsheet view for all 13 ship component tables, rule toggles (CE / Mneme / custom mix) | ✅ Complete |
| **M2.5: Install UX & Settings System** | PWA install prompt + "Installed" badge (FR-021), auto-save table edits (FR-022), input sanitisation (FR-023), named settings snapshots save/load/export/import (FR-024), GitHub Actions CI/CD pipeline (FR-025) | ✅ Complete |
| **M2.6: Installed Version Control** | Build-time `version.json` generation (FR-026a), version display in Settings (FR-026b), SW-based update detection — never forced (FR-026c), changelog viewer (FR-026d), user-controlled update via `updateServiceWorker` (FR-026e), offline guard (FR-026h), `registerType: prompt` SW integration (FR-026i), permanent Updating Instructions section in Settings (FR-026j) | ✅ Complete |
| **M3: Ship Generation** | 19-step ship design wizard following CE Chapter 8, real-time BOQ (Bill of Quantities), tonnage/cost/crew/fuel calculations, validation | 🎯 Current |
| **M4: Persistence & Export** | Ship library with save/load/delete, JSON / CSV / text / print export, common ship templates | ⏳ Pending |

> **Descoped from M2.6:** Rollback (FR-026f) and Release Channels (FR-026g) require versioned URL hosting and a multi-channel CI/CD pipeline that do not yet exist on GitHub Pages. Deferred to a future milestone.

---

## 🎯 Problem Statement

You are a Game Master trying to manage all the ships in your setting and accommodate your players. The amount of time these ships and the complex rules eat up during your prep is overwhelming. You want the freedom to edit and customize ships quickly without getting bogged down in calculations and cross-referencing tables.

**CE ShipGen solves this by:**
- Automating the 19-step Cepheus Engine ship design process
- Providing instant calculations for tonnage, cost, crew, and fuel
- Allowing customization of all ship component data
- Enabling library management for entire fleets
- Working on any device with a modern browser

---

## ✨ Features

### Current (M2.6 Complete ✅ — M3 Next)
- **📱 Universal Access** - Works on desktop, tablet, and mobile via modern browser
- **📊 Data Table Editor** - View and edit all 13 ship component tables (JSON + Spreadsheet views)
- **⚙️ Rule Customization** - Toggle between Cepheus Engine, Mneme Space Combat, or mix your own rules
- **🔄 Persistent Storage** - Save ships and settings to browser storage
- **📤 Export/Import** - Share ship designs as JSON or CSV
- **🔗 Shareable URLs** - Direct links to any view (/design, /library, /settings)
- **📥 Install Prompt** - "Install App" button with "Installed" badge when running standalone
- **📸 Settings Snapshots** - Save and share custom rule configurations

### In Progress (Milestone 2.6)
- **🔄 Version Control** - User-controlled updates with rollback capability

### Core Capabilities
- **19-Step Ship Design** following Cepheus Engine Chapter 8 rules
- **Real-time Validation** - Know immediately if your design violates rules
- **BOQ Summary** - Bill of Quantities showing all components, costs, and tonnage
- **Focus Mode** - Expand any step to full screen for detailed work
- **Offline Support** - PWA works without internet after first load

---

## 🎮 For Game Masters

### Manage Your Setting
- Create ship libraries for your campaign setting
- Pre-generate common ships (Free Traders, Scouts, Patrol Cruisers)
- Customize components to match your setting's tech level
- Export ship libraries to share with players

### Support Your Players
- Players can design their own ships
- GM can review and approve designs
- Consistent rules enforcement across all designs
- Quick reference during play for ship stats

### Random Encounters
- Generate ships on-the-fly during sessions
- Create standardized NPC ship templates
- Build encounter tables from ship libraries

---

## 🚀 For Developers & Customizers

### Procedural-Agentic-Development (PAD) Approach
This project follows PAD principles:
- **PRD.md** - Product Requirements Document with 20+ functional requirements
- **PROJECT_NOTES.md** - Comprehensive development notes, timelog, and problem tracking
- **Knowledge Base** - All Cepheus Engine and Mneme Space Combat rules documented
- **System Prompts** - Clear context for AI assistance

### Fork & Customize
Licensed under **GPL v3** - you can:
- Fork this repository
- Make your own custom changes
- Share your version
- Contribute back improvements

**Perfect for:**
- Creating house rule variants
- Adding custom ship components
- Integrating with your own campaign tools
- Building derivative ship generators

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [PRD.md](./PRD.md) | Product Requirements Document - 20 FRs, user stories, technical specs |
| [PROJECT_NOTES.md](./PROJECT_NOTES.md) | Development timelog, assumptions, problems encountered, current status |
| [CE-Chapter-8-Ship-Design-and-Construction.md](./CE-Chapter-8-Ship-Design-and-Construction.md) | Source rules from Cepheus Engine SRD |

---

## 🛣️ Roadmap & Future Ideas

### Milestone Progress

See [📊 Milestone Status](#-milestone-status) at the top of this document for the full table.

### M2.6: Installed Version Control (Complete ✅)

**Problem solved:** Users with the PWA installed locally had no visibility into which version was running, and updates were applied automatically with no user control.

**What was built:**
- **Version Display** — Current version, channel, and build timestamp shown in Settings → Version section
- **Update Detection** — Service worker monitors for new versions in the background; never forces an update
- **Update Indicators** — Orange dot on Settings icon in header + amber pill on startup screen when update ready
- **User-Controlled Update** — "Update Now" button applies the waiting service worker; user decides when
- **Changelog Viewer** — Expandable changelog in Settings shows what changed before you update
- **Updating Instructions** — Permanent Settings section explains the update model, indicators, data safety, and offline behaviour
- **Offline Guard** — Update button replaced with "Connect to internet to update" when offline
- **Build-time manifest** — `version.json` generated on every `npm run build` via `scripts/write-version.mjs`

**Descoped (not achievable on GitHub Pages):**
- ~~Version rollback~~ — Workbox purges old caches on SW activation; old code cannot be restored without versioned URL hosting
- ~~Release channels (stable/beta)~~ — Requires a multi-channel CI/CD pipeline that does not yet exist

### Project Scope & Ecosystem

**CE ShipGen focuses on:** Ships, Habitats, and Vehicles

**Related Projects:**
- **[Mneme World Generator PWA](https://github.com/justinaquino/mneme-world-generator-pwa)** - Handles detailed economic systems including:
  - Trade volume calculations between systems
  - Living economies with dynamic events
  - Market fluctuations and trade route analysis
  - World-building and system generation
  
**This project** (CE ShipGen) provides the vessel construction tools that feed into those economic systems. The Bill of Quantities (BOQ) method used here for ships can scale to vehicles and habitats, but detailed economic simulation remains in the world generator scope.

### Near Term (Milestones 3-4)
- **Ship Library** - Complete save/load/export system with IndexedDB
- **Common Ships** - Pre-built library of standard Cepheus Engine ships
- **Mneme Ships** - Library of ships using Mneme Space Combat rules
- **Stat Cards** - Printable ship reference cards with all combat stats

### Medium Term
- **Markdown/Wikitext Export** - Export ships for blogs, wikis, game materials
  - Format: `[[Ship Name|TL X|Y tons|MCr Z]]` style wiki links
  - Full stat blocks in markdown tables
  - Copy-paste ready for Obsidian, MediaWiki, etc.

- **Advanced Mneme Rules** - Major addition with realistic physics
  - **Mass-based calculations** instead of abstract thrust numbers
  - **Delta-V based calculations** for realistic space travel
  - Educational focus: "What we currently know is possible"
  - Auto-convert common ships to Mneme physics model

- **Habitat Design** - Including MAGICIAN (terrestrial spin habitats)
  - Space station and habitat construction rules
  - Spin gravity calculations
  - Life support and infrastructure

- **Vehicle Construction** (Future Section)
  - The BOQ (Bill of Quantities) method scales to ground vehicles and small craft
  - Grav vehicles, tracked vehicles, wheeled vehicles
  - ATVs, air/rafts, and planetary vehicles
  - Modular component system using same methodology as ships
  - *Note: This extends the ship construction system to smaller craft*

### Logistic Calculators (Major Feature)
Comprehensive supply chain and economic management for ship operations:

- **Supply Calculator** - Recommends supplies for ships and calculates costs
  - Life support requirements (man-days, consumables)
  - Fuel calculations for planned journeys
  - Spare parts and maintenance supplies
  - Cost estimation for resupply

- **Inventory System** - Tracks current balance of inventory over time
  - Real-time resource tracking (fuel, food, air, water)
  - Automated consumption based on crew size and journey duration
  - Low inventory warnings and alerts
  - Multi-ship fleet inventory management

- **Journey Table** - Trip planning from Point A to Point B
  - Row-based journey log (Origin → Destination)
  - Resource consumption calculation per journey
  - Parsecs traveled, time elapsed
  - Fuel costs, life support usage
  - Revenue/passenger income per trip

- **Income Tracker** - Financial management over periods
  - Revenue tracking (passenger fares, freight, mail, charters)
  - Expense tracking (fuel, maintenance, crew salaries, supplies)
  - Profit/loss calculations per journey and per period
  - Cash flow projections
  - Financial reports for ship operations

### Long Term Vision
- **TL6-TL9 Ship Library** - Low-tech ships transitioning between CE and Mneme tech levels
- **Random Encounter Tables** - Use ship libraries to generate encounter tables
- **Mneme Space Combat Tools** - Fleet creation for Superiority and MAC calculations
  - Opposing fleet generation
  - Superiority modifier calculations
  - Multiple Attack Consolidation (MAC) tools

- **Procedural Ship Layout Design** - Visual ship deck plans
  - 2D web-based deck plan generator (experimental)
  - May pivot to Godot 3D ship builder if web proves limiting

---

## 🏗️ Architecture

**Tech Stack:**
- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite (fast HMR, optimized builds)
- **Styling:** Tailwind CSS with custom space theme
- **State:** Zustand (lightweight state management)
- **Routing:** React Router (persistent URLs)
- **Storage:** Browser localStorage + IndexedDB
- **Deployment:** GitHub Pages as PWA

**Key Features:**
- Offline-first Progressive Web App
- Mobile-responsive design
- Real-time calculations
- Import/Export functionality

---

## 🎨 Attribution

**Based on:**
- **[Cepheus Engine](https://www.drivethrurpg.com/en/product/186894/cepheus-engine-system-reference-document)** - Open source tabletop RPG system
- **[Mneme Space Combat](https://www.drivethrurpg.com/en/publisher/17858/game-in-the-brain)** - Justin Aquino's variant combat rules

**Created by:**
- **[Game in the Brain](https://gi7b.org)** - Open gaming tools and educational content
- **[Wiki](https://wiki.gi7b.org)** - Collaborative knowledge base

**Support open gaming tools by patronizing our products and leaving positive reviews!**

---

## 📝 License

**GNU General Public License v3.0**

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

**Key points:**
- ✅ Free to use, modify, and distribute
- ✅ Must share modifications under same license
- ✅ Must include source code
- ✅ Must preserve copyright notices

See [LICENSE](./LICENSE) for full details.

---

## 🤝 Contributing

This is an open project following PAD (Procedural-Agentic-Development). The comprehensive documentation (PRD, PROJECT_NOTES, rules) allows anyone to:
1. Understand the project context
2. Fork and customize
3. Use AI assistants effectively with system prompts
4. Contribute improvements back

**Ways to contribute:**
- Report bugs or issues
- Suggest new features
- Submit ship designs for the library
- Improve documentation
- Create custom rule variants

---

## 🌐 Links

- **Live App:** https://justinaquino.github.io/ce-shipgen/
- **Repository:** https://github.com/xunema/ce-shipgen
- **Game in the Brain:** https://gi7b.org
- **Wiki:** https://wiki.gi7b.org
- **Publisher:** https://www.drivethrurpg.com/en/publisher/17858/game-in-the-brain

---

*CE ShipGen - Empowering Game Masters with automated ship design tools*
*Built with ❤️ for the tabletop RPG community*
