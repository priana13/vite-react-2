import Input from "./Input"
import Label from "./Label";

const InputForm = (props) => {

    const {type , name , placeholder , label} = props;

    return (

        <div className="my-6">
            <Label htmlFor={name} >{label}</Label>
            <Input type={type} name={name} placeholder={placeholder}></Input>
        </div>

    )

}

export default InputForm;



