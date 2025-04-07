import React from "react";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "blog 1 ",
      describe: "blog 1 description",
    },
    {
      id: 2,
      title: "blog 2 ",
      describe: "blog 2 description",
    },
  ];

  return (
    <div>
      <h2>Blog page</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
