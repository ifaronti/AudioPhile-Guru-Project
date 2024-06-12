

export default function CheckoutInput({error,onBlur, pattern, value, id, label, labelId, type, placeholder, onchange}){
    //Input used for checkout data entries using props to populate the values of attributes
    const input = <input 
                type={type}
                value={value}
                name={id}
                onBlur={onBlur}
                id= {id}
                onChange={onchange}
                placeholder={placeholder}
                pattern={pattern}
                className="md:w-[309px] peer/dalo invalid:text-[red] outline-none invalid:border-[red] rounded-lg font-Manrope-Light indent-[24px] text-[16px] tracking-[-0.21px] text-black border-[#cfcfcf] border-[1px] hover:border-[#d87d4a] sm:w-[280px] h-[56px] border-[solid]"
            />

    //label for above input also using props for attributes
    const inLabel = 
            <label id={labelId} htmlFor={id} className="sm:w-[280px] mb-[9px] peer-invalid/dalo:text-[red] font-Manrope-Bold text-[12px] tracking-[-0.21px] md:w-[309px] items-center flex">
                {label}
                <p className="text-[red] font-Maronpe-Medium ml-auto text-[12px] tracking-[-0.21px]">{error && 'Wrong format'}</p>
            </label>

    return (
        //this uses flex column reverse css so the labels can be styled according to respective input
        <div className="relative h-[81px] flex flex-col-reverse">
            {input}
            {inLabel}
        </div>
    )
}