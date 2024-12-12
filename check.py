def dfs_recursive(graph, start, visited=None, result=None):
    if visited is None:
        visited = set()
    if result is None:
        result = []

    visited.add(start)
    result.append(start)  # Add the node to the result list
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited, result)

    return result
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    result = []

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            result.append(node)  # Add the node to the result list
            stack.extend(reversed(graph[node]))  # Reverse for consistent order with recursion

    return result
# Graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Recursive DFS
print("Recursive DFS result:")
recursive_result = dfs_recursive(graph, 'A')
print(" -> ".join(recursive_result))

# Iterative DFS
print("\nIterative DFS result:")
iterative_result = dfs_iterative(graph, 'A')
print(" -> ".join(iterative_result))
