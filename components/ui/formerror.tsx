import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


interface FormProps {
    error: string 
}

const Formerror = ({error} : FormProps) =>{
    return(
        <div className=" bg-red-500/10 text-red-500 my-3  py-2 px-5 rounded-md text-center flex items-center justify-start w-full space-x-2">
            <ExclamationTriangleIcon />
            <p>{error}</p>
        </div>
    )
}

export default Formerror ;