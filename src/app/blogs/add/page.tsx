'use client';

import { useSession } from 'next-auth/react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { categories } from '../../../utils/categories';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

const Add = () => {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState('');
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const headingRef = useRef<HTMLHeadElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setImageFile(file!);
  //   setImageUrl(URL.createObjectURL(file!));
  // };

  const handlePost = (data: any) => {
    console.log(data);
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex w-1/4">
          <span className="mr-3 font-extrabold">Autor:</span>
          <span className="flex font-semibold uppercase">
            {session?.user?.name}
          </span>
        </div>
        <Button onClick={handleSubmit(handlePost)} className="uppercase">
          Publicar
        </Button>
      </div>
      {imageUrl && (
        <div className="relative mb-4 h-[500px] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt="New Post"
            fill
            className="mx-auto my-4 object-cover shadow-xl"
          />
        </div>
      )}
      <div className="mb-4 flex w-full">
        <Input
          {...register('image', {
            required: true,
            onChange(event) {
              setImageUrl(URL.createObjectURL(event.target.files[0]));
            },
          })}
          type="file"
          className={`${
            imageUrl ? 'text-violet-600' : 'text-gray-300'
          } mx-auto bg-gray-100 font-semibold sm:w-[300px] md:w-[500px]`}
        />
      </div>
      <h1
        // ref={headingRef}
        contentEditable
        suppressContentEditableWarning
        className="mx-auto h-28 w-full border-none text-center text-2xl font-semibold outline-none focus:border-none"
      >
        Digite um Título
      </h1>
      <div className="mb-4 flex w-full">
        <Input
          {...register('location', { required: true })}
          placeholder="localidade Ex: Pernambuco, Brasil"
          type="text"
          className={`mx-auto bg-gray-100 font-semibold sm:w-[300px] md:w-[500px]`}
        />
      </div>
      <div className="mx-auto max-w-[500px]">
        <Select
        //  {...register('category', { required: true })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorias</SelectLabel>
              {categories.map((category) => (
                <SelectItem
                  key={category.id}
                  value={category.name.toLowerCase()}
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* <div className="p-4">
        <Editor
          editorStyle={{
            width: '100%',
            minHeight: '50vh',
            height: 'auto',
            border: '1px solid #0a0a0a',
            borderRadius: '0.5rem',
          }}
        />
      </div> */}
    </section>
  );
};

export default Add;
