"use client";
import { Typography, Input, Button } from "@material-tailwind/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState, type ChangeEvent } from "react";
import { format } from "date-fns";
//
import { Book } from "@prisma/client";
import { bookObj } from "@lib/objects";

// Page
export default function Page(): JSX.Element
{
  const [inputs, setInputs] = useState<Book>(bookObj);
  const [books, setBooks] = useState<Book[]>([]);

  // Handle Change
  function handleChange(e: ChangeEvent<HTMLInputElement>): void
  {
    setInputs((x: Book) => ({ ...x, [e.target.name]: e.target.value }));
  }

  // Handle Submit
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>): Promise<void>
  {
    e.preventDefault();

    if (inputs.title === "" || inputs.author === "" || !inputs.pages)
    {
      alert("Complete The Form!");
    }
    else
    {
      const response: Response = await fetch("/api/upsert",
        {
          mode: "same-origin",
          method: "POST",
          headers:
          {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(inputs)
        });

      const res: Book[] = await response.json();
      setBooks(res);
    }
  }

  // Row Mapper
  function rowMapper(x: Book): JSX.Element
  {
    return (
      <div className=" grid grid-cols-12" key={ x.title }>
        <div className=" p-2 col-span-4 flex justify-start items-center border border-r-gray-300">
          <h6 className=" font-primary text-sm text-gray-700"> { x.title } </h6>
        </div>
        <div className=" p-2 col-span-3 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-primary text-sm text-gray-700"> { x.author } </h6>
        </div>
        <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-primary text-sm text-gray-700"> { format(x.publishedAt, "dd/MM/yyyy") } </h6>
        </div>
        <div className=" p-2 col-span-1 flex justify-start items-center border border-x-gray-300">
          <h6 className=" font-primary text-sm text-gray-700"> { x.pages } </h6>
        </div>
        <div className=" p-2 col-span-1 flex justify-center items-center border border-x-gray-300">
          <Button
            type="button"
            variant="gradient"
            size="sm"
            color="gray"
            ripple
            className=" rounded-full"
          >
            <PencilSquareIcon className=" w-4 h-4" />
          </Button>
        </div>
        <div className=" p-2 col-span-1 flex justify-center items-center border border-l-gray-300">
          <Button
            type="button"
            variant="gradient"
            size="sm"
            color="gray"
            ripple
            className=" rounded-full"
          >
            <TrashIcon className=" w-4 h-4" />
          </Button>
        </div>
      </div >
    );
  }

  return (
    <>
      <div className=" h-20 flex justify-center items-center">
        <Typography variant="h1" color="blue-gray"> BOOK CRUD APP </Typography>
      </div>
      <form onSubmit={ handleSubmit } method="post" noValidate className=" w-full flex flex-col justify-center items-center">

        <div className=" w-3/5 my-2">
          <Input
            name="title"
            type="text"
            label="Title"
            variant="outlined"
            size="md"
            color="gray"
            autoFocus
            required
            value={ inputs.title }
            onChange={ handleChange }
          />
        </div>

        <div className=" w-3/5 my-2">
          <Input
            name="author"
            type="text"
            label="Author"
            variant="outlined"
            size="md"
            color="gray"
            required
            value={ inputs.author }
            onChange={ handleChange }
          />
        </div>

        <div className=" w-3/5 my-2">
          <Input
            name="pages"
            type="number"
            label="No. of Pages"
            variant="outlined"
            size="md"
            color="gray"
            required
            value={ inputs.pages || "" }
            onChange={ handleChange }
          />
        </div>

        <div className=" w-3/5 my-2">
          <Input
            name="publishedAt"
            type="date"
            label="Published At"
            variant="outlined"
            size="lg"
            color="gray"
            required
            value={ format(inputs.publishedAt, "yyyy-MM-dd") }
            onChange={ handleChange }
          />
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="md"
          color="gray"
          ripple
          className=" my-2"
        >
          Submit
        </Button>

      </form>

      <div className=" my-10 border border-gray-300 rounded-lg overflow-y-scroll">

        <div className=" h-10 grid grid-cols-12 bg-gray-100">
          <div className=" p-2 col-span-4 flex justify-start items-center border border-r-gray-300">
            <h6 className=" font-primary font-semibold text-sm text-gray-700"> Title </h6>
          </div>
          <div className=" p-2 col-span-3 flex justify-start items-center border border-x-gray-300">
            <h6 className=" font-primary font-semibold text-sm text-gray-700"> Author </h6>
          </div>
          <div className=" p-2 col-span-2 flex justify-start items-center border border-x-gray-300">
            <h6 className=" font-primary font-semibold text-sm text-gray-700"> Published Date </h6>
          </div>
          <div className=" p-2 col-span-1 flex justify-start items-center border border-x-gray-300">
            <h6 className=" font-primary font-semibold text-sm text-gray-700"> Pages </h6>
          </div>
          <div className=" p-2 col-span-1 flex justify-start items-center border border-x-gray-300">
            <h6 className=" font-primary font-semibold text-sm text-gray-700"> Edit </h6>
          </div>
          <div className=" p-2 col-span-1 flex justify-start items-center border border-l-gray-300">
            <h6 className=" font-primary font-semibold text-sm text-gray-700"> Delete </h6>
          </div>
        </div>

        { books.map(rowMapper) }

      </div>

    </>
  );
}