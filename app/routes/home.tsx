import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta( {}: Route.MetaArgs ) {
    return [
        { title: "Resumora" },
        {
            name: "description",
            content: "Smart feedback for your dream role, guided by Aurora, goddess of new beginnings"
        },
    ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    // Redirect the user to the login page if not authenticated.
    useEffect( () => {
        if ( !auth.isAuthenticated ) navigate( "/auth?next=/" );
    }, [ auth.isAuthenticated ] )

    //  TODO min-h-screen todo should this have
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar/>
        <section className="main-section">
            <div className="page-heading py-16">
                <h1>Track Your Applications & Resume Ratings</h1>
                <h2>
                    Review your submissions and check AI-powered feedback.
                </h2>
            </div>

            { resumes.length > 0 && (
                <div className="resumes-section">
                    { resumes.map( ( resume: Resume ) => (
                        <ResumeCard key={ resume.id } resume={ resume }/>
                    ) ) }
                </div>
            ) }
        </section>
    </main>
}
