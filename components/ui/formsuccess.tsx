import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";


interface FormProps {
    msg: string 
}

const Formsuccess = ({msg} : FormProps) =>{
    return(
        <div className=" bg-emerald-600/10 text-emerald-600 my-3  py-2 px-5 rounded-md text-center  flex items-center justify-start !w-full space-x-2">
            <CheckCircledIcon />
            <p>{msg}</p>
        </div>
    )
}

export default Formsuccess ;