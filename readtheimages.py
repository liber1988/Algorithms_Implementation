import pytesseract
from PIL import Image
import os

# ✅ Указан правильный путь к tesseract.exe
pytesseract.pytesseract.tesseract_cmd = r"C:\Users\reuve\AppData\Local\Programs\Tesseract-OCR\tesseract.exe"

# Папка с изображениями
image_folder = r"C:\Users\reuve\OneDrive\Documents\diary_images"

# Файл, в который будет записан распознанный текст
output_path = os.path.join(image_folder, "diary_text.txt")

# Язык OCR
lang = "rus"

# Обработка изображений
with open(output_path, "w", encoding="utf-8") as outfile:
    for filename in sorted(os.listdir(image_folder)):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_path = os.path.join(image_folder, filename)
            print(f"Processing: {filename}")
            text = pytesseract.image_to_string(Image.open(image_path), lang=lang)
            outfile.write(f"\n--- {filename} ---\n{text}\n")

print(f"\n✅ Done! Output saved as: {output_path}")
