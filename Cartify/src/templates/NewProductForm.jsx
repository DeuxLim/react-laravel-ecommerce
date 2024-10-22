import { useState } from "react";
import { FormInput } from "./CustomFormElements";

export default function NewProductForm(){
    const [ FormData, setFormData ] = useState({
        product_name : ""
    });
    const [ error, setError ] = useState({});

    return(
        <div className="h-screen w-full flex justify-center items-center ">
            <div className="h-full w-full mx-60 ">
                <div className="h-full w-full p-11 shadow-lg">

                    <form method="POST">
                        <div className="flex flex-row gap-4">
                            <FormInput
                                type="text"
                                value={FormData.product_name}
                                placeholder="Product Name"
                                required
                                onChange={(e) => setFormData((current) => ({...current, product_name : e.target.value}))}
                                error={error.product_name}
                            />
                            <FormInput
                                type="text"
                                value={FormData.product_name}
                                placeholder="Product Name"
                                required
                                onChange={(e) => setFormData((current) => ({...current, product_name : e.target.value}))}
                                error={error.product_name}
                            />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
