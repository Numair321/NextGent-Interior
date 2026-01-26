import Projects from "@/components/Projects";

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = decodeURIComponent(params.category);
    return (
        <div className="pt-20">
            <Projects initialCategory={category} showViewAll={false} />
        </div>
    );
}
