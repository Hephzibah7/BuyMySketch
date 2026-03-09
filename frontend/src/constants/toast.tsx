import { toast } from "react-toastify";

const toastwork=(state:string, msg:string)=>{
    if(state=="error"){
        toast.error(msg, {
                position: "top-right",
                autoClose:2000,
                
              });
    }
    else{
        toast.success(msg, {
                position: "top-right",
                autoClose:2000,
                
              });

    }
    
}

export default toastwork;