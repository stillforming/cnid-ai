import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guidesDir = path.join(process.cwd(), "content", "guides");

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  order: number;
}

export function getAllGuides(): GuideMeta[] {
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".md"));

  const guides = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(guidesDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      readTime: data.readTime || "3 min",
      order: data.order || 99,
    };
  });

  return guides.sort((a, b) => a.order - b.order);
}

export function getGuide(slug: string): { meta: GuideMeta; content: string } | null {
  const filePath = path.join(guidesDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      readTime: data.readTime || "3 min",
      order: data.order || 99,
    },
    content,
  };
}
