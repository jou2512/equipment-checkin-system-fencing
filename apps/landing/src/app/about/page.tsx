import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/md/mdx-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FECS | Fencing Equipment Check System",
  description:
    "Learn about the Fencing Equipment Check System (FECS) - revolutionizing tournament equipment verification with modern technology.",
  keywords: [
    "fencing",
    "equipment check",
    "tournament management",
    "FECS",
    "about",
  ],
};

async function getAboutContent() {
  try {
    const contentPath = path.join(process.cwd(), "src", "content", "about.mdx");
    const content = await fs.readFile(contentPath, "utf8");

    console.log("Loaded about content:", content.slice(0, 100)); // Log first 100 characters for debugging
    return content;
  } catch (error) {
    console.error("Error loading about content:", error);
    return "# About FECS\n\nContent could not be loaded. Please try again later.";
  }
}

export default async function AboutPage() {
    const content = await getAboutContent();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-4xl">
      <MDXRemote source={content} components={useMDXComponents({})} />
    </div>
  );
}
