from collections import defaultdict, deque

def topological_sort(vertices, edges):
    # Build the adjacency list and in-degree count
    adj_list = defaultdict(list)
    in_degree = {v: 0 for v in range(vertices)}

    for u, v in edges:
        adj_list[u].append(v)
        in_degree[v] += 1

    # Initialize the queue with vertices of in-degree 0
    queue = deque([v for v in range(vertices) if in_degree[v] == 0])
    topo_order = []

    while queue:
        current = queue.popleft()
        topo_order.append(current)

        # Reduce the in-degree of neighbors
        for neighbor in adj_list[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # Check for cycles (if topological order does not include all vertices)
    if len(topo_order) != vertices:
        raise ValueError("The graph is not a DAG (it contains a cycle)")

    return topo_order

# Example Usage
vertices = 6
edges = [
    (5, 2), (5, 0), (4, 0), (4, 1), (2, 3), (3, 1)
]

try:
    order = topological_sort(vertices, edges)
    print("Topological order:", order)
except ValueError as e:
    print(e)
