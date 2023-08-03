import { Form } from "react-router-dom";

export const AddContact: React.FC = () => {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="my-5 mb-16 text-3xl font-semibold">Add Contact</p>
      <Form method="post" action="/add" className="flex flex-col items-end gap-10">
        <div className="flex gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
          />
        </div>

        <button
          className="mt-6 bg-black px-4 py-1 text-white rounded-lg"
        //   onClick={handleClick}
        >
          Add Contact
        </button>
      </Form>
    </div>
  );
};
