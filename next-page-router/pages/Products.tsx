export default function Products({data}:any){
    
    console.log("from products page : " , data)
    return(
        <div>
            <table className="mx-auto my-5 w-[60%]">
                <thead>
                    <tr className="bg-blue-900 text-white">
                        <th className="border border-white p-3 text-center rounded-tl-[5px]">Id</th>
                        <th className="border border-white p-3 text-center">Title</th>
                        <th className="border border-white p-3 text-center">Description</th>
                        <th className="border border-white p-3 text-center">Category</th>
                        <th className="border border-white p-3 text-center rounded-tr-[5px]">Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.products?.map((item:any)=>(
                            <tr key={item.id} >
                                <td className="border border-black-600 p-3 text-center">{item.id}</td>
                                <td className="border border-black-600 p-3">{item.title}</td>
                                <td className="border border-black-600 p-3 px-7 text-justify">{item.description}</td>
                                <td className="border border-black-600 p-3 text-center">{item.category}</td>
                                <td className="border border-black-600 p-3 text-center">{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    return{
        props: {
            data
        }
    }
}