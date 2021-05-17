import BLOG from "../../blog.config";

const BlogTitle = () => {
    return (
        <div className="space-y-2 md:space-y-5 pb-8">
            <h1 className="font-extrabold tracking-tight capitalize text-3xl md:text-6xl">
                {BLOG.title}
            </h1>
            <p className="text-gray-600">
                {BLOG.description}
            </p>
        </div>
    );
};

export default BlogTitle;