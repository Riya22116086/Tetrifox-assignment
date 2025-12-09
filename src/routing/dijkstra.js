export const dijkstra = (graph, start, end) => {
  const distances = {};
  const visited = {};
  const previous = {};

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[start] = 0;

  while (true) {
    let currentNode = null;

    Object.keys(distances).forEach(node => {
      if (!visited[node] && (currentNode === null || distances[node] < distances[currentNode])) {
        currentNode = node;
      }
    });

    if (currentNode === null) break;

    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      let newDist = distances[currentNode] + graph[currentNode][neighbor];

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = currentNode;
      }
    }
  }

  // Build path
  const path = [];
  let node = end;

  while (node) {
    path.unshift(node);
    node = previous[node];
  }

  return { path, distance: distances[end] };
};
