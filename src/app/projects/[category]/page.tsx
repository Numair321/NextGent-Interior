import Projects from "@/components/Projects";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: rawCategory } = await params;
    const category = decodeURIComponent(rawCategory);
    return (
        <div className="pt-20">
            <Projects initialCategory={category} showViewAll={false} />
        </div>
    );
}
