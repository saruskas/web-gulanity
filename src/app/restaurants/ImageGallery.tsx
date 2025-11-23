"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

type ImageItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type ImageGalleryProps = {
  images: ImageItem[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const hasImages = images && images.length > 0;
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);
  if (!hasImages) {
    return null;
  }
  const duplicatedImages = [...images, ...images, ...images];
  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };
  const originalImages = images;
  return (
    <>
      <div className="restaurants-image-gallery-container">
        <div className={`restaurants-image-gallery-track ${selectedImage ? "restaurants-image-gallery-track-paused" : ""}`}>
          {duplicatedImages.map((image, index) => {
            const originalIndex = index % originalImages.length;
            const originalImage = originalImages[originalIndex];
            return (
              <div key={index} className="restaurants-image-gallery-item">
                <div 
                  className="restaurants-image-gallery-image-wrapper"
                  onClick={() => handleImageClick(originalImage)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 300}
                    height={image.height || 300}
                    className="restaurants-image-gallery-image"
                    loading={index < 12 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedImage && (
        <div className="restaurants-image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="restaurants-image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="restaurants-image-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width || 1200}
              height={selectedImage.height || 1200}
              className="restaurants-image-modal-image"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

