import { FaGithub, FaLink } from 'react-icons/fa';

export default function ProjectsCard({ img, url, title, text, github }) {
  return (
    <article className="flex flex-col justify-between rounded-lg shadow-md hover:shadow-2xl duration-300 bg-white">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-6">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
      </div>
      <div className="w-full p-4 flex justify-end gap-x-4">
        <a href={github} className="link-btn">
          <FaGithub />
          <p>Repo</p>
        </a>
        <a href={url} className="link-btn">
          <FaLink />
          <p>Demo</p>
        </a>
      </div>
    </article>
  );
}
