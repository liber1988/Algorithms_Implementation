def floyd_warshall(graph):
    # Number of vertices in the graph
    V = len(graph)

    # Initialize the distance matrix with the graph's adjacency matrix
    distance = [row[:] for row in graph]

    # Dynamic programming to update distances
    for k in range(V):
        for i in range(V):
            for j in range(V):
                # Update distance if a shorter path exists through vertex k
                distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])

    return distance

# Example Usage
# Define the graph as an adjacency matrix
INF = float('inf')
graph = [
    [0, 3, INF, 7],
    [8, 0, 2, INF],
    [5, INF, 0, 1],
    [2, INF, INF, 0]
]

# Run the Floyd-Warshall Algorithm
shortest_paths = floyd_warshall(graph)

# Print the shortest paths
print("Shortest distances between every pair of vertices:")
for row in shortest_paths:
    print(row)
