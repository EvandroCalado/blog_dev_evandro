import Image from 'next/image';
import BlogCard from '../BlogCard';
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { blogs } from '../../utils/blogs';
// import { getAllBLogs } from '../../utils/helpers';

export default async function HomePage() {
  // const blogs = await getAllBLogs(6);

  return (
    <section className="my-4 w-full">
      <div className="flex w-full items-center justify-center xs:flex-col md:flex-row">
        <div className="flex w-3/4 flex-col gap-3 p-8">
          <p className="text-start font-semibold tracking-wide text-gray-600 xs:w-full xs:text-2xl md:w-2/4 md:text-3xl lg:text-6xl">
            Blog pessoal para projetos e estudos.
          </p>
          <p className="text-start font-semibold tracking-normal text-gray-900 xs:w-full xs:text-sm sm:text-lg md:w-3/4 lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ipsam quia labore officia deserunt? Hic.
          </p>
        </div>
        <div className="p-8 xs:my-2 xs:w-3/4 md:mx-2 md:w-2/4">
          <Image
            src={
              'https://images.pexels.com/photos/15889175/pexels-photo-15889175/free-photo-of-fofo-macio-peludo-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt="CarolselImage"
            width={300}
            height={200}
            className="w-full rounded-2xl drop-shadow-2xl"
          />
        </div>
      </div>
      <hr className="my-4 p-3" />
      <div className="flex flex-col items-center justify-center">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Artigos Recentes</h2>
        </div>
        <div className="flex w-full max-w-[1300px] flex-wrap justify-center">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        <div className="w-full p-4 text-center">
          <Button className="ml-auto p-6 uppercase [&>svg]:hover:-mr-2 [&>svg]:hover:ml-4">
            Mais Artigos <ArrowRightIcon className="ml-2 duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
