# Graph.gl<p align="right">

  <a href="https://travis-ci.com/uber/graph.gl">

[![CI](https://github.com/Gongamax/graph.gl/actions/workflows/ci.yml/badge.svg)](https://github.com/Gongamax/graph.gl/actions/workflows/ci.yml) <img src="https://travis-ci.com/uber/graph.gl.svg" alt="build" />

[![npm version](https://badge.fury.io/js/@gongamax%2Fgraph.gl.svg)](https://www.npmjs.com/package/@gongamax/graph.gl) </a>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fuber%2Fgraph.gl?ref=badge_shield" alt="FOSSA Status">

    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fuber%2Fgraph.gl.svg?type=shield"/>

<p align="center">  </a>

<img src="https://i.imgur.com/BF9aOEu.png" height="400" /></p>

</p>

<p align="center">

**WebGL2-Powered Visualization Components for Graph Visualization - Modernized for 2025** <img src="https://i.imgur.com/BF9aOEu.png" height="400" />

</p>

A React component library for visualizing large graphs with customizable layouts and rendering. Originally created by Uber, now modernized and maintained for phylogenetic tree visualization and other graph-based applications.

# Graph.gl

## ✨ Features

<p align="center">:warning: This is work in progress. No support plan yet. :warning:</p>

- 🚀 **High Performance**: WebGL-powered rendering via deck.gl 9

- ⚛️ **Modern React**: Built for React 18 with hooks support## Abstract

- 🎨 **Highly Customizable**: Composable API for nodes, edges, and layoutsGraph.gl is a React component for visualizing large graphs with several utility functions. It can build a highly customizable graph visualization through its composable API. The rendering is powered by deck.gl which is a WebGL based visualization framework. With Graph.gl, users are enabled to build various type of graph/network applications with minimum efforts while having the capability to extend the existing styles and layouts.

- 📊 **Multiple Layouts**: D3 force-directed, simple, and custom layouts

- 🌳 **Phylogenetic Trees**: Perfect for tree visualization use cases## Motivation

- 🎯 **Interactive**: Built-in support for dragging, clicking, and viewport manipulationUber started to build its own knowledge graph since two years ago, and uGraph, the knowledge graph exploration tool was created since then. With the capability of querying large graph data and different ways to explore graph, it’s getting more urgent to produce more produce more different graph visualization applications.

- 📦 **TypeScript Ready**: Full type definitions included (coming soon)To quickly build a graph visualization, we start to extract the code from uGraph and build a reusable React component for graph visualization, Graph.gl, which equipped advanced Deck.gl rendering capability and several useful graph algorithms and operations. Although there are a great number of commercial graph visualization tools, only a few of them allow users to extend the layout and customization. With Graph.gl, developers are allowed to create graph visualization with minimum efforts while having the capability to override anything they want in the library.

- 🧪 **Well Tested**: Comprehensive test suite with Jest

## Goal

## 🚀 InstallationWe plan to open source this library that can help the community to create their own solutions for the graph. Open source helps promoting the brand of visualization team at Uber, which could help with recruiting. Once Graph.gl is mature and stable enough, we will start to integrate it with several Uber internal tools, such as Jupyter notebook and Querybuilder as a graph visualization tool.

````bash## Roadmap

npm install @gongamax/graph.gl

```Phase 1 - 2019 Q3

 - Customization: easily change the appearance of nodes and links.

### Peer Dependencies - Flexibility: able to extend and create new graph layout algorithms.

 - Compatible with deck.gl: allows complex visualizations to be constructed by composing deck.gl layers, and makes it easy to package and share new graph visualizations as reusable layers.

This library requires React 18+ and additional deck.gl dependencies: - Interaction: support clicking detection, viewport manipulation.

 - Speed / Performance: able to draw medium(5000+ nodes) to large (10,000+ nodes) sized graphs quickly with interactive speed.

```bash - Testability: able to test each module easily.

npm install react@^18.0.0 react-dom@^18.0.0 - Well documentation and a gallery of examples.

npm install @deck.gl/core@^9.0.0 @deck.gl/layers@^9.0.0 @deck.gl/react@^9.0.0 - Modular architecture: clean interface between the renderer, layout-engine, and the graph attribute calculation. Users can choose to use our solution as a whole, or to switch out either module if they need to use their own.

npm install @luma.gl/core@^9.0.0 @luma.gl/engine@^9.0.0 @loaders.gl/core@^4.0.0

```Phase 2 - 2019 Q4 - 2020 Q1

 - Support dynamic graph - streaming data.

Or with yarn: - Leverage GPU computation power to get high performance rendering and layout calculation.

 - Pre/Post graph calculation modules, ex: shortest path, pagerank, community detection, HITS

```bash - 2D / 3D rendering

yarn add @gongamax/graph.gl - Client/Server side rendering

yarn add react@^18.0.0 react-dom@^18.0.0 - Support arrow data and some other popular graph data format.

yarn add @deck.gl/core@^9.0.0 @deck.gl/layers@^9.0.0 @deck.gl/react@^9.0.0 - Multiple Modules: each layout/computation module should be published as separated modules so we can reduce the code size.

yarn add @luma.gl/core@^9.0.0 @luma.gl/engine@^9.0.0 @loaders.gl/core@^4.0.0 - Pure JavaScript Support

````

## Get Started

## 📖 Quick Start```js

import GraphGL, {

`````jsx JSONLoader,

import React from 'react';  NODE_TYPE,

import GraphGL, {  D3ForceLayout

  JSONLoader,} from 'graph.gl';

  NODE_TYPE,

  D3ForceLayoutconst App = ({data}) => {

} from '@gongamax/graph.gl';  const graph = JSONLoader({

    json: data,

const MyGraph = ({data}) => {    nodeParser: node => ({id: node.id}),

  const graph = JSONLoader({    edgeParser: edge => ({

    json: data,      id: edge.id,

    nodeParser: node => ({id: node.id}),      sourceId: edge.sourceId,

    edgeParser: edge => ({      targetId: edge.targetId,

      id: edge.id,      directed: true,

      sourceId: edge.sourceId,    }),

      targetId: edge.targetId,  });

      directed: true,  return (

    }),    <GraphGL

  });      graph={graph}

      layout={new D3ForceLayout()}

  return (      nodeStyle={[

    <GraphGL        {

      graph={graph}          type: NODE_TYPE.CIRCLE,

      layout={new D3ForceLayout()}          radius: 10,

      nodeStyle={[          fill: 'blue',

        {          opacity: 1,

          type: NODE_TYPE.CIRCLE,        },

          radius: 10,      ]}

          fill: 'blue',      edgeStyle={{

          opacity: 1,        stroke: 'black',

        },        strokeWidth: 2,

      ]}      }}

      edgeStyle={{      enableDragging

        stroke: 'black',    />

        strokeWidth: 2,  );

      }}}

      enableDragging````

    />

  );

};## Setup Dev Environment



export default MyGraph;#### Clone the repo:

`````

```

## 🎯 Use Casesgit clone git@github.com:uber/graph.gl.git

```

- **Phylogenetic Tree Visualization**: Display evolutionary relationships

- **Knowledge Graphs**: Explore interconnected data#### Install yarn

- **Network Diagrams**: Visualize complex systems

- **Social Networks**: Map relationships and connections```

- **Dependency Graphs**: Understand project dependenciesbrew update

brew install yarn

## 📚 Documentation```

- [API Reference](./docs/README.md)#### Install dependencies

- [Graph API](./docs/api-reference/graph.md)

- [Layouts](./docs/api-reference/layout.md)```

- [Node Styles](./docs/api-reference/node-style.md)yarn install

- [Edge Styles](./docs/api-reference/edge-style.md)```

## 🔧 Development#### Local Development

### SetupYou can write a story and open it in the storybook:

````

```bashyarn storybook

# Clone the repository```

git clone https://github.com/Gongamax/graph.gl.gitPlease create a new story in stories.js in one of the existing folder or make new folder if necessary.

cd graph.glEach folder should have a readme file to explain what your story does.



# Install dependencies

yarn install#### Testing



# Run tests```

yarn testyarn test

````

# Run linter

yarn lintTo get coverage information, use:

# Build the library```

yarn buildyarn cover

````



### Testing#### Documentation



```bashYou can add your documentation (markdown) in `docs/` folder and the new chapter in `docs/table-of-contents.json`.

# Run all testsOpen the local website:

yarn test```

yarn website

# Run tests with coverage```

yarn cover

#### Contributing

# Run linter

yarn lintPRs and bug reports are welcome. Note that you once your PR is

```about to be merged, you will be asked to register as a contributor

by filling in a short form.

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
4. Push to the branch (`git push origin feature/AmazingParameter`)
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
````
