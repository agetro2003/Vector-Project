export default function Field({
    name,
    value,
    placeholder,
    onChange
}){

return (
    <input type= "text"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    />
)

}