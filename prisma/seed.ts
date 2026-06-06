import prisma from "@/lib/db";

async function main(){
    const blogPosts = [
        {
      id:"1",
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