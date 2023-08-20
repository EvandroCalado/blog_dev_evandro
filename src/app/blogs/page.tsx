import { categories } from '../../utils/categories';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { blogs } from '../../utils/blogs';
import BlogCard from '../../components/BlogCard';

const Blogs = () => {
  return (
    <section className="h-full w-full">
      <div className="my-10 flex flex-col gap-3 p-8">
        <h4 className="text-3xl font-semibold">
          Explorar artigos por categorias
        </h4>
        <p className="text-xl font-semibold">Lorem ipsum dolor sit amet.</p>
      </div>
      <nav className="sticky top-0 mb-4 flex h-20 w-full items-center justify-between gap-4 border-b-[1px] border-t-[1px] bg-gray-100 bg-center xs:p-2 md:p-8">
        <div className="flex items-center gap-6 md:w-1/4 lg:w-1/6">
          <p className="text-2xl font-semibold">Filtrar</p>
          <Select>
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
        <div className="flex items-center xs:w-3/4 xs:gap-2 md:w-2/4 md:gap-6 lg:w-1/4">
          <p className="text-2xl font-semibold">Buscar</p>
          <div className="relative flex w-full items-center">
            <Input type="text w-full" />
            <MagnifyingGlassIcon className="absolute right-2 h-6 w-6" />
          </div>
        </div>
      </nav>
      <div className="mx-auto flex w-full max-w-[1330px] flex-wrap justify-center gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
