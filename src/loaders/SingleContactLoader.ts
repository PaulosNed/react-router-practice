export const singleContactLoader = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/contacts/${id}`);

  return res.json();
};
