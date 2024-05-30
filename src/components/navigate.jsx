export default function Navigate({ url, children }) {
  return (
    <a href={url} className="text-white hover:underline font-semibold">
      {children}
    </a>
  );
}
