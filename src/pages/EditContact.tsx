import { Form, useLoaderData, useParams } from "react-router-dom";

export const EditContact: React.FC = () => {
  const { id } = useParams();
  const contact: any = useLoaderData();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="my-5 mb-16 text-3xl font-semibold">Edit Contact</p>
      <Form
        method="post"
        action="/edit/:id"
        className="flex flex-col items-end gap-10"
      >
        <input
          type="text"
          name="id"
          id="id"
          className="hidden"
          value={contact.id}
        />
        <div className="flex gap-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" defaultValue={contact.name} />
        </div>
        <div className="flex gap-4">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            defaultValue={contact.phone_number}
          />
        </div>

        <button
          className="mt-6 bg-black px-4 py-1 text-white rounded-lg"
          //   onClick={handleClick}
        >
          Edit Contact
        </button>
      </Form>
    </div>
  );
};
