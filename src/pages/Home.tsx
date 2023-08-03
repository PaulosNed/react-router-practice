import { useLoaderData } from "react-router-dom";
import { Contact } from "../models/Contact";
import { Card } from "../components/Card";

export const Home: React.FC = () => {
  const contacts: any = useLoaderData();
  console.log("contacts", contacts);

  return (
    <div className="flex flex-col gap-2 mx-auto">
      {contacts.map((contact: Contact) => (
        <Card
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone_number={contact.phone_number}
        />
      ))}
    </div>
  );
};
