import React from "react";
import BlogTitle from "../components/organisms/blog-title";
import Meta from "../components/organisms/meta";
import Nav from "../components/organisms/nav";
import StickyHeaderContent from "../components/templates/sticky-header-content";

const NotFound = () => (
    <>
        <Meta title="404 - Not Found" canonical="404" />
        <StickyHeaderContent header={<Nav />} content={
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <BlogTitle />
                <div>
                    <h2 className="mx-auto my-32 text-center font-bold capitalize text-2xl md:text-5xl">
                        404 - Not Found
                    </h2>
                </div>
            </div>
        } />
    </>
);

export default NotFound;
