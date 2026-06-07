import prisma from "@/lib/db"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AuthButton from "@/components/AuthButton"
import CommentForm from "@/components/CommentForm"
import CommentList from "@/components/CommentList"

export default async function page(){
    const comments = await prisma.comment.findMany({
        include: { user:true },
        orderBy: {createdAt: "desc"}
    })
  return (
    <main className="mih-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
                <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2"/>
                    Back to Home
                </Link>
            </Button>

            <h1 className="text-3xl font-bold mb-2">Comments</h1>
            <p className="text-muted-foreground mb-8">
                Sign in with GitHub to leave a comment or message.
            </p>


            <div className="mb-8">
                <AuthButton />
            </div>
            <CommentForm/>

            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">
                    All Comments ({comments.length})
                </h2>
                <CommentList comments={comments} />
            </div>
        </div>
    </main>
  )
}