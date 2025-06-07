import fitz  # PyMuPDF
import os

# Path to your PDF
pdf_path = r"C:\Users\reuve\OneDrive\Documents\diary.pdf"

# Output folder for images
output_folder = r"C:\Users\reuve\OneDrive\Documents\diary_images"
os.makedirs(output_folder, exist_ok=True)

# Open the PDF
doc = fitz.open(pdf_path)

# Render each page as image
for page_num in range(len(doc)):
    page = doc.load_page(page_num)  # 0-based indexing
    pix = page.get_pixmap(dpi=150)  # higher dpi = better quality
    image_path = os.path.join(output_folder, f"page_{page_num + 1:03}.jpg")
    pix.save(image_path)
    print(f"Saved: {image_path}")

print("✅ Done! All pages saved as JPG images.")
