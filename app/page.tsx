import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Rahul Yadav</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">A full stack developer passionate about building great web experiences.</p>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/comments">
              <MessageCircle className="w-4 h-4 mr-2"/>
              Contact Me
            </Link>
          </Button>
        </div>
      </section>

    {/* About section */}
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About me</h2>
      <p className="text-muted-foreground">I specialize in React, Next.js, and Typesctipt. With the experience of number of projects. I love turning ideas into reality.</p>
    </section>
    </main>
  );
}
