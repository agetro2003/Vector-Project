import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

export default function Login(props){
    const {register, formState:{errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    }); 

    const fnSend = (data) =>{
        alert(JSON.stringify(data));
      
    }
return (
    <div>

    <h1>Login</h1>
<form onSubmit={handleSubmit(fnSend)}>
     <div>
         <label> Email </label>
         <input type="email" {...register("email")}/>
         <p> {errors.email?.message}</p>
     </div>
     <div> 
     <label> Password </label>
         <input type="password" {...register("password")}/>
         <p> {errors.password?.message}</p>
     </div>
     <input type="submit"/>
     </form>
    </div>
)
}