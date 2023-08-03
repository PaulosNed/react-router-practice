import { redirect } from "react-router-dom";

export const contactAction = async ({ request }: any) => {
    
    const data = await request.formData()

    const submission = {
        id: Date.now(),
        name: data.get('name'),
        phone_number: data.get('phone_number')
    }

    await fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });

    return redirect('/')
  };

export const editContactAction = async ({ request }: any) => {
    
    const data = await request.formData()

    const submission = {
        id: data.get('id'),
        name: data.get('name'),
        phone_number: data.get('phone_number')
    }

    await fetch(`http://localhost:4000/contacts/${submission.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });

    return redirect('/')
  };
  