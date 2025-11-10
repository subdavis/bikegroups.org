#!/bin/zsh

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed. Please install it first."
    echo "You can install it using: sudo apt-get install webp (for Ubuntu/Debian)"
    echo "or: brew install webp (for macOS with Homebrew)"
    exit 1
fi

# Loop through all image files in the current directory
for img in *.{jpg,jpeg,png,tiff,bmp}(N); do
    output_file="$img.webp"

    # if output already exists, skip it
    if [[ -f "$output_file" ]]; then
        echo "Output file $output_file already exists. Skipping..."
        continue
    fi
    
    echo "Converting $img to WebP with width 600px..."
    cwebp -q 60 -resize 600 0 "$img" -o "$output_file"
    
    if [[ $? -eq 0 ]]; then
        echo "Successfully converted $img to $output_file"
    else
        echo "Failed to convert $img"
    fi
done
