import { Link } from "react-router-dom";
import { Contact } from "../models/Contact";

export const Card: React.FC<Contact> = ({ id, name, phone_number }) => {
  return (
    <div className="w-96 rounded-lg bg-white shadow-xl p-6">
      <div className="flex justify-between items-end">
        <Link to={`/contacts/${id}`}>
          <p className="text-2xl font-semibold">{name}</p>
          <p className="text-sm text-slate-500">{phone_number}</p>
        </Link>
        <Link to={`/edit/${id}`} className="bg-black px-4 py-1 rounded-lg text-white">Edit</Link>
      </div>
    </div>
  );
};
