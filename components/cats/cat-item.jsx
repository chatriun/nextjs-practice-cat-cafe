import Image from "next/image";
import Link from "next/link";

const CatItem = ({ cat }) => {
  return (
    <div style={{ display: "flex", gap: 16, border: "2px solid gray" }}>
      <div
        style={{
          position: "relative",
          width: 200,
          height: 200,
        }}
      >
        <Image
          src={`https://anyaweesr-nextjs-practice-cat-tinder.s3.amazonaws.com/${cat.image}`}
          alt={cat.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{cat.name}</h2>
        <span style={{ marginBottom: 28 }}>owner: {cat.owner}</span>
        <Link href={`/cats/${cat.slug}`} style={{ color: "blue" }}>
          view detail
        </Link>
      </div>
    </div>
  );
};

export default CatItem;
