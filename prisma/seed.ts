import prisma from "@/lib/db";

async function main(){
    const blogPosts = [
    //     {
    //   slug: "introduction-to-react",
    //   title: "Introduction to React",
    //   content: `# Introduction to react
    //     React lets you build interactive user interfaces using components.

    //     ## Key Concepts
    //     - JSX for writing UI
    //     - Components help split UI into small parts
    //     - State and props manage data flow

    //     **Note:** React works perfectly together with Next.js.`,
    // },
        {
      slug: "learn-nextjs-basics",
      title: "Learn next.js Basics",
      content: `# Learn Next.js Basics
        Next.js is a popular React framework that helps you build fast and SEO-friendly websites.

        ## Why Use Next.js?
        - Built-in routing system
        - server-side rendering and static generation
        - Great developer experience

        **Tip:** Start with the App Router if you are building new projects.`,
    },
    ]

    for(const post of blogPosts){
        await prisma.blogPost.create({
            data:post,
        })
    }
}
main().catch(e=>{
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})