import Image from "next/image";

type BrandImageProps = { className?: string; alt?: string };

export function BrandImage({ className = "", alt = "Khadijah personal logo" }: BrandImageProps) {
  return (
    <Image
      src="/images/khadijah-logo-420.png"
      alt={alt}
      width={420}
      height={420}
      sizes="38px"
      className={`brand-image ${className}`}
    />
  );
}
