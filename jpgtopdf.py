from fpdf import FPDF
from PIL import Image
import os

folder = r"C:\Users\reuve\OneDrive\Documents\Diary"
output_pdf = r"C:\Users\reuve\OneDrive\Documents\diary.pdf"

pdf = FPDF(unit="mm", format="A4")
a4_width_mm, a4_height_mm = 210, 297

image_files = sorted([f for f in os.listdir(folder) if f.lower().endswith('.jpg')])

for image_file in image_files:
    img_path = os.path.join(folder, image_file)
    img = Image.open(img_path)

    # Get image dimensions in pixels
    img_width_px, img_height_px = img.size
    # DPI assumption: screen/phone scan = 96 or 150 dpi
    dpi = 150
    img_width_mm = img_width_px * 25.4 / dpi
    img_height_mm = img_height_px * 25.4 / dpi

    # Scale to fit inside A4 while preserving aspect ratio
    scale = min(a4_width_mm / img_width_mm, a4_height_mm / img_height_mm)
    final_width = img_width_mm * scale
    final_height = img_height_mm * scale

    # Center the image on the page
    x = (a4_width_mm - final_width) / 2
    y = (a4_height_mm - final_height) / 2

    # Save resized/compressed temporary image
    temp_path = "temp.jpg"
    img.save(temp_path, "JPEG", quality=85)

    pdf.add_page()
    pdf.image(temp_path, x, y, final_width, final_height)

pdf.output(output_pdf, "F")
