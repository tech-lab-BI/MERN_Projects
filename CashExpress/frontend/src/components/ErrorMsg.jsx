function ErrorMsg({ msg }) {
  if (!msg || msg.length === 0) return null;
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl shadow-sm text-left">
      <div className="flex items-start">
        <div className="shrink-0">
          <svg
            className="h-5 w-5 text-red-500 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <ul className="list-disc space-y-1 pl-5 text-sm text-red-700">
            {msg.map((item, index) => (
              <li key={index} className="font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ErrorMsg;
