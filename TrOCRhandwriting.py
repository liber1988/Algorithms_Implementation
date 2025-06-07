import os
from PIL import Image
from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import torch

# === 1. Folder with images ===
image_folder = r"C:\Users\reuve\OneDrive\Documents\diary_images"

# === 2. Output text file ===
output_file = os.path.join(image_folder, "diary_text.txt")

# === 3. Load TrOCR model ===
print("Loading TrOCR model (one-time download)...")
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# Use GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# === 4. Process all images ===
images = sorted([f for f in os.listdir(image_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg'))])
print(f"Found {len(images)} images")

with open(output_file, "w", encoding="utf-8") as out_file:
    for idx, filename in enumerate(images, 1):
        image_path = os.path.join(image_folder, filename)
        print(f"Processing [{idx}/{len(images)}]: {filename}")
        try:
            image = Image.open(image_path).convert("RGB")
            pixel_values = processor(images=image, return_tensors="pt").pixel_values.to(device)
            generated_ids = model.generate(pixel_values)
            text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
            out_file.write(f"\n\n=== {filename} ===\n{text.strip()}\n")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print(f"\nDone! All recognized text saved to: {output_file}")
