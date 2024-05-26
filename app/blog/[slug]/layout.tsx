import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    { params }: {params:{slug: string}},
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug ;
    let data ;
    let title , description ; 
   
    // fetch data
    try {
        const product = await fetch(`http://localhost:3000/api/blog/${slug}`) ;
        data = await product.json() ; 
        data = data.data ;
    } catch (error) {
        console.log(error)
    }
    finally{
        title = data.title ;
        let split=data.content.split('\n\n') //split up
        description = split[1]
    }
   
   
    return {
      title: title,
      description: description
    }
  }


  const Layout = ({children}: {children:React.ReactNode}) => {

    return (
        <div>
            {children}
        </div>
    )
  }

  export default Layout ;