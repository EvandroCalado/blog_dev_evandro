'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

export type BlogCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  location: string;
};

export default function BlogCard(blog: BlogCardProps) {
  return (
    <Card className="mx-4 my-2 flex w-[400px] flex-col rounded-lg p-4 duration-500 hover:border-violet-600">
      <CardHeader>
        <Image
          src={
            blog.imageUrl ??
            'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'
          }
          alt={blog.title}
          width={400}
          height={100}
          className="h-48 rounded-sm"
        />
      </CardHeader>
      <CardTitle className="my-4">{blog.title}</CardTitle>
      <CardContent className="mb-4 line-clamp-4 h-[100px] w-full text-slate-900">
        <div
          className="w-full text-left tracking-wide"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      </CardContent>
      <CardFooter className="w-full ">
        <Button className="ml-auto uppercase">Ler mais</Button>
      </CardFooter>
    </Card>
  );
}
