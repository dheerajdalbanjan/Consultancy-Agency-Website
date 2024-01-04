import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


const Pricing = ()=>{

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
        <div className="flex max-w-6xl mx-auto flex-col space-y-3 items-center justify-center">
            <h2 className="text-3xl w-full sm:text-5xl font-extrabold antialiased mt-6 mb-3 pl-5 sm:pl-8 list-disc ">Basic Pricing</h2>
            <div className="flex flex-col md:flex-row my-5 items-center justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i)=>(
                        <Card key={i} className=" pt-6 pb-1 px-1 relative overflow-hidden">
                            <p className="absolute top-3 -left-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 -rotate-45 text-neutral-900  text-[13px] uppercase">{e.type}</p>
                            <CardHeader>
                                <CardTitle>{e.Price}</CardTitle>
                                <CardDescription>{e.Package}</CardDescription>
                            </CardHeader>
                            <CardContent>
                               <p>Session Length: <span className="px-2 text-center py-0.5 text-base rounded-xl bg-neutral-100 dark:bg-neutral-700">{e.SessionLength}</span></p>
                            </CardContent>
                            <CardFooter >
                                <Button className="w-full ">Buy now</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
            <a href="/pricing"><Button size={'lg'} variant={"outline"} className="rounded-full ">Explore More</Button></a>
        </div>
    )
}

export default Pricing ;