import heapq

def dijkstra(graph, start):
    # Priority queue to store (distance, node)
    priority_queue = []
    heapq.heappush(priority_queue, (0, start))  # Start with the source node (distance=0)
    
    # Dictionary to store the shortest distance to each node
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        # Skip processing if a better distance has already been found
        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node]:
            distance = current_distance + weight

            # Update shortest distance if a shorter path is found
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    
    return distances

# Example Usage
graph = {
    'A': [('B', 1), ('C', 4)],
    'B': [('A', 1), ('C', 2), ('D', 6)],
    'C': [('A', 4), ('B', 2), ('D', 3)],
    'D': [('B', 6), ('C', 3)]
}

start_node = 'A'
shortest_distances = dijkstra(graph, start_node)
print("Shortest distances from node", start_node, ":", shortest_distances)
