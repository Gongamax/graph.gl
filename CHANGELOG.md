# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-11-06

### 🎉 Major Modernization Release

This release represents a complete modernization of graph.gl from 2019 to 2025 standards, making it suitable for modern React applications and phylogenetic tree visualization use cases.

### Added

- Node.js 18+ requirement with explicit engines specification
- Modern ESLint configuration with latest rules
- Automatic JSX runtime support (no need to import React)
- Support for phylogenetic tree visualization use cases
- Comprehensive test coverage with Jest 29
- Modern build tooling with Babel 7.24

### Changed

- **BREAKING**: React 16.8 → 18.3.1 (requires React 18+)
- **BREAKING**: D3 v5 → v7.9.0 (uses ES modules)
- **BREAKING**: deck.gl 7.1.7 → 9.2.2 (requires @luma.gl and @loaders.gl peer dependencies)
- **BREAKING**: styled-components 4 → 6.1.8
- **BREAKING**: `COORDINATE_SYSTEM.IDENTITY` deprecated, use `COORDINATE_SYSTEM.CARTESIAN`
- Babel 7.4 → 7.24
- Jest 23 → 29
- ESLint 5 → 8.57
- Prettier 1.15 → 3.2.5
- Testing: enzyme → @testing-library/react 14.2.1

### Replaced

- d3-voronoi → d3-delaunay 6.0.4 (modern Delaunay triangulation)

### Fixed

- ESLint violations (no-prototype-builtins)
- Jest configuration for ES modules
- Deprecated Babel and ESLint packages
- Build process compatibility with modern Node.js

### Removed

- Support for Node.js < 18
- enzyme testing library
- babel-eslint (replaced with @babel/eslint-parser)

### Development

- All 30 tests passing
- Production build verified
- ESLint passes with zero errors

### Known Limitations

- Storybook 5 examples not yet migrated to Storybook 8 (library functionality unaffected)

### Migration Guide

#### From 1.x to 2.x

**Peer Dependencies**: Update your project to use:

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

**New Peer Dependencies**: Install additional deck.gl dependencies:

```bash
npm install @luma.gl/core@9 @luma.gl/engine@9 @loaders.gl/core@4
```

**D3 API Changes**: If you use d3-voronoi directly, migrate to d3-delaunay:

```javascript
// Before
import {voronoi} from 'd3-voronoi';

// After
import {Delaunay} from 'd3-delaunay';
const delaunay = Delaunay.from(points);
const voronoi = delaunay.voronoi([0, 0, width, height]);
```

**deck.gl API Changes**: Update deprecated constants:

```javascript
// Before
coordinateSystem: COORDINATE_SYSTEM.IDENTITY;

// After
coordinateSystem: COORDINATE_SYSTEM.CARTESIAN;
```

### Credits

Original library by Uber Technologies. Modernized and maintained by Gonçalo Frutuoso for phylogenetic tree visualization applications.

---

## [1.0.0] - 2019

Initial release by Uber Technologies.
