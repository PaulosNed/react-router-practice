import { useLoaderData, useParams } from "react-router-dom"
import { Contact } from "../models/Contact"

export const ContactDetail: React.FC = () => {
    const { id } = useParams()
    const contact: any = useLoaderData()

    return <div className="flex justify-center">
        <div className="w-1/2 mx-auto bg-white shadow-xl rounded-xl p-5">
            <p className="text-3xl font-semibold">Contact Details</p>
            <div className="mt-8">
                <div className="flex  gap-4">
                    <p className="font-bold">Name:</p>
                    <p className="text-slate-500">{contact.name}</p>
                </div>
                <div className="flex  gap-4">
                    <p className="font-bold">Phone Number:</p>
                    <p className="text-slate-500">{contact.phone_number}</p>
                </div>
            </div>
        </div>
    </div>
}