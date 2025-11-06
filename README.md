# Graph.gl

[![CI](https://github.com/Gongamax/graph.gl/actions/workflows/ci.yml/badge.svg)](https://github.com/Gongamax/graph.gl/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@frutuoso%2Fgraph.gl.svg)](https://www.npmjs.com/package/@frutuoso/graph.gl)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="https://i.imgur.com/BF9aOEu.png" height="400" />
</p>

**WebGL2-Powered Visualization Components for Graph Visualization - Modernized for 2025**

A React component library for visualizing large graphs with customizable layouts and rendering. Originally created by Uber, now modernized and maintained for phylogenetic tree visualization and other graph-based applications.

## ✨ Features

- 🚀 **High Performance**: WebGL-powered rendering via deck.gl 9
- ⚛️ **Modern React**: Built for React 18 with hooks support
- 🎨 **Highly Customizable**: Composable API for nodes, edges, and layouts
- 📊 **Multiple Layouts**: D3 force-directed, simple, and custom layouts
- 🌳 **Phylogenetic Trees**: Perfect for tree visualization use cases
- 🎯 **Interactive**: Built-in support for dragging, clicking, and viewport manipulation
- 📦 **TypeScript Ready**: Full type definitions included (coming soon)
- 🧪 **Well Tested**: Comprehensive test suite with Jest

## 🚀 Installation

```bash
npm install @frutuoso/graph.gl
```

### Peer Dependencies

This library requires React 18+ and additional deck.gl dependencies:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
npm install @deck.gl/core@^9.0.0 @deck.gl/layers@^9.0.0 @deck.gl/react@^9.0.0
npm install @luma.gl/core@^9.0.0 @luma.gl/engine@^9.0.0 @loaders.gl/core@^4.0.0
```

Or with yarn:

```bash
yarn add @frutuoso/graph.gl
yarn add react@^18.0.0 react-dom@^18.0.0
yarn add @deck.gl/core@^9.0.0 @deck.gl/layers@^9.0.0 @deck.gl/react@^9.0.0
yarn add @luma.gl/core@^9.0.0 @luma.gl/engine@^9.0.0 @loaders.gl/core@^4.0.0
```

## 📖 Quick Start

```jsx
import React from 'react';
import GraphGL, {
  JSONLoader,
  NODE_TYPE,
  D3ForceLayout
} from '@frutuoso/graph.gl';

const MyGraph = ({data}) => {
  const graph = JSONLoader({
    json: data,
    nodeParser: node => ({id: node.id}),
    edgeParser: edge => ({
      id: edge.id,
      sourceId: edge.sourceId,
      targetId: edge.targetId,
      directed: true,
    }),
  });

  return (
    <GraphGL
      graph={graph}
      layout={new D3ForceLayout()}
      nodeStyle={[
        {
          type: NODE_TYPE.CIRCLE,
          radius: 10,
          fill: 'blue',
          opacity: 1,
        },
      ]}
      edgeStyle={{
        stroke: 'black',
        strokeWidth: 2,
      }}
      enableDragging
    />
  );
};

export default MyGraph;
```

## 🎯 Use Cases

- **Phylogenetic Tree Visualization**: Display evolutionary relationships
- **Knowledge Graphs**: Explore interconnected data
- **Network Diagrams**: Visualize complex systems
- **Social Networks**: Map relationships and connections
- **Dependency Graphs**: Understand project dependencies

## 📚 Documentation

- [API Reference](./docs/README.md)
- [Graph API](./docs/api-reference/graph.md)
- [Layouts](./docs/api-reference/layout.md)
- [Node Styles](./docs/api-reference/node-style.md)
- [Edge Styles](./docs/api-reference/edge-style.md)

## 🔧 Development

### Setup

```bash
# Clone the repository
git clone https://github.com/Gongamax/graph.gl.git
cd graph.gl

# Install dependencies
yarn install

# Run tests
yarn test

# Run linter
yarn lint

# Build the library
yarn build
```

### Testing

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn cover

# Run linter
yarn lint
```

## 🆕 What's New in 2.0

This is a major modernization release bringing graph.gl from 2019 to 2025 standards:

### Updated Dependencies

- ⚛️ React 16 → 18
- 📊 D3 v5 → v7
- 🎮 deck.gl 7 → 9
- 🧪 Jest 23 → 29
- 💅 styled-components 4 → 6

### Improvements

- ✅ Modern build tooling (Babel 7.24, ESLint 8)
- ✅ All tests passing (30 tests, 12 suites)
- ✅ Production build verified
- ✅ ES modules support
- ✅ Automatic JSX runtime

See [CHANGELOG.md](./CHANGELOG.md) for detailed migration guide.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT © [Gonçalo Frutuoso](https://github.com/Gongamax)

Originally created by Uber Technologies, Inc.

## 🙏 Credits

- Original library by [Uber Technologies](https://github.com/uber/graph.gl)
- Modernized and maintained by [Gonçalo Frutuoso](https://github.com/Gongamax)
- Built with [deck.gl](https://deck.gl) and [React](https://reactjs.org)
- Layout algorithms powered by [D3](https://d3js.org)

## 📬 Contact

Gonçalo Frutuoso - goncalofrutuoso@gmail.com

Project Link: [https://github.com/Gongamax/graph.gl](https://github.com/Gongamax/graph.gl)

---

<p align="center">Made with ❤️ for the graph visualization community</p>
