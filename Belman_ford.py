class Graph:
    def __init__(self, vertices):
        self.vertices = vertices  # Number of vertices
        self.edges = []  # List to store all edges

    def add_edge(self, u, v, weight):
        self.edges.append((u, v, weight))  # Add an edge from u to v with a given weight

    def bellman_ford(self, start):
        # Initialize distances with infinity
        distances = {v: float('inf') for v in range(self.vertices)}
        distances[start] = 0  # Distance to the start vertex is 0

        # Relax all edges |V| - 1 times
        for _ in range(self.vertices - 1):
            for u, v, weight in self.edges:
                if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                    distances[v] = distances[u] + weight

        # Check for negative weight cycles
        for u, v, weight in self.edges:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                return "Graph contains a negative weight cycle"

        return distances


# Example Graph Setup
graph = Graph(5)
graph.add_edge(0, 1, -1)
graph.add_edge(0, 2, 4)
graph.add_edge(1, 2, 3)
graph.add_edge(1, 3, 2)
graph.add_edge(1, 4, 2)
graph.add_edge(3, 2, 5)
graph.add_edge(3, 1, 1)
graph.add_edge(4, 3, -3)

# Execute Bellman-Ford Algorithm
start_vertex = 0
result = graph.bellman_ford(start_vertex)

# Print the result
if isinstance(result, str):
    print(result)  # If a negative weight cycle is detected
else:
    print(f"Shortest distances from vertex {start_vertex}:")
    for vertex, distance in result.items():
        print(f"Vertex {vertex}: {distance}")
