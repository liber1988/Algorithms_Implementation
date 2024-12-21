import heapq

def prim(graph, start):
    mst = []  # To store edges of the Minimum Spanning Tree
    visited = set()  # To track visited nodes
    min_heap = [(0, start, None)]  # Priority queue (weight, current_node, parent_node)

    while min_heap:
        weight, current_node, parent = heapq.heappop(min_heap)
        
        if current_node in visited:
            continue
        
        visited.add(current_node)
        
        # Add edge to MST (skip the first node as it has no parent)
        if parent is not None:
            mst.append((parent, current_node, weight))

        # Add all unvisited neighbors to the priority queue
        for neighbor, edge_weight in graph[current_node]:
            if neighbor not in visited:
                heapq.heappush(min_heap, (edge_weight, neighbor, current_node))

    return mst

# Example Usage
graph = {
    0: [(1, 10), (2, 6), (3, 5)],
    1: [(0, 10), (3, 15)],
    2: [(0, 6), (3, 4)],
    3: [(0, 5), (1, 15), (2, 4)]
}

start_node = 0
mst = prim(graph, start_node)

# Print the result
print("Edges in the Minimum Spanning Tree:")
for u, v, weight in mst:
    print(f"{u} -- {v} [Weight: {weight}]")
