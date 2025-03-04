export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-4xl font-bold">Jagadish G</h2>
          <p className="mt-3 text-gray-400">
            Subscribe to the ****** to get some updates related to *****, *****,
            and more.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Website
          </a>
          <a href="#" className="font-semibold hover:underline">
            Contact
          </a>
        </div>

        <div>
          <p className="text-gray-400">
            Just feel free to contact if you wanna collaborate with me, or
            simply have a conversation.
          </p>
          <p className="font-bold text-lg mt-2">
            jagadishgollapalli24@gmail.com
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        ©2024 Jagadish.
        <a href="#" className="text-gray-300 hover:underline ml-1">
          Austin,TX
        </a>
        . United States Of America
        <a href="#" className="text-gray-300 hover:underline ml-1">
          78753
        </a>
        .
      </div>
    </footer>
  );
}
