import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricing = () =>{
    var pricing = [
        {
            type: "Starter",
            Package: "15 Minute Session Package",
            Price: "₹39",
            SessionsIncluded: "1 session",
            SessionLength: "15 mins",
            CounselorMatching: "Assigned based on needs"
        },
        {
            type: "Starter",
            Package: "30 Minute Session Package",
            Price: "₹69",
            SessionsIncluded: "1 sessions",
            SessionLength: "30 mins",
            CounselorMatching: "Assigned based on needs"
        },
        {
            type: "Add On",
            Package: "15 Minute Add-On",
            Price: "₹24/session",
            SessionsIncluded: null,
            SessionLength: "15 minutes",
            CounselorMatching: null
        },
        {
            type: "Add On",
            Package: "30 Minute Add-On",
            Price: "₹45/session",
            SessionsIncluded: null,
            SessionLength: "30 minutes",
            CounselorMatching: null
        }
    ];
    


    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <h1 className="bg-clip-text bg-gradient-to-br antialiased   text-center my-3 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-extrabold  tracking-tight lg:text-5xl">Pricing</h1>
            <div className="flex flex-col md:flex-row my-5 items-center justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i)=>(
                        <Card key={i} className="min-w-[250px] w-full pt-6 pb-1 px-1 relative overflow-hidden">
                            <p className="absolute top-3 -left-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 -rotate-45 text-neutral-900  text-[13px] uppercase">{e.type}</p>
                            <CardHeader>
                                <CardTitle>{e.Price}</CardTitle>
                                <CardDescription>{e.Package}</CardDescription>
                            </CardHeader>
                            <CardContent>
                               <p>Session Length: <span className="px-2 text-center py-0.5 text-base rounded-xl bg-neutral-700">{e.SessionLength}</span></p>
                            </CardContent>
                            <CardFooter >
                                <Button className="w-full ">Buy now</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default pricing ;