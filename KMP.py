def compute_lps_array(pattern):
    """Preprocess the pattern to create the LPS array."""
    lps = [0] * len(pattern)
    length = 0  # Length of the previous longest prefix suffix
    i = 1

    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1

    return lps

def kmp_search(text, pattern):
    """Perform KMP search to find occurrences of the pattern in the text."""
    lps = compute_lps_array(pattern)
    i = 0  # Index for text
    j = 0  # Index for pattern
    occurrences = []

    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1

        if j == len(pattern):
            occurrences.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return occurrences

# Example Usage
text = "ababcabcabababd"
pattern = "ababd"
result = kmp_search(text, pattern)

# Print the result
if result:
    print(f"Pattern found at indices: {result}")
else:
    print("Pattern not found")
