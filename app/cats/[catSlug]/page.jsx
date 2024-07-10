import { getCat } from "@/lib/cats";
import Image from "next/image";

const CatDetailPage = ({ params }) => {
  const cat = getCat(params.catSlug);
  cat.description = cat.description.replace(/\n/g, "<br />");

  return (
    <>
      <header style={{ display: "flex", justifyContent: "flex-end", gap: 20 }}>
        <div style={{ textAlign: "end" }}>
          <p style={{ fontSize: 60, fontWeight: "bold" }}>{cat.name}</p>
          <p style={{ fontSize: 24, fontStyle: "italic", marginBottom: 20 }}>
            fur parent: {cat.owner}
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: cat.description }}
            style={{ width: 400 }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: 400,
            height: 400,
            // marginLeft: "auto",
          }}
        >
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </header>
    </>
  );
};

export default CatDetailPage;
