import os
import fitz  # PyMuPDF

# Path to original PDF
input_pdf_path = r"C:\Users\reuve\OneDrive\Documents\diary.pdf"

# Output folder for parts
output_folder = r"C:\Users\reuve\OneDrive\Documents\diary_parts_small"
os.makedirs(output_folder, exist_ok=True)

# Number of pages per part
pages_per_file = 5

# Open the original PDF
doc = fitz.open(input_pdf_path)
total_pages = len(doc)
print(f"Total pages in diary: {total_pages}")

# Split and save
part = 1
for start in range(0, total_pages, pages_per_file):
    end = min(start + pages_per_file, total_pages)
    new_doc = fitz.open()
    
    for page_number in range(start, end):
        new_doc.insert_pdf(doc, from_page=page_number, to_page=page_number)
    
    output_path = os.path.join(output_folder, f"part_{part}.pdf")
    new_doc.save(output_path)
    new_doc.close()
    
    print(f"Saved: {output_path} ({end - start} pages)")
    part += 1

print("Done! All parts saved in:", output_folder)
