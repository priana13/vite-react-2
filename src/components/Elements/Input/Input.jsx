const Input = (props) => {

    const {type , placeholder , name} = props;

    return (
        <input type={type} name={name} className="border rounded w-full py-2 px-3 text-slate-700 placehoder:opacity-50"
            placeholder={placeholder} />
    )
}

export default Input;