from collections import deque

def bfs(graph, start):
    visited = set()  # To track visited nodes
    queue = deque([start])  # Initialize the queue with the starting node

    visited.add(start)

    while queue:
        current = queue.popleft()  # Dequeue the front element
        print(current, end=" ")  # Process the current node (e.g., print it)

        for neighbor in graph[current]:
            if neighbor not in visited:  # Check if the neighbor is not visited
                visited.add(neighbor)   # Mark as visited
                queue.append(neighbor)  # Enqueue the neighbor

# Example Usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

bfs(graph, 'A')
