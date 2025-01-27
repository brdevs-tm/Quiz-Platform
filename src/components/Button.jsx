// src/components/Button.jsx

export default function Button({ label, onClick, href, className }) {
  const baseClass =
    "bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-300";
  const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {label}
    </button>
  );
}
