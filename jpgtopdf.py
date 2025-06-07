import os
from PIL import Image
import img2pdf
from PyPDF2 import PdfReader, PdfWriter

# === Configuration ===
input_folder = r"C:\Users\reuve\OneDrive\Documents\allpages"
compressed_folder = os.path.join(input_folder, "Compressed")
output_pdf = os.path.join(input_folder, "diary_compressed.pdf")
split_output_folder = os.path.join(input_folder, "Diary_Splits")
max_pdf_size_mb = 50  # Limit per PDF file

# === Setup folders ===
os.makedirs(compressed_folder, exist_ok=True)
os.makedirs(split_output_folder, exist_ok=True)

# === Step 1: Compress and resize images ===
print("Compressing and resizing images...")
for filename in sorted(os.listdir(input_folder)):
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(compressed_folder, filename)
        with Image.open(input_path) as img:
            img = img.convert("RGB")
            img = img.resize((1240, 1754))  # A4 size at 150 DPI
            img.save(output_path, "JPEG", quality=70)
print("Compression done.")

# === Step 2: Convert to single PDF ===
print("Creating combined PDF...")
image_files = [
    os.path.join(compressed_folder, f)
    for f in sorted(os.listdir(compressed_folder))
    if f.lower().endswith(".jpg")
]
with open(output_pdf, "wb") as f:
    f.write(img2pdf.convert(image_files))
print(f"Combined PDF saved at: {output_pdf}")

# === Step 3: Split PDF if too big ===
def split_pdf_by_size(input_pdf, output_folder, max_size_mb):
    reader = PdfReader(input_pdf)
    total_pages = len(reader.pages)
    part_number = 1
    writer = PdfWriter()

    for page_number in range(total_pages):
        writer.add_page(reader.pages[page_number])
        temp_path = os.path.join(output_folder, f"temp_part_{part_number}.pdf")
        with open(temp_path, "wb") as temp_file:
            writer.write(temp_file)
        size = os.path.getsize(temp_path) / (1024 * 1024)

        if size >= max_size_mb or page_number == total_pages - 1:
            final_path = os.path.join(output_folder, f"diary_part_{part_number}.pdf")
            os.rename(temp_path, final_path)
            print(f"Created: {final_path}")
            writer = PdfWriter()
            part_number += 1
        else:
            os.remove(temp_path)

# === Check size and split if needed ===
pdf_size = os.path.getsize(output_pdf) / (1024 * 1024)
if pdf_size > max_pdf_size_mb:
    print("Splitting PDF...")
    split_pdf_by_size(output_pdf, split_output_folder, max_pdf_size_mb)
    print("Splitting complete.")
else:
    print("No split needed. PDF is under size limit.")
