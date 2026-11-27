import Image from "next/image";

type BrandImageProps = { className?: string; alt?: string };

export function BrandImage({ className = "", alt = "Khadijah personal logo" }: BrandImageProps) {
  return (
    <Image
      src="/images/Logo.png"
      alt={alt}
      width={2000}
      height={2000}
      sizes="60px"
      className={`brand-image ${className}`}
    />
  );
}
